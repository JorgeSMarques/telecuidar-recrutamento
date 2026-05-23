import { useState, useCallback, useRef, useEffect } from 'react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { ClientResponseError } from 'pocketbase'

export interface UseSubmitOptions<TRes> {
  onSuccess?: (data: TRes) => void
  onError?: (error: any) => void
  successMessage?: string
  timeoutMs?: number
}

export function useSubmit<TArgs extends any[], TRes>(
  submitFn: (...args: TArgs) => Promise<TRes>,
  options?: UseSubmitOptions<TRes>,
) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const navigate = useNavigate()
  const abortControllerRef = useRef<AbortController | null>(null)

  const execute = useCallback(
    async (...args: TArgs) => {
      setIsLoading(true)
      setError(null)
      let attempt = 0
      const maxAttempts = 4
      const delays = [0, 2000, 4000]

      const doAttempt = async (): Promise<TRes | undefined> => {
        try {
          abortControllerRef.current = new AbortController()
          const timeoutId = setTimeout(() => {
            abortControllerRef.current?.abort('timeout')
          }, options?.timeoutMs || 30000)

          const res = await Promise.race([
            submitFn(...args),
            new Promise<never>((_, reject) => {
              abortControllerRef.current?.signal.addEventListener('abort', () => {
                reject(new Error('timeout'))
              })
            }),
          ])

          clearTimeout(timeoutId)
          setIsLoading(false)

          if (options?.successMessage) {
            toast.success(options.successMessage, { duration: 4000 })
          }
          options?.onSuccess?.(res)
          return res
        } catch (err: any) {
          const isTimeout = err.message === 'timeout'
          const isAuth =
            err instanceof ClientResponseError && (err.status === 401 || err.status === 403)
          const isValidation = err instanceof ClientResponseError && err.status === 400
          const isRetryable =
            isTimeout || (err instanceof ClientResponseError && err.status >= 500) || !err.status

          if (isAuth) {
            setIsLoading(false)
            import('@/lib/pocketbase/client').then((mod) => {
              mod.default.authStore.clear()
            })
            toast.error('Sua sessão expirou. Faça login novamente.', { duration: 6000 })
            navigate('/login')
            return
          }

          if (isValidation || !isRetryable) {
            setIsLoading(false)
            setError(err)
            options?.onError?.(err)
            return
          }

          if (attempt < maxAttempts - 1) {
            const delay = delays[attempt]
            attempt++

            toast.error(`Erro de conexão. Tentando novamente em ${delay / 1000}s...`, {
              id: 'retry-toast',
              duration: delay + 1000,
              action: {
                label: 'Tentar Agora',
                onClick: () => {
                  toast.dismiss('retry-toast')
                  doAttempt()
                },
              },
            })

            await new Promise((resolve) => setTimeout(resolve, delay))
            return doAttempt()
          } else {
            setIsLoading(false)
            setError(err)
            toast.error(
              'Não conseguimos processar sua solicitação. Contate o suporte em suporte@telecuidar.com.br',
              { duration: Infinity, action: { label: 'Fechar', onClick: () => toast.dismiss() } },
            )
            options?.onError?.(err)
          }
        }
      }

      return doAttempt()
    },
    [submitFn, options, navigate],
  )

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  return { execute, isLoading, error }
}
