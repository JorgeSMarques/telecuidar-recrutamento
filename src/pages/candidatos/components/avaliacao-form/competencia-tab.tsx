import { useFormContext } from 'react-hook-form'
import { AvaliacaoFormData } from './schema'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export const COMPETENCIA_FIELDS = [
  { id: 'experiencia', label: 'Experiência Profissional' },
  { id: 'experienciaSus', label: 'Experiência no SUS' },
  { id: 'formacao', label: 'Formação Acadêmica' },
  { id: 'telemedicina', label: 'Experiência com Telemedicina' },
] as const

export function CompetenciaTab() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<AvaliacaoFormData>()

  return (
    <div className="space-y-6 mt-4">
      {COMPETENCIA_FIELDS.map((cField) => {
        const val = watch(`competencia.${cField.id}`) || ''
        const error = errors.competencia?.[cField.id]

        return (
          <div key={cField.id} className="space-y-2">
            <Label htmlFor={cField.id}>
              {cField.label} <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id={cField.id}
              {...register(`competencia.${cField.id}`)}
              maxLength={500}
              aria-invalid={!!error}
              aria-required="true"
              aria-describedby={error ? `error-${cField.id}` : undefined}
              className="min-h-24"
            />
            <div className="flex justify-between text-[0.75rem] mt-1">
              {error ? (
                <span id={`error-${cField.id}`} className="text-destructive">
                  {error.message}
                </span>
              ) : (
                <span />
              )}
              <span className="opacity-60 text-right w-full">{val.length}/500</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
