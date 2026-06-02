import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Users, Search, Mail, Phone, Briefcase } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import pb from '@/lib/pocketbase/client'
import { useRealtime } from '@/hooks/use-realtime'
import { CandidatoBase } from '@/types'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center h-[400px] border rounded-lg bg-muted/20 border-dashed animate-fade-in">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Users className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Nenhum candidato encontrado</h3>
      <p className="text-muted-foreground max-w-sm mb-6">
        Não há candidatos no pipeline de captação no momento. Adicione um novo candidato para
        começar.
      </p>
      <Button asChild>
        <Link to="/captacao/form">
          <Plus className="w-4 h-4 mr-2" />
          Novo Candidato
        </Link>
      </Button>
    </div>
  )
}

export default function Captacao() {
  const [candidates, setCandidates] = useState<CandidatoBase[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchCandidates = async () => {
    try {
      setLoading(true)
      const records = await pb.collection('candidates').getFullList<CandidatoBase>({
        sort: '-created',
      })
      setCandidates(records)
    } catch (error) {
      console.error('Error fetching candidates:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCandidates()
  }, [])

  useRealtime('candidates', () => {
    fetchCandidates()
  })

  const filteredCandidates = candidates.filter((candidate) => {
    const term = searchTerm.toLowerCase()
    return (
      candidate?.nome?.toLowerCase().includes(term) ||
      candidate?.email?.toLowerCase().includes(term) ||
      candidate?.profissao?.toLowerCase().includes(term) ||
      candidate?.status?.toLowerCase().includes(term)
    )
  })

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Captação':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800'
      case 'Manifestação Pendente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800'
      case 'Avaliação Pendente':
      case 'Busca Web Pendente':
      case 'Avaliação RH Pendente':
      case 'Aprovação Diretor Pendente':
        return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800'
      case 'Avaliação RH Concluída':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800'
      case 'Aprovado':
      case 'Contratado':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800'
      case 'Rejeitado':
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800/30 dark:text-gray-300 dark:border-gray-700'
    }
  }

  return (
    <div className="flex flex-col gap-6 p-6 h-full max-w-7xl mx-auto animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Captação</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie o pipeline de candidatos da plataforma.
          </p>
        </div>
        <Button asChild className="shrink-0">
          <Link to="/captacao/form">
            <Plus className="w-4 h-4 mr-2" />
            Novo Candidato
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle>Candidatos Recentes</CardTitle>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar candidato..."
                className="pl-8 bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-16 w-full rounded-md" />
              ))}
            </div>
          ) : candidates.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Profissão</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data de Captação</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCandidates.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                        Nenhum resultado encontrado para a busca.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredCandidates.map((candidate) => (
                      <TableRow key={candidate?.id} className="hover:bg-muted/50 transition-colors">
                        <TableCell className="font-medium">{candidate?.nome || 'N/A'}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground shrink-0" />
                            <span>{candidate?.profissao || 'N/A'}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-sm">
                            <div className="flex items-center gap-2">
                              <Mail className="h-3 w-3 text-muted-foreground shrink-0" />
                              <span
                                className="text-muted-foreground truncate max-w-[180px]"
                                title={candidate?.email}
                              >
                                {candidate?.email || 'N/A'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-3 w-3 text-muted-foreground shrink-0" />
                              <span className="text-muted-foreground truncate">
                                {candidate?.telefone || 'N/A'}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusColor(candidate?.status)}>
                            {candidate?.status || 'N/A'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {candidate?.dataCaptura
                            ? format(new Date(candidate.dataCaptura), "dd 'de' MMM, yyyy", {
                                locale: ptBR,
                              })
                            : 'N/A'}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/candidatos`}>Ver detalhes</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
