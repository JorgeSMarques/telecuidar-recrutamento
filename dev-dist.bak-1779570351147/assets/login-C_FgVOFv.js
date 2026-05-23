import { r as __toESM } from "./rolldown-runtime-B_qr_iJn.js";
import { i as require_react, r as require_jsx_runtime } from "./utils-Js-2z68f.js";
import { J as useLocation, Y as useNavigate, f as Input, o as useAuth, p as Button, q as Link, w as toast } from "./index-B-TWDbPE.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-zgyGx9gf.js";
import { t as Label } from "./label-1NaBTKtp.js";
//#region src/pages/login.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const { signIn } = useAuth();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const from = location.state?.from?.pathname || "/";
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		const { error } = await signIn(email, password);
		setLoading(false);
		if (error) toast.error("E-mail ou senha incorretos.");
		else {
			toast.success("Login realizado com sucesso!");
			navigate(from, { replace: true });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/pages/login.tsx:44:5",
		"data-prohibitions": "[editContent]",
		className: "shadow-elevation border-border/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/pages/login.tsx:45:7",
			"data-prohibitions": "[]",
			className: "space-y-1 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/pages/login.tsx:46:9",
				"data-prohibitions": "[]",
				className: "text-2xl font-bold",
				children: "Bem-vindo de volta"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				"data-uid": "src/pages/login.tsx:47:9",
				"data-prohibitions": "[]",
				children: "Insira suas credenciais para acessar a plataforma"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			"data-uid": "src/pages/login.tsx:49:7",
			"data-prohibitions": "[editContent]",
			onSubmit: handleLogin,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				"data-uid": "src/pages/login.tsx:50:9",
				"data-prohibitions": "[]",
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/login.tsx:51:11",
					"data-prohibitions": "[]",
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						"data-uid": "src/pages/login.tsx:52:13",
						"data-prohibitions": "[]",
						htmlFor: "email",
						children: "E-mail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						"data-uid": "src/pages/login.tsx:53:13",
						"data-prohibitions": "[editContent]",
						id: "email",
						type: "email",
						placeholder: "nome@exemplo.com",
						required: true,
						value: email,
						onChange: (e) => setEmail(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/login.tsx:62:11",
					"data-prohibitions": "[]",
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/login.tsx:63:13",
						"data-prohibitions": "[]",
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/login.tsx:64:15",
							"data-prohibitions": "[]",
							htmlFor: "password",
							children: "Senha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							"data-uid": "src/pages/login.tsx:65:15",
							"data-prohibitions": "[]",
							href: "#",
							className: "text-sm text-primary hover:underline",
							children: "Esqueceu a senha?"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						"data-uid": "src/pages/login.tsx:69:13",
						"data-prohibitions": "[editContent]",
						id: "password",
						type: "password",
						required: true,
						value: password,
						onChange: (e) => setPassword(e.target.value)
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
				"data-uid": "src/pages/login.tsx:78:9",
				"data-prohibitions": "[editContent]",
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/pages/login.tsx:79:11",
					"data-prohibitions": "[editContent]",
					type: "submit",
					className: "w-full",
					disabled: loading,
					children: loading ? "Entrando..." : "Entrar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/login.tsx:82:11",
					"data-prohibitions": "[]",
					className: "text-center text-sm text-muted-foreground",
					children: [
						"Não tem uma conta?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							"data-uid": "src/pages/login.tsx:84:13",
							"data-prohibitions": "[]",
							to: "/signup",
							className: "text-primary hover:underline",
							children: "Cadastre-se"
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { Login as default };

//# sourceMappingURL=login-C_FgVOFv.js.map