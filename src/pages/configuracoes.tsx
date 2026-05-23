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
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'
import { useTheme } from '@/hooks/use-theme'

export default function Configuracoes() {
  const { theme, setTheme } = useTheme()

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Configurações atualizadas!')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas preferências de conta e sistema.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <form onSubmit={handleSave}>
              <CardHeader>
                <CardTitle>Perfil de Usuário</CardTitle>
                <CardDescription>Atualize suas informações pessoais.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input id="nome" defaultValue="Administrador" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sobrenome">Sobrenome</Label>
                    <Input id="sobrenome" defaultValue="Sistema" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Corporativo</Label>
                  <Input id="email" type="email" defaultValue="admin@telecuidar.com" />
                </div>
              </CardContent>
              <CardFooter className="justify-end border-t pt-6">
                <Button type="submit">Salvar Perfil</Button>
              </CardFooter>
            </form>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>Gerencie opções de segurança da conta.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="space-y-0.5">
                  <Label>Autenticação de Dois Fatores (2FA)</Label>
                  <p className="text-sm text-muted-foreground">
                    Adicione uma camada extra de segurança.
                  </p>
                </div>
                <Switch />
              </div>
              <div className="pt-2">
                <Button variant="outline">Alterar Senha</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Aparência</CardTitle>
              <CardDescription>Personalize a interface.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Modo Escuro</Label>
                  <Switch
                    checked={theme === 'dark'}
                    onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Tema do Sistema</Label>
                  <Switch
                    checked={theme === 'system'}
                    onCheckedChange={(checked) => {
                      if (checked) setTheme('system')
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">Zona de Perigo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Ações irreversíveis para a sua conta.
              </p>
              <Button variant="destructive" className="w-full">
                Desativar Conta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
