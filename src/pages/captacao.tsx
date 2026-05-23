import { CaptureForm } from '@/components/captacao/capture-form'
import { ChannelsSummary } from '@/components/captacao/channels-summary'

export default function Captacao() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="mb-6">
        <h1 className="text-[2rem] font-bold tracking-tight mb-2">Captação de Candidatos</h1>
        <p className="text-[0.875rem] opacity-70">
          Recrutamento de profissionais de saúde via múltiplos canais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 gap-6">
        <div className="md:col-span-3">
          <CaptureForm />
        </div>

        <div className="md:col-span-2 hidden md:block">
          <div className="sticky top-[7rem] lg:top-[8rem] max-h-[calc(100vh-10rem)] overflow-y-auto pb-4">
            <ChannelsSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
