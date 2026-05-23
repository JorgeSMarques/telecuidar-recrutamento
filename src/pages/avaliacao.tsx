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
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
import { ConditionalField } from '@/components/ui/dynamic-form'

import { CandidatoAvaliacao } from '@/types'
import { avaliacaoService } from '@/services/avaliacao-service'
import { cn } from '@/lib/utils'

const getBadgeStyles = (status: string) => {
  switch (status) {
    case 'Formulário Recebido':
    case 'Aguardando Avaliação':
      return 'bg-ring/20 text-foreground border-transparent'
    case 'Busca Web Concluída':
    case 'Avaliação Recebida':
    case 'Avaliação Concluída':
      return 'bg-primary/20 text-primary border-transparent'
    case 'Aprovado':
      return 'bg-primary text-primary-foreground border-transparent'
    case 'Rejeitado':
      return 'bg-destructive text-destructive-foreground border-transparent'
    case 'BLOQUEADO':
      return 'bg-destructive text-destructive-foreground font-bold border-transparent'
    default:
      return 'bg-secondary text-secondary-foreground border-transparent'
  }
}

export default function AvaliacaoPage() {
  const [candidatos, setCandidatos] = useState<CandidatoAvaliacao[]>([])
  const [loading, setLoading] = useState(true)

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [displayId, setDisplayId] = useState<string | null>(null)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [activeTab, setActiveTab] = useState('dados')

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

  const handleSelectCandidate = (id: string) => {
    if (id === displayId) return
    setSelectedId(id)
    if (displayId) {
      setIsFadingOut(true)
      setTimeout(() => {
        setIsFadingOut(false)
        setDisplayId(id)
        setActiveTab('dados')
      }, 200)
    } else {
      setDisplayId(id)
      setActiveTab('dados')
    }
  }

  useEffect(() => {
    if (displayId) {
      const draftKey = `avaliacao-draft-${displayId}`
      const saved = localStorage.getItem(draftKey)
      if (saved) {
        toast('Você tem um formulário em rascunho. Deseja continuar?', {
          action: { label: 'Continuar', onClick: () => setFormData(JSON.parse(saved)) },
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
  }, [displayId])

  useEffect(() => {
    if (!displayId) return
    const draftKey = `avaliacao-draft-${displayId}`
    const timer = setTimeout(() => {
      if (formData.justificativa || formData.notaValores || formData.notaCompetencia) {
        localStorage.setItem(draftKey, JSON.stringify(formData))
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [formData, displayId])

  const filteredCandidatos = candidatos.filter((c) => {
    if (filterStatus !== 'todos' && c.status !== filterStatus) return false
    if (filterData !== 'todos') {
      const days = parseInt(filterData)
      const threshold = subDays(new Date(), days)
      if (new Date(c.data) < threshold) return false
    }
    return true
  })

  const selectedCandidato = candidatos.find((c) => c.id === displayId)

  const isJustificativaRequerida = formData.recomendacao === 'Não recomendo'
  const isJustificativaValid = isJustificativaRequerida
    ? formData.justificativa.length >= 10 && formData.justificativa.length <= 300
    : formData.justificativa.length <= 500

  const isValid =
    formData.notaValores &&
    formData.notaCompetencia &&
    isJustificativaValid &&
    formData.recomendacao &&
    (!isJustificativaRequerida || formData.justificativa.length > 0)

  const handleSubmit = async () => {
    if (!displayId || !isValid) return
    try {
      await avaliacaoService.enviarAvaliacao(displayId, formData)
      toast.success('Avaliação enviada com sucesso!')

      setCandidatos((prev) =>
        prev.map((c) => (c.id === displayId ? { ...c, status: 'Avaliação Concluída' } : c)),
      )
      localStorage.removeItem(`avaliacao-draft-${displayId}`)

      setTimeout(() => {
        setCandidatos((prev) => prev.filter((c) => c.id !== displayId))
        setDisplayId(null)
        setSelectedId(null)
      }, 1000)
    } catch (error) {
      toast.error('Erro ao enviar avaliação')
    }
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[2rem] font-bold tracking-tight">Avaliação de RH</h1>
          <p className="text-sm text-muted-foreground mt-1">Avalie candidatos pendentes</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[180px] min-h-[44px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Status</SelectItem>
              <SelectItem value="Formulário Recebido">Formulário Recebido</SelectItem>
              <SelectItem value="Aguardando Avaliação">Aguardando Avaliação</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterData} onValueChange={setFilterData}>
            <SelectTrigger className="w-[150px] min-h-[44px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todo período</SelectItem>
              <SelectItem value="7">Últimos 7 dias</SelectItem>
              <SelectItem value="30">Últimos 30 dias</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            onClick={loadData}
            title="Atualizar"
            className="min-h-[44px] min-w-[44px]"
          >
            <RotateCw className={cn('h-5 w-5', loading && 'animate-spin')} />
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 relative flex-1">
        <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col gap-4">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-28 w-full rounded-xl" />
            ))
          ) : filteredCandidatos.length === 0 ? (
            <div className="text-center p-8 text-muted-foreground flex flex-col items-center border rounded-xl bg-muted/20">
              <Search className="h-8 w-8 mb-3 opacity-50" />
              <p>Nenhum candidato aguardando avaliação</p>
            </div>
          ) : (
            filteredCandidatos.map((c) => (
              <Card
                key={c.id}
                className={cn(
                  'cursor-pointer transition-all duration-200 hover:border-primary focus-visible:ring-2 focus-visible:ring-ring outline-none',
                  selectedId === c.id
                    ? 'border-l-4 border-l-primary border-primary bg-muted/50'
                    : 'border-border',
                )}
                onClick={() => handleSelectCandidate(c.id)}
                tabIndex={0}
                aria-current={selectedId === c.id ? 'true' : 'false'}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleSelectCandidate(c.id)
                  }
                }}
              >
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col gap-1">
                      <CardTitle className="text-base font-semibold leading-tight">
                        {c.nome}
                      </CardTitle>
                      <CardDescription className="text-sm opacity-70">
                        {c.especialidade}
                      </CardDescription>
                      <div className="flex items-center gap-1 text-xs opacity-60 mt-1">
                        <CalendarIcon className="h-3.5 w-3.5" />
                        {format(new Date(c.data), "dd 'de' MMM, yyyy", { locale: ptBR })}
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        'whitespace-nowrap transition-colors duration-300',
                        getBadgeStyles(c.status),
                      )}
                    >
                      {c.status}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </div>

        <div className="w-full md:w-[60%] lg:w-[65%] md:sticky md:top-24 md:max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border bg-card shadow-sm relative">
          {!selectedCandidato && !isFadingOut ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-muted-foreground p-8 text-center animate-fade-in">
              <AlertCircle className="h-12 w-12 mb-4 opacity-20" />
              <p>Selecione um candidato na lista para realizar a avaliação</p>
            </div>
          ) : (
            <div
              className={cn(
                'p-4 sm:p-6 lg:p-8 space-y-8 transition-opacity duration-200',
                isFadingOut ? 'opacity-0' : 'opacity-100 animate-fade-in',
              )}
              style={{ animationDuration: '300ms' }}
            >
              {selectedCandidato && (
                <>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <h2 className="text-[2rem] font-bold tracking-tight leading-tight">
                        {selectedCandidato.nome}
                      </h2>
                      <p className="text-muted-foreground text-lg mt-1">
                        {selectedCandidato.especialidade}
                      </p>
                    </div>
                    {selectedCandidato.buscaWeb.bloqueado && (
                      <Badge
                        className={cn(
                          'px-3 py-1.5 self-start sm:self-auto text-sm',
                          getBadgeStyles('BLOQUEADO'),
                        )}
                      >
                        BLOQUEADO
                      </Badge>
                    )}
                  </div>

                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger value="dados" className="flex-1">
                        Dados Pessoais
                      </TabsTrigger>
                      <TabsTrigger value="form" className="flex-1">
                        Formulário
                      </TabsTrigger>
                      <TabsTrigger value="web" className="flex-1">
                        Busca Web
                      </TabsTrigger>
                      <TabsTrigger value="avaliacao" className="flex-1">
                        Avaliação RH
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="dados" className="space-y-6 mt-6 animate-tab-fade-in">
                      <section>
                        <legend className="text-base font-semibold mb-4">
                          Informações de Contato
                        </legend>
                        <div className="grid gap-6 sm:grid-cols-2 bg-muted/20 p-6 rounded-xl border">
                          <div>
                            <Label className="text-xs text-muted-foreground">Email</Label>
                            <p className="font-medium mt-1">
                              {selectedCandidato.dadosPessoais.email}
                            </p>
                          </div>
                          <div>
                            <Label className="text-xs text-muted-foreground">Telefone</Label>
                            <p className="font-medium mt-1">
                              {selectedCandidato.dadosPessoais.telefone}
                            </p>
                          </div>
                        </div>
                      </section>
                      <section>
                        <legend className="text-base font-semibold mb-4">
                          Experiência Profissional
                        </legend>
                        <div className="bg-muted/20 p-6 rounded-xl border">
                          <p className="font-medium leading-relaxed">
                            {selectedCandidato.dadosPessoais.experiencia}
                          </p>
                        </div>
                      </section>
                    </TabsContent>

                    <TabsContent value="form" className="space-y-8 mt-6 animate-tab-fade-in">
                      <section>
                        <legend className="text-base font-semibold mb-4">
                          Autoavaliação de Valores
                        </legend>
                        <div className="space-y-3">
                          {Object.entries(selectedCandidato.formulario.valores).map(
                            ([key, val]) => (
                              <div
                                key={key}
                                className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0"
                              >
                                <span className="font-medium text-sm">{key}</span>
                                <Badge
                                  variant="secondary"
                                  className="px-3 py-1 bg-secondary text-secondary-foreground"
                                >
                                  {val as React.ReactNode} / 10
                                </Badge>
                              </div>
                            ),
                          )}
                        </div>
                      </section>
                      <section>
                        <legend className="text-base font-semibold mb-4">Respostas Abertas</legend>
                        <div className="space-y-6">
                          {Object.entries(selectedCandidato.formulario.respostas).map(
                            ([key, val]) => (
                              <div key={key} className="space-y-2">
                                <Label className="font-medium text-sm">{key}</Label>
                                <p className="text-sm text-foreground bg-muted/30 p-4 rounded-xl border leading-relaxed">
                                  {val as React.ReactNode}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      </section>
                    </TabsContent>

                    <TabsContent value="web" className="mt-6 animate-tab-fade-in">
                      <section>
                        <div className="flex items-center justify-between mb-4">
                          <legend className="text-base font-semibold">
                            Resultados da Busca Automatizada
                          </legend>
                          <Badge
                            variant="outline"
                            className={cn(
                              selectedCandidato.buscaWeb.status === 'Concluída'
                                ? getBadgeStyles('Busca Web Concluída')
                                : getBadgeStyles('Formulário Recebido'),
                            )}
                          >
                            {selectedCandidato.buscaWeb.status}
                          </Badge>
                        </div>
                        <div
                          className={cn(
                            'p-6 rounded-xl border',
                            selectedCandidato.buscaWeb.bloqueado
                              ? 'border-destructive bg-destructive/5'
                              : 'bg-muted/20',
                          )}
                        >
                          {selectedCandidato.buscaWeb.ocorrencias &&
                          selectedCandidato.buscaWeb.ocorrencias.length > 0 ? (
                            <ul className="space-y-3">
                              {selectedCandidato.buscaWeb.ocorrencias.map((oc, i) => (
                                <li
                                  key={i}
                                  className="flex gap-3 items-start text-sm text-destructive p-4 rounded-lg bg-background border border-destructive/20 shadow-sm"
                                >
                                  <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                                  <span className="font-medium">{oc}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="flex items-center gap-3 text-sm text-primary p-4 rounded-lg bg-background border border-primary/20 shadow-sm">
                              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                              <span className="font-medium">
                                Nenhuma ocorrência desabonadora encontrada nas fontes pesquisadas.
                              </span>
                            </div>
                          )}
                        </div>
                      </section>
                    </TabsContent>

                    <TabsContent value="avaliacao" className="mt-6 animate-tab-fade-in">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault()
                          handleSubmit()
                        }}
                      >
                        <div className="mb-6">
                          <legend className="text-base font-semibold">
                            Formulário de Avaliação RH
                          </legend>
                          <p className="text-sm text-muted-foreground mt-1">
                            Preencha com critério. Os dados serão enviados ao Diretor Técnico.
                          </p>
                        </div>

                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <fieldset className="space-y-2">
                              <Label htmlFor="notaValores" className="font-medium">
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
                                className="min-h-[44px]"
                              />
                            </fieldset>
                            <fieldset className="space-y-2">
                              <Label htmlFor="notaCompetencia" className="font-medium">
                                Competência Técnica (0-10){' '}
                                <span className="text-destructive">*</span>
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
                                className="min-h-[44px]"
                              />
                            </fieldset>
                          </div>

                          <fieldset className="space-y-2">
                            <Label htmlFor="recomendacao" className="font-medium">
                              Recomendação Final <span className="text-destructive">*</span>
                            </Label>
                            <Select
                              value={formData.recomendacao}
                              onValueChange={(val) =>
                                setFormData((p) => ({ ...p, recomendacao: val }))
                              }
                            >
                              <SelectTrigger
                                id="recomendacao"
                                aria-required="true"
                                className="min-h-[44px]"
                              >
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

                          <ConditionalField show={formData.recomendacao === 'Não recomendo'}>
                            <fieldset className="space-y-2 animate-fade-in">
                              <Label htmlFor="justificativa" className="font-medium block">
                                Justificativa Obrigatória{' '}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Textarea
                                id="justificativa"
                                placeholder="Descreva detalhadamente o motivo da não recomendação..."
                                maxLength={300}
                                value={formData.justificativa}
                                onChange={(e) =>
                                  setFormData((p) => ({ ...p, justificativa: e.target.value }))
                                }
                                aria-required="true"
                                aria-invalid={
                                  formData.justificativa.length > 0 && !isJustificativaValid
                                }
                                aria-describedby={
                                  formData.justificativa.length > 0 && !isJustificativaValid
                                    ? 'justificativa-error'
                                    : undefined
                                }
                                className={
                                  formData.justificativa.length > 0 && !isJustificativaValid
                                    ? 'border-destructive focus-visible:ring-destructive'
                                    : ''
                                }
                              />
                              <div className="flex justify-between items-start mt-1 h-5">
                                {formData.justificativa.length > 0 && !isJustificativaValid ? (
                                  <span
                                    id="justificativa-error"
                                    className="text-destructive text-xs font-medium animate-fade-in"
                                  >
                                    Mínimo de 10 caracteres.
                                  </span>
                                ) : (
                                  <span />
                                )}
                                <span
                                  className={cn(
                                    'text-xs font-medium transition-colors w-full text-right block',
                                    formData.justificativa.length >= 300
                                      ? 'text-destructive'
                                      : formData.justificativa.length >= 240
                                        ? 'text-ring'
                                        : 'opacity-60',
                                  )}
                                >
                                  {formData.justificativa.length}/300
                                </span>
                              </div>
                            </fieldset>
                          </ConditionalField>

                          <ConditionalField
                            show={
                              formData.recomendacao !== 'Não recomendo' &&
                              formData.recomendacao !== ''
                            }
                          >
                            <fieldset className="space-y-2 animate-fade-in">
                              <Label htmlFor="justificativa" className="font-medium block">
                                Justificativa Detalhada (Opcional)
                              </Label>
                              <Textarea
                                id="justificativa"
                                placeholder="Detalhes adicionais sobre as notas atribuídas..."
                                maxLength={500}
                                value={formData.justificativa}
                                onChange={(e) =>
                                  setFormData((p) => ({ ...p, justificativa: e.target.value }))
                                }
                                aria-required="false"
                                aria-invalid={
                                  formData.justificativa.length > 0 && !isJustificativaValid
                                }
                              />
                              <div className="flex justify-end items-start mt-1 h-5">
                                <span
                                  className={cn(
                                    'text-xs font-medium transition-colors',
                                    formData.justificativa.length >= 500
                                      ? 'text-destructive'
                                      : formData.justificativa.length >= 400
                                        ? 'text-ring'
                                        : 'opacity-60',
                                  )}
                                >
                                  {formData.justificativa.length}/500
                                </span>
                              </div>
                            </fieldset>
                          </ConditionalField>
                        </div>

                        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-end gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setDisplayId(null)
                              setSelectedId(null)
                            }}
                            className="w-full sm:w-auto min-h-[44px]"
                          >
                            Cancelar Avaliação
                          </Button>
                          <Button
                            type="submit"
                            disabled={!isValid}
                            className={cn(
                              'w-full sm:w-auto min-h-[44px] transition-colors',
                              isValid ? 'bg-green-600 hover:bg-green-700 text-white' : '',
                            )}
                          >
                            Enviar ao Diretor Técnico
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
