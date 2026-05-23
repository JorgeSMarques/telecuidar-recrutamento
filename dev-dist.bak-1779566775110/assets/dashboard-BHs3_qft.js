import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { t as Clock } from "./clock-Dx7sky9v.js";
import { A as createLucideIcon, D as Circle, H as createContextScope, N as useControllableState, O as ChevronRight, P as Presence, S as useSize, T as X, U as useComposedRefs, W as composeEventHandlers, f as Input, g as Skeleton, h as Slot, i as useDirection, j as cva, k as Check, n as Root, p as Button, r as createRovingFocusGroupScope, t as Item, w as toast, z as Primitive } from "./index-DCgNdZ8N.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-hLjDq9kO.js";
import { t as Badge } from "./badge-G1fJHXHB.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-DLi8Ccb0.js";
import { t as Label } from "./label-BSOODRw4.js";
import { t as Textarea } from "./textarea-CZtHpmF5.js";
import { t as usePrevious } from "./dist-_PtXABMZ.js";
import { a as useFormContext, c as object, i as useForm, l as string, n as Controller, o as literal, r as FormProvider, s as number, t as a } from "./zod-F6ESr75W.js";
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
var CircleAlert = createLucideIcon("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
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
		className: "space-y-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/candidatos/components/timeline.tsx:12:7",
			"data-prohibitions": "[editContent]",
			className: "flex flex-col gap-6 relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/candidatos/components/timeline.tsx:13:9",
				"data-prohibitions": "[editContent]",
				className: "absolute top-4 bottom-4 left-[21px] w-[2px] bg-border z-0"
			}), steps.map((step) => {
				const isCompleted = step.status === "completed";
				const isActive = step.status === "active";
				const isWaiting = step.status === "waiting";
				const isBlocked = step.status === "blocked";
				const isRejected = step.status === "rejected";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/timeline.tsx:22:13",
					"data-prohibitions": "[editContent]",
					className: "relative z-10 flex items-start gap-4",
					"aria-current": isActive ? "step" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/timeline.tsx:27:15",
						"data-prohibitions": "[editContent]",
						className: cn("w-11 h-11 rounded-full flex items-center justify-center border-2 bg-background shrink-0 transition-colors duration-200", isCompleted ? "border-green-500 text-green-500" : isActive ? "border-primary text-primary" : isRejected ? "border-red-500 text-red-500" : isBlocked ? "border-yellow-500 text-yellow-500" : "border-muted-foreground text-muted-foreground"),
						children: [
							isCompleted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:41:33",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							}),
							isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:42:30",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							}),
							isWaiting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:43:31",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							}),
							isBlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:44:31",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							}),
							isRejected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:45:32",
								"data-prohibitions": "[editContent]",
								className: "w-5 h-5"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/timeline.tsx:47:15",
						"data-prohibitions": "[editContent]",
						className: "pt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:48:17",
								"data-prohibitions": "[editContent]",
								className: cn("font-medium", isActive ? "text-primary font-bold" : ""),
								children: [
									step.id,
									". ",
									step.title
								]
							}),
							step.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:51:31",
								"data-prohibitions": "[editContent]",
								className: "text-xs text-muted-foreground",
								children: step.date
							}),
							step.status === "blocked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/candidatos/components/timeline.tsx:53:19",
								"data-prohibitions": "[]",
								className: "text-xs text-muted-foreground mt-1",
								children: "Depende da etapa anterior"
							})
						]
					})]
				}, step.id);
			})]
		})
	});
}
//#endregion
//#region src/pages/candidatos/components/status-summary.tsx
function StatusSummary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/components/status-summary.tsx:6:5",
		"data-prohibitions": "[]",
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/candidatos/components/status-summary.tsx:7:7",
			"data-prohibitions": "[]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				"data-uid": "src/pages/candidatos/components/status-summary.tsx:8:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:9:11",
					"data-prohibitions": "[]",
					className: "text-lg",
					children: "Resumo do Processo"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				"data-uid": "src/pages/candidatos/components/status-summary.tsx:11:9",
				"data-prohibitions": "[]",
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:12:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:13:13",
						"data-prohibitions": "[]",
						className: "text-sm text-muted-foreground",
						children: "Início da Etapa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:14:13",
						"data-prohibitions": "[]",
						className: "font-medium",
						children: "23 de Maio de 2026"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:16:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:17:13",
						"data-prohibitions": "[]",
						className: "text-sm text-muted-foreground",
						children: "Prazo Limite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:18:13",
						"data-prohibitions": "[]",
						className: "font-medium text-red-500",
						children: "30 de Maio de 2026"
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			"data-uid": "src/pages/candidatos/components/status-summary.tsx:23:7",
			"data-prohibitions": "[]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				"data-uid": "src/pages/candidatos/components/status-summary.tsx:24:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:25:11",
					"data-prohibitions": "[]",
					className: "text-lg",
					children: "Suporte ao Candidato"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				"data-uid": "src/pages/candidatos/components/status-summary.tsx:27:9",
				"data-prohibitions": "[]",
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/components/status-summary.tsx:28:11",
					"data-prohibitions": "[]",
					className: "flex items-center gap-2 text-sm",
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
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:35:13",
						"data-prohibitions": "[editContent]",
						className: "w-4 h-4 text-muted-foreground"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/candidatos/components/status-summary.tsx:36:13",
						"data-prohibitions": "[]",
						children: "0800 123 4567"
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/@radix-ui+react-checkbox@1.3.3_@types+react-dom@19.2.3_@types+react@19.2.14__@types+rea_5d08deedc0c6fcbbf88ad155a4d8991e/node_modules/@radix-ui/react-checkbox/dist/index.mjs
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
	const { __scopeCheckbox, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: CHECKBOX_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const isFormControl = control ? !!form || !!control.closest("form") : true;
	const context = {
		checked,
		disabled,
		setChecked,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		required,
		defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
		isFormControl,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProviderImpl, {
		scope: __scopeCheckbox,
		...context,
		children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = import_react.forwardRef(({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
	const { control, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, isFormControl, bubbleInput } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
	const composedRefs = useComposedRefs(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const form = control?.form;
		if (form) {
			const reset = () => setChecked(initialCheckedStateRef.current);
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [control, setChecked]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": isIndeterminate(checked) ? "mixed" : checked,
		"aria-required": required,
		"data-state": getState$1(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...checkboxProps,
		ref: composedRefs,
		onKeyDown: composeEventHandlers(onKeyDown, (event) => {
			if (event.key === "Enter") event.preventDefault();
		}),
		onClick: composeEventHandlers(onClick, (event) => {
			setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
});
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCheckbox, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...checkboxProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProvider, {
		__scopeCheckbox,
		checked,
		defaultChecked,
		disabled,
		required,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxTrigger, {
			...checkboxProps,
			ref: forwardedRef,
			__scopeCheckbox
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxBubbleInput, { __scopeCheckbox })] })
	});
});
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME$1 = "CheckboxIndicator";
var CheckboxIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
	const context = useCheckboxContext(INDICATOR_NAME$1, __scopeCheckbox);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isIndeterminate(context.checked) || context.checked === true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState$1(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "none",
				...props.style
			}
		})
	});
});
CheckboxIndicator.displayName = INDICATOR_NAME$1;
var BUBBLE_INPUT_NAME$1 = "CheckboxBubbleInput";
var CheckboxBubbleInput = import_react.forwardRef(({ __scopeCheckbox, ...props }, forwardedRef) => {
	const { control, hasConsumerStoppedPropagationRef, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useCheckboxContext(BUBBLE_INPUT_NAME$1, __scopeCheckbox);
	const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
	const prevChecked = usePrevious(checked);
	const controlSize = useSize(control);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const bubbles = !hasConsumerStoppedPropagationRef.current;
		if (prevChecked !== checked && setChecked) {
			const event = new Event("click", { bubbles });
			input.indeterminate = isIndeterminate(checked);
			setChecked.call(input, isIndeterminate(checked) ? false : checked);
			input.dispatchEvent(event);
		}
	}, [
		bubbleInput,
		prevChecked,
		checked,
		hasConsumerStoppedPropagationRef
	]);
	const defaultCheckedRef = import_react.useRef(isIndeterminate(checked) ? false : checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME$1;
function isFunction(value) {
	return typeof value === "function";
}
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getState$1(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
//#endregion
//#region src/components/ui/checkbox.tsx
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	"data-uid": "src/components/ui/checkbox.tsx:12:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		"data-uid": "src/components/ui/checkbox.tsx:20:5",
		"data-prohibitions": "[editContent]",
		className: cn("flex items-center justify-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			"data-uid": "src/components/ui/checkbox.tsx:21:7",
			"data-prohibitions": "[editContent]",
			className: "h-4 w-4"
		})
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
//#endregion
//#region src/services/avaliacao-service.ts
var avaliacaoService = {
	confirmarInteresse: async (data) => {
		return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 2e3));
	},
	enviarAvaliacao: async (data) => {
		return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 2e3));
	}
};
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
			valor: number().min(1, "Obrigatório").default(0),
			exp: string().max(200).optional()
		}),
		racionalidade: object({
			valor: number().min(1, "Obrigatório").default(0),
			exp: string().max(200).optional()
		}),
		economicidade: object({
			valor: number().min(1, "Obrigatório").default(0),
			exp: string().max(200).optional()
		}),
		competencia: object({
			valor: number().min(1, "Obrigatório").default(0),
			exp: string().max(200).optional()
		}),
		cidadania: object({
			valor: number().min(1, "Obrigatório").default(0),
			exp: string().max(200).optional()
		})
	}),
	competencia: object({
		experiencia: string().min(10, "Mínimo 10 caracteres").max(500, "Máximo 500 caracteres").default(""),
		experienciaSus: string().min(10, "Mínimo 10 caracteres").max(500, "Máximo 500 caracteres").default(""),
		formacao: string().min(10, "Mínimo 10 caracteres").max(500, "Máximo 500 caracteres").default(""),
		telemedicina: string().min(10, "Mínimo 10 caracteres").max(500, "Máximo 500 caracteres").default("")
	})
});
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/@radix-ui+react-radio-group@1.3.8_@types+react-dom@19.2.3_@types+react@19.2.14__@types+_cd32cc5d3acab82c80f5f32482bb55d0/node_modules/@radix-ui/react-radio-group/dist/index.mjs
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, form, ...radioProps } = props;
	const [button, setButton] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const isFormControl = button ? form || !!button.closest("form") : true;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioProvider, {
		scope: __scopeRadio,
		checked,
		disabled,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "radio",
			"aria-checked": checked,
			"data-state": getState(checked),
			"data-disabled": disabled ? "" : void 0,
			disabled,
			value,
			...radioProps,
			ref: composedRefs,
			onClick: composeEventHandlers(props.onClick, (event) => {
				if (!checked) onCheck?.();
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			})
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioBubbleInput, {
			control: button,
			bubbles: !hasConsumerStoppedPropagationRef.current,
			name,
			value,
			checked,
			required,
			disabled,
			form,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadio, forceMount, ...indicatorProps } = props;
	const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef
		})
	});
});
RadioIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = import_react.forwardRef(({ __scopeRadio, control, checked, bubbles = true, ...props }, forwardedRef) => {
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(ref, forwardedRef);
	const prevChecked = usePrevious(checked);
	const controlSize = useSize(control);
	import_react.useEffect(() => {
		const input = ref.current;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		if (prevChecked !== checked && setChecked) {
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
		}
	}, [
		prevChecked,
		checked,
		bubbles
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "radio",
		"aria-hidden": true,
		defaultChecked: checked,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
	return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = createContextScope(RADIO_GROUP_NAME, [createRovingFocusGroupScope, createRadioScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? null,
		onChange: onValueChange,
		caller: RADIO_GROUP_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupProvider, {
		scope: __scopeRadioGroup,
		name,
		required,
		disabled,
		value,
		onValueChange: setValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
			asChild: true,
			...rovingFocusGroupScope,
			orientation,
			dir: direction,
			loop,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "radiogroup",
				"aria-required": required,
				"aria-orientation": orientation,
				"data-disabled": disabled ? "" : void 0,
				dir: direction,
				...groupProps,
				ref: forwardedRef
			})
		})
	});
});
RadioGroup$1.displayName = RADIO_GROUP_NAME;
var ITEM_NAME = "RadioGroupItem";
var RadioGroupItem$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadioGroup, disabled, ...itemProps } = props;
	const context = useRadioGroupContext(ITEM_NAME, __scopeRadioGroup);
	const isDisabled = context.disabled || disabled;
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
	const radioScope = useRadioScope(__scopeRadioGroup);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const checked = context.value === itemProps.value;
	const isArrowKeyPressedRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleKeyDown = (event) => {
			if (ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
		};
		const handleKeyUp = () => isArrowKeyPressedRef.current = false;
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !isDisabled,
		active: checked,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, {
			disabled: isDisabled,
			required: context.required,
			checked,
			...radioScope,
			...itemProps,
			name: context.name,
			ref: composedRefs,
			onCheck: () => context.onValueChange(itemProps.value),
			onKeyDown: composeEventHandlers((event) => {
				if (event.key === "Enter") event.preventDefault();
			}),
			onFocus: composeEventHandlers(itemProps.onFocus, () => {
				if (isArrowKeyPressedRef.current) ref.current?.click();
			})
		})
	});
});
RadioGroupItem$1.displayName = ITEM_NAME;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeRadioGroup, ...indicatorProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioIndicator, {
		...useRadioScope(__scopeRadioGroup),
		...indicatorProps,
		ref: forwardedRef
	});
});
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root2 = RadioGroup$1;
var Item2 = RadioGroupItem$1;
var Indicator = RadioGroupIndicator;
//#endregion
//#region src/components/ui/radio-group.tsx
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-uid": "src/components/ui/radio-group.tsx:12:10",
		"data-prohibitions": "[editContent]",
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = Root2.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		"data-uid": "src/components/ui/radio-group.tsx:21:5",
		"data-prohibitions": "[editContent]",
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			"data-uid": "src/components/ui/radio-group.tsx:29:7",
			"data-prohibitions": "[]",
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
				"data-uid": "src/components/ui/radio-group.tsx:30:9",
				"data-prohibitions": "[editContent]",
				className: "h-2.5 w-2.5 fill-current text-current"
			})
		})
	});
});
RadioGroupItem.displayName = Item2.displayName;
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
		className: "space-y-8 mt-4 animate-fade-in-up",
		children: VALORES_FIELDS.map((vField) => {
			const error = errors.valores?.[vField.id]?.valor;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:27:11",
				"data-prohibitions": "[editContent]",
				className: "border p-4 rounded-md space-y-4",
				"aria-invalid": !!error,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:32:13",
						"data-prohibitions": "[editContent]",
						className: "font-semibold px-2",
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
							className: "flex gap-4",
							"aria-required": "true",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:46:21",
								"data-prohibitions": "[editContent]",
								className: "flex items-center space-x-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:47:23",
									"data-prohibitions": "[editContent]",
									value: String(n),
									id: `${vField.id}-${n}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:48:23",
									"data-prohibitions": "[editContent]",
									htmlFor: `${vField.id}-${n}`,
									className: "cursor-pointer",
									children: n
								})]
							}, n))
						})
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:56:23",
						"data-prohibitions": "[editContent]",
						className: "text-sm text-destructive",
						children: error.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:57:13",
						"data-prohibitions": "[]",
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:58:15",
							"data-prohibitions": "[]",
							htmlFor: `exp-${vField.id}`,
							children: "Explique sua resposta (opcional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/valores-tab.tsx:59:15",
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
		className: "space-y-6 mt-4 animate-fade-in-up",
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
						className: "min-h-24"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:39:13",
						"data-prohibitions": "[editContent]",
						className: "flex justify-between text-xs text-muted-foreground",
						children: [error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:40:24",
							"data-prohibitions": "[editContent]",
							className: "text-destructive",
							children: error.message
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:40:84",
							"data-prohibitions": "[editContent]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/competencia-tab.tsx:41:15",
							"data-prohibitions": "[editContent]",
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
		className: "space-y-6 mt-4 text-sm animate-fade-in-up",
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
function AvaliacaoForm({ onSuccess }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("valores");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const methods = useForm({
		resolver: a(avaliacaoSchema),
		mode: "onTouched"
	});
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
			await avaliacaoService.enviarAvaliacao(methods.getValues());
			localStorage.removeItem("avaliacao-draft");
			toast.success("Avaliação enviada com sucesso!");
			onSuccess();
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:62:5",
		"data-prohibitions": "[]",
		className: "animate-fade-in-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:63:7",
			"data-prohibitions": "[]",
			className: "flex flex-row items-center justify-between space-y-0 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:64:9",
				"data-prohibitions": "[]",
				className: "text-xl",
				children: "Formulário de Avaliação"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:65:9",
				"data-prohibitions": "[]",
				className: "bg-green-500 hover:bg-green-600 hidden sm:inline-flex",
				children: "7 dias para responder"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:69:7",
			"data-prohibitions": "[]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormProvider, {
				"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:70:9",
				"data-prohibitions": "[]",
				...methods,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:71:11",
					"data-prohibitions": "[]",
					value: activeTab,
					onValueChange: setActiveTab,
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:72:13",
							"data-prohibitions": "[]",
							className: "grid w-full grid-cols-3 h-auto min-h-10 p-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:73:15",
									"data-prohibitions": "[]",
									value: "valores",
									className: "whitespace-normal py-2 text-xs sm:text-sm",
									children: "Valores"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:76:15",
									"data-prohibitions": "[]",
									value: "competencia",
									className: "whitespace-normal py-2 text-xs sm:text-sm",
									children: "Competência"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:82:15",
									"data-prohibitions": "[]",
									value: "resumo",
									className: "whitespace-normal py-2 text-xs sm:text-sm",
									children: "Resumo"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:86:13",
							"data-prohibitions": "[]",
							value: "valores",
							className: "focus-visible:outline-none focus-visible:ring-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValoresTab, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:90:15",
								"data-prohibitions": "[editContent]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:92:13",
							"data-prohibitions": "[]",
							value: "competencia",
							className: "focus-visible:outline-none focus-visible:ring-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompetenciaTab, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:96:15",
								"data-prohibitions": "[editContent]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:98:13",
							"data-prohibitions": "[]",
							value: "resumo",
							className: "focus-visible:outline-none focus-visible:ring-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumoTab, {
								"data-uid": "src/pages/candidatos/components/avaliacao-form/index.tsx:99:15",
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
		className: "flex-1 p-6 space-y-8 h-full overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
			"data-uid": "src/pages/candidatos/dashboard.tsx:57:9",
			"data-prohibitions": "[editContent]",
			className: "h-8 w-64 animate-pulse"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/candidatos/dashboard.tsx:58:9",
			"data-prohibitions": "[]",
			className: "flex flex-col md:flex-row gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/dashboard.tsx:59:11",
				"data-prohibitions": "[]",
				className: "w-full md:w-[60%] space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/pages/candidatos/dashboard.tsx:60:13",
					"data-prohibitions": "[editContent]",
					className: "h-[200px] w-full animate-pulse"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/pages/candidatos/dashboard.tsx:61:13",
					"data-prohibitions": "[editContent]",
					className: "h-[200px] w-full animate-pulse"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/dashboard.tsx:63:11",
				"data-prohibitions": "[]",
				className: "w-full md:w-[40%] space-y-4 hidden md:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/pages/candidatos/dashboard.tsx:64:13",
					"data-prohibitions": "[editContent]",
					className: "h-32 w-full animate-pulse"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/pages/candidatos/dashboard.tsx:65:13",
					"data-prohibitions": "[editContent]",
					className: "h-32 w-full animate-pulse"
				})]
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/candidatos/dashboard.tsx:73:5",
		"data-prohibitions": "[editContent]",
		className: "flex-1 flex flex-col h-full bg-muted/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/candidatos/dashboard.tsx:74:7",
			"data-prohibitions": "[]",
			className: "border-b bg-background/50 backdrop-blur-sm sticky top-0 z-20 px-4 py-4 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, {
				"data-uid": "src/pages/candidatos/dashboard.tsx:75:9",
				"data-prohibitions": "[]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BreadcrumbList, {
					"data-uid": "src/pages/candidatos/dashboard.tsx:76:11",
					"data-prohibitions": "[]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:77:13",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:78:15",
								"data-prohibitions": "[]",
								href: "/",
								children: "Início"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:80:13",
							"data-prohibitions": "[editContent]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:81:13",
							"data-prohibitions": "[]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:82:15",
								"data-prohibitions": "[]",
								children: "Meu Processo"
							})
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/candidatos/dashboard.tsx:86:9",
				"data-prohibitions": "[]",
				className: "text-2xl font-bold tracking-tight mt-2",
				children: "Meu Processo de Seleção"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/pages/candidatos/dashboard.tsx:89:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 p-4 md:p-6 overflow-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/candidatos/dashboard.tsx:90:9",
				"data-prohibitions": "[editContent]",
				className: "max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/candidatos/dashboard.tsx:91:11",
					"data-prohibitions": "[editContent]",
					className: "w-full md:w-[60%] flex flex-col gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"data-uid": "src/pages/candidatos/dashboard.tsx:92:13",
						"data-prohibitions": "[]",
						"aria-labelledby": "timeline-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							"data-uid": "src/pages/candidatos/dashboard.tsx:93:15",
							"data-prohibitions": "[]",
							id: "timeline-heading",
							className: "sr-only",
							children: "Linha do Tempo do Processo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
							"data-uid": "src/pages/candidatos/dashboard.tsx:96:15",
							"data-prohibitions": "[editContent]",
							steps
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/candidatos/dashboard.tsx:99:13",
						"data-prohibitions": "[editContent]",
						className: "border-t pt-8",
						children: [
							currentStage === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteresseForm, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:100:38",
								"data-prohibitions": "[editContent]",
								onSuccess: () => setCurrentStage(3)
							}),
							currentStage === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvaliacaoForm, {
								"data-uid": "src/pages/candidatos/dashboard.tsx:101:38",
								"data-prohibitions": "[editContent]",
								onSuccess: () => setCurrentStage(4)
							}),
							currentStage >= 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/candidatos/dashboard.tsx:103:17",
								"data-prohibitions": "[]",
								className: "text-center p-8 border rounded-lg bg-background shadow-sm animate-fade-in-up",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:104:19",
									"data-prohibitions": "[]",
									className: "font-semibold text-lg mb-2",
									children: "Etapa Concluída"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/candidatos/dashboard.tsx:105:19",
									"data-prohibitions": "[]",
									className: "text-muted-foreground",
									children: "Sua participação está sendo avaliada. Acompanhe a linha do tempo para novidades."
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					"data-uid": "src/pages/candidatos/dashboard.tsx:113:11",
					"data-prohibitions": "[]",
					className: "w-full md:w-[40%] hidden md:block sticky top-6 self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusSummary, {
						"data-uid": "src/pages/candidatos/dashboard.tsx:114:13",
						"data-prohibitions": "[editContent]"
					})
				})]
			})
		})]
	});
}
//#endregion
export { CandidatoDashboard as default };

//# sourceMappingURL=dashboard-BHs3_qft.js.map