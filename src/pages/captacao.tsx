import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

export default function Captacao() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Candidato cadastrado com sucesso!')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Captação</h1>
        <p className="text-muted-foreground">Cadastre novos talentos médicos na plataforma.</p>
      </div>

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Informações do Candidato</CardTitle>
            <CardDescription>
              Preencha os dados básicos para iniciar o processo de avaliação.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input id="nome" placeholder="Dr. João Silva" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail Profissional</Label>
                <Input id="email" type="email" placeholder="joao@exemplo.com" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="crm">CRM/Coren</Label>
                <Input id="crm" placeholder="123456-UF" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="especialidade">Especialidade</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma especialidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clinico">Clínico Geral</SelectItem>
                  <SelectItem value="pediatra">Pediatria</SelectItem>
                  <SelectItem value="enfermagem">Enfermagem</SelectItem>
                  <SelectItem value="fisioterapia">Fisioterapia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experiencia">Resumo da Experiência</Label>
              <Textarea
                id="experiencia"
                placeholder="Descreva brevemente a experiência profissional do candidato..."
                className="min-h-[120px]"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-4 border-t pt-6">
            <Button variant="outline" type="button">
              Cancelar
            </Button>
            <Button type="submit">Salvar Candidato</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
