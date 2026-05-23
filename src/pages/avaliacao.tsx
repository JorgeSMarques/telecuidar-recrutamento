import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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

export default function Avaliacao() {
  const handleSave = () => {
    toast.success('Avaliação salva com sucesso!')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Avaliação</h1>
        <p className="text-muted-foreground">
          Conduza e registre as diferentes etapas da avaliação do candidato.
        </p>
      </div>

      <Tabs defaultValue="tecnica" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3">
          <TabsTrigger value="tecnica">Técnica</TabsTrigger>
          <TabsTrigger value="comportamental">Comportamental</TabsTrigger>
          <TabsTrigger value="clinica">Clínica</TabsTrigger>
        </TabsList>

        <TabsContent value="tecnica">
          <Card>
            <CardHeader>
              <CardTitle>Avaliação Técnica</CardTitle>
              <CardDescription>
                Analise as competências e conhecimentos técnicos do profissional.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Nível de Conhecimento Prático</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baixo">Abaixo do esperado</SelectItem>
                    <SelectItem value="medio">Dentro do esperado</SelectItem>
                    <SelectItem value="alto">Acima do esperado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Observações Técnicas</Label>
                <Textarea
                  placeholder="Descreva os pontos fortes e de melhoria observados..."
                  className="min-h-[150px]"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleSave}>Salvar Avaliação Técnica</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="comportamental">
          <Card>
            <CardHeader>
              <CardTitle>Avaliação Comportamental</CardTitle>
              <CardDescription>Avalie o fit cultural e habilidades interpessoais.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Comunicação</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Nota 1-5" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 - Ruim</SelectItem>
                      <SelectItem value="3">3 - Regular</SelectItem>
                      <SelectItem value="5">5 - Excelente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Trabalho em Equipe</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Nota 1-5" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 - Ruim</SelectItem>
                      <SelectItem value="3">3 - Regular</SelectItem>
                      <SelectItem value="5">5 - Excelente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Parecer Psicológico</Label>
                <Textarea placeholder="Parecer geral..." />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleSave}>Salvar Avaliação Comportamental</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="clinica">
          <Card>
            <CardHeader>
              <CardTitle>Avaliação Clínica (Ocupacional)</CardTitle>
              <CardDescription>Registro do ASO e exames complementares.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Status ASO</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apto">Apto</SelectItem>
                    <SelectItem value="apto_restricao">Apto com Restrições</SelectItem>
                    <SelectItem value="inapto">Inapto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Restrições / Observações Médicas</Label>
                <Textarea placeholder="Detalhes médicos relevantes para a contratação..." />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button onClick={handleSave}>Salvar Avaliação Clínica</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
