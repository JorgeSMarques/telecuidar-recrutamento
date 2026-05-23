import { ReactNode, cloneElement, isValidElement } from 'react'
import { cn } from '@/lib/utils'
import { AlertTriangle, XCircle } from 'lucide-react'
import { Label } from '@/components/ui/label'

interface ConditionalFieldProps {
  show: boolean
  children: ReactNode
}

export function ConditionalField({ show, children }: ConditionalFieldProps) {
  return (
    <div
      className={cn(
        'transition-all duration-200 ease-in-out overflow-hidden',
        show ? 'opacity-100 max-h-[1000px] mt-6' : 'opacity-0 max-h-0 mt-0',
      )}
      aria-hidden={!show}
    >
      {children}
    </div>
  )
}

interface DynamicFormFieldProps {
  id: string
  label: string
  error?: string
  warning?: string
  touched?: boolean
  maxLength?: number
  currentLength?: number
  children: ReactNode
  required?: boolean
  className?: string
}

export function DynamicFormField({
  id,
  label,
  error,
  warning,
  touched,
  maxLength,
  currentLength,
  children,
  required,
  className,
}: DynamicFormFieldProps) {
  const isInvalid = touched && !!error
  const isWarning = touched && !error && !!warning

  let counterColor = 'text-muted-foreground'
  if (maxLength && currentLength !== undefined) {
    const ratio = currentLength / maxLength
    if (ratio >= 1) counterColor = 'text-destructive'
    else if (ratio >= 0.8) counterColor = 'text-ring'
  }

  const child = isValidElement(children)
    ? cloneElement(children as React.ReactElement<any>, {
        id,
        'aria-invalid': isInvalid,
        'data-warning': isWarning,
        'aria-describedby': isInvalid ? `${id}-error` : isWarning ? `${id}-warning` : undefined,
        className: cn((children.props as any).className, (isInvalid || isWarning) && 'pr-10'),
      })
    : children

  return (
    <div className={cn('space-y-2 relative', className)}>
      <Label
        htmlFor={id}
        className={cn('font-medium', isInvalid && 'text-destructive', isWarning && 'text-ring')}
      >
        {label} {required && <span className="text-destructive">*</span>}
      </Label>

      <div className="relative">
        {child}
        {isInvalid && (
          <XCircle className="absolute right-3 top-3 h-5 w-5 text-destructive pointer-events-none" />
        )}
        {isWarning && (
          <AlertTriangle className="absolute right-3 top-3 h-5 w-5 text-ring pointer-events-none" />
        )}
      </div>

      <div className="flex justify-between items-start min-h-[1.25rem]">
        <div className="flex-1">
          {isInvalid ? (
            <p id={`${id}-error`} className="text-sm text-destructive font-medium animate-fade-in">
              {error}
            </p>
          ) : isWarning ? (
            <p id={`${id}-warning`} className="text-sm text-ring font-medium animate-fade-in">
              {warning}
            </p>
          ) : null}
        </div>
        {maxLength && currentLength !== undefined && (
          <div className={cn('text-xs ml-4 font-medium transition-colors', counterColor)}>
            {currentLength}/{maxLength}
          </div>
        )}
      </div>
    </div>
  )
}
