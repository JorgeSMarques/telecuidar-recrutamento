import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { a as CircleAlert, i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-B8UraUii.js";
import { t as Clock } from "./clock-tfXrwso6.js";
import { n as RotateCw, t as Search } from "./search-Dc0zLLPM.js";
import { A as createLucideIcon, f as Input, g as Skeleton, p as Button, w as toast } from "./index-CQ1crPcp.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-De4u1zBy.js";
import { _ as addDays, t as format } from "./format-jQjdXGgx.js";
import { t as Badge } from "./badge-BJJIg4N0.js";
import { t as Label } from "./label-Cx0N7HW8.js";
import { t as Textarea } from "./textarea-Hww7JyuG.js";
import { n as RadioGroup, r as RadioGroupItem, t as Checkbox } from "./checkbox-mVA8Gko3.js";
var Video = createLucideIcon("video", [["path", {
	d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
	key: "ftymec"
}], ["rect", {
	x: "2",
	y: "6",
	width: "14",
	height: "12",
	rx: "2",
	key: "158x01"
}]]);
//#endregion
//#region src/mocks/candidatosAprovacao.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var mockCandidatosAprovacao = [{
	id: "4",
	nome: "Dra. Ana Costa",
	especialidade: "Dermatologista",
	data: "2023-10-24",
	status: "Aguardando Aprovação",
	dadosPessoais: {
		email: "ana.costa@example.com",
		telefone: "(11) 96666-6666",
		experiencia: "8 anos de atuação clínica e ambulatorial"
	},
	formulario: {
		valores: {
			Empatia: 9,
			"Trabalho em Equipe": 9
		},
		respostas: { "Descreva uma situação difícil": "Atendimento emergencial a múltiplas vítimas de queimaduras durante um plantão crítico." }
	},
	buscaWeb: {
		status: "Concluída",
		ocorrencias: [],
		bloqueado: false
	},
	avaliacaoRh: {
		notaValores: 8.5,
		notaCompetencia: 9,
		justificativa: "Excelente perfil comportamental, muito alinhada com os nossos valores. Tem uma forte bagagem técnica em teledermatologia.",
		recomendacao: "Recomendo fortemente"
	}
}];
//#endregion
//#region src/services/aprovacao-service.ts
var aprovacaoService = {
	getCandidatos: async () => {
		return new Promise((resolve) => setTimeout(() => resolve(mockCandidatosAprovacao), 800));
	},
	enviarAprovacao: async (id, data) => {
		return new Promise((resolve) => setTimeout(() => resolve({
			success: true,
			id,
			data
		}), 1e3));
	}
};
//#endregion
//#region src/pages/aprovacao.tsx
var import_jsx_runtime = require_jsx_runtime();
function AprovacaoPage() {
	const [candidatos, setCandidatos] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({
		decisao: "",
		justificativa: "",
		agendamentoData: "",
		agendamentoHora: "",
		agendamentoEmail: "",
		notificarCalendar: true,
		notificarWhatsapp: true
	});
	const loadData = async () => {
		setLoading(true);
		try {
			setCandidatos(await aprovacaoService.getCandidatos());
		} catch (error) {
			toast.error("Erro ao carregar candidatos para aprovação");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const selectedCandidato = candidatos.find((c) => c.id === selectedId);
	(0, import_react.useEffect)(() => {
		if (selectedCandidato && !formData.agendamentoEmail) setFormData((prev) => ({
			...prev,
			agendamentoEmail: selectedCandidato.dadosPessoais.email
		}));
	}, [selectedCandidato, formData.agendamentoEmail]);
	(0, import_react.useEffect)(() => {
		if (selectedId) {
			const draftKey = `aprovacao-draft-${selectedId}`;
			const saved = localStorage.getItem(draftKey);
			if (saved) toast("Você tem um formulário de decisão em rascunho. Deseja continuar?", {
				action: {
					label: "Continuar",
					onClick: () => setFormData(JSON.parse(saved))
				},
				cancel: {
					label: "Descartar",
					onClick: () => {
						localStorage.removeItem(draftKey);
						setFormData({
							decisao: "",
							justificativa: "",
							agendamentoData: "",
							agendamentoHora: "",
							agendamentoEmail: selectedCandidato?.dadosPessoais.email || "",
							notificarCalendar: true,
							notificarWhatsapp: true
						});
					}
				},
				duration: 1e4
			});
			else setFormData({
				decisao: "",
				justificativa: "",
				agendamentoData: "",
				agendamentoHora: "",
				agendamentoEmail: selectedCandidato?.dadosPessoais.email || "",
				notificarCalendar: true,
				notificarWhatsapp: true
			});
		}
	}, [selectedId, selectedCandidato]);
	(0, import_react.useEffect)(() => {
		if (!selectedId) return;
		const draftKey = `aprovacao-draft-${selectedId}`;
		const timer = setTimeout(() => {
			if (formData.decisao || formData.justificativa) localStorage.setItem(draftKey, JSON.stringify(formData));
		}, 500);
		return () => clearTimeout(timer);
	}, [formData, selectedId]);
	const validateForm = () => {
		if (!formData.decisao) return false;
		if (formData.justificativa.length < 5) return false;
		if (formData.decisao === "aprovar") {
			if (!formData.agendamentoData || !formData.agendamentoHora || !formData.agendamentoEmail) return false;
		}
		return true;
	};
	const handleSubmit = async () => {
		if (!selectedId || !validateForm()) return;
		try {
			await aprovacaoService.enviarAprovacao(selectedId, formData);
			toast.success(formData.decisao === "aprovar" ? "Candidato aprovado e entrevista agendada com sucesso!" : "Candidato rejeitado.");
			localStorage.removeItem(`aprovacao-draft-${selectedId}`);
			setSelectedId(null);
			loadData();
		} catch (error) {
			toast.error("Erro ao enviar decisão");
		}
	};
	const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
	const maxDate = format(addDays(/* @__PURE__ */ new Date(), 14), "yyyy-MM-dd");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/aprovacao.tsx:151:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col h-[calc(100vh-4rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/aprovacao.tsx:153:7",
			"data-prohibitions": "[editContent]",
			className: "flex-none p-4 sm:px-6 border-b flex justify-between items-center bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/aprovacao.tsx:154:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/aprovacao.tsx:155:11",
					"data-prohibitions": "[]",
					className: "text-2xl font-bold tracking-tight",
					children: "Aprovação Final"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/aprovacao.tsx:156:11",
					"data-prohibitions": "[]",
					className: "text-sm text-muted-foreground",
					children: "Revisão Diretor Técnico e Agendamento"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/aprovacao.tsx:158:9",
				"data-prohibitions": "[editContent]",
				variant: "outline",
				size: "icon",
				onClick: loadData,
				title: "Atualizar lista",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
					"data-uid": "src/pages/aprovacao.tsx:159:11",
					"data-prohibitions": "[editContent]",
					className: cn("h-4 w-4", loading && "animate-spin")
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/aprovacao.tsx:163:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 flex flex-col md:flex-row overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/aprovacao.tsx:165:9",
				"data-prohibitions": "[editContent]",
				className: "w-full md:w-[40%] lg:w-[35%] border-r overflow-y-auto bg-muted/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/aprovacao.tsx:166:11",
					"data-prohibitions": "[editContent]",
					className: "p-4 space-y-3",
					children: loading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-uid": "src/pages/aprovacao.tsx:169:17",
						"data-prohibitions": "[]",
						className: "p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
							"data-uid": "src/pages/aprovacao.tsx:170:19",
							"data-prohibitions": "[editContent]",
							className: "h-16 w-full"
						})
					}, i)) : candidatos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/aprovacao.tsx:174:15",
						"data-prohibitions": "[]",
						className: "text-center p-8 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							"data-uid": "src/pages/aprovacao.tsx:175:17",
							"data-prohibitions": "[editContent]",
							className: "mx-auto h-8 w-8 mb-3 opacity-50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/aprovacao.tsx:176:17",
							"data-prohibitions": "[]",
							children: "Nenhum candidato aguardando aprovação no momento"
						})]
					}) : candidatos.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-uid": "src/pages/aprovacao.tsx:180:17",
						"data-prohibitions": "[editContent]",
						className: cn("cursor-pointer transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring outline-none", selectedId === c.id ? "border-l-4 border-l-primary shadow-sm" : ""),
						onClick: () => setSelectedId(c.id),
						tabIndex: 0,
						onKeyDown: (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								setSelectedId(c.id);
							}
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							"data-uid": "src/pages/aprovacao.tsx:195:19",
							"data-prohibitions": "[editContent]",
							className: "p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/aprovacao.tsx:196:21",
								"data-prohibitions": "[editContent]",
								className: "flex justify-between items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/aprovacao.tsx:197:23",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										"data-uid": "src/pages/aprovacao.tsx:198:25",
										"data-prohibitions": "[editContent]",
										className: "text-base leading-none mb-1",
										children: c.nome
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										"data-uid": "src/pages/aprovacao.tsx:199:25",
										"data-prohibitions": "[editContent]",
										className: "text-xs line-clamp-1",
										children: c.especialidade
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									"data-uid": "src/pages/aprovacao.tsx:203:23",
									"data-prohibitions": "[editContent]",
									variant: "outline",
									className: "text-[10px] whitespace-nowrap bg-primary/10 text-primary border-primary/20",
									children: c.status
								})]
							})
						})
					}, c.id))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/aprovacao.tsx:218:9",
				"data-prohibitions": "[editContent]",
				className: "w-full md:w-[60%] lg:w-[65%] overflow-y-auto bg-background",
				children: !selectedCandidato ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/aprovacao.tsx:220:13",
					"data-prohibitions": "[]",
					className: "flex flex-col items-center justify-center h-full text-muted-foreground p-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
						"data-uid": "src/pages/aprovacao.tsx:221:15",
						"data-prohibitions": "[editContent]",
						className: "h-12 w-12 mb-4 opacity-20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/aprovacao.tsx:222:15",
						"data-prohibitions": "[]",
						children: "Selecione um candidato na lista para revisar e tomar a decisão final"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/aprovacao.tsx:225:13",
					"data-prohibitions": "[editContent]",
					className: "p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/aprovacao.tsx:226:15",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							"data-uid": "src/pages/aprovacao.tsx:227:17",
							"data-prohibitions": "[editContent]",
							className: "text-3xl font-bold tracking-tight",
							children: selectedCandidato.nome
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/aprovacao.tsx:228:17",
							"data-prohibitions": "[editContent]",
							className: "text-muted-foreground text-lg",
							children: selectedCandidato.especialidade
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						"data-uid": "src/pages/aprovacao.tsx:231:15",
						"data-prohibitions": "[editContent]",
						defaultValue: "revisao",
						className: "w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								"data-uid": "src/pages/aprovacao.tsx:232:17",
								"data-prohibitions": "[]",
								className: "grid w-full grid-cols-2 h-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									"data-uid": "src/pages/aprovacao.tsx:233:19",
									"data-prohibitions": "[]",
									value: "revisao",
									className: "py-2",
									children: "Revisão RH"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									"data-uid": "src/pages/aprovacao.tsx:236:19",
									"data-prohibitions": "[]",
									value: "decisao",
									className: "py-2",
									children: "Decisão e Agendamento"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/aprovacao.tsx:241:17",
								"data-prohibitions": "[editContent]",
								value: "revisao",
								className: "mt-4 space-y-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									"data-uid": "src/pages/aprovacao.tsx:242:19",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
										"data-uid": "src/pages/aprovacao.tsx:243:21",
										"data-prohibitions": "[]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											"data-uid": "src/pages/aprovacao.tsx:244:23",
											"data-prohibitions": "[]",
											children: "Avaliação do RH"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
											"data-uid": "src/pages/aprovacao.tsx:245:23",
											"data-prohibitions": "[]",
											children: "Parecer emitido pela equipe de Recrutamento & Seleção"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										"data-uid": "src/pages/aprovacao.tsx:249:21",
										"data-prohibitions": "[editContent]",
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/aprovacao.tsx:250:23",
												"data-prohibitions": "[editContent]",
												className: "grid grid-cols-2 gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/aprovacao.tsx:251:25",
													"data-prohibitions": "[editContent]",
													className: "p-5 bg-muted/40 border rounded-lg text-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														"data-uid": "src/pages/aprovacao.tsx:252:27",
														"data-prohibitions": "[]",
														className: "text-sm font-medium text-muted-foreground mb-1",
														children: "Alinhamento de Valores"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														"data-uid": "src/pages/aprovacao.tsx:255:27",
														"data-prohibitions": "[editContent]",
														className: "text-4xl font-bold text-primary",
														children: selectedCandidato.avaliacaoRh.notaValores.toFixed(1)
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/aprovacao.tsx:259:25",
													"data-prohibitions": "[editContent]",
													className: "p-5 bg-muted/40 border rounded-lg text-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														"data-uid": "src/pages/aprovacao.tsx:260:27",
														"data-prohibitions": "[]",
														className: "text-sm font-medium text-muted-foreground mb-1",
														children: "Competência Técnica"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														"data-uid": "src/pages/aprovacao.tsx:263:27",
														"data-prohibitions": "[editContent]",
														className: "text-4xl font-bold text-primary",
														children: selectedCandidato.avaliacaoRh.notaCompetencia.toFixed(1)
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/aprovacao.tsx:269:23",
												"data-prohibitions": "[editContent]",
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													"data-uid": "src/pages/aprovacao.tsx:270:25",
													"data-prohibitions": "[]",
													className: "font-semibold text-base",
													children: "Recomendação do RH"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													"data-uid": "src/pages/aprovacao.tsx:271:25",
													"data-prohibitions": "[editContent]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														"data-uid": "src/pages/aprovacao.tsx:272:27",
														"data-prohibitions": "[editContent]",
														variant: "secondary",
														className: "text-sm py-1 px-3",
														children: selectedCandidato.avaliacaoRh.recomendacao
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/aprovacao.tsx:278:23",
												"data-prohibitions": "[editContent]",
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													"data-uid": "src/pages/aprovacao.tsx:279:25",
													"data-prohibitions": "[]",
													className: "font-semibold text-base",
													children: "Justificativa do Avaliador"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													"data-uid": "src/pages/aprovacao.tsx:282:25",
													"data-prohibitions": "[editContent]",
													className: "text-sm text-foreground bg-accent/30 p-4 rounded-md border leading-relaxed",
													children: selectedCandidato.avaliacaoRh.justificativa
												})]
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/aprovacao.tsx:290:17",
								"data-prohibitions": "[editContent]",
								value: "decisao",
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									"data-uid": "src/pages/aprovacao.tsx:291:19",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										"data-uid": "src/pages/aprovacao.tsx:292:21",
										"data-prohibitions": "[editContent]",
										onSubmit: (e) => {
											e.preventDefault();
											handleSubmit();
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
												"data-uid": "src/pages/aprovacao.tsx:298:23",
												"data-prohibitions": "[]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													"data-uid": "src/pages/aprovacao.tsx:299:25",
													"data-prohibitions": "[]",
													children: "Decisão Final do Diretor"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
													"data-uid": "src/pages/aprovacao.tsx:300:25",
													"data-prohibitions": "[]",
													children: "Aprove o candidato para a entrevista final ou encerre o processo."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
												"data-uid": "src/pages/aprovacao.tsx:304:23",
												"data-prohibitions": "[editContent]",
												className: "space-y-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
														"data-uid": "src/pages/aprovacao.tsx:305:25",
														"data-prohibitions": "[]",
														className: "space-y-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
															"data-uid": "src/pages/aprovacao.tsx:306:27",
															"data-prohibitions": "[]",
															className: "font-semibold text-sm sr-only",
															children: "Escolha uma decisão"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
															"data-uid": "src/pages/aprovacao.tsx:309:27",
															"data-prohibitions": "[]",
															value: formData.decisao,
															onValueChange: (val) => setFormData((p) => ({
																...p,
																decisao: val
															})),
															className: "flex flex-col sm:flex-row gap-4",
															"aria-required": "true",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																"data-uid": "src/pages/aprovacao.tsx:315:29",
																"data-prohibitions": "[]",
																className: "flex items-center space-x-3 border-2 p-4 rounded-lg flex-1 cursor-pointer has-[:checked]:bg-primary/5 has-[:checked]:border-primary transition-all",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
																	"data-uid": "src/pages/aprovacao.tsx:316:31",
																	"data-prohibitions": "[editContent]",
																	value: "aprovar",
																	id: "aprovar"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																	"data-uid": "src/pages/aprovacao.tsx:317:31",
																	"data-prohibitions": "[]",
																	htmlFor: "aprovar",
																	className: "cursor-pointer font-semibold text-base flex-1",
																	children: "Aprovar para Entrevista"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																"data-uid": "src/pages/aprovacao.tsx:324:29",
																"data-prohibitions": "[]",
																className: "flex items-center space-x-3 border-2 p-4 rounded-lg flex-1 cursor-pointer has-[:checked]:bg-destructive/5 has-[:checked]:border-destructive transition-all",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
																	"data-uid": "src/pages/aprovacao.tsx:325:31",
																	"data-prohibitions": "[editContent]",
																	value: "rejeitar",
																	id: "rejeitar"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																	"data-uid": "src/pages/aprovacao.tsx:326:31",
																	"data-prohibitions": "[]",
																	htmlFor: "rejeitar",
																	className: "cursor-pointer font-semibold text-base text-destructive flex-1",
																	children: "Rejeitar Candidato"
																})]
															})]
														})]
													}),
													formData.decisao === "aprovar" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														"data-uid": "src/pages/aprovacao.tsx:337:27",
														"data-prohibitions": "[]",
														className: "animate-in fade-in slide-in-from-top-2 duration-300 space-y-5 p-5 border-2 border-muted bg-muted/10 rounded-xl",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
																"data-uid": "src/pages/aprovacao.tsx:338:29",
																"data-prohibitions": "[]",
																className: "font-semibold flex items-center gap-2 text-primary",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {
																	"data-uid": "src/pages/aprovacao.tsx:339:31",
																	"data-prohibitions": "[editContent]",
																	className: "h-5 w-5"
																}), " Agendamento da Entrevista Técnica"]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																"data-uid": "src/pages/aprovacao.tsx:341:29",
																"data-prohibitions": "[]",
																className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		"data-uid": "src/pages/aprovacao.tsx:342:31",
																		"data-prohibitions": "[]",
																		className: "space-y-2",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
																			"data-uid": "src/pages/aprovacao.tsx:343:33",
																			"data-prohibitions": "[]",
																			htmlFor: "data",
																			children: ["Data do Encontro ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				"data-uid": "src/pages/aprovacao.tsx:344:52",
																				"data-prohibitions": "[]",
																				className: "text-destructive",
																				children: "*"
																			})]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			"data-uid": "src/pages/aprovacao.tsx:346:33",
																			"data-prohibitions": "[]",
																			className: "relative",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																				"data-uid": "src/pages/aprovacao.tsx:347:35",
																				"data-prohibitions": "[editContent]",
																				id: "data",
																				type: "date",
																				min: today,
																				max: maxDate,
																				value: formData.agendamentoData,
																				onChange: (e) => setFormData((p) => ({
																					...p,
																					agendamentoData: e.target.value
																				})),
																				"aria-required": "true"
																			})
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		"data-uid": "src/pages/aprovacao.tsx:363:31",
																		"data-prohibitions": "[]",
																		className: "space-y-2",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
																			"data-uid": "src/pages/aprovacao.tsx:364:33",
																			"data-prohibitions": "[]",
																			htmlFor: "hora",
																			children: ["Horário ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				"data-uid": "src/pages/aprovacao.tsx:365:43",
																				"data-prohibitions": "[]",
																				className: "text-destructive",
																				children: "*"
																			})]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			"data-uid": "src/pages/aprovacao.tsx:367:33",
																			"data-prohibitions": "[]",
																			className: "relative",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																				"data-uid": "src/pages/aprovacao.tsx:368:35",
																				"data-prohibitions": "[editContent]",
																				id: "hora",
																				type: "time",
																				value: formData.agendamentoHora,
																				onChange: (e) => setFormData((p) => ({
																					...p,
																					agendamentoHora: e.target.value
																				})),
																				"aria-required": "true"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
																				"data-uid": "src/pages/aprovacao.tsx:380:35",
																				"data-prohibitions": "[editContent]",
																				className: "absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none"
																			})]
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		"data-uid": "src/pages/aprovacao.tsx:383:31",
																		"data-prohibitions": "[]",
																		className: "space-y-2 sm:col-span-2",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
																			"data-uid": "src/pages/aprovacao.tsx:384:33",
																			"data-prohibitions": "[]",
																			htmlFor: "email",
																			children: [
																				"Email do Candidato para Convite",
																				" ",
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																					"data-uid": "src/pages/aprovacao.tsx:386:35",
																					"data-prohibitions": "[]",
																					className: "text-destructive",
																					children: "*"
																				})
																			]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																			"data-uid": "src/pages/aprovacao.tsx:388:33",
																			"data-prohibitions": "[editContent]",
																			id: "email",
																			type: "email",
																			value: formData.agendamentoEmail,
																			onChange: (e) => setFormData((p) => ({
																				...p,
																				agendamentoEmail: e.target.value
																			})),
																			"aria-required": "true"
																		})]
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																"data-uid": "src/pages/aprovacao.tsx:400:29",
																"data-prohibitions": "[]",
																className: "flex flex-col gap-3 pt-4 border-t border-border/50",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																	"data-uid": "src/pages/aprovacao.tsx:401:31",
																	"data-prohibitions": "[]",
																	className: "text-sm font-semibold",
																	children: "Notificações Automáticas"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	"data-uid": "src/pages/aprovacao.tsx:404:31",
																	"data-prohibitions": "[]",
																	className: "flex flex-col sm:flex-row gap-4",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		"data-uid": "src/pages/aprovacao.tsx:405:33",
																		"data-prohibitions": "[]",
																		className: "flex items-center space-x-2",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
																			"data-uid": "src/pages/aprovacao.tsx:406:35",
																			"data-prohibitions": "[editContent]",
																			id: "cal",
																			checked: formData.notificarCalendar,
																			onCheckedChange: (c) => setFormData((p) => ({
																				...p,
																				notificarCalendar: c === true
																			}))
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																			"data-uid": "src/pages/aprovacao.tsx:413:35",
																			"data-prohibitions": "[]",
																			htmlFor: "cal",
																			className: "font-normal text-sm cursor-pointer",
																			children: "Convite Google Calendar"
																		})]
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		"data-uid": "src/pages/aprovacao.tsx:420:33",
																		"data-prohibitions": "[]",
																		className: "flex items-center space-x-2",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
																			"data-uid": "src/pages/aprovacao.tsx:421:35",
																			"data-prohibitions": "[editContent]",
																			id: "wpp",
																			checked: formData.notificarWhatsapp,
																			onCheckedChange: (c) => setFormData((p) => ({
																				...p,
																				notificarWhatsapp: c === true
																			}))
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																			"data-uid": "src/pages/aprovacao.tsx:428:35",
																			"data-prohibitions": "[]",
																			htmlFor: "wpp",
																			className: "font-normal text-sm cursor-pointer",
																			children: "Notificação via WhatsApp"
																		})]
																	})]
																})]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
														"data-uid": "src/pages/aprovacao.tsx:440:25",
														"data-prohibitions": "[editContent]",
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
															"data-uid": "src/pages/aprovacao.tsx:441:27",
															"data-prohibitions": "[editContent]",
															htmlFor: "justificativaFinal",
															className: "font-semibold flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																"data-uid": "src/pages/aprovacao.tsx:445:29",
																"data-prohibitions": "[]",
																children: ["Parecer da Decisão ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	"data-uid": "src/pages/aprovacao.tsx:446:50",
																	"data-prohibitions": "[]",
																	className: "text-destructive",
																	children: "*"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																"data-uid": "src/pages/aprovacao.tsx:448:29",
																"data-prohibitions": "[editContent]",
																className: "text-xs font-normal text-muted-foreground",
																children: [formData.justificativa.length, "/300 max"]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
															"data-uid": "src/pages/aprovacao.tsx:452:27",
															"data-prohibitions": "[editContent]",
															id: "justificativaFinal",
															placeholder: "Descreva o motivo da aprovação para entrevista ou rejeição do perfil...",
															className: "min-h-[100px]",
															maxLength: 300,
															value: formData.justificativa,
															onChange: (e) => setFormData((p) => ({
																...p,
																justificativa: e.target.value
															})),
															"aria-required": "true"
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
												"data-uid": "src/pages/aprovacao.tsx:465:23",
												"data-prohibitions": "[]",
												className: "bg-muted/30 py-4 flex flex-col sm:flex-row justify-end gap-3 border-t",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													"data-uid": "src/pages/aprovacao.tsx:466:25",
													"data-prohibitions": "[]",
													type: "button",
													variant: "outline",
													onClick: () => setSelectedId(null),
													className: "w-full sm:w-auto",
													children: "Cancelar"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													"data-uid": "src/pages/aprovacao.tsx:474:25",
													"data-prohibitions": "[]",
													type: "submit",
													disabled: !validateForm(),
													className: "w-full sm:w-auto",
													children: "Confirmar Decisão Final"
												})]
											})
										]
									})
								})
							})
						]
					})]
				})
			})]
		})]
	});
}
//#endregion
export { AprovacaoPage as default };

//# sourceMappingURL=aprovacao-CdqPaU7X.js.map