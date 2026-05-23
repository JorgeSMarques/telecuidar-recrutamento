import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Loader2, Trash2, Send } from 'lucide-react'

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
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Skeleton } from '@/components/ui/skeleton'
import { submitCaptureForm } from '@/services/captureService'

const formSchema = z
  .object({
    nome: z.string().min(3, 'Mínimo de 3 caracteres').max(100, 'Máximo 100 caracteres'),
    email: z.string().email('E-mail inválido'),
    telefone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Deve ser (XX) XXXXX-XXXX'),
    linkedin: z.string().url('URL inválida').optional().or(z.literal('')),
    profissao: z.string().min(1, 'Selecione a profissão'),
    especialidade: z.string().min(1, 'Campo obrigatório').max(100, 'Máximo 100 caracteres'),
    experienciaTotal: z.string().min(1, 'Selecione a experiência'),
    experienciaSus: z.string().min(1, 'Selecione a experiência'),
    descricaoSus: z.string().max(500, 'Máximo 500 caracteres').optional(),
    experienciaTelemedicina: z.string().min(1, 'Selecione a experiência'),
    descricaoTelemedicina: z.string().max(500, 'Máximo 500 caracteres').optional(),
    canal: z.string().min(1, 'Selecione o canal'),
    canalOutro: z.string().max(100, 'Máximo 100 caracteres').optional(),
  })
  .refine((d) => d.canal !== 'Outro' || !!d.canalOutro, {
    message: 'Especifique o canal',
    path: ['canalOutro'],
  })

type FormData = z.infer<typeof formSchema>
const defaultValues: FormData = {
  nome: '',
  email: '',
  telefone: '',
  linkedin: '',
  profissao: '',
  especialidade: '',
  experienciaTotal: '',
  experienciaSus: '',
  descricaoSus: '',
  experienciaTelemedicina: '',
  descricaoTelemedicina: '',
  canal: '',
  canalOutro: '',
}

const OPT = {
  prof: ['Médico', 'Enfermeiro', 'Psicólogo', 'Nutricionista', 'Fisioterapeuta', 'Outro'],
  exp: ['Menos de 2 anos', '2-5 anos', '5-10 anos', '10-15 anos', 'Mais de 15 anos'],
  sus: ['Nenhuma', 'Menos de 1 ano', '1-3 anos', '3-5 anos', 'Mais de 5 anos'],
  tele: ['Nenhuma', 'Sim, tenho experiência'],
  canal: [
    'LinkedIn',
    'Google Ads',
    'Instagram',
    'E-mail',
    'Contato Direto',
    'Comunidade/Associação',
    'Parceria',
    'Outro',
  ],
}

export function CaptureForm() {
  const [isHydrated, setIsHydrated] = useState(false)
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange',
  })
  const canal = form.watch('canal')

  useEffect(() => {
    const draft = localStorage.getItem('captacao-draft')
    if (draft) {
      try {
        form.reset(JSON.parse(draft))
      } catch (e) {
        console.error(e)
      }
    }
    setIsHydrated(true)
  }, [form])

  useEffect(() => {
    if (!isHydrated) return
    let timeoutId: NodeJS.Timeout
    const sub = form.watch((value) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(
        () => localStorage.setItem('captacao-draft', JSON.stringify(value)),
        500,
      )
    })
    return () => {
      clearTimeout(timeoutId)
      sub.unsubscribe()
    }
  }, [form, isHydrated])

  const onSubmit = async (data: FormData) => {
    try {
      await submitCaptureForm(data)
      toast.success('Candidatura enviada com sucesso! Você receberá um e-mail de confirmação.')
      form.reset(defaultValues)
      localStorage.removeItem('captacao-draft')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      toast.error('Não foi possível enviar a candidatura. Tente novamente.', {
        action: { label: 'Tentar novamente', onClick: () => onSubmit(data) },
      })
    }
  }

  const formatPhone = (val: string) => {
    let v = val.replace(/\D/g, '')
    if (v.length > 11) v = v.slice(0, 11)
    if (v.length > 10) return v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
    if (v.length > 6) return v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3')
    if (v.length > 2) return v.replace(/^(\d{2})(\d{0,5})/, '($1) $2')
    return v
  }

  if (!isHydrated)
    return (
      <Card>
        <CardContent className="p-6 space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-[400px] w-full" />
        </CardContent>
      </Card>
    )

  const isSubmitting = form.formState.isSubmitting
  const isValid = form.formState.isValid

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Formulário de Captação</CardTitle>
            <CardDescription>Preencha os dados do candidato.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <fieldset className="space-y-4 border p-4 rounded-md">
              <legend className="px-2 text-sm font-medium">Dados Pessoais</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel aria-required>Nome</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel aria-required>E-mail</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel aria-required>Telefone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(XX) XXXXX-XXXX"
                          {...field}
                          onChange={(e) => field.onChange(formatPhone(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL</FormLabel>
                      <FormControl>
                        <Input type="url" placeholder="https://..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>

            <fieldset className="space-y-4 border p-4 rounded-md">
              <legend className="px-2 text-sm font-medium">Profissão e Especialidade</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="profissao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel aria-required>Profissão</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {OPT.prof.map((p) => (
                            <SelectItem key={p} value={p}>
                              {p}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="especialidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel aria-required>Especialidade</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experienciaTotal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel aria-required>Experiência Total</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {OPT.exp.map((p) => (
                            <SelectItem key={p} value={p}>
                              {p}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </fieldset>

            <fieldset className="space-y-4 border p-4 rounded-md">
              <legend className="px-2 text-sm font-medium">Experiência SUS</legend>
              <FormField
                control={form.control}
                name="experienciaSus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel aria-required>Experiência SUS</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {OPT.sus.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="descricaoSus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição da Experiência</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>

            <fieldset className="space-y-4 border p-4 rounded-md">
              <legend className="px-2 text-sm font-medium">Telemedicina</legend>
              <FormField
                control={form.control}
                name="experienciaTelemedicina"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel aria-required>Experiência em Telemedicina</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {OPT.tele.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="descricaoTelemedicina"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição da Experiência</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>

            <fieldset className="space-y-4 border p-4 rounded-md">
              <legend className="px-2 text-sm font-medium">Canal de Captação</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="canal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel aria-required>Canal</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {OPT.canal.map((p) => (
                            <SelectItem key={p} value={p}>
                              {p}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {canal === 'Outro' && (
                  <FormField
                    control={form.control}
                    name="canalOutro"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel aria-required>Especifique</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </fieldset>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset(defaultValues)
                localStorage.removeItem('captacao-draft')
              }}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Limpar Formulário
            </Button>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              Enviar Candidatura
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
