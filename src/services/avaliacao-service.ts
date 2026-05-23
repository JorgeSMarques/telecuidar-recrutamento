import { CandidatoAvaliacao } from '@/types'
import { mockCandidatosAvaliacao } from '@/mocks/candidatosAvaliacao'

export const avaliacaoService = {
  getCandidatos: async (): Promise<CandidatoAvaliacao[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(mockCandidatosAvaliacao), 800))
  },
  enviarAvaliacao: async (id: string, data: any) => {
    return new Promise((resolve) => setTimeout(() => resolve({ success: true, id, data }), 1000))
  },
  confirmarInteresse: async (data: unknown) => {
    return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 2000))
  },
}
