import { MOCK_CANDIDATES } from '@/mocks/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, Edit2 } from 'lucide-react'

export default function Candidatos() {
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Aprovado':
        return 'default'
      case 'Pendente':
        return 'outline'
      case 'Reprovado':
        return 'destructive'
      default:
        return 'secondary'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Candidatos</h1>
          <p className="text-muted-foreground">Gerencie o banco de talentos.</p>
        </div>
        <Button>Novo Candidato</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Função</TableHead>
                  <TableHead>Data Cadastro</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_CANDIDATES.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell className="font-medium">{candidate.name}</TableCell>
                    <TableCell>{candidate.role}</TableCell>
                    <TableCell>{new Date(candidate.date).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(candidate.status)}>{candidate.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="icon" aria-label="Ver detalhes">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" aria-label="Editar">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="grid grid-cols-1 gap-4 p-4 md:hidden">
            {MOCK_CANDIDATES.map((candidate) => (
              <Card key={candidate.id} className="overflow-hidden">
                <CardHeader className="bg-muted/50 p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{candidate.name}</CardTitle>
                    <Badge variant={getBadgeVariant(candidate.status)}>{candidate.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-muted-foreground">{candidate.role}</p>
                    <p className="text-xs text-muted-foreground">
                      Cadastrado em: {new Date(candidate.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2 border-t pt-3 mt-3">
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="mr-2 h-4 w-4" /> Ver
                    </Button>
                    <Button variant="secondary" size="sm" className="w-full">
                      <Edit2 className="mr-2 h-4 w-4" /> Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
