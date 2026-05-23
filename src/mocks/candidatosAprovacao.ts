import { CandidatoAprovacao } from '@/types'

export const mockCandidatosAprovacao: CandidatoAprovacao[] = [
  {
    id: '4',
    nome: 'Dra. Ana Costa',
    especialidade: 'Dermatologista',
    data: '2023-10-24',
    status: 'Aguardando Aprovação',
    dadosPessoais: {
      email: 'ana.costa@example.com',
      telefone: '(11) 96666-6666',
      experiencia: '8 anos de atuação clínica e ambulatorial',
    },
    formulario: {
      valores: {
        Empatia: 9,
        'Trabalho em Equipe': 9,
      },
      respostas: {
        'Descreva uma situação difícil':
          'Atendimento emergencial a múltiplas vítimas de queimaduras durante um plantão crítico.',
      },
    },
    buscaWeb: {
      status: 'Concluída',
      ocorrencias: [],
      bloqueado: false,
    },
    avaliacaoRh: {
      notaValores: 8.5,
      notaCompetencia: 9.0,
      justificativa:
        'Excelente perfil comportamental, muito alinhada com os nossos valores. Tem uma forte bagagem técnica em teledermatologia.',
      recomendacao: 'Recomendo fortemente',
    },
  },
]
