import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CaptureForm } from '@/components/captacao/capture-form'

export default function Candidatar() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-6 md:p-8 flex flex-col min-h-[calc(100vh-4rem)]">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="-ml-4 text-muted-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      </div>

      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Candidatar-se</h1>
          <p className="text-muted-foreground">
            Preencha o formulário abaixo para iniciar sua candidatura.
          </p>
        </div>

        <CaptureForm redirectAfterSuccess="/" />
      </div>
    </div>
  )
}
