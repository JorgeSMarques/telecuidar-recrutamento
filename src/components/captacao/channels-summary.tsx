import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const CHANNELS_DATA = [
  { canal: 'LinkedIn', candidatos: 45, conversao: 68 },
  { canal: 'Google Ads', candidatos: 32, conversao: 52 },
  { canal: 'Instagram', candidatos: 18, conversao: 35 },
  { canal: 'E-mail', candidatos: 12, conversao: 40 },
  { canal: 'Contato Direto', candidatos: 8, conversao: 75 },
  { canal: 'Comunidade', candidatos: 5, conversao: 60 },
  { canal: 'Parceria', candidatos: 3, conversao: 80 },
  { canal: 'Outro', candidatos: 2, conversao: 50 },
]

const chartConfig = {
  candidatos: {
    label: 'Candidatos',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig

export function ChannelsSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Canais de Captação</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-[250px] w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHANNELS_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="canal" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="candidatos" fill="var(--color-candidatos)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Canal</TableHead>
              <TableHead className="text-right">Candidatos (mês)</TableHead>
              <TableHead className="text-right">Conversão (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CHANNELS_DATA.map((row) => (
              <TableRow key={row.canal}>
                <TableCell className="font-medium">{row.canal}</TableCell>
                <TableCell className="text-right">{row.candidatos}</TableCell>
                <TableCell className="text-right">{row.conversao}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
