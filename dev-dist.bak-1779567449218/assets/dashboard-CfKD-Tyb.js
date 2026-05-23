import { r as require_jsx_runtime } from "./utils-Bm2fKlG1.js";
import { A as createLucideIcon, E as Users, o as useAuth } from "./index-BtNI5Lxy.js";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-hLjDq9kO.js";
import { t as Badge } from "./badge-mrti8dOC.js";
import { r as MOCK_STATS, t as MOCK_CANDIDATES } from "./data-FFY_gZzp.js";
import { I as Tooltip, h as Bar, i as BarChart, o as YAxis, r as ChartTooltipContent, s as XAxis, t as ChartContainer } from "./chart-CUUUWl-p.js";
var Calendar = createLucideIcon("calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]);
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
var FileText = createLucideIcon("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]);
//#endregion
//#region src/pages/dashboard.tsx
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const { user } = useAuth();
	const role = user?.role || "Candidato";
	const getFirstName = () => user?.name?.split(" ")[0] || "Usuário";
	const renderStats = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/dashboard.tsx:16:5",
		"data-prohibitions": "[editContent]",
		className: "grid gap-4 md:grid-cols-3 mb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/dashboard.tsx:17:7",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					"data-uid": "src/pages/dashboard.tsx:18:9",
					"data-prohibitions": "[]",
					className: "flex flex-row items-center justify-between pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/dashboard.tsx:19:11",
						"data-prohibitions": "[]",
						className: "text-sm font-medium",
						children: "Candidatos Ativos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
						"data-uid": "src/pages/dashboard.tsx:20:11",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-4 text-muted-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/pages/dashboard.tsx:22:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/dashboard.tsx:23:11",
						"data-prohibitions": "[editContent]",
						className: "text-2xl font-bold",
						children: MOCK_STATS.activeCandidates
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/dashboard.tsx:24:11",
						"data-prohibitions": "[]",
						className: "text-xs text-muted-foreground",
						children: "+12% desde o último mês"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/dashboard.tsx:27:7",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					"data-uid": "src/pages/dashboard.tsx:28:9",
					"data-prohibitions": "[]",
					className: "flex flex-row items-center justify-between pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/dashboard.tsx:29:11",
						"data-prohibitions": "[]",
						className: "text-sm font-medium",
						children: "Avaliações Pendentes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
						"data-uid": "src/pages/dashboard.tsx:30:11",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-4 text-muted-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/pages/dashboard.tsx:32:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/dashboard.tsx:33:11",
						"data-prohibitions": "[editContent]",
						className: "text-2xl font-bold",
						children: MOCK_STATS.pendingEvaluations
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/dashboard.tsx:34:11",
						"data-prohibitions": "[]",
						className: "text-xs text-muted-foreground",
						children: "Requerem atenção"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				"data-uid": "src/pages/dashboard.tsx:37:7",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					"data-uid": "src/pages/dashboard.tsx:38:9",
					"data-prohibitions": "[]",
					className: "flex flex-row items-center justify-between pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						"data-uid": "src/pages/dashboard.tsx:39:11",
						"data-prohibitions": "[]",
						className: "text-sm font-medium",
						children: "Entrevistas Hoje"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
						"data-uid": "src/pages/dashboard.tsx:40:11",
						"data-prohibitions": "[editContent]",
						className: "h-4 w-4 text-muted-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					"data-uid": "src/pages/dashboard.tsx:42:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/dashboard.tsx:43:11",
						"data-prohibitions": "[editContent]",
						className: "text-2xl font-bold",
						children: MOCK_STATS.interviewsToday
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/dashboard.tsx:44:11",
						"data-prohibitions": "[]",
						className: "text-xs text-muted-foreground",
						children: "3 presenciais, 2 online"
					})]
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/dashboard.tsx:51:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/dashboard.tsx:52:7",
				"data-prohibitions": "[editContent]",
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/dashboard.tsx:53:9",
					"data-prohibitions": "[editContent]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						"data-uid": "src/pages/dashboard.tsx:54:11",
						"data-prohibitions": "[editContent]",
						className: "text-3xl font-bold tracking-tight",
						children: ["Olá, ", getFirstName()]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/dashboard.tsx:55:11",
						"data-prohibitions": "[editContent]",
						className: "text-muted-foreground",
						children: role === "Candidato" ? "Acompanhe o status do seu processo seletivo." : "Visão geral do processo de recrutamento."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					"data-uid": "src/pages/dashboard.tsx:61:9",
					"data-prohibitions": "[editContent]",
					variant: "outline",
					className: "px-3 py-1 bg-primary/5",
					children: ["Perfil: ", role]
				})]
			}),
			role !== "Candidato" && renderStats(),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/dashboard.tsx:68:7",
				"data-prohibitions": "[editContent]",
				className: "grid gap-6",
				children: [
					role === "Candidato" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/dashboard.tsx:70:11",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
							"data-uid": "src/pages/dashboard.tsx:71:13",
							"data-prohibitions": "[]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								"data-uid": "src/pages/dashboard.tsx:72:15",
								"data-prohibitions": "[]",
								children: "Meu Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
								"data-uid": "src/pages/dashboard.tsx:73:15",
								"data-prohibitions": "[]",
								children: "Acompanhe seu progresso atual"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							"data-uid": "src/pages/dashboard.tsx:75:13",
							"data-prohibitions": "[]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/dashboard.tsx:76:15",
								"data-prohibitions": "[]",
								className: "flex items-center gap-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"data-uid": "src/pages/dashboard.tsx:77:17",
									"data-prohibitions": "[]",
									className: "p-3 bg-primary/10 rounded-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										"data-uid": "src/pages/dashboard.tsx:78:19",
										"data-prohibitions": "[editContent]",
										className: "h-8 w-8 text-primary"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/dashboard.tsx:80:17",
									"data-prohibitions": "[]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										"data-uid": "src/pages/dashboard.tsx:81:19",
										"data-prohibitions": "[]",
										className: "text-lg font-semibold",
										children: "Avaliação Comportamental Concluída"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										"data-uid": "src/pages/dashboard.tsx:82:19",
										"data-prohibitions": "[]",
										variant: "outline",
										className: "mt-1 bg-green-50 text-green-700 hover:bg-green-50 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
										children: "Aprovado"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/dashboard.tsx:90:15",
								"data-prohibitions": "[]",
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									"data-uid": "src/pages/dashboard.tsx:91:17",
									"data-prohibitions": "[]",
									className: "font-medium",
									children: "Próximas Etapas:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									"data-uid": "src/pages/dashboard.tsx:92:17",
									"data-prohibitions": "[]",
									className: "space-y-3 relative border-l-2 border-muted ml-3 pl-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										"data-uid": "src/pages/dashboard.tsx:93:19",
										"data-prohibitions": "[]",
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"data-uid": "src/pages/dashboard.tsx:94:21",
												"data-prohibitions": "[editContent]",
												className: "absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												"data-uid": "src/pages/dashboard.tsx:95:21",
												"data-prohibitions": "[]",
												className: "font-medium",
												children: "Entrevista Técnica"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												"data-uid": "src/pages/dashboard.tsx:96:21",
												"data-prohibitions": "[]",
												className: "text-sm text-muted-foreground",
												children: "Agendada para 12/11 às 14:00"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										"data-uid": "src/pages/dashboard.tsx:98:19",
										"data-prohibitions": "[]",
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"data-uid": "src/pages/dashboard.tsx:99:21",
												"data-prohibitions": "[editContent]",
												className: "absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-muted ring-4 ring-background"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												"data-uid": "src/pages/dashboard.tsx:100:21",
												"data-prohibitions": "[]",
												className: "font-medium text-muted-foreground",
												children: "Exame Clínico"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												"data-uid": "src/pages/dashboard.tsx:101:21",
												"data-prohibitions": "[]",
												className: "text-sm text-muted-foreground",
												children: "Aguardando agendamento"
											})
										]
									})]
								})]
							})]
						})]
					}),
					role === "Gerente RH" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/dashboard.tsx:110:11",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
							"data-uid": "src/pages/dashboard.tsx:111:13",
							"data-prohibitions": "[]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								"data-uid": "src/pages/dashboard.tsx:112:15",
								"data-prohibitions": "[]",
								children: "Candidatos Recentes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
								"data-uid": "src/pages/dashboard.tsx:113:15",
								"data-prohibitions": "[]",
								children: "Últimos profissionais cadastrados no sistema"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							"data-uid": "src/pages/dashboard.tsx:115:13",
							"data-prohibitions": "[editContent]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"data-uid": "src/pages/dashboard.tsx:116:15",
								"data-prohibitions": "[editContent]",
								className: "space-y-4",
								children: MOCK_CANDIDATES.slice(0, 3).map((candidate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/dashboard.tsx:118:19",
									"data-prohibitions": "[editContent]",
									className: "flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/dashboard.tsx:122:21",
										"data-prohibitions": "[editContent]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/dashboard.tsx:123:23",
											"data-prohibitions": "[editContent]",
											className: "font-medium",
											children: candidate.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/dashboard.tsx:124:23",
											"data-prohibitions": "[editContent]",
											className: "text-sm text-muted-foreground",
											children: candidate.role
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										"data-uid": "src/pages/dashboard.tsx:126:21",
										"data-prohibitions": "[editContent]",
										variant: candidate.status === "Aprovado" ? "default" : "secondary",
										children: candidate.status
									})]
								}, candidate.id))
							})
						})]
					}),
					role === "Diretor Técnico" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/dashboard.tsx:137:11",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
							"data-uid": "src/pages/dashboard.tsx:138:13",
							"data-prohibitions": "[]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								"data-uid": "src/pages/dashboard.tsx:139:15",
								"data-prohibitions": "[]",
								children: "Eficiência de Contratação"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
								"data-uid": "src/pages/dashboard.tsx:140:15",
								"data-prohibitions": "[]",
								children: "Relação entre candidatos avaliados e aprovados"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							"data-uid": "src/pages/dashboard.tsx:142:13",
							"data-prohibitions": "[]",
							className: "h-[300px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
								"data-uid": "src/pages/dashboard.tsx:143:15",
								"data-prohibitions": "[]",
								config: {
									contratados: {
										label: "Contratados",
										color: "hsl(var(--primary))"
									},
									rejeitados: {
										label: "Rejeitados",
										color: "hsl(var(--destructive))"
									}
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									"data-uid": "src/pages/dashboard.tsx:149:17",
									"data-prohibitions": "[]",
									data: [
										{
											name: "S1",
											contratados: 12,
											rejeitados: 4
										},
										{
											name: "S2",
											contratados: 19,
											rejeitados: 6
										},
										{
											name: "S3",
											contratados: 15,
											rejeitados: 8
										},
										{
											name: "S4",
											contratados: 22,
											rejeitados: 5
										}
									],
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											"data-uid": "src/pages/dashboard.tsx:157:19",
											"data-prohibitions": "[editContent]",
											dataKey: "name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											"data-uid": "src/pages/dashboard.tsx:158:19",
											"data-prohibitions": "[editContent]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											"data-uid": "src/pages/dashboard.tsx:159:19",
											"data-prohibitions": "[editContent]",
											content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
												"data-uid": "src/pages/dashboard.tsx:159:37",
												"data-prohibitions": "[editContent]"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											"data-uid": "src/pages/dashboard.tsx:160:19",
											"data-prohibitions": "[editContent]",
											dataKey: "contratados",
											stackId: "a",
											fill: "var(--color-contratados)",
											radius: [
												0,
												0,
												4,
												4
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											"data-uid": "src/pages/dashboard.tsx:166:19",
											"data-prohibitions": "[editContent]",
											dataKey: "rejeitados",
											stackId: "a",
											fill: "var(--color-rejeitados)",
											radius: [
												4,
												4,
												0,
												0
											]
										})
									]
								})
							})
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Dashboard as default };

//# sourceMappingURL=dashboard-CfKD-Tyb.js.map