/* Input Component - A component that displays an input - from shadcn/ui (exposes Input) */
import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex w-full rounded-md border border-input bg-background px-3 py-2.5 md:px-4 md:py-3 text-base md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/30 transition-all duration-200 ease-out aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive aria-[invalid=true]:focus-visible:ring-destructive',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
