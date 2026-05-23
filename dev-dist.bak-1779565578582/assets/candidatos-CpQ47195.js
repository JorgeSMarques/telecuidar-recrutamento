import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { E as createLucideIcon, p as Button } from "./index-9V43Rj6P.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-BfYMebor.js";
import { t as Badge } from "./badge-CuzNtcqW.js";
import { t as MOCK_CANDIDATES } from "./data-CG_A6vUr.js";
var Eye = createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
var Pen = createLucideIcon("pen", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}]]);
//#endregion
//#region src/components/ui/table.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	"data-uid": "src/components/ui/table.tsx:8:5",
	"data-prohibitions": "[editContent]",
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		"data-uid": "src/components/ui/table.tsx:9:7",
		"data-prohibitions": "[editContent]",
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	"data-uid": "src/components/ui/table.tsx:19:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	"data-uid": "src/components/ui/table.tsx:27:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	"data-uid": "src/components/ui/table.tsx:35:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	"data-uid": "src/components/ui/table.tsx:45:5",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	"data-uid": "src/components/ui/table.tsx:61:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	"data-uid": "src/components/ui/table.tsx:76:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	"data-uid": "src/components/ui/table.tsx:88:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
//#endregion
//#region src/pages/candidatos.tsx
function Candidatos() {
	const getBadgeVariant = (status) => {
		switch (status) {
			case "Aprovado": return "default";
			case "Pendente": return "outline";
			case "Reprovado": return "destructive";
			default: return "secondary";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos.tsx:30:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/candidatos.tsx:31:7",
			"data-prohibitions": "[]",
			className: "flex justify-between items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos.tsx:32:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/candidatos.tsx:33:11",
					"data-prohibitions": "[]",
					className: "text-3xl font-bold tracking-tight",
					children: "Candidatos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/candidatos.tsx:34:11",
					"data-prohibitions": "[]",
					className: "text-muted-foreground",
					children: "Gerencie o banco de talentos."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/candidatos.tsx:36:9",
				"data-prohibitions": "[]",
				children: "Novo Candidato"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			"data-uid": "src/pages/candidatos.tsx:39:7",
			"data-prohibitions": "[editContent]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				"data-uid": "src/pages/candidatos.tsx:40:9",
				"data-prohibitions": "[editContent]",
				className: "p-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/candidatos.tsx:42:11",
					"data-prohibitions": "[editContent]",
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
						"data-uid": "src/pages/candidatos.tsx:43:13",
						"data-prohibitions": "[editContent]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
							"data-uid": "src/pages/candidatos.tsx:44:15",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
								"data-uid": "src/pages/candidatos.tsx:45:17",
								"data-prohibitions": "[]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/candidatos.tsx:46:19",
										"data-prohibitions": "[]",
										children: "Nome"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/candidatos.tsx:47:19",
										"data-prohibitions": "[]",
										children: "Função"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/candidatos.tsx:48:19",
										"data-prohibitions": "[]",
										children: "Data Cadastro"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/candidatos.tsx:49:19",
										"data-prohibitions": "[]",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
										"data-uid": "src/pages/candidatos.tsx:50:19",
										"data-prohibitions": "[]",
										className: "text-right",
										children: "Ações"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
							"data-uid": "src/pages/candidatos.tsx:53:15",
							"data-prohibitions": "[editContent]",
							children: MOCK_CANDIDATES.map((candidate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
								"data-uid": "src/pages/candidatos.tsx:55:19",
								"data-prohibitions": "[editContent]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/candidatos.tsx:56:21",
										"data-prohibitions": "[editContent]",
										className: "font-medium",
										children: candidate.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/candidatos.tsx:57:21",
										"data-prohibitions": "[editContent]",
										children: candidate.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/candidatos.tsx:58:21",
										"data-prohibitions": "[editContent]",
										children: new Date(candidate.date).toLocaleDateString("pt-BR")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										"data-uid": "src/pages/candidatos.tsx:59:21",
										"data-prohibitions": "[editContent]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											"data-uid": "src/pages/candidatos.tsx:60:23",
											"data-prohibitions": "[editContent]",
											variant: getBadgeVariant(candidate.status),
											children: candidate.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
										"data-uid": "src/pages/candidatos.tsx:62:21",
										"data-prohibitions": "[]",
										className: "text-right space-x-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											"data-uid": "src/pages/candidatos.tsx:63:23",
											"data-prohibitions": "[]",
											variant: "ghost",
											size: "icon",
											"aria-label": "Ver detalhes",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
												"data-uid": "src/pages/candidatos.tsx:64:25",
												"data-prohibitions": "[editContent]",
												className: "h-4 w-4"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											"data-uid": "src/pages/candidatos.tsx:66:23",
											"data-prohibitions": "[]",
											variant: "ghost",
											size: "icon",
											"aria-label": "Editar",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, {
												"data-uid": "src/pages/candidatos.tsx:67:25",
												"data-prohibitions": "[editContent]",
												className: "h-4 w-4"
											})
										})]
									})
								]
							}, candidate.id))
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/candidatos.tsx:77:11",
					"data-prohibitions": "[editContent]",
					className: "grid grid-cols-1 gap-4 p-4 md:hidden",
					children: MOCK_CANDIDATES.map((candidate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						"data-uid": "src/pages/candidatos.tsx:79:15",
						"data-prohibitions": "[editContent]",
						className: "overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
							"data-uid": "src/pages/candidatos.tsx:80:17",
							"data-prohibitions": "[editContent]",
							className: "bg-muted/50 p-4 pb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos.tsx:81:19",
								"data-prohibitions": "[editContent]",
								className: "flex justify-between items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									"data-uid": "src/pages/candidatos.tsx:82:21",
									"data-prohibitions": "[editContent]",
									className: "text-lg",
									children: candidate.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									"data-uid": "src/pages/candidatos.tsx:83:21",
									"data-prohibitions": "[editContent]",
									variant: getBadgeVariant(candidate.status),
									children: candidate.status
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							"data-uid": "src/pages/candidatos.tsx:86:17",
							"data-prohibitions": "[editContent]",
							className: "p-4 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos.tsx:87:19",
								"data-prohibitions": "[editContent]",
								className: "space-y-1 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/candidatos.tsx:88:21",
									"data-prohibitions": "[editContent]",
									className: "text-sm text-muted-foreground",
									children: candidate.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									"data-uid": "src/pages/candidatos.tsx:89:21",
									"data-prohibitions": "[editContent]",
									className: "text-xs text-muted-foreground",
									children: ["Cadastrado em: ", new Date(candidate.date).toLocaleDateString("pt-BR")]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos.tsx:93:19",
								"data-prohibitions": "[]",
								className: "flex justify-end gap-2 border-t pt-3 mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									"data-uid": "src/pages/candidatos.tsx:94:21",
									"data-prohibitions": "[]",
									variant: "outline",
									size: "sm",
									className: "w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
										"data-uid": "src/pages/candidatos.tsx:95:23",
										"data-prohibitions": "[editContent]",
										className: "mr-2 h-4 w-4"
									}), " Ver"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									"data-uid": "src/pages/candidatos.tsx:97:21",
									"data-prohibitions": "[]",
									variant: "secondary",
									size: "sm",
									className: "w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, {
										"data-uid": "src/pages/candidatos.tsx:98:23",
										"data-prohibitions": "[editContent]",
										className: "mr-2 h-4 w-4"
									}), " Editar"]
								})]
							})]
						})]
					}, candidate.id))
				})]
			})
		})]
	});
}
//#endregion
export { Candidatos as default };

//# sourceMappingURL=candidatos-CpQ47195.js.map