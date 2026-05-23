import { useSubmit } from '@/hooks/use-submit'
import { api } from '@/services/api'

export function useCapture(options?: any) {
  return useSubmit((data: any) => api.captureCandidate(data), options)
}
