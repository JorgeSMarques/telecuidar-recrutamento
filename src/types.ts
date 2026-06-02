export type Role = 'Candidato' | 'Gerente RH' | 'Diretor Técnico'

export interface User {
  id: string
  email: string
  name: string
  role: Role
  created: string
  updated: string
}

export type StepStatus = 'completed' | 'active' | 'waiting' | 'blocked' | 'rejected'

export interface TimelineStep {
  id: number
  title: string
  status: StepStatus
  date?: string
}

export interface CandidatoFormData {
  interesse: {
    confirmado: boolean
    telefone: string
    mensagem?: string
  }
  avaliacao: {
    valores: Record<string, { valor: number; exp?: string }>
    competencia: {
      experiencia: string
      experienciaSus: string
      formacao: string
      telemedicina: string
    }
  }
}

export interface CaptureFormData {
  nome: string
  email: string
  telefone: string
  linkedin?: string
  profissao: string
  especialidade: string
  experienciaTotal: string
  experienciaSus: string
  descricaoSus?: string
  experienciaTelemedicina: string
  descricaoTelemedicina?: string
  canal: string
  canalOutro?: string
}

export interface CandidatoBase {
  id: string
  userId: string
  nome: string
  email: string
  telefone: string
  linkedinUrl?: string
  profissao: string
  especialidade: string
  experienciaTotal?: string
  experienciaSUS?: string
  descricaoSUS?: string
  telemedicina?: string
  descricaoTelemedicina?: string
  canalCaptacao?: string
  especifiqueOutro?: string
  status: string
  dataCaptura: string
  dataManifestacao?: string
  dataAvaliacao?: string
  created: string
  updated: string
  curriculo?: string
  textoCurriculo?: string
}

export interface CandidatoAvaliacao extends CandidatoBase {}

export interface CandidatoAprovacao extends CandidatoBase {
  avaliacaoRh?: {
    alinhamentoValores: number
    competenciaTecnica: number
    justificativa: string
    recomendacao: string
  }
}
