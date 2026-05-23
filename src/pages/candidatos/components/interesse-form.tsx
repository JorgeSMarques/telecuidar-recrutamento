import { z } from 'zod'
import { toast } from 'sonner'
import { useDraftForm } from '@/hooks/use-draft-form'
import { useUnsavedChanges } from '@/hooks/use-unsaved-changes'
import { UnsavedChangesModal } from '@/components/unsaved-changes-modal'
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
import { useSubmit } from '@/hooks/use-submit'
import { Loader2 } from 'lucide-react'

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
  const defaultValues = { confirmado: false, telefone: '', mensagem: '' }
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
  } = useFormValidation<FormData>(defaultValues, schema)

  const isDirty = JSON.stringify(values) !== JSON.stringify(defaultValues)
  const { isHydrated, clearDraft, handleFocus } = useDraftForm({
    key: 'manifestacao-draft',
    currentValues: values,
    setValues,
  })
  const blocker = useUnsavedChanges(isDirty)

  const { execute: submitForm, isLoading: isSubmittingAPI } = useSubmit(
    (data: any) => avaliacaoService.confirmarInteresse(data),
    {
      successMessage: 'Interesse confirmado! Você receberá o formulário de avaliação em breve.',
      onSuccess: () => {
        clearDraft()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        onSuccess()
      },
    },
  )

  const handlePhone = (val: string) => {
    let v = val.replace(/\D/g, '')
    if (v.length > 11) v = v.slice(0, 11)
    if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
    else if (v.length > 6) v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3')
    else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2')
    handleChange('telefone', v)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!values.confirmado) {
      toast.error('Você deve confirmar o interesse para prosseguir.', { duration: 6000 })
      return
    }
    if (!isValid) {
      toast.error('Corrija os erros abaixo antes de enviar', { duration: 6000 })
      const allTouched = Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
      setTouched(allTouched)
      setTimeout(() => {
        const errElement = document.querySelector(
          '.text-destructive, [aria-invalid="true"], .border-destructive',
        )
        if (errElement) {
          errElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
          const input = errElement
            .closest('fieldset, div')
            ?.querySelector('input, select, textarea') as HTMLElement
          if (input) input.focus()
        }
      }, 300)
      return
    }
    submitForm(values)
  }

  return (
    <Card className="animate-fade-in-up">
      <CardHeader>
        <CardTitle className="text-xl">Manifestação de Interesse</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit} onFocus={handleFocus} className="space-y-6" noValidate>
          <fieldset disabled={isSubmittingAPI} className="border-0 p-0 m-0 min-w-0 w-full">
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
              disabled={isSubmittingAPI}
              className={cn(
                'w-full sm:w-auto transition-colors mt-6',
                isValid && values.confirmado && !isSubmittingAPI
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : '',
                isSubmittingAPI && 'cursor-not-allowed opacity-50',
              )}
            >
              {isSubmittingAPI && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {isSubmittingAPI ? 'Enviando...' : 'Confirmar Interesse'}
            </Button>
          </fieldset>
        </form>
        <UnsavedChangesModal
          blocker={blocker}
          onDiscard={() => {
            clearDraft()
            setValues(defaultValues)
          }}
        />
      </CardContent>
    </Card>
  )
}
