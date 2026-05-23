import { Check, Clock, AlertCircle, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TimelineStep } from '@/types'

interface TimelineProps {
  steps: TimelineStep[]
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-6 relative">
        <div className="absolute top-4 bottom-4 left-[21px] w-[2px] bg-border z-0" />
        {steps.map((step) => {
          const isCompleted = step.status === 'completed'
          const isActive = step.status === 'active'
          const isWaiting = step.status === 'waiting'
          const isBlocked = step.status === 'blocked'
          const isRejected = step.status === 'rejected'

          return (
            <div
              key={step.id}
              className="relative z-10 flex items-start gap-4"
              aria-current={isActive ? 'step' : undefined}
            >
              <div
                className={cn(
                  'w-11 h-11 rounded-full flex items-center justify-center border-2 bg-background shrink-0 transition-colors duration-200',
                  isCompleted
                    ? 'border-green-500 text-green-500'
                    : isActive
                      ? 'border-primary text-primary'
                      : isRejected
                        ? 'border-red-500 text-red-500'
                        : isBlocked
                          ? 'border-yellow-500 text-yellow-500'
                          : 'border-muted-foreground text-muted-foreground',
                )}
              >
                {isCompleted && <Check className="w-5 h-5" />}
                {isActive && <ArrowRight className="w-5 h-5" />}
                {isWaiting && <Clock className="w-5 h-5" />}
                {isBlocked && <AlertCircle className="w-5 h-5" />}
                {isRejected && <X className="w-5 h-5" />}
              </div>
              <div className="pt-2">
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
