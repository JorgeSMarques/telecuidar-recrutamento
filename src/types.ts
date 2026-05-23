export type Role = 'Candidato' | 'Gerente RH' | 'Diretor Técnico'

export interface User {
  id: string
  email: string
  name: string
  role: Role
  created: string
  updated: string
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
