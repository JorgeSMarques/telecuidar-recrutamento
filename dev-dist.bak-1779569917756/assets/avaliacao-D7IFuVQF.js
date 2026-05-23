import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { n as Calendar, t as CircleCheck } from "./circle-check-fgr9J-ZO.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-D9ckqJXm.js";
import { a as CircleAlert, i as TriangleAlert, r as Textarea, t as ConditionalField } from "./dynamic-form-hq5SKcAs.js";
import { n as RotateCw, t as Search } from "./search-yUBnqVlr.js";
import { f as Input, g as Skeleton, p as Button, w as toast } from "./index-E-0Z8qoi.js";
import { a as CardHeader, o as CardTitle, r as CardDescription, t as Card } from "./card-De4u1zBy.js";
import { _ as addDays, a as buildMatchPatternFn, c as buildFormatLongFn, o as buildMatchFn, s as buildLocalizeFn, t as format } from "./format-jQjdXGgx.js";
import { t as Badge } from "./badge-Brc1e651.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BLia5bq1.js";
import { t as Label } from "./label-Dr5PVJW3.js";
import { t as avaliacaoService } from "./avaliacao-service-DeygJVr-.js";
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/subDays.js
/**
* The {@link subDays} function options.
*/
/**
* @name subDays
* @category Day Helpers
* @summary Subtract the specified number of days from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of days to be subtracted.
* @param options - An object with options
*
* @returns The new date with the days subtracted
*
* @example
* // Subtract 10 days from 1 September 2014:
* const result = subDays(new Date(2014, 8, 1), 10)
* //=> Fri Aug 22 2014 00:00:00
*/
function subDays(date, amount, options) {
	return addDays(date, -amount, options);
}
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pt-BR/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "menos de um segundo",
		other: "menos de {{count}} segundos"
	},
	xSeconds: {
		one: "1 segundo",
		other: "{{count}} segundos"
	},
	halfAMinute: "meio minuto",
	lessThanXMinutes: {
		one: "menos de um minuto",
		other: "menos de {{count}} minutos"
	},
	xMinutes: {
		one: "1 minuto",
		other: "{{count}} minutos"
	},
	aboutXHours: {
		one: "cerca de 1 hora",
		other: "cerca de {{count}} horas"
	},
	xHours: {
		one: "1 hora",
		other: "{{count}} horas"
	},
	xDays: {
		one: "1 dia",
		other: "{{count}} dias"
	},
	aboutXWeeks: {
		one: "cerca de 1 semana",
		other: "cerca de {{count}} semanas"
	},
	xWeeks: {
		one: "1 semana",
		other: "{{count}} semanas"
	},
	aboutXMonths: {
		one: "cerca de 1 mês",
		other: "cerca de {{count}} meses"
	},
	xMonths: {
		one: "1 mês",
		other: "{{count}} meses"
	},
	aboutXYears: {
		one: "cerca de 1 ano",
		other: "cerca de {{count}} anos"
	},
	xYears: {
		one: "1 ano",
		other: "{{count}} anos"
	},
	overXYears: {
		one: "mais de 1 ano",
		other: "mais de {{count}} anos"
	},
	almostXYears: {
		one: "quase 1 ano",
		other: "quase {{count}} anos"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "em " + result;
	else return "há " + result;
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/yyyy"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'às' {{time}}",
			long: "{{date}} 'às' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pt-BR/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: (date) => {
		const weekday = date.getDay();
		return "'" + (weekday === 0 || weekday === 6 ? "último" : "última") + "' eeee 'às' p";
	},
	yesterday: "'ontem às' p",
	today: "'hoje às' p",
	tomorrow: "'amanhã às' p",
	nextWeek: "eeee 'às' p",
	other: "P"
};
var formatRelative = (token, date, _baseDate, _options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date);
	return format;
};
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pt-BR/_lib/localize.js
var eraValues = {
	narrow: ["AC", "DC"],
	abbreviated: ["AC", "DC"],
	wide: ["antes de cristo", "depois de cristo"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"T1",
		"T2",
		"T3",
		"T4"
	],
	wide: [
		"1º trimestre",
		"2º trimestre",
		"3º trimestre",
		"4º trimestre"
	]
};
var monthValues = {
	narrow: [
		"j",
		"f",
		"m",
		"a",
		"m",
		"j",
		"j",
		"a",
		"s",
		"o",
		"n",
		"d"
	],
	abbreviated: [
		"jan",
		"fev",
		"mar",
		"abr",
		"mai",
		"jun",
		"jul",
		"ago",
		"set",
		"out",
		"nov",
		"dez"
	],
	wide: [
		"janeiro",
		"fevereiro",
		"março",
		"abril",
		"maio",
		"junho",
		"julho",
		"agosto",
		"setembro",
		"outubro",
		"novembro",
		"dezembro"
	]
};
var dayValues = {
	narrow: [
		"D",
		"S",
		"T",
		"Q",
		"Q",
		"S",
		"S"
	],
	short: [
		"dom",
		"seg",
		"ter",
		"qua",
		"qui",
		"sex",
		"sab"
	],
	abbreviated: [
		"domingo",
		"segunda",
		"terça",
		"quarta",
		"quinta",
		"sexta",
		"sábado"
	],
	wide: [
		"domingo",
		"segunda-feira",
		"terça-feira",
		"quarta-feira",
		"quinta-feira",
		"sexta-feira",
		"sábado"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mn",
		noon: "md",
		morning: "manhã",
		afternoon: "tarde",
		evening: "tarde",
		night: "noite"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "manhã",
		afternoon: "tarde",
		evening: "tarde",
		night: "noite"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "manhã",
		afternoon: "tarde",
		evening: "tarde",
		night: "noite"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mn",
		noon: "md",
		morning: "da manhã",
		afternoon: "da tarde",
		evening: "da tarde",
		night: "da noite"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "da manhã",
		afternoon: "da tarde",
		evening: "da tarde",
		night: "da noite"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "da manhã",
		afternoon: "da tarde",
		evening: "da tarde",
		night: "da noite"
	}
};
var ordinalNumber = (dirtyNumber, options) => {
	const number = Number(dirtyNumber);
	if (options?.unit === "week") return number + "ª";
	return number + "º";
};
//#endregion
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pt-BR.js
/**
* @category Locales
* @summary Portuguese locale (Brazil).
* @language Portuguese
* @iso-639-2 por
* @author Lucas Duailibe [@duailibe](https://github.com/duailibe)
* @author Yago Carballo [@yagocarballo](https://github.com/YagoCarballo)
*/
var ptBR = {
	code: "pt-BR",
	formatDistance,
	formatLong,
	formatRelative,
	localize: {
		ordinalNumber,
		era: buildLocalizeFn({
			values: eraValues,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues,
			defaultWidth: "wide",
			argumentCallback: (quarter) => quarter - 1
		}),
		month: buildLocalizeFn({
			values: monthValues,
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues,
			defaultWidth: "wide",
			formattingValues: formattingDayPeriodValues,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)[ºªo]?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(ac|dc|a|d)/i,
				abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
				wide: /^(antes de cristo|depois de cristo)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				any: [/^ac/i, /^dc/i],
				wide: [/^antes de cristo/i, /^depois de cristo/i]
			},
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^T[1234]/i,
				wide: /^[1234](º)? trimestre/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmajsond]/i,
				abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
				wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^fev/i,
					/^mar/i,
					/^abr/i,
					/^mai/i,
					/^jun/i,
					/^jul/i,
					/^ago/i,
					/^set/i,
					/^out/i,
					/^nov/i,
					/^dez/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^(dom|[23456]ª?|s[aá]b)/i,
				short: /^(dom|[23456]ª?|s[aá]b)/i,
				abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
				wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				short: [
					/^d/i,
					/^2/i,
					/^3/i,
					/^4/i,
					/^5/i,
					/^6/i,
					/^s[aá]/i
				],
				narrow: [
					/^d/i,
					/^2/i,
					/^3/i,
					/^4/i,
					/^5/i,
					/^6/i,
					/^s[aá]/i
				],
				any: [
					/^d/i,
					/^seg/i,
					/^t/i,
					/^qua/i,
					/^qui/i,
					/^sex/i,
					/^s[aá]b/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
				any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mn|^meia[-\s]noite/i,
				noon: /^md|^meio[-\s]dia/i,
				morning: /manhã/i,
				afternoon: /tarde/i,
				evening: /tarde/i,
				night: /noite/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region src/pages/avaliacao.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var getBadgeStyles = (status) => {
	switch (status) {
		case "Formulário Recebido":
		case "Aguardando Avaliação": return "bg-ring/20 text-foreground border-transparent";
		case "Busca Web Concluída":
		case "Avaliação Recebida":
		case "Avaliação Concluída": return "bg-primary/20 text-primary border-transparent";
		case "Aprovado": return "bg-primary text-primary-foreground border-transparent";
		case "Rejeitado": return "bg-destructive text-destructive-foreground border-transparent";
		case "BLOQUEADO": return "bg-destructive text-destructive-foreground font-bold border-transparent";
		default: return "bg-secondary text-secondary-foreground border-transparent";
	}
};
function AvaliacaoPage() {
	const [candidatos, setCandidatos] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
	const [displayId, setDisplayId] = (0, import_react.useState)(null);
	const [isFadingOut, setIsFadingOut] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("dados");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("todos");
	const [filterData, setFilterData] = (0, import_react.useState)("todos");
	const [formData, setFormData] = (0, import_react.useState)({
		notaValores: "",
		notaCompetencia: "",
		justificativa: "",
		recomendacao: ""
	});
	const loadData = async () => {
		setLoading(true);
		try {
			setCandidatos(await avaliacaoService.getCandidatos());
		} catch (error) {
			toast.error("Erro ao carregar candidatos");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const handleSelectCandidate = (id) => {
		if (id === displayId) return;
		setSelectedId(id);
		if (displayId) {
			setIsFadingOut(true);
			setTimeout(() => {
				setIsFadingOut(false);
				setDisplayId(id);
				setActiveTab("dados");
			}, 200);
		} else {
			setDisplayId(id);
			setActiveTab("dados");
		}
	};
	(0, import_react.useEffect)(() => {
		if (displayId) {
			const draftKey = `avaliacao-draft-${displayId}`;
			const saved = localStorage.getItem(draftKey);
			if (saved) toast("Você tem um formulário em rascunho. Deseja continuar?", {
				action: {
					label: "Continuar",
					onClick: () => setFormData(JSON.parse(saved))
				},
				cancel: {
					label: "Descartar",
					onClick: () => {
						localStorage.removeItem(draftKey);
						setFormData({
							notaValores: "",
							notaCompetencia: "",
							justificativa: "",
							recomendacao: ""
						});
					}
				},
				duration: 1e4
			});
			else setFormData({
				notaValores: "",
				notaCompetencia: "",
				justificativa: "",
				recomendacao: ""
			});
		}
	}, [displayId]);
	(0, import_react.useEffect)(() => {
		if (!displayId) return;
		const draftKey = `avaliacao-draft-${displayId}`;
		const timer = setTimeout(() => {
			if (formData.justificativa || formData.notaValores || formData.notaCompetencia) localStorage.setItem(draftKey, JSON.stringify(formData));
		}, 500);
		return () => clearTimeout(timer);
	}, [formData, displayId]);
	const filteredCandidatos = candidatos.filter((c) => {
		if (filterStatus !== "todos" && c.status !== filterStatus) return false;
		if (filterData !== "todos") {
			const threshold = subDays(/* @__PURE__ */ new Date(), parseInt(filterData));
			if (new Date(c.data) < threshold) return false;
		}
		return true;
	});
	const selectedCandidato = candidatos.find((c) => c.id === displayId);
	const isJustificativaRequerida = formData.recomendacao === "Não recomendo";
	const isJustificativaValid = isJustificativaRequerida ? formData.justificativa.length >= 10 && formData.justificativa.length <= 300 : formData.justificativa.length <= 500;
	const isValid = formData.notaValores && formData.notaCompetencia && isJustificativaValid && formData.recomendacao && (!isJustificativaRequerida || formData.justificativa.length > 0);
	const handleSubmit = async () => {
		if (!displayId || !isValid) return;
		try {
			await avaliacaoService.enviarAvaliacao(displayId, formData);
			toast.success("Avaliação enviada com sucesso!");
			setCandidatos((prev) => prev.map((c) => c.id === displayId ? {
				...c,
				status: "Avaliação Concluída"
			} : c));
			localStorage.removeItem(`avaliacao-draft-${displayId}`);
			setTimeout(() => {
				setCandidatos((prev) => prev.filter((c) => c.id !== displayId));
				setDisplayId(null);
				setSelectedId(null);
			}, 1e3);
		} catch (error) {
			toast.error("Erro ao enviar avaliação");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/avaliacao.tsx:190:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col w-full h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/avaliacao.tsx:191:7",
			"data-prohibitions": "[editContent]",
			className: "mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/avaliacao.tsx:192:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/avaliacao.tsx:193:11",
					"data-prohibitions": "[]",
					className: "text-[2rem] font-bold tracking-tight",
					children: "Avaliação de RH"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/avaliacao.tsx:194:11",
					"data-prohibitions": "[]",
					className: "text-sm text-muted-foreground mt-1",
					children: "Avalie candidatos pendentes"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/avaliacao.tsx:196:9",
				"data-prohibitions": "[editContent]",
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						"data-uid": "src/pages/avaliacao.tsx:197:11",
						"data-prohibitions": "[]",
						value: filterStatus,
						onValueChange: setFilterStatus,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"data-uid": "src/pages/avaliacao.tsx:198:13",
							"data-prohibitions": "[]",
							className: "w-[180px] min-h-[44px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
								"data-uid": "src/pages/avaliacao.tsx:199:15",
								"data-prohibitions": "[editContent]",
								placeholder: "Status"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
							"data-uid": "src/pages/avaliacao.tsx:201:13",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:202:15",
									"data-prohibitions": "[]",
									value: "todos",
									children: "Todos os Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:203:15",
									"data-prohibitions": "[]",
									value: "Formulário Recebido",
									children: "Formulário Recebido"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:204:15",
									"data-prohibitions": "[]",
									value: "Aguardando Avaliação",
									children: "Aguardando Avaliação"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						"data-uid": "src/pages/avaliacao.tsx:207:11",
						"data-prohibitions": "[]",
						value: filterData,
						onValueChange: setFilterData,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"data-uid": "src/pages/avaliacao.tsx:208:13",
							"data-prohibitions": "[]",
							className: "w-[150px] min-h-[44px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
								"data-uid": "src/pages/avaliacao.tsx:209:15",
								"data-prohibitions": "[editContent]",
								placeholder: "Período"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
							"data-uid": "src/pages/avaliacao.tsx:211:13",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:212:15",
									"data-prohibitions": "[]",
									value: "todos",
									children: "Todo período"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:213:15",
									"data-prohibitions": "[]",
									value: "7",
									children: "Últimos 7 dias"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:214:15",
									"data-prohibitions": "[]",
									value: "30",
									children: "Últimos 30 dias"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/avaliacao.tsx:217:11",
						"data-prohibitions": "[editContent]",
						variant: "outline",
						size: "icon",
						onClick: loadData,
						title: "Atualizar",
						className: "min-h-[44px] min-w-[44px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
							"data-uid": "src/pages/avaliacao.tsx:224:13",
							"data-prohibitions": "[editContent]",
							className: cn("h-5 w-5", loading && "animate-spin")
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/avaliacao.tsx:229:7",
			"data-prohibitions": "[editContent]",
			className: "flex flex-col md:flex-row gap-6 lg:gap-8 relative flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/avaliacao.tsx:230:9",
				"data-prohibitions": "[editContent]",
				className: "w-full md:w-[40%] lg:w-[35%] flex flex-col gap-4",
				children: loading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
					"data-uid": "src/pages/avaliacao.tsx:233:15",
					"data-prohibitions": "[editContent]",
					className: "h-28 w-full rounded-xl"
				}, i)) : filteredCandidatos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/avaliacao.tsx:236:13",
					"data-prohibitions": "[]",
					className: "text-center p-8 text-muted-foreground flex flex-col items-center border rounded-xl bg-muted/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						"data-uid": "src/pages/avaliacao.tsx:237:15",
						"data-prohibitions": "[editContent]",
						className: "h-8 w-8 mb-3 opacity-50"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/avaliacao.tsx:238:15",
						"data-prohibitions": "[]",
						children: "Nenhum candidato aguardando avaliação"
					})]
				}) : filteredCandidatos.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					"data-uid": "src/pages/avaliacao.tsx:242:15",
					"data-prohibitions": "[editContent]",
					className: cn("cursor-pointer transition-all duration-200 hover:border-primary focus-visible:ring-2 focus-visible:ring-ring outline-none", selectedId === c.id ? "border-l-4 border-l-primary border-primary bg-muted/50" : "border-border"),
					onClick: () => handleSelectCandidate(c.id),
					tabIndex: 0,
					"aria-current": selectedId === c.id ? "true" : "false",
					onKeyDown: (e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							handleSelectCandidate(c.id);
						}
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
						"data-uid": "src/pages/avaliacao.tsx:260:17",
						"data-prohibitions": "[editContent]",
						className: "p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/avaliacao.tsx:261:19",
							"data-prohibitions": "[editContent]",
							className: "flex justify-between items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/avaliacao.tsx:262:21",
								"data-prohibitions": "[editContent]",
								className: "flex flex-col gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										"data-uid": "src/pages/avaliacao.tsx:263:23",
										"data-prohibitions": "[editContent]",
										className: "text-base font-semibold leading-tight",
										children: c.nome
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										"data-uid": "src/pages/avaliacao.tsx:266:23",
										"data-prohibitions": "[editContent]",
										className: "text-sm opacity-70",
										children: c.especialidade
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/avaliacao.tsx:269:23",
										"data-prohibitions": "[editContent]",
										className: "flex items-center gap-1 text-xs opacity-60 mt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
											"data-uid": "src/pages/avaliacao.tsx:270:25",
											"data-prohibitions": "[editContent]",
											className: "h-3.5 w-3.5"
										}), format(new Date(c.data), "dd 'de' MMM, yyyy", { locale: ptBR })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								"data-uid": "src/pages/avaliacao.tsx:274:21",
								"data-prohibitions": "[editContent]",
								variant: "outline",
								className: cn("whitespace-nowrap transition-colors duration-300", getBadgeStyles(c.status)),
								children: c.status
							})]
						})
					})
				}, c.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/avaliacao.tsx:290:9",
				"data-prohibitions": "[editContent]",
				className: "w-full md:w-[60%] lg:w-[65%] md:sticky md:top-24 md:max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border bg-card shadow-sm relative",
				children: !selectedCandidato && !isFadingOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/avaliacao.tsx:292:13",
					"data-prohibitions": "[]",
					className: "flex flex-col items-center justify-center h-full min-h-[400px] text-muted-foreground p-8 text-center animate-fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
						"data-uid": "src/pages/avaliacao.tsx:293:15",
						"data-prohibitions": "[editContent]",
						className: "h-12 w-12 mb-4 opacity-20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/avaliacao.tsx:294:15",
						"data-prohibitions": "[]",
						children: "Selecione um candidato na lista para realizar a avaliação"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/avaliacao.tsx:297:13",
					"data-prohibitions": "[editContent]",
					className: cn("p-4 sm:p-6 lg:p-8 space-y-8 transition-opacity duration-200", isFadingOut ? "opacity-0" : "opacity-100 animate-fade-in"),
					style: { animationDuration: "300ms" },
					children: selectedCandidato && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/avaliacao.tsx:306:19",
						"data-prohibitions": "[editContent]",
						className: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/avaliacao.tsx:307:21",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/avaliacao.tsx:308:23",
								"data-prohibitions": "[editContent]",
								className: "text-[2rem] font-bold tracking-tight leading-tight",
								children: selectedCandidato.nome
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/avaliacao.tsx:311:23",
								"data-prohibitions": "[editContent]",
								className: "text-muted-foreground text-lg mt-1",
								children: selectedCandidato.especialidade
							})]
						}), selectedCandidato.buscaWeb.bloqueado && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							"data-uid": "src/pages/avaliacao.tsx:316:23",
							"data-prohibitions": "[editContent]",
							className: cn("px-3 py-1.5 self-start sm:self-auto text-sm", getBadgeStyles("BLOQUEADO")),
							children: "BLOQUEADO"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						"data-uid": "src/pages/avaliacao.tsx:327:19",
						"data-prohibitions": "[editContent]",
						value: activeTab,
						onValueChange: setActiveTab,
						className: "w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								"data-uid": "src/pages/avaliacao.tsx:328:21",
								"data-prohibitions": "[]",
								className: "w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/avaliacao.tsx:329:23",
										"data-prohibitions": "[]",
										value: "dados",
										className: "flex-1",
										children: "Dados Pessoais"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/avaliacao.tsx:332:23",
										"data-prohibitions": "[]",
										value: "form",
										className: "flex-1",
										children: "Formulário"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/avaliacao.tsx:335:23",
										"data-prohibitions": "[]",
										value: "web",
										className: "flex-1",
										children: "Busca Web"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/avaliacao.tsx:338:23",
										"data-prohibitions": "[]",
										value: "avaliacao",
										className: "flex-1",
										children: "Avaliação RH"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								"data-uid": "src/pages/avaliacao.tsx:343:21",
								"data-prohibitions": "[editContent]",
								value: "dados",
								className: "space-y-6 mt-6 animate-tab-fade-in",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									"data-uid": "src/pages/avaliacao.tsx:344:23",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										"data-uid": "src/pages/avaliacao.tsx:345:25",
										"data-prohibitions": "[]",
										className: "text-base font-semibold mb-4",
										children: "Informações de Contato"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/avaliacao.tsx:348:25",
										"data-prohibitions": "[editContent]",
										className: "grid gap-6 sm:grid-cols-2 bg-muted/20 p-6 rounded-xl border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:349:27",
											"data-prohibitions": "[editContent]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												"data-uid": "src/pages/avaliacao.tsx:350:29",
												"data-prohibitions": "[]",
												className: "text-xs text-muted-foreground",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												"data-uid": "src/pages/avaliacao.tsx:351:29",
												"data-prohibitions": "[editContent]",
												className: "font-medium mt-1",
												children: selectedCandidato.dadosPessoais.email
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:355:27",
											"data-prohibitions": "[editContent]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												"data-uid": "src/pages/avaliacao.tsx:356:29",
												"data-prohibitions": "[]",
												className: "text-xs text-muted-foreground",
												children: "Telefone"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												"data-uid": "src/pages/avaliacao.tsx:357:29",
												"data-prohibitions": "[editContent]",
												className: "font-medium mt-1",
												children: selectedCandidato.dadosPessoais.telefone
											})]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									"data-uid": "src/pages/avaliacao.tsx:363:23",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										"data-uid": "src/pages/avaliacao.tsx:364:25",
										"data-prohibitions": "[]",
										className: "text-base font-semibold mb-4",
										children: "Experiência Profissional"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/pages/avaliacao.tsx:367:25",
										"data-prohibitions": "[editContent]",
										className: "bg-muted/20 p-6 rounded-xl border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											"data-uid": "src/pages/avaliacao.tsx:368:27",
											"data-prohibitions": "[editContent]",
											className: "font-medium leading-relaxed",
											children: selectedCandidato.dadosPessoais.experiencia
										})
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								"data-uid": "src/pages/avaliacao.tsx:375:21",
								"data-prohibitions": "[editContent]",
								value: "form",
								className: "space-y-8 mt-6 animate-tab-fade-in",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									"data-uid": "src/pages/avaliacao.tsx:376:23",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										"data-uid": "src/pages/avaliacao.tsx:377:25",
										"data-prohibitions": "[]",
										className: "text-base font-semibold mb-4",
										children: "Autoavaliação de Valores"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/pages/avaliacao.tsx:380:25",
										"data-prohibitions": "[editContent]",
										className: "space-y-3",
										children: Object.entries(selectedCandidato.formulario.valores).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:383:31",
											"data-prohibitions": "[editContent]",
											className: "flex justify-between items-center border-b pb-3 last:border-0 last:pb-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"data-uid": "src/pages/avaliacao.tsx:387:33",
												"data-prohibitions": "[editContent]",
												className: "font-medium text-sm",
												children: key
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												"data-uid": "src/pages/avaliacao.tsx:388:33",
												"data-prohibitions": "[editContent]",
												variant: "secondary",
												className: "px-3 py-1 bg-secondary text-secondary-foreground",
												children: [val, " / 10"]
											})]
										}, key))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									"data-uid": "src/pages/avaliacao.tsx:399:23",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										"data-uid": "src/pages/avaliacao.tsx:400:25",
										"data-prohibitions": "[]",
										className: "text-base font-semibold mb-4",
										children: "Respostas Abertas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/pages/avaliacao.tsx:401:25",
										"data-prohibitions": "[editContent]",
										className: "space-y-6",
										children: Object.entries(selectedCandidato.formulario.respostas).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:404:31",
											"data-prohibitions": "[editContent]",
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												"data-uid": "src/pages/avaliacao.tsx:405:33",
												"data-prohibitions": "[editContent]",
												className: "font-medium text-sm",
												children: key
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												"data-uid": "src/pages/avaliacao.tsx:406:33",
												"data-prohibitions": "[editContent]",
												className: "text-sm text-foreground bg-muted/30 p-4 rounded-xl border leading-relaxed",
												children: val
											})]
										}, key))
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/avaliacao.tsx:416:21",
								"data-prohibitions": "[editContent]",
								value: "web",
								className: "mt-6 animate-tab-fade-in",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									"data-uid": "src/pages/avaliacao.tsx:417:23",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										"data-uid": "src/pages/avaliacao.tsx:418:25",
										"data-prohibitions": "[editContent]",
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
											"data-uid": "src/pages/avaliacao.tsx:419:27",
											"data-prohibitions": "[]",
											className: "text-base font-semibold",
											children: "Resultados da Busca Automatizada"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											"data-uid": "src/pages/avaliacao.tsx:422:27",
											"data-prohibitions": "[editContent]",
											variant: "outline",
											className: cn(selectedCandidato.buscaWeb.status === "Concluída" ? getBadgeStyles("Busca Web Concluída") : getBadgeStyles("Formulário Recebido")),
											children: selectedCandidato.buscaWeb.status
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"data-uid": "src/pages/avaliacao.tsx:433:25",
										"data-prohibitions": "[editContent]",
										className: cn("p-6 rounded-xl border", selectedCandidato.buscaWeb.bloqueado ? "border-destructive bg-destructive/5" : "bg-muted/20"),
										children: selectedCandidato.buscaWeb.ocorrencias && selectedCandidato.buscaWeb.ocorrencias.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											"data-uid": "src/pages/avaliacao.tsx:443:29",
											"data-prohibitions": "[editContent]",
											className: "space-y-3",
											children: selectedCandidato.buscaWeb.ocorrencias.map((oc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												"data-uid": "src/pages/avaliacao.tsx:445:33",
												"data-prohibitions": "[editContent]",
												className: "flex gap-3 items-start text-sm text-destructive p-4 rounded-lg bg-background border border-destructive/20 shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
													"data-uid": "src/pages/avaliacao.tsx:449:35",
													"data-prohibitions": "[editContent]",
													className: "h-5 w-5 flex-shrink-0"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"data-uid": "src/pages/avaliacao.tsx:450:35",
													"data-prohibitions": "[editContent]",
													className: "font-medium",
													children: oc
												})]
											}, i))
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:455:29",
											"data-prohibitions": "[]",
											className: "flex items-center gap-3 text-sm text-primary p-4 rounded-lg bg-background border border-primary/20 shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
												"data-uid": "src/pages/avaliacao.tsx:456:31",
												"data-prohibitions": "[editContent]",
												className: "h-5 w-5 flex-shrink-0"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"data-uid": "src/pages/avaliacao.tsx:457:31",
												"data-prohibitions": "[]",
												className: "font-medium",
												children: "Nenhuma ocorrência desabonadora encontrada nas fontes pesquisadas."
											})]
										})
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/avaliacao.tsx:466:21",
								"data-prohibitions": "[editContent]",
								value: "avaliacao",
								className: "mt-6 animate-tab-fade-in",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									"data-uid": "src/pages/avaliacao.tsx:467:23",
									"data-prohibitions": "[editContent]",
									onSubmit: (e) => {
										e.preventDefault();
										handleSubmit();
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:473:25",
											"data-prohibitions": "[]",
											className: "mb-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
												"data-uid": "src/pages/avaliacao.tsx:474:27",
												"data-prohibitions": "[]",
												className: "text-base font-semibold",
												children: "Formulário de Avaliação RH"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												"data-uid": "src/pages/avaliacao.tsx:477:27",
												"data-prohibitions": "[]",
												className: "text-sm text-muted-foreground mt-1",
												children: "Preencha com critério. Os dados serão enviados ao Diretor Técnico."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:482:25",
											"data-prohibitions": "[editContent]",
											className: "space-y-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													"data-uid": "src/pages/avaliacao.tsx:483:27",
													"data-prohibitions": "[]",
													className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
														"data-uid": "src/pages/avaliacao.tsx:484:29",
														"data-prohibitions": "[]",
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
															"data-uid": "src/pages/avaliacao.tsx:485:31",
															"data-prohibitions": "[]",
															htmlFor: "notaValores",
															className: "font-medium",
															children: [
																"Alinhamento com Valores (0-10)",
																" ",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	"data-uid": "src/pages/avaliacao.tsx:487:33",
																	"data-prohibitions": "[]",
																	className: "text-destructive",
																	children: "*"
																})
															]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															"data-uid": "src/pages/avaliacao.tsx:489:31",
															"data-prohibitions": "[editContent]",
															id: "notaValores",
															type: "number",
															min: "0",
															max: "10",
															step: "0.5",
															placeholder: "Ex: 8.5",
															value: formData.notaValores,
															onChange: (e) => setFormData((p) => ({
																...p,
																notaValores: e.target.value
															})),
															"aria-required": "true",
															className: "min-h-[44px]"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
														"data-uid": "src/pages/avaliacao.tsx:504:29",
														"data-prohibitions": "[]",
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
															"data-uid": "src/pages/avaliacao.tsx:505:31",
															"data-prohibitions": "[]",
															htmlFor: "notaCompetencia",
															className: "font-medium",
															children: [
																"Competência Técnica (0-10)",
																" ",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	"data-uid": "src/pages/avaliacao.tsx:507:33",
																	"data-prohibitions": "[]",
																	className: "text-destructive",
																	children: "*"
																})
															]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															"data-uid": "src/pages/avaliacao.tsx:509:31",
															"data-prohibitions": "[editContent]",
															id: "notaCompetencia",
															type: "number",
															min: "0",
															max: "10",
															step: "0.5",
															placeholder: "Ex: 9.0",
															value: formData.notaCompetencia,
															onChange: (e) => setFormData((p) => ({
																...p,
																notaCompetencia: e.target.value
															})),
															"aria-required": "true",
															className: "min-h-[44px]"
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
													"data-uid": "src/pages/avaliacao.tsx:526:27",
													"data-prohibitions": "[]",
													className: "space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
														"data-uid": "src/pages/avaliacao.tsx:527:29",
														"data-prohibitions": "[]",
														htmlFor: "recomendacao",
														className: "font-medium",
														children: ["Recomendação Final ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															"data-uid": "src/pages/avaliacao.tsx:528:50",
															"data-prohibitions": "[]",
															className: "text-destructive",
															children: "*"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
														"data-uid": "src/pages/avaliacao.tsx:530:29",
														"data-prohibitions": "[]",
														value: formData.recomendacao,
														onValueChange: (val) => setFormData((p) => ({
															...p,
															recomendacao: val
														})),
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
															"data-uid": "src/pages/avaliacao.tsx:536:31",
															"data-prohibitions": "[]",
															id: "recomendacao",
															"aria-required": "true",
															className: "min-h-[44px]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
																"data-uid": "src/pages/avaliacao.tsx:541:33",
																"data-prohibitions": "[editContent]",
																placeholder: "Selecione..."
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
															"data-uid": "src/pages/avaliacao.tsx:543:31",
															"data-prohibitions": "[]",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																	"data-uid": "src/pages/avaliacao.tsx:544:33",
																	"data-prohibitions": "[]",
																	value: "Recomendo fortemente",
																	children: "Recomendo fortemente"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																	"data-uid": "src/pages/avaliacao.tsx:547:33",
																	"data-prohibitions": "[]",
																	value: "Recomendo com ressalvas",
																	children: "Recomendo com ressalvas"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																	"data-uid": "src/pages/avaliacao.tsx:550:33",
																	"data-prohibitions": "[]",
																	value: "Não recomendo",
																	children: "Não recomendo"
																})
															]
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionalField, {
													"data-uid": "src/pages/avaliacao.tsx:555:27",
													"data-prohibitions": "[editContent]",
													show: formData.recomendacao === "Não recomendo",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
														"data-uid": "src/pages/avaliacao.tsx:556:29",
														"data-prohibitions": "[editContent]",
														className: "space-y-2 animate-fade-in",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
																"data-uid": "src/pages/avaliacao.tsx:557:31",
																"data-prohibitions": "[]",
																htmlFor: "justificativa",
																className: "font-medium block",
																children: [
																	"Justificativa Obrigatória",
																	" ",
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		"data-uid": "src/pages/avaliacao.tsx:559:33",
																		"data-prohibitions": "[]",
																		className: "text-destructive",
																		children: "*"
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
																"data-uid": "src/pages/avaliacao.tsx:561:31",
																"data-prohibitions": "[editContent]",
																id: "justificativa",
																placeholder: "Descreva detalhadamente o motivo da não recomendação...",
																maxLength: 300,
																value: formData.justificativa,
																onChange: (e) => setFormData((p) => ({
																	...p,
																	justificativa: e.target.value
																})),
																"aria-required": "true",
																"aria-invalid": formData.justificativa.length > 0 && !isJustificativaValid,
																"aria-describedby": formData.justificativa.length > 0 && !isJustificativaValid ? "justificativa-error" : void 0,
																className: formData.justificativa.length > 0 && !isJustificativaValid ? "border-destructive focus-visible:ring-destructive" : ""
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																"data-uid": "src/pages/avaliacao.tsx:584:31",
																"data-prohibitions": "[editContent]",
																className: "flex justify-between items-start mt-1 h-5",
																children: [formData.justificativa.length > 0 && !isJustificativaValid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	"data-uid": "src/pages/avaliacao.tsx:586:35",
																	"data-prohibitions": "[]",
																	id: "justificativa-error",
																	className: "text-destructive text-xs font-medium animate-fade-in",
																	children: "Mínimo de 10 caracteres."
																}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	"data-uid": "src/pages/avaliacao.tsx:593:35",
																	"data-prohibitions": "[editContent]"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	"data-uid": "src/pages/avaliacao.tsx:595:33",
																	"data-prohibitions": "[editContent]",
																	className: cn("text-xs font-medium transition-colors w-full text-right block", formData.justificativa.length >= 300 ? "text-destructive" : formData.justificativa.length >= 240 ? "text-ring" : "opacity-60"),
																	children: [formData.justificativa.length, "/300"]
																})]
															})
														]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionalField, {
													"data-uid": "src/pages/avaliacao.tsx:611:27",
													"data-prohibitions": "[editContent]",
													show: formData.recomendacao !== "Não recomendo" && formData.recomendacao !== "",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
														"data-uid": "src/pages/avaliacao.tsx:617:29",
														"data-prohibitions": "[editContent]",
														className: "space-y-2 animate-fade-in",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																"data-uid": "src/pages/avaliacao.tsx:618:31",
																"data-prohibitions": "[]",
																htmlFor: "justificativa",
																className: "font-medium block",
																children: "Justificativa Detalhada (Opcional)"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
																"data-uid": "src/pages/avaliacao.tsx:621:31",
																"data-prohibitions": "[editContent]",
																id: "justificativa",
																placeholder: "Detalhes adicionais sobre as notas atribuídas...",
																maxLength: 500,
																value: formData.justificativa,
																onChange: (e) => setFormData((p) => ({
																	...p,
																	justificativa: e.target.value
																})),
																"aria-required": "false",
																"aria-invalid": formData.justificativa.length > 0 && !isJustificativaValid
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																"data-uid": "src/pages/avaliacao.tsx:634:31",
																"data-prohibitions": "[editContent]",
																className: "flex justify-end items-start mt-1 h-5",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	"data-uid": "src/pages/avaliacao.tsx:635:33",
																	"data-prohibitions": "[editContent]",
																	className: cn("text-xs font-medium transition-colors", formData.justificativa.length >= 500 ? "text-destructive" : formData.justificativa.length >= 400 ? "text-ring" : "opacity-60"),
																	children: [formData.justificativa.length, "/500"]
																})
															})
														]
													})
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:652:25",
											"data-prohibitions": "[editContent]",
											className: "mt-8 pt-6 border-t flex flex-col sm:flex-row justify-end gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												"data-uid": "src/pages/avaliacao.tsx:653:27",
												"data-prohibitions": "[]",
												type: "button",
												variant: "outline",
												onClick: () => {
													setDisplayId(null);
													setSelectedId(null);
												},
												className: "w-full sm:w-auto min-h-[44px]",
												children: "Cancelar Avaliação"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												"data-uid": "src/pages/avaliacao.tsx:664:27",
												"data-prohibitions": "[editContent]",
												type: "submit",
												disabled: !isValid,
												className: cn("w-full sm:w-auto min-h-[44px] transition-colors", isValid ? "bg-green-600 hover:bg-green-700 text-white" : ""),
												children: "Enviar ao Diretor Técnico"
											})]
										})
									]
								})
							})
						]
					})] })
				})
			})]
		})]
	});
}
//#endregion
export { AvaliacaoPage as default };

//# sourceMappingURL=avaliacao-D7IFuVQF.js.map