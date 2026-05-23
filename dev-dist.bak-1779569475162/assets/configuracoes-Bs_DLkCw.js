import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { H as createContextScope, N as useControllableState, S as useSize, U as useComposedRefs, W as composeEventHandlers, a as useTheme, f as Input, p as Button, w as toast, z as Primitive } from "./index-CB0cHcn5.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-De4u1zBy.js";
import { t as Label } from "./label-CTUrUv6_.js";
import { t as usePrevious } from "./dist-BVSXQU_N.js";
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/@radix-ui+react-switch@1.2.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_7ca460f1f67ff8c5b086b59b47ac08b0/node_modules/@radix-ui/react-switch/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, form, ...switchProps } = props;
	const [button, setButton] = import_react.useState(null);
	const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const isFormControl = button ? form || !!button.closest("form") : true;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: SWITCH_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SwitchProvider, {
		scope: __scopeSwitch,
		checked,
		disabled,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "switch",
			"aria-checked": checked,
			"aria-required": required,
			"data-state": getState(checked),
			"data-disabled": disabled ? "" : void 0,
			disabled,
			value,
			...switchProps,
			ref: composedRefs,
			onClick: composeEventHandlers(props.onClick, (event) => {
				setChecked((prevChecked) => !prevChecked);
				if (isFormControl) {
					hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
					if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
				}
			})
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchBubbleInput, {
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
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeSwitch, ...thumbProps } = props;
	const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-state": getState(context.checked),
		"data-disabled": context.disabled ? "" : void 0,
		...thumbProps,
		ref: forwardedRef
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = import_react.forwardRef(({ __scopeSwitch, control, checked, bubbles = true, ...props }, forwardedRef) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "checkbox",
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
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
	return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
//#endregion
//#region src/components/ui/switch.tsx
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	"data-uid": "src/components/ui/switch.tsx:11:3",
	"data-prohibitions": "[editContent]",
	className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
		"data-uid": "src/components/ui/switch.tsx:19:5",
		"data-prohibitions": "[editContent]",
		className: cn("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
	})
}));
Switch.displayName = Root.displayName;
//#endregion
//#region src/pages/configuracoes.tsx
function Configuracoes() {
	const { theme, setTheme } = useTheme();
	const handleSave = (e) => {
		e.preventDefault();
		toast.success("Configurações atualizadas!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/configuracoes.tsx:25:5",
		"data-prohibitions": "[]",
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/configuracoes.tsx:26:7",
			"data-prohibitions": "[]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/configuracoes.tsx:27:9",
				"data-prohibitions": "[]",
				className: "text-3xl font-bold tracking-tight",
				children: "Configurações"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/configuracoes.tsx:28:9",
				"data-prohibitions": "[]",
				className: "text-muted-foreground",
				children: "Gerencie suas preferências de conta e sistema."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/configuracoes.tsx:31:7",
			"data-prohibitions": "[]",
			className: "grid grid-cols-1 md:grid-cols-3 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/configuracoes.tsx:32:9",
				"data-prohibitions": "[]",
				className: "md:col-span-2 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					"data-uid": "src/pages/configuracoes.tsx:33:11",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						"data-uid": "src/pages/configuracoes.tsx:34:13",
						"data-prohibitions": "[]",
						onSubmit: handleSave,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
								"data-uid": "src/pages/configuracoes.tsx:35:15",
								"data-prohibitions": "[]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									"data-uid": "src/pages/configuracoes.tsx:36:17",
									"data-prohibitions": "[]",
									children: "Perfil de Usuário"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									"data-uid": "src/pages/configuracoes.tsx:37:17",
									"data-prohibitions": "[]",
									children: "Atualize suas informações pessoais."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								"data-uid": "src/pages/configuracoes.tsx:39:15",
								"data-prohibitions": "[]",
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/configuracoes.tsx:40:17",
									"data-prohibitions": "[]",
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/configuracoes.tsx:41:19",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/configuracoes.tsx:42:21",
											"data-prohibitions": "[]",
											htmlFor: "nome",
											children: "Nome"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											"data-uid": "src/pages/configuracoes.tsx:43:21",
											"data-prohibitions": "[editContent]",
											id: "nome",
											defaultValue: "Administrador"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/configuracoes.tsx:45:19",
										"data-prohibitions": "[]",
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											"data-uid": "src/pages/configuracoes.tsx:46:21",
											"data-prohibitions": "[]",
											htmlFor: "sobrenome",
											children: "Sobrenome"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											"data-uid": "src/pages/configuracoes.tsx:47:21",
											"data-prohibitions": "[editContent]",
											id: "sobrenome",
											defaultValue: "Sistema"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/configuracoes.tsx:50:17",
									"data-prohibitions": "[]",
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										"data-uid": "src/pages/configuracoes.tsx:51:19",
										"data-prohibitions": "[]",
										htmlFor: "email",
										children: "E-mail Corporativo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"data-uid": "src/pages/configuracoes.tsx:52:19",
										"data-prohibitions": "[editContent]",
										id: "email",
										type: "email",
										defaultValue: "admin@telecuidar.com"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
								"data-uid": "src/pages/configuracoes.tsx:55:15",
								"data-prohibitions": "[]",
								className: "justify-end border-t pt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"data-uid": "src/pages/configuracoes.tsx:56:17",
									"data-prohibitions": "[]",
									type: "submit",
									children: "Salvar Perfil"
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					"data-uid": "src/pages/configuracoes.tsx:61:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						"data-uid": "src/pages/configuracoes.tsx:62:13",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							"data-uid": "src/pages/configuracoes.tsx:63:15",
							"data-prohibitions": "[]",
							children: "Segurança"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							"data-uid": "src/pages/configuracoes.tsx:64:15",
							"data-prohibitions": "[]",
							children: "Gerencie opções de segurança da conta."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						"data-uid": "src/pages/configuracoes.tsx:66:13",
						"data-prohibitions": "[]",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/configuracoes.tsx:67:15",
							"data-prohibitions": "[]",
							className: "flex items-center justify-between border-b pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/configuracoes.tsx:68:17",
								"data-prohibitions": "[]",
								className: "space-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/configuracoes.tsx:69:19",
									"data-prohibitions": "[]",
									children: "Autenticação de Dois Fatores (2FA)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									"data-uid": "src/pages/configuracoes.tsx:70:19",
									"data-prohibitions": "[]",
									className: "text-sm text-muted-foreground",
									children: "Adicione uma camada extra de segurança."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								"data-uid": "src/pages/configuracoes.tsx:74:17",
								"data-prohibitions": "[editContent]"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-uid": "src/pages/configuracoes.tsx:76:15",
							"data-prohibitions": "[]",
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								"data-uid": "src/pages/configuracoes.tsx:77:17",
								"data-prohibitions": "[]",
								variant: "outline",
								children: "Alterar Senha"
							})
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/configuracoes.tsx:83:9",
				"data-prohibitions": "[]",
				className: "md:col-span-1 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					"data-uid": "src/pages/configuracoes.tsx:84:11",
					"data-prohibitions": "[]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						"data-uid": "src/pages/configuracoes.tsx:85:13",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							"data-uid": "src/pages/configuracoes.tsx:86:15",
							"data-prohibitions": "[]",
							children: "Aparência"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
							"data-uid": "src/pages/configuracoes.tsx:87:15",
							"data-prohibitions": "[]",
							children: "Personalize a interface."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
						"data-uid": "src/pages/configuracoes.tsx:89:13",
						"data-prohibitions": "[]",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/configuracoes.tsx:90:15",
							"data-prohibitions": "[]",
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/configuracoes.tsx:91:17",
								"data-prohibitions": "[]",
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/configuracoes.tsx:92:19",
									"data-prohibitions": "[]",
									children: "Modo Escuro"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									"data-uid": "src/pages/configuracoes.tsx:93:19",
									"data-prohibitions": "[editContent]",
									checked: theme === "dark",
									onCheckedChange: (checked) => setTheme(checked ? "dark" : "light")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/configuracoes.tsx:98:17",
								"data-prohibitions": "[]",
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									"data-uid": "src/pages/configuracoes.tsx:99:19",
									"data-prohibitions": "[]",
									children: "Tema do Sistema"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									"data-uid": "src/pages/configuracoes.tsx:100:19",
									"data-prohibitions": "[editContent]",
									checked: theme === "system",
									onCheckedChange: (checked) => {
										if (checked) setTheme("system");
									}
								})]
							})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					"data-uid": "src/pages/configuracoes.tsx:111:11",
					"data-prohibitions": "[]",
					className: "bg-destructive/5 border-destructive/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
						"data-uid": "src/pages/configuracoes.tsx:112:13",
						"data-prohibitions": "[]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							"data-uid": "src/pages/configuracoes.tsx:113:15",
							"data-prohibitions": "[]",
							className: "text-destructive",
							children: "Zona de Perigo"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						"data-uid": "src/pages/configuracoes.tsx:115:13",
						"data-prohibitions": "[]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/configuracoes.tsx:116:15",
							"data-prohibitions": "[]",
							className: "text-sm text-muted-foreground mb-4",
							children: "Ações irreversíveis para a sua conta."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							"data-uid": "src/pages/configuracoes.tsx:119:15",
							"data-prohibitions": "[]",
							variant: "destructive",
							className: "w-full",
							children: "Desativar Conta"
						})]
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { Configuracoes as default };

//# sourceMappingURL=configuracoes-Bs_DLkCw.js.map