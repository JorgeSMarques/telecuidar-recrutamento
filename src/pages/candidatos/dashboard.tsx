import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useRealtime } from '@/hooks/use-realtime'
import pb from '@/lib/pocketbase/client'
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
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [currentStage, setCurrentStage] = useState(1)
  const [candidate, setCandidate] = useState<any>(null)

  const loadData = async () => {
    if (!user) return
    try {
      const records = await pb
        .collection('candidates')
        .getFullList({ filter: `userId="${user.id}"` })
      if (records.length > 0) {
        const c = records[0]
        setCandidate(c)
        updateStageFromStatus(c.status)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [user])

  useRealtime('candidates', (e) => {
    if (e.record.userId === user?.id) {
      setCandidate(e.record)
      updateStageFromStatus(e.record.status)
    }
  })

  // Simulated web search delay on the frontend if needed
  useEffect(() => {
    if (currentStage === 4) {
      const t = setTimeout(() => setCurrentStage(5), 3000)
      return () => clearTimeout(t)
    }
  }, [currentStage])

  const updateStageFromStatus = (status: string) => {
    const statusMap: Record<string, number> = {
      Captação: 1,
      'Manifestação Pendente': 2,
      'Avaliação Pendente': 3,
      'Busca Web Pendente': 4,
      Bloqueado: 4,
      'Avaliação RH Pendente': 5,
      'Avaliação RH Concluída': 5,
      'Aprovação Diretor Pendente': 6,
      Aprovado: 8,
      Rejeitado: 9,
      Contratado: 9,
    }
    const stage = statusMap[status] || 1
    setCurrentStage(stage)
  }

  const steps = [
    {
      id: 1,
      title: 'Captação',
      status: 'completed' as StepStatus,
      date: candidate?.dataCaptura
        ? new Date(candidate.dataCaptura).toLocaleDateString('pt-BR')
        : undefined,
    },
    {
      id: 2,
      title: 'Manifestação de Interesse',
      status:
        currentStage === 2 ? 'active' : currentStage > 2 ? 'completed' : ('waiting' as StepStatus),
      date: candidate?.dataManifestacao
        ? new Date(candidate.dataManifestacao).toLocaleDateString('pt-BR')
        : undefined,
    },
    {
      id: 3,
      title: 'Formulário de Avaliação',
      status:
        currentStage === 3 ? 'active' : currentStage > 3 ? 'completed' : ('waiting' as StepStatus),
      date: candidate?.dataAvaliacao
        ? new Date(candidate.dataAvaliacao).toLocaleDateString('pt-BR')
        : undefined,
    },
    {
      id: 4,
      title: 'Busca Web',
      status:
        currentStage === 4 ? 'active' : currentStage > 4 ? 'completed' : ('waiting' as StepStatus),
    },
    {
      id: 5,
      title: 'Avaliação RH/Diretor',
      status:
        currentStage === 5 ? 'active' : currentStage > 5 ? 'completed' : ('waiting' as StepStatus),
    },
    {
      id: 6,
      title: 'Aprovação e Agendamento',
      status:
        currentStage === 6 ? 'active' : currentStage > 6 ? 'completed' : ('waiting' as StepStatus),
    },
    {
      id: 8,
      title: 'Entrevista',
      status:
        currentStage === 8 ? 'active' : currentStage > 8 ? 'completed' : ('waiting' as StepStatus),
    },
    {
      id: 9,
      title: 'Aprovação Pós-Entrevista',
      status:
        currentStage === 9 ? 'active' : currentStage > 9 ? 'completed' : ('waiting' as StepStatus),
    },
  ]

  if (loading) {
    return (
      <div className="flex-1 p-4 md:p-6 lg:p-8 space-y-8 h-full overflow-hidden">
        <Skeleton className="h-8 w-64" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-4">
            <Skeleton className="h-[400px] w-full" />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-5 space-y-4">
            <Skeleton className="h-[400px] w-full" />
          </div>
          <div className="hidden lg:block lg:col-span-2 space-y-4">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-background">
      <div className="border-b bg-background/50 backdrop-blur-sm sticky top-0 z-20 px-4 md:px-6 lg:px-8 py-4 mb-8">
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
        <h1 className="text-[2rem] font-bold tracking-tight mt-2">Meu Processo de Seleção</h1>
      </div>

      <div className="flex-1 px-4 md:px-6 lg:px-8 overflow-auto pb-8">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-3 flex flex-col gap-8">
            <section aria-labelledby="timeline-heading">
              <h2 id="timeline-heading" className="sr-only">
                Linha do Tempo do Processo
              </h2>
              <Timeline steps={steps} />
            </section>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-5 flex flex-col gap-8">
            {currentStage === 2 && <InteresseForm onSuccess={loadData} />}
            {currentStage === 3 && <AvaliacaoForm onSuccess={loadData} />}
            {currentStage === 4 && (
              <div className="text-center p-8 border rounded-[var(--radius)] bg-card shadow-sm animate-fade-in-up">
                <h3 className="font-semibold text-[1rem] mb-2">Busca Web em Andamento...</h3>
                <p className="text-muted-foreground text-[0.875rem] flex items-center justify-center gap-2">
                  <span className="animate-spin inline-block h-4 w-4 border-2 border-primary border-r-transparent rounded-full" />
                  Estamos validando suas informações com bancos de dados públicos.
                </p>
              </div>
            )}
            {currentStage === 5 && (
              <div className="text-center p-8 border rounded-[var(--radius)] bg-card shadow-sm animate-fade-in-up">
                <h3 className="font-semibold text-[1rem] mb-2">Avaliação RH</h3>
                <p className="text-muted-foreground text-[0.875rem] flex items-center justify-center gap-2">
                  <span className="animate-spin inline-block h-4 w-4 border-2 border-primary border-r-transparent rounded-full" />
                  Nossa equipe de RH e Diretoria está analisando seu perfil.
                </p>
              </div>
            )}
            {currentStage >= 6 && (
              <div className="text-center p-8 border rounded-[var(--radius)] bg-card shadow-sm animate-fade-in-up">
                <h3 className="font-semibold text-[1rem] mb-2 text-primary">Análise Concluída</h3>
                <p className="text-muted-foreground text-[0.875rem]">
                  Fique atento ao seu email para informações sobre a aprovação e agendamento da
                  entrevista!
                </p>
              </div>
            )}
          </div>

          <aside className="hidden lg:block lg:col-span-2 sticky top-[8rem] max-h-[calc(100vh-10rem)] overflow-y-auto self-start">
            <StatusSummary />
          </aside>
        </div>
      </div>
    </div>
  )
}
