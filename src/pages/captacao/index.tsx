import { useEffect, useState, useMemo, useCallback } from 'react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import {
  AlertCircle,
  UserX,
  Plus,
  Search,
  FileText,
  FileX2,
  Globe,
  ClipboardList,
  Phone,
  Stethoscope,
} from 'lucide-react'

import { getCandidates } from '@/services/candidates'
import type { CandidatoBase } from '@/types'
import { useRealtime } from '@/hooks/use-realtime'
import { useAuth } from '@/hooks/use-auth'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const STATUS_OPTIONS = [
  'Captação',
  'Manifestação Pendente',
  'Avaliação Pendente',
  'Busca Web Pendente',
  'Avaliação RH Pendente',
  'Avaliação RH Concluída',
  'Aprovação Diretor Pendente',
  'Aprovado',
  'Rejeitado',
  'Contratado',
]

const PROFISSAO_OPTIONS = [
  'Médico',
  'Enfermeiro',
  'Psicólogo',
  'Nutricionista',
  'Fisioterapeuta',
  'Outro',
]

function safeJson(value: unknown): Record<string, any> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  return value as Record<string, any>
}

function safeString(value: unknown, fallback = 'N/A'): string {
  if (value === null || value === undefined || value === '') return fallback
  return String(value)
}

function hasJsonData(value: unknown): boolean {
  const obj = safeJson(value)
  return Object.keys(obj).length > 0
}

export default function CaptacaoPage() {
  const { isAuthenticated, loading: authLoading } = useAuth()
  const [candidates, setCandidates] = useState<CandidatoBase[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [profissaoFilter, setProfissaoFilter] = useState<string>('all')

  const loadData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getCandidates()
      setCandidates(data || [])
    } catch (err: any) {
      console.error('Failed to load candidates:', err)
      const message =
        err?.status === 0
          ? 'Erro de conexão. Verifique sua internet e tente novamente.'
          : 'Não foi possível carregar os candidatos. Tente novamente mais tarde.'
      setError(message)
      toast.error('Erro ao carregar lista de candidatos')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authLoading) return
    if (!isAuthenticated) {
      setLoading(false)
      return
    }
    loadData()
  }, [isAuthenticated, authLoading, loadData])

  useRealtime(
    'candidates',
    () => {
      try {
        loadData()
      } catch (err) {
        console.error('Realtime sync error:', err)
      }
    },
    isAuthenticated && !authLoading,
  )

  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      const matchesSearch =
        !search ||
        safeString(c.nome, '').toLowerCase().includes(search.toLowerCase()) ||
        safeString(c.email, '').toLowerCase().includes(search.toLowerCase()) ||
        safeString(c.especialidade, '').toLowerCase().includes(search.toLowerCase())

      const matchesStatus = statusFilter === 'all' || safeString(c.status, '') === statusFilter

      const matchesProfissao =
        profissaoFilter === 'all' || safeString(c.profissao, '') === profissaoFilter

      return matchesSearch && matchesStatus && matchesProfissao
    })
  }, [candidates, search, statusFilter, profissaoFilter])

  if (authLoading || loading) {
    return (
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-72" />
          </div>
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-40" />
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

  if (!isAuthenticated) {
    return (
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Captação</h1>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Acesso Negado</AlertTitle>
          <AlertDescription>
            Você precisa estar autenticado para visualizar esta página.
          </AlertDescription>
        </Alert>
        <Button asChild>
          <Link to="/login">Ir para o Login</Link>
        </Button>
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

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome, e-mail ou especialidade..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os status</SelectItem>
            {STATUS_OPTIONS.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={profissaoFilter} onValueChange={setProfissaoFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filtrar por profissão" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as profissões</SelectItem>
            {PROFISSAO_OPTIONS.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredCandidates.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-12 text-center mt-8 border-dashed">
          <UserX className="h-12 w-12 text-muted-foreground mb-4" />
          <CardTitle className="text-xl">
            {candidates.length === 0
              ? 'Nenhum candidato encontrado'
              : 'Nenhum resultado para os filtros aplicados'}
          </CardTitle>
          <CardDescription className="mt-2 max-w-md">
            {candidates.length === 0
              ? 'Ainda não há registros de candidatos no banco de dados. Adicione um novo candidato para começar.'
              : 'Tente ajustar os filtros de busca para encontrar o que procura.'}
          </CardDescription>
          {candidates.length === 0 && (
            <Button asChild variant="secondary" className="mt-6">
              <Link to="/captacao/form">Criar o primeiro registro</Link>
            </Button>
          )}
        </Card>
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            Exibindo {filteredCandidates.length} de {candidates.length} candidato(s)
          </p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredCandidates.map((candidate) => {
              const buscaWeb = safeJson(candidate.buscaWeb)
              const formulario = safeJson(candidate.formulario)
              const status = safeString(candidate.status, 'Sem status')
              const isRejected = candidate?.status === 'Rejeitado'
              const hasCurriculo = !!candidate?.curriculo
              const hasTextoCurriculo = !!candidate?.textoCurriculo

              return (
                <Card
                  key={candidate.id}
                  className="flex flex-col hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight">
                      {safeString(candidate?.nome, 'Nome não informado')}
                    </CardTitle>
                    <CardDescription className="truncate">
                      {safeString(candidate?.email, 'Email não informado')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant={isRejected ? 'destructive' : 'secondary'}>{status}</Badge>
                      {candidate?.profissao && (
                        <Badge variant="outline">{candidate.profissao}</Badge>
                      )}
                    </div>

                    <div className="mt-auto space-y-2 text-sm text-muted-foreground pt-4 border-t">
                      {candidate?.telefone ? (
                        <p className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5" /> {candidate.telefone}
                        </p>
                      ) : (
                        <p className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5" /> Telefone não informado
                        </p>
                      )}

                      {candidate?.especialidade ? (
                        <p className="flex items-center gap-2">
                          <Stethoscope className="w-3.5 h-3.5" /> {candidate.especialidade}
                        </p>
                      ) : (
                        <p className="flex items-center gap-2">
                          <Stethoscope className="w-3.5 h-3.5" /> Especialidade não informada
                        </p>
                      )}

                      {hasCurriculo ? (
                        <p className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <FileText className="w-3.5 h-3.5" /> Currículo anexado
                        </p>
                      ) : (
                        <p className="flex items-center gap-2 text-muted-foreground/60">
                          <FileX2 className="w-3.5 h-3.5" /> Currículo não anexado
                        </p>
                      )}

                      {hasTextoCurriculo ? (
                        <p className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <FileText className="w-3.5 h-3.5" /> Resumo disponível
                        </p>
                      ) : (
                        <p className="flex items-center gap-2 text-muted-foreground/60">
                          <FileText className="w-3.5 h-3.5" /> Nenhum resumo gerado
                        </p>
                      )}

                      <p className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5" />
                        {hasJsonData(buscaWeb)
                          ? buscaWeb.encontrado
                            ? 'Dados da web enriquecidos'
                            : 'Busca web realizada'
                          : 'Sem dados de busca web'}
                      </p>

                      <p className="flex items-center gap-2">
                        <ClipboardList className="w-3.5 h-3.5" />
                        {hasJsonData(formulario)
                          ? formulario.completo
                            ? 'Formulário completo'
                            : 'Dados adicionais coletados'
                          : 'Sem dados de formulário'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
