const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/client-D0EdZ3Dh.js","assets/rolldown-runtime-B_qr_iJn.js","assets/pocketbase.es-2fWfho6t.js"])))=>i.map(i=>d[i]);
import { r as __toESM } from "./rolldown-runtime-B_qr_iJn.js";
import { i as require_react, r as require_jsx_runtime, t as cn } from "./utils-Js-2z68f.js";
import { n as ClientResponseError } from "./pocketbase.es-2fWfho6t.js";
import { I as CircleAlert, M as X, b as Button, c as Content, d as Portal, f as Root, it as __vitePreload, j as toast, l as Description, p as Title, rt as useNavigate, s as Close, tt as useBlocker, u as Overlay, z as createLucideIcon } from "./index-BUVALkT9.js";
import { t as Label } from "./label-DxKbICu2.js";
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
//#region src/hooks/use-draft-form.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useDraftForm({ key, currentValues, setValues, debounceMs = 500, adapter }) {
	const [draftTimestamp, setDraftTimestamp] = (0, import_react.useState)(null);
	const [isHydrated, setIsHydrated] = (0, import_react.useState)(false);
	const [toastShown, setToastShown] = (0, import_react.useState)(false);
	const currentValuesRef = (0, import_react.useRef)(currentValues);
	currentValuesRef.current = currentValues;
	const setValuesRef = (0, import_react.useRef)(setValues);
	setValuesRef.current = setValues;
	const adapterRef = (0, import_react.useRef)(adapter);
	adapterRef.current = adapter;
	(0, import_react.useEffect)(() => {
		if (!key) {
			setIsHydrated(true);
			return;
		}
		setIsHydrated(false);
		setToastShown(false);
		setDraftTimestamp(null);
		const raw = localStorage.getItem(key);
		if (raw) try {
			const parsed = JSON.parse(raw);
			if (Date.now() - parsed.timestamp < 10080 * 60 * 1e3) {
				const { timestamp, ...rest } = parsed;
				const finalValues = adapterRef.current ? adapterRef.current.fromDraft(rest) : rest;
				setValuesRef.current(finalValues);
				setDraftTimestamp(timestamp);
			} else localStorage.removeItem(key);
		} catch {}
		setIsHydrated(true);
	}, [key]);
	(0, import_react.useEffect)(() => {
		if (!isHydrated || !key) return;
		const handler = setTimeout(() => {
			const draftData = adapterRef.current ? adapterRef.current.toDraft(currentValues) : currentValues;
			localStorage.setItem(key, JSON.stringify({
				...draftData,
				timestamp: Date.now()
			}));
		}, debounceMs);
		return () => clearTimeout(handler);
	}, [
		key,
		currentValues,
		isHydrated,
		debounceMs
	]);
	(0, import_react.useEffect)(() => {
		if (!key) return;
		const handleStorage = (e) => {
			if (e.key === key && e.newValue) try {
				const { timestamp, ...rest } = JSON.parse(e.newValue);
				const finalValues = adapterRef.current ? adapterRef.current.fromDraft(rest) : rest;
				setValuesRef.current(finalValues);
			} catch {}
		};
		window.addEventListener("storage", handleStorage);
		return () => window.removeEventListener("storage", handleStorage);
	}, [key]);
	return {
		isHydrated,
		draftTimestamp,
		clearDraft: (0, import_react.useCallback)(() => {
			if (!key) return;
			localStorage.removeItem(key);
			setDraftTimestamp(null);
			setToastShown(false);
		}, [key]),
		saveImmediate: (0, import_react.useCallback)((valuesToSave) => {
			if (!key) return;
			const draftData = adapterRef.current ? adapterRef.current.toDraft(valuesToSave) : valuesToSave;
			localStorage.setItem(key, JSON.stringify({
				...draftData,
				timestamp: Date.now()
			}));
		}, [key]),
		handleFocus: (0, import_react.useCallback)(() => {
			if (draftTimestamp && !toastShown) {
				const minutes = Math.floor((Date.now() - draftTimestamp) / 6e4);
				toast.info("Rascunho salvo", {
					description: `em ${minutes} minuto${minutes !== 1 ? "s" : ""} atrás`,
					duration: 2e3
				});
				setToastShown(true);
			}
		}, [draftTimestamp, toastShown])
	};
}
//#endregion
//#region src/hooks/use-unsaved-changes.ts
function useUnsavedChanges(isDirty) {
	const blocker = useBlocker(({ currentLocation, nextLocation }) => isDirty && currentLocation.pathname !== nextLocation.pathname);
	(0, import_react.useEffect)(() => {
		const handleBeforeUnload = (e) => {
			if (isDirty) {
				e.preventDefault();
				e.returnValue = "";
			}
		};
		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => window.removeEventListener("beforeunload", handleBeforeUnload);
	}, [isDirty]);
	return blocker;
}
//#endregion
//#region src/components/ui/dialog.tsx
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Root;
var DialogPortal = Portal;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
	"data-uid": "src/components/ui/dialog.tsx:20:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = Overlay.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
	"data-uid": "src/components/ui/dialog.tsx:35:3",
	"data-prohibitions": "[editContent]",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		"data-uid": "src/components/ui/dialog.tsx:36:5",
		"data-prohibitions": "[editContent]"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content, {
		"data-uid": "src/components/ui/dialog.tsx:37:5",
		"data-prohibitions": "[editContent]",
		ref,
		className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg overflow-y-auto max-h-screen", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Close, {
			"data-uid": "src/components/ui/dialog.tsx:46:7",
			"data-prohibitions": "[]",
			className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
				"data-uid": "src/components/ui/dialog.tsx:47:9",
				"data-prohibitions": "[editContent]",
				className: "h-4 w-4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"data-uid": "src/components/ui/dialog.tsx:48:9",
				"data-prohibitions": "[]",
				className: "sr-only",
				children: "Close"
			})]
		})]
	})]
}));
DialogContent.displayName = Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	"data-uid": "src/components/ui/dialog.tsx:56:3",
	"data-prohibitions": "[editContent]",
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	"data-uid": "src/components/ui/dialog.tsx:61:3",
	"data-prohibitions": "[editContent]",
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
	"data-uid": "src/components/ui/dialog.tsx:72:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = Title.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {
	"data-uid": "src/components/ui/dialog.tsx:84:3",
	"data-prohibitions": "[editContent]",
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = Description.displayName;
//#endregion
//#region src/components/unsaved-changes-modal.tsx
function UnsavedChangesModal({ blocker, onDiscard }) {
	if (blocker.state !== "blocked") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		"data-uid": "src/components/unsaved-changes-modal.tsx:21:5",
		"data-prohibitions": "[]",
		open: true,
		onOpenChange: (open) => {
			if (!open) blocker.reset();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			"data-uid": "src/components/unsaved-changes-modal.tsx:27:7",
			"data-prohibitions": "[]",
			className: "sm:max-w-md animate-fade-in duration-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				"data-uid": "src/components/unsaved-changes-modal.tsx:28:9",
				"data-prohibitions": "[]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					"data-uid": "src/components/unsaved-changes-modal.tsx:29:11",
					"data-prohibitions": "[]",
					children: "Rascunho não salvo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					"data-uid": "src/components/unsaved-changes-modal.tsx:30:11",
					"data-prohibitions": "[]",
					children: "Você tem alterações não salvas. Deseja descartar ou continuar editando?"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
				"data-uid": "src/components/unsaved-changes-modal.tsx:34:9",
				"data-prohibitions": "[]",
				className: "flex flex-col sm:flex-row gap-2 mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/components/unsaved-changes-modal.tsx:35:11",
					"data-prohibitions": "[]",
					variant: "outline",
					onClick: () => blocker.reset(),
					children: "Continuar Editando"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/components/unsaved-changes-modal.tsx:38:11",
					"data-prohibitions": "[]",
					variant: "destructive",
					onClick: () => {
						onDiscard();
						blocker.proceed();
					},
					children: "Descartar"
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
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
export { UnsavedChangesModal as a, TriangleAlert as c, Textarea as i, LoaderCircle as l, ConditionalField as n, useUnsavedChanges as o, DynamicFormField as r, useDraftForm as s, useSubmit as t };

//# sourceMappingURL=use-submit-DxVCjjtf.js.map