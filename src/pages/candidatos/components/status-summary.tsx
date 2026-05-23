import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'

export function StatusSummary() {
  return (
    <div className="space-y-6 animate-slide-in">
      <Card className="rounded-[var(--radius)]">
        <CardHeader>
          <CardTitle className="text-[1rem] font-semibold">Resumo do Processo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-[0.875rem]">
          <div>
            <p className="opacity-85 text-muted-foreground font-medium mb-1">Início da Etapa</p>
            <p className="font-medium text-foreground">23 de Maio de 2026</p>
          </div>
          <div>
            <p className="opacity-85 text-muted-foreground font-medium mb-1">Prazo Limite</p>
            <p className="font-medium text-destructive">30 de Maio de 2026</p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[var(--radius)]">
        <CardHeader>
          <CardTitle className="text-[1rem] font-semibold">Suporte ao Candidato</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-[0.875rem]">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <a href="mailto:suporte@telecuidar.com.br" className="hover:underline text-primary">
              suporte@telecuidar.com.br
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground">0800 123 4567</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
