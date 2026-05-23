import { CandidatoAprovacao } from '@/types'
import { mockCandidatosAprovacao } from '@/mocks/candidatosAprovacao'

export const aprovacaoService = {
  getCandidatos: async (): Promise<CandidatoAprovacao[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(mockCandidatosAprovacao), 800))
  },
  enviarAprovacao: async (id: string, data: any) => {
    return new Promise((resolve) => setTimeout(() => resolve({ success: true, id, data }), 1000))
  },
}
