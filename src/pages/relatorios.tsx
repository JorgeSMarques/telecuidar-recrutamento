import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { MOCK_CHART_DATA } from '@/mocks/data'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart'

const PIE_DATA = [
  { name: 'Aprovados', value: 400, color: 'hsl(var(--chart-1))' },
  { name: 'Reprovados', value: 300, color: 'hsl(var(--chart-4))' },
  { name: 'Desistências', value: 100, color: 'hsl(var(--chart-5))' },
]

export default function Relatorios() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
        <p className="text-muted-foreground">
          Métricas e indicadores de desempenho do recrutamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Histórico de Contratações vs Rejeições</CardTitle>
            <CardDescription>Análise semestral do funil de recrutamento.</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ChartContainer
              config={{
                contratados: { label: 'Contratados', color: 'hsl(var(--primary))' },
                rejeitados: { label: 'Rejeitados', color: 'hsl(var(--destructive))' },
              }}
            >
              <BarChart data={MOCK_CHART_DATA}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="contratados" fill="var(--color-contratados)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="rejeitados" fill="var(--color-rejeitados)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxa de Conversão Final</CardTitle>
            <CardDescription>Distribuição dos status finais dos candidatos.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer
              config={{
                Aprovados: { color: 'hsl(var(--chart-1))' },
                Reprovados: { color: 'hsl(var(--chart-4))' },
                Desistências: { color: 'hsl(var(--chart-5))' },
              }}
            >
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltipContent hideLabel />} />
              </PieChart>
            </ChartContainer>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              {PIE_DATA.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Métricas de Eficiência</CardTitle>
            <CardDescription>Indicadores chave de performance.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>Tempo Médio de Contratação</span>
                  <span>14 dias</span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>Taxa de Retenção (90 dias)</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>Satisfação do Candidato</span>
                  <span>4.8/5.0</span>
                </div>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div className="bg-chart-3 h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
