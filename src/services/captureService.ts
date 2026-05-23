import { CaptureFormData } from '@/types'

export const submitCaptureForm = async (data: CaptureFormData): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 2000)
  })
}
