import { useState, useEffect } from 'react'
import { UserPlus, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/ui/empty-state'
import pb from '@/lib/pocketbase/client'
import { useRealtime } from '@/hooks/use-realtime'

export default function CaptacaoPage() {
  const [candidates, setCandidates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const loadCandidates = async () => {
    try {
      const records = await pb.collection('candidates').getFullList({
        filter: 'status = "Captação"',
        sort: '-created',
      })
      setCandidates(records)
    } catch (err) {
      console.error('Failed to load candidates:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCandidates()
  }, [])

  useRealtime('candidates', () => {
    loadCandidates()
  })

  return (
    <div className="container mx-auto p-6 md:p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Captação</h1>
        {candidates.length > 0 && (
          <Button onClick={() => navigate('/captacao/form')}>
            <Plus className="mr-2 h-4 w-4" />
            Cadastrar
          </Button>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground animate-pulse">Carregando...</p>
          </div>
        ) : candidates.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <EmptyState
              icon={UserPlus}
              title="Nada por aqui"
              description="Não encontramos candidatos no estágio de captação no momento."
              action={
                <Button onClick={() => navigate('/captacao/form')}>Cadastrar Candidato</Button>
              }
              className="w-full max-w-2xl"
            />
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="rounded-lg border bg-card p-5 shadow-sm transition-colors hover:bg-muted/30"
              >
                <h3 className="font-semibold truncate text-lg mb-1">
                  {candidate.nome || 'Sem Nome'}
                </h3>
                <p className="text-sm text-muted-foreground truncate mb-4">
                  {candidate.email || 'Sem Email'}
                </p>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                  {candidate.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
