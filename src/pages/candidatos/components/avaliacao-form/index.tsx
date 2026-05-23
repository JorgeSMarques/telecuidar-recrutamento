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

export function AvaliacaoForm({ onSuccess }: { onSuccess: () => void }) {
  const [activeTab, setActiveTab] = useState('valores')
  const [loading, setLoading] = useState(false)
  const methods = useForm<AvaliacaoFormData>({
    resolver: zodResolver(avaliacaoSchema),
    mode: 'onTouched',
  })

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
      toast.error('Preencha todos os campos obrigatórios.')
      return
    }
    setLoading(true)
    try {
      await avaliacaoService.enviarAvaliacao(methods.getValues())
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
        <CardTitle className="text-xl">Formulário de Avaliação</CardTitle>
        <Badge className="bg-green-500 hover:bg-green-600 hidden sm:inline-flex">
          7 dias para responder
        </Badge>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto min-h-10 p-1">
              <TabsTrigger value="valores" className="whitespace-normal py-2 text-xs sm:text-sm">
                Valores
              </TabsTrigger>
              <TabsTrigger
                value="competencia"
                className="whitespace-normal py-2 text-xs sm:text-sm"
              >
                Competência
              </TabsTrigger>
              <TabsTrigger value="resumo" className="whitespace-normal py-2 text-xs sm:text-sm">
                Resumo
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="valores"
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <ValoresTab />
            </TabsContent>
            <TabsContent
              value="competencia"
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <CompetenciaTab />
            </TabsContent>
            <TabsContent value="resumo" className="focus-visible:outline-none focus-visible:ring-0">
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
