import { useState } from 'react'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { avaliacaoService } from '@/services/avaliacao-service'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const schema = z.object({
  confirmado: z.literal(true, { errorMap: () => ({ message: 'Você deve confirmar o interesse' }) }),
  telefone: z.string().min(14, 'Telefone inválido'),
  mensagem: z.string().max(300, 'Máximo 300 caracteres').optional(),
})

type FormData = z.infer<typeof schema>

export function InteresseForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { confirmado: false as true, telefone: '', mensagem: '' },
    mode: 'onChange',
  })

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '')
    if (v.length > 11) v = v.slice(0, 11)
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2')
    v = v.replace(/(\d)(\d{4})$/, '$1-$2')
    setValue('telefone', v, { shouldValidate: true })
  }

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      await avaliacaoService.confirmarInteresse(data)
      toast.success('Interesse confirmado! Você receberá o formulário de avaliação em breve.')
      onSuccess()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-xl">Manifestação de Interesse</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex items-start space-x-3">
            <Controller
              control={control}
              name="confirmado"
              render={({ field }) => (
                <Checkbox
                  id="confirmado"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-1"
                  aria-invalid={!!errors.confirmado}
                />
              )}
            />
            <div className="space-y-1 leading-none">
              <Label htmlFor="confirmado" className="font-medium">
                Confirmo meu interesse em participar do processo de seleção da Telecuidar{' '}
                <span className="text-destructive">*</span>
              </Label>
              {errors.confirmado && (
                <p className="text-sm text-destructive mt-1">{errors.confirmado.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">
              Telefone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="telefone"
              placeholder="(00) 00000-0000"
              value={watch('telefone')}
              onChange={handlePhone}
              aria-invalid={!!errors.telefone}
            />
            {errors.telefone && (
              <p className="text-sm text-destructive">{errors.telefone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem Adicional (opcional)</Label>
            <Textarea
              id="mensagem"
              {...register('mensagem')}
              placeholder="Alguma observação importante?"
              maxLength={300}
            />
            <div className="text-xs text-muted-foreground text-right">
              {(watch('mensagem') || '').length}/300
            </div>
          </div>

          <Button type="submit" disabled={!isValid || loading} className="w-full sm:w-auto">
            {loading ? 'Confirmando...' : 'Confirmar Interesse'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
