import pb from '@/lib/pocketbase/client'
import type { CandidatoBase } from '@/types'

export async function getCandidates() {
  return pb.collection<CandidatoBase>('candidates').getFullList({
    sort: '-created',
  })
}

export async function getCandidate(id: string) {
  return pb.collection<CandidatoBase>('candidates').getOne(id)
}

export async function createCandidate(data: Partial<CandidatoBase>) {
  return pb.collection<CandidatoBase>('candidates').create(data)
}

export async function updateCandidate(id: string, data: Partial<CandidatoBase>) {
  return pb.collection<CandidatoBase>('candidates').update(id, data)
}

export async function deleteCandidate(id: string) {
  return pb.collection<CandidatoBase>('candidates').delete(id)
}
