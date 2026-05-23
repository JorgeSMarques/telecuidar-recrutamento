import { useState, useEffect } from 'react'
import { RotateCw, Search, Calendar as CalendarIcon, AlertCircle, Clock, Video } from 'lucide-react'
import { format, addDays } from 'date-fns'
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'

import { CandidatoAprovacao } from '@/types'
import { aprovacaoService } from '@/services/aprovacao-service'
import { cn } from '@/lib/utils'

export default function AprovacaoPage() {
  const [candidatos, setCandidatos] = useState<CandidatoAprovacao[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    decisao: '',
    justificativa: '',
    agendamentoData: '',
    agendamentoHora: '',
    agendamentoEmail: '',
    notificarCalendar: true,
    notificarWhatsapp: true,
  })

  const loadData = async () => {
    setLoading(true)
    try {
      const data = await aprovacaoService.getCandidatos()
      setCandidatos(data)
    } catch (error) {
      toast.error('Erro ao carregar candidatos para aprovação')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const selectedCandidato = candidatos.find((c) => c.id === selectedId)

  useEffect(() => {
    if (selectedCandidato && !formData.agendamentoEmail) {
      setFormData((prev) => ({ ...prev, agendamentoEmail: selectedCandidato.dadosPessoais.email }))
    }
  }, [selectedCandidato, formData.agendamentoEmail])

  useEffect(() => {
    if (selectedId) {
      const draftKey = `aprovacao-draft-${selectedId}`
      const saved = localStorage.getItem(draftKey)
      if (saved) {
        toast('Você tem um formulário de decisão em rascunho. Deseja continuar?', {
          action: {
            label: 'Continuar',
            onClick: () => setFormData(JSON.parse(saved)),
          },
          cancel: {
            label: 'Descartar',
            onClick: () => {
              localStorage.removeItem(draftKey)
              setFormData({
                decisao: '',
                justificativa: '',
                agendamentoData: '',
                agendamentoHora: '',
                agendamentoEmail: selectedCandidato?.dadosPessoais.email || '',
                notificarCalendar: true,
                notificarWhatsapp: true,
              })
            },
          },
          duration: 10000,
        })
      } else {
        setFormData({
          decisao: '',
          justificativa: '',
          agendamentoData: '',
          agendamentoHora: '',
          agendamentoEmail: selectedCandidato?.dadosPessoais.email || '',
          notificarCalendar: true,
          notificarWhatsapp: true,
        })
      }
    }
  }, [selectedId, selectedCandidato])

  useEffect(() => {
    if (!selectedId) return
    const draftKey = `aprovacao-draft-${selectedId}`
    const timer = setTimeout(() => {
      if (formData.decisao || formData.justificativa) {
        localStorage.setItem(draftKey, JSON.stringify(formData))
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [formData, selectedId])

  const validateForm = () => {
    if (!formData.decisao) return false
    if (formData.justificativa.length < 5) return false
    if (formData.decisao === 'aprovar') {
      if (!formData.agendamentoData || !formData.agendamentoHora || !formData.agendamentoEmail)
        return false
    }
    return true
  }

  const handleSubmit = async () => {
    if (!selectedId || !validateForm()) return
    try {
      await aprovacaoService.enviarAprovacao(selectedId, formData)
      toast.success(
        formData.decisao === 'aprovar'
          ? 'Candidato aprovado e entrevista agendada com sucesso!'
          : 'Candidato rejeitado.',
      )
      localStorage.removeItem(`aprovacao-draft-${selectedId}`)
      setSelectedId(null)
      loadData()
    } catch (error) {
      toast.error('Erro ao enviar decisão')
    }
  }

  const today = format(new Date(), 'yyyy-MM-dd')
  const maxDate = format(addDays(new Date(), 14), 'yyyy-MM-dd')

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="flex-none p-4 sm:px-6 border-b flex justify-between items-center bg-background">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Aprovação Final</h1>
          <p className="text-sm text-muted-foreground">Revisão Diretor Técnico e Agendamento</p>
        </div>
        <Button variant="outline" size="icon" onClick={loadData} title="Atualizar lista">
          <RotateCw className={cn('h-4 w-4', loading && 'animate-spin')} />
        </Button>
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
            ) : candidatos.length === 0 ? (
              <div className="text-center p-8 text-muted-foreground">
                <Search className="mx-auto h-8 w-8 mb-3 opacity-50" />
                <p>Nenhum candidato aguardando aprovação no momento</p>
              </div>
            ) : (
              candidatos.map((c) => (
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
                        className="text-[10px] whitespace-nowrap bg-primary/10 text-primary border-primary/20"
                      >
                        {c.status}
                      </Badge>
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
              <p>Selecione um candidato na lista para revisar e tomar a decisão final</p>
            </div>
          ) : (
            <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">{selectedCandidato.nome}</h2>
                <p className="text-muted-foreground text-lg">{selectedCandidato.especialidade}</p>
              </div>

              <Tabs defaultValue="revisao" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-auto">
                  <TabsTrigger value="revisao" className="py-2">
                    Revisão RH
                  </TabsTrigger>
                  <TabsTrigger value="decisao" className="py-2">
                    Decisão e Agendamento
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="revisao" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Avaliação do RH</CardTitle>
                      <CardDescription>
                        Parecer emitido pela equipe de Recrutamento & Seleção
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 bg-muted/40 border rounded-lg text-center">
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            Alinhamento de Valores
                          </p>
                          <p className="text-4xl font-bold text-primary">
                            {selectedCandidato.avaliacaoRh.notaValores.toFixed(1)}
                          </p>
                        </div>
                        <div className="p-5 bg-muted/40 border rounded-lg text-center">
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            Competência Técnica
                          </p>
                          <p className="text-4xl font-bold text-primary">
                            {selectedCandidato.avaliacaoRh.notaCompetencia.toFixed(1)}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-semibold text-base">Recomendação do RH</Label>
                        <div>
                          <Badge variant="secondary" className="text-sm py-1 px-3">
                            {selectedCandidato.avaliacaoRh.recomendacao}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-semibold text-base">
                          Justificativa do Avaliador
                        </Label>
                        <p className="text-sm text-foreground bg-accent/30 p-4 rounded-md border leading-relaxed">
                          {selectedCandidato.avaliacaoRh.justificativa}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="decisao" className="mt-4">
                  <Card>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                      }}
                    >
                      <CardHeader>
                        <CardTitle>Decisão Final do Diretor</CardTitle>
                        <CardDescription>
                          Aprove o candidato para a entrevista final ou encerre o processo.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <fieldset className="space-y-4">
                          <legend className="font-semibold text-sm sr-only">
                            Escolha uma decisão
                          </legend>
                          <RadioGroup
                            value={formData.decisao}
                            onValueChange={(val) => setFormData((p) => ({ ...p, decisao: val }))}
                            className="flex flex-col sm:flex-row gap-4"
                            aria-required="true"
                          >
                            <div className="flex items-center space-x-3 border-2 p-4 rounded-lg flex-1 cursor-pointer has-[:checked]:bg-primary/5 has-[:checked]:border-primary transition-all">
                              <RadioGroupItem value="aprovar" id="aprovar" />
                              <Label
                                htmlFor="aprovar"
                                className="cursor-pointer font-semibold text-base flex-1"
                              >
                                Aprovar para Entrevista
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3 border-2 p-4 rounded-lg flex-1 cursor-pointer has-[:checked]:bg-destructive/5 has-[:checked]:border-destructive transition-all">
                              <RadioGroupItem value="rejeitar" id="rejeitar" />
                              <Label
                                htmlFor="rejeitar"
                                className="cursor-pointer font-semibold text-base text-destructive flex-1"
                              >
                                Rejeitar Candidato
                              </Label>
                            </div>
                          </RadioGroup>
                        </fieldset>

                        {formData.decisao === 'aprovar' && (
                          <div className="animate-in fade-in slide-in-from-top-2 duration-300 space-y-5 p-5 border-2 border-muted bg-muted/10 rounded-xl">
                            <h3 className="font-semibold flex items-center gap-2 text-primary">
                              <Video className="h-5 w-5" /> Agendamento da Entrevista Técnica
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <div className="space-y-2">
                                <Label htmlFor="data">
                                  Data do Encontro <span className="text-destructive">*</span>
                                </Label>
                                <div className="relative">
                                  <Input
                                    id="data"
                                    type="date"
                                    min={today}
                                    max={maxDate}
                                    value={formData.agendamentoData}
                                    onChange={(e) =>
                                      setFormData((p) => ({
                                        ...p,
                                        agendamentoData: e.target.value,
                                      }))
                                    }
                                    aria-required="true"
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="hora">
                                  Horário <span className="text-destructive">*</span>
                                </Label>
                                <div className="relative">
                                  <Input
                                    id="hora"
                                    type="time"
                                    value={formData.agendamentoHora}
                                    onChange={(e) =>
                                      setFormData((p) => ({
                                        ...p,
                                        agendamentoHora: e.target.value,
                                      }))
                                    }
                                    aria-required="true"
                                  />
                                  <Clock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                                </div>
                              </div>
                              <div className="space-y-2 sm:col-span-2">
                                <Label htmlFor="email">
                                  Email do Candidato para Convite{' '}
                                  <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={formData.agendamentoEmail}
                                  onChange={(e) =>
                                    setFormData((p) => ({ ...p, agendamentoEmail: e.target.value }))
                                  }
                                  aria-required="true"
                                />
                              </div>
                            </div>

                            <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                              <Label className="text-sm font-semibold">
                                Notificações Automáticas
                              </Label>
                              <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="cal"
                                    checked={formData.notificarCalendar}
                                    onCheckedChange={(c) =>
                                      setFormData((p) => ({ ...p, notificarCalendar: c === true }))
                                    }
                                  />
                                  <Label
                                    htmlFor="cal"
                                    className="font-normal text-sm cursor-pointer"
                                  >
                                    Convite Google Calendar
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="wpp"
                                    checked={formData.notificarWhatsapp}
                                    onCheckedChange={(c) =>
                                      setFormData((p) => ({ ...p, notificarWhatsapp: c === true }))
                                    }
                                  />
                                  <Label
                                    htmlFor="wpp"
                                    className="font-normal text-sm cursor-pointer"
                                  >
                                    Notificação via WhatsApp
                                  </Label>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        <fieldset className="space-y-2">
                          <Label
                            htmlFor="justificativaFinal"
                            className="font-semibold flex justify-between"
                          >
                            <span>
                              Parecer da Decisão <span className="text-destructive">*</span>
                            </span>
                            <span className="text-xs font-normal text-muted-foreground">
                              {formData.justificativa.length}/300 max
                            </span>
                          </Label>
                          <Textarea
                            id="justificativaFinal"
                            placeholder="Descreva o motivo da aprovação para entrevista ou rejeição do perfil..."
                            className="min-h-[100px]"
                            maxLength={300}
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
                          Cancelar
                        </Button>
                        <Button
                          type="submit"
                          disabled={!validateForm()}
                          className="w-full sm:w-auto"
                        >
                          Confirmar Decisão Final
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
