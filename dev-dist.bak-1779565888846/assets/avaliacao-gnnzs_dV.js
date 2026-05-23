import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DS_FmaYW.js";
import { B as createContextScope, C as useId, H as composeEventHandlers, L as Primitive, M as Presence, i as useDirection, j as useControllableState, n as Root, p as Button, r as createRovingFocusGroupScope, t as Item, w as toast } from "./index-B9BWHv2W.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-BfYMebor.js";
import { t as Label } from "./label-DpFRYoy2.js";
import { t as Textarea } from "./textarea-BOpSc362.js";
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/@radix-ui+react-tabs@1.1.13_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@_5e386818c1a7a76f48d01b1b7ff302b8/node_modules/@radix-ui/react-tabs/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [createRovingFocusGroupScope]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
	const direction = useDirection(dir);
	const [value, setValue] = useControllableState({
		prop: valueProp,
		onChange: onValueChange,
		defaultProp: defaultValue ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsProvider, {
		scope: __scopeTabs,
		baseId: useId(),
		value,
		onValueChange: setValue,
		orientation,
		dir: direction,
		activationMode,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: direction,
			"data-orientation": orientation,
			...tabsProps,
			ref: forwardedRef
		})
	});
});
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, loop = true, ...listProps } = props;
	const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		asChild: true,
		...rovingFocusGroupScope,
		orientation: context.orientation,
		dir: context.dir,
		loop,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "tablist",
			"aria-orientation": context.orientation,
			...listProps,
			ref: forwardedRef
		})
	});
});
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
	const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
	const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: true,
		...rovingFocusGroupScope,
		focusable: !disabled,
		active: isSelected,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": isSelected,
			"aria-controls": contentId,
			"data-state": isSelected ? "active" : "inactive",
			"data-disabled": disabled ? "" : void 0,
			disabled,
			id: triggerId,
			...triggerProps,
			ref: forwardedRef,
			onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
				if (!disabled && event.button === 0 && event.ctrlKey === false) context.onValueChange(value);
				else event.preventDefault();
			}),
			onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
				if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
			}),
			onFocus: composeEventHandlers(props.onFocus, () => {
				const isAutomaticActivation = context.activationMode !== "manual";
				if (!isSelected && !disabled && isAutomaticActivation) context.onValueChange(value);
			})
		})
	});
});
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = import_react.forwardRef((props, forwardedRef) => {
	const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
	const context = useTabsContext(CONTENT_NAME, __scopeTabs);
	const triggerId = makeTriggerId(context.baseId, value);
	const contentId = makeContentId(context.baseId, value);
	const isSelected = value === context.value;
	const isMountAnimationPreventedRef = import_react.useRef(isSelected);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isSelected,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": isSelected ? "active" : "inactive",
			"data-orientation": context.orientation,
			role: "tabpanel",
			"aria-labelledby": triggerId,
			hidden: !present,
			id: contentId,
			tabIndex: 0,
			...contentProps,
			ref: forwardedRef,
			style: {
				...props.style,
				animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
			},
			children: present && children
		})
	});
});
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
var Root2 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content = TabsContent$1;
//#endregion
//#region src/components/ui/tabs.tsx
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	"data-uid": "src/components/ui/tabs.tsx:13:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	"data-uid": "src/components/ui/tabs.tsx:28:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	"data-uid": "src/components/ui/tabs.tsx:43:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
//#endregion
//#region src/pages/avaliacao.tsx
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

//# sourceMappingURL=avaliacao-gnnzs_dV.js.map