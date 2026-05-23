import { r as require_jsx_runtime } from "./utils-Bm2fKlG1.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BSJbmKqx.js";
import { p as Button, w as toast } from "./index-BtNI5Lxy.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-hLjDq9kO.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-wY_iIUPt.js";
import { t as Label } from "./label-D0hyefaR.js";
import { t as Textarea } from "./textarea-S6QJ23mG.js";
//#region src/pages/avaliacao.tsx
var import_jsx_runtime = require_jsx_runtime();
function Avaliacao() {
	const handleSave = () => {
		toast.success("Avaliação salva com sucesso!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/avaliacao.tsx:28:5",
		"data-prohibitions": "[]",
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/avaliacao.tsx:29:7",
			"data-prohibitions": "[]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/avaliacao.tsx:30:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold tracking-tight",
				children: "Avaliação"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/avaliacao.tsx:31:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground",
				children: "Conduza e registre as diferentes etapas da avaliação do candidato."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			"data-uid": "src/pages/avaliacao.tsx:36:7",
			"data-prohibitions": "[]",
			defaultValue: "tecnica",
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					"data-uid": "src/pages/avaliacao.tsx:37:9",
					"data-prohibitions": "[]",
					className: "grid w-full md:w-auto grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							"data-uid": "src/pages/avaliacao.tsx:38:11",
							"data-prohibitions": "[]",
							value: "tecnica",
							children: "Técnica"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							"data-uid": "src/pages/avaliacao.tsx:39:11",
							"data-prohibitions": "[]",
							value: "comportamental",
							children: "Comportamental"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							"data-uid": "src/pages/avaliacao.tsx:40:11",
							"data-prohibitions": "[]",
							value: "clinica",
							children: "Clínica"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					"data-uid": "src/pages/avaliacao.tsx:43:9",
					"data-prohibitions": "[]",
					value: "tecnica",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/avaliacao.tsx:44:11",
						"data-prohibitions": "[]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
								"data-uid": "src/pages/avaliacao.tsx:45:13",
								"data-prohibitions": "[]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									"data-uid": "src/pages/avaliacao.tsx:46:15",
									"data-prohibitions": "[]",
									children: "Avaliação Técnica"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									"data-uid": "src/pages/avaliacao.tsx:47:15",
									"data-prohibitions": "[]",
									children: "Analise as competências e conhecimentos técnicos do profissional."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-uid": "src/pages/avaliacao.tsx:51:13",
								"data-prohibitions": "[]",
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/avaliacao.tsx:52:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/avaliacao.tsx:53:17",
										"data-prohibitions": "[]",
										children: "Nível de Conhecimento Prático"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										"data-uid": "src/pages/avaliacao.tsx:54:17",
										"data-prohibitions": "[]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											"data-uid": "src/pages/avaliacao.tsx:55:19",
											"data-prohibitions": "[]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
												"data-uid": "src/pages/avaliacao.tsx:56:21",
												"data-prohibitions": "[editContent]",
												placeholder: "Selecione..."
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
											"data-uid": "src/pages/avaliacao.tsx:58:19",
											"data-prohibitions": "[]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/pages/avaliacao.tsx:59:21",
													"data-prohibitions": "[]",
													value: "baixo",
													children: "Abaixo do esperado"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/pages/avaliacao.tsx:60:21",
													"data-prohibitions": "[]",
													value: "medio",
													children: "Dentro do esperado"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/pages/avaliacao.tsx:61:21",
													"data-prohibitions": "[]",
													value: "alto",
													children: "Acima do esperado"
												})
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/avaliacao.tsx:65:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/avaliacao.tsx:66:17",
										"data-prohibitions": "[]",
										children: "Observações Técnicas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										"data-uid": "src/pages/avaliacao.tsx:67:17",
										"data-prohibitions": "[editContent]",
										placeholder: "Descreva os pontos fortes e de melhoria observados...",
										className: "min-h-[150px]"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
								"data-uid": "src/pages/avaliacao.tsx:73:13",
								"data-prohibitions": "[]",
								className: "justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"data-uid": "src/pages/avaliacao.tsx:74:15",
									"data-prohibitions": "[]",
									onClick: handleSave,
									children: "Salvar Avaliação Técnica"
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					"data-uid": "src/pages/avaliacao.tsx:79:9",
					"data-prohibitions": "[]",
					value: "comportamental",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/avaliacao.tsx:80:11",
						"data-prohibitions": "[]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
								"data-uid": "src/pages/avaliacao.tsx:81:13",
								"data-prohibitions": "[]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									"data-uid": "src/pages/avaliacao.tsx:82:15",
									"data-prohibitions": "[]",
									children: "Avaliação Comportamental"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									"data-uid": "src/pages/avaliacao.tsx:83:15",
									"data-prohibitions": "[]",
									children: "Avalie o fit cultural e habilidades interpessoais."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-uid": "src/pages/avaliacao.tsx:85:13",
								"data-prohibitions": "[]",
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/avaliacao.tsx:86:15",
									"data-prohibitions": "[]",
									className: "grid grid-cols-1 md:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/avaliacao.tsx:87:17",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/avaliacao.tsx:88:19",
											"data-prohibitions": "[]",
											children: "Comunicação"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											"data-uid": "src/pages/avaliacao.tsx:89:19",
											"data-prohibitions": "[]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												"data-uid": "src/pages/avaliacao.tsx:90:21",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
													"data-uid": "src/pages/avaliacao.tsx:91:23",
													"data-prohibitions": "[editContent]",
													placeholder: "Nota 1-5"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
												"data-uid": "src/pages/avaliacao.tsx:93:21",
												"data-prohibitions": "[]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														"data-uid": "src/pages/avaliacao.tsx:94:23",
														"data-prohibitions": "[]",
														value: "1",
														children: "1 - Ruim"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														"data-uid": "src/pages/avaliacao.tsx:95:23",
														"data-prohibitions": "[]",
														value: "3",
														children: "3 - Regular"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														"data-uid": "src/pages/avaliacao.tsx:96:23",
														"data-prohibitions": "[]",
														value: "5",
														children: "5 - Excelente"
													})
												]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/avaliacao.tsx:100:17",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/avaliacao.tsx:101:19",
											"data-prohibitions": "[]",
											children: "Trabalho em Equipe"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											"data-uid": "src/pages/avaliacao.tsx:102:19",
											"data-prohibitions": "[]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												"data-uid": "src/pages/avaliacao.tsx:103:21",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
													"data-uid": "src/pages/avaliacao.tsx:104:23",
													"data-prohibitions": "[editContent]",
													placeholder: "Nota 1-5"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
												"data-uid": "src/pages/avaliacao.tsx:106:21",
												"data-prohibitions": "[]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														"data-uid": "src/pages/avaliacao.tsx:107:23",
														"data-prohibitions": "[]",
														value: "1",
														children: "1 - Ruim"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														"data-uid": "src/pages/avaliacao.tsx:108:23",
														"data-prohibitions": "[]",
														value: "3",
														children: "3 - Regular"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														"data-uid": "src/pages/avaliacao.tsx:109:23",
														"data-prohibitions": "[]",
														value: "5",
														children: "5 - Excelente"
													})
												]
											})]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/avaliacao.tsx:114:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/avaliacao.tsx:115:17",
										"data-prohibitions": "[]",
										children: "Parecer Psicológico"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										"data-uid": "src/pages/avaliacao.tsx:116:17",
										"data-prohibitions": "[editContent]",
										placeholder: "Parecer geral..."
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
								"data-uid": "src/pages/avaliacao.tsx:119:13",
								"data-prohibitions": "[]",
								className: "justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"data-uid": "src/pages/avaliacao.tsx:120:15",
									"data-prohibitions": "[]",
									onClick: handleSave,
									children: "Salvar Avaliação Comportamental"
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					"data-uid": "src/pages/avaliacao.tsx:125:9",
					"data-prohibitions": "[]",
					value: "clinica",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/avaliacao.tsx:126:11",
						"data-prohibitions": "[]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
								"data-uid": "src/pages/avaliacao.tsx:127:13",
								"data-prohibitions": "[]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									"data-uid": "src/pages/avaliacao.tsx:128:15",
									"data-prohibitions": "[]",
									children: "Avaliação Clínica (Ocupacional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									"data-uid": "src/pages/avaliacao.tsx:129:15",
									"data-prohibitions": "[]",
									children: "Registro do ASO e exames complementares."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-uid": "src/pages/avaliacao.tsx:131:13",
								"data-prohibitions": "[]",
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/avaliacao.tsx:132:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/avaliacao.tsx:133:17",
										"data-prohibitions": "[]",
										children: "Status ASO"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										"data-uid": "src/pages/avaliacao.tsx:134:17",
										"data-prohibitions": "[]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											"data-uid": "src/pages/avaliacao.tsx:135:19",
											"data-prohibitions": "[]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
												"data-uid": "src/pages/avaliacao.tsx:136:21",
												"data-prohibitions": "[editContent]",
												placeholder: "Selecione o status"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
											"data-uid": "src/pages/avaliacao.tsx:138:19",
											"data-prohibitions": "[]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/pages/avaliacao.tsx:139:21",
													"data-prohibitions": "[]",
													value: "apto",
													children: "Apto"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/pages/avaliacao.tsx:140:21",
													"data-prohibitions": "[]",
													value: "apto_restricao",
													children: "Apto com Restrições"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/pages/avaliacao.tsx:141:21",
													"data-prohibitions": "[]",
													value: "inapto",
													children: "Inapto"
												})
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/avaliacao.tsx:145:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/avaliacao.tsx:146:17",
										"data-prohibitions": "[]",
										children: "Restrições / Observações Médicas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										"data-uid": "src/pages/avaliacao.tsx:147:17",
										"data-prohibitions": "[editContent]",
										placeholder: "Detalhes médicos relevantes para a contratação..."
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
								"data-uid": "src/pages/avaliacao.tsx:150:13",
								"data-prohibitions": "[]",
								className: "justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"data-uid": "src/pages/avaliacao.tsx:151:15",
									"data-prohibitions": "[]",
									onClick: handleSave,
									children: "Salvar Avaliação Clínica"
								})
							})
						]
					})
				})
			]
		})]
	});
}
//#endregion
export { Avaliacao as default };

//# sourceMappingURL=avaliacao-BssXfwAD.js.map