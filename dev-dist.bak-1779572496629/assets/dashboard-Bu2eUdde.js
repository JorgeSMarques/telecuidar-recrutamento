import { r as __toESM } from "./rolldown-runtime-B_qr_iJn.js";
import { i as require_react, r as require_jsx_runtime, t as cn } from "./utils-Js-2z68f.js";
import { t as Clock } from "./clock-C9JyZCYv.js";
import { a as UnsavedChangesModal, c as TriangleAlert, i as Textarea, l as LoaderCircle, n as ConditionalField, o as useUnsavedChanges, r as DynamicFormField, s as useDraftForm, t as useSubmit } from "./use-submit-DxVCjjtf.js";
import { B as cva, C as Skeleton, I as CircleAlert, L as ChevronRight, M as X, S as Slot, b as Button, j as toast, y as Input, z as createLucideIcon } from "./index-BUVALkT9.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-zgyGx9gf.js";
import { t as Badge } from "./badge-T3nlyRol.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-mTM5_IEy.js";
import { t as Label } from "./label-DxKbICu2.js";
import { n as RadioGroup, r as RadioGroupItem, t as Checkbox } from "./checkbox-DUq13iZ9.js";
import { t as avaliacaoService } from "./avaliacao-service-D5SLPM0f.js";
import { a as object, c as parseAsync, i as number, l as $ZodError, n as boolean, o as string, s as parse, t as useFormValidation } from "./use-form-validation-cq6CtWaX.js";
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
					className: cn("relative flex flex-col pb-8 pl-8 border-l-[4px] transition-colors duration-300 animate-timeline-step opacity-0", isActive ? "border-primary bg-primary/5" : isCompleted ? "border-primary/60" : isRejected ? "border-destructive" : "border-border"),
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
	confirmado: boolean(),
	telefone: string().optional(),
	mensagem: string().max(300, "Máximo 300 caracteres").optional()
}).refine((d) => !d.confirmado || d.telefone && /^\(\d{2}\) \d{4,5}-\d{4}$/.test(d.telefone), {
	message: "Telefone deve estar no formato (XX) XXXXX-XXXX",
	path: ["telefone"]
});
function InteresseForm({ onSuccess }) {
	const defaultValues = {
		confirmado: false,
		telefone: "",
		mensagem: ""
	};
	const { values, errors, touched, isValid, handleChange, handleBlur, handleSubmit, isSubmitting, setValues } = useFormValidation(defaultValues, schema);
	const isDirty = JSON.stringify(values) !== JSON.stringify(defaultValues);
	const { isHydrated, clearDraft, handleFocus } = useDraftForm({
		key: "manifestacao-draft",
		currentValues: values,
		setValues
	});
	const blocker = useUnsavedChanges(isDirty);
	const { execute: submitForm, isLoading: isSubmittingAPI } = useSubmit((data) => avaliacaoService.confirmarInteresse(data), {
		successMessage: "Interesse confirmado! Você receberá o formulário de avaliação em breve.",
		onSuccess: () => {
			clearDraft();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			onSuccess();
		}
	});
	const handlePhone = (val) => {
		let v = val.replace(/\D/g, "");
		if (v.length > 11) v = v.slice(0, 11);
		if (v.length > 10) v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
		else if (v.length > 6) v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
		else if (v.length > 2) v = v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
		handleChange("telefone", v);
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!values.confirmado) {
			toast.error("Você deve confirmar o interesse para prosseguir.", { duration: 6e3 });
			return;
		}
		if (!isValid) {
			toast.error("Corrija os erros abaixo antes de enviar", { duration: 6e3 });
			const allTouched = Object.keys(values).reduce((acc, key) => ({
				...acc,
				[key]: true
			}), {});
			setTouched(allTouched);
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
		submitForm(values);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/pages/candidatos/components/interesse-form.tsx:103:5",
		"data-prohibitions": "[editContent]",
		className: "animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			"data-uid": "src/pages/candidatos/components/interesse-form.tsx:104:7",
			"data-prohibitions": "[]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/pages/candidatos/components/interesse-form.tsx:105:9",
				"data-prohibitions": "[]",
				className: "text-xl",
				children: "Manifestação de Interesse"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			"data-uid": "src/pages/candidatos/components/interesse-form.tsx:107:7",
			"data-prohibitions": "[editContent]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				"data-uid": "src/pages/candidatos/components/interesse-form.tsx:108:9",
				"data-prohibitions": "[editContent]",
				onSubmit: handleFormSubmit,
				onFocus: handleFocus,
				className: "space-y-6",
				noValidate: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					"data-uid": "src/pages/candidatos/components/interesse-form.tsx:109:11",
					"data-prohibitions": "[editContent]",
					disabled: isSubmittingAPI,
					className: "border-0 p-0 m-0 min-w-0 w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/candidatos/components/interesse-form.tsx:110:13",
							"data-prohibitions": "[]",
							className: "flex items-start space-x-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:111:15",
								"data-prohibitions": "[editContent]",
								id: "confirmado",
								checked: values.confirmado,
								onCheckedChange: (c) => setValues((p) => ({
									...p,
									confirmado: c === true
								})),
								className: "mt-1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:117:15",
								"data-prohibitions": "[]",
								className: "space-y-1 leading-none flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									"data-uid": "src/pages/candidatos/components/interesse-form.tsx:118:17",
									"data-prohibitions": "[]",
									htmlFor: "confirmado",
									className: "font-medium text-base cursor-pointer",
									children: [
										"Confirmo meu interesse em participar do processo de seleção da Telecuidar",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"data-uid": "src/pages/candidatos/components/interesse-form.tsx:120:19",
											"data-prohibitions": "[]",
											className: "text-destructive",
											children: "*"
										})
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionalField, {
							"data-uid": "src/pages/candidatos/components/interesse-form.tsx:125:13",
							"data-prohibitions": "[]",
							show: values.confirmado,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:126:15",
								"data-prohibitions": "[]",
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynamicFormField, {
									"data-uid": "src/pages/candidatos/components/interesse-form.tsx:127:17",
									"data-prohibitions": "[]",
									id: "telefone",
									label: "Telefone",
									required: true,
									touched: touched.telefone,
									error: errors.telefone,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/candidatos/components/interesse-form.tsx:134:19",
										"data-prohibitions": "[editContent]",
										name: "telefone",
										placeholder: "(XX) XXXXX-XXXX",
										value: values.telefone || "",
										onChange: (e) => handlePhone(e.target.value),
										onBlur: () => handleBlur("telefone")
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DynamicFormField, {
									"data-uid": "src/pages/candidatos/components/interesse-form.tsx:143:17",
									"data-prohibitions": "[]",
									id: "mensagem",
									label: "Mensagem Adicional (opcional)",
									touched: touched.mensagem,
									error: errors.mensagem,
									currentLength: values.mensagem?.length || 0,
									maxLength: 300,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										"data-uid": "src/pages/candidatos/components/interesse-form.tsx:151:19",
										"data-prohibitions": "[editContent]",
										name: "mensagem",
										placeholder: "Alguma observação importante?",
										value: values.mensagem || "",
										onChange: (e) => handleChange("mensagem", e.target.value),
										onBlur: () => handleBlur("mensagem")
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							"data-uid": "src/pages/candidatos/components/interesse-form.tsx:162:13",
							"data-prohibitions": "[editContent]",
							type: "submit",
							disabled: isSubmittingAPI,
							className: cn("w-full sm:w-auto transition-colors mt-6", isValid && values.confirmado && !isSubmittingAPI ? "bg-green-600 hover:bg-green-700 text-white" : "", isSubmittingAPI && "cursor-not-allowed opacity-50"),
							children: [isSubmittingAPI && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								"data-uid": "src/pages/candidatos/components/interesse-form.tsx:173:35",
								"data-prohibitions": "[editContent]",
								className: "w-4 h-4 mr-2 animate-spin"
							}), isSubmittingAPI ? "Enviando..." : "Confirmar Interesse"]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnsavedChangesModal, {
				"data-uid": "src/pages/candidatos/components/interesse-form.tsx:178:9",
				"data-prohibitions": "[editContent]",
				blocker,
				onDiscard: () => {
					clearDraft();
					setValues(defaultValues);
				}
			})]
		})]
	});
}
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/react-hook-form@7.75.0_react@19.2.5/node_modules/react-hook-form/dist/index.esm.mjs
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
var isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var isNameInFieldArray = (names, name) => name.split(".").some((part, index, arr) => !isNaN(Number(part)) && names.has(arr.slice(0, index).join(".")));
var isPlainObject = (tempObject) => {
	const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
	return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
	if (data instanceof Date) return new Date(data);
	const isFileListInstance = typeof FileList !== "undefined" && data instanceof FileList;
	if (isWeb && (data instanceof Blob || isFileListInstance)) return data;
	const isArray = Array.isArray(data);
	if (!isArray && !(isObject(data) && isPlainObject(data))) return data;
	const copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
	for (const key in data) if (Object.prototype.hasOwnProperty.call(data, key)) copy[key] = cloneObject(data[key]);
	return copy;
}
var isKey = (value) => /^\w*$/.test(value);
var isUndefined = (val) => val === void 0;
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var get = (object, path, defaultValue) => {
	if (!path || !isObject(object)) return defaultValue;
	const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result, key) => {
		return isNullOrUndefined(result) ? void 0 : result[key];
	}, object);
	return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
var isFunction = (value) => typeof value === "function";
var set = (object, path, value) => {
	let index = -1;
	const tempPath = isKey(path) ? [path] : stringToPath(path);
	const length = tempPath.length;
	const lastIndex = length - 1;
	while (++index < length) {
		const key = tempPath[index];
		let newValue = value;
		if (index !== lastIndex) {
			const objValue = object[key];
			newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
		}
		if (key === "__proto__" || key === "constructor" || key === "prototype") return;
		object[key] = newValue;
		object = object[key];
	}
};
var EVENTS = {
	BLUR: "blur",
	FOCUS_OUT: "focusout",
	CHANGE: "change",
	SUBMIT: "submit",
	TRIGGER: "trigger",
	VALID: "valid"
};
var VALIDATION_MODE = {
	onBlur: "onBlur",
	onChange: "onChange",
	onSubmit: "onSubmit",
	onTouched: "onTouched",
	all: "all"
};
var INPUT_VALIDATION_RULES = {
	max: "max",
	min: "min",
	maxLength: "maxLength",
	minLength: "minLength",
	pattern: "pattern",
	required: "required",
	validate: "validate"
};
var FORM_ERROR_TYPE = "form";
var ROOT_ERROR_TYPE = "root";
/**
* Separate context for `control` to prevent unnecessary rerenders.
* Internal hooks that only need control use this instead of full form context.
*/
var HookFormControlContext = import_react.createContext(null);
HookFormControlContext.displayName = "HookFormControlContext";
/**
* @internal Internal hook to access only control from context.
*/
var useFormControlContext = () => import_react.useContext(HookFormControlContext);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
	const result = {};
	for (const key in formState) Object.defineProperty(result, key, { get: () => {
		const _key = key;
		if (control._proxyFormState[_key] !== VALIDATION_MODE.all) control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
		localProxyFormState && (localProxyFormState[_key] = true);
		return formState[_key];
	} });
	return result;
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
/**
* This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
*
* @remarks
* [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
*
* @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
*
* @example
* ```tsx
* function App() {
*   const { register, handleSubmit, control } = useForm({
*     defaultValues: {
*     firstName: "firstName"
*   }});
*   const { dirtyFields } = useFormState({
*     control
*   });
*   const onSubmit = (data) => console.log(data);
*
*   return (
*     <form onSubmit={handleSubmit(onSubmit)}>
*       <input {...register("firstName")} placeholder="First Name" />
*       {dirtyFields.firstName && <p>Field is dirty.</p>}
*       <input type="submit" />
*     </form>
*   );
* }
* ```
*/
function useFormState(props) {
	const formControl = useFormControlContext();
	const { control = formControl, disabled, name, exact } = props || {};
	const [formState, updateFormState] = import_react.useState(() => ({
		...control._formState,
		defaultValues: control._defaultValues
	}));
	const _localProxyFormState = import_react.useRef({
		isDirty: false,
		isLoading: false,
		dirtyFields: false,
		touchedFields: false,
		validatingFields: false,
		isValidating: false,
		isValid: false,
		errors: false
	});
	useIsomorphicLayoutEffect(() => control._subscribe({
		name,
		formState: _localProxyFormState.current,
		exact,
		callback: (formState) => {
			!disabled && updateFormState({
				...control._formState,
				...formState,
				defaultValues: control._defaultValues
			});
		}
	}), [
		name,
		disabled,
		exact
	]);
	import_react.useEffect(() => {
		_localProxyFormState.current.isValid && control._setValid(true);
	}, [control]);
	return import_react.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
	if (isString(names)) {
		isGlobal && _names.watch.add(names);
		return get(formValues, names, defaultValue);
	}
	if (Array.isArray(names)) return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
	isGlobal && (_names.watchAll = true);
	return formValues;
};
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2, visited = /* @__PURE__ */ new WeakSet()) {
	if (object1 === object2) return true;
	if (isPrimitive(object1) || isPrimitive(object2)) return Object.is(object1, object2);
	if (isDateObject(object1) && isDateObject(object2)) return Object.is(object1.getTime(), object2.getTime());
	const keys1 = Object.keys(object1);
	const keys2 = Object.keys(object2);
	if (keys1.length !== keys2.length) return false;
	if (visited.has(object1) || visited.has(object2)) return true;
	visited.add(object1);
	visited.add(object2);
	for (const key of keys1) {
		const val1 = object1[key];
		if (!(key in object2)) return false;
		if (key !== "ref") {
			const val2 = object2[key];
			if (isDateObject(val1) && isDateObject(val2) || (isObject(val1) || Array.isArray(val1)) && (isObject(val2) || Array.isArray(val2)) ? !deepEqual(val1, val2, visited) : !Object.is(val1, val2)) return false;
		}
	}
	return true;
}
/**
* Custom hook to subscribe to field change and isolate re-rendering at the component level.
*
* @remarks
*
* [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
*
* @example
* ```tsx
* const { control } = useForm();
* const values = useWatch({
*   name: "fieldName"
*   control,
* })
* ```
*/
function useWatch(props) {
	const formControl = useFormControlContext();
	const { control = formControl, name, defaultValue, disabled, exact, compute } = props || {};
	const _defaultValue = import_react.useRef(defaultValue);
	const _compute = import_react.useRef(compute);
	const _computeFormValues = import_react.useRef(void 0);
	const _prevControl = import_react.useRef(control);
	const _prevName = import_react.useRef(name);
	_compute.current = compute;
	const [value, updateValue] = import_react.useState(() => {
		const defaultValue = control._getWatch(name, _defaultValue.current);
		return _compute.current ? _compute.current(defaultValue) : defaultValue;
	});
	const getCurrentOutput = import_react.useCallback((values) => {
		const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
		return _compute.current ? _compute.current(formValues) : formValues;
	}, [
		control._formValues,
		control._names,
		name
	]);
	const refreshValue = import_react.useCallback((values) => {
		if (!disabled) {
			const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
			if (_compute.current) {
				const computedFormValues = _compute.current(formValues);
				if (!deepEqual(computedFormValues, _computeFormValues.current)) {
					updateValue(computedFormValues);
					_computeFormValues.current = computedFormValues;
				}
			} else updateValue(formValues);
		}
	}, [
		control._formValues,
		control._names,
		disabled,
		name
	]);
	useIsomorphicLayoutEffect(() => {
		if (_prevControl.current !== control || !deepEqual(_prevName.current, name)) {
			_prevControl.current = control;
			_prevName.current = name;
			refreshValue();
		}
		return control._subscribe({
			name,
			formState: { values: true },
			exact,
			callback: (formState) => {
				refreshValue(formState.values);
			}
		});
	}, [
		control,
		exact,
		name,
		refreshValue
	]);
	import_react.useEffect(() => control._removeUnmounted());
	const controlChanged = _prevControl.current !== control;
	const prevName = _prevName.current;
	const computedOutput = import_react.useMemo(() => {
		if (disabled) return null;
		const nameChanged = !controlChanged && !deepEqual(prevName, name);
		return controlChanged || nameChanged ? getCurrentOutput() : null;
	}, [
		disabled,
		controlChanged,
		name,
		prevName,
		getCurrentOutput
	]);
	return computedOutput !== null ? computedOutput : value;
}
/**
* Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
*
* @remarks
* [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
*
* @param props - the path name to the form field value, and validation rules.
*
* @returns field properties, field and form state. {@link UseControllerReturn}
*
* @example
* ```tsx
* function Input(props) {
*   const { field, fieldState, formState } = useController(props);
*   return (
*     <div>
*       <input {...field} placeholder={props.name} />
*       <p>{fieldState.isTouched && "Touched"}</p>
*       <p>{formState.isSubmitted ? "submitted" : ""}</p>
*     </div>
*   );
* }
* ```
*/
function useController(props) {
	const formControl = useFormControlContext();
	const { name, disabled, control = formControl, shouldUnregister, defaultValue, exact = true } = props;
	const isArrayField = isNameInFieldArray(control._names.array, name);
	const value = useWatch({
		control,
		name,
		defaultValue: import_react.useMemo(() => get(control._formValues, name, get(control._defaultValues, name, defaultValue)), [
			control,
			name,
			defaultValue
		]),
		exact
	});
	const formState = useFormState({
		control,
		name,
		exact
	});
	const _props = import_react.useRef(props);
	const _registerProps = import_react.useRef(control.register(name, {
		...props.rules,
		value,
		...isBoolean(props.disabled) ? { disabled: props.disabled } : {}
	}));
	_props.current = props;
	const fieldState = import_react.useMemo(() => Object.defineProperties({}, {
		invalid: {
			enumerable: true,
			get: () => !!get(formState.errors, name)
		},
		isDirty: {
			enumerable: true,
			get: () => !!get(formState.dirtyFields, name)
		},
		isTouched: {
			enumerable: true,
			get: () => !!get(formState.touchedFields, name)
		},
		isValidating: {
			enumerable: true,
			get: () => !!get(formState.validatingFields, name)
		},
		error: {
			enumerable: true,
			get: () => get(formState.errors, name)
		}
	}), [formState, name]);
	const onChange = import_react.useCallback((event) => _registerProps.current.onChange({
		target: {
			value: getEventValue(event),
			name
		},
		type: EVENTS.CHANGE
	}), [name]);
	const onBlur = import_react.useCallback(() => _registerProps.current.onBlur({
		target: {
			value: get(control._formValues, name),
			name
		},
		type: EVENTS.BLUR
	}), [name, control._formValues]);
	const ref = import_react.useCallback((elm) => {
		const field = get(control._fields, name);
		if (field && field._f && elm) field._f.ref = {
			focus: () => isFunction(elm.focus) && elm.focus(),
			select: () => isFunction(elm.select) && elm.select(),
			setCustomValidity: (message) => isFunction(elm.setCustomValidity) && elm.setCustomValidity(message),
			reportValidity: () => isFunction(elm.reportValidity) && elm.reportValidity()
		};
	}, [control._fields, name]);
	const field = import_react.useMemo(() => ({
		name,
		value,
		...isBoolean(disabled) || formState.disabled ? { disabled: formState.disabled || disabled } : {},
		onChange,
		onBlur,
		ref
	}), [
		name,
		disabled,
		formState.disabled,
		onChange,
		onBlur,
		ref,
		value
	]);
	import_react.useEffect(() => {
		const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
		control.register(name, {
			..._props.current.rules,
			...isBoolean(_props.current.disabled) ? { disabled: _props.current.disabled } : {}
		});
		const updateMounted = (name, value) => {
			const field = get(control._fields, name);
			if (field && field._f) field._f.mount = value;
		};
		updateMounted(name, true);
		if (_shouldUnregisterField) {
			const value = cloneObject(get(control._options.defaultValues, name, _props.current.defaultValue));
			set(control._defaultValues, name, value);
			if (isUndefined(get(control._formValues, name))) set(control._formValues, name, value);
		}
		!isArrayField && control.register(name);
		return () => {
			(isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
		};
	}, [
		name,
		control,
		isArrayField,
		shouldUnregister
	]);
	import_react.useEffect(() => {
		control._setDisabledField({
			disabled,
			name
		});
	}, [
		disabled,
		name,
		control
	]);
	return import_react.useMemo(() => ({
		field,
		formState,
		fieldState
	}), [
		field,
		formState,
		fieldState
	]);
}
/**
* Component based on `useController` hook to work with controlled component.
*
* @remarks
* [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
*
* @param props - the path name to the form field value, and validation rules.
*
* @returns provide field handler functions, field and form state.
*
* @example
* ```tsx
* function App() {
*   const { control } = useForm<FormValues>({
*     defaultValues: {
*       test: ""
*     }
*   });
*
*   return (
*     <form>
*       <Controller
*         control={control}
*         name="test"
*         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
*           <>
*             <input
*               onChange={onChange} // send value to hook form
*               onBlur={onBlur} // notify when input is touched
*               value={value} // return updated value
*               ref={ref} // set ref for focus management
*             />
*             <p>{formState.isSubmitted ? "submitted" : ""}</p>
*             <p>{fieldState.isTouched ? "touched" : ""}</p>
*           </>
*         )}
*       />
*     </form>
*   );
* }
* ```
*/
var Controller = (props) => props.render(useController(props));
var HookFormContext = import_react.createContext(null);
HookFormContext.displayName = "HookFormContext";
/**
* This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
*
* @remarks
* [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
*
* @returns return all useForm methods
*
* @example
* ```tsx
* function App() {
*   const methods = useForm();
*   const onSubmit = data => console.log(data);
*
*   return (
*     <FormProvider {...methods} >
*       <form onSubmit={methods.handleSubmit(onSubmit)}>
*         <NestedInput />
*         <input type="submit" />
*       </form>
*     </FormProvider>
*   );
* }
*
*  function NestedInput() {
*   const { register } = useFormContext(); // retrieve all hook methods
*   return <input {...register("test")} />;
* }
* ```
*/
var useFormContext = () => import_react.useContext(HookFormContext);
/**
* A provider component that propagates the `useForm` methods to all children components via [React Context](https://react.dev/reference/react/useContext) API. To be used with {@link useFormContext}.
*
* @remarks
* [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
*
* @param props - all useForm methods
*
* @example
* ```tsx
* function App() {
*   const methods = useForm();
*   const onSubmit = data => console.log(data);
*
*   return (
*     <FormProvider {...methods} >
*       <form onSubmit={methods.handleSubmit(onSubmit)}>
*         <NestedInput />
*         <input type="submit" />
*       </form>
*     </FormProvider>
*   );
* }
*
*  function NestedInput() {
*   const { register } = useFormContext(); // retrieve all hook methods
*   return <input {...register("test")} />;
* }
* ```
*/
var FormProvider = (props) => {
	const { children, watch, getValues, getFieldState, setError, clearErrors, setValue, setValues, trigger, formState, resetField, reset, handleSubmit, unregister, control, register, setFocus, subscribe } = props;
	const memoizedValue = import_react.useMemo(() => ({
		watch,
		getValues,
		getFieldState,
		setError,
		clearErrors,
		setValue,
		setValues,
		trigger,
		formState,
		resetField,
		reset,
		handleSubmit,
		unregister,
		control,
		register,
		setFocus,
		subscribe
	}), [
		clearErrors,
		control,
		formState,
		getFieldState,
		getValues,
		handleSubmit,
		register,
		reset,
		resetField,
		setError,
		setFocus,
		setValue,
		setValues,
		subscribe,
		trigger,
		unregister,
		watch
	]);
	return import_react.createElement(HookFormContext.Provider, { value: memoizedValue }, import_react.createElement(HookFormControlContext.Provider, { value: memoizedValue.control }, children));
};
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
	...errors[name],
	types: {
		...errors[name] && errors[name].types ? errors[name].types : {},
		[type]: message || true
	}
} : {};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
var createSubject = () => {
	let _observers = [];
	const next = (value) => {
		for (const observer of _observers) observer.next && observer.next(value);
	};
	const subscribe = (observer) => {
		_observers.push(observer);
		return { unsubscribe: () => {
			_observers = _observers.filter((o) => o !== observer);
		} };
	};
	const unsubscribe = () => {
		_observers = [];
	};
	return {
		get observers() {
			return _observers;
		},
		next,
		subscribe,
		unsubscribe
	};
};
function extractFormValues(fieldsState, formValues) {
	const values = {};
	for (const key in fieldsState) if (fieldsState.hasOwnProperty(key)) {
		const fieldState = fieldsState[key];
		const fieldValue = formValues[key];
		if (fieldState && isObject(fieldState) && fieldValue) {
			const nestedFieldsState = extractFormValues(fieldState, fieldValue);
			if (isObject(nestedFieldsState)) values[key] = nestedFieldsState;
		} else if (fieldsState[key]) values[key] = fieldValue;
	}
	return values;
}
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var isFileInput = (element) => element.type === "file";
var isHTMLElement = (value) => {
	if (!isWeb) return false;
	const owner = value ? value.ownerDocument : 0;
	return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioInput = (element) => element.type === "radio";
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
	const length = updatePath.slice(0, -1).length;
	let index = 0;
	while (index < length) {
		if (isNullOrUndefined(object)) {
			object = void 0;
			break;
		}
		object = object[updatePath[index]];
		index++;
	}
	return object;
}
function isEmptyArray(obj) {
	for (const key in obj) if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) return false;
	return true;
}
function unset(object, path) {
	if (isString(path) && Object.prototype.hasOwnProperty.call(object, path)) {
		delete object[path];
		return object;
	}
	const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
	const childObject = paths.length === 1 ? object : baseGet(object, paths);
	const index = paths.length - 1;
	const key = paths[index];
	if (childObject) delete childObject[key];
	if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) unset(object, paths.slice(0, -1));
	return object;
}
var objectHasFunction = (data) => {
	for (const key in data) if (isFunction(data[key])) return true;
	return false;
};
function isTraversable(value) {
	return Array.isArray(value) || isObject(value) && !objectHasFunction(value);
}
function markFieldsDirty(data, fields = {}) {
	for (const key in data) {
		const value = data[key];
		if (isTraversable(value)) {
			fields[key] = Array.isArray(value) ? [] : {};
			markFieldsDirty(value, fields[key]);
		} else if (!isUndefined(value)) fields[key] = true;
	}
	return fields;
}
function pruneDirtyFields(value) {
	if (value === false) return;
	if (value === true) return true;
	if (Array.isArray(value)) {
		const result = value.map((value) => pruneDirtyFields(value));
		return result.some((value) => value !== void 0) ? result : void 0;
	}
	if (isObject(value)) {
		const result = {};
		for (const key in value) {
			const pruned = pruneDirtyFields(value[key]);
			if (!isUndefined(pruned)) result[key] = pruned;
		}
		return Object.keys(result).length ? result : void 0;
	}
}
function getDirtyFields(data, formValues, dirtyFieldsFromValues) {
	if (!dirtyFieldsFromValues) dirtyFieldsFromValues = markFieldsDirty(formValues);
	for (const key in data) {
		const value = data[key];
		if (isTraversable(value)) if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) dirtyFieldsFromValues[key] = markFieldsDirty(value, Array.isArray(value) ? [] : {});
		else getDirtyFields(value, isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
		else {
			const formValue = formValues[key];
			dirtyFieldsFromValues[key] = !deepEqual(value, formValue);
		}
	}
	return pruneDirtyFields(dirtyFieldsFromValues) || {};
}
var defaultResult = {
	value: false,
	isValid: false
};
var validResult = {
	value: true,
	isValid: true
};
var getCheckboxValue = (options) => {
	if (Array.isArray(options)) {
		if (options.length > 1) {
			const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
			return {
				value: values,
				isValid: !!values.length
			};
		}
		return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : {
			value: options[0].value,
			isValid: true
		} : validResult : defaultResult;
	}
	return defaultResult;
};
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
var defaultReturn = {
	isValid: false,
	value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
	isValid: true,
	value: option.value
} : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
	const ref = _f.ref;
	if (isFileInput(ref)) return ref.files;
	if (isRadioInput(ref)) return getRadioValue(_f.refs).value;
	if (isMultipleSelect(ref)) return [...ref.selectedOptions].map(({ value }) => value);
	if (isCheckBoxInput(ref)) return getCheckboxValue(_f.refs).value;
	return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
	const fields = {};
	for (const name of fieldsNames) {
		const field = get(_fields, name);
		field && set(fields, name, field._f);
	}
	return {
		criteriaMode,
		names: [...fieldsNames],
		fields,
		shouldUseNativeValidation
	};
};
var isRegex = (value) => value instanceof RegExp;
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode) => ({
	isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
	isOnBlur: mode === VALIDATION_MODE.onBlur,
	isOnChange: mode === VALIDATION_MODE.onChange,
	isOnAll: mode === VALIDATION_MODE.all,
	isOnTouch: mode === VALIDATION_MODE.onTouched
});
var ASYNC_FUNCTION = "AsyncFunction";
var hasPromiseValidation = (fieldReference) => !!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
var iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
	for (const key of fieldsNames || Object.keys(fields)) {
		const field = get(fields, key);
		if (field) {
			const { _f, ...currentField } = field;
			if (_f) {
				if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) return true;
				else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) return true;
				else if (iterateFieldsByAction(currentField, action)) break;
			} else if (isObject(currentField)) {
				if (iterateFieldsByAction(currentField, action)) break;
			}
		}
	}
};
function schemaErrorLookup(errors, _fields, name) {
	const error = get(errors, name);
	if (error || isKey(name)) return {
		error,
		name
	};
	const names = name.split(".");
	while (names.length) {
		const fieldName = names.join(".");
		const field = get(_fields, fieldName);
		const foundError = get(errors, fieldName);
		if (field && !Array.isArray(field) && name !== fieldName) return { name };
		if (foundError && foundError.type) return {
			name: fieldName,
			error: foundError
		};
		if (foundError && foundError.root && foundError.root.type) return {
			name: `${fieldName}.root`,
			error: foundError.root
		};
		names.pop();
	}
	return { name };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
	updateFormState(formStateData);
	const { name, ...formState } = formStateData;
	return isEmptyObject(formState) || isRoot && Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact) => !name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName) => currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
	if (mode.isOnAll) return false;
	else if (!isSubmitted && mode.isOnTouch) return !(isTouched || isBlurEvent);
	else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) return !isBlurEvent;
	else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) return isBlurEvent;
	return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name) => {
	const fieldArrayErrors = convertToArrayPayload(get(errors, name));
	set(fieldArrayErrors, ROOT_ERROR_TYPE, error[name]);
	set(errors, name, fieldArrayErrors);
	return errors;
};
function getValidateError(result, ref, type = "validate") {
	if (isString(result) || Array.isArray(result) && result.every(isString) || isBoolean(result) && !result) return {
		type,
		message: isString(result) ? result : "",
		ref
	};
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
	value: validationData,
	message: ""
};
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
	const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
	const inputValue = get(formValues, name);
	if (!mount || disabledFieldNames.has(name)) return {};
	const inputRef = refs ? refs[0] : ref;
	const setCustomValidity = (message) => {
		if (shouldUseNativeValidation && inputRef.reportValidity) {
			inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
			inputRef.reportValidity();
		}
	};
	const error = {};
	const isRadio = isRadioInput(ref);
	const isCheckBox = isCheckBoxInput(ref);
	const isRadioOrCheckbox = isRadio || isCheckBox;
	const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length || valueAsNumber && typeof inputValue === "number" && isNaN(inputValue);
	const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
	const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
		const message = exceedMax ? maxLengthMessage : minLengthMessage;
		error[name] = {
			type: exceedMax ? maxType : minType,
			message,
			ref,
			...appendErrorsCurry(exceedMax ? maxType : minType, message)
		};
	};
	if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
		const { value, message } = isString(required) ? {
			value: !!required,
			message: required
		} : getValueAndMessage(required);
		if (value) {
			error[name] = {
				type: INPUT_VALIDATION_RULES.required,
				message,
				ref: inputRef,
				...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
			};
			if (!validateAllFieldCriteria) {
				setCustomValidity(message);
				return error;
			}
		}
	}
	if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
		let exceedMax;
		let exceedMin;
		const maxOutput = getValueAndMessage(max);
		const minOutput = getValueAndMessage(min);
		if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
			const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
			if (!isNullOrUndefined(maxOutput.value)) exceedMax = valueNumber > maxOutput.value;
			if (!isNullOrUndefined(minOutput.value)) exceedMin = valueNumber < minOutput.value;
		} else {
			const valueDate = ref.valueAsDate || new Date(inputValue);
			const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
			const isTime = ref.type == "time";
			const isWeek = ref.type == "week";
			if (isString(maxOutput.value) && inputValue) exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
			if (isString(minOutput.value) && inputValue) exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
		}
		if (exceedMax || exceedMin) {
			getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
			if (!validateAllFieldCriteria) {
				setCustomValidity(error[name].message);
				return error;
			}
		}
	}
	if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
		const maxLengthOutput = getValueAndMessage(maxLength);
		const minLengthOutput = getValueAndMessage(minLength);
		const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
		const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
		if (exceedMax || exceedMin) {
			getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
			if (!validateAllFieldCriteria) {
				setCustomValidity(error[name].message);
				return error;
			}
		}
	}
	if (pattern && !isEmpty && isString(inputValue)) {
		const { value: patternValue, message } = getValueAndMessage(pattern);
		if (isRegex(patternValue) && !inputValue.match(patternValue)) {
			error[name] = {
				type: INPUT_VALIDATION_RULES.pattern,
				message,
				ref,
				...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
			};
			if (!validateAllFieldCriteria) {
				setCustomValidity(message);
				return error;
			}
		}
	}
	if (validate) {
		if (isFunction(validate)) {
			const validateError = getValidateError(await validate(inputValue, formValues), inputRef);
			if (validateError) {
				error[name] = {
					...validateError,
					...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
				};
				if (!validateAllFieldCriteria) {
					setCustomValidity(validateError.message);
					return error;
				}
			}
		} else if (isObject(validate)) {
			let validationResult = {};
			for (const key in validate) {
				if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) break;
				const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
				if (validateError) {
					validationResult = {
						...validateError,
						...appendErrorsCurry(key, validateError.message)
					};
					setCustomValidity(validateError.message);
					if (validateAllFieldCriteria) error[name] = validationResult;
				}
			}
			if (!isEmptyObject(validationResult)) {
				error[name] = {
					ref: inputRef,
					...validationResult
				};
				if (!validateAllFieldCriteria) return error;
			}
		}
	}
	setCustomValidity(true);
	return error;
};
var defaultOptions = {
	mode: VALIDATION_MODE.onSubmit,
	reValidateMode: VALIDATION_MODE.onChange,
	shouldFocusError: true
};
var DEFAULT_FORM_STATE = {
	submitCount: 0,
	isDirty: false,
	isReady: false,
	isValidating: false,
	isSubmitted: false,
	isSubmitting: false,
	isSubmitSuccessful: false,
	isValid: false,
	touchedFields: {},
	dirtyFields: {},
	validatingFields: {}
};
function createFormControl(props = {}) {
	let _options = {
		...defaultOptions,
		...props
	};
	let _formState = {
		...cloneObject(DEFAULT_FORM_STATE),
		isLoading: isFunction(_options.defaultValues),
		errors: _options.errors || {},
		disabled: _options.disabled || false
	};
	let _fields = {};
	let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
	let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
	let _state = {
		action: false,
		mount: false,
		watch: false,
		keepIsValid: false
	};
	let _names = {
		mount: /* @__PURE__ */ new Set(),
		disabled: /* @__PURE__ */ new Set(),
		unMount: /* @__PURE__ */ new Set(),
		array: /* @__PURE__ */ new Set(),
		watch: /* @__PURE__ */ new Set(),
		registerName: /* @__PURE__ */ new Set()
	};
	let delayErrorCallback;
	let timer = 0;
	const defaultProxyFormState = {
		isDirty: false,
		dirtyFields: false,
		validatingFields: false,
		touchedFields: false,
		isValidating: false,
		isValid: false,
		errors: false
	};
	const _proxyFormState = { ...defaultProxyFormState };
	let _proxySubscribeFormState = { ..._proxyFormState };
	const _subjects = {
		array: createSubject(),
		state: createSubject()
	};
	const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
	const debounce = (callback) => (wait) => {
		clearTimeout(timer);
		timer = setTimeout(callback, wait);
	};
	const _setValid = async (shouldUpdateValid) => {
		if (_state.keepIsValid) return;
		if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
			let isValid;
			if (_options.resolver) {
				isValid = isEmptyObject((await _runSchema()).errors);
				_updateIsValidating();
			} else isValid = await executeBuiltInValidation({
				fields: _fields,
				onlyCheckValid: true,
				eventType: EVENTS.VALID
			});
			if (isValid !== _formState.isValid) _subjects.state.next({ isValid });
		}
	};
	const _updateIsValidating = (names, isValidating) => {
		if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
			(names || Array.from(_names.mount)).forEach((name) => {
				if (name) isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
			});
			_subjects.state.next({
				validatingFields: _formState.validatingFields,
				isValidating: !isEmptyObject(_formState.validatingFields)
			});
		}
	};
	const _updateDirtyFields = () => {
		_formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
	};
	const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
		if (args && method && !_options.disabled) {
			_state.action = true;
			if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
				const fieldValues = method(get(_fields, name), args.argA, args.argB);
				shouldSetValues && set(_fields, name, fieldValues);
			}
			if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
				const errors = method(get(_formState.errors, name), args.argA, args.argB);
				shouldSetValues && set(_formState.errors, name, errors);
				unsetEmptyArray(_formState.errors, name);
			}
			if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
				const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
				shouldSetValues && set(_formState.touchedFields, name, touchedFields);
			}
			if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) _updateDirtyFields();
			_subjects.state.next({
				name,
				isDirty: _getDirty(name, values),
				dirtyFields: _formState.dirtyFields,
				errors: _formState.errors,
				isValid: _formState.isValid
			});
		} else set(_formValues, name, values);
	};
	const updateErrors = (name, error) => {
		set(_formState.errors, name, error);
		_subjects.state.next({ errors: _formState.errors });
	};
	const _setErrors = (errors) => {
		_formState.errors = errors;
		_subjects.state.next({
			errors: _formState.errors,
			isValid: false
		});
	};
	const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
		const field = get(_fields, name);
		if (field) {
			const wasUnsetInFormValues = isUndefined(get(_formValues, name));
			const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
			isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
			if (_state.mount && !_state.action) {
				_setValid();
				if (wasUnsetInFormValues && _formState.isDirty && (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty)) {
					if (!_getDirty()) {
						_formState.isDirty = false;
						_subjects.state.next({ ..._formState });
					}
				}
			}
		}
	};
	const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
		let shouldUpdateField = false;
		let isPreviousDirty = false;
		const output = { name };
		if (!_options.disabled) {
			if (!isBlurEvent || shouldDirty) {
				if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
					isPreviousDirty = _formState.isDirty;
					_formState.isDirty = output.isDirty = _getDirty();
					shouldUpdateField = isPreviousDirty !== output.isDirty;
				}
				const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
				isPreviousDirty = !!get(_formState.dirtyFields, name);
				isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
				output.dirtyFields = _formState.dirtyFields;
				shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
			}
			if (isBlurEvent) {
				const isPreviousFieldTouched = get(_formState.touchedFields, name);
				if (!isPreviousFieldTouched) {
					set(_formState.touchedFields, name, isBlurEvent);
					output.touchedFields = _formState.touchedFields;
					shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
				}
			}
			shouldUpdateField && shouldRender && _subjects.state.next(output);
		}
		return shouldUpdateField ? output : {};
	};
	const shouldRenderByError = (name, isValid, error, fieldState) => {
		const previousFieldError = get(_formState.errors, name);
		const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
		if (_options.delayError && error) {
			delayErrorCallback = debounce(() => updateErrors(name, error));
			delayErrorCallback(_options.delayError);
		} else {
			clearTimeout(timer);
			delayErrorCallback = null;
			error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
		}
		if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
			const updatedFormState = {
				...fieldState,
				...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
				errors: _formState.errors,
				name
			};
			_formState = {
				..._formState,
				...updatedFormState
			};
			_subjects.state.next(updatedFormState);
		}
	};
	const _runSchema = async (name) => {
		_updateIsValidating(name, true);
		return await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
	};
	const executeSchemaAndUpdateState = async (names) => {
		const { errors } = await _runSchema(names);
		_updateIsValidating(names);
		if (names) for (const name of names) {
			const error = get(errors, name);
			error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
		}
		else _formState.errors = errors;
		return errors;
	};
	const validateForm = async ({ name, eventType }) => {
		if (props.validate) {
			const result = await props.validate({
				formValues: _formValues,
				formState: _formState,
				name,
				eventType
			});
			if (isObject(result)) {
				for (const key in result) if (result[key]) setError(`${FORM_ERROR_TYPE}.${key}`, {
					message: isString(result.message) ? result.message : "",
					type: INPUT_VALIDATION_RULES.validate
				});
			} else if (isString(result) || !result) setError(FORM_ERROR_TYPE, {
				message: result || "",
				type: INPUT_VALIDATION_RULES.validate
			});
			else clearErrors(FORM_ERROR_TYPE);
			return result;
		}
		return true;
	};
	const executeBuiltInValidation = async ({ fields, onlyCheckValid, name, eventType, context = {
		valid: true,
		runRootValidation: false
	} }) => {
		if (props.validate) {
			context.runRootValidation = true;
			if (!await validateForm({
				name,
				eventType
			})) {
				context.valid = false;
				if (onlyCheckValid) return context.valid;
			}
		}
		for (const name in fields) {
			const field = fields[name];
			if (field) {
				const { _f, ...fieldValue } = field;
				if (_f) {
					const isFieldArrayRoot = _names.array.has(_f.name);
					const isPromiseFunction = field._f && hasPromiseValidation(field._f);
					if (isPromiseFunction && _proxyFormState.validatingFields) _updateIsValidating([_f.name], true);
					const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !onlyCheckValid, isFieldArrayRoot);
					if (isPromiseFunction && _proxyFormState.validatingFields) _updateIsValidating([_f.name]);
					if (fieldError[_f.name]) {
						context.valid = false;
						if (onlyCheckValid) break;
					}
					!onlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
					if (props.shouldUseNativeValidation && fieldError[_f.name]) break;
				}
				!isEmptyObject(fieldValue) && await executeBuiltInValidation({
					context,
					onlyCheckValid,
					fields: fieldValue,
					name,
					eventType
				});
			}
		}
		return context.valid;
	};
	const _removeUnmounted = () => {
		for (const name of _names.unMount) {
			const field = get(_fields, name);
			field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
		}
		_names.unMount = /* @__PURE__ */ new Set();
	};
	const _getDirty = (name, data) => !_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
	const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, { ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue }, isGlobal, defaultValue);
	const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
	const setFieldValue = (name, value, options = {}) => {
		const field = get(_fields, name);
		let fieldValue = value;
		if (field) {
			const fieldReference = field._f;
			if (fieldReference) {
				!fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
				fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
				if (isMultipleSelect(fieldReference.ref)) [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
				else if (fieldReference.refs) if (isCheckBoxInput(fieldReference.ref)) fieldReference.refs.forEach((checkboxRef) => {
					if (!checkboxRef.defaultChecked || !checkboxRef.disabled) if (Array.isArray(fieldValue)) checkboxRef.checked = !!fieldValue.find((data) => data === checkboxRef.value);
					else checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
				});
				else fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
				else if (isFileInput(fieldReference.ref)) fieldReference.ref.value = "";
				else {
					fieldReference.ref.value = fieldValue;
					if (!fieldReference.ref.type) _subjects.state.next({
						name,
						values: cloneObject(_formValues)
					});
				}
			}
		}
		(options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
		options.shouldValidate && trigger(name);
	};
	const setFieldValues = (name, value, options) => {
		for (const fieldKey in value) {
			if (!value.hasOwnProperty(fieldKey)) return;
			const fieldValue = value[fieldKey];
			const fieldName = name + "." + fieldKey;
			const field = get(_fields, fieldName);
			(_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setFieldValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
		}
	};
	const setValue = (name, value, options = {}) => {
		const field = get(_fields, name);
		const isFieldArray = _names.array.has(name);
		const cloneValue = cloneObject(value);
		const isValueUnchanged = deepEqual(get(_formValues, name), cloneValue);
		set(_formValues, name, cloneValue);
		if (isFieldArray) {
			_subjects.array.next({
				name,
				values: cloneObject(_formValues)
			});
			if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
				_updateDirtyFields();
				_subjects.state.next({
					name,
					dirtyFields: _formState.dirtyFields,
					isDirty: _getDirty(name, cloneValue)
				});
			}
		} else {
			const isEmpty = Array.isArray(cloneValue) && !cloneValue.length || isEmptyObject(cloneValue);
			if (!field || field._f || isNullOrUndefined(cloneValue) || isEmpty) setFieldValue(name, cloneValue, options);
			else setFieldValues(name, cloneValue, options);
		}
		if (!isValueUnchanged) {
			const watched = isWatched(name, _names);
			_subjects.state.next({
				...watched && _formState,
				name: _state.mount || watched ? name : void 0,
				values: cloneObject(_formValues)
			});
		}
	};
	const setValues = (formValues) => {
		const updatedFormValues = isFunction(formValues) ? formValues(_formValues) : formValues;
		if (!deepEqual(_formValues, updatedFormValues)) {
			_formValues = {
				..._formValues,
				...updatedFormValues
			};
			_subjects.state.next({
				..._formState,
				values: _formValues
			});
		}
	};
	const onChange = async (event) => {
		_state.mount = true;
		const target = event.target;
		let name = target.name;
		let isFieldValueUpdated = true;
		const field = get(_fields, name);
		const _updateIsFieldValueUpdated = (fieldValue) => {
			isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
		};
		const validationModeBeforeSubmit = getValidationModes(_options.mode);
		const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
		if (field) {
			let error;
			let isValid;
			const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
			const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
			const shouldSkipValidation = !hasValidation(field._f) && !props.validate && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
			const watched = isWatched(name, _names, isBlurEvent);
			set(_formValues, name, fieldValue);
			if (isBlurEvent) {
				if (!target || !target.readOnly) {
					field._f.onBlur && field._f.onBlur(event);
					delayErrorCallback && delayErrorCallback(0);
				}
			} else if (field._f.onChange) field._f.onChange(event);
			const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
			const shouldRender = !isEmptyObject(fieldState) || watched;
			!isBlurEvent && _subjects.state.next({
				name,
				type: event.type,
				values: cloneObject(_formValues)
			});
			if (shouldSkipValidation) {
				if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
					if (_options.mode === "onBlur") {
						if (isBlurEvent) _setValid();
					} else if (!isBlurEvent) _setValid();
				}
				return shouldRender && _subjects.state.next({
					name,
					...watched ? {} : fieldState
				});
			}
			if (!_options.resolver && props.validate) await validateForm({
				name,
				eventType: event.type
			});
			!isBlurEvent && watched && _subjects.state.next({ ..._formState });
			if (_options.resolver) {
				const { errors } = await _runSchema([name]);
				_updateIsValidating([name]);
				_updateIsFieldValueUpdated(fieldValue);
				if (isFieldValueUpdated) {
					const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
					const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
					error = errorLookupResult.error;
					name = errorLookupResult.name;
					isValid = isEmptyObject(errors);
				}
			} else {
				_updateIsValidating([name], true);
				error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
				_updateIsValidating([name]);
				_updateIsFieldValueUpdated(fieldValue);
				if (isFieldValueUpdated) {
					if (error) isValid = false;
					else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) isValid = await executeBuiltInValidation({
						fields: _fields,
						onlyCheckValid: true,
						name,
						eventType: event.type
					});
				}
			}
			if (isFieldValueUpdated) {
				field._f.deps && (!Array.isArray(field._f.deps) || field._f.deps.length > 0) && trigger(field._f.deps);
				shouldRenderByError(name, isValid, error, fieldState);
			}
		}
	};
	const _focusInput = (ref, key) => {
		if (get(_formState.errors, key) && ref.focus) {
			ref.focus();
			return 1;
		}
	};
	const trigger = async (name, options = {}) => {
		let isValid;
		let validationResult;
		const fieldNames = convertToArrayPayload(name);
		if (_options.resolver) {
			const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
			isValid = isEmptyObject(errors);
			validationResult = name ? !fieldNames.some((name) => get(errors, name)) : isValid;
		} else if (name) {
			validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
				const field = get(_fields, fieldName);
				return await executeBuiltInValidation({
					fields: field && field._f ? { [fieldName]: field } : field,
					eventType: EVENTS.TRIGGER
				});
			}))).every(Boolean);
			!(!validationResult && !_formState.isValid) && _setValid();
		} else validationResult = isValid = await executeBuiltInValidation({
			fields: _fields,
			name,
			eventType: EVENTS.TRIGGER
		});
		_subjects.state.next({
			...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : { name },
			..._options.resolver || !name ? { isValid } : {},
			errors: _formState.errors
		});
		options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
		return validationResult;
	};
	const getValues = (fieldNames, config) => {
		let values = { ..._state.mount ? _formValues : _defaultValues };
		if (config) values = extractFormValues(config.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
		return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
	};
	const getFieldState = (name, formState) => ({
		invalid: !!get((formState || _formState).errors, name),
		isDirty: !!get((formState || _formState).dirtyFields, name),
		error: get((formState || _formState).errors, name),
		isValidating: !!get(_formState.validatingFields, name),
		isTouched: !!get((formState || _formState).touchedFields, name)
	});
	const clearErrors = (name) => {
		const names = name ? convertToArrayPayload(name) : void 0;
		names === null || names === void 0 || names.forEach((inputName) => unset(_formState.errors, inputName));
		if (names) names.forEach((inputName) => {
			_subjects.state.next({
				name: inputName,
				errors: _formState.errors
			});
		});
		else _subjects.state.next({ errors: {} });
	};
	const setError = (name, error, options) => {
		const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
		const { ref: currentRef, message, type, ...restOfErrorTree } = get(_formState.errors, name) || {};
		set(_formState.errors, name, {
			...restOfErrorTree,
			...error,
			ref
		});
		_subjects.state.next({
			name,
			errors: _formState.errors,
			isValid: false
		});
		options && options.shouldFocus && ref && ref.focus && ref.focus();
	};
	const watch = (name, defaultValue) => isFunction(name) ? _subjects.state.subscribe({ next: (payload) => "values" in payload && name(payload.values || _getWatch(void 0, defaultValue), payload) }) : _getWatch(name, defaultValue, true);
	const _subscribe = (props) => _subjects.state.subscribe({ next: (formState) => {
		if (shouldSubscribeByName(props.name, formState.name, props.exact) && shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) {
			const snapshot = { ..._formValues };
			props.callback({
				values: snapshot,
				..._formState,
				...formState,
				defaultValues: _defaultValues
			});
		}
	} }).unsubscribe;
	const subscribe = (props) => {
		_state.mount = true;
		_proxySubscribeFormState = {
			..._proxySubscribeFormState,
			...props.formState
		};
		return _subscribe({
			...props,
			formState: {
				...defaultProxyFormState,
				...props.formState
			}
		});
	};
	const unregister = (name, options = {}) => {
		for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
			_names.mount.delete(fieldName);
			_names.array.delete(fieldName);
			if (!options.keepValue) {
				unset(_fields, fieldName);
				unset(_formValues, fieldName);
			}
			!options.keepError && unset(_formState.errors, fieldName);
			!options.keepDirty && unset(_formState.dirtyFields, fieldName);
			!options.keepTouched && unset(_formState.touchedFields, fieldName);
			!options.keepIsValidating && unset(_formState.validatingFields, fieldName);
			!_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
		}
		_subjects.state.next({ values: cloneObject(_formValues) });
		_subjects.state.next({
			..._formState,
			...!options.keepDirty ? {} : { isDirty: _getDirty() }
		});
		!options.keepIsValid && _setValid();
	};
	const _setDisabledField = ({ disabled, name }) => {
		if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
			const disabledStateChanged = _names.disabled.has(name) !== !!disabled;
			disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
			disabledStateChanged && _state.mount && !_state.action && _setValid();
		}
	};
	const register = (name, options = {}) => {
		let field = get(_fields, name);
		const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
		const shouldRevalidateRemount = !_names.registerName.has(name) && field && field._f && !field._f.mount;
		set(_fields, name, {
			...field || {},
			_f: {
				...field && field._f ? field._f : { ref: { name } },
				name,
				mount: true,
				...options
			}
		});
		_names.mount.add(name);
		if (field && !shouldRevalidateRemount) _setDisabledField({
			disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
			name
		});
		else updateValidAndValue(name, true, options.value);
		return {
			...disabledIsDefined ? { disabled: options.disabled || _options.disabled } : {},
			..._options.progressive ? {
				required: !!options.required,
				min: getRuleValue(options.min),
				max: getRuleValue(options.max),
				minLength: getRuleValue(options.minLength),
				maxLength: getRuleValue(options.maxLength),
				pattern: getRuleValue(options.pattern)
			} : {},
			name,
			onChange,
			onBlur: onChange,
			ref: (ref) => {
				if (ref) {
					_names.registerName.add(name);
					register(name, options);
					_names.registerName.delete(name);
					field = get(_fields, name);
					const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
					const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
					const refs = field._f.refs || [];
					if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) return;
					set(_fields, name, { _f: {
						...field._f,
						...radioOrCheckbox ? {
							refs: [
								...refs.filter(live),
								fieldRef,
								...Array.isArray(get(_defaultValues, name)) ? [{}] : []
							],
							ref: {
								type: fieldRef.type,
								name
							}
						} : { ref: fieldRef }
					} });
					updateValidAndValue(name, false, void 0, fieldRef);
				} else {
					field = get(_fields, name, {});
					if (field._f) field._f.mount = false;
					(_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
				}
			}
		};
	};
	const _focusError = () => _options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
	const _disableForm = (disabled) => {
		if (isBoolean(disabled)) {
			_subjects.state.next({ disabled });
			iterateFieldsByAction(_fields, (ref, name) => {
				const currentField = get(_fields, name);
				if (currentField) {
					ref.disabled = currentField._f.disabled || disabled;
					if (Array.isArray(currentField._f.refs)) currentField._f.refs.forEach((inputRef) => {
						inputRef.disabled = currentField._f.disabled || disabled;
					});
				}
			}, 0, false);
		}
	};
	const handleSubmit = (onValid, onInvalid) => async (e) => {
		let onValidError = void 0;
		if (e) {
			e.preventDefault && e.preventDefault();
			e.persist && e.persist();
		}
		let fieldValues = cloneObject(_formValues);
		_subjects.state.next({ isSubmitting: true });
		if (_options.resolver) {
			const { errors, values } = await _runSchema();
			_updateIsValidating();
			_formState.errors = errors;
			fieldValues = cloneObject(values);
		} else await executeBuiltInValidation({
			fields: _fields,
			eventType: EVENTS.SUBMIT
		});
		if (_names.disabled.size) for (const name of _names.disabled) unset(fieldValues, name);
		unset(_formState.errors, ROOT_ERROR_TYPE);
		if (isEmptyObject(_formState.errors)) {
			_subjects.state.next({ errors: {} });
			try {
				await onValid(fieldValues, e);
			} catch (error) {
				onValidError = error;
			}
		} else {
			if (onInvalid) await onInvalid({ ..._formState.errors }, e);
			_focusError();
			setTimeout(_focusError);
		}
		_subjects.state.next({
			isSubmitted: true,
			isSubmitting: false,
			isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
			submitCount: _formState.submitCount + 1,
			errors: _formState.errors
		});
		if (onValidError) throw onValidError;
	};
	const resetField = (name, options = {}) => {
		if (get(_fields, name)) {
			if (isUndefined(options.defaultValue)) setValue(name, cloneObject(get(_defaultValues, name)));
			else {
				setValue(name, options.defaultValue);
				set(_defaultValues, name, cloneObject(options.defaultValue));
			}
			if (!options.keepTouched) unset(_formState.touchedFields, name);
			if (!options.keepDirty) {
				unset(_formState.dirtyFields, name);
				_formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
			}
			if (!options.keepError) {
				unset(_formState.errors, name);
				_proxyFormState.isValid && _setValid();
			}
			_subjects.state.next({ ..._formState });
		}
	};
	const _reset = (formValues, keepStateOptions = {}) => {
		const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
		const cloneUpdatedValues = cloneObject(updatedValues);
		const isEmptyResetValues = isEmptyObject(formValues);
		const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
		if (!keepStateOptions.keepDefaultValues) _defaultValues = updatedValues;
		if (!keepStateOptions.keepValues) {
			if (keepStateOptions.keepDirtyValues) {
				const fieldsToCheck = new Set([..._names.mount, ...Object.keys(getDirtyFields(_defaultValues, _formValues))]);
				for (const fieldName of Array.from(fieldsToCheck)) {
					const isDirty = get(_formState.dirtyFields, fieldName);
					const existingValue = get(_formValues, fieldName);
					const newValue = get(values, fieldName);
					if (isDirty && !isUndefined(existingValue)) set(values, fieldName, existingValue);
					else if (!isDirty && !isUndefined(newValue)) setValue(fieldName, newValue);
				}
			} else {
				if (isWeb && isUndefined(formValues)) for (const name of _names.mount) {
					const field = get(_fields, name);
					if (field && field._f) {
						const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
						if (isHTMLElement(fieldReference)) {
							const form = fieldReference.closest("form");
							if (form) {
								form.reset();
								break;
							}
						}
					}
				}
				if (keepStateOptions.keepFieldsRef) for (const fieldName of _names.mount) setValue(fieldName, get(values, fieldName));
				else _fields = {};
			}
			_formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
			_subjects.array.next({ values: { ...values } });
			_subjects.state.next({ values: { ...values } });
		}
		_names = {
			mount: keepStateOptions.keepDirtyValues ? _names.mount : /* @__PURE__ */ new Set(),
			unMount: /* @__PURE__ */ new Set(),
			array: /* @__PURE__ */ new Set(),
			registerName: /* @__PURE__ */ new Set(),
			disabled: /* @__PURE__ */ new Set(),
			watch: /* @__PURE__ */ new Set(),
			watchAll: false,
			focus: ""
		};
		_state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues || !_options.shouldUnregister && !isEmptyObject(values);
		_state.watch = !!_options.shouldUnregister;
		_state.keepIsValid = !!keepStateOptions.keepIsValid;
		_state.action = false;
		if (!keepStateOptions.keepErrors) _formState.errors = {};
		_subjects.state.next({
			submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
			isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
			isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
			dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
			touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
			errors: keepStateOptions.keepErrors ? _formState.errors : {},
			isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
			isSubmitting: false,
			defaultValues: _defaultValues
		});
	};
	const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, {
		..._options.resetOptions,
		...keepStateOptions
	});
	const setFocus = (name, options = {}) => {
		const field = get(_fields, name);
		const fieldReference = field && field._f;
		if (fieldReference) {
			const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
			if (fieldRef.focus) setTimeout(() => {
				fieldRef.focus();
				options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
			});
		}
	};
	const _setFormState = (updatedFormState) => {
		_formState = {
			..._formState,
			...updatedFormState
		};
	};
	const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
		reset(values, _options.resetOptions);
		_subjects.state.next({ isLoading: false });
	});
	const methods = {
		control: {
			register,
			unregister,
			getFieldState,
			handleSubmit,
			setError,
			_subscribe,
			_runSchema,
			_updateIsValidating,
			_focusError,
			_getWatch,
			_getDirty,
			_setValid,
			_setFieldArray,
			_setDisabledField,
			_setErrors,
			_getFieldArray,
			_reset,
			_resetDefaultValues,
			_removeUnmounted,
			_disableForm,
			_subjects,
			_proxyFormState,
			get _fields() {
				return _fields;
			},
			get _formValues() {
				return _formValues;
			},
			get _state() {
				return _state;
			},
			set _state(value) {
				_state = value;
			},
			get _defaultValues() {
				return _defaultValues;
			},
			get _names() {
				return _names;
			},
			set _names(value) {
				_names = value;
			},
			get _formState() {
				return _formState;
			},
			get _options() {
				return _options;
			},
			set _options(value) {
				_options = {
					..._options,
					...value
				};
			}
		},
		subscribe,
		trigger,
		register,
		handleSubmit,
		watch,
		setValue,
		setValues,
		getValues,
		reset,
		resetField,
		clearErrors,
		unregister,
		setError,
		setFocus,
		getFieldState
	};
	return {
		...methods,
		formControl: methods
	};
}
/**
* Custom hook to manage the entire form.
*
* @remarks
* [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
*
* @param props - form configuration and validation parameters.
*
* @returns methods - individual functions to manage the form state. {@link UseFormReturn}
*
* @example
* ```tsx
* function App() {
*   const { register, handleSubmit, watch, formState: { errors } } = useForm();
*   const onSubmit = data => console.log(data);
*
*   console.log(watch("example"));
*
*   return (
*     <form onSubmit={handleSubmit(onSubmit)}>
*       <input defaultValue="test" {...register("example")} />
*       <input {...register("exampleRequired", { required: true })} />
*       {errors.exampleRequired && <span>This field is required</span>}
*       <button>Submit</button>
*     </form>
*   );
* }
* ```
*/
function useForm(props = {}) {
	const _formControl = import_react.useRef(void 0);
	const _values = import_react.useRef(void 0);
	const [formState, updateFormState] = import_react.useState(() => ({
		...cloneObject(DEFAULT_FORM_STATE),
		isLoading: isFunction(props.defaultValues),
		errors: props.errors || {},
		disabled: props.disabled || false,
		defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
	}));
	if (!_formControl.current) if (props.formControl) {
		_formControl.current = {
			...props.formControl,
			formState
		};
		if (props.defaultValues && !isFunction(props.defaultValues)) props.formControl.reset(props.defaultValues, props.resetOptions);
	} else {
		const { formControl, ...rest } = createFormControl(props);
		_formControl.current = {
			...rest,
			formState
		};
	}
	const control = _formControl.current.control;
	control._options = props;
	useIsomorphicLayoutEffect(() => {
		const sub = control._subscribe({
			formState: control._proxyFormState,
			callback: () => updateFormState({ ...control._formState }),
			reRenderRoot: true
		});
		updateFormState((data) => ({
			...data,
			isReady: true
		}));
		control._formState.isReady = true;
		return sub;
	}, [control]);
	import_react.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
	import_react.useEffect(() => {
		if (props.mode) control._options.mode = props.mode;
		if (props.reValidateMode) control._options.reValidateMode = props.reValidateMode;
	}, [
		control,
		props.mode,
		props.reValidateMode
	]);
	import_react.useEffect(() => {
		if (props.errors) {
			control._setErrors(props.errors);
			control._focusError();
		}
	}, [control, props.errors]);
	import_react.useEffect(() => {
		props.shouldUnregister && control._subjects.state.next({ values: control._getWatch() });
	}, [control, props.shouldUnregister]);
	import_react.useEffect(() => {
		if (control._proxyFormState.isDirty) {
			const isDirty = control._getDirty();
			if (isDirty !== formState.isDirty) control._subjects.state.next({ isDirty });
		}
	}, [control, formState.isDirty]);
	import_react.useEffect(() => {
		var _a;
		if (props.values && !deepEqual(props.values, _values.current)) {
			control._reset(props.values, {
				keepFieldsRef: true,
				...control._options.resetOptions
			});
			if (!((_a = control._options.resetOptions) === null || _a === void 0 ? void 0 : _a.keepIsValid)) control._setValid();
			_values.current = props.values;
			updateFormState((state) => ({ ...state }));
		} else control._resetDefaultValues();
	}, [control, props.values]);
	import_react.useEffect(() => {
		if (!control._state.mount) {
			control._setValid();
			control._state.mount = true;
		}
		if (control._state.watch) {
			control._state.watch = false;
			control._subjects.state.next({ ...control._formState });
		}
		control._removeUnmounted();
	});
	_formControl.current.formState = import_react.useMemo(() => getProxyFormState(formState, control), [control, formState]);
	return _formControl.current;
}
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.75.0_react@19.2.5_/node_modules/@hookform/resolvers/dist/resolvers.mjs
var r = (t, r, o) => {
	if (t && "reportValidity" in t) {
		const s = get(o, r);
		t.setCustomValidity(s && s.message || ""), t.reportValidity();
	}
}, o = (e, t) => {
	for (const o in t.fields) {
		const s = t.fields[o];
		s && s.ref && "reportValidity" in s.ref ? r(s.ref, o, e) : s && s.refs && s.refs.forEach((t) => r(t, o, e));
	}
}, s$1 = (r, s) => {
	s.shouldUseNativeValidation && o(r, s);
	const n = {};
	for (const o in r) {
		const f = get(s.fields, o), c = Object.assign(r[o] || {}, { ref: f && f.ref });
		if (i$1(s.names || Object.keys(r), o)) {
			const r = Object.assign({}, get(n, o));
			set(r, "root", c), set(n, o, r);
		} else set(n, o, c);
	}
	return n;
}, i$1 = (e, t) => {
	const r = n(t);
	return e.some((e) => n(e).match(`^${r}\\.\\d+`));
};
function n(e) {
	return e.replace(/\]|\[/g, "");
}
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.75.0_react@19.2.5_/node_modules/@hookform/resolvers/zod/dist/zod.mjs
function t(r, e) {
	try {
		var o = r();
	} catch (r) {
		return e(r);
	}
	return o && o.then ? o.then(void 0, e) : o;
}
function s(r, e) {
	for (var n = {}; r.length;) {
		var t = r[0], s = t.code, i = t.message, a = t.path.join(".");
		if (!n[a]) if ("unionErrors" in t) {
			var u = t.unionErrors[0].errors[0];
			n[a] = {
				message: u.message,
				type: u.code
			};
		} else n[a] = {
			message: i,
			type: s
		};
		if ("unionErrors" in t && t.unionErrors.forEach(function(e) {
			return e.errors.forEach(function(e) {
				return r.push(e);
			});
		}), e) {
			var c = n[a].types, f = c && c[t.code];
			n[a] = appendErrors(a, e, n, s, f ? [].concat(f, t.message) : t.message);
		}
		r.shift();
	}
	return n;
}
function i(r, e) {
	for (var n = {}; r.length;) {
		var t = r[0], s = t.code, i = t.message, a = t.path.join(".");
		if (!n[a]) if ("invalid_union" === t.code && t.errors.length > 0) {
			var u = t.errors[0][0];
			n[a] = {
				message: u.message,
				type: u.code
			};
		} else n[a] = {
			message: i,
			type: s
		};
		if ("invalid_union" === t.code && t.errors.forEach(function(e) {
			return e.forEach(function(e) {
				return r.push(e);
			});
		}), e) {
			var c = n[a].types, f = c && c[t.code];
			n[a] = appendErrors(a, e, n, s, f ? [].concat(f, t.message) : t.message);
		}
		r.shift();
	}
	return n;
}
function a(o$1, a, u) {
	if (void 0 === u && (u = {}), function(r) {
		return "_def" in r && "object" == typeof r._def && "typeName" in r._def;
	}(o$1)) return function(n, i, c) {
		try {
			return Promise.resolve(t(function() {
				return Promise.resolve(o$1["sync" === u.mode ? "parse" : "parseAsync"](n, a)).then(function(e) {
					return c.shouldUseNativeValidation && o({}, c), {
						errors: {},
						values: u.raw ? Object.assign({}, n) : e
					};
				});
			}, function(r) {
				if (function(r) {
					return Array.isArray(null == r ? void 0 : r.issues);
				}(r)) return {
					values: {},
					errors: s$1(s(r.errors, !c.shouldUseNativeValidation && "all" === c.criteriaMode), c)
				};
				throw r;
			}));
		} catch (r) {
			return Promise.reject(r);
		}
	};
	if (function(r) {
		return "_zod" in r && "object" == typeof r._zod;
	}(o$1)) return function(s, c, f) {
		try {
			return Promise.resolve(t(function() {
				return Promise.resolve(("sync" === u.mode ? parse : parseAsync)(o$1, s, a)).then(function(e) {
					return f.shouldUseNativeValidation && o({}, f), {
						errors: {},
						values: u.raw ? Object.assign({}, s) : e
					};
				});
			}, function(r) {
				if (function(r) {
					return r instanceof $ZodError;
				}(r)) return {
					values: {},
					errors: s$1(i(r.issues, !f.shouldUseNativeValidation && "all" === f.criteriaMode), f)
				};
				throw r;
			}));
		} catch (r) {
			return Promise.reject(r);
		}
	};
	throw new Error("Invalid input: not a Zod schema");
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
function ValoresTab({ onNext }) {
	const { register, control, formState: { errors } } = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:25:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-8 mt-4",
		children: [VALORES_FIELDS.map((vField) => {
			const error = errors.valores?.[vField.id]?.valor;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:29:11",
				"data-prohibitions": "[editContent]",
				className: "border p-4 rounded-[var(--radius)] space-y-4 bg-card text-card-foreground",
				"aria-invalid": !!error,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:34:13",
						"data-prohibitions": "[editContent]",
						className: "font-semibold text-[1rem] px-2",
						children: [
							vField.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:35:30",
								"data-prohibitions": "[]",
								className: "text-destructive",
								children: "*"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:37:13",
						"data-prohibitions": "[editContent]",
						control,
						name: `valores.${vField.id}.valor`,
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:41:17",
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
								"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:49:21",
								"data-prohibitions": "[editContent]",
								className: "flex items-center space-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:50:23",
									"data-prohibitions": "[editContent]",
									value: String(n),
									id: `${vField.id}-${n}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:51:23",
									"data-prohibitions": "[editContent]",
									htmlFor: `${vField.id}-${n}`,
									className: "cursor-pointer mb-0",
									children: n
								})]
							}, n))
						})
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:60:15",
						"data-prohibitions": "[editContent]",
						id: `error-${vField.id}`,
						className: "text-[0.75rem] text-destructive block mt-1",
						children: error.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:67:13",
						"data-prohibitions": "[]",
						className: "space-y-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:68:15",
							"data-prohibitions": "[]",
							htmlFor: `exp-${vField.id}`,
							children: "Explique sua resposta (opcional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:69:15",
							"data-prohibitions": "[editContent]",
							id: `exp-${vField.id}`,
							...register(`valores.${vField.id}.exp`),
							maxLength: 200
						})]
					})
				]
			}, vField.id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:78:7",
			"data-prohibitions": "[]",
			className: "flex justify-end pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:79:9",
				"data-prohibitions": "[]",
				type: "button",
				onClick: onNext,
				children: "Próxima"
			})
		})]
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
function CompetenciaTab({ onNext, onPrev }) {
	const { register, watch, formState: { errors, touchedFields } } = useFormContext();
	const cidadaniaValor = watch("valores.cidadania.valor");
	const showSusWarning = cidadaniaValor === 1 || cidadaniaValor === 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:28:5",
		"data-prohibitions": "[editContent]",
		className: "space-y-6 mt-4",
		children: [COMPETENCIA_FIELDS.map((cField) => {
			const val = watch(`competencia.${cField.id}`) || "";
			const error = errors.competencia?.[cField.id];
			const touched = touchedFields.competencia?.[cField.id];
			const isSusField = cField.id === "experienciaSus";
			let counterColor = "text-muted-foreground";
			const ratio = val.length / 500;
			if (ratio >= 1) counterColor = "text-destructive";
			else if (ratio >= .8) counterColor = "text-ring";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:41:11",
				"data-prohibitions": "[editContent]",
				className: "space-y-2 relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:42:13",
						"data-prohibitions": "[editContent]",
						htmlFor: cField.id,
						className: error && touched ? "text-destructive" : "",
						children: [
							cField.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:43:30",
								"data-prohibitions": "[]",
								className: "text-destructive",
								children: "*"
							})
						]
					}),
					isSusField && showSusWarning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:47:15",
						"data-prohibitions": "[]",
						className: "animate-fade-in mb-2 inline-flex items-center gap-2 bg-ring/10 text-ring px-3 py-1.5 rounded-md border border-ring/20 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:48:17",
							"data-prohibitions": "[editContent]",
							className: "h-4 w-4"
						}), "⚠️ Atenção: sua resposta anterior sugere pouca experiência no SUS"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:53:13",
						"data-prohibitions": "[editContent]",
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:54:15",
							"data-prohibitions": "[editContent]",
							id: cField.id,
							...register(`competencia.${cField.id}`),
							maxLength: 500,
							"aria-invalid": !!error && !!touched,
							"aria-required": "true",
							"aria-describedby": error && touched ? `error-${cField.id}` : void 0,
							className: `min-h-24 ${error && touched ? "pr-10 border-destructive ring-destructive" : ""}`
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:65:13",
						"data-prohibitions": "[editContent]",
						className: "flex justify-between items-start min-h-[1.25rem] mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:66:15",
							"data-prohibitions": "[editContent]",
							className: "flex-1",
							children: error && touched ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:68:19",
								"data-prohibitions": "[editContent]",
								id: `error-${cField.id}`,
								className: "text-destructive text-sm font-medium animate-fade-in",
								children: error.message
							}) : null
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:76:15",
							"data-prohibitions": "[editContent]",
							className: `text-xs ml-4 font-medium transition-colors ${counterColor}`,
							children: [val.length, "/500"]
						})]
					})
				]
			}, cField.id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:83:7",
			"data-prohibitions": "[]",
			className: "flex flex-col-reverse sm:flex-row justify-end gap-4 pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:84:9",
				"data-prohibitions": "[]",
				type: "button",
				variant: "outline",
				onClick: onPrev,
				children: "Voltar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:87:9",
				"data-prohibitions": "[]",
				type: "button",
				onClick: onNext,
				children: "Próxima"
			})]
		})]
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
		"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:27:10",
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
	const currentFormValues = methods.watch();
	const isDirty = Object.keys(currentFormValues.valores || {}).length > 0 || Object.keys(currentFormValues.competencia || {}).length > 0;
	const { isHydrated, clearDraft, handleFocus, saveImmediate } = useDraftForm({
		key: "avaliacao-draft",
		currentValues: {
			form: currentFormValues,
			activeTab
		},
		setValues: (state) => {
			methods.reset(state.form);
			setActiveTab(state.activeTab);
		},
		debounceMs: 500,
		adapter: {
			toDraft: (state) => ({
				respostasLikert: Object.entries(state.form.valores || {}).map(([k, v]) => ({
					id: k,
					valor: v
				})),
				respostasAbertas: Object.entries(state.form.competencia || {}).map(([k, v]) => ({
					id: k,
					resposta: v
				})),
				tabAtivo: state.activeTab
			}),
			fromDraft: (draft) => ({
				form: {
					valores: draft.respostasLikert?.reduce((acc, item) => ({
						...acc,
						[item.id]: item.valor
					}), {}) || {},
					competencia: draft.respostasAbertas?.reduce((acc, item) => ({
						...acc,
						[item.id]: item.resposta
					}), {}) || {}
				},
				activeTab: draft.tabAtivo || "valores"
			})
		}
	});
	const blocker = useUnsavedChanges(isDirty);
	const daysRemaining = 4;
	const { execute: submitForm, isLoading: isSubmittingAPI } = useSubmit(async () => {
		await new Promise((resolve) => setTimeout(resolve, 1e3));
	}, {
		successMessage: "Avaliação enviada com sucesso!",
		onSuccess: () => {
			clearDraft();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			onSuccess();
		}
	});
	const onSubmit = async () => {
		if (!await methods.trigger()) {
			toast.error("Corrija os erros abaixo antes de enviar", { duration: 6e3 });
			setActiveTab("valores");
			setTimeout(() => {
				const errElement = document.querySelector(".text-destructive, [aria-invalid=\"true\"]");
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
		await submitForm();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:122:5",
		"data-prohibitions": "[]",
		className: "animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:123:7",
			"data-prohibitions": "[]",
			className: "flex flex-row items-center justify-between space-y-0 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:124:9",
				"data-prohibitions": "[]",
				className: "text-[2rem] font-bold",
				children: "Formulário de Avaliação"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:125:9",
				"data-prohibitions": "[]",
				className: "hidden sm:inline-flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeadlineBadge, {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:126:11",
					"data-prohibitions": "[editContent]",
					days: daysRemaining
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:129:7",
			"data-prohibitions": "[]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormProvider, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:130:9",
				"data-prohibitions": "[]",
				...methods,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("fieldset", {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:131:11",
					"data-prohibitions": "[]",
					disabled: isSubmittingAPI,
					onFocus: handleFocus,
					className: "border-0 p-0 m-0 min-w-0 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:136:13",
						"data-prohibitions": "[]",
						value: activeTab,
						onValueChange: (val) => {
							if (activeTab === "valores" && val !== "valores") methods.trigger("valores").then((valid) => {
								if (valid) {
									saveImmediate({
										form: currentFormValues,
										activeTab: val
									});
									setActiveTab(val);
								} else toast.error("Responda todas as perguntas antes de prosseguir");
							});
							else if (activeTab === "competencia" && val === "resumo") methods.trigger("competencia").then((valid) => {
								if (valid) {
									saveImmediate({
										form: currentFormValues,
										activeTab: val
									});
									setActiveTab(val);
								} else toast.error("Preencha todas as respostas com mínimo 10 caracteres");
							});
							else {
								saveImmediate({
									form: currentFormValues,
									activeTab: val
								});
								setActiveTab(val);
							}
						},
						className: "w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:160:15",
								"data-prohibitions": "[]",
								className: "flex w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:161:17",
										"data-prohibitions": "[]",
										value: "valores",
										className: "flex-1",
										children: "Valores"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:164:17",
										"data-prohibitions": "[]",
										value: "competencia",
										className: "flex-1",
										children: "Competência"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:167:17",
										"data-prohibitions": "[]",
										value: "resumo",
										className: "flex-1",
										children: "Resumo"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:171:15",
								"data-prohibitions": "[]",
								value: "valores",
								className: "focus-visible:outline-none focus-visible:ring-0 animate-tab-fade-in",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValoresTab, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:175:17",
									"data-prohibitions": "[editContent]",
									onNext: async () => {
										if (await methods.trigger("valores")) setActiveTab("competencia");
										else toast.error("Responda todas as perguntas antes de prosseguir");
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:183:15",
								"data-prohibitions": "[]",
								value: "competencia",
								className: "focus-visible:outline-none focus-visible:ring-0 animate-tab-fade-in",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompetenciaTab, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:187:17",
									"data-prohibitions": "[editContent]",
									onPrev: () => setActiveTab("valores"),
									onNext: async () => {
										if (await methods.trigger("competencia")) setActiveTab("resumo");
										else toast.error("Preencha todas as respostas com mínimo 10 caracteres");
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:196:15",
								"data-prohibitions": "[]",
								value: "resumo",
								className: "focus-visible:outline-none focus-visible:ring-0 animate-tab-fade-in",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumoTab, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:200:17",
									"data-prohibitions": "[editContent]",
									onEdit: () => setActiveTab("valores"),
									onSubmit,
									loading: isSubmittingAPI
								})
							})
						]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnsavedChangesModal, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:209:9",
				"data-prohibitions": "[editContent]",
				blocker,
				onDiscard: () => {
					clearDraft();
					methods.reset();
				}
			})]
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
	(0, import_react.useEffect)(() => {
		if (currentStage === 4) {
			const t = setTimeout(() => setCurrentStage(5), 3e3);
			return () => clearTimeout(t);
		} else if (currentStage === 5) {
			const t = setTimeout(() => setCurrentStage(6), 5e3);
			return () => clearTimeout(t);
		}
	}, [currentStage]);
	const steps = [
		{
			id: 1,
			title: "Captação",
			status: "completed",
			date: (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")
		},
		{
			id: 2,
			title: "Manifestação de Interesse",
			status: currentStage === 2 ? "active" : currentStage > 2 ? "completed" : "blocked",
			date: currentStage > 2 ? (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR") : void 0
		},
		{
			id: 3,
			title: "Formulário de Avaliação",
			status: currentStage === 3 ? "active" : currentStage > 3 ? "completed" : "blocked",
			date: currentStage > 3 ? (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR") : void 0
		},
		{
			id: 4,
			title: "Busca Web",
			status: currentStage === 4 ? "active" : currentStage > 4 ? "completed" : "waiting",
			date: currentStage > 4 ? (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR") : void 0
		},
		{
			id: 5,
			title: "Avaliação RH/Diretor",
			status: currentStage === 5 ? "active" : currentStage > 5 ? "completed" : "waiting",
			date: currentStage > 5 ? (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR") : void 0
		},
		{
			id: 6,
			title: "Aprovação e Agendamento",
			status: currentStage === 6 ? "active" : currentStage > 6 ? "completed" : "waiting"
		},
		{
			id: 8,
			title: "Entrevista",
			status: currentStage === 8 ? "active" : currentStage > 8 ? "completed" : "waiting"
		},
		{
			id: 9,
			title: "Aprovação Pós-Entrevista",
			status: currentStage === 9 ? "active" : currentStage > 9 ? "completed" : "waiting"
		}
	];
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/dashboard.tsx:96:7",
		"data-prohibitions": "[]",
		className: "flex-1 p-4 md:p-6 lg:p-8 space-y-8 h-full overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
			"data-uid": "src/pages/candidatos/dashboard.tsx:97:9",
			"data-prohibitions": "[editContent]",
			className: "h-8 w-64"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/candidatos/dashboard.tsx:98:9",
			"data-prohibitions": "[]",
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/candidatos/dashboard.tsx:99:11",
					"data-prohibitions": "[]",
					className: "col-span-1 md:col-span-1 lg:col-span-3 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/candidatos/dashboard.tsx:100:13",
						"data-prohibitions": "[editContent]",
						className: "h-[400px] w-full"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/candidatos/dashboard.tsx:102:11",
					"data-prohibitions": "[]",
					className: "col-span-1 md:col-span-1 lg:col-span-5 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/candidatos/dashboard.tsx:103:13",
						"data-prohibitions": "[editContent]",
						className: "h-[400px] w-full"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/dashboard.tsx:105:11",
					"data-prohibitions": "[]",
					className: "hidden lg:block lg:col-span-2 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/candidatos/dashboard.tsx:106:13",
						"data-prohibitions": "[editContent]",
						className: "h-32 w-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						"data-uid": "src/pages/candidatos/dashboard.tsx:107:13",
						"data-prohibitions": "[editContent]",
						className: "h-32 w-full"
					})]
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/dashboard.tsx:115:5",
		"data-prohibitions": "[editContent]",
		className: "flex-1 flex flex-col h-full bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/candidatos/dashboard.tsx:116:7",
			"data-prohibitions": "[]",
			className: "border-b bg-background/50 backdrop-blur-sm sticky top-0 z-20 px-4 md:px-6 lg:px-8 py-4 mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, {
				"data-uid": "src/pages/candidatos/dashboard.tsx:117:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BreadcrumbList, {
					"data-uid": "src/pages/candidatos/dashboard.tsx:118:11",
					"data-prohibitions": "[]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:119:13",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:120:15",
								"data-prohibitions": "[]",
								href: "/",
								children: "Início"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:122:13",
							"data-prohibitions": "[editContent]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:123:13",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:124:15",
								"data-prohibitions": "[]",
								children: "Meu Processo"
							})
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/candidatos/dashboard.tsx:128:9",
				"data-prohibitions": "[]",
				className: "text-[2rem] font-bold tracking-tight mt-2",
				children: "Meu Processo de Seleção"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/candidatos/dashboard.tsx:131:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 px-4 md:px-6 lg:px-8 overflow-auto pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/dashboard.tsx:132:9",
				"data-prohibitions": "[editContent]",
				className: "max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/pages/candidatos/dashboard.tsx:133:11",
						"data-prohibitions": "[]",
						className: "col-span-1 md:col-span-1 lg:col-span-3 flex flex-col gap-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"data-uid": "src/pages/candidatos/dashboard.tsx:134:13",
							"data-prohibitions": "[]",
							"aria-labelledby": "timeline-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/candidatos/dashboard.tsx:135:15",
								"data-prohibitions": "[]",
								id: "timeline-heading",
								className: "sr-only",
								children: "Linha do Tempo do Processo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:138:15",
								"data-prohibitions": "[editContent]",
								steps
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/dashboard.tsx:142:11",
						"data-prohibitions": "[editContent]",
						className: "col-span-1 md:col-span-1 lg:col-span-5 flex flex-col gap-8",
						children: [
							currentStage === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteresseForm, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:143:36",
								"data-prohibitions": "[editContent]",
								onSuccess: () => setCurrentStage(3)
							}),
							currentStage === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvaliacaoForm, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:144:36",
								"data-prohibitions": "[editContent]",
								onSuccess: () => setCurrentStage(4)
							}),
							currentStage === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos/dashboard.tsx:146:15",
								"data-prohibitions": "[]",
								className: "text-center p-8 border rounded-[var(--radius)] bg-card shadow-sm animate-fade-in-up",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:147:17",
									"data-prohibitions": "[]",
									className: "font-semibold text-[1rem] mb-2",
									children: "Busca Web em Andamento..."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:148:17",
									"data-prohibitions": "[]",
									className: "text-muted-foreground text-[0.875rem] flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"data-uid": "src/pages/candidatos/dashboard.tsx:149:19",
										"data-prohibitions": "[editContent]",
										className: "animate-spin inline-block h-4 w-4 border-2 border-primary border-r-transparent rounded-full"
									}), "Estamos validando suas informações com bancos de dados públicos."]
								})]
							}),
							currentStage === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos/dashboard.tsx:155:15",
								"data-prohibitions": "[]",
								className: "text-center p-8 border rounded-[var(--radius)] bg-card shadow-sm animate-fade-in-up",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:156:17",
									"data-prohibitions": "[]",
									className: "font-semibold text-[1rem] mb-2",
									children: "Avaliação RH"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:157:17",
									"data-prohibitions": "[]",
									className: "text-muted-foreground text-[0.875rem] flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"data-uid": "src/pages/candidatos/dashboard.tsx:158:19",
										"data-prohibitions": "[editContent]",
										className: "animate-spin inline-block h-4 w-4 border-2 border-primary border-r-transparent rounded-full"
									}), "Nossa equipe de RH e Diretoria está analisando seu perfil."]
								})]
							}),
							currentStage >= 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos/dashboard.tsx:164:15",
								"data-prohibitions": "[]",
								className: "text-center p-8 border rounded-[var(--radius)] bg-card shadow-sm animate-fade-in-up",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:165:17",
									"data-prohibitions": "[]",
									className: "font-semibold text-[1rem] mb-2 text-primary",
									children: "Análise Concluída"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:166:17",
									"data-prohibitions": "[]",
									className: "text-muted-foreground text-[0.875rem]",
									children: "Fique atento ao seu email para informações sobre a aprovação e agendamento da entrevista!"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						"data-uid": "src/pages/candidatos/dashboard.tsx:174:11",
						"data-prohibitions": "[]",
						className: "hidden lg:block lg:col-span-2 sticky top-[8rem] max-h-[calc(100vh-10rem)] overflow-y-auto self-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusSummary, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:175:13",
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

//# sourceMappingURL=dashboard-Bu2eUdde.js.map