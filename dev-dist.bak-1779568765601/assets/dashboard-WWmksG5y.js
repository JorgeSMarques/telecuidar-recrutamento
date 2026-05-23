import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { a as CircleAlert, i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-_DgVLE_9.js";
import { t as Clock } from "./clock-BG2t3o2U.js";
import { A as createLucideIcon, O as ChevronRight, T as X, f as Input, g as Skeleton, h as Slot, j as cva, p as Button, w as toast } from "./index-R_o4unmS.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-De4u1zBy.js";
import { t as Badge } from "./badge-BeH23Ud9.js";
import { t as Label } from "./label-BMjJmj9M.js";
import { t as Textarea } from "./textarea-CbIGh9mP.js";
import { n as RadioGroup, r as RadioGroupItem, t as Checkbox } from "./checkbox-C60dwqHn.js";
import { t as avaliacaoService } from "./avaliacao-service-DeygJVr-.js";
import { a as useFormContext, c as object, i as useForm, l as string, n as Controller, o as literal, r as FormProvider, s as number, t as a } from "./zod-D6IzupwC.js";
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
var CircleCheckBig = createLucideIcon("circle-check-big", [["path", {
	d: "M21.801 10A10 10 0 1 1 17 3.335",
	key: "yps3ct"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]);
var Ellipsis = createLucideIcon("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]);
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
var Phone = createLucideIcon("phone", [["path", {
	d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
	key: "9njp5v"
}]]);
//#endregion
//#region src/components/ui/breadcrumb.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Breadcrumb = import_react.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
	"data-uid": "src/components/ui/breadcrumb.tsx:13:26",
	"data-prohibitions": "[editContent]",
	ref,
	"aria-label": "breadcrumb",
	...props
}));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
	"data-uid": "src/components/ui/breadcrumb.tsx:18:5",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className),
	...props
}));
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
	"data-uid": "src/components/ui/breadcrumb.tsx:32:5",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("inline-flex items-center gap-1.5", className),
	...props
}));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = import_react.forwardRef(({ asChild, className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "a", {
		"data-uid": "src/components/ui/breadcrumb.tsx:46:5",
		"data-prohibitions": "[editContent]",
		ref,
		className: cn("transition-colors hover:text-foreground", className),
		...props
	});
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	"data-uid": "src/components/ui/breadcrumb.tsx:57:5",
	"data-prohibitions": "[editContent]",
	ref,
	role: "link",
	"aria-disabled": "true",
	"aria-current": "page",
	className: cn("font-normal text-foreground", className),
	...props
}));
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
	"data-uid": "src/components/ui/breadcrumb.tsx:70:3",
	"data-prohibitions": "[editContent]",
	role: "presentation",
	"aria-hidden": "true",
	className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
	...props,
	children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
		"data-uid": "src/components/ui/breadcrumb.tsx:76:18",
		"data-prohibitions": "[editContent]"
	})
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
	"data-uid": "src/components/ui/breadcrumb.tsx:82:3",
	"data-prohibitions": "[editContent]",
	role: "presentation",
	"aria-hidden": "true",
	className: cn("flex h-9 w-9 items-center justify-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {
		"data-uid": "src/components/ui/breadcrumb.tsx:88:5",
		"data-prohibitions": "[editContent]",
		className: "h-4 w-4"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-uid": "src/components/ui/breadcrumb.tsx:89:5",
		"data-prohibitions": "[]",
		className: "sr-only",
		children: "More"
	})]
});
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
//#endregion
//#region src/pages/candidatos/components/timeline.tsx
function Timeline({ steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/pages/candidatos/components/timeline.tsx:11:5",
		"data-prohibitions": "[editContent]",
		className: "pl-7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/candidatos/components/timeline.tsx:12:7",
			"data-prohibitions": "[editContent]",
			className: "flex flex-col relative",
			children: steps.map((step, index) => {
				const isCompleted = step.status === "completed";
				const isActive = step.status === "active";
				const isWaiting = step.status === "waiting";
				const isBlocked = step.status === "blocked";
				const isRejected = step.status === "rejected";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/timeline.tsx:21:13",
					"data-prohibitions": "[editContent]",
					className: cn("relative flex flex-col pb-8 pl-8 border-l-[4px] transition-colors duration-200 animate-timeline-step opacity-0", isActive ? "border-primary bg-primary/5" : isCompleted ? "border-primary/60" : isRejected ? "border-destructive" : "border-border"),
					style: { animationDelay: `${index * 50}ms` },
					"aria-current": isActive ? "step" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/timeline.tsx:36:15",
						"data-prohibitions": "[editContent]",
						className: cn("absolute top-0 flex items-center justify-center rounded-full w-10 h-10 shadow-sm transition-colors duration-200 -left-[1.375rem]", isActive ? "bg-primary text-primary-foreground" : isCompleted ? "bg-primary/60 text-primary-foreground" : isRejected ? "bg-destructive text-destructive-foreground" : "bg-background border-2 border-muted-foreground text-muted-foreground"),
						children: [
							isCompleted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:48:33",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							}),
							isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:49:30",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							}),
							isWaiting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:50:31",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							}),
							isBlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:51:31",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							}),
							isRejected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:52:32",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/timeline.tsx:54:15",
						"data-prohibitions": "[editContent]",
						className: "-mt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:55:17",
								"data-prohibitions": "[editContent]",
								className: cn("font-medium", isActive ? "text-primary font-bold" : ""),
								children: [
									step.id,
									". ",
									step.title
								]
							}),
							step.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:58:31",
								"data-prohibitions": "[editContent]",
								className: "text-xs text-muted-foreground",
								children: step.date
							}),
							step.status === "blocked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:60:19",
								"data-prohibitions": "[]",
								className: "text-xs text-muted-foreground mt-1",
								children: "Depende da etapa anterior"
							})
						]
					})]
				}, step.id);
			})
		})
	});
}
//#endregion
//#region src/pages/candidatos/components/status-summary.tsx
function StatusSummary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/components/status-summary.tsx:6:5",
		"data-prohibitions": "[]",
		className: "space-y-6 animate-slide-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/candidatos/components/status-summary.tsx:7:7",
			"data-prohibitions": "[]",
			className: "rounded-[var(--radius)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				"data-uid": "src/pages/candidatos/components/status-summary.tsx:8:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:9:11",
					"data-prohibitions": "[]",
					className: "text-[1rem] font-semibold",
					children: "Resumo do Processo"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				"data-uid": "src/pages/candidatos/components/status-summary.tsx:11:9",
				"data-prohibitions": "[]",
				className: "space-y-4 text-[0.875rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:12:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:13:13",
						"data-prohibitions": "[]",
						className: "opacity-85 text-muted-foreground font-medium mb-1",
						children: "Início da Etapa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:14:13",
						"data-prohibitions": "[]",
						className: "font-medium text-foreground",
						children: "23 de Maio de 2026"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:16:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:17:13",
						"data-prohibitions": "[]",
						className: "opacity-85 text-muted-foreground font-medium mb-1",
						children: "Prazo Limite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:18:13",
						"data-prohibitions": "[]",
						className: "font-medium text-destructive",
						children: "30 de Maio de 2026"
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/candidatos/components/status-summary.tsx:23:7",
			"data-prohibitions": "[]",
			className: "rounded-[var(--radius)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				"data-uid": "src/pages/candidatos/components/status-summary.tsx:24:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:25:11",
					"data-prohibitions": "[]",
					className: "text-[1rem] font-semibold",
					children: "Suporte ao Candidato"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				"data-uid": "src/pages/candidatos/components/status-summary.tsx:27:9",
				"data-prohibitions": "[]",
				className: "space-y-4 text-[0.875rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:28:11",
					"data-prohibitions": "[]",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:29:13",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 text-muted-foreground"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:30:13",
						"data-prohibitions": "[]",
						href: "mailto:suporte@telecuidar.com.br",
						className: "hover:underline text-primary",
						children: "suporte@telecuidar.com.br"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:34:11",
					"data-prohibitions": "[]",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:35:13",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 text-muted-foreground"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:36:13",
						"data-prohibitions": "[]",
						className: "text-foreground",
						children: "0800 123 4567"
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/pages/candidatos/components/interesse-form.tsx
var schema = object({
	confirmado: literal(true, { errorMap: () => ({ message: "Você deve confirmar o interesse" }) }),
	telefone: string().min(14, "Telefone inválido"),
	mensagem: string().max(300, "Máximo 300 caracteres").optional()
});
function InteresseForm({ onSuccess }) {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { register, handleSubmit, formState: { errors, isValid }, setValue, watch, control } = useForm({
		resolver: a(schema),
		defaultValues: {
			confirmado: false,
			telefone: "",
			mensagem: ""
		},
		mode: "onChange"
	});
	const handlePhone = (e) => {
		let v = e.target.value.replace(/\D/g, "");
		if (v.length > 11) v = v.slice(0, 11);
		v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
		v = v.replace(/(\d)(\d{4})$/, "$1-$2");
		setValue("telefone", v, { shouldValidate: true });
	};
	const onSubmit = async (data) => {
		setLoading(true);
		try {
			await avaliacaoService.confirmarInteresse(data);
			toast.success("Interesse confirmado! Você receberá o formulário de avaliação em breve.");
			onSuccess();
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/pages/candidatos/components/interesse-form.tsx:57:5",
		"data-prohibitions": "[editContent]",
		className: "animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			"data-uid": "src/pages/candidatos/components/interesse-form.tsx:58:7",
			"data-prohibitions": "[]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/pages/candidatos/components/interesse-form.tsx:59:9",
				"data-prohibitions": "[]",
				className: "text-xl",
				children: "Manifestação de Interesse"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/pages/candidatos/components/interesse-form.tsx:61:7",
			"data-prohibitions": "[editContent]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				"data-uid": "src/pages/candidatos/components/interesse-form.tsx:62:9",
				"data-prohibitions": "[editContent]",
				onSubmit: handleSubmit(onSubmit),
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/interesse-form.tsx:63:11",
						"data-prohibitions": "[editContent]",
						className: "flex items-start space-x-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
							"data-uid": "src/pages/candidatos/components/interesse-form.tsx:64:13",
							"data-prohibitions": "[editContent]",
							control,
							name: "confirmado",
							render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:68:17",
								"data-prohibitions": "[editContent]",
								id: "confirmado",
								checked: field.value,
								onCheckedChange: field.onChange,
								className: "mt-1",
								"aria-invalid": !!errors.confirmado
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/candidatos/components/interesse-form.tsx:77:13",
							"data-prohibitions": "[editContent]",
							className: "space-y-1 leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:78:15",
								"data-prohibitions": "[]",
								htmlFor: "confirmado",
								className: "font-medium",
								children: [
									"Confirmo meu interesse em participar do processo de seleção da Telecuidar",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"data-uid": "src/pages/candidatos/components/interesse-form.tsx:80:17",
										"data-prohibitions": "[]",
										className: "text-destructive",
										children: "*"
									})
								]
							}), errors.confirmado && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:83:17",
								"data-prohibitions": "[editContent]",
								className: "text-sm text-destructive mt-1",
								children: errors.confirmado.message
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/interesse-form.tsx:88:11",
						"data-prohibitions": "[editContent]",
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:89:13",
								"data-prohibitions": "[]",
								htmlFor: "telefone",
								children: ["Telefone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"data-uid": "src/pages/candidatos/components/interesse-form.tsx:90:24",
									"data-prohibitions": "[]",
									className: "text-destructive",
									children: "*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:92:13",
								"data-prohibitions": "[editContent]",
								id: "telefone",
								placeholder: "(00) 00000-0000",
								value: watch("telefone"),
								onChange: handlePhone,
								"aria-invalid": !!errors.telefone
							}),
							errors.telefone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:100:15",
								"data-prohibitions": "[editContent]",
								className: "text-sm text-destructive",
								children: errors.telefone.message
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/interesse-form.tsx:104:11",
						"data-prohibitions": "[editContent]",
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:105:13",
								"data-prohibitions": "[]",
								htmlFor: "mensagem",
								children: "Mensagem Adicional (opcional)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:106:13",
								"data-prohibitions": "[editContent]",
								id: "mensagem",
								...register("mensagem"),
								placeholder: "Alguma observação importante?",
								maxLength: 300
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:112:13",
								"data-prohibitions": "[editContent]",
								className: "text-xs text-muted-foreground text-right",
								children: [(watch("mensagem") || "").length, "/300"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/candidatos/components/interesse-form.tsx:117:11",
						"data-prohibitions": "[editContent]",
						type: "submit",
						disabled: !isValid || loading,
						className: "w-full sm:w-auto",
						children: loading ? "Confirmando..." : "Confirmar Interesse"
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/pages/candidatos/components/avaliacao-form/schema.ts
var avaliacaoSchema = object({
	valores: object({
		humanizacao: object({
			valor: number({ required_error: "Obrigatório" }).min(1, "Este campo é obrigatório.").default(0),
			exp: string().max(200, "Máximo de 200 caracteres").optional()
		}),
		racionalidade: object({
			valor: number({ required_error: "Obrigatório" }).min(1, "Este campo é obrigatório.").default(0),
			exp: string().max(200, "Máximo de 200 caracteres").optional()
		}),
		economicidade: object({
			valor: number({ required_error: "Obrigatório" }).min(1, "Este campo é obrigatório.").default(0),
			exp: string().max(200, "Máximo de 200 caracteres").optional()
		}),
		competencia: object({
			valor: number({ required_error: "Obrigatório" }).min(1, "Este campo é obrigatório.").default(0),
			exp: string().max(200, "Máximo de 200 caracteres").optional()
		}),
		cidadania: object({
			valor: number({ required_error: "Obrigatório" }).min(1, "Este campo é obrigatório.").default(0),
			exp: string().max(200, "Máximo de 200 caracteres").optional()
		})
	}),
	competencia: object({
		experiencia: string().min(10, "Deve ter no mínimo 10 caracteres.").max(500, "Máximo de 500 caracteres permitido.").default(""),
		experienciaSus: string().min(10, "Deve ter no mínimo 10 caracteres.").max(500, "Máximo de 500 caracteres permitido.").default(""),
		formacao: string().min(10, "Deve ter no mínimo 10 caracteres.").max(500, "Máximo de 500 caracteres permitido.").default(""),
		telemedicina: string().min(10, "Deve ter no mínimo 10 caracteres.").max(500, "Máximo de 500 caracteres permitido.").default("")
	})
});
//#endregion
//#region src/pages/candidatos/components/avaliacao-form/valores-tab.tsx
var VALORES_FIELDS = [
	{
		id: "humanizacao",
		label: "Humanização"
	},
	{
		id: "racionalidade",
		label: "Racionalidade"
	},
	{
		id: "economicidade",
		label: "Economicidade"
	},
	{
		id: "competencia",
		label: "Competência Técnica"
	},
	{
		id: "cidadania",
		label: "Cidadania"
	}
];
function ValoresTab() {
	const { register, control, formState: { errors } } = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:23:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-8 mt-4",
		children: VALORES_FIELDS.map((vField) => {
			const error = errors.valores?.[vField.id]?.valor;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:27:11",
				"data-prohibitions": "[editContent]",
				className: "border p-4 rounded-[var(--radius)] space-y-4 bg-card text-card-foreground",
				"aria-invalid": !!error,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:32:13",
						"data-prohibitions": "[editContent]",
						className: "font-semibold text-[1rem] px-2",
						children: [
							vField.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:33:30",
								"data-prohibitions": "[]",
								className: "text-destructive",
								children: "*"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:35:13",
						"data-prohibitions": "[editContent]",
						control,
						name: `valores.${vField.id}.valor`,
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:39:17",
							"data-prohibitions": "[editContent]",
							onValueChange: (v) => field.onChange(Number(v)),
							value: field.value ? String(field.value) : void 0,
							className: "flex gap-6 flex-wrap",
							"aria-required": "true",
							"aria-describedby": error ? `error-${vField.id}` : void 0,
							children: [
								1,
								2,
								3,
								4,
								5
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:47:21",
								"data-prohibitions": "[editContent]",
								className: "flex items-center space-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:48:23",
									"data-prohibitions": "[editContent]",
									value: String(n),
									id: `${vField.id}-${n}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:49:23",
									"data-prohibitions": "[editContent]",
									htmlFor: `${vField.id}-${n}`,
									className: "cursor-pointer mb-0",
									children: n
								})]
							}, n))
						})
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:58:15",
						"data-prohibitions": "[editContent]",
						id: `error-${vField.id}`,
						className: "text-[0.75rem] text-destructive block mt-1",
						children: error.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:65:13",
						"data-prohibitions": "[]",
						className: "space-y-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:66:15",
							"data-prohibitions": "[]",
							htmlFor: `exp-${vField.id}`,
							children: "Explique sua resposta (opcional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:67:15",
							"data-prohibitions": "[editContent]",
							id: `exp-${vField.id}`,
							...register(`valores.${vField.id}.exp`),
							maxLength: 200
						})]
					})
				]
			}, vField.id);
		})
	});
}
//#endregion
//#region src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx
var COMPETENCIA_FIELDS = [
	{
		id: "experiencia",
		label: "Experiência Profissional"
	},
	{
		id: "experienciaSus",
		label: "Experiência no SUS"
	},
	{
		id: "formacao",
		label: "Formação Acadêmica"
	},
	{
		id: "telemedicina",
		label: "Experiência com Telemedicina"
	}
];
function CompetenciaTab() {
	const { register, watch, formState: { errors } } = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:21:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 mt-4",
		children: COMPETENCIA_FIELDS.map((cField) => {
			const val = watch(`competencia.${cField.id}`) || "";
			const error = errors.competencia?.[cField.id];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:27:11",
				"data-prohibitions": "[editContent]",
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:28:13",
						"data-prohibitions": "[editContent]",
						htmlFor: cField.id,
						children: [
							cField.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:29:30",
								"data-prohibitions": "[]",
								className: "text-destructive",
								children: "*"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:31:13",
						"data-prohibitions": "[editContent]",
						id: cField.id,
						...register(`competencia.${cField.id}`),
						maxLength: 500,
						"aria-invalid": !!error,
						"aria-required": "true",
						"aria-describedby": error ? `error-${cField.id}` : void 0,
						className: "min-h-24"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:40:13",
						"data-prohibitions": "[editContent]",
						className: "flex justify-between text-[0.75rem] mt-1",
						children: [error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:42:17",
							"data-prohibitions": "[editContent]",
							id: `error-${cField.id}`,
							className: "text-destructive",
							children: error.message
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:46:17",
							"data-prohibitions": "[editContent]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:48:15",
							"data-prohibitions": "[editContent]",
							className: "opacity-60 text-right w-full",
							children: [val.length, "/500"]
						})]
					})
				]
			}, cField.id);
		})
	});
}
//#endregion
//#region src/components/ui/alert.tsx
var alertVariants = cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var Alert = import_react.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	"data-uid": "src/components/ui/alert.tsx:27:3",
	"data-prohibitions": "[editContent]",
	ref,
	role: "alert",
	className: cn(alertVariants({ variant }), className),
	...props
}));
Alert.displayName = "Alert";
var AlertTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
	"data-uid": "src/components/ui/alert.tsx:33:5",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("mb-1 font-medium leading-none tracking-tight", className),
	...props
}));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	"data-uid": "src/components/ui/alert.tsx:46:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("text-sm [&_p]:leading-relaxed", className),
	...props
}));
AlertDescription.displayName = "AlertDescription";
//#endregion
//#region src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx
function ResumoTab({ onEdit, onSubmit, loading }) {
	const { getValues, formState: { isValid, isSubmitted } } = useFormContext();
	const values = getValues();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:23:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 mt-4 text-sm",
		children: [
			!isValid && isSubmitted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:25:9",
				"data-prohibitions": "[]",
				variant: "destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:26:11",
					"data-prohibitions": "[editContent]",
					className: "h-4 w-4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:27:11",
					"data-prohibitions": "[]",
					children: "Existem erros no formulário. Por favor, volte e corrija antes de enviar."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:33:7",
				"data-prohibitions": "[editContent]",
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:34:9",
					"data-prohibitions": "[]",
					className: "font-semibold text-lg",
					children: "Valores da Empresa"
				}), VALORES_FIELDS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:36:11",
					"data-prohibitions": "[editContent]",
					className: "grid grid-cols-1 md:grid-cols-2 border-b border-border pb-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:40:13",
						"data-prohibitions": "[editContent]",
						className: "font-medium",
						children: f.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:41:13",
						"data-prohibitions": "[editContent]",
						className: "space-y-1 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:42:15",
							"data-prohibitions": "[editContent]",
							children: ["Nota: ", values.valores?.[f.id]?.valor || "Não respondido"]
						}), values.valores?.[f.id]?.exp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:44:17",
							"data-prohibitions": "[editContent]",
							className: "italic",
							children: [
								"\"",
								values.valores[f.id].exp,
								"\""
							]
						})]
					})]
				}, f.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:51:7",
				"data-prohibitions": "[editContent]",
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:52:9",
					"data-prohibitions": "[]",
					className: "font-semibold text-lg",
					children: "Competência Técnica"
				}), COMPETENCIA_FIELDS.map((f) => {
					const text = values.competencia?.[f.id] || "";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:56:13",
						"data-prohibitions": "[editContent]",
						className: "border-b border-border pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:57:15",
							"data-prohibitions": "[editContent]",
							className: "font-medium block mb-1",
							children: f.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:58:15",
							"data-prohibitions": "[editContent]",
							className: "text-muted-foreground",
							children: text ? text.slice(0, 100) + (text.length > 100 ? "..." : "") : "Não respondido"
						})]
					}, f.id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:66:7",
				"data-prohibitions": "[editContent]",
				className: "flex flex-col-reverse sm:flex-row justify-end gap-4 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:67:9",
					"data-prohibitions": "[]",
					variant: "outline",
					type: "button",
					onClick: onEdit,
					disabled: loading,
					children: "Voltar e Editar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/resumo-tab.tsx:70:9",
					"data-prohibitions": "[editContent]",
					type: "button",
					onClick: onSubmit,
					disabled: loading,
					children: loading ? "Enviando..." : "Enviar Formulário"
				})]
			})
		]
	});
}
//#endregion
//#region src/pages/candidatos/components/avaliacao-form/index.tsx
function DeadlineBadge({ days }) {
	let style = "";
	if (days < 2) style = "bg-destructive text-destructive-foreground hover:bg-destructive/80";
	else if (days < 5) style = "bg-ring/70 text-primary-foreground hover:bg-ring/80";
	else style = "bg-primary/20 text-primary hover:bg-primary/30";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
		"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:23:10",
		"data-prohibitions": "[editContent]",
		className: style,
		children: [days, " dias para responder"]
	});
}
function AvaliacaoForm({ onSuccess }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("valores");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const methods = useForm({
		resolver: a(avaliacaoSchema),
		mode: "onTouched"
	});
	const daysRemaining = 4;
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("avaliacao-draft");
		if (saved) toast("Você tem um formulário em rascunho. Deseja continuar?", {
			action: {
				label: "Continuar",
				onClick: () => methods.reset(JSON.parse(saved))
			},
			cancel: {
				label: "Descartar",
				onClick: () => localStorage.removeItem("avaliacao-draft")
			},
			duration: Infinity
		});
	}, [methods.reset]);
	(0, import_react.useEffect)(() => {
		const subscription = methods.watch((value) => {
			const handler = setTimeout(() => localStorage.setItem("avaliacao-draft", JSON.stringify(value)), 500);
			return () => clearTimeout(handler);
		});
		return () => subscription.unsubscribe();
	}, [methods.watch]);
	const onSubmit = async () => {
		if (!await methods.trigger()) {
			toast.error("Preencha todos os campos obrigatórios.");
			return;
		}
		setLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 1e3));
			localStorage.removeItem("avaliacao-draft");
			toast.success("Avaliação enviada com sucesso!");
			onSuccess();
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:78:5",
		"data-prohibitions": "[]",
		className: "animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:79:7",
			"data-prohibitions": "[]",
			className: "flex flex-row items-center justify-between space-y-0 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:80:9",
				"data-prohibitions": "[]",
				className: "text-[2rem] font-bold",
				children: "Formulário de Avaliação"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:81:9",
				"data-prohibitions": "[]",
				className: "hidden sm:inline-flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeadlineBadge, {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:82:11",
					"data-prohibitions": "[editContent]",
					days: daysRemaining
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:85:7",
			"data-prohibitions": "[]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormProvider, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:86:9",
				"data-prohibitions": "[]",
				...methods,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:87:11",
					"data-prohibitions": "[]",
					value: activeTab,
					onValueChange: setActiveTab,
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:88:13",
							"data-prohibitions": "[]",
							className: "flex w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:89:15",
									"data-prohibitions": "[]",
									value: "valores",
									className: "flex-1",
									children: "Valores"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:92:15",
									"data-prohibitions": "[]",
									value: "competencia",
									className: "flex-1",
									children: "Competência"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:95:15",
									"data-prohibitions": "[]",
									value: "resumo",
									className: "flex-1",
									children: "Resumo"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:99:13",
							"data-prohibitions": "[]",
							value: "valores",
							className: "focus-visible:outline-none focus-visible:ring-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValoresTab, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:103:15",
								"data-prohibitions": "[editContent]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:105:13",
							"data-prohibitions": "[]",
							value: "competencia",
							className: "focus-visible:outline-none focus-visible:ring-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompetenciaTab, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:109:15",
								"data-prohibitions": "[editContent]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:111:13",
							"data-prohibitions": "[]",
							value: "resumo",
							className: "focus-visible:outline-none focus-visible:ring-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumoTab, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:112:15",
								"data-prohibitions": "[editContent]",
								onEdit: () => setActiveTab("valores"),
								onSubmit,
								loading
							})
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region src/pages/candidatos/dashboard.tsx
function CandidatoDashboard() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [currentStage, setCurrentStage] = (0, import_react.useState)(2);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setLoading(false), 2e3);
		return () => clearTimeout(timer);
	}, []);
	const steps = [
		{
			id: 1,
			title: "Captação",
			status: "completed",
			date: "20/05/2026"
		},
		{
			id: 2,
			title: "Manifestação de Interesse",
			status: currentStage === 2 ? "active" : currentStage > 2 ? "completed" : "blocked",
			date: currentStage > 2 ? "21/05/2026" : void 0
		},
		{
			id: 3,
			title: "Formulário de Avaliação",
			status: currentStage === 3 ? "active" : currentStage > 3 ? "completed" : "blocked"
		},
		{
			id: 4,
			title: "Busca Web",
			status: currentStage === 4 ? "active" : currentStage > 4 ? "completed" : "waiting"
		},
		{
			id: 5,
			title: "Avaliação RH/Diretor",
			status: "waiting"
		},
		{
			id: 6,
			title: "Aprovação e Agendamento",
			status: "waiting"
		},
		{
			id: 7,
			title: "Rejeição",
			status: "waiting"
		},
		{
			id: 8,
			title: "Entrevista",
			status: "waiting"
		},
		{
			id: 9,
			title: "Aprovação Pós-Entrevista",
			status: "waiting"
		}
	];
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/dashboard.tsx:56:7",
		"data-prohibitions": "[]",
		className: "flex-1 p-4 md:p-6 lg:p-8 space-y-8 h-full overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
			"data-uid": "src/pages/candidatos/dashboard.tsx:57:9",
			"data-prohibitions": "[editContent]",
			className: "h-8 w-64"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/candidatos/dashboard.tsx:58:9",
			"data-prohibitions": "[]",
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/candidatos/dashboard.tsx:59:11",
					"data-prohibitions": "[]",
					className: "col-span-1 md:col-span-1 lg:col-span-3 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/candidatos/dashboard.tsx:60:13",
						"data-prohibitions": "[editContent]",
						className: "h-[400px] w-full"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/candidatos/dashboard.tsx:62:11",
					"data-prohibitions": "[]",
					className: "col-span-1 md:col-span-1 lg:col-span-5 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/candidatos/dashboard.tsx:63:13",
						"data-prohibitions": "[editContent]",
						className: "h-[400px] w-full"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/dashboard.tsx:65:11",
					"data-prohibitions": "[]",
					className: "hidden lg:block lg:col-span-2 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/candidatos/dashboard.tsx:66:13",
						"data-prohibitions": "[editContent]",
						className: "h-32 w-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/candidatos/dashboard.tsx:67:13",
						"data-prohibitions": "[editContent]",
						className: "h-32 w-full"
					})]
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/dashboard.tsx:75:5",
		"data-prohibitions": "[editContent]",
		className: "flex-1 flex flex-col h-full bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/candidatos/dashboard.tsx:76:7",
			"data-prohibitions": "[]",
			className: "border-b bg-background/50 backdrop-blur-sm sticky top-0 z-20 px-4 md:px-6 lg:px-8 py-4 mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, {
				"data-uid": "src/pages/candidatos/dashboard.tsx:77:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BreadcrumbList, {
					"data-uid": "src/pages/candidatos/dashboard.tsx:78:11",
					"data-prohibitions": "[]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:79:13",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:80:15",
								"data-prohibitions": "[]",
								href: "/",
								children: "Início"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:82:13",
							"data-prohibitions": "[editContent]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:83:13",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:84:15",
								"data-prohibitions": "[]",
								children: "Meu Processo"
							})
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/candidatos/dashboard.tsx:88:9",
				"data-prohibitions": "[]",
				className: "text-[2rem] font-bold tracking-tight mt-2",
				children: "Meu Processo de Seleção"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/candidatos/dashboard.tsx:91:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 px-4 md:px-6 lg:px-8 overflow-auto pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/dashboard.tsx:92:9",
				"data-prohibitions": "[editContent]",
				className: "max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/candidatos/dashboard.tsx:93:11",
						"data-prohibitions": "[]",
						className: "col-span-1 md:col-span-1 lg:col-span-3 flex flex-col gap-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"data-uid": "src/pages/candidatos/dashboard.tsx:94:13",
							"data-prohibitions": "[]",
							"aria-labelledby": "timeline-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/candidatos/dashboard.tsx:95:15",
								"data-prohibitions": "[]",
								id: "timeline-heading",
								className: "sr-only",
								children: "Linha do Tempo do Processo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:98:15",
								"data-prohibitions": "[editContent]",
								steps
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/dashboard.tsx:102:11",
						"data-prohibitions": "[editContent]",
						className: "col-span-1 md:col-span-1 lg:col-span-5 flex flex-col gap-8",
						children: [
							currentStage === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteresseForm, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:103:36",
								"data-prohibitions": "[editContent]",
								onSuccess: () => setCurrentStage(3)
							}),
							currentStage === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvaliacaoForm, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:104:36",
								"data-prohibitions": "[editContent]",
								onSuccess: () => setCurrentStage(4)
							}),
							currentStage >= 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos/dashboard.tsx:106:15",
								"data-prohibitions": "[]",
								className: "text-center p-8 border rounded-[var(--radius)] bg-card shadow-sm animate-fade-in-up",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:107:17",
									"data-prohibitions": "[]",
									className: "font-semibold text-[1rem] mb-2",
									children: "Etapa Concluída"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:108:17",
									"data-prohibitions": "[]",
									className: "text-muted-foreground text-[0.875rem]",
									children: "Sua participação está sendo avaliada. Acompanhe a linha do tempo para novidades."
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						"data-uid": "src/pages/candidatos/dashboard.tsx:115:11",
						"data-prohibitions": "[]",
						className: "hidden lg:block lg:col-span-2 sticky top-[8rem] max-h-[calc(100vh-10rem)] overflow-y-auto self-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusSummary, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:116:13",
							"data-prohibitions": "[editContent]"
						})
					})
				]
			})
		})]
	});
}
//#endregion
export { CandidatoDashboard as default };

//# sourceMappingURL=dashboard-WWmksG5y.js.map