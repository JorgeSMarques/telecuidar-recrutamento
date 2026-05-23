import { CaptureForm } from '@/components/captacao/capture-form'
import { ChannelsSummary } from '@/components/captacao/channels-summary'

export default function Captacao() {
  return (
    <div className="space-y-6 max-w-[1200px] mx-auto w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Captação de Candidatos</h1>
        <p className="text-muted-foreground">
          Recrutamento de profissionais de saúde via múltiplos canais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3">
          <CaptureForm />
        </div>

        <div className="md:col-span-2 hidden md:block space-y-6">
          <ChannelsSummary />
        </div>
      </div>
    </div>
  )
}
