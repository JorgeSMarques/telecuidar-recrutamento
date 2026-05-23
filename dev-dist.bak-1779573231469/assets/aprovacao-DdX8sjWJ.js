import { r as __toESM } from "./rolldown-runtime-B_qr_iJn.js";
import { i as require_react, r as require_jsx_runtime, t as cn } from "./utils-Js-2z68f.js";
import { t as Clock } from "./clock-Bb1Fxfqy.js";
import { a as UnsavedChangesModal, i as Textarea, l as LoaderCircle, n as ConditionalField, o as useUnsavedChanges, r as DynamicFormField, s as useDraftForm, t as useSubmit } from "./use-submit-DeEzrFUd.js";
import { n as Search, r as RotateCw, t as api } from "./api-7RNZxqYh.js";
import { C as Skeleton, I as CircleAlert, b as Button, j as toast, y as Input, z as createLucideIcon } from "./index-DNFkD0_T.js";
import { a as CardHeader, o as CardTitle, r as CardDescription, t as Card } from "./card-zgyGx9gf.js";
import { _ as addDays, t as format } from "./format-05xOirGE.js";
import { t as Badge } from "./badge-DgtrrfRe.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-Bltb2ZDY.js";
import { t as Label } from "./label-DT_QEx8r.js";
import { n as RadioGroup, r as RadioGroupItem, t as Checkbox } from "./checkbox-VSPOZbpU.js";
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
//#region src/lib/validators.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var validators = {
	required: (val) => ({
		isValid: val !== void 0 && val !== null && String(val).trim() !== "",
		message: "Campo obrigatório"
	}),
	email: (val) => ({
		isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
		message: "E-mail deve ser válido"
	}),
	phoneBR: (val) => ({
		isValid: /^\(\d{2}\) \d{4,5}-\d{4}$/.test(val),
		message: "Deve ser no formato (XX) XXXXX-XXXX"
	}),
	linkedin: (val) => ({
		isValid: val === "" || /^https:\/\/(www\.)?linkedin\.com/.test(val),
		message: "URL deve ser do LinkedIn"
	}),
	numberRange: (val, min = 0, max = 10) => ({
		isValid: val >= min && val <= max,
		message: `O valor deve estar entre ${min} e ${max}`
	}),
	minDate: (val, minDate = /* @__PURE__ */ new Date("2026-05-24T00:00:00")) => ({
		isValid: new Date(val) >= minDate,
		message: "Data não pode ser no passado"
	}),
	time: (val) => ({
		isValid: /^([01]\d|2[0-3]):([0-5]\d)$/.test(val),
		message: "Hora deve estar no formato HH:mm"
	}),
	length: (val, min = 0, max = Infinity) => ({
		isValid: val.length >= min && val.length <= max,
		message: `Tamanho deve ter entre ${min} e ${max} caracteres`
	})
};
//#endregion
//#region src/mocks/candidatosAprovacao.ts
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
//#region src/hooks/use-aprovacao.ts
function useAprovacao(options) {
	return useSubmit((id, data) => api.createInterview({
		candidatoId: id,
		...data
	}), options);
}
//#endregion
//#region src/pages/aprovacao.tsx
var import_jsx_runtime = require_jsx_runtime();
var getBadgeStyles = (status) => {
	switch (status) {
		case "Formulário Recebido":
		case "Aguardando Avaliação": return "bg-ring/20 text-foreground border-transparent";
		case "Busca Web Concluída":
		case "Avaliação Recebida": return "bg-primary/20 text-primary border-transparent";
		case "Aprovado":
		case "Recomendo fortemente": return "bg-primary text-primary-foreground border-transparent";
		case "Rejeitado":
		case "Não recomendo": return "bg-destructive text-destructive-foreground border-transparent";
		case "BLOQUEADO": return "bg-destructive text-destructive-foreground font-bold border-transparent";
		default: return "bg-secondary text-secondary-foreground border-transparent";
	}
};
function AprovacaoPage() {
	const [candidatos, setCandidatos] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
	const [displayId, setDisplayId] = (0, import_react.useState)(null);
	const [isFadingOut, setIsFadingOut] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("revisao");
	const defaultFormData = {
		decisao: "",
		justificativa: "",
		agendamentoData: "",
		agendamentoHora: "",
		agendamentoEmail: "",
		notificarCalendar: true,
		notificarWhatsapp: true
	};
	const [formData, setFormData] = (0, import_react.useState)(defaultFormData);
	const isDirty = formData.decisao !== "" || formData.justificativa !== "" || formData.agendamentoData !== "";
	const { isHydrated, clearDraft, handleFocus, saveImmediate } = useDraftForm({
		key: displayId ? `aprovacao-diretor-draft-${displayId}` : null,
		currentValues: formData,
		setValues: setFormData,
		adapter: {
			toDraft: (v) => ({
				candidatoId: displayId,
				decisao: v.decisao,
				justificativa: v.justificativa,
				dataEntrevista: v.agendamentoData,
				horarioEntrevista: v.agendamentoHora,
				emailConfirmacao: v.agendamentoEmail,
				criarCalendar: v.notificarCalendar,
				enviarWhatsApp: v.notificarWhatsapp
			}),
			fromDraft: (d) => ({
				decisao: d.decisao || "",
				justificativa: d.justificativa || "",
				agendamentoData: d.dataEntrevista || "",
				agendamentoHora: d.horarioEntrevista || "",
				agendamentoEmail: d.emailConfirmacao || "",
				notificarCalendar: d.criarCalendar !== false,
				notificarWhatsapp: d.enviarWhatsApp !== false
			})
		}
	});
	const blocker = useUnsavedChanges(isDirty);
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
	const handleSelectCandidate = (id) => {
		if (id === displayId) return;
		if (displayId && isDirty) saveImmediate(formData);
		setSelectedId(id);
		setFormData(defaultFormData);
		if (displayId) {
			setIsFadingOut(true);
			setTimeout(() => {
				setIsFadingOut(false);
				setDisplayId(id);
				setActiveTab("revisao");
			}, 200);
		} else {
			setDisplayId(id);
			setActiveTab("revisao");
		}
	};
	const selectedCandidato = candidatos.find((c) => c.id === displayId);
	(0, import_react.useEffect)(() => {
		if (selectedCandidato && !formData.agendamentoEmail) setFormData((prev) => ({
			...prev,
			agendamentoEmail: selectedCandidato.dadosPessoais.email
		}));
	}, [selectedCandidato, formData.agendamentoEmail]);
	const isJustificativaValid = formData.decisao === "rejeitar" ? formData.justificativa.length >= 5 && formData.justificativa.length <= 300 : true;
	const validateForm = () => {
		if (!formData.decisao) return false;
		if (formData.decisao === "rejeitar" && !isJustificativaValid) return false;
		if (formData.decisao === "aprovar") {
			if (!formData.agendamentoData || !formData.agendamentoHora || !formData.agendamentoEmail) return false;
			if (!validators.email(formData.agendamentoEmail).isValid) return false;
			if (!validators.minDate(formData.agendamentoData).isValid) return false;
			if (!validators.time(formData.agendamentoHora).isValid) return false;
		}
		return true;
	};
	const { execute: submitForm, isLoading: isSubmittingAPI } = useAprovacao({ onSuccess: () => {
		const targetStatus = formData.decisao === "aprovar" ? "Aprovado" : "Rejeitado";
		toast.success(formData.decisao === "aprovar" ? "Candidato aprovado e entrevista agendada com sucesso!" : "Candidato rejeitado.", { duration: 4e3 });
		setCandidatos((prev) => prev.map((c) => c.id === displayId ? {
			...c,
			status: targetStatus
		} : c));
		clearDraft();
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		setTimeout(() => {
			setCandidatos((prev) => prev.filter((c) => c.id !== displayId));
			setDisplayId(null);
			setSelectedId(null);
		}, 1e3);
	} });
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!displayId) return;
		if (!validateForm()) {
			toast.error("Corrija os erros abaixo antes de enviar", { duration: 6e3 });
			setTimeout(() => {
				const errElement = document.querySelector(".text-destructive, [aria-invalid=\"true\"], .border-destructive");
				if (errElement) {
					errElement.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
					const input = errElement.closest("fieldset, div")?.querySelector("input, select, textarea");
					if (input) input.focus();
				}
			}, 300);
			return;
		}
		submitForm(displayId, formData);
	};
	const today = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
	const maxDate = format(addDays(/* @__PURE__ */ new Date(), 14), "yyyy-MM-dd");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/aprovacao.tsx:215:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/aprovacao.tsx:217:7",
				"data-prohibitions": "[editContent]",
				className: "mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/aprovacao.tsx:218:9",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						"data-uid": "src/pages/aprovacao.tsx:219:11",
						"data-prohibitions": "[]",
						className: "text-[2rem] font-bold tracking-tight",
						children: "Aprovação Final"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/aprovacao.tsx:220:11",
						"data-prohibitions": "[]",
						className: "text-sm text-muted-foreground mt-1",
						children: "Revisão Diretor Técnico e Agendamento"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/pages/aprovacao.tsx:224:9",
					"data-prohibitions": "[editContent]",
					variant: "outline",
					size: "icon",
					onClick: loadData,
					title: "Atualizar lista",
					className: "min-h-[44px] min-w-[44px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
						"data-uid": "src/pages/aprovacao.tsx:231:11",
						"data-prohibitions": "[editContent]",
						className: cn("h-5 w-5", loading && "animate-spin")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/aprovacao.tsx:235:7",
				"data-prohibitions": "[editContent]",
				className: "flex flex-col md:flex-row gap-6 lg:gap-8 relative flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/aprovacao.tsx:237:9",
					"data-prohibitions": "[editContent]",
					className: "w-full md:w-[40%] lg:w-[35%] flex flex-col gap-4",
					children: loading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/aprovacao.tsx:240:15",
						"data-prohibitions": "[editContent]",
						className: "h-28 w-full rounded-xl"
					}, i)) : candidatos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/aprovacao.tsx:243:13",
						"data-prohibitions": "[]",
						className: "text-center p-8 text-muted-foreground flex flex-col items-center border rounded-xl bg-muted/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							"data-uid": "src/pages/aprovacao.tsx:244:15",
							"data-prohibitions": "[editContent]",
							className: "h-8 w-8 mb-3 opacity-50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/aprovacao.tsx:245:15",
							"data-prohibitions": "[]",
							children: "Nenhum candidato aguardando aprovação no momento"
						})]
					}) : candidatos.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-uid": "src/pages/aprovacao.tsx:249:15",
						"data-prohibitions": "[editContent]",
						className: cn("cursor-pointer transition-all duration-200 hover:border-primary focus-visible:ring-2 focus-visible:ring-ring outline-none", selectedId === c.id ? "border-l-4 border-l-primary border-primary bg-muted/50" : "border-border"),
						onClick: () => handleSelectCandidate(c.id),
						tabIndex: 0,
						"aria-current": selectedId === c.id ? "true" : "false",
						onKeyDown: (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								handleSelectCandidate(c.id);
							}
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							"data-uid": "src/pages/aprovacao.tsx:267:17",
							"data-prohibitions": "[editContent]",
							className: "p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/aprovacao.tsx:268:19",
								"data-prohibitions": "[editContent]",
								className: "flex justify-between items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/aprovacao.tsx:269:21",
									"data-prohibitions": "[editContent]",
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										"data-uid": "src/pages/aprovacao.tsx:270:23",
										"data-prohibitions": "[editContent]",
										className: "text-base font-semibold leading-tight",
										children: c.nome
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										"data-uid": "src/pages/aprovacao.tsx:273:23",
										"data-prohibitions": "[editContent]",
										className: "text-sm opacity-70",
										children: c.especialidade
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									"data-uid": "src/pages/aprovacao.tsx:277:21",
									"data-prohibitions": "[editContent]",
									variant: "outline",
									className: cn("whitespace-nowrap", getBadgeStyles(c.status)),
									children: c.status
								})]
							})
						})
					}, c.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/aprovacao.tsx:291:9",
					"data-prohibitions": "[editContent]",
					className: "w-full md:w-[60%] lg:w-[65%] md:sticky md:top-24 md:max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border bg-card shadow-sm relative",
					children: !selectedCandidato && !isFadingOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/aprovacao.tsx:293:13",
						"data-prohibitions": "[]",
						className: "flex flex-col items-center justify-center h-full min-h-[400px] text-muted-foreground p-8 text-center animate-fade-in",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
							"data-uid": "src/pages/aprovacao.tsx:294:15",
							"data-prohibitions": "[editContent]",
							className: "h-12 w-12 mb-4 opacity-20"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/aprovacao.tsx:295:15",
							"data-prohibitions": "[]",
							children: "Selecione um candidato na lista para revisar e tomar a decisão final"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/aprovacao.tsx:298:13",
						"data-prohibitions": "[editContent]",
						className: cn("p-4 sm:p-6 lg:p-8 space-y-8 transition-opacity duration-200", isFadingOut ? "opacity-0" : "opacity-100 animate-fade-in"),
						style: { animationDuration: "300ms" },
						children: selectedCandidato && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/aprovacao.tsx:307:19",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/aprovacao.tsx:308:21",
								"data-prohibitions": "[editContent]",
								className: "text-[2rem] font-bold tracking-tight leading-tight",
								children: selectedCandidato.nome
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/aprovacao.tsx:311:21",
								"data-prohibitions": "[editContent]",
								className: "text-muted-foreground text-lg mt-1",
								children: selectedCandidato.especialidade
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
							"data-uid": "src/pages/aprovacao.tsx:316:19",
							"data-prohibitions": "[editContent]",
							value: activeTab,
							onValueChange: setActiveTab,
							className: "w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
									"data-uid": "src/pages/aprovacao.tsx:317:21",
									"data-prohibitions": "[]",
									className: "w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/aprovacao.tsx:318:23",
										"data-prohibitions": "[]",
										value: "revisao",
										className: "flex-1",
										children: "Revisão RH"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/aprovacao.tsx:321:23",
										"data-prohibitions": "[]",
										value: "decisao",
										className: "flex-1",
										children: "Decisão e Agendamento"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									"data-uid": "src/pages/aprovacao.tsx:326:21",
									"data-prohibitions": "[editContent]",
									value: "revisao",
									className: "space-y-6 mt-6 animate-tab-fade-in",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										"data-uid": "src/pages/aprovacao.tsx:327:23",
										"data-prohibitions": "[editContent]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
											"data-uid": "src/pages/aprovacao.tsx:328:25",
											"data-prohibitions": "[]",
											className: "text-base font-semibold mb-4",
											children: "Avaliação do RH"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/aprovacao.tsx:329:25",
											"data-prohibitions": "[editContent]",
											className: "space-y-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/aprovacao.tsx:330:27",
													"data-prohibitions": "[editContent]",
													className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														"data-uid": "src/pages/aprovacao.tsx:331:29",
														"data-prohibitions": "[editContent]",
														className: "p-6 bg-muted/20 border rounded-xl text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															"data-uid": "src/pages/aprovacao.tsx:332:31",
															"data-prohibitions": "[]",
															className: "text-sm font-medium text-muted-foreground mb-2",
															children: "Alinhamento de Valores"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															"data-uid": "src/pages/aprovacao.tsx:335:31",
															"data-prohibitions": "[editContent]",
															className: "text-[2.5rem] leading-none font-bold text-primary",
															children: selectedCandidato.avaliacaoRh.notaValores.toFixed(1)
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														"data-uid": "src/pages/aprovacao.tsx:339:29",
														"data-prohibitions": "[editContent]",
														className: "p-6 bg-muted/20 border rounded-xl text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															"data-uid": "src/pages/aprovacao.tsx:340:31",
															"data-prohibitions": "[]",
															className: "text-sm font-medium text-muted-foreground mb-2",
															children: "Competência Técnica"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															"data-uid": "src/pages/aprovacao.tsx:343:31",
															"data-prohibitions": "[editContent]",
															className: "text-[2.5rem] leading-none font-bold text-primary",
															children: selectedCandidato.avaliacaoRh.notaCompetencia.toFixed(1)
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/aprovacao.tsx:349:27",
													"data-prohibitions": "[editContent]",
													className: "space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														"data-uid": "src/pages/aprovacao.tsx:350:29",
														"data-prohibitions": "[]",
														className: "font-semibold text-base",
														children: "Recomendação do RH"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														"data-uid": "src/pages/aprovacao.tsx:351:29",
														"data-prohibitions": "[editContent]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															"data-uid": "src/pages/aprovacao.tsx:352:31",
															"data-prohibitions": "[editContent]",
															variant: "outline",
															className: cn("text-sm px-4 py-1.5 border-transparent", getBadgeStyles(selectedCandidato.avaliacaoRh.recomendacao)),
															children: selectedCandidato.avaliacaoRh.recomendacao
														})
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/aprovacao.tsx:364:27",
													"data-prohibitions": "[editContent]",
													className: "space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														"data-uid": "src/pages/aprovacao.tsx:365:29",
														"data-prohibitions": "[]",
														className: "font-semibold text-base",
														children: "Justificativa do Avaliador"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														"data-uid": "src/pages/aprovacao.tsx:368:29",
														"data-prohibitions": "[editContent]",
														className: "text-sm text-foreground bg-muted/20 p-5 rounded-xl border leading-relaxed",
														children: selectedCandidato.avaliacaoRh.justificativa
													})]
												})
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
									"data-uid": "src/pages/aprovacao.tsx:376:21",
									"data-prohibitions": "[editContent]",
									value: "decisao",
									className: "mt-6 animate-tab-fade-in",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
										"data-uid": "src/pages/aprovacao.tsx:377:23",
										"data-prohibitions": "[editContent]",
										onSubmit: handleFormSubmit,
										onFocus: handleFocus,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
											"data-uid": "src/pages/aprovacao.tsx:378:25",
											"data-prohibitions": "[editContent]",
											disabled: isSubmittingAPI,
											className: "border-0 p-0 m-0 min-w-0 w-full",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/aprovacao.tsx:382:27",
													"data-prohibitions": "[]",
													className: "mb-6",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
														"data-uid": "src/pages/aprovacao.tsx:383:29",
														"data-prohibitions": "[]",
														className: "text-base font-semibold",
														children: "Decisão Final do Diretor"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														"data-uid": "src/pages/aprovacao.tsx:386:29",
														"data-prohibitions": "[]",
														className: "text-sm text-muted-foreground mt-1",
														children: "Aprove o candidato para a entrevista final ou encerre o processo."
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/aprovacao.tsx:391:27",
													"data-prohibitions": "[editContent]",
													className: "space-y-8",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
															"data-uid": "src/pages/aprovacao.tsx:392:29",
															"data-prohibitions": "[]",
															className: "space-y-4",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
																"data-uid": "src/pages/aprovacao.tsx:393:31",
																"data-prohibitions": "[]",
																className: "font-semibold text-sm sr-only",
																children: "Escolha uma decisão"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
																"data-uid": "src/pages/aprovacao.tsx:396:31",
																"data-prohibitions": "[]",
																value: formData.decisao,
																onValueChange: (val) => setFormData((p) => ({
																	...p,
																	decisao: val
																})),
																className: "flex flex-col gap-4",
																"aria-required": "true",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	"data-uid": "src/pages/aprovacao.tsx:404:33",
																	"data-prohibitions": "[]",
																	className: "flex items-center space-x-4 border-2 border-border p-5 rounded-xl flex-1 cursor-pointer has-[:checked]:bg-primary/5 has-[:checked]:border-primary transition-all duration-200",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
																		"data-uid": "src/pages/aprovacao.tsx:405:35",
																		"data-prohibitions": "[editContent]",
																		value: "aprovar",
																		id: "aprovar",
																		className: "text-primary border-primary"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																		"data-uid": "src/pages/aprovacao.tsx:410:35",
																		"data-prohibitions": "[]",
																		htmlFor: "aprovar",
																		className: "cursor-pointer font-semibold text-base flex-1",
																		children: "Aprovar para Entrevista"
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	"data-uid": "src/pages/aprovacao.tsx:417:33",
																	"data-prohibitions": "[]",
																	className: "flex items-center space-x-4 border-2 border-border p-5 rounded-xl flex-1 cursor-pointer has-[:checked]:bg-destructive/5 has-[:checked]:border-destructive transition-all duration-200",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
																		"data-uid": "src/pages/aprovacao.tsx:418:35",
																		"data-prohibitions": "[editContent]",
																		value: "rejeitar",
																		id: "rejeitar",
																		className: "text-destructive border-destructive data-[state=checked]:border-destructive data-[state=checked]:text-destructive"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																		"data-uid": "src/pages/aprovacao.tsx:423:35",
																		"data-prohibitions": "[]",
																		htmlFor: "rejeitar",
																		className: "cursor-pointer font-semibold text-base text-destructive flex-1",
																		children: "Rejeitar Candidato"
																	})]
																})]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionalField, {
															"data-uid": "src/pages/aprovacao.tsx:433:29",
															"data-prohibitions": "[]",
															show: formData.decisao === "aprovar",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																"data-uid": "src/pages/aprovacao.tsx:434:31",
																"data-prohibitions": "[]",
																className: "space-y-6 p-6 border-2 border-primary/20 bg-primary/5 rounded-xl",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
																		"data-uid": "src/pages/aprovacao.tsx:435:33",
																		"data-prohibitions": "[]",
																		className: "font-semibold text-lg flex items-center gap-2 text-primary",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {
																			"data-uid": "src/pages/aprovacao.tsx:436:35",
																			"data-prohibitions": "[editContent]",
																			className: "h-5 w-5"
																		}), " Agendamento da Entrevista Técnica"]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		"data-uid": "src/pages/aprovacao.tsx:438:33",
																		"data-prohibitions": "[]",
																		className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynamicFormField, {
																				"data-uid": "src/pages/aprovacao.tsx:439:35",
																				"data-prohibitions": "[]",
																				id: "data",
																				label: "Data do Encontro",
																				required: true,
																				touched: !!formData.agendamentoData,
																				error: formData.agendamentoData && !validators.minDate(formData.agendamentoData).isValid ? validators.minDate(formData.agendamentoData).message : void 0,
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																					"data-uid": "src/pages/aprovacao.tsx:451:37",
																					"data-prohibitions": "[editContent]",
																					name: "data",
																					type: "date",
																					min: today,
																					max: maxDate,
																					value: formData.agendamentoData,
																					onChange: (e) => setFormData((p) => ({
																						...p,
																						agendamentoData: e.target.value
																					})),
																					className: "min-h-[44px]"
																				})
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynamicFormField, {
																				"data-uid": "src/pages/aprovacao.tsx:466:35",
																				"data-prohibitions": "[]",
																				id: "hora",
																				label: "Horário",
																				required: true,
																				touched: !!formData.agendamentoHora,
																				error: formData.agendamentoHora && !validators.time(formData.agendamentoHora).isValid ? validators.time(formData.agendamentoHora).message : void 0,
																				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
																					"data-uid": "src/pages/aprovacao.tsx:477:43",
																					"data-prohibitions": "[editContent]",
																					className: "h-5 w-5"
																				}),
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																					"data-uid": "src/pages/aprovacao.tsx:479:37",
																					"data-prohibitions": "[editContent]",
																					name: "hora",
																					type: "time",
																					value: formData.agendamentoHora,
																					onChange: (e) => setFormData((p) => ({
																						...p,
																						agendamentoHora: e.target.value
																					})),
																					className: "min-h-[44px] pr-10"
																				})
																			}),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																				"data-uid": "src/pages/aprovacao.tsx:492:35",
																				"data-prohibitions": "[]",
																				className: "sm:col-span-2",
																				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynamicFormField, {
																					"data-uid": "src/pages/aprovacao.tsx:493:37",
																					"data-prohibitions": "[]",
																					id: "email",
																					label: "Email do Candidato para Convite",
																					required: true,
																					touched: !!formData.agendamentoEmail,
																					error: formData.agendamentoEmail && !validators.email(formData.agendamentoEmail).isValid ? validators.email(formData.agendamentoEmail).message : void 0,
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																						"data-uid": "src/pages/aprovacao.tsx:505:39",
																						"data-prohibitions": "[editContent]",
																						name: "email",
																						type: "email",
																						value: formData.agendamentoEmail,
																						onChange: (e) => setFormData((p) => ({
																							...p,
																							agendamentoEmail: e.target.value
																						})),
																						className: "min-h-[44px]"
																					})
																				})
																			})
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		"data-uid": "src/pages/aprovacao.tsx:521:33",
																		"data-prohibitions": "[]",
																		className: "flex flex-col gap-4 pt-6 border-t border-primary/10",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																			"data-uid": "src/pages/aprovacao.tsx:522:35",
																			"data-prohibitions": "[]",
																			className: "text-base font-semibold",
																			children: "Notificações Automáticas"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			"data-uid": "src/pages/aprovacao.tsx:525:35",
																			"data-prohibitions": "[]",
																			className: "flex flex-col gap-4",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				"data-uid": "src/pages/aprovacao.tsx:526:37",
																				"data-prohibitions": "[]",
																				className: "flex items-center space-x-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
																					"data-uid": "src/pages/aprovacao.tsx:527:39",
																					"data-prohibitions": "[editContent]",
																					id: "cal",
																					checked: formData.notificarCalendar,
																					onCheckedChange: (c) => setFormData((p) => ({
																						...p,
																						notificarCalendar: c === true
																					}))
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																					"data-uid": "src/pages/aprovacao.tsx:537:39",
																					"data-prohibitions": "[]",
																					htmlFor: "cal",
																					className: "font-medium text-base cursor-pointer",
																					children: "Convite Google Calendar"
																				})]
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																				"data-uid": "src/pages/aprovacao.tsx:544:37",
																				"data-prohibitions": "[]",
																				className: "flex items-center space-x-3",
																				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
																					"data-uid": "src/pages/aprovacao.tsx:545:39",
																					"data-prohibitions": "[editContent]",
																					id: "wpp",
																					checked: formData.notificarWhatsapp,
																					onCheckedChange: (c) => setFormData((p) => ({
																						...p,
																						notificarWhatsapp: c === true
																					}))
																				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																					"data-uid": "src/pages/aprovacao.tsx:555:39",
																					"data-prohibitions": "[]",
																					htmlFor: "wpp",
																					className: "font-medium text-base cursor-pointer",
																					children: "Notificação via WhatsApp"
																				})]
																			})]
																		})]
																	})
																]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionalField, {
															"data-uid": "src/pages/aprovacao.tsx:567:29",
															"data-prohibitions": "[editContent]",
															show: formData.decisao === "rejeitar",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
																"data-uid": "src/pages/aprovacao.tsx:568:31",
																"data-prohibitions": "[editContent]",
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
																		"data-uid": "src/pages/aprovacao.tsx:569:33",
																		"data-prohibitions": "[]",
																		htmlFor: "justificativaFinal",
																		className: "font-medium block",
																		children: [
																			"Justificativa da Rejeição",
																			" ",
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				"data-uid": "src/pages/aprovacao.tsx:571:35",
																				"data-prohibitions": "[]",
																				className: "text-destructive",
																				children: "*"
																			})
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
																		"data-uid": "src/pages/aprovacao.tsx:573:33",
																		"data-prohibitions": "[editContent]",
																		id: "justificativaFinal",
																		placeholder: "Descreva o motivo da rejeição do perfil...",
																		maxLength: 300,
																		value: formData.justificativa,
																		onChange: (e) => setFormData((p) => ({
																			...p,
																			justificativa: e.target.value
																		})),
																		"aria-required": "true",
																		"aria-invalid": formData.justificativa.length > 0 && !isJustificativaValid,
																		"aria-describedby": formData.justificativa.length > 0 && !isJustificativaValid ? "justificativa-final-error" : void 0,
																		className: formData.justificativa.length > 0 && !isJustificativaValid ? "border-destructive focus-visible:ring-destructive" : ""
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		"data-uid": "src/pages/aprovacao.tsx:596:33",
																		"data-prohibitions": "[editContent]",
																		className: "flex justify-between items-start mt-1 h-5",
																		children: [formData.justificativa.length > 0 && !isJustificativaValid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			"data-uid": "src/pages/aprovacao.tsx:598:37",
																			"data-prohibitions": "[]",
																			id: "justificativa-final-error",
																			className: "text-destructive text-xs font-medium animate-fade-in",
																			children: "Mínimo de 5 caracteres."
																		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			"data-uid": "src/pages/aprovacao.tsx:605:37",
																			"data-prohibitions": "[editContent]"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																			"data-uid": "src/pages/aprovacao.tsx:607:35",
																			"data-prohibitions": "[editContent]",
																			className: cn("text-xs font-medium transition-colors w-full text-right block", formData.justificativa.length >= 300 ? "text-destructive" : formData.justificativa.length >= 240 ? "text-ring" : "opacity-60"),
																			children: [formData.justificativa.length, "/300"]
																		})]
																	})
																]
															})
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/aprovacao.tsx:624:27",
													"data-prohibitions": "[editContent]",
													className: "mt-8 pt-6 border-t flex flex-col sm:flex-row justify-end gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														"data-uid": "src/pages/aprovacao.tsx:625:29",
														"data-prohibitions": "[]",
														type: "button",
														variant: "outline",
														disabled: isSubmittingAPI,
														onClick: () => {
															setDisplayId(null);
															setSelectedId(null);
															setFormData(defaultFormData);
														},
														className: "w-full sm:w-auto min-h-[44px]",
														children: "Cancelar"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
														"data-uid": "src/pages/aprovacao.tsx:638:29",
														"data-prohibitions": "[editContent]",
														type: "submit",
														disabled: isSubmittingAPI,
														className: cn("w-full sm:w-auto min-h-[44px] transition-colors", validateForm() && !isSubmittingAPI ? "bg-green-600 hover:bg-green-700 text-white" : "", isSubmittingAPI && "cursor-not-allowed opacity-50"),
														children: [isSubmittingAPI && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
															"data-uid": "src/pages/aprovacao.tsx:649:51",
															"data-prohibitions": "[editContent]",
															className: "w-4 h-4 mr-2 animate-spin"
														}), isSubmittingAPI ? "Enviando..." : "Confirmar Decisão Final"]
													})]
												})
											]
										})
									})
								})
							]
						})] })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnsavedChangesModal, {
				"data-uid": "src/pages/aprovacao.tsx:663:7",
				"data-prohibitions": "[editContent]",
				blocker,
				onDiscard: () => {
					clearDraft();
					setFormData(defaultFormData);
				}
			})
		]
	});
}
//#endregion
export { AprovacaoPage as default };

//# sourceMappingURL=aprovacao-DdX8sjWJ.js.map