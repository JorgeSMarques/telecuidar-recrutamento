import { i as require_react, r as require_jsx_runtime, s as __toESM, t as cn } from "./utils-Bm2fKlG1.js";
//#region src/components/ui/textarea.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-uid": "src/components/ui/textarea.tsx:9:7",
		"data-prohibitions": "[editContent]",
		className: cn("flex min-h-[6rem] w-full rounded-[var(--radius)] border border-input bg-background text-foreground px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/30 resize-y transition-all duration-200 ease-out aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive aria-[invalid=true]:focus-visible:ring-destructive", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
export { Textarea as t };

//# sourceMappingURL=textarea-CbIGh9mP.js.map