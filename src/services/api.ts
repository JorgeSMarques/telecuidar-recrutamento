import pb from '@/lib/pocketbase/client'

export const api = {
  async fetchWithRetry(path: string, options: any, retries = 1): Promise<any> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 28000)

    try {
      const res = await pb.send(path, { ...options, signal: controller.signal })
      clearTimeout(timeoutId)
      return res
    } catch (error: any) {
      clearTimeout(timeoutId)
      if (error.status === 503 && retries > 0) {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return this.fetchWithRetry(path, options, retries - 1)
      }
      throw error
    }
  },

  post(path: string, body: any) {
    return this.fetchWithRetry(path, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
  },

  captureCandidate(data: any) {
    return this.post('/backend/v1/candidates/capture', data)
  },

  createManifestacao(data: any) {
    return this.post('/backend/v1/manifestacoes/create', data)
  },

  createAvaliacao(data: any) {
    return this.post('/backend/v1/avaliacoes/create', data)
  },

  submitAvaliacaoRH(data: any) {
    return this.post('/backend/v1/avaliacoes/rh', data)
  },

  createInterview(data: any) {
    return this.post('/backend/v1/interviews/create', data)
  },

  scoreAlinhamento(data: any) {
    return this.post('/backend/v1/scoring/alinhamento', data)
  },

  searchWeb(candidatoId: string) {
    return this.post('/backend/v1/search/web', { candidatoId })
  },
}
