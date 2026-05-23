import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { n as Calendar, t as CircleCheck } from "./circle-check-BHz_qFA-.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BnJ5Yb7Y.js";
import { a as CircleAlert, i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-B8UraUii.js";
import { n as RotateCw, t as Search } from "./search-Dc0zLLPM.js";
import { A as createLucideIcon, f as Input, g as Skeleton, p as Button, w as toast } from "./index-CQ1crPcp.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-De4u1zBy.js";
import { _ as addDays, a as buildMatchPatternFn, c as buildFormatLongFn, o as buildMatchFn, s as buildLocalizeFn, t as format } from "./format-jQjdXGgx.js";
import { t as Badge } from "./badge-BJJIg4N0.js";
import { t as Label } from "./label-Cx0N7HW8.js";
import { t as Textarea } from "./textarea-Hww7JyuG.js";
import { t as avaliacaoService } from "./avaliacao-service-DeygJVr-.js";
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
//#endregion
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
function AvaliacaoPage() {
	const [candidatos, setCandidatos] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
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
	(0, import_react.useEffect)(() => {
		if (selectedId) {
			const draftKey = `avaliacao-draft-${selectedId}`;
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
	}, [selectedId]);
	(0, import_react.useEffect)(() => {
		if (!selectedId) return;
		const draftKey = `avaliacao-draft-${selectedId}`;
		const timer = setTimeout(() => {
			if (formData.justificativa || formData.notaValores || formData.notaCompetencia) localStorage.setItem(draftKey, JSON.stringify(formData));
		}, 500);
		return () => clearTimeout(timer);
	}, [formData, selectedId]);
	const filteredCandidatos = candidatos.filter((c) => {
		if (filterStatus !== "todos" && c.status !== filterStatus) return false;
		if (filterData !== "todos") {
			const threshold = subDays(/* @__PURE__ */ new Date(), parseInt(filterData));
			if (new Date(c.data) < threshold) return false;
		}
		return true;
	});
	const selectedCandidato = candidatos.find((c) => c.id === selectedId);
	const isValid = formData.notaValores && formData.notaCompetencia && formData.justificativa.length >= 10 && formData.recomendacao;
	const handleSubmit = async () => {
		if (!selectedId || !isValid) return;
		try {
			await avaliacaoService.enviarAvaliacao(selectedId, formData);
			toast.success("Avaliação enviada com sucesso!");
			localStorage.removeItem(`avaliacao-draft-${selectedId}`);
			setSelectedId(null);
			loadData();
		} catch (error) {
			toast.error("Erro ao enviar avaliação");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/pages/avaliacao.tsx:146:5",
		"data-prohibitions": "[editContent]",
		className: "flex flex-col h-[calc(100vh-4rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/avaliacao.tsx:148:7",
			"data-prohibitions": "[editContent]",
			className: "flex-none p-4 sm:px-6 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/avaliacao.tsx:149:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-uid": "src/pages/avaliacao.tsx:150:11",
					"data-prohibitions": "[]",
					className: "text-2xl font-bold tracking-tight",
					children: "Avaliação de RH"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"data-uid": "src/pages/avaliacao.tsx:151:11",
					"data-prohibitions": "[]",
					className: "text-sm text-muted-foreground",
					children: "Avalie candidatos pendentes"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/pages/avaliacao.tsx:153:9",
				"data-prohibitions": "[editContent]",
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						"data-uid": "src/pages/avaliacao.tsx:154:11",
						"data-prohibitions": "[]",
						value: filterStatus,
						onValueChange: setFilterStatus,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"data-uid": "src/pages/avaliacao.tsx:155:13",
							"data-prohibitions": "[]",
							className: "w-[180px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
								"data-uid": "src/pages/avaliacao.tsx:156:15",
								"data-prohibitions": "[editContent]",
								placeholder: "Status"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
							"data-uid": "src/pages/avaliacao.tsx:158:13",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:159:15",
									"data-prohibitions": "[]",
									value: "todos",
									children: "Todos os Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:160:15",
									"data-prohibitions": "[]",
									value: "Formulário Recebido",
									children: "Formulário Recebido"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:161:15",
									"data-prohibitions": "[]",
									value: "Aguardando Avaliação",
									children: "Aguardando Avaliação"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						"data-uid": "src/pages/avaliacao.tsx:164:11",
						"data-prohibitions": "[]",
						value: filterData,
						onValueChange: setFilterData,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"data-uid": "src/pages/avaliacao.tsx:165:13",
							"data-prohibitions": "[]",
							className: "w-[150px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
								"data-uid": "src/pages/avaliacao.tsx:166:15",
								"data-prohibitions": "[editContent]",
								placeholder: "Período"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
							"data-uid": "src/pages/avaliacao.tsx:168:13",
							"data-prohibitions": "[]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:169:15",
									"data-prohibitions": "[]",
									value: "todos",
									children: "Todo período"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:170:15",
									"data-prohibitions": "[]",
									value: "7",
									children: "Últimos 7 dias"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									"data-uid": "src/pages/avaliacao.tsx:171:15",
									"data-prohibitions": "[]",
									value: "30",
									children: "Últimos 30 dias"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"data-uid": "src/pages/avaliacao.tsx:174:11",
						"data-prohibitions": "[editContent]",
						variant: "outline",
						size: "icon",
						onClick: loadData,
						title: "Atualizar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, {
							"data-uid": "src/pages/avaliacao.tsx:175:13",
							"data-prohibitions": "[editContent]",
							className: cn("h-4 w-4", loading && "animate-spin")
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-uid": "src/pages/avaliacao.tsx:180:7",
			"data-prohibitions": "[editContent]",
			className: "flex-1 flex flex-col md:flex-row overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/avaliacao.tsx:182:9",
				"data-prohibitions": "[editContent]",
				className: "w-full md:w-[40%] lg:w-[35%] border-r overflow-y-auto bg-muted/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/pages/avaliacao.tsx:183:11",
					"data-prohibitions": "[editContent]",
					className: "p-4 space-y-3",
					children: loading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-uid": "src/pages/avaliacao.tsx:186:17",
						"data-prohibitions": "[]",
						className: "p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
							"data-uid": "src/pages/avaliacao.tsx:187:19",
							"data-prohibitions": "[editContent]",
							className: "h-16 w-full"
						})
					}, i)) : filteredCandidatos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/avaliacao.tsx:191:15",
						"data-prohibitions": "[]",
						className: "text-center p-8 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							"data-uid": "src/pages/avaliacao.tsx:192:17",
							"data-prohibitions": "[editContent]",
							className: "mx-auto h-8 w-8 mb-3 opacity-50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-uid": "src/pages/avaliacao.tsx:193:17",
							"data-prohibitions": "[]",
							children: "Nenhum candidato aguardando avaliação"
						})]
					}) : filteredCandidatos.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						"data-uid": "src/pages/avaliacao.tsx:197:17",
						"data-prohibitions": "[editContent]",
						className: cn("cursor-pointer transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring outline-none", selectedId === c.id ? "border-l-4 border-l-primary shadow-sm" : ""),
						onClick: () => setSelectedId(c.id),
						tabIndex: 0,
						onKeyDown: (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								setSelectedId(c.id);
							}
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
							"data-uid": "src/pages/avaliacao.tsx:212:19",
							"data-prohibitions": "[editContent]",
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/avaliacao.tsx:213:21",
								"data-prohibitions": "[editContent]",
								className: "flex justify-between items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									"data-uid": "src/pages/avaliacao.tsx:214:23",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										"data-uid": "src/pages/avaliacao.tsx:215:25",
										"data-prohibitions": "[editContent]",
										className: "text-base leading-none mb-1",
										children: c.nome
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										"data-uid": "src/pages/avaliacao.tsx:216:25",
										"data-prohibitions": "[editContent]",
										className: "text-xs line-clamp-1",
										children: c.especialidade
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									"data-uid": "src/pages/avaliacao.tsx:220:23",
									"data-prohibitions": "[editContent]",
									variant: "outline",
									className: "text-[10px] whitespace-nowrap bg-background",
									children: c.status
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-uid": "src/pages/avaliacao.tsx:227:21",
								"data-prohibitions": "[editContent]",
								className: "flex items-center gap-1 text-xs text-muted-foreground mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									"data-uid": "src/pages/avaliacao.tsx:228:23",
									"data-prohibitions": "[editContent]",
									className: "h-3.5 w-3.5"
								}), format(new Date(c.data), "dd 'de' MMM, yyyy", { locale: ptBR })]
							})]
						})
					}, c.id))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-uid": "src/pages/avaliacao.tsx:239:9",
				"data-prohibitions": "[editContent]",
				className: "w-full md:w-[60%] lg:w-[65%] overflow-y-auto bg-background",
				children: !selectedCandidato ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/avaliacao.tsx:241:13",
					"data-prohibitions": "[]",
					className: "flex flex-col items-center justify-center h-full text-muted-foreground p-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
						"data-uid": "src/pages/avaliacao.tsx:242:15",
						"data-prohibitions": "[editContent]",
						className: "h-12 w-12 mb-4 opacity-20"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						"data-uid": "src/pages/avaliacao.tsx:243:15",
						"data-prohibitions": "[]",
						children: "Selecione um candidato na lista para realizar a avaliação"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/avaliacao.tsx:246:13",
					"data-prohibitions": "[editContent]",
					className: "p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/avaliacao.tsx:247:15",
						"data-prohibitions": "[editContent]",
						className: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/avaliacao.tsx:248:17",
							"data-prohibitions": "[editContent]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								"data-uid": "src/pages/avaliacao.tsx:249:19",
								"data-prohibitions": "[editContent]",
								className: "text-3xl font-bold tracking-tight",
								children: selectedCandidato.nome
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-uid": "src/pages/avaliacao.tsx:250:19",
								"data-prohibitions": "[editContent]",
								className: "text-muted-foreground text-lg",
								children: selectedCandidato.especialidade
							})]
						}), selectedCandidato.buscaWeb.bloqueado && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							"data-uid": "src/pages/avaliacao.tsx:253:19",
							"data-prohibitions": "[]",
							variant: "destructive",
							className: "text-sm px-3 py-1 self-start sm:self-auto",
							children: "BLOQUEADO"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						"data-uid": "src/pages/avaliacao.tsx:262:15",
						"data-prohibitions": "[editContent]",
						defaultValue: "avaliacao",
						className: "w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								"data-uid": "src/pages/avaliacao.tsx:263:17",
								"data-prohibitions": "[]",
								className: "grid w-full grid-cols-2 lg:grid-cols-4 h-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/avaliacao.tsx:264:19",
										"data-prohibitions": "[]",
										value: "dados",
										className: "py-2",
										children: "Dados Pessoais"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/avaliacao.tsx:267:19",
										"data-prohibitions": "[]",
										value: "form",
										className: "py-2",
										children: "Formulário"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/avaliacao.tsx:270:19",
										"data-prohibitions": "[]",
										value: "web",
										className: "py-2",
										children: "Busca Web"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										"data-uid": "src/pages/avaliacao.tsx:273:19",
										"data-prohibitions": "[]",
										value: "avaliacao",
										className: "py-2",
										children: "Avaliação RH"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/avaliacao.tsx:278:17",
								"data-prohibitions": "[editContent]",
								value: "dados",
								className: "mt-4 space-y-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									"data-uid": "src/pages/avaliacao.tsx:279:19",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										"data-uid": "src/pages/avaliacao.tsx:280:21",
										"data-prohibitions": "[]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											"data-uid": "src/pages/avaliacao.tsx:281:23",
											"data-prohibitions": "[]",
											children: "Informações de Contato e Experiência"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										"data-uid": "src/pages/avaliacao.tsx:283:21",
										"data-prohibitions": "[editContent]",
										className: "grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/avaliacao.tsx:284:23",
												"data-prohibitions": "[editContent]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													"data-uid": "src/pages/avaliacao.tsx:285:25",
													"data-prohibitions": "[]",
													className: "text-muted-foreground text-xs",
													children: "Email"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													"data-uid": "src/pages/avaliacao.tsx:286:25",
													"data-prohibitions": "[editContent]",
													className: "font-medium mt-1",
													children: selectedCandidato.dadosPessoais.email
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/avaliacao.tsx:288:23",
												"data-prohibitions": "[editContent]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													"data-uid": "src/pages/avaliacao.tsx:289:25",
													"data-prohibitions": "[]",
													className: "text-muted-foreground text-xs",
													children: "Telefone"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													"data-uid": "src/pages/avaliacao.tsx:290:25",
													"data-prohibitions": "[editContent]",
													className: "font-medium mt-1",
													children: selectedCandidato.dadosPessoais.telefone
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"data-uid": "src/pages/avaliacao.tsx:294:23",
												"data-prohibitions": "[editContent]",
												className: "sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													"data-uid": "src/pages/avaliacao.tsx:295:25",
													"data-prohibitions": "[]",
													className: "text-muted-foreground text-xs",
													children: "Experiência Profissional"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													"data-uid": "src/pages/avaliacao.tsx:298:25",
													"data-prohibitions": "[editContent]",
													className: "font-medium mt-1",
													children: selectedCandidato.dadosPessoais.experiencia
												})]
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								"data-uid": "src/pages/avaliacao.tsx:306:17",
								"data-prohibitions": "[editContent]",
								value: "form",
								className: "mt-4 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									"data-uid": "src/pages/avaliacao.tsx:307:19",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										"data-uid": "src/pages/avaliacao.tsx:308:21",
										"data-prohibitions": "[]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											"data-uid": "src/pages/avaliacao.tsx:309:23",
											"data-prohibitions": "[]",
											children: "Autoavaliação de Valores"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
										"data-uid": "src/pages/avaliacao.tsx:311:21",
										"data-prohibitions": "[editContent]",
										className: "space-y-4",
										children: Object.entries(selectedCandidato.formulario.valores).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:313:25",
											"data-prohibitions": "[editContent]",
											className: "flex justify-between items-center border-b pb-2 last:border-0 last:pb-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"data-uid": "src/pages/avaliacao.tsx:317:27",
												"data-prohibitions": "[editContent]",
												className: "font-medium",
												children: key
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												"data-uid": "src/pages/avaliacao.tsx:318:27",
												"data-prohibitions": "[editContent]",
												variant: "secondary",
												className: "text-sm",
												children: [val, " / 10"]
											})]
										}, key))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									"data-uid": "src/pages/avaliacao.tsx:325:19",
									"data-prohibitions": "[editContent]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										"data-uid": "src/pages/avaliacao.tsx:326:21",
										"data-prohibitions": "[]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
											"data-uid": "src/pages/avaliacao.tsx:327:23",
											"data-prohibitions": "[]",
											children: "Respostas Abertas"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
										"data-uid": "src/pages/avaliacao.tsx:329:21",
										"data-prohibitions": "[editContent]",
										className: "space-y-4",
										children: Object.entries(selectedCandidato.formulario.respostas).map(([key, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:331:25",
											"data-prohibitions": "[editContent]",
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												"data-uid": "src/pages/avaliacao.tsx:332:27",
												"data-prohibitions": "[editContent]",
												className: "font-semibold text-sm",
												children: key
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												"data-uid": "src/pages/avaliacao.tsx:333:27",
												"data-prohibitions": "[editContent]",
												className: "text-sm text-foreground bg-muted/50 p-3 rounded-md border",
												children: val
											})]
										}, key))
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/avaliacao.tsx:342:17",
								"data-prohibitions": "[editContent]",
								value: "web",
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									"data-uid": "src/pages/avaliacao.tsx:343:19",
									"data-prohibitions": "[editContent]",
									className: selectedCandidato.buscaWeb.bloqueado ? "border-destructive shadow-sm" : "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
										"data-uid": "src/pages/avaliacao.tsx:348:21",
										"data-prohibitions": "[editContent]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
											"data-uid": "src/pages/avaliacao.tsx:349:23",
											"data-prohibitions": "[editContent]",
											className: "flex items-center justify-between",
											children: ["Resultados da Busca Automatizada", selectedCandidato.buscaWeb.status === "Concluída" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												"data-uid": "src/pages/avaliacao.tsx:352:27",
												"data-prohibitions": "[]",
												variant: "outline",
												className: "bg-green-500/10 text-green-600 border-green-200",
												children: "Concluída"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												"data-uid": "src/pages/avaliacao.tsx:359:27",
												"data-prohibitions": "[]",
												variant: "outline",
												className: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
												children: "Pendente"
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
										"data-uid": "src/pages/avaliacao.tsx:368:21",
										"data-prohibitions": "[editContent]",
										children: selectedCandidato.buscaWeb.ocorrencias && selectedCandidato.buscaWeb.ocorrencias.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											"data-uid": "src/pages/avaliacao.tsx:371:25",
											"data-prohibitions": "[editContent]",
											className: "space-y-2",
											children: selectedCandidato.buscaWeb.ocorrencias.map((oc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												"data-uid": "src/pages/avaliacao.tsx:373:29",
												"data-prohibitions": "[editContent]",
												className: "flex gap-2 items-start text-sm bg-destructive/10 text-destructive p-3 rounded-md border border-destructive/20",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
													"data-uid": "src/pages/avaliacao.tsx:377:31",
													"data-prohibitions": "[editContent]",
													className: "h-4 w-4 mt-0.5 flex-shrink-0"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"data-uid": "src/pages/avaliacao.tsx:378:31",
													"data-prohibitions": "[editContent]",
													children: oc
												})]
											}, i))
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-uid": "src/pages/avaliacao.tsx:383:25",
											"data-prohibitions": "[]",
											className: "flex items-center gap-2 text-sm text-muted-foreground bg-muted p-4 rounded-md border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
												"data-uid": "src/pages/avaliacao.tsx:384:27",
												"data-prohibitions": "[editContent]",
												className: "h-4 w-4 text-green-500"
											}), "Nenhuma ocorrência desabonadora encontrada nas fontes pesquisadas."]
										})
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								"data-uid": "src/pages/avaliacao.tsx:392:17",
								"data-prohibitions": "[editContent]",
								value: "avaliacao",
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
									"data-uid": "src/pages/avaliacao.tsx:393:19",
									"data-prohibitions": "[editContent]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										"data-uid": "src/pages/avaliacao.tsx:394:21",
										"data-prohibitions": "[editContent]",
										onSubmit: (e) => {
											e.preventDefault();
											handleSubmit();
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
												"data-uid": "src/pages/avaliacao.tsx:400:23",
												"data-prohibitions": "[]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
													"data-uid": "src/pages/avaliacao.tsx:401:25",
													"data-prohibitions": "[]",
													children: "Formulário de Avaliação RH"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
													"data-uid": "src/pages/avaliacao.tsx:402:25",
													"data-prohibitions": "[]",
													children: "Preencha com critério. Os dados serão enviados ao Diretor Técnico."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
												"data-uid": "src/pages/avaliacao.tsx:406:23",
												"data-prohibitions": "[editContent]",
												className: "space-y-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														"data-uid": "src/pages/avaliacao.tsx:407:25",
														"data-prohibitions": "[]",
														className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
															"data-uid": "src/pages/avaliacao.tsx:408:27",
															"data-prohibitions": "[]",
															className: "space-y-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
																"data-uid": "src/pages/avaliacao.tsx:409:29",
																"data-prohibitions": "[]",
																htmlFor: "notaValores",
																className: "font-semibold",
																children: [
																	"Alinhamento com Valores (0-10)",
																	" ",
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		"data-uid": "src/pages/avaliacao.tsx:411:31",
																		"data-prohibitions": "[]",
																		className: "text-destructive",
																		children: "*"
																	})
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																"data-uid": "src/pages/avaliacao.tsx:413:29",
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
																"aria-required": "true"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
															"data-uid": "src/pages/avaliacao.tsx:427:27",
															"data-prohibitions": "[]",
															className: "space-y-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
																"data-uid": "src/pages/avaliacao.tsx:428:29",
																"data-prohibitions": "[]",
																htmlFor: "notaCompetencia",
																className: "font-semibold",
																children: ["Competência Técnica (0-10) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	"data-uid": "src/pages/avaliacao.tsx:429:58",
																	"data-prohibitions": "[]",
																	className: "text-destructive",
																	children: "*"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																"data-uid": "src/pages/avaliacao.tsx:431:29",
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
																"aria-required": "true"
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
														"data-uid": "src/pages/avaliacao.tsx:447:25",
														"data-prohibitions": "[]",
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
															"data-uid": "src/pages/avaliacao.tsx:448:27",
															"data-prohibitions": "[]",
															htmlFor: "recomendacao",
															className: "font-semibold",
															children: ["Recomendação Final ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																"data-uid": "src/pages/avaliacao.tsx:449:48",
																"data-prohibitions": "[]",
																className: "text-destructive",
																children: "*"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
															"data-uid": "src/pages/avaliacao.tsx:451:27",
															"data-prohibitions": "[]",
															value: formData.recomendacao,
															onValueChange: (val) => setFormData((p) => ({
																...p,
																recomendacao: val
															})),
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
																"data-uid": "src/pages/avaliacao.tsx:457:29",
																"data-prohibitions": "[]",
																id: "recomendacao",
																"aria-required": "true",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
																	"data-uid": "src/pages/avaliacao.tsx:458:31",
																	"data-prohibitions": "[editContent]",
																	placeholder: "Selecione..."
																})
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
																"data-uid": "src/pages/avaliacao.tsx:460:29",
																"data-prohibitions": "[]",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																		"data-uid": "src/pages/avaliacao.tsx:461:31",
																		"data-prohibitions": "[]",
																		value: "Recomendo fortemente",
																		children: "Recomendo fortemente"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																		"data-uid": "src/pages/avaliacao.tsx:464:31",
																		"data-prohibitions": "[]",
																		value: "Recomendo com ressalvas",
																		children: "Recomendo com ressalvas"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																		"data-uid": "src/pages/avaliacao.tsx:467:31",
																		"data-prohibitions": "[]",
																		value: "Não recomendo",
																		children: "Não recomendo"
																	})
																]
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
														"data-uid": "src/pages/avaliacao.tsx:472:25",
														"data-prohibitions": "[editContent]",
														className: "space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
															"data-uid": "src/pages/avaliacao.tsx:473:27",
															"data-prohibitions": "[editContent]",
															htmlFor: "justificativa",
															className: "font-semibold flex justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																"data-uid": "src/pages/avaliacao.tsx:477:29",
																"data-prohibitions": "[]",
																children: ["Justificativa Detalhada ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	"data-uid": "src/pages/avaliacao.tsx:478:55",
																	"data-prohibitions": "[]",
																	className: "text-destructive",
																	children: "*"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																"data-uid": "src/pages/avaliacao.tsx:480:29",
																"data-prohibitions": "[editContent]",
																className: "text-xs font-normal text-muted-foreground",
																children: [formData.justificativa.length, "/500 max"]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
															"data-uid": "src/pages/avaliacao.tsx:484:27",
															"data-prohibitions": "[editContent]",
															id: "justificativa",
															placeholder: "Detalhes sobre a recomendação e as notas atribuídas... (Mínimo de 10 caracteres)",
															className: "min-h-[120px]",
															maxLength: 500,
															value: formData.justificativa,
															onChange: (e) => setFormData((p) => ({
																...p,
																justificativa: e.target.value
															})),
															"aria-required": "true"
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
												"data-uid": "src/pages/avaliacao.tsx:497:23",
												"data-prohibitions": "[]",
												className: "bg-muted/30 py-4 flex flex-col sm:flex-row justify-end gap-3 border-t",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													"data-uid": "src/pages/avaliacao.tsx:498:25",
													"data-prohibitions": "[]",
													type: "button",
													variant: "outline",
													onClick: () => setSelectedId(null),
													className: "w-full sm:w-auto",
													children: "Cancelar Avaliação"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													"data-uid": "src/pages/avaliacao.tsx:506:25",
													"data-prohibitions": "[]",
													type: "submit",
													disabled: !isValid,
													className: "w-full sm:w-auto",
													children: "Enviar ao Diretor Técnico"
												})]
											})
										]
									})
								})
							})
						]
					})]
				})
			})]
		})]
	});
}
//#endregion
export { AvaliacaoPage as default };

//# sourceMappingURL=avaliacao-BFf2O_vs.js.map