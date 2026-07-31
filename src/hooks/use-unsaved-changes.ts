import { useEffect, useRef } from 'react'
import { useBlocker } from 'react-router-dom'

export function useUnsavedChanges(isDirty: boolean) {
  const isDirtyRef = useRef(isDirty)
  isDirtyRef.current = isDirty

  const blocker = useBlocker(isDirtyRef.current)

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirtyRef.current) {
        e.preventDefault()
        e.returnValue = ''
      }
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  return blocker
}
