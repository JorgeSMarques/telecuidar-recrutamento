import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Algo deu errado.</h2>
          <p className="text-muted-foreground mb-6">Pedimos desculpas pelo inconveniente.</p>
          <Button onClick={() => window.location.reload()}>Recarregar a página</Button>
        </div>
      )
    }

    return this.props.children
  }
}
