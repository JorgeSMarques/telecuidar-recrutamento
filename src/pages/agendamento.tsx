import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'

export default function Agendamento() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Agendamento</h1>
          <p className="text-muted-foreground">Controle de datas para entrevistas e exames.</p>
        </div>
        <Button>Novo Agendamento</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Calendário</CardTitle>
            <CardDescription>Selecione uma data para ver os horários</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-sm"
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>
              Programação para {date ? date.toLocaleDateString('pt-BR') : 'Hoje'}
            </CardTitle>
            <CardDescription>Próximos compromissos na data selecionada</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  time: '09:00',
                  type: 'Entrevista Técnica',
                  name: 'Mariana Costa',
                  status: 'Confirmado',
                },
                {
                  time: '11:30',
                  type: 'Exame Admissional',
                  name: 'João Pereira',
                  status: 'Pendente',
                },
                { time: '14:00', type: 'Onboarding', name: 'Ana Silva', status: 'Confirmado' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center bg-primary/10 text-primary rounded-md p-2 min-w-[70px]">
                      <Clock className="h-4 w-4 mb-1" />
                      <span className="text-sm font-semibold">{item.time}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.type}</h4>
                      <p className="text-sm text-muted-foreground">{item.name}</p>
                    </div>
                  </div>
                  <Badge variant={item.status === 'Confirmado' ? 'default' : 'secondary'}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
