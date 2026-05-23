import { useSubmit } from '@/hooks/use-submit'
import { api } from '@/services/api'

export function useAprovacao(options?: any) {
  return useSubmit(
    (id: string, data: any) => api.createInterview({ candidatoId: id, ...data }),
    options,
  )
}
