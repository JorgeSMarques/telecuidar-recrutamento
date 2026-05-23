import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
import { A as createLucideIcon } from "./index-E-0Z8qoi.js";
import { t as Label } from "./label-Dr5PVJW3.js";
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
export { CircleAlert as a, TriangleAlert as i, DynamicFormField as n, Textarea as r, ConditionalField as t };

//# sourceMappingURL=dynamic-form-hq5SKcAs.js.map