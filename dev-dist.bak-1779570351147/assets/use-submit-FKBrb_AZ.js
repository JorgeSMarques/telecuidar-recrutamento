const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/client-D0EdZ3Dh.js","assets/rolldown-runtime-B_qr_iJn.js","assets/pocketbase.es-2fWfho6t.js"])))=>i.map(i=>d[i]);
import { r as __toESM } from "./rolldown-runtime-B_qr_iJn.js";
import { i as require_react, r as require_jsx_runtime, t as cn } from "./utils-Js-2z68f.js";
import { n as ClientResponseError } from "./pocketbase.es-2fWfho6t.js";
import { M as createLucideIcon, X as __vitePreload, Y as useNavigate, k as CircleAlert, w as toast } from "./index-B-TWDbPE.js";
import { t as Label } from "./label-1NaBTKtp.js";
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
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
//#region src/components/ui/textarea.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-uid": "src/components/ui/textarea.tsx:9:7",
		"data-prohibitions": "[editContent]",
		className: cn("flex min-h-[6rem] w-full rounded-[var(--radius)] border border-input bg-background text-foreground px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/30 resize-y transition-all duration-200 ease-out aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive aria-[invalid=true]:focus-visible:ring-destructive data-[warning=true]:border-ring data-[warning=true]:ring-ring data-[warning=true]:focus-visible:ring-ring", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/ui/dynamic-form.tsx
function DynamicFormField({ id, label, required, touched, error, warning, currentLength, maxLength, children, className, icon }) {
	const isError = touched && !!error;
	const isWarning = touched && !!warning && !error;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-uid": "src/components/ui/dynamic-form.tsx:35:5",
		"data-prohibitions": "[editContent]",
		className: cn("space-y-2 relative", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				"data-uid": "src/components/ui/dynamic-form.tsx:36:7",
				"data-prohibitions": "[editContent]",
				htmlFor: id,
				className: isError ? "text-destructive" : isWarning ? "text-ring" : "",
				children: [
					label,
					" ",
					required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/components/ui/dynamic-form.tsx:37:30",
						"data-prohibitions": "[]",
						className: "text-destructive",
						children: "*"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/components/ui/dynamic-form.tsx:39:7",
				"data-prohibitions": "[editContent]",
				className: "relative",
				children: [
					import_react.Children.map(children, (child) => {
						if (import_react.isValidElement(child)) return import_react.cloneElement(child, {
							id,
							"aria-invalid": isError,
							"aria-required": required,
							"aria-describedby": isError ? `${id}-error` : void 0,
							className: cn(child.props.className, isError && "border-destructive focus-visible:ring-destructive pr-10", isWarning && "border-ring focus-visible:ring-ring")
						});
						return child;
					}),
					icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-uid": "src/components/ui/dynamic-form.tsx:57:11",
						"data-prohibitions": "[editContent]",
						className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none",
						children: icon
					}),
					isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
						"data-uid": "src/components/ui/dynamic-form.tsx:62:11",
						"data-prohibitions": "[editContent]",
						className: cn("absolute top-1/2 -translate-y-1/2 h-5 w-5 text-destructive pointer-events-none", icon ? "right-10" : "right-3")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-uid": "src/components/ui/dynamic-form.tsx:70:7",
				"data-prohibitions": "[editContent]",
				className: "flex justify-between items-start min-h-[1.25rem] mt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-uid": "src/components/ui/dynamic-form.tsx:71:9",
					"data-prohibitions": "[editContent]",
					className: "flex-1",
					children: isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-uid": "src/components/ui/dynamic-form.tsx:73:13",
						"data-prohibitions": "[editContent]",
						id: `${id}-error`,
						className: "text-destructive text-sm font-medium animate-fade-in",
						children: error
					}) : isWarning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						"data-uid": "src/components/ui/dynamic-form.tsx:80:13",
						"data-prohibitions": "[editContent]",
						id: `${id}-warning`,
						className: "text-ring text-sm font-medium animate-fade-in flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
								"data-uid": "src/components/ui/dynamic-form.tsx:84:15",
								"data-prohibitions": "[editContent]",
								className: "h-4 w-4"
							}),
							" ",
							warning
						]
					}) : null
				}), currentLength !== void 0 && maxLength !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					"data-uid": "src/components/ui/dynamic-form.tsx:89:11",
					"data-prohibitions": "[editContent]",
					className: cn("text-xs ml-4 font-medium transition-colors", currentLength >= maxLength ? "text-destructive" : currentLength >= maxLength * .8 ? "text-ring" : "opacity-60"),
					children: [
						currentLength,
						"/",
						maxLength
					]
				})]
			})
		]
	});
}
function ConditionalField({ show, children }) {
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-uid": "src/components/ui/dynamic-form.tsx:109:10",
		"data-prohibitions": "[editContent]",
		className: "animate-fade-in duration-200",
		children
	});
}
//#endregion
//#region src/hooks/use-submit.ts
function useSubmit(submitFn, options) {
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	const abortControllerRef = (0, import_react.useRef)(null);
	const execute = (0, import_react.useCallback)(async (...args) => {
		setIsLoading(true);
		setError(null);
		let attempt = 0;
		const maxAttempts = 4;
		const delays = [
			0,
			2e3,
			4e3
		];
		const doAttempt = async () => {
			try {
				abortControllerRef.current = new AbortController();
				const timeoutId = setTimeout(() => {
					abortControllerRef.current?.abort("timeout");
				}, options?.timeoutMs || 3e4);
				const res = await Promise.race([submitFn(...args), new Promise((_, reject) => {
					abortControllerRef.current?.signal.addEventListener("abort", () => {
						reject(/* @__PURE__ */ new Error("timeout"));
					});
				})]);
				clearTimeout(timeoutId);
				setIsLoading(false);
				if (options?.successMessage) toast.success(options.successMessage, { duration: 4e3 });
				options?.onSuccess?.(res);
				return res;
			} catch (err) {
				const isTimeout = err.message === "timeout";
				const isAuth = err instanceof ClientResponseError && (err.status === 401 || err.status === 403);
				const isValidation = err instanceof ClientResponseError && err.status === 400;
				const isRetryable = isTimeout || err instanceof ClientResponseError && err.status >= 500 || !err.status;
				if (isAuth) {
					setIsLoading(false);
					__vitePreload(() => import("./client-D0EdZ3Dh.js").then((n) => n.t).then((mod) => {
						mod.default.authStore.clear();
					}), __vite__mapDeps([0,1,2]));
					toast.error("Sua sessão expirou. Faça login novamente.", { duration: 6e3 });
					navigate("/login");
					return;
				}
				if (isValidation || !isRetryable) {
					setIsLoading(false);
					setError(err);
					options?.onError?.(err);
					return;
				}
				if (attempt < maxAttempts - 1) {
					const delay = delays[attempt];
					attempt++;
					toast.error(`Erro de conexão. Tentando novamente em ${delay / 1e3}s...`, {
						id: "retry-toast",
						duration: delay + 1e3,
						action: {
							label: "Tentar Agora",
							onClick: () => {
								toast.dismiss("retry-toast");
								doAttempt();
							}
						}
					});
					await new Promise((resolve) => setTimeout(resolve, delay));
					return doAttempt();
				} else {
					setIsLoading(false);
					setError(err);
					toast.error("Não conseguimos processar sua solicitação. Contate o suporte em suporte@telecuidar.com.br", {
						duration: Infinity,
						action: {
							label: "Fechar",
							onClick: () => toast.dismiss()
						}
					});
					options?.onError?.(err);
				}
			}
		};
		return doAttempt();
	}, [
		submitFn,
		options,
		navigate
	]);
	(0, import_react.useEffect)(() => {
		return () => {
			abortControllerRef.current?.abort();
		};
	}, []);
	return {
		execute,
		isLoading,
		error
	};
}
//#endregion
export { TriangleAlert as a, Textarea as i, ConditionalField as n, LoaderCircle as o, DynamicFormField as r, useSubmit as t };

//# sourceMappingURL=use-submit-FKBrb_AZ.js.map