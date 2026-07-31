import pb from '@/lib/pocketbase/client'

export async function submitCaptureForm(data: any) {
  const payload = {
    nome: data.nome,
    email: data.email,
    telefone: data.telefone,
    linkedinUrl: data.linkedin,
    profissao: data.profissao,
    especialidade: data.especialidade,
    experienciaTotal: data.experienciaTotal,
    experienciaSUS: data.experienciaSus,
    descricaoSUS: data.descricaoSus,
    telemedicina: data.experienciaTelemedicina,
    descricaoTelemedicina: data.descricaoTelemedicina,
    canalCaptacao: data.canal,
    especifiqueOutro: data.canalOutro,
  }

  return pb.send('/backend/v1/public/candidates/capture', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  })
}
