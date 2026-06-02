import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import { AlertCircle, UserX, Plus } from 'lucide-react'

import { getCandidates } from '@/services/candidates'
import type { CandidatoBase } from '@/types'
import { useRealtime } from '@/hooks/use-realtime'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

export default function CaptacaoPage() {
  const [candidates, setCandidates] = useState<CandidatoBase[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getCandidates()
      setCandidates(data || [])
    } catch (err: any) {
      console.error(err)
      setError(
        'Não foi possível carregar os candidatos. Verifique sua conexão ou tente novamente mais tarde.',
      )
      toast.error('Erro ao carregar lista de candidatos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  useRealtime('candidates', () => {
    loadData()
  })

  if (loading) {
    return (
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Captação</h1>
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="gap-2">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-4 w-4/5" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Captação</h1>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button onClick={loadData} variant="outline">
          Tentar novamente
        </Button>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Captação de Candidatos</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie os candidatos que entraram no pipeline de recrutamento.
          </p>
        </div>
        <Button asChild>
          <Link to="/captacao/form">
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Candidato
          </Link>
        </Button>
      </div>

      {candidates.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-12 text-center mt-8 border-dashed">
          <UserX className="h-12 w-12 text-muted-foreground mb-4" />
          <CardTitle className="text-xl">Nenhum candidato encontrado</CardTitle>
          <CardDescription className="mt-2 max-w-md">
            Ainda não há registros de candidatos no banco de dados. Adicione um novo candidato para
            começar.
          </CardDescription>
          <Button asChild variant="secondary" className="mt-6">
            <Link to="/captacao/form">Criar o primeiro registro</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="flex flex-col hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight">
                  {candidate?.nome || 'Nome não informado'}
                </CardTitle>
                <CardDescription className="truncate">
                  {candidate?.email || 'Email não informado'}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {candidate?.status && (
                    <Badge variant={candidate.status === 'Rejeitado' ? 'destructive' : 'secondary'}>
                      {candidate.status}
                    </Badge>
                  )}
                  {candidate?.profissao && <Badge variant="outline">{candidate.profissao}</Badge>}
                </div>

                <div className="mt-auto space-y-2 text-sm text-muted-foreground pt-4 border-t">
                  {candidate?.telefone && (
                    <p className="flex items-center gap-2">
                      <span className="text-foreground/70">📞</span> {candidate.telefone}
                    </p>
                  )}
                  {candidate?.especialidade && (
                    <p className="flex items-center gap-2">
                      <span className="text-foreground/70">⚕️</span> {candidate.especialidade}
                    </p>
                  )}

                  {/* Safely rendering newly introduced optional JSON fields */}
                  {candidate?.buscaWeb && Object.keys(candidate.buscaWeb).length > 0 && (
                    <p className="flex items-center gap-2">
                      <span className="text-foreground/70">🌐</span>
                      {candidate.buscaWeb?.encontrado
                        ? 'Dados da web enriquecidos'
                        : 'Busca web realizada'}
                    </p>
                  )}
                  {candidate?.formulario && Object.keys(candidate.formulario).length > 0 && (
                    <p className="flex items-center gap-2">
                      <span className="text-foreground/70">📝</span>
                      {candidate.formulario?.completo
                        ? 'Formulário completo'
                        : 'Dados adicionais coletados'}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
