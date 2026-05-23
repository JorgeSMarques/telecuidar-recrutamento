import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BnJ5Yb7Y.js";
import { A as createLucideIcon, f as Input, g as Skeleton, h as Slot, p as Button, w as toast } from "./index-CQ1crPcp.js";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-De4u1zBy.js";
import { t as Label } from "./label-Cx0N7HW8.js";
import { t as Textarea } from "./textarea-Hww7JyuG.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CDV2s-PF.js";
import { a as useFormContext, c as object, i as useForm, l as string, n as Controller, o as literal, r as FormProvider, t as a } from "./zod-D6IzupwC.js";
import { D as getTicksOfAxis, E as getCoordinatesOfGrid, F as ResponsiveContainer, K as isNumber, V as filterProps, Z as require_isFunction, c as CartesianAxis, d as useChartHeight, f as useChartWidth, h as Bar, i as BarChart, l as getTicks, m as useYAxisWithFiniteDomainOrRandom, n as ChartTooltip, o as YAxis, p as useOffset, r as ChartTooltipContent, s as XAxis, t as ChartContainer, u as useArbitraryXAxis, z as warn } from "./chart-BZoX4wCE.js";
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
var Send = createLucideIcon("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
var Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
//#endregion
//#region src/components/ui/form.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Form = FormProvider;
var FormFieldContext = import_react.createContext({});
var FormField = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormFieldContext.Provider, {
		"data-uid": "src/components/ui/form.tsx:35:5",
		"data-prohibitions": "[]",
		value: { name: props.name },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
			"data-uid": "src/components/ui/form.tsx:36:7",
			"data-prohibitions": "[editContent]",
			...props
		})
	});
};
var useFormField = () => {
	const fieldContext = import_react.useContext(FormFieldContext);
	const itemContext = import_react.useContext(FormItemContext);
	const { getFieldState, formState } = useFormContext();
	const fieldState = getFieldState(fieldContext.name, formState);
	if (!fieldContext) throw new Error("useFormField should be used within <FormField>");
	const { id } = itemContext;
	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState
	};
};
var FormItemContext = import_react.createContext({});
var FormItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const id = import_react.useId();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormItemContext.Provider, {
		"data-uid": "src/components/ui/form.tsx:75:7",
		"data-prohibitions": "[editContent]",
		value: { id },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-uid": "src/components/ui/form.tsx:76:9",
			"data-prohibitions": "[editContent]",
			ref,
			className: cn(className),
			...props
		})
	});
});
FormItem.displayName = "FormItem";
var FormLabel = import_react.forwardRef(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		"data-uid": "src/components/ui/form.tsx:90:5",
		"data-prohibitions": "[editContent]",
		ref,
		className: cn(error && "text-destructive", className),
		htmlFor: formItemId,
		...props
	});
});
FormLabel.displayName = "FormLabel";
var FormControl = import_react.forwardRef(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
		"data-uid": "src/components/ui/form.tsx:107:5",
		"data-prohibitions": "[editContent]",
		ref,
		id: formItemId,
		"aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
		"aria-invalid": !!error,
		...props
	});
});
FormControl.displayName = "FormControl";
var FormDescription = import_react.forwardRef(({ className, ...props }, ref) => {
	const { formDescriptionId } = useFormField();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		"data-uid": "src/components/ui/form.tsx:125:5",
		"data-prohibitions": "[editContent]",
		ref,
		id: formDescriptionId,
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
});
FormDescription.displayName = "FormDescription";
var FormMessage = import_react.forwardRef(({ className, children, ...props }, ref) => {
	const { error, formMessageId } = useFormField();
	const body = error ? String(error?.message ?? "") : children;
	if (!body) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		"data-uid": "src/components/ui/form.tsx:147:5",
		"data-prohibitions": "[editContent]",
		ref,
		id: formMessageId,
		className: cn("text-[0.75rem] font-medium text-destructive mt-1.5", className),
		...props,
		children: body
	});
});
FormMessage.displayName = "FormMessage";
//#endregion
//#region src/services/captureService.ts
var submitCaptureForm = async (data) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				success: true,
				data
			});
		}, 1500);
	});
};
//#endregion
//#region src/components/captacao/capture-form.tsx
var formSchema = object({
	nome: string().min(3, "Mínimo de 3 caracteres").max(100, "Máximo 100 caracteres"),
	email: string().email("E-mail inválido"),
	telefone: string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Deve ser (XX) XXXXX-XXXX"),
	linkedin: string().url("URL inválida").optional().or(literal("")),
	profissao: string().min(1, "Selecione a profissão"),
	especialidade: string().min(1, "Campo obrigatório").max(100, "Máximo 100 caracteres"),
	experienciaTotal: string().min(1, "Selecione a experiência"),
	experienciaSus: string().min(1, "Selecione a experiência"),
	descricaoSus: string().max(500, "Máximo 500 caracteres").optional(),
	experienciaTelemedicina: string().min(1, "Selecione a experiência"),
	descricaoTelemedicina: string().max(500, "Máximo 500 caracteres").optional(),
	canal: string().min(1, "Selecione o canal"),
	canalOutro: string().max(100, "Máximo 100 caracteres").optional()
}).refine((d) => d.canal !== "Outro" || !!d.canalOutro, {
	message: "Especifique o canal",
	path: ["canalOutro"]
});
var defaultValues = {
	nome: "",
	email: "",
	telefone: "",
	linkedin: "",
	profissao: "",
	especialidade: "",
	experienciaTotal: "",
	experienciaSus: "",
	descricaoSus: "",
	experienciaTelemedicina: "",
	descricaoTelemedicina: "",
	canal: "",
	canalOutro: ""
};
var OPT = {
	prof: [
		"Médico",
		"Enfermeiro",
		"Psicólogo",
		"Nutricionista",
		"Fisioterapeuta",
		"Outro"
	],
	exp: [
		"Menos de 2 anos",
		"2-5 anos",
		"5-10 anos",
		"10-15 anos",
		"Mais de 15 anos"
	],
	sus: [
		"Nenhuma",
		"Menos de 1 ano",
		"1-3 anos",
		"3-5 anos",
		"Mais de 5 anos"
	],
	tele: ["Nenhuma", "Sim, tenho experiência"],
	canal: [
		"LinkedIn",
		"Google Ads",
		"Instagram",
		"E-mail",
		"Contato Direto",
		"Comunidade/Associação",
		"Parceria",
		"Outro"
	]
};
function CaptureForm() {
	const [isHydrated, setIsHydrated] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: a(formSchema),
		defaultValues,
		mode: "onChange"
	});
	const canal = form.watch("canal");
	(0, import_react.useEffect)(() => {
		const draft = localStorage.getItem("captacao-draft");
		if (draft) try {
			form.reset(JSON.parse(draft));
		} catch (e) {
			console.error(e);
		}
		setIsHydrated(true);
	}, [form]);
	(0, import_react.useEffect)(() => {
		if (!isHydrated) return;
		let timeoutId;
		const sub = form.watch((value) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => localStorage.setItem("captacao-draft", JSON.stringify(value)), 500);
		});
		return () => {
			clearTimeout(timeoutId);
			sub.unsubscribe();
		};
	}, [form, isHydrated]);
	const onSubmit = async (data) => {
		try {
			await submitCaptureForm(data);
			toast.success("Candidatura enviada com sucesso! Você receberá um e-mail de confirmação.");
			form.reset(defaultValues);
			localStorage.removeItem("captacao-draft");
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} catch {
			toast.error("Não foi possível enviar a candidatura. Tente novamente.");
		}
	};
	const formatPhone = (val) => {
		let v = val.replace(/\D/g, "");
		if (v.length > 11) v = v.slice(0, 11);
		if (v.length > 10) return v.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
		if (v.length > 6) return v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
		if (v.length > 2) return v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
		return v;
	};
	if (!isHydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		"data-uid": "src/components/captacao/capture-form.tsx:145:7",
		"data-prohibitions": "[]",
		className: "border shadow-subtle rounded-xl overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			"data-uid": "src/components/captacao/capture-form.tsx:146:9",
			"data-prohibitions": "[]",
			className: "p-4 md:p-6 lg:p-8 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/components/captacao/capture-form.tsx:147:11",
					"data-prohibitions": "[editContent]",
					className: "h-10 w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/components/captacao/capture-form.tsx:148:11",
					"data-prohibitions": "[editContent]",
					className: "h-[200px] w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/components/captacao/capture-form.tsx:149:11",
					"data-prohibitions": "[editContent]",
					className: "h-[200px] w-full"
				})
			]
		})
	});
	const isSubmitting = form.formState.isSubmitting;
	const isValid = form.formState.isValid;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		"data-uid": "src/components/captacao/capture-form.tsx:158:5",
		"data-prohibitions": "[editContent]",
		className: "border shadow-subtle rounded-xl overflow-hidden bg-card text-card-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			"data-uid": "src/components/captacao/capture-form.tsx:159:7",
			"data-prohibitions": "[editContent]",
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				"data-uid": "src/components/captacao/capture-form.tsx:160:9",
				"data-prohibitions": "[editContent]",
				onSubmit: form.handleSubmit(onSubmit),
				className: "p-4 md:p-6 lg:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						"data-uid": "src/components/captacao/capture-form.tsx:161:11",
						"data-prohibitions": "[]",
						className: "mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							"data-uid": "src/components/captacao/capture-form.tsx:162:13",
							"data-prohibitions": "[]",
							className: "text-[1.125rem] font-semibold mb-4 w-full",
							children: "Dados Pessoais"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/captacao/capture-form.tsx:163:13",
							"data-prohibitions": "[]",
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									"data-uid": "src/components/captacao/capture-form.tsx:164:15",
									"data-prohibitions": "[editContent]",
									control: form.control,
									name: "nome",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										"data-uid": "src/components/captacao/capture-form.tsx:168:19",
										"data-prohibitions": "[]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												"data-uid": "src/components/captacao/capture-form.tsx:169:21",
												"data-prohibitions": "[]",
												children: "Nome"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
												"data-uid": "src/components/captacao/capture-form.tsx:170:21",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													"data-uid": "src/components/captacao/capture-form.tsx:171:23",
													"data-prohibitions": "[editContent]",
													...field,
													"aria-required": true
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
												"data-uid": "src/components/captacao/capture-form.tsx:173:21",
												"data-prohibitions": "[editContent]"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									"data-uid": "src/components/captacao/capture-form.tsx:177:15",
									"data-prohibitions": "[editContent]",
									control: form.control,
									name: "email",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										"data-uid": "src/components/captacao/capture-form.tsx:181:19",
										"data-prohibitions": "[]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												"data-uid": "src/components/captacao/capture-form.tsx:182:21",
												"data-prohibitions": "[]",
												children: "E-mail"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
												"data-uid": "src/components/captacao/capture-form.tsx:183:21",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													"data-uid": "src/components/captacao/capture-form.tsx:184:23",
													"data-prohibitions": "[editContent]",
													type: "email",
													...field,
													"aria-required": true
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
												"data-uid": "src/components/captacao/capture-form.tsx:186:21",
												"data-prohibitions": "[editContent]"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									"data-uid": "src/components/captacao/capture-form.tsx:190:15",
									"data-prohibitions": "[editContent]",
									control: form.control,
									name: "telefone",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										"data-uid": "src/components/captacao/capture-form.tsx:194:19",
										"data-prohibitions": "[]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												"data-uid": "src/components/captacao/capture-form.tsx:195:21",
												"data-prohibitions": "[]",
												children: "Telefone"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
												"data-uid": "src/components/captacao/capture-form.tsx:196:21",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													"data-uid": "src/components/captacao/capture-form.tsx:197:23",
													"data-prohibitions": "[editContent]",
													placeholder: "(XX) XXXXX-XXXX",
													...field,
													"aria-required": true,
													onChange: (e) => field.onChange(formatPhone(e.target.value))
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
												"data-uid": "src/components/captacao/capture-form.tsx:204:21",
												"data-prohibitions": "[editContent]"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									"data-uid": "src/components/captacao/capture-form.tsx:208:15",
									"data-prohibitions": "[editContent]",
									control: form.control,
									name: "linkedin",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										"data-uid": "src/components/captacao/capture-form.tsx:212:19",
										"data-prohibitions": "[]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												"data-uid": "src/components/captacao/capture-form.tsx:213:21",
												"data-prohibitions": "[]",
												children: "LinkedIn URL"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
												"data-uid": "src/components/captacao/capture-form.tsx:214:21",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													"data-uid": "src/components/captacao/capture-form.tsx:215:23",
													"data-prohibitions": "[editContent]",
													type: "url",
													placeholder: "https://...",
													...field
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
												"data-uid": "src/components/captacao/capture-form.tsx:217:21",
												"data-prohibitions": "[editContent]"
											})
										]
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						"data-uid": "src/components/captacao/capture-form.tsx:224:11",
						"data-prohibitions": "[]",
						className: "mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							"data-uid": "src/components/captacao/capture-form.tsx:225:13",
							"data-prohibitions": "[]",
							className: "text-[1.125rem] font-semibold mb-4 w-full",
							children: "Profissão e Especialidade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/captacao/capture-form.tsx:228:13",
							"data-prohibitions": "[]",
							className: "grid grid-cols-1 md:grid-cols-3 gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									"data-uid": "src/components/captacao/capture-form.tsx:229:15",
									"data-prohibitions": "[editContent]",
									control: form.control,
									name: "profissao",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										"data-uid": "src/components/captacao/capture-form.tsx:233:19",
										"data-prohibitions": "[editContent]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												"data-uid": "src/components/captacao/capture-form.tsx:234:21",
												"data-prohibitions": "[]",
												children: "Profissão"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												"data-uid": "src/components/captacao/capture-form.tsx:235:21",
												"data-prohibitions": "[editContent]",
												onValueChange: field.onChange,
												value: field.value,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/components/captacao/capture-form.tsx:236:23",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														"data-uid": "src/components/captacao/capture-form.tsx:237:25",
														"data-prohibitions": "[]",
														"aria-required": true,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
															"data-uid": "src/components/captacao/capture-form.tsx:238:27",
															"data-prohibitions": "[editContent]",
															placeholder: "Selecione"
														})
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
													"data-uid": "src/components/captacao/capture-form.tsx:241:23",
													"data-prohibitions": "[editContent]",
													children: OPT.prof.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														"data-uid": "src/components/captacao/capture-form.tsx:243:27",
														"data-prohibitions": "[editContent]",
														value: p,
														children: p
													}, p))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
												"data-uid": "src/components/captacao/capture-form.tsx:249:21",
												"data-prohibitions": "[editContent]"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									"data-uid": "src/components/captacao/capture-form.tsx:253:15",
									"data-prohibitions": "[editContent]",
									control: form.control,
									name: "especialidade",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										"data-uid": "src/components/captacao/capture-form.tsx:257:19",
										"data-prohibitions": "[]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												"data-uid": "src/components/captacao/capture-form.tsx:258:21",
												"data-prohibitions": "[]",
												children: "Especialidade"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
												"data-uid": "src/components/captacao/capture-form.tsx:259:21",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													"data-uid": "src/components/captacao/capture-form.tsx:260:23",
													"data-prohibitions": "[editContent]",
													...field,
													"aria-required": true
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
												"data-uid": "src/components/captacao/capture-form.tsx:262:21",
												"data-prohibitions": "[editContent]"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									"data-uid": "src/components/captacao/capture-form.tsx:266:15",
									"data-prohibitions": "[editContent]",
									control: form.control,
									name: "experienciaTotal",
									render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
										"data-uid": "src/components/captacao/capture-form.tsx:270:19",
										"data-prohibitions": "[editContent]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
												"data-uid": "src/components/captacao/capture-form.tsx:271:21",
												"data-prohibitions": "[]",
												children: "Experiência Total"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												"data-uid": "src/components/captacao/capture-form.tsx:272:21",
												"data-prohibitions": "[editContent]",
												onValueChange: field.onChange,
												value: field.value,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
													"data-uid": "src/components/captacao/capture-form.tsx:273:23",
													"data-prohibitions": "[]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														"data-uid": "src/components/captacao/capture-form.tsx:274:25",
														"data-prohibitions": "[]",
														"aria-required": true,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
															"data-uid": "src/components/captacao/capture-form.tsx:275:27",
															"data-prohibitions": "[editContent]",
															placeholder: "Selecione"
														})
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
													"data-uid": "src/components/captacao/capture-form.tsx:278:23",
													"data-prohibitions": "[editContent]",
													children: OPT.exp.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														"data-uid": "src/components/captacao/capture-form.tsx:280:27",
														"data-prohibitions": "[editContent]",
														value: p,
														children: p
													}, p))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
												"data-uid": "src/components/captacao/capture-form.tsx:286:21",
												"data-prohibitions": "[editContent]"
											})
										]
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						"data-uid": "src/components/captacao/capture-form.tsx:293:11",
						"data-prohibitions": "[]",
						className: "mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							"data-uid": "src/components/captacao/capture-form.tsx:294:13",
							"data-prohibitions": "[]",
							className: "text-[1.125rem] font-semibold mb-4 w-full",
							children: "Experiência SUS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/captacao/capture-form.tsx:295:13",
							"data-prohibitions": "[]",
							className: "grid grid-cols-1 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								"data-uid": "src/components/captacao/capture-form.tsx:296:15",
								"data-prohibitions": "[editContent]",
								control: form.control,
								name: "experienciaSus",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
									"data-uid": "src/components/captacao/capture-form.tsx:300:19",
									"data-prohibitions": "[editContent]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
											"data-uid": "src/components/captacao/capture-form.tsx:301:21",
											"data-prohibitions": "[]",
											children: "Tempo de Experiência"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											"data-uid": "src/components/captacao/capture-form.tsx:302:21",
											"data-prohibitions": "[editContent]",
											onValueChange: field.onChange,
											value: field.value,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
												"data-uid": "src/components/captacao/capture-form.tsx:303:23",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													"data-uid": "src/components/captacao/capture-form.tsx:304:25",
													"data-prohibitions": "[]",
													"aria-required": true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
														"data-uid": "src/components/captacao/capture-form.tsx:305:27",
														"data-prohibitions": "[editContent]",
														placeholder: "Selecione"
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												"data-uid": "src/components/captacao/capture-form.tsx:308:23",
												"data-prohibitions": "[editContent]",
												children: OPT.sus.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/components/captacao/capture-form.tsx:310:27",
													"data-prohibitions": "[editContent]",
													value: p,
													children: p
												}, p))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
											"data-uid": "src/components/captacao/capture-form.tsx:316:21",
											"data-prohibitions": "[editContent]"
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								"data-uid": "src/components/captacao/capture-form.tsx:320:15",
								"data-prohibitions": "[editContent]",
								control: form.control,
								name: "descricaoSus",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
									"data-uid": "src/components/captacao/capture-form.tsx:324:19",
									"data-prohibitions": "[]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
											"data-uid": "src/components/captacao/capture-form.tsx:325:21",
											"data-prohibitions": "[]",
											children: "Descrição da Experiência"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
											"data-uid": "src/components/captacao/capture-form.tsx:326:21",
											"data-prohibitions": "[]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												"data-uid": "src/components/captacao/capture-form.tsx:327:23",
												"data-prohibitions": "[editContent]",
												...field
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
											"data-uid": "src/components/captacao/capture-form.tsx:329:21",
											"data-prohibitions": "[editContent]"
										})
									]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						"data-uid": "src/components/captacao/capture-form.tsx:336:11",
						"data-prohibitions": "[]",
						className: "mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							"data-uid": "src/components/captacao/capture-form.tsx:337:13",
							"data-prohibitions": "[]",
							className: "text-[1.125rem] font-semibold mb-4 w-full",
							children: "Telemedicina"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/captacao/capture-form.tsx:338:13",
							"data-prohibitions": "[]",
							className: "grid grid-cols-1 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								"data-uid": "src/components/captacao/capture-form.tsx:339:15",
								"data-prohibitions": "[editContent]",
								control: form.control,
								name: "experienciaTelemedicina",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
									"data-uid": "src/components/captacao/capture-form.tsx:343:19",
									"data-prohibitions": "[editContent]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
											"data-uid": "src/components/captacao/capture-form.tsx:344:21",
											"data-prohibitions": "[]",
											children: "Experiência em Telemedicina"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											"data-uid": "src/components/captacao/capture-form.tsx:345:21",
											"data-prohibitions": "[editContent]",
											onValueChange: field.onChange,
											value: field.value,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
												"data-uid": "src/components/captacao/capture-form.tsx:346:23",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													"data-uid": "src/components/captacao/capture-form.tsx:347:25",
													"data-prohibitions": "[]",
													"aria-required": true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
														"data-uid": "src/components/captacao/capture-form.tsx:348:27",
														"data-prohibitions": "[editContent]",
														placeholder: "Selecione"
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												"data-uid": "src/components/captacao/capture-form.tsx:351:23",
												"data-prohibitions": "[editContent]",
												children: OPT.tele.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/components/captacao/capture-form.tsx:353:27",
													"data-prohibitions": "[editContent]",
													value: p,
													children: p
												}, p))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
											"data-uid": "src/components/captacao/capture-form.tsx:359:21",
											"data-prohibitions": "[editContent]"
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								"data-uid": "src/components/captacao/capture-form.tsx:363:15",
								"data-prohibitions": "[editContent]",
								control: form.control,
								name: "descricaoTelemedicina",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
									"data-uid": "src/components/captacao/capture-form.tsx:367:19",
									"data-prohibitions": "[]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
											"data-uid": "src/components/captacao/capture-form.tsx:368:21",
											"data-prohibitions": "[]",
											children: "Descrição da Experiência"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
											"data-uid": "src/components/captacao/capture-form.tsx:369:21",
											"data-prohibitions": "[]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
												"data-uid": "src/components/captacao/capture-form.tsx:370:23",
												"data-prohibitions": "[editContent]",
												...field
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
											"data-uid": "src/components/captacao/capture-form.tsx:372:21",
											"data-prohibitions": "[editContent]"
										})
									]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						"data-uid": "src/components/captacao/capture-form.tsx:379:11",
						"data-prohibitions": "[editContent]",
						className: "mb-8 border-b border-border pb-8 last:mb-0 last:border-0 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							"data-uid": "src/components/captacao/capture-form.tsx:380:13",
							"data-prohibitions": "[]",
							className: "text-[1.125rem] font-semibold mb-4 w-full",
							children: "Canal de Captação"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/components/captacao/capture-form.tsx:381:13",
							"data-prohibitions": "[editContent]",
							className: "grid grid-cols-1 md:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								"data-uid": "src/components/captacao/capture-form.tsx:382:15",
								"data-prohibitions": "[editContent]",
								control: form.control,
								name: "canal",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
									"data-uid": "src/components/captacao/capture-form.tsx:386:19",
									"data-prohibitions": "[editContent]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
											"data-uid": "src/components/captacao/capture-form.tsx:387:21",
											"data-prohibitions": "[]",
											children: "Canal"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											"data-uid": "src/components/captacao/capture-form.tsx:388:21",
											"data-prohibitions": "[editContent]",
											onValueChange: field.onChange,
											value: field.value,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
												"data-uid": "src/components/captacao/capture-form.tsx:389:23",
												"data-prohibitions": "[]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													"data-uid": "src/components/captacao/capture-form.tsx:390:25",
													"data-prohibitions": "[]",
													"aria-required": true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
														"data-uid": "src/components/captacao/capture-form.tsx:391:27",
														"data-prohibitions": "[editContent]",
														placeholder: "Selecione"
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												"data-uid": "src/components/captacao/capture-form.tsx:394:23",
												"data-prohibitions": "[editContent]",
												children: OPT.canal.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													"data-uid": "src/components/captacao/capture-form.tsx:396:27",
													"data-prohibitions": "[editContent]",
													value: p,
													children: p
												}, p))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
											"data-uid": "src/components/captacao/capture-form.tsx:402:21",
											"data-prohibitions": "[editContent]"
										})
									]
								})
							}), canal === "Outro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								"data-uid": "src/components/captacao/capture-form.tsx:407:17",
								"data-prohibitions": "[editContent]",
								control: form.control,
								name: "canalOutro",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
									"data-uid": "src/components/captacao/capture-form.tsx:411:21",
									"data-prohibitions": "[]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
											"data-uid": "src/components/captacao/capture-form.tsx:412:23",
											"data-prohibitions": "[]",
											children: "Especifique"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, {
											"data-uid": "src/components/captacao/capture-form.tsx:413:23",
											"data-prohibitions": "[]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												"data-uid": "src/components/captacao/capture-form.tsx:414:25",
												"data-prohibitions": "[editContent]",
												...field,
												"aria-required": true
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {
											"data-uid": "src/components/captacao/capture-form.tsx:416:23",
											"data-prohibitions": "[editContent]"
										})
									]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/components/captacao/capture-form.tsx:424:11",
						"data-prohibitions": "[editContent]",
						className: "flex flex-col md:flex-row gap-4 mt-8 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							"data-uid": "src/components/captacao/capture-form.tsx:425:13",
							"data-prohibitions": "[editContent]",
							type: "submit",
							disabled: !isValid || isSubmitting,
							className: "w-full md:w-auto",
							children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								"data-uid": "src/components/captacao/capture-form.tsx:427:17",
								"data-prohibitions": "[editContent]",
								className: "w-4 h-4 mr-2 animate-spin"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
								"data-uid": "src/components/captacao/capture-form.tsx:429:17",
								"data-prohibitions": "[editContent]",
								className: "w-4 h-4 mr-2"
							}), "Enviar Candidatura"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							"data-uid": "src/components/captacao/capture-form.tsx:433:13",
							"data-prohibitions": "[]",
							type: "button",
							variant: "outline",
							className: "w-full md:w-auto",
							onClick: () => {
								form.reset(defaultValues);
								localStorage.removeItem("captacao-draft");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
								"data-uid": "src/components/captacao/capture-form.tsx:442:15",
								"data-prohibitions": "[editContent]",
								className: "w-4 h-4 mr-2"
							}), "Limpar Formulário"]
						})]
					})
				]
			})
		})
	});
}
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/recharts@2.15.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/recharts/es6/cartesian/CartesianGrid.js
/**
* @fileOverview Cartesian Grid
*/
var import_isFunction = /* @__PURE__ */ __toESM(require_isFunction());
var _excluded = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], _excluded2 = ["offset"];
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(obj, key, value) {
	key = _toPropertyKey(key);
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends() {
	_extends = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
	if (source == null) return {};
	var target = _objectWithoutPropertiesLoose(source, excluded);
	var key, i;
	if (Object.getOwnPropertySymbols) {
		var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
		for (i = 0; i < sourceSymbolKeys.length; i++) {
			key = sourceSymbolKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
			target[key] = source[key];
		}
	}
	return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) {
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
/**
* The <CartesianGrid horizontal
*/
var Background = function Background(props) {
	var fill = props.fill;
	if (!fill || fill === "none") return null;
	var fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, ry = props.ry;
	return /* @__PURE__ */ import_react.createElement("rect", {
		x,
		y,
		ry,
		width,
		height,
		stroke: "none",
		fill,
		fillOpacity,
		className: "recharts-cartesian-grid-bg"
	});
};
function renderLineItem(option, props) {
	var lineItem;
	if (/* @__PURE__ */ import_react.isValidElement(option)) lineItem = /* @__PURE__ */ import_react.cloneElement(option, props);
	else if ((0, import_isFunction.default)(option)) lineItem = option(props);
	else {
		var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2, key = props.key, _filterProps = filterProps(_objectWithoutProperties(props, _excluded), false);
		_filterProps.offset;
		var restOfFilteredProps = _objectWithoutProperties(_filterProps, _excluded2);
		lineItem = /* @__PURE__ */ import_react.createElement("line", _extends({}, restOfFilteredProps, {
			x1,
			y1,
			x2,
			y2,
			fill: "none",
			key
		}));
	}
	return lineItem;
}
function HorizontalGridLines(props) {
	var x = props.x, width = props.width, _props$horizontal = props.horizontal, horizontal = _props$horizontal === void 0 ? true : _props$horizontal, horizontalPoints = props.horizontalPoints;
	if (!horizontal || !horizontalPoints || !horizontalPoints.length) return null;
	var items = horizontalPoints.map(function(entry, i) {
		return renderLineItem(horizontal, _objectSpread(_objectSpread({}, props), {}, {
			x1: x,
			y1: entry,
			x2: x + width,
			y2: entry,
			key: "line-".concat(i),
			index: i
		}));
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, items);
}
function VerticalGridLines(props) {
	var y = props.y, height = props.height, _props$vertical = props.vertical, vertical = _props$vertical === void 0 ? true : _props$vertical, verticalPoints = props.verticalPoints;
	if (!vertical || !verticalPoints || !verticalPoints.length) return null;
	var items = verticalPoints.map(function(entry, i) {
		return renderLineItem(vertical, _objectSpread(_objectSpread({}, props), {}, {
			x1: entry,
			y1: y,
			x2: entry,
			y2: y + height,
			key: "line-".concat(i),
			index: i
		}));
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid-vertical" }, items);
}
function HorizontalStripes(props) {
	var horizontalFill = props.horizontalFill, fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, horizontalPoints = props.horizontalPoints, _props$horizontal2 = props.horizontal;
	if (!(_props$horizontal2 === void 0 ? true : _props$horizontal2) || !horizontalFill || !horizontalFill.length) return null;
	var roundedSortedHorizontalPoints = horizontalPoints.map(function(e) {
		return Math.round(e + y - y);
	}).sort(function(a, b) {
		return a - b;
	});
	if (y !== roundedSortedHorizontalPoints[0]) roundedSortedHorizontalPoints.unshift(0);
	var items = roundedSortedHorizontalPoints.map(function(entry, i) {
		var lineHeight = !roundedSortedHorizontalPoints[i + 1] ? y + height - entry : roundedSortedHorizontalPoints[i + 1] - entry;
		if (lineHeight <= 0) return null;
		var colorIndex = i % horizontalFill.length;
		return /* @__PURE__ */ import_react.createElement("rect", {
			key: "react-".concat(i),
			y: entry,
			x,
			height: lineHeight,
			width,
			stroke: "none",
			fill: horizontalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, items);
}
function VerticalStripes(props) {
	var _props$vertical2 = props.vertical, vertical = _props$vertical2 === void 0 ? true : _props$vertical2, verticalFill = props.verticalFill, fillOpacity = props.fillOpacity, x = props.x, y = props.y, width = props.width, height = props.height, verticalPoints = props.verticalPoints;
	if (!vertical || !verticalFill || !verticalFill.length) return null;
	var roundedSortedVerticalPoints = verticalPoints.map(function(e) {
		return Math.round(e + x - x);
	}).sort(function(a, b) {
		return a - b;
	});
	if (x !== roundedSortedVerticalPoints[0]) roundedSortedVerticalPoints.unshift(0);
	var items = roundedSortedVerticalPoints.map(function(entry, i) {
		var lineWidth = !roundedSortedVerticalPoints[i + 1] ? x + width - entry : roundedSortedVerticalPoints[i + 1] - entry;
		if (lineWidth <= 0) return null;
		var colorIndex = i % verticalFill.length;
		return /* @__PURE__ */ import_react.createElement("rect", {
			key: "react-".concat(i),
			x: entry,
			y,
			width: lineWidth,
			height,
			stroke: "none",
			fill: verticalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, items);
}
var defaultVerticalCoordinatesGenerator = function defaultVerticalCoordinatesGenerator(_ref, syncWithTicks) {
	var xAxis = _ref.xAxis, width = _ref.width, height = _ref.height, offset = _ref.offset;
	return getCoordinatesOfGrid(getTicks(_objectSpread(_objectSpread(_objectSpread({}, CartesianAxis.defaultProps), xAxis), {}, {
		ticks: getTicksOfAxis(xAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = function defaultHorizontalCoordinatesGenerator(_ref2, syncWithTicks) {
	var yAxis = _ref2.yAxis, width = _ref2.width, height = _ref2.height, offset = _ref2.offset;
	return getCoordinatesOfGrid(getTicks(_objectSpread(_objectSpread(_objectSpread({}, CartesianAxis.defaultProps), yAxis), {}, {
		ticks: getTicksOfAxis(yAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultProps = {
	horizontal: true,
	vertical: true,
	horizontalPoints: [],
	verticalPoints: [],
	stroke: "#ccc",
	fill: "none",
	verticalFill: [],
	horizontalFill: []
};
function CartesianGrid(props) {
	var _props$stroke, _props$fill, _props$horizontal3, _props$horizontalFill, _props$vertical3, _props$verticalFill;
	var chartWidth = useChartWidth();
	var chartHeight = useChartHeight();
	var offset = useOffset();
	var propsIncludingDefaults = _objectSpread(_objectSpread({}, props), {}, {
		stroke: (_props$stroke = props.stroke) !== null && _props$stroke !== void 0 ? _props$stroke : defaultProps.stroke,
		fill: (_props$fill = props.fill) !== null && _props$fill !== void 0 ? _props$fill : defaultProps.fill,
		horizontal: (_props$horizontal3 = props.horizontal) !== null && _props$horizontal3 !== void 0 ? _props$horizontal3 : defaultProps.horizontal,
		horizontalFill: (_props$horizontalFill = props.horizontalFill) !== null && _props$horizontalFill !== void 0 ? _props$horizontalFill : defaultProps.horizontalFill,
		vertical: (_props$vertical3 = props.vertical) !== null && _props$vertical3 !== void 0 ? _props$vertical3 : defaultProps.vertical,
		verticalFill: (_props$verticalFill = props.verticalFill) !== null && _props$verticalFill !== void 0 ? _props$verticalFill : defaultProps.verticalFill,
		x: isNumber(props.x) ? props.x : offset.left,
		y: isNumber(props.y) ? props.y : offset.top,
		width: isNumber(props.width) ? props.width : offset.width,
		height: isNumber(props.height) ? props.height : offset.height
	});
	var x = propsIncludingDefaults.x, y = propsIncludingDefaults.y, width = propsIncludingDefaults.width, height = propsIncludingDefaults.height, syncWithTicks = propsIncludingDefaults.syncWithTicks, horizontalValues = propsIncludingDefaults.horizontalValues, verticalValues = propsIncludingDefaults.verticalValues;
	var xAxis = useArbitraryXAxis();
	var yAxis = useYAxisWithFiniteDomainOrRandom();
	if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0 || !isNumber(x) || x !== +x || !isNumber(y) || y !== +y) return null;
	var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
	var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
	var horizontalPoints = propsIncludingDefaults.horizontalPoints, verticalPoints = propsIncludingDefaults.verticalPoints;
	if ((!horizontalPoints || !horizontalPoints.length) && (0, import_isFunction.default)(horizontalCoordinatesGenerator)) {
		var isHorizontalValues = horizontalValues && horizontalValues.length;
		var generatorResult = horizontalCoordinatesGenerator({
			yAxis: yAxis ? _objectSpread(_objectSpread({}, yAxis), {}, { ticks: isHorizontalValues ? horizontalValues : yAxis.ticks }) : void 0,
			width: chartWidth,
			height: chartHeight,
			offset
		}, isHorizontalValues ? true : syncWithTicks);
		warn(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(generatorResult), "]"));
		if (Array.isArray(generatorResult)) horizontalPoints = generatorResult;
	}
	if ((!verticalPoints || !verticalPoints.length) && (0, import_isFunction.default)(verticalCoordinatesGenerator)) {
		var isVerticalValues = verticalValues && verticalValues.length;
		var _generatorResult = verticalCoordinatesGenerator({
			xAxis: xAxis ? _objectSpread(_objectSpread({}, xAxis), {}, { ticks: isVerticalValues ? verticalValues : xAxis.ticks }) : void 0,
			width: chartWidth,
			height: chartHeight,
			offset
		}, isVerticalValues ? true : syncWithTicks);
		warn(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof(_generatorResult), "]"));
		if (Array.isArray(_generatorResult)) verticalPoints = _generatorResult;
	}
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid" }, /* @__PURE__ */ import_react.createElement(Background, {
		fill: propsIncludingDefaults.fill,
		fillOpacity: propsIncludingDefaults.fillOpacity,
		x: propsIncludingDefaults.x,
		y: propsIncludingDefaults.y,
		width: propsIncludingDefaults.width,
		height: propsIncludingDefaults.height,
		ry: propsIncludingDefaults.ry
	}), /* @__PURE__ */ import_react.createElement(HorizontalGridLines, _extends({}, propsIncludingDefaults, {
		offset,
		horizontalPoints,
		xAxis,
		yAxis
	})), /* @__PURE__ */ import_react.createElement(VerticalGridLines, _extends({}, propsIncludingDefaults, {
		offset,
		verticalPoints,
		xAxis,
		yAxis
	})), /* @__PURE__ */ import_react.createElement(HorizontalStripes, _extends({}, propsIncludingDefaults, { horizontalPoints })), /* @__PURE__ */ import_react.createElement(VerticalStripes, _extends({}, propsIncludingDefaults, { verticalPoints })));
}
CartesianGrid.displayName = "CartesianGrid";
//#endregion
//#region src/components/captacao/channels-summary.tsx
var CHANNELS_DATA = [
	{
		canal: "LinkedIn",
		candidatos: 45,
		conversao: 68
	},
	{
		canal: "Google Ads",
		candidatos: 32,
		conversao: 52
	},
	{
		canal: "Instagram",
		candidatos: 18,
		conversao: 35
	},
	{
		canal: "E-mail",
		candidatos: 12,
		conversao: 40
	},
	{
		canal: "Contato Direto",
		candidatos: 8,
		conversao: 75
	},
	{
		canal: "Comunidade",
		candidatos: 5,
		conversao: 60
	},
	{
		canal: "Parceria",
		candidatos: 3,
		conversao: 80
	},
	{
		canal: "Outro",
		candidatos: 2,
		conversao: 50
	}
];
var chartConfig = { candidatos: {
	label: "Candidatos",
	color: "hsl(var(--primary))"
} };
function ChannelsSummary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/components/captacao/channels-summary.tsx:38:5",
		"data-prohibitions": "[editContent]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			"data-uid": "src/components/captacao/channels-summary.tsx:39:7",
			"data-prohibitions": "[]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/components/captacao/channels-summary.tsx:40:9",
				"data-prohibitions": "[]",
				children: "Canais de Captação"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			"data-uid": "src/components/captacao/channels-summary.tsx:42:7",
			"data-prohibitions": "[editContent]",
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/components/captacao/channels-summary.tsx:43:9",
				"data-prohibitions": "[]",
				className: "h-[250px] w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
					"data-uid": "src/components/captacao/channels-summary.tsx:44:11",
					"data-prohibitions": "[]",
					config: chartConfig,
					className: "h-full w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						"data-uid": "src/components/captacao/channels-summary.tsx:45:13",
						"data-prohibitions": "[]",
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							"data-uid": "src/components/captacao/channels-summary.tsx:46:15",
							"data-prohibitions": "[]",
							data: CHANNELS_DATA,
							margin: {
								top: 0,
								right: 0,
								left: -20,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									"data-uid": "src/components/captacao/channels-summary.tsx:47:17",
									"data-prohibitions": "[editContent]",
									strokeDasharray: "3 3",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									"data-uid": "src/components/captacao/channels-summary.tsx:48:17",
									"data-prohibitions": "[editContent]",
									dataKey: "canal",
									fontSize: 12,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									"data-uid": "src/components/captacao/channels-summary.tsx:49:17",
									"data-prohibitions": "[editContent]",
									fontSize: 12,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
									"data-uid": "src/components/captacao/channels-summary.tsx:50:17",
									"data-prohibitions": "[editContent]",
									content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
										"data-uid": "src/components/captacao/channels-summary.tsx:50:40",
										"data-prohibitions": "[editContent]"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									"data-uid": "src/components/captacao/channels-summary.tsx:51:17",
									"data-prohibitions": "[editContent]",
									dataKey: "candidatos",
									fill: "var(--color-candidatos)",
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
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
				"data-uid": "src/components/captacao/channels-summary.tsx:57:9",
				"data-prohibitions": "[editContent]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
					"data-uid": "src/components/captacao/channels-summary.tsx:58:11",
					"data-prohibitions": "[]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						"data-uid": "src/components/captacao/channels-summary.tsx:59:13",
						"data-prohibitions": "[]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/components/captacao/channels-summary.tsx:60:15",
								"data-prohibitions": "[]",
								children: "Canal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/components/captacao/channels-summary.tsx:61:15",
								"data-prohibitions": "[]",
								className: "text-right",
								children: "Candidatos (mês)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								"data-uid": "src/components/captacao/channels-summary.tsx:62:15",
								"data-prohibitions": "[]",
								className: "text-right",
								children: "Conversão (%)"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
					"data-uid": "src/components/captacao/channels-summary.tsx:65:11",
					"data-prohibitions": "[editContent]",
					children: CHANNELS_DATA.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						"data-uid": "src/components/captacao/channels-summary.tsx:67:15",
						"data-prohibitions": "[editContent]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/components/captacao/channels-summary.tsx:68:17",
								"data-prohibitions": "[editContent]",
								className: "font-medium",
								children: row.canal
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								"data-uid": "src/components/captacao/channels-summary.tsx:69:17",
								"data-prohibitions": "[editContent]",
								className: "text-right",
								children: row.candidatos
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								"data-uid": "src/components/captacao/channels-summary.tsx:70:17",
								"data-prohibitions": "[editContent]",
								className: "text-right",
								children: [row.conversao, "%"]
							})
						]
					}, row.canal))
				})]
			})]
		})]
	});
}
//#endregion
//#region src/pages/captacao.tsx
function Captacao() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/captacao.tsx:6:5",
		"data-prohibitions": "[]",
		className: "w-full max-w-[1200px] mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/captacao.tsx:7:7",
			"data-prohibitions": "[]",
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-uid": "src/pages/captacao.tsx:8:9",
				"data-prohibitions": "[]",
				className: "text-[2rem] font-bold tracking-tight mb-2",
				children: "Captação de Candidatos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-uid": "src/pages/captacao.tsx:9:9",
				"data-prohibitions": "[]",
				className: "text-[0.875rem] opacity-70",
				children: "Recrutamento de profissionais de saúde via múltiplos canais."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/captacao.tsx:14:7",
			"data-prohibitions": "[]",
			className: "grid grid-cols-1 md:grid-cols-5 md:gap-8 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/captacao.tsx:15:9",
				"data-prohibitions": "[]",
				className: "md:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaptureForm, {
					"data-uid": "src/pages/captacao.tsx:16:11",
					"data-prohibitions": "[editContent]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/captacao.tsx:19:9",
				"data-prohibitions": "[]",
				className: "md:col-span-2 hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/captacao.tsx:20:11",
					"data-prohibitions": "[]",
					className: "sticky top-[7rem] lg:top-[8rem] max-h-[calc(100vh-10rem)] overflow-y-auto pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelsSummary, {
						"data-uid": "src/pages/captacao.tsx:21:13",
						"data-prohibitions": "[editContent]"
					})
				})
			})]
		})]
	});
}
//#endregion
export { Captacao as default };

//# sourceMappingURL=captacao-JxDU4NUB.js.map