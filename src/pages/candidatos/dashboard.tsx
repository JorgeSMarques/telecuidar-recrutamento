import { useState, useEffect } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Timeline } from './components/timeline'
import { StatusSummary } from './components/status-summary'
import { InteresseForm } from './components/interesse-form'
import { AvaliacaoForm } from './components/avaliacao-form'
import { StepStatus } from '@/types'
import { Skeleton } from '@/components/ui/skeleton'

export default function CandidatoDashboard() {
  const [loading, setLoading] = useState(true)
  const [currentStage, setCurrentStage] = useState(2)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const steps = [
    { id: 1, title: 'Captação', status: 'completed' as StepStatus, date: '20/05/2026' },
    {
      id: 2,
      title: 'Manifestação de Interesse',
      status:
        currentStage === 2 ? 'active' : currentStage > 2 ? 'completed' : ('blocked' as StepStatus),
      date: currentStage > 2 ? '21/05/2026' : undefined,
    },
    {
      id: 3,
      title: 'Formulário de Avaliação',
      status:
        currentStage === 3 ? 'active' : currentStage > 3 ? 'completed' : ('blocked' as StepStatus),
    },
    {
      id: 4,
      title: 'Busca Web',
      status:
        currentStage === 4 ? 'active' : currentStage > 4 ? 'completed' : ('waiting' as StepStatus),
    },
    { id: 5, title: 'Avaliação RH/Diretor', status: 'waiting' as StepStatus },
    { id: 6, title: 'Aprovação e Agendamento', status: 'waiting' as StepStatus },
    { id: 7, title: 'Rejeição', status: 'waiting' as StepStatus },
    { id: 8, title: 'Entrevista', status: 'waiting' as StepStatus },
    { id: 9, title: 'Aprovação Pós-Entrevista', status: 'waiting' as StepStatus },
  ]

  if (loading) {
    return (
      <div className="flex-1 p-6 space-y-8 h-full overflow-hidden">
        <Skeleton className="h-8 w-64 animate-pulse" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[60%] space-y-4">
            <Skeleton className="h-[200px] w-full animate-pulse" />
            <Skeleton className="h-[200px] w-full animate-pulse" />
          </div>
          <div className="w-full md:w-[40%] space-y-4 hidden md:block">
            <Skeleton className="h-32 w-full animate-pulse" />
            <Skeleton className="h-32 w-full animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-muted/10">
      <div className="border-b bg-background/50 backdrop-blur-sm sticky top-0 z-20 px-4 py-4 md:px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Meu Processo</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl font-bold tracking-tight mt-2">Meu Processo de Seleção</h1>
      </div>

      <div className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[60%] flex flex-col gap-8">
            <section aria-labelledby="timeline-heading">
              <h2 id="timeline-heading" className="sr-only">
                Linha do Tempo do Processo
              </h2>
              <Timeline steps={steps} />
            </section>

            <div className="border-t pt-8">
              {currentStage === 2 && <InteresseForm onSuccess={() => setCurrentStage(3)} />}
              {currentStage === 3 && <AvaliacaoForm onSuccess={() => setCurrentStage(4)} />}
              {currentStage >= 4 && (
                <div className="text-center p-8 border rounded-lg bg-background shadow-sm animate-fade-in-up">
                  <h3 className="font-semibold text-lg mb-2">Etapa Concluída</h3>
                  <p className="text-muted-foreground">
                    Sua participação está sendo avaliada. Acompanhe a linha do tempo para novidades.
                  </p>
                </div>
              )}
            </div>
          </div>

          <aside className="w-full md:w-[40%] hidden md:block sticky top-6 self-start">
            <StatusSummary />
          </aside>
        </div>
      </div>
    </div>
  )
}
