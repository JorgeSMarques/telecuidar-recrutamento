import { useState, useEffect, useCallback, useRef } from 'react'
import { toast } from 'sonner'

export interface UseDraftFormOptions<T, U> {
  key: string | null
  currentValues: T
  setValues: (values: T) => void
  debounceMs?: number
  adapter?: {
    toDraft: (values: T) => U
    fromDraft: (draft: U) => T
  }
}

export function useDraftForm<T, U = T>({
  key,
  currentValues,
  setValues,
  debounceMs = 500,
  adapter,
}: UseDraftFormOptions<T, U>) {
  const [draftTimestamp, setDraftTimestamp] = useState<number | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)
  const [toastShown, setToastShown] = useState(false)

  const currentValuesRef = useRef(currentValues)
  currentValuesRef.current = currentValues

  const setValuesRef = useRef(setValues)
  setValuesRef.current = setValues

  const adapterRef = useRef(adapter)
  adapterRef.current = adapter

  useEffect(() => {
    if (!key) {
      setIsHydrated(true)
      return
    }

    setIsHydrated(false)
    setToastShown(false)
    setDraftTimestamp(null)

    const raw = localStorage.getItem(key)
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        if (Date.now() - parsed.timestamp < 7 * 24 * 60 * 60 * 1000) {
          const { timestamp, ...rest } = parsed
          const finalValues = adapterRef.current
            ? adapterRef.current.fromDraft(rest as U)
            : (rest as unknown as T)
          setValuesRef.current(finalValues)
          setDraftTimestamp(timestamp)
        } else {
          localStorage.removeItem(key)
        }
      } catch {
        /* intentionally ignored */
      }
    }
    setIsHydrated(true)
  }, [key])

  useEffect(() => {
    if (!isHydrated || !key) return
    const handler = setTimeout(() => {
      const draftData = adapterRef.current
        ? adapterRef.current.toDraft(currentValues)
        : currentValues
      localStorage.setItem(key, JSON.stringify({ ...draftData, timestamp: Date.now() }))
    }, debounceMs)
    return () => clearTimeout(handler)
  }, [key, currentValues, isHydrated, debounceMs])

  useEffect(() => {
    if (!key) return
    const handleStorage = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue)
          const { timestamp, ...rest } = parsed
          const finalValues = adapterRef.current
            ? adapterRef.current.fromDraft(rest as U)
            : (rest as unknown as T)
          setValuesRef.current(finalValues)
        } catch {
          /* intentionally ignored */
        }
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [key])

  const clearDraft = useCallback(() => {
    if (!key) return
    localStorage.removeItem(key)
    setDraftTimestamp(null)
    setToastShown(false)
  }, [key])

  const saveImmediate = useCallback(
    (valuesToSave: T) => {
      if (!key) return
      const draftData = adapterRef.current ? adapterRef.current.toDraft(valuesToSave) : valuesToSave
      localStorage.setItem(key, JSON.stringify({ ...draftData, timestamp: Date.now() }))
    },
    [key],
  )

  const handleFocus = useCallback(() => {
    if (draftTimestamp && !toastShown) {
      const minutes = Math.floor((Date.now() - draftTimestamp) / 60000)
      toast.info('Rascunho salvo', {
        description: `em ${minutes} minuto${minutes !== 1 ? 's' : ''} atrás`,
        duration: 2000,
      })
      setToastShown(true)
    }
  }, [draftTimestamp, toastShown])

  return { isHydrated, draftTimestamp, clearDraft, saveImmediate, handleFocus }
}
