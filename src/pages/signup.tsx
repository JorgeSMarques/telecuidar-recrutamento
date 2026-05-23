import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/use-auth'

export default function Signup() {
  const navigate = useNavigate()
  const { signUp } = useAuth()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: 'Candidato',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }))
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      return toast.error('O nome é obrigatório.')
    }

    if (formData.password.length < 8) {
      return toast.error('A senha deve ter pelo menos 8 caracteres.')
    }

    if (formData.password !== formData.passwordConfirm) {
      return toast.error('As senhas não coincidem.')
    }

    setLoading(true)
    const { error } = await signUp(formData)
    setLoading(false)

    if (error) {
      const emailError = error?.response?.data?.email?.code
      if (emailError === 'validation_invalid_email') {
        toast.error('Formato de e-mail inválido.')
      } else if (
        emailError === 'validation_not_unique' ||
        emailError === 'validation_invalid_format'
      ) {
        toast.error('Este e-mail já está cadastrado ou é inválido.')
      } else {
        toast.error('Erro ao criar conta. Verifique os dados e tente novamente.')
      }
    } else {
      toast.success('Conta criada com sucesso!')
      navigate('/')
    }
  }

  return (
    <Card className="shadow-elevation border-border/50 w-full max-w-md mx-auto">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Criar uma conta</CardTitle>
        <CardDescription>Preencha os dados abaixo para se cadastrar</CardDescription>
      </CardHeader>
      <form onSubmit={handleSignup}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="João da Silva"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="nome@exemplo.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Perfil</Label>
            <Select value={formData.role} onValueChange={handleRoleChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um perfil" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Candidato">Candidato</SelectItem>
                <SelectItem value="Gerente RH">Gerente RH</SelectItem>
                <SelectItem value="Diretor Técnico">Diretor Técnico</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passwordConfirm">Confirmar</Label>
              <Input
                id="passwordConfirm"
                type="password"
                required
                value={formData.passwordConfirm}
                onChange={handleChange}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Criando conta...' : 'Cadastrar'}
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Faça login
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}
