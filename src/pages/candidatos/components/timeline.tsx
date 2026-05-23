import { CheckCircle, Clock, AlertCircle, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TimelineStep } from '@/types'

interface TimelineProps {
  steps: TimelineStep[]
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="pl-7">
      <div className="flex flex-col relative">
        {steps.map((step, index) => {
          const isCompleted = step.status === 'completed'
          const isActive = step.status === 'active'
          const isWaiting = step.status === 'waiting'
          const isBlocked = step.status === 'blocked'
          const isRejected = step.status === 'rejected'

          return (
            <div
              key={step.id}
              className={cn(
                'relative flex flex-col pb-8 pl-8 border-l-[4px] transition-colors duration-300 animate-timeline-step opacity-0',
                isActive
                  ? 'border-primary bg-primary/5'
                  : isCompleted
                    ? 'border-primary/60'
                    : isRejected
                      ? 'border-destructive'
                      : 'border-border',
              )}
              style={{ animationDelay: `${index * 50}ms` }}
              aria-current={isActive ? 'step' : undefined}
            >
              <div
                className={cn(
                  'absolute top-0 flex items-center justify-center rounded-full w-10 h-10 shadow-sm transition-colors duration-200 -left-[1.375rem]',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : isCompleted
                      ? 'bg-primary/60 text-primary-foreground'
                      : isRejected
                        ? 'bg-destructive text-destructive-foreground'
                        : 'bg-background border-2 border-muted-foreground text-muted-foreground',
                )}
              >
                {isCompleted && <CheckCircle className="w-5 h-5" />}
                {isActive && <ArrowRight className="w-5 h-5" />}
                {isWaiting && <Clock className="w-5 h-5" />}
                {isBlocked && <AlertCircle className="w-5 h-5" />}
                {isRejected && <X className="w-5 h-5" />}
              </div>
              <div className="-mt-1">
                <h4 className={cn('font-medium', isActive ? 'text-primary font-bold' : '')}>
                  {step.id}. {step.title}
                </h4>
                {step.date && <p className="text-xs text-muted-foreground">{step.date}</p>}
                {step.status === 'blocked' && (
                  <p className="text-xs text-muted-foreground mt-1">Depende da etapa anterior</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
