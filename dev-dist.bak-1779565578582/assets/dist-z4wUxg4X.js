import { i as require_react, s as __toESM } from "./utils-Bm2fKlG1.js";
//#region ../../cache/modules/telecuidar-ui-skeleton-83d50/node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.2.14_react@19.2.5/node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		previous: value
	});
	return import_react.useMemo(() => {
		if (ref.current.value !== value) {
			ref.current.previous = ref.current.value;
			ref.current.value = value;
		}
		return ref.current.previous;
	}, [value]);
}
//#endregion
export { usePrevious as t };

//# sourceMappingURL=dist-z4wUxg4X.js.map