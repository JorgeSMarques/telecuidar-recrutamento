import { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { avaliacaoSchema, AvaliacaoFormData } from './schema'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ValoresTab } from './valores-tab'
import { CompetenciaTab } from './competencia-tab'
import { ResumoTab } from './resumo-tab'
import { avaliacaoService } from '@/services/avaliacao-service'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function DeadlineBadge({ days }: { days: number }) {
  let style = ''
  if (days < 2) {
    style = 'bg-destructive text-destructive-foreground hover:bg-destructive/80'
  } else if (days < 5) {
    style = 'bg-ring/70 text-primary-foreground hover:bg-ring/80'
  } else {
    style = 'bg-primary/20 text-primary hover:bg-primary/30'
  }
  return <Badge className={style}>{days} dias para responder</Badge>
}

export function AvaliacaoForm({ onSuccess }: { onSuccess: () => void }) {
  const [activeTab, setActiveTab] = useState('valores')
  const [loading, setLoading] = useState(false)
  const methods = useForm<AvaliacaoFormData>({
    resolver: zodResolver(avaliacaoSchema),
    mode: 'onTouched',
  })

  // Mock days remaining for the badge showcase
  const daysRemaining = 4

  useEffect(() => {
    const saved = localStorage.getItem('avaliacao-draft')
    if (saved) {
      toast('Você tem um formulário em rascunho. Deseja continuar?', {
        action: { label: 'Continuar', onClick: () => methods.reset(JSON.parse(saved)) },
        cancel: { label: 'Descartar', onClick: () => localStorage.removeItem('avaliacao-draft') },
        duration: Infinity,
      })
    }
  }, [methods.reset])

  useEffect(() => {
    const subscription = methods.watch((value) => {
      const handler = setTimeout(
        () => localStorage.setItem('avaliacao-draft', JSON.stringify(value)),
        500,
      )
      return () => clearTimeout(handler)
    })
    return () => subscription.unsubscribe()
  }, [methods.watch])

  const onSubmit = async () => {
    const isValid = await methods.trigger()
    if (!isValid) {
      toast.error('Corrija os erros abaixo antes de enviar')
      setActiveTab('valores')
      return
    }
    setLoading(true)
    try {
      // Mocking the success submission since avaliacaoService wasn't provided or we skip real calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
      localStorage.removeItem('avaliacao-draft')
      toast.success('Avaliação enviada com sucesso!')
      onSuccess()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="animate-fade-in-up">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-[2rem] font-bold">Formulário de Avaliação</CardTitle>
        <div className="hidden sm:inline-flex">
          <DeadlineBadge days={daysRemaining} />
        </div>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <Tabs
            value={activeTab}
            onValueChange={(val) => {
              if (activeTab === 'valores' && val !== 'valores') {
                methods.trigger('valores').then((valid) => {
                  if (valid) setActiveTab(val)
                  else toast.error('Responda todas as perguntas antes de prosseguir')
                })
              } else if (activeTab === 'competencia' && val === 'resumo') {
                methods.trigger('competencia').then((valid) => {
                  if (valid) setActiveTab(val)
                  else toast.error('Preencha todas as respostas com mínimo 10 caracteres')
                })
              } else {
                setActiveTab(val)
              }
            }}
            className="w-full"
          >
            <TabsList className="flex w-full">
              <TabsTrigger value="valores" className="flex-1">
                Valores
              </TabsTrigger>
              <TabsTrigger value="competencia" className="flex-1">
                Competência
              </TabsTrigger>
              <TabsTrigger value="resumo" className="flex-1">
                Resumo
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="valores"
              className="focus-visible:outline-none focus-visible:ring-0 animate-tab-fade-in"
            >
              <ValoresTab
                onNext={async () => {
                  const isValid = await methods.trigger('valores')
                  if (isValid) setActiveTab('competencia')
                  else toast.error('Responda todas as perguntas antes de prosseguir')
                }}
              />
            </TabsContent>
            <TabsContent
              value="competencia"
              className="focus-visible:outline-none focus-visible:ring-0 animate-tab-fade-in"
            >
              <CompetenciaTab
                onPrev={() => setActiveTab('valores')}
                onNext={async () => {
                  const isValid = await methods.trigger('competencia')
                  if (isValid) setActiveTab('resumo')
                  else toast.error('Preencha todas as respostas com mínimo 10 caracteres')
                }}
              />
            </TabsContent>
            <TabsContent
              value="resumo"
              className="focus-visible:outline-none focus-visible:ring-0 animate-tab-fade-in"
            >
              <ResumoTab
                onEdit={() => setActiveTab('valores')}
                onSubmit={onSubmit}
                loading={loading}
              />
            </TabsContent>
          </Tabs>
        </FormProvider>
      </CardContent>
    </Card>
  )
}
