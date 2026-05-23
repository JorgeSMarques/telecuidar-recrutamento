import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'
import { CheckCircle2, AlertCircle, Info } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()
  const isMobile = useIsMobile()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position={isMobile ? 'bottom-center' : 'bottom-right'}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg animate-in slide-in-from-bottom-5 duration-300 ease-out font-sans',
          description: 'group-[.toast]:text-muted-foreground text-[12px] opacity-90',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          success:
            'group-[.toaster]:bg-primary group-[.toaster]:text-primary-foreground group-[.toaster]:border-primary',
          error:
            'group-[.toaster]:bg-destructive group-[.toaster]:text-destructive-foreground group-[.toaster]:border-destructive',
          info: 'group-[.toaster]:bg-ring group-[.toaster]:text-foreground group-[.toaster]:border-ring',
          title: 'font-semibold text-[14px]',
        },
      }}
      icons={{
        success: <CheckCircle2 className="h-5 w-5" />,
        error: <AlertCircle className="h-5 w-5" />,
        info: <Info className="h-5 w-5" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
