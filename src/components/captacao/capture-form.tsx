import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Loader2, Trash2, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
      toast.error('Não foi possível enviar a candidatura. Tente novamente.')
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
      <Card className="border shadow-subtle rounded-xl overflow-hidden">
        <CardContent className="p-4 md:p-6 lg:p-8 space-y-6">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[200px] w-full" />
        </CardContent>
      </Card>
    )

  const isSubmitting = form.formState.isSubmitting
  const isValid = form.formState.isValid

  return (
    <Card className="border shadow-subtle rounded-xl overflow-hidden bg-card text-card-foreground">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 md:p-6 lg:p-8">
          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">Dados Pessoais</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} aria-required />
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
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} aria-required />
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
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(XX) XXXXX-XXXX"
                        {...field}
                        aria-required
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

          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">
              Profissão e Especialidade
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="profissao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profissão</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger aria-required>
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
                    <FormLabel>Especialidade</FormLabel>
                    <FormControl>
                      <Input {...field} aria-required />
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
                    <FormLabel>Experiência Total</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger aria-required>
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

          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">Experiência SUS</legend>
            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="experienciaSus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tempo de Experiência</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger aria-required>
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
            </div>
          </fieldset>

          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">Telemedicina</legend>
            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="experienciaTelemedicina"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experiência em Telemedicina</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger aria-required>
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
            </div>
          </fieldset>

          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">Canal de Captação</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="canal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Canal</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger aria-required>
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
                      <FormLabel>Especifique</FormLabel>
                      <FormControl>
                        <Input {...field} aria-required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
          </fieldset>

          <div className="flex flex-col md:flex-row gap-4 mt-8 pt-4">
            <Button type="submit" disabled={!isValid || isSubmitting} className="w-full md:w-auto">
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              Enviar Candidatura
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full md:w-auto"
              onClick={() => {
                form.reset(defaultValues)
                localStorage.removeItem('captacao-draft')
              }}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Limpar Formulário
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  )
}
