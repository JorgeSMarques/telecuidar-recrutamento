import { Users, FileText, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MOCK_STATS, MOCK_CANDIDATES } from '@/mocks/data'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart'
import { useAuth } from '@/hooks/use-auth'

export default function Dashboard() {
  const { user } = useAuth()
  const role = user?.role || 'Candidato'

  const getFirstName = () => user?.name?.split(' ')[0] || 'Usuário'

  const renderStats = () => (
    <div className="grid gap-4 md:grid-cols-3 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Candidatos Ativos</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{MOCK_STATS.activeCandidates}</div>
          <p className="text-xs text-muted-foreground">+12% desde o último mês</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Avaliações Pendentes</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{MOCK_STATS.pendingEvaluations}</div>
          <p className="text-xs text-muted-foreground">Requerem atenção</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Entrevistas Hoje</CardTitle>
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{MOCK_STATS.interviewsToday}</div>
          <p className="text-xs text-muted-foreground">3 presenciais, 2 online</p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Olá, {getFirstName()}</h1>
          <p className="text-muted-foreground">
            {role === 'Candidato'
              ? 'Acompanhe o status do seu processo seletivo.'
              : 'Visão geral do processo de recrutamento.'}
          </p>
        </div>
        <Badge variant="outline" className="px-3 py-1 bg-primary/5">
          Perfil: {role}
        </Badge>
      </div>

      {role !== 'Candidato' && renderStats()}

      <div className="grid gap-6">
        {role === 'Candidato' && (
          <Card>
            <CardHeader>
              <CardTitle>Meu Status</CardTitle>
              <CardDescription>Acompanhe seu progresso atual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Avaliação Comportamental Concluída</h3>
                  <Badge
                    variant="outline"
                    className="mt-1 bg-green-50 text-green-700 hover:bg-green-50 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                  >
                    Aprovado
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Próximas Etapas:</h4>
                <ul className="space-y-3 relative border-l-2 border-muted ml-3 pl-6">
                  <li className="relative">
                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                    <p className="font-medium">Entrevista Técnica</p>
                    <p className="text-sm text-muted-foreground">Agendada para 12/11 às 14:00</p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-muted ring-4 ring-background" />
                    <p className="font-medium text-muted-foreground">Exame Clínico</p>
                    <p className="text-sm text-muted-foreground">Aguardando agendamento</p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {role === 'Gerente RH' && (
          <Card>
            <CardHeader>
              <CardTitle>Candidatos Recentes</CardTitle>
              <CardDescription>Últimos profissionais cadastrados no sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {MOCK_CANDIDATES.slice(0, 3).map((candidate) => (
                  <div
                    key={candidate.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{candidate.name}</p>
                      <p className="text-sm text-muted-foreground">{candidate.role}</p>
                    </div>
                    <Badge variant={candidate.status === 'Aprovado' ? 'default' : 'secondary'}>
                      {candidate.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {role === 'Diretor Técnico' && (
          <Card>
            <CardHeader>
              <CardTitle>Eficiência de Contratação</CardTitle>
              <CardDescription>Relação entre candidatos avaliados e aprovados</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ChartContainer
                config={{
                  contratados: { label: 'Contratados', color: 'hsl(var(--primary))' },
                  rejeitados: { label: 'Rejeitados', color: 'hsl(var(--destructive))' },
                }}
              >
                <BarChart
                  data={[
                    { name: 'S1', contratados: 12, rejeitados: 4 },
                    { name: 'S2', contratados: 19, rejeitados: 6 },
                    { name: 'S3', contratados: 15, rejeitados: 8 },
                    { name: 'S4', contratados: 22, rejeitados: 5 },
                  ]}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="contratados"
                    stackId="a"
                    fill="var(--color-contratados)"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="rejeitados"
                    stackId="a"
                    fill="var(--color-rejeitados)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
