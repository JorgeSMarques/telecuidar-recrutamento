import { useState, useEffect } from 'react'
import {
  RotateCw,
  Search,
  Calendar as CalendarIcon,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
} from 'lucide-react'
import { format, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { toast } from 'sonner'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'

import { CandidatoAvaliacao } from '@/types'
import { avaliacaoService } from '@/services/avaliacao-service'
import { cn } from '@/lib/utils'

export default function AvaliacaoPage() {
  const [candidatos, setCandidatos] = useState<CandidatoAvaliacao[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const [filterStatus, setFilterStatus] = useState<string>('todos')
  const [filterData, setFilterData] = useState<string>('todos')

  const [formData, setFormData] = useState({
    notaValores: '',
    notaCompetencia: '',
    justificativa: '',
    recomendacao: '',
  })

  const loadData = async () => {
    setLoading(true)
    try {
      const data = await avaliacaoService.getCandidatos()
      setCandidatos(data)
    } catch (error) {
      toast.error('Erro ao carregar candidatos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (selectedId) {
      const draftKey = `avaliacao-draft-${selectedId}`
      const saved = localStorage.getItem(draftKey)
      if (saved) {
        toast('Você tem um formulário em rascunho. Deseja continuar?', {
          action: {
            label: 'Continuar',
            onClick: () => setFormData(JSON.parse(saved)),
          },
          cancel: {
            label: 'Descartar',
            onClick: () => {
              localStorage.removeItem(draftKey)
              setFormData({
                notaValores: '',
                notaCompetencia: '',
                justificativa: '',
                recomendacao: '',
              })
            },
          },
          duration: 10000,
        })
      } else {
        setFormData({ notaValores: '', notaCompetencia: '', justificativa: '', recomendacao: '' })
      }
    }
  }, [selectedId])

  useEffect(() => {
    if (!selectedId) return
    const draftKey = `avaliacao-draft-${selectedId}`
    const timer = setTimeout(() => {
      if (formData.justificativa || formData.notaValores || formData.notaCompetencia) {
        localStorage.setItem(draftKey, JSON.stringify(formData))
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [formData, selectedId])

  const filteredCandidatos = candidatos.filter((c) => {
    if (filterStatus !== 'todos' && c.status !== filterStatus) return false

    if (filterData !== 'todos') {
      const days = parseInt(filterData)
      const threshold = subDays(new Date(), days)
      if (new Date(c.data) < threshold) return false
    }

    return true
  })

  const selectedCandidato = candidatos.find((c) => c.id === selectedId)
  const isValid =
    formData.notaValores &&
    formData.notaCompetencia &&
    formData.justificativa.length >= 10 &&
    formData.recomendacao

  const handleSubmit = async () => {
    if (!selectedId || !isValid) return
    try {
      await avaliacaoService.enviarAvaliacao(selectedId, formData)
      toast.success('Avaliação enviada com sucesso!')
      localStorage.removeItem(`avaliacao-draft-${selectedId}`)
      setSelectedId(null)
      loadData()
    } catch (error) {
      toast.error('Erro ao enviar avaliação')
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="flex-none p-4 sm:px-6 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-background">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Avaliação de RH</h1>
          <p className="text-sm text-muted-foreground">Avalie candidatos pendentes</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Status</SelectItem>
              <SelectItem value="Formulário Recebido">Formulário Recebido</SelectItem>
              <SelectItem value="Aguardando Avaliação">Aguardando Avaliação</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterData} onValueChange={setFilterData}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todo período</SelectItem>
              <SelectItem value="7">Últimos 7 dias</SelectItem>
              <SelectItem value="30">Últimos 30 dias</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={loadData} title="Atualizar">
            <RotateCw className={cn('h-4 w-4', loading && 'animate-spin')} />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* List */}
        <div className="w-full md:w-[40%] lg:w-[35%] border-r overflow-y-auto bg-muted/20">
          <div className="p-4 space-y-3">
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <Card key={i} className="p-4">
                  <Skeleton className="h-16 w-full" />
                </Card>
              ))
            ) : filteredCandidatos.length === 0 ? (
              <div className="text-center p-8 text-muted-foreground">
                <Search className="mx-auto h-8 w-8 mb-3 opacity-50" />
                <p>Nenhum candidato aguardando avaliação</p>
              </div>
            ) : (
              filteredCandidatos.map((c) => (
                <Card
                  key={c.id}
                  className={cn(
                    'cursor-pointer transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring outline-none',
                    selectedId === c.id ? 'border-l-4 border-l-primary shadow-sm' : '',
                  )}
                  onClick={() => setSelectedId(c.id)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedId(c.id)
                    }
                  }}
                >
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <CardTitle className="text-base leading-none mb-1">{c.nome}</CardTitle>
                        <CardDescription className="text-xs line-clamp-1">
                          {c.especialidade}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[10px] whitespace-nowrap bg-background"
                      >
                        {c.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-3">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {format(new Date(c.data), "dd 'de' MMM, yyyy", { locale: ptBR })}
                    </div>
                  </CardHeader>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-[60%] lg:w-[65%] overflow-y-auto bg-background">
          {!selectedCandidato ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-8 text-center">
              <AlertCircle className="h-12 w-12 mb-4 opacity-20" />
              <p>Selecione um candidato na lista para realizar a avaliação</p>
            </div>
          ) : (
            <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">{selectedCandidato.nome}</h2>
                  <p className="text-muted-foreground text-lg">{selectedCandidato.especialidade}</p>
                </div>
                {selectedCandidato.buscaWeb.bloqueado && (
                  <Badge
                    variant="destructive"
                    className="text-sm px-3 py-1 self-start sm:self-auto"
                  >
                    BLOQUEADO
                  </Badge>
                )}
              </div>

              <Tabs defaultValue="avaliacao" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
                  <TabsTrigger value="dados" className="py-2">
                    Dados Pessoais
                  </TabsTrigger>
                  <TabsTrigger value="form" className="py-2">
                    Formulário
                  </TabsTrigger>
                  <TabsTrigger value="web" className="py-2">
                    Busca Web
                  </TabsTrigger>
                  <TabsTrigger value="avaliacao" className="py-2">
                    Avaliação RH
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="dados" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Informações de Contato e Experiência</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label className="text-muted-foreground text-xs">Email</Label>
                        <p className="font-medium mt-1">{selectedCandidato.dadosPessoais.email}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground text-xs">Telefone</Label>
                        <p className="font-medium mt-1">
                          {selectedCandidato.dadosPessoais.telefone}
                        </p>
                      </div>
                      <div className="sm:col-span-2">
                        <Label className="text-muted-foreground text-xs">
                          Experiência Profissional
                        </Label>
                        <p className="font-medium mt-1">
                          {selectedCandidato.dadosPessoais.experiencia}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="form" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Autoavaliação de Valores</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(selectedCandidato.formulario.valores).map(([key, val]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0"
                        >
                          <span className="font-medium">{key}</span>
                          <Badge variant="secondary" className="text-sm">
                            {val} / 10
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Respostas Abertas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(selectedCandidato.formulario.respostas).map(([key, val]) => (
                        <div key={key} className="space-y-2">
                          <Label className="font-semibold text-sm">{key}</Label>
                          <p className="text-sm text-foreground bg-muted/50 p-3 rounded-md border">
                            {val}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="web" className="mt-4">
                  <Card
                    className={
                      selectedCandidato.buscaWeb.bloqueado ? 'border-destructive shadow-sm' : ''
                    }
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Resultados da Busca Automatizada
                        {selectedCandidato.buscaWeb.status === 'Concluída' ? (
                          <Badge
                            variant="outline"
                            className="bg-green-500/10 text-green-600 border-green-200"
                          >
                            Concluída
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-yellow-500/10 text-yellow-600 border-yellow-200"
                          >
                            Pendente
                          </Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {selectedCandidato.buscaWeb.ocorrencias &&
                      selectedCandidato.buscaWeb.ocorrencias.length > 0 ? (
                        <ul className="space-y-2">
                          {selectedCandidato.buscaWeb.ocorrencias.map((oc, i) => (
                            <li
                              key={i}
                              className="flex gap-2 items-start text-sm bg-destructive/10 text-destructive p-3 rounded-md border border-destructive/20"
                            >
                              <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>{oc}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted p-4 rounded-md border">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          Nenhuma ocorrência desabonadora encontrada nas fontes pesquisadas.
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="avaliacao" className="mt-4">
                  <Card>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                      }}
                    >
                      <CardHeader>
                        <CardTitle>Formulário de Avaliação RH</CardTitle>
                        <CardDescription>
                          Preencha com critério. Os dados serão enviados ao Diretor Técnico.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <fieldset className="space-y-2">
                            <Label htmlFor="notaValores" className="font-semibold">
                              Alinhamento com Valores (0-10){' '}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="notaValores"
                              type="number"
                              min="0"
                              max="10"
                              step="0.5"
                              placeholder="Ex: 8.5"
                              value={formData.notaValores}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, notaValores: e.target.value }))
                              }
                              aria-required="true"
                            />
                          </fieldset>
                          <fieldset className="space-y-2">
                            <Label htmlFor="notaCompetencia" className="font-semibold">
                              Competência Técnica (0-10) <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="notaCompetencia"
                              type="number"
                              min="0"
                              max="10"
                              step="0.5"
                              placeholder="Ex: 9.0"
                              value={formData.notaCompetencia}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, notaCompetencia: e.target.value }))
                              }
                              aria-required="true"
                            />
                          </fieldset>
                        </div>

                        <fieldset className="space-y-2">
                          <Label htmlFor="recomendacao" className="font-semibold">
                            Recomendação Final <span className="text-destructive">*</span>
                          </Label>
                          <Select
                            value={formData.recomendacao}
                            onValueChange={(val) =>
                              setFormData((p) => ({ ...p, recomendacao: val }))
                            }
                          >
                            <SelectTrigger id="recomendacao" aria-required="true">
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Recomendo fortemente">
                                Recomendo fortemente
                              </SelectItem>
                              <SelectItem value="Recomendo com ressalvas">
                                Recomendo com ressalvas
                              </SelectItem>
                              <SelectItem value="Não recomendo">Não recomendo</SelectItem>
                            </SelectContent>
                          </Select>
                        </fieldset>

                        <fieldset className="space-y-2">
                          <Label
                            htmlFor="justificativa"
                            className="font-semibold flex justify-between"
                          >
                            <span>
                              Justificativa Detalhada <span className="text-destructive">*</span>
                            </span>
                            <span className="text-xs font-normal text-muted-foreground">
                              {formData.justificativa.length}/500 max
                            </span>
                          </Label>
                          <Textarea
                            id="justificativa"
                            placeholder="Detalhes sobre a recomendação e as notas atribuídas... (Mínimo de 10 caracteres)"
                            className="min-h-[120px]"
                            maxLength={500}
                            value={formData.justificativa}
                            onChange={(e) =>
                              setFormData((p) => ({ ...p, justificativa: e.target.value }))
                            }
                            aria-required="true"
                          />
                        </fieldset>
                      </CardContent>
                      <CardFooter className="bg-muted/30 py-4 flex flex-col sm:flex-row justify-end gap-3 border-t">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setSelectedId(null)}
                          className="w-full sm:w-auto"
                        >
                          Cancelar Avaliação
                        </Button>
                        <Button type="submit" disabled={!isValid} className="w-full sm:w-auto">
                          Enviar ao Diretor Técnico
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
