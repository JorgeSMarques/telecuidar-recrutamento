import { useState } from 'react'
import { z } from 'zod'
import { useDraftForm } from '@/hooks/use-draft-form'
import { useUnsavedChanges } from '@/hooks/use-unsaved-changes'
import { UnsavedChangesModal } from '@/components/unsaved-changes-modal'
import { toast } from 'sonner'
import { Loader2, Trash2, Send } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSubmit } from '@/hooks/use-submit'
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
import { Skeleton } from '@/components/ui/skeleton'
import { DynamicFormField, ConditionalField } from '@/components/ui/dynamic-form'
import { useFormValidation } from '@/hooks/use-form-validation'
import { submitCaptureForm } from '@/services/captureService'

const formSchema = z
  .object({
    nome: z.string().min(3, 'Mínimo de 3 caracteres').max(100, 'Máximo 100 caracteres'),
    email: z.string().email('E-mail deve ser válido'),
    telefone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Deve ser no formato (XX) XXXXX-XXXX'),
    linkedin: z
      .string()
      .url('URL inválida')
      .refine(
        (val) => val === '' || /^https:\/\/(www\.)?linkedin\.com/.test(val),
        'URL deve ser do LinkedIn',
      )
      .optional()
      .or(z.literal('')),
    profissao: z.string().min(1, 'Campo obrigatório'),
    especialidade: z.string().min(1, 'Campo obrigatório').max(100, 'Máximo 100 caracteres'),
    experienciaTotal: z.string().min(1, 'Campo obrigatório'),
    experienciaSus: z.string().min(1, 'Campo obrigatório'),
    descricaoSus: z.string().max(500, 'Máximo 500 caracteres').optional(),
    experienciaTelemedicina: z.string().min(1, 'Campo obrigatório'),
    descricaoTelemedicina: z.string().max(500, 'Máximo 500 caracteres').optional(),
    canal: z.string().min(1, 'Campo obrigatório'),
    canalOutro: z.string().max(100, 'Máximo 100 caracteres').optional(),
  })
  .refine((d) => d.canal !== 'Outro' || (d.canalOutro && d.canalOutro.length > 0), {
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
    setTouched,
  } = useFormValidation(defaultValues, formSchema)

  const isDirty = JSON.stringify(values) !== JSON.stringify(defaultValues)

  const { isHydrated, clearDraft, handleFocus } = useDraftForm({
    key: 'captacao-draft',
    currentValues: values,
    setValues,
    adapter: {
      toDraft: (v) => ({
        nome: v.nome,
        email: v.email,
        telefone: v.telefone,
        linkedinUrl: v.linkedin,
        profissao: v.profissao,
        especialidade: v.especialidade,
        experienciaTotal: v.experienciaTotal,
        experienciaSUS: v.experienciaSus,
        descricaoSUS: v.descricaoSus,
        telemedicina: v.experienciaTelemedicina,
        descricaoTelemedicina: v.descricaoTelemedicina,
        canalCaptacao: v.canal,
        especifiqueOutro: v.canalOutro,
      }),
      fromDraft: (d: any) => ({
        nome: d.nome || '',
        email: d.email || '',
        telefone: d.telefone || '',
        linkedin: d.linkedinUrl || '',
        profissao: d.profissao || '',
        especialidade: d.especialidade || '',
        experienciaTotal: d.experienciaTotal || '',
        experienciaSus: d.experienciaSUS || '',
        descricaoSus: d.descricaoSUS || '',
        experienciaTelemedicina: d.telemedicina || '',
        descricaoTelemedicina: d.descricaoTelemedicina || '',
        canal: d.canalCaptacao || '',
        canalOutro: d.especifiqueOutro || '',
      }),
    },
  })

  const blocker = useUnsavedChanges(isDirty)

  const { execute: submitForm, isLoading: isSubmittingAPI } = useSubmit(submitCaptureForm, {
    successMessage: 'Candidatura enviada! Você receberá um e-mail de confirmação em breve.',
    onSuccess: () => {
      setValues(defaultValues)
      setTouched({})
      clearDraft()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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

  const formatPhone = (val: string) => {
    let v = val.replace(/\D/g, '')
    if (v.length > 11) v = v.slice(0, 11)
    if (v.length > 10) return v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
    if (v.length > 6) return v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3')
    if (v.length > 2) return v.replace(/^(\d{2})(\d{0,5})/, '($1) $2')
    return v
  }

  if (!isHydrated) {
    return (
      <Card className="border shadow-subtle rounded-xl overflow-hidden">
        <CardContent className="p-4 md:p-6 lg:p-8 space-y-6">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[200px] w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border shadow-subtle rounded-xl overflow-hidden bg-card text-card-foreground">
      <form
        onSubmit={handleFormSubmit}
        onFocus={handleFocus}
        className="p-4 md:p-6 lg:p-8"
        noValidate
      >
        <fieldset disabled={isSubmittingAPI} className="border-0 p-0 m-0 min-w-0 w-full">
          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">Dados Pessoais</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DynamicFormField
                id="nome"
                label="Nome"
                required
                touched={touched.nome}
                error={errors.nome}
                currentLength={values.nome.length}
                maxLength={100}
              >
                <Input
                  name="nome"
                  value={values.nome}
                  onChange={(e) => handleChange('nome', e.target.value)}
                  onBlur={() => handleBlur('nome')}
                />
              </DynamicFormField>

              <DynamicFormField
                id="email"
                label="E-mail"
                required
                touched={touched.email}
                error={errors.email}
              >
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                />
              </DynamicFormField>

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
                  value={values.telefone}
                  onChange={(e) => handleChange('telefone', formatPhone(e.target.value))}
                  onBlur={() => handleBlur('telefone')}
                />
              </DynamicFormField>

              <DynamicFormField
                id="linkedin"
                label="LinkedIn URL"
                touched={touched.linkedin}
                error={errors.linkedin}
              >
                <Input
                  name="linkedin"
                  type="url"
                  placeholder="https://www.linkedin.com/in/..."
                  value={values.linkedin}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  onBlur={() => handleBlur('linkedin')}
                />
              </DynamicFormField>
            </div>
          </fieldset>

          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">
              Profissão e Especialidade
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DynamicFormField
                id="profissao"
                label="Profissão"
                required
                touched={touched.profissao}
                error={errors.profissao}
              >
                <Select
                  value={values.profissao}
                  onValueChange={(v) => {
                    handleChange('profissao', v)
                    handleBlur('profissao')
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPT.prof.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </DynamicFormField>

              <DynamicFormField
                id="especialidade"
                label="Especialidade"
                required
                touched={touched.especialidade}
                error={errors.especialidade}
                currentLength={values.especialidade.length}
                maxLength={100}
              >
                <Input
                  name="especialidade"
                  value={values.especialidade}
                  onChange={(e) => handleChange('especialidade', e.target.value)}
                  onBlur={() => handleBlur('especialidade')}
                />
              </DynamicFormField>

              <DynamicFormField
                id="experienciaTotal"
                label="Experiência Total"
                required
                touched={touched.experienciaTotal}
                error={errors.experienciaTotal}
              >
                <Select
                  value={values.experienciaTotal}
                  onValueChange={(v) => {
                    handleChange('experienciaTotal', v)
                    handleBlur('experienciaTotal')
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPT.exp.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </DynamicFormField>
            </div>
          </fieldset>

          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">Experiência SUS</legend>
            <div className="grid grid-cols-1 gap-6">
              <DynamicFormField
                id="experienciaSus"
                label="Tempo de Experiência"
                required
                touched={touched.experienciaSus}
                error={errors.experienciaSus}
              >
                <Select
                  value={values.experienciaSus}
                  onValueChange={(v) => {
                    handleChange('experienciaSus', v)
                    handleBlur('experienciaSus')
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPT.sus.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </DynamicFormField>

              <DynamicFormField
                id="descricaoSus"
                label="Descrição da Experiência"
                touched={touched.descricaoSus}
                error={errors.descricaoSus}
                currentLength={values.descricaoSus?.length || 0}
                maxLength={500}
              >
                <Textarea
                  name="descricaoSus"
                  value={values.descricaoSus}
                  onChange={(e) => handleChange('descricaoSus', e.target.value)}
                  onBlur={() => handleBlur('descricaoSus')}
                />
              </DynamicFormField>
            </div>
          </fieldset>

          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">Telemedicina</legend>
            <div className="grid grid-cols-1 gap-6">
              <DynamicFormField
                id="experienciaTelemedicina"
                label="Experiência em Telemedicina"
                required
                touched={touched.experienciaTelemedicina}
                error={errors.experienciaTelemedicina}
              >
                <Select
                  value={values.experienciaTelemedicina}
                  onValueChange={(v) => {
                    handleChange('experienciaTelemedicina', v)
                    handleBlur('experienciaTelemedicina')
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPT.tele.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </DynamicFormField>

              <DynamicFormField
                id="descricaoTelemedicina"
                label="Descrição da Experiência"
                touched={touched.descricaoTelemedicina}
                error={errors.descricaoTelemedicina}
                currentLength={values.descricaoTelemedicina?.length || 0}
                maxLength={500}
              >
                <Textarea
                  name="descricaoTelemedicina"
                  value={values.descricaoTelemedicina}
                  onChange={(e) => handleChange('descricaoTelemedicina', e.target.value)}
                  onBlur={() => handleBlur('descricaoTelemedicina')}
                />
              </DynamicFormField>
            </div>
          </fieldset>

          <fieldset className="mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0">
            <legend className="text-[1.125rem] font-semibold mb-4 w-full">Canal de Captação</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <DynamicFormField
                id="canal"
                label="Canal"
                required
                touched={touched.canal}
                error={errors.canal}
              >
                <Select
                  value={values.canal}
                  onValueChange={(v) => {
                    handleChange('canal', v)
                    handleBlur('canal')
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {OPT.canal.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </DynamicFormField>

              <div className="md:col-start-2">
                <ConditionalField show={values.canal === 'Outro'}>
                  <DynamicFormField
                    id="canalOutro"
                    label="Especifique o Canal"
                    required
                    touched={touched.canalOutro}
                    error={errors.canalOutro}
                    currentLength={values.canalOutro?.length || 0}
                    maxLength={100}
                  >
                    <Input
                      name="canalOutro"
                      value={values.canalOutro}
                      onChange={(e) => handleChange('canalOutro', e.target.value)}
                      onBlur={() => handleBlur('canalOutro')}
                    />
                  </DynamicFormField>
                </ConditionalField>
              </div>
            </div>
          </fieldset>

          <div className="flex flex-col md:flex-row gap-4 mt-8 pt-4">
            <Button
              type="submit"
              disabled={isSubmittingAPI}
              className={cn(
                'w-full md:w-auto transition-colors',
                isValid && !isSubmittingAPI
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'hover:bg-primary/90',
                isSubmittingAPI && 'cursor-not-allowed opacity-50',
              )}
            >
              {isSubmittingAPI ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              {isSubmittingAPI ? 'Enviando...' : 'Enviar Candidatura'}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full md:w-auto"
              onClick={() => {
                setValues(defaultValues)
                setTouched({})
                clearDraft()
              }}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Limpar Formulário
            </Button>
          </div>
        </fieldset>
      </form>
      <UnsavedChangesModal
        blocker={blocker}
        onDiscard={() => {
          clearDraft()
          setValues(defaultValues)
          setTouched({})
        }}
      />
    </Card>
  )
}
