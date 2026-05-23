import { useSubmit } from '@/hooks/use-submit'
import { api } from '@/services/api'

export function useAvaliacao(options?: any) {
  return useSubmit((data: any) => api.createAvaliacao(data), options)
}
