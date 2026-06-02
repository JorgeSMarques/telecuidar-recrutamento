import * as React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  description: string
  action?: React.ReactNode
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed bg-background p-8 text-center animate-in fade-in-50',
        className,
      )}
      aria-label={title}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted/50 mb-6">
          <Icon className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-foreground">{title}</h3>
        <p className="mb-8 mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}
