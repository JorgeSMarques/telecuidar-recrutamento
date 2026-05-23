export const submitCaptureForm = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data })
    }, 1500)
  })
}
