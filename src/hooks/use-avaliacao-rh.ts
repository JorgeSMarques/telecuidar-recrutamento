import { useSubmit } from '@/hooks/use-submit'
import { api } from '@/services/api'

export function useAvaliacaoRH(options?: any) {
  return useSubmit(
    (id: string, data: any) => api.submitAvaliacaoRH({ avaliacaoId: id, ...data }),
    options,
  )
}
