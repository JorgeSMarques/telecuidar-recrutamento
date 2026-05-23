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
