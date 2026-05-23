import { useState, useEffect } from 'react'
import { RotateCw, Search, Calendar as CalendarIcon, AlertCircle, Clock, Video } from 'lucide-react'
import { format, addDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { toast } from 'sonner'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { ConditionalField, DynamicFormField } from '@/components/ui/dynamic-form'
import { validators } from '@/lib/validators'

import { CandidatoAprovacao } from '@/types'
import { aprovacaoService } from '@/services/aprovacao-service'
import { cn } from '@/lib/utils'

const getBadgeStyles = (status: string) => {
  switch (status) {
    case 'Formulário Recebido':
    case 'Aguardando Avaliação':
      return 'bg-ring/20 text-foreground border-transparent'
    case 'Busca Web Concluída':
    case 'Avaliação Recebida':
      return 'bg-primary/20 text-primary border-transparent'
    case 'Aprovado':
    case 'Recomendo fortemente':
      return 'bg-primary text-primary-foreground border-transparent'
    case 'Rejeitado':
    case 'Não recomendo':
      return 'bg-destructive text-destructive-foreground border-transparent'
    case 'BLOQUEADO':
      return 'bg-destructive text-destructive-foreground font-bold border-transparent'
    default:
      return 'bg-secondary text-secondary-foreground border-transparent'
  }
}

export default function AprovacaoPage() {
  const [candidatos, setCandidatos] = useState<CandidatoAprovacao[]>([])
  const [loading, setLoading] = useState(true)

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [displayId, setDisplayId] = useState<string | null>(null)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [activeTab, setActiveTab] = useState('revisao')

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

  const handleSelectCandidate = (id: string) => {
    if (id === displayId) return
    setSelectedId(id)
    if (displayId) {
      setIsFadingOut(true)
      setTimeout(() => {
        setIsFadingOut(false)
        setDisplayId(id)
        setActiveTab('revisao')
      }, 200)
    } else {
      setDisplayId(id)
      setActiveTab('revisao')
    }
  }

  const selectedCandidato = candidatos.find((c) => c.id === displayId)

  useEffect(() => {
    if (selectedCandidato && !formData.agendamentoEmail) {
      setFormData((prev) => ({ ...prev, agendamentoEmail: selectedCandidato.dadosPessoais.email }))
    }
  }, [selectedCandidato, formData.agendamentoEmail])

  useEffect(() => {
    if (displayId) {
      const draftKey = `aprovacao-draft-${displayId}`
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
  }, [displayId, selectedCandidato])

  useEffect(() => {
    if (!displayId) return
    const draftKey = `aprovacao-draft-${displayId}`
    const timer = setTimeout(() => {
      if (formData.decisao || formData.justificativa) {
        localStorage.setItem(draftKey, JSON.stringify(formData))
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [formData, selectedId])

  const isJustificativaValid =
    formData.decisao === 'rejeitar'
      ? formData.justificativa.length >= 5 && formData.justificativa.length <= 300
      : true

  const validateForm = () => {
    if (!formData.decisao) return false
    if (formData.decisao === 'rejeitar' && !isJustificativaValid) return false
    if (formData.decisao === 'aprovar') {
      if (!formData.agendamentoData || !formData.agendamentoHora || !formData.agendamentoEmail)
        return false
      if (!validators.email(formData.agendamentoEmail).isValid) return false
      if (!validators.minDate(formData.agendamentoData).isValid) return false
      if (!validators.time(formData.agendamentoHora).isValid) return false
    }
    return true
  }

  const handleSubmit = async () => {
    if (!displayId || !validateForm()) return
    try {
      await aprovacaoService.enviarAprovacao(displayId, formData)
      toast.success(
        formData.decisao === 'aprovar'
          ? 'Candidato aprovado e entrevista agendada com sucesso!'
          : 'Candidato rejeitado.',
      )

      const targetStatus = formData.decisao === 'aprovar' ? 'Aprovado' : 'Rejeitado'
      setCandidatos((prev) =>
        prev.map((c) => (c.id === displayId ? { ...c, status: targetStatus } : c)),
      )
      localStorage.removeItem(`aprovacao-draft-${displayId}`)

      setTimeout(() => {
        setCandidatos((prev) => prev.filter((c) => c.id !== displayId))
        setDisplayId(null)
        setSelectedId(null)
      }, 1000)
    } catch (error) {
      toast.error('Erro ao enviar decisão')
    }
  }

  const today = format(new Date(), 'yyyy-MM-dd')
  const maxDate = format(addDays(new Date(), 14), 'yyyy-MM-dd')

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[2rem] font-bold tracking-tight">Aprovação Final</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Revisão Diretor Técnico e Agendamento
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={loadData}
          title="Atualizar lista"
          className="min-h-[44px] min-w-[44px]"
        >
          <RotateCw className={cn('h-5 w-5', loading && 'animate-spin')} />
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 relative flex-1">
        {/* List */}
        <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col gap-4">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-28 w-full rounded-xl" />
            ))
          ) : candidatos.length === 0 ? (
            <div className="text-center p-8 text-muted-foreground flex flex-col items-center border rounded-xl bg-muted/20">
              <Search className="h-8 w-8 mb-3 opacity-50" />
              <p>Nenhum candidato aguardando aprovação no momento</p>
            </div>
          ) : (
            candidatos.map((c) => (
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
                    </div>
                    <Badge
                      variant="outline"
                      className={cn('whitespace-nowrap', getBadgeStyles(c.status))}
                    >
                      {c.status}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </div>

        {/* Details */}
        <div className="w-full md:w-[60%] lg:w-[65%] md:sticky md:top-24 md:max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border bg-card shadow-sm relative">
          {!selectedCandidato && !isFadingOut ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-muted-foreground p-8 text-center animate-fade-in">
              <AlertCircle className="h-12 w-12 mb-4 opacity-20" />
              <p>Selecione um candidato na lista para revisar e tomar a decisão final</p>
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
                  <div>
                    <h2 className="text-[2rem] font-bold tracking-tight leading-tight">
                      {selectedCandidato.nome}
                    </h2>
                    <p className="text-muted-foreground text-lg mt-1">
                      {selectedCandidato.especialidade}
                    </p>
                  </div>

                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger value="revisao" className="flex-1">
                        Revisão RH
                      </TabsTrigger>
                      <TabsTrigger value="decisao" className="flex-1">
                        Decisão e Agendamento
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="revisao" className="space-y-6 mt-6 animate-tab-fade-in">
                      <section>
                        <legend className="text-base font-semibold mb-4">Avaliação do RH</legend>
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 bg-muted/20 border rounded-xl text-center">
                              <p className="text-sm font-medium text-muted-foreground mb-2">
                                Alinhamento de Valores
                              </p>
                              <p className="text-[2.5rem] leading-none font-bold text-primary">
                                {selectedCandidato.avaliacaoRh.notaValores.toFixed(1)}
                              </p>
                            </div>
                            <div className="p-6 bg-muted/20 border rounded-xl text-center">
                              <p className="text-sm font-medium text-muted-foreground mb-2">
                                Competência Técnica
                              </p>
                              <p className="text-[2.5rem] leading-none font-bold text-primary">
                                {selectedCandidato.avaliacaoRh.notaCompetencia.toFixed(1)}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <Label className="font-semibold text-base">Recomendação do RH</Label>
                            <div>
                              <Badge
                                variant="outline"
                                className={cn(
                                  'text-sm px-4 py-1.5 border-transparent',
                                  getBadgeStyles(selectedCandidato.avaliacaoRh.recomendacao),
                                )}
                              >
                                {selectedCandidato.avaliacaoRh.recomendacao}
                              </Badge>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <Label className="font-semibold text-base">
                              Justificativa do Avaliador
                            </Label>
                            <p className="text-sm text-foreground bg-muted/20 p-5 rounded-xl border leading-relaxed">
                              {selectedCandidato.avaliacaoRh.justificativa}
                            </p>
                          </div>
                        </div>
                      </section>
                    </TabsContent>

                    <TabsContent value="decisao" className="mt-6 animate-tab-fade-in">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault()
                          handleSubmit()
                        }}
                      >
                        <div className="mb-6">
                          <legend className="text-base font-semibold">
                            Decisão Final do Diretor
                          </legend>
                          <p className="text-sm text-muted-foreground mt-1">
                            Aprove o candidato para a entrevista final ou encerre o processo.
                          </p>
                        </div>

                        <div className="space-y-8">
                          <fieldset className="space-y-4">
                            <legend className="font-semibold text-sm sr-only">
                              Escolha uma decisão
                            </legend>
                            <RadioGroup
                              value={formData.decisao}
                              onValueChange={(val) => setFormData((p) => ({ ...p, decisao: val }))}
                              className="flex flex-col gap-4"
                              aria-required="true"
                            >
                              <div className="flex items-center space-x-4 border-2 border-border p-5 rounded-xl flex-1 cursor-pointer has-[:checked]:bg-primary/5 has-[:checked]:border-primary transition-all duration-200">
                                <RadioGroupItem
                                  value="aprovar"
                                  id="aprovar"
                                  className="text-primary border-primary"
                                />
                                <Label
                                  htmlFor="aprovar"
                                  className="cursor-pointer font-semibold text-base flex-1"
                                >
                                  Aprovar para Entrevista
                                </Label>
                              </div>
                              <div className="flex items-center space-x-4 border-2 border-border p-5 rounded-xl flex-1 cursor-pointer has-[:checked]:bg-destructive/5 has-[:checked]:border-destructive transition-all duration-200">
                                <RadioGroupItem
                                  value="rejeitar"
                                  id="rejeitar"
                                  className="text-destructive border-destructive data-[state=checked]:border-destructive data-[state=checked]:text-destructive"
                                />
                                <Label
                                  htmlFor="rejeitar"
                                  className="cursor-pointer font-semibold text-base text-destructive flex-1"
                                >
                                  Rejeitar Candidato
                                </Label>
                              </div>
                            </RadioGroup>
                          </fieldset>

                          <ConditionalField show={formData.decisao === 'aprovar'}>
                            <div className="space-y-6 p-6 border-2 border-primary/20 bg-primary/5 rounded-xl">
                              <h3 className="font-semibold text-lg flex items-center gap-2 text-primary">
                                <Video className="h-5 w-5" /> Agendamento da Entrevista Técnica
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <DynamicFormField
                                  id="data"
                                  label="Data do Encontro"
                                  required
                                  touched={!!formData.agendamentoData}
                                  error={
                                    formData.agendamentoData &&
                                    !validators.minDate(formData.agendamentoData).isValid
                                      ? validators.minDate(formData.agendamentoData).message
                                      : undefined
                                  }
                                >
                                  <Input
                                    name="data"
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
                                    className="min-h-[44px]"
                                  />
                                </DynamicFormField>
                                <DynamicFormField
                                  id="hora"
                                  label="Horário"
                                  required
                                  touched={!!formData.agendamentoHora}
                                  error={
                                    formData.agendamentoHora &&
                                    !validators.time(formData.agendamentoHora).isValid
                                      ? validators.time(formData.agendamentoHora).message
                                      : undefined
                                  }
                                  icon={<Clock className="h-5 w-5" />}
                                >
                                  <Input
                                    name="hora"
                                    type="time"
                                    value={formData.agendamentoHora}
                                    onChange={(e) =>
                                      setFormData((p) => ({
                                        ...p,
                                        agendamentoHora: e.target.value,
                                      }))
                                    }
                                    className="min-h-[44px] pr-10"
                                  />
                                </DynamicFormField>
                                <div className="sm:col-span-2">
                                  <DynamicFormField
                                    id="email"
                                    label="Email do Candidato para Convite"
                                    required
                                    touched={!!formData.agendamentoEmail}
                                    error={
                                      formData.agendamentoEmail &&
                                      !validators.email(formData.agendamentoEmail).isValid
                                        ? validators.email(formData.agendamentoEmail).message
                                        : undefined
                                    }
                                  >
                                    <Input
                                      name="email"
                                      type="email"
                                      value={formData.agendamentoEmail}
                                      onChange={(e) =>
                                        setFormData((p) => ({
                                          ...p,
                                          agendamentoEmail: e.target.value,
                                        }))
                                      }
                                      className="min-h-[44px]"
                                    />
                                  </DynamicFormField>
                                </div>
                              </div>

                              <div className="flex flex-col gap-4 pt-6 border-t border-primary/10">
                                <Label className="text-base font-semibold">
                                  Notificações Automáticas
                                </Label>
                                <div className="flex flex-col gap-4">
                                  <div className="flex items-center space-x-3">
                                    <Checkbox
                                      id="cal"
                                      checked={formData.notificarCalendar}
                                      onCheckedChange={(c) =>
                                        setFormData((p) => ({
                                          ...p,
                                          notificarCalendar: c === true,
                                        }))
                                      }
                                    />
                                    <Label
                                      htmlFor="cal"
                                      className="font-medium text-base cursor-pointer"
                                    >
                                      Convite Google Calendar
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <Checkbox
                                      id="wpp"
                                      checked={formData.notificarWhatsapp}
                                      onCheckedChange={(c) =>
                                        setFormData((p) => ({
                                          ...p,
                                          notificarWhatsapp: c === true,
                                        }))
                                      }
                                    />
                                    <Label
                                      htmlFor="wpp"
                                      className="font-medium text-base cursor-pointer"
                                    >
                                      Notificação via WhatsApp
                                    </Label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ConditionalField>

                          <ConditionalField show={formData.decisao === 'rejeitar'}>
                            <fieldset className="space-y-2">
                              <Label htmlFor="justificativaFinal" className="font-medium block">
                                Justificativa da Rejeição{' '}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Textarea
                                id="justificativaFinal"
                                placeholder="Descreva o motivo da rejeição do perfil..."
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
                                    ? 'justificativa-final-error'
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
                                    id="justificativa-final-error"
                                    className="text-destructive text-xs font-medium animate-fade-in"
                                  >
                                    Mínimo de 5 caracteres.
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
                            Cancelar
                          </Button>
                          <Button
                            type="submit"
                            disabled={!validateForm()}
                            className={cn(
                              'w-full sm:w-auto min-h-[44px] transition-colors',
                              validateForm() ? 'bg-green-600 hover:bg-green-700 text-white' : '',
                            )}
                          >
                            Confirmar Decisão Final
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
