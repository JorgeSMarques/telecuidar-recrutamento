import { useFormContext } from 'react-hook-form'
import { AvaliacaoFormData } from './schema'
import { Button } from '@/components/ui/button'
import { VALORES_FIELDS } from './valores-tab'
import { COMPETENCIA_FIELDS } from './competencia-tab'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

interface ResumoTabProps {
  onEdit: () => void
  onSubmit: () => void
  loading: boolean
}

export function ResumoTab({ onEdit, onSubmit, loading }: ResumoTabProps) {
  const {
    getValues,
    formState: { isValid, isSubmitted },
  } = useFormContext<AvaliacaoFormData>()
  const values = getValues()

  return (
    <div className="space-y-6 mt-4 text-sm animate-fade-in-up">
      {!isValid && isSubmitted && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Existem erros no formulário. Por favor, volte e corrija antes de enviar.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Valores da Empresa</h3>
        {VALORES_FIELDS.map((f) => (
          <div
            key={f.id}
            className="grid grid-cols-1 md:grid-cols-2 border-b border-border pb-2 gap-2"
          >
            <span className="font-medium">{f.label}</span>
            <div className="space-y-1 text-muted-foreground">
              <p>Nota: {values.valores?.[f.id]?.valor || 'Não respondido'}</p>
              {values.valores?.[f.id]?.exp && (
                <p className="italic">"{values.valores[f.id].exp}"</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Competência Técnica</h3>
        {COMPETENCIA_FIELDS.map((f) => {
          const text = values.competencia?.[f.id] || ''
          return (
            <div key={f.id} className="border-b border-border pb-2">
              <span className="font-medium block mb-1">{f.label}</span>
              <p className="text-muted-foreground">
                {text ? text.slice(0, 100) + (text.length > 100 ? '...' : '') : 'Não respondido'}
              </p>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 pt-4">
        <Button variant="outline" type="button" onClick={onEdit} disabled={loading}>
          Voltar e Editar
        </Button>
        <Button type="button" onClick={onSubmit} disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Formulário'}
        </Button>
      </div>
    </div>
  )
}
