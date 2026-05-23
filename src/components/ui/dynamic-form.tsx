import * as React from 'react'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { AlertCircle, AlertTriangle } from 'lucide-react'

export function DynamicFormField({
  id,
  label,
  required,
  touched,
  error,
  warning,
  currentLength,
  maxLength,
  children,
  className,
  icon,
}: {
  id: string
  label: string
  required?: boolean
  touched?: boolean
  error?: string
  warning?: string
  currentLength?: number
  maxLength?: number
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}) {
  const isError = touched && !!error
  const isWarning = touched && !!warning && !error

  return (
    <div className={cn('space-y-2 relative', className)}>
      <Label htmlFor={id} className={isError ? 'text-destructive' : isWarning ? 'text-ring' : ''}>
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <div className="relative">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              id,
              'aria-invalid': isError,
              'aria-required': required,
              'aria-describedby': isError ? `${id}-error` : undefined,
              className: cn(
                child.props.className,
                isError && 'border-destructive focus-visible:ring-destructive pr-10',
                isWarning && 'border-ring focus-visible:ring-ring',
              ),
            })
          }
          return child
        })}
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {icon}
          </div>
        )}
        {isError && (
          <AlertCircle
            className={cn(
              'absolute top-1/2 -translate-y-1/2 h-5 w-5 text-destructive pointer-events-none',
              icon ? 'right-10' : 'right-3',
            )}
          />
        )}
      </div>
      <div className="flex justify-between items-start min-h-[1.25rem] mt-1">
        <div className="flex-1">
          {isError ? (
            <span
              id={`${id}-error`}
              className="text-destructive text-sm font-medium animate-fade-in"
            >
              {error}
            </span>
          ) : isWarning ? (
            <span
              id={`${id}-warning`}
              className="text-ring text-sm font-medium animate-fade-in flex items-center gap-1"
            >
              <AlertTriangle className="h-4 w-4" /> {warning}
            </span>
          ) : null}
        </div>
        {currentLength !== undefined && maxLength !== undefined && (
          <span
            className={cn(
              'text-xs ml-4 font-medium transition-colors',
              currentLength >= maxLength
                ? 'text-destructive'
                : currentLength >= maxLength * 0.8
                  ? 'text-ring'
                  : 'opacity-60',
            )}
          >
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    </div>
  )
}

export function ConditionalField({ show, children }: { show: boolean; children: React.ReactNode }) {
  if (!show) return null
  return <div className="animate-fade-in duration-200">{children}</div>
}
