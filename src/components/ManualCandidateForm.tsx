import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import pb from '@/lib/pocketbase/client'
import { useAuth } from '@/hooks/use-auth'
import { extractFieldErrors } from '@/lib/pocketbase/errors'
import { useToast } from '@/hooks/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const candidateSchema = z.object({
  nome: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().optional(),
  profissao: z.string().optional(),
})

type CandidateFormValues = z.infer<typeof candidateSchema>

export function ManualCandidateForm() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<CandidateFormValues>({
    resolver: zodResolver(candidateSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      profissao: '',
    },
  })

  const onSubmit = async (data: CandidateFormValues) => {
    setIsSubmitting(true)
    try {
      await pb.collection('candidates').create({
        ...data,
        userId: user?.id,
        status: 'Captação',
      })
      toast({
        title: 'Sucesso!',
        description: 'Candidato cadastrado com sucesso.',
      })
      form.reset()
    } catch (err) {
      const fieldErrors = extractFieldErrors(err)
      if (Object.keys(fieldErrors).length > 0) {
        Object.entries(fieldErrors).forEach(([field, msg]) => {
          form.setError(field as any, { message: msg })
        })
      } else {
        toast({
          title: 'Erro ao cadastrar',
          description: 'Verifique os dados e tente novamente.',
          variant: 'destructive',
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo *</FormLabel>
                <FormControl>
                  <Input placeholder="João da Silva" {...field} />
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
                <FormLabel>E-mail *</FormLabel>
                <FormControl>
                  <Input placeholder="joao@exemplo.com" type="email" {...field} />
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
                  <Input placeholder="(11) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profissao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profissão</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Médico">Médico</SelectItem>
                    <SelectItem value="Enfermeiro">Enfermeiro</SelectItem>
                    <SelectItem value="Psicólogo">Psicólogo</SelectItem>
                    <SelectItem value="Nutricionista">Nutricionista</SelectItem>
                    <SelectItem value="Fisioterapeuta">Fisioterapeuta</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end pt-4 border-t mt-6">
          <Button type="submit" disabled={isSubmitting} size="lg">
            {isSubmitting ? 'Salvando...' : 'Salvar Candidato'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
