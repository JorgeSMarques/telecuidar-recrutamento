import { useState, useEffect, useRef } from 'react'
import { z } from 'zod'
import { toast } from 'sonner'

export function useFormValidation<T extends Record<string, any>>(
  initialValues: T,
  schema: z.ZodSchema<T>,
) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateDebounced = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (validateDebounced.current) clearTimeout(validateDebounced.current)
    validateDebounced.current = setTimeout(() => {
      const result = schema.safeParse(values)
      const newErrors: any = {}
      if (!result.success) {
        result.error.issues.forEach((issue) => {
          const key = issue.path[0] as keyof T
          if (!newErrors[key]) newErrors[key] = issue.message
        })
      }

      const visibleErrors: any = {}
      Object.keys(touched).forEach((key) => {
        if (touched[key as keyof T] && newErrors[key]) {
          visibleErrors[key] = newErrors[key]
        }
      })
      setErrors(visibleErrors)
    }, 300)

    return () => {
      if (validateDebounced.current) clearTimeout(validateDebounced.current)
    }
  }, [values, touched, schema])

  const handleChange = (name: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (name: keyof T) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit =
    (onSubmit: (data: T) => void | Promise<void>) => async (e?: React.FormEvent) => {
      if (e) e.preventDefault()

      const allTouched: any = {}
      Object.keys(values).forEach((key) => {
        allTouched[key] = true
      })
      setTouched(allTouched)

      const result = schema.safeParse(values)
      if (!result.success) {
        const newErrors: any = {}
        result.error.issues.forEach((issue) => {
          const key = issue.path[0] as keyof T
          if (!newErrors[key]) newErrors[key] = issue.message
        })
        setErrors(newErrors)
        toast.error('Corrija os erros abaixo antes de enviar')
        return
      }

      setIsSubmitting(true)
      try {
        await onSubmit(values)
      } finally {
        setIsSubmitting(false)
      }
    }

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    setTouched,
  }
}
