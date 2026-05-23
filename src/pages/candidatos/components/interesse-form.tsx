import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { avaliacaoService } from '@/services/avaliacao-service'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { DynamicFormField, ConditionalField } from '@/components/ui/dynamic-form'
import { useFormValidation } from '@/hooks/use-form-validation'

const schema = z
  .object({
    confirmado: z.boolean(),
    telefone: z.string().optional(),
    mensagem: z.string().max(300, 'Máximo 300 caracteres').optional(),
  })
  .refine((d) => !d.confirmado || (d.telefone && /^\(\d{2}\) \d{4,5}-\d{4}$/.test(d.telefone)), {
    message: 'Telefone deve estar no formato (XX) XXXXX-XXXX',
    path: ['telefone'],
  })

type FormData = z.infer<typeof schema>

export function InteresseForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setValues,
  } = useFormValidation<FormData>({ confirmado: false, telefone: '', mensagem: '' }, schema)

  const handlePhone = (val: string) => {
    let v = val.replace(/\D/g, '')
    if (v.length > 11) v = v.slice(0, 11)
    if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
    else if (v.length > 6) v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3')
    else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2')
    handleChange('telefone', v)
  }

  const onSubmit = async (data: FormData) => {
    if (!data.confirmado) {
      toast.error('Você deve confirmar o interesse para prosseguir.')
      return
    }
    try {
      await avaliacaoService.confirmarInteresse(data as any)
      toast.success('Interesse confirmado! Você receberá o formulário de avaliação em breve.', {
        className: 'bg-primary text-primary-foreground border-none',
      })
      onSuccess()
    } catch {
      toast.error('Erro ao confirmar interesse')
    }
  }

  return (
    <Card className="animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-xl">Manifestação de Interesse</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="confirmado"
              checked={values.confirmado}
              onCheckedChange={(c) => setValues((p) => ({ ...p, confirmado: c === true }))}
              className="mt-1"
            />
            <div className="space-y-1 leading-none flex-1">
              <Label htmlFor="confirmado" className="font-medium text-base cursor-pointer">
                Confirmo meu interesse em participar do processo de seleção da Telecuidar{' '}
                <span className="text-destructive">*</span>
              </Label>
            </div>
          </div>

          <ConditionalField show={values.confirmado}>
            <div className="space-y-6">
              <DynamicFormField
                id="telefone"
                label="Telefone"
                required
                touched={touched.telefone}
                error={errors.telefone}
              >
                <Input
                  name="telefone"
                  placeholder="(XX) XXXXX-XXXX"
                  value={values.telefone || ''}
                  onChange={(e) => handlePhone(e.target.value)}
                  onBlur={() => handleBlur('telefone')}
                />
              </DynamicFormField>

              <DynamicFormField
                id="mensagem"
                label="Mensagem Adicional (opcional)"
                touched={touched.mensagem}
                error={errors.mensagem}
                currentLength={values.mensagem?.length || 0}
                maxLength={300}
              >
                <Textarea
                  name="mensagem"
                  placeholder="Alguma observação importante?"
                  value={values.mensagem || ''}
                  onChange={(e) => handleChange('mensagem', e.target.value)}
                  onBlur={() => handleBlur('mensagem')}
                />
              </DynamicFormField>
            </div>
          </ConditionalField>

          <Button
            type="submit"
            disabled={isSubmitting || !values.confirmado || !isValid}
            className={cn(
              'w-full sm:w-auto transition-colors',
              isValid && values.confirmado ? 'bg-green-600 hover:bg-green-700' : '',
            )}
          >
            {isSubmitting ? 'Confirmando...' : 'Confirmar Interesse'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
