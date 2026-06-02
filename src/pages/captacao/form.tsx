import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CaptacaoForm() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-6 md:p-8 h-full flex flex-col">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="-ml-4 text-muted-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      </div>

      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Cadastrar Candidato</h1>

        <div className="rounded-xl border bg-card p-8 shadow-sm">
          <p className="text-muted-foreground">
            O formulário de captação de candidatos será implementado aqui.
          </p>
        </div>
      </div>
    </div>
  )
}
