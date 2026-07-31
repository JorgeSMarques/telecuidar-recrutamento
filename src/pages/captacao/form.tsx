import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CaptureForm } from '@/components/captacao/capture-form'
import { printCaptureForm } from '@/lib/print-capture-form'

export default function CaptacaoForm() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-6 md:p-8 h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="-ml-4 text-muted-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <Button variant="outline" onClick={printCaptureForm}>
          <Download className="mr-2 h-4 w-4" />
          Baixar Formulário
        </Button>
      </div>

      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Cadastrar Candidato</h1>

        <CaptureForm />
      </div>
    </div>
  )
}
