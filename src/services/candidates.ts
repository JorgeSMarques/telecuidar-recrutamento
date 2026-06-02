import pb from '@/lib/pocketbase/client'
import type { RecordModel } from 'pocketbase'

export const getCandidatesByStatus = async (status: string): Promise<RecordModel[]> => {
  return pb.collection('candidates').getFullList({
    filter: `status = '${status}'`,
    sort: '-created',
  })
}
