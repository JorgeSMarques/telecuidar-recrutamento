import { useFormContext, Controller } from 'react-hook-form'
import { AvaliacaoFormData } from './schema'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export const VALORES_FIELDS = [
  { id: 'humanizacao', label: 'Humanização' },
  { id: 'racionalidade', label: 'Racionalidade' },
  { id: 'economicidade', label: 'Economicidade' },
  { id: 'competencia', label: 'Competência Técnica' },
  { id: 'cidadania', label: 'Cidadania' },
] as const

export function ValoresTab() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<AvaliacaoFormData>()

  return (
    <div className="space-y-8 mt-4 animate-fade-in-up">
      {VALORES_FIELDS.map((vField) => {
        const error = errors.valores?.[vField.id]?.valor
        return (
          <fieldset
            key={vField.id}
            className="border p-4 rounded-md space-y-4"
            aria-invalid={!!error}
          >
            <legend className="font-semibold px-2">
              {vField.label} <span className="text-destructive">*</span>
            </legend>
            <Controller
              control={control}
              name={`valores.${vField.id}.valor`}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={(v) => field.onChange(Number(v))}
                  value={field.value ? String(field.value) : undefined}
                  className="flex gap-4"
                  aria-required="true"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className="flex items-center space-x-1">
                      <RadioGroupItem value={String(n)} id={`${vField.id}-${n}`} />
                      <Label htmlFor={`${vField.id}-${n}`} className="cursor-pointer">
                        {n}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            />
            {error && <span className="text-sm text-destructive">{error.message}</span>}
            <div className="space-y-2">
              <Label htmlFor={`exp-${vField.id}`}>Explique sua resposta (opcional)</Label>
              <Textarea
                id={`exp-${vField.id}`}
                {...register(`valores.${vField.id}.exp`)}
                maxLength={200}
              />
            </div>
          </fieldset>
        )
      })}
    </div>
  )
}
