//#region src/mocks/candidatosAvaliacao.ts
var mockCandidatosAvaliacao = [
	{
		id: "1",
		nome: "Dr. João Silva",
		especialidade: "Clínico Geral",
		data: "2023-10-25",
		status: "Formulário Recebido",
		dadosPessoais: {
			email: "joao.silva@example.com",
			telefone: "(11) 99999-9999",
			experiencia: "5 anos em emergência"
		},
		formulario: {
			valores: {
				Empatia: 9,
				"Trabalho em Equipe": 8
			},
			respostas: { "Descreva uma situação difícil": "Lidei com um paciente agressivo usando calma e escuta ativa, garantindo a segurança de todos na sala." }
		},
		buscaWeb: {
			status: "Concluída",
			ocorrencias: [],
			bloqueado: false
		}
	},
	{
		id: "2",
		nome: "Dra. Maria Oliveira",
		especialidade: "Pediatra",
		data: "2023-10-26",
		status: "Aguardando Avaliação",
		dadosPessoais: {
			email: "maria.oliveira@example.com",
			telefone: "(11) 98888-8888",
			experiencia: "10 anos em UTI neonatal"
		},
		formulario: {
			valores: {
				Empatia: 10,
				"Trabalho em Equipe": 9
			},
			respostas: { "Descreva uma situação difícil": "Apoio contínuo a familiares em luto após perdas irreparáveis na UTI neonatal." }
		},
		buscaWeb: {
			status: "Concluída",
			ocorrencias: ["Processo civil cível - Danos Morais em 2018 (Extinto)"],
			bloqueado: false
		}
	},
	{
		id: "3",
		nome: "Dr. Pedro Santos",
		especialidade: "Cardiologista",
		data: "2023-10-27",
		status: "Formulário Recebido",
		dadosPessoais: {
			email: "pedro.santos@example.com",
			telefone: "(11) 97777-7777",
			experiencia: "2 anos de residência"
		},
		formulario: {
			valores: {
				Empatia: 6,
				"Trabalho em Equipe": 5
			},
			respostas: { "Descreva uma situação difícil": "Conflito com a equipe de enfermagem por não seguirem os protocolos de medicação exatamente como prescritos." }
		},
		buscaWeb: {
			status: "Concluída",
			ocorrencias: ["Processo criminal em andamento - Falsidade Ideológica (2022)"],
			bloqueado: true
		}
	}
];
//#endregion
//#region src/services/avaliacao-service.ts
var avaliacaoService = {
	getCandidatos: async () => {
		return new Promise((resolve) => setTimeout(() => resolve(mockCandidatosAvaliacao), 800));
	},
	enviarAvaliacao: async (id, data) => {
		return new Promise((resolve) => setTimeout(() => resolve({
			success: true,
			id,
			data
		}), 1e3));
	},
	confirmarInteresse: async (data) => {
		return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 2e3));
	}
};
//#endregion
export { avaliacaoService as t };

//# sourceMappingURL=avaliacao-service-WQ0koc3B.js.map