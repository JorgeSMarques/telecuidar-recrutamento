import { useSubmit } from '@/hooks/use-submit'
import { api } from '@/services/api'

export function useManifestacao(options?: any) {
  return useSubmit((data: any) => api.createManifestacao(data), options)
}
