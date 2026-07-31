import pb from '@/lib/pocketbase/client'

export async function submitCaptureForm(data: any) {
  const { curriculo, ...payload } = data

  if (curriculo instanceof File) {
    const formData = new FormData()
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, String(value ?? ''))
    })
    formData.append('curriculo', curriculo)
    return pb.send('/backend/v1/public/candidates/capture', {
      method: 'POST',
      body: formData,
    })
  }

  return pb.send('/backend/v1/public/candidates/capture', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  })
}
