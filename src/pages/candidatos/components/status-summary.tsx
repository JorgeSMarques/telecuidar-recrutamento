import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'

export function StatusSummary() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Resumo do Processo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Início da Etapa</p>
            <p className="font-medium">23 de Maio de 2026</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Prazo Limite</p>
            <p className="font-medium text-red-500">30 de Maio de 2026</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Suporte ao Candidato</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <a href="mailto:suporte@telecuidar.com.br" className="hover:underline text-primary">
              suporte@telecuidar.com.br
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span>0800 123 4567</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
