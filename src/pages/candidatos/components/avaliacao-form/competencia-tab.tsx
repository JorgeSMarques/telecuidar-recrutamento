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

import { AlertTriangle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function CompetenciaTab({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) {
  const {
    register,
    watch,
    formState: { errors, touchedFields },
  } = useFormContext<AvaliacaoFormData>()

  const cidadaniaValor = watch('valores.cidadania.valor')
  const showSusWarning = cidadaniaValor === 1 || cidadaniaValor === 2

  return (
    <div className="space-y-6 mt-4">
      {COMPETENCIA_FIELDS.map((cField) => {
        const val = watch(`competencia.${cField.id}`) || ''
        const error = errors.competencia?.[cField.id]
        const touched = touchedFields.competencia?.[cField.id]
        const isSusField = cField.id === 'experienciaSus'

        let counterColor = 'text-muted-foreground'
        const ratio = val.length / 500
        if (ratio >= 1) counterColor = 'text-destructive'
        else if (ratio >= 0.8) counterColor = 'text-ring'

        return (
          <div key={cField.id} className="space-y-2 relative">
            <Label htmlFor={cField.id} className={error && touched ? 'text-destructive' : ''}>
              {cField.label} <span className="text-destructive">*</span>
            </Label>

            {isSusField && showSusWarning && (
              <div className="animate-fade-in mb-2 inline-flex items-center gap-2 bg-ring/10 text-ring px-3 py-1.5 rounded-md border border-ring/20 text-sm font-medium">
                <AlertTriangle className="h-4 w-4" />
                ⚠️ Atenção: sua resposta anterior sugere pouca experiência no SUS
              </div>
            )}

            <div className="relative">
              <Textarea
                id={cField.id}
                {...register(`competencia.${cField.id}`)}
                maxLength={500}
                aria-invalid={!!error && !!touched}
                aria-required="true"
                aria-describedby={error && touched ? `error-${cField.id}` : undefined}
                className={`min-h-24 ${error && touched ? 'pr-10 border-destructive ring-destructive' : ''}`}
              />
            </div>

            <div className="flex justify-between items-start min-h-[1.25rem] mt-1">
              <div className="flex-1">
                {error && touched ? (
                  <span
                    id={`error-${cField.id}`}
                    className="text-destructive text-sm font-medium animate-fade-in"
                  >
                    {error.message}
                  </span>
                ) : null}
              </div>
              <span className={`text-xs ml-4 font-medium transition-colors ${counterColor}`}>
                {val.length}/500
              </span>
            </div>
          </div>
        )
      })}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 pt-4">
        <Button type="button" variant="outline" onClick={onPrev}>
          Voltar
        </Button>
        <Button type="button" onClick={onNext}>
          Próxima
        </Button>
      </div>
    </div>
  )
}
