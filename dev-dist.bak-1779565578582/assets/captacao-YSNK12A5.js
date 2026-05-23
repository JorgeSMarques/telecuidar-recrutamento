import { r as require_jsx_runtime } from "./utils-Bm2fKlG1.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-CtudkyPa.js";
import { S as toast, f as Input, p as Button } from "./index-9V43Rj6P.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-BfYMebor.js";
import { t as Label } from "./label-aWgAx77I.js";
import { t as Textarea } from "./textarea-BOpSc362.js";
//#region src/pages/captacao.tsx
var import_jsx_runtime = require_jsx_runtime();
function Captacao() {
	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success("Candidato cadastrado com sucesso!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/captacao.tsx:29:5",
		"data-prohibitions": "[]",
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/captacao.tsx:30:7",
			"data-prohibitions": "[]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/captacao.tsx:31:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold tracking-tight",
				children: "Captação"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/captacao.tsx:32:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground",
				children: "Cadastre novos talentos médicos na plataforma."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			"data-uid": "src/pages/captacao.tsx:35:7",
			"data-prohibitions": "[]",
			className: "max-w-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				"data-uid": "src/pages/captacao.tsx:36:9",
				"data-prohibitions": "[]",
				onSubmit: handleSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						"data-uid": "src/pages/captacao.tsx:37:11",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							"data-uid": "src/pages/captacao.tsx:38:13",
							"data-prohibitions": "[]",
							children: "Informações do Candidato"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							"data-uid": "src/pages/captacao.tsx:39:13",
							"data-prohibitions": "[]",
							children: "Preencha os dados básicos para iniciar o processo de avaliação."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						"data-uid": "src/pages/captacao.tsx:43:11",
						"data-prohibitions": "[]",
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/captacao.tsx:44:13",
								"data-prohibitions": "[]",
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/captacao.tsx:45:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/captacao.tsx:46:17",
										"data-prohibitions": "[]",
										htmlFor: "nome",
										children: "Nome Completo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/captacao.tsx:47:17",
										"data-prohibitions": "[editContent]",
										id: "nome",
										placeholder: "Dr. João Silva",
										required: true
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/captacao.tsx:49:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/captacao.tsx:50:17",
										"data-prohibitions": "[]",
										htmlFor: "email",
										children: "E-mail Profissional"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/captacao.tsx:51:17",
										"data-prohibitions": "[editContent]",
										id: "email",
										type: "email",
										placeholder: "joao@exemplo.com",
										required: true
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/captacao.tsx:55:13",
								"data-prohibitions": "[]",
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/captacao.tsx:56:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/captacao.tsx:57:17",
										"data-prohibitions": "[]",
										htmlFor: "telefone",
										children: "Telefone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/captacao.tsx:58:17",
										"data-prohibitions": "[editContent]",
										id: "telefone",
										placeholder: "(00) 00000-0000"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/captacao.tsx:60:15",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/captacao.tsx:61:17",
										"data-prohibitions": "[]",
										htmlFor: "crm",
										children: "CRM/Coren"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/captacao.tsx:62:17",
										"data-prohibitions": "[editContent]",
										id: "crm",
										placeholder: "123456-UF",
										required: true
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/captacao.tsx:66:13",
								"data-prohibitions": "[]",
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/captacao.tsx:67:15",
									"data-prohibitions": "[]",
									htmlFor: "especialidade",
									children: "Especialidade"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									"data-uid": "src/pages/captacao.tsx:68:15",
									"data-prohibitions": "[]",
									required: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										"data-uid": "src/pages/captacao.tsx:69:17",
										"data-prohibitions": "[]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
											"data-uid": "src/pages/captacao.tsx:70:19",
											"data-prohibitions": "[editContent]",
											placeholder: "Selecione uma especialidade"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
										"data-uid": "src/pages/captacao.tsx:72:17",
										"data-prohibitions": "[]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												"data-uid": "src/pages/captacao.tsx:73:19",
												"data-prohibitions": "[]",
												value: "clinico",
												children: "Clínico Geral"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												"data-uid": "src/pages/captacao.tsx:74:19",
												"data-prohibitions": "[]",
												value: "pediatra",
												children: "Pediatria"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												"data-uid": "src/pages/captacao.tsx:75:19",
												"data-prohibitions": "[]",
												value: "enfermagem",
												children: "Enfermagem"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												"data-uid": "src/pages/captacao.tsx:76:19",
												"data-prohibitions": "[]",
												value: "fisioterapia",
												children: "Fisioterapia"
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/captacao.tsx:81:13",
								"data-prohibitions": "[]",
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/captacao.tsx:82:15",
									"data-prohibitions": "[]",
									htmlFor: "experiencia",
									children: "Resumo da Experiência"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									"data-uid": "src/pages/captacao.tsx:83:15",
									"data-prohibitions": "[editContent]",
									id: "experiencia",
									placeholder: "Descreva brevemente a experiência profissional do candidato...",
									className: "min-h-[120px]"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
						"data-uid": "src/pages/captacao.tsx:90:11",
						"data-prohibitions": "[]",
						className: "flex justify-end gap-4 border-t pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"data-uid": "src/pages/captacao.tsx:91:13",
							"data-prohibitions": "[]",
							variant: "outline",
							type: "button",
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"data-uid": "src/pages/captacao.tsx:94:13",
							"data-prohibitions": "[]",
							type: "submit",
							children: "Salvar Candidato"
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { Captacao as default };

//# sourceMappingURL=captacao-YSNK12A5.js.map