import { r as __toESM } from "./rolldown-runtime-B_qr_iJn.js";
import { i as require_react, r as require_jsx_runtime } from "./utils-Js-2z68f.js";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-D5WyFThd.js";
import { b as Button, et as Link, j as toast, o as useAuth, rt as useNavigate, y as Input } from "./index-BUVALkT9.js";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-zgyGx9gf.js";
import { t as Label } from "./label-DxKbICu2.js";
//#region src/pages/signup.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Signup() {
	const navigate = useNavigate();
	const { signUp } = useAuth();
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		password: "",
		passwordConfirm: "",
		role: "Candidato"
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value
		}));
	};
	const handleRoleChange = (value) => {
		setFormData((prev) => ({
			...prev,
			role: value
		}));
	};
	const handleSignup = async (e) => {
		e.preventDefault();
		if (!formData.name.trim()) return toast.error("O nome é obrigatório.");
		if (formData.password.length < 8) return toast.error("A senha deve ter pelo menos 8 caracteres.");
		if (formData.password !== formData.passwordConfirm) return toast.error("As senhas não coincidem.");
		setLoading(true);
		const { error } = await signUp(formData);
		setLoading(false);
		if (error) {
			const emailError = error?.response?.data?.email?.code;
			if (emailError === "validation_invalid_email") toast.error("Formato de e-mail inválido.");
			else if (emailError === "validation_not_unique" || emailError === "validation_invalid_format") toast.error("Este e-mail já está cadastrado ou é inválido.");
			else toast.error("Erro ao criar conta. Verifique os dados e tente novamente.");
		} else {
			toast.success("Conta criada com sucesso!");
			navigate("/");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		"data-uid": "src/pages/signup.tsx:83:5",
		"data-prohibitions": "[editContent]",
		className: "shadow-elevation border-border/50 w-full max-w-md mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			"data-uid": "src/pages/signup.tsx:84:7",
			"data-prohibitions": "[]",
			className: "space-y-1 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				"data-uid": "src/pages/signup.tsx:85:9",
				"data-prohibitions": "[]",
				className: "text-2xl font-bold",
				children: "Criar uma conta"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
				"data-uid": "src/pages/signup.tsx:86:9",
				"data-prohibitions": "[]",
				children: "Preencha os dados abaixo para se cadastrar"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			"data-uid": "src/pages/signup.tsx:88:7",
			"data-prohibitions": "[editContent]",
			onSubmit: handleSignup,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				"data-uid": "src/pages/signup.tsx:89:9",
				"data-prohibitions": "[]",
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/signup.tsx:90:11",
						"data-prohibitions": "[]",
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/signup.tsx:91:13",
							"data-prohibitions": "[]",
							htmlFor: "name",
							children: "Nome completo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/signup.tsx:92:13",
							"data-prohibitions": "[editContent]",
							id: "name",
							placeholder: "João da Silva",
							required: true,
							value: formData.name,
							onChange: handleChange
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/signup.tsx:101:11",
						"data-prohibitions": "[]",
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/signup.tsx:102:13",
							"data-prohibitions": "[]",
							htmlFor: "email",
							children: "E-mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"data-uid": "src/pages/signup.tsx:103:13",
							"data-prohibitions": "[editContent]",
							id: "email",
							type: "email",
							placeholder: "nome@exemplo.com",
							required: true,
							value: formData.email,
							onChange: handleChange
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/signup.tsx:113:11",
						"data-prohibitions": "[]",
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							"data-uid": "src/pages/signup.tsx:114:13",
							"data-prohibitions": "[]",
							htmlFor: "role",
							children: "Perfil"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							"data-uid": "src/pages/signup.tsx:115:13",
							"data-prohibitions": "[]",
							value: formData.role,
							onValueChange: handleRoleChange,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								"data-uid": "src/pages/signup.tsx:116:15",
								"data-prohibitions": "[]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									"data-uid": "src/pages/signup.tsx:117:17",
									"data-prohibitions": "[editContent]",
									placeholder: "Selecione um perfil"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								"data-uid": "src/pages/signup.tsx:119:15",
								"data-prohibitions": "[]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										"data-uid": "src/pages/signup.tsx:120:17",
										"data-prohibitions": "[]",
										value: "Candidato",
										children: "Candidato"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										"data-uid": "src/pages/signup.tsx:121:17",
										"data-prohibitions": "[]",
										value: "Gerente RH",
										children: "Gerente RH"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										"data-uid": "src/pages/signup.tsx:122:17",
										"data-prohibitions": "[]",
										value: "Diretor Técnico",
										children: "Diretor Técnico"
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-uid": "src/pages/signup.tsx:127:11",
						"data-prohibitions": "[]",
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/signup.tsx:128:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/signup.tsx:129:15",
								"data-prohibitions": "[]",
								htmlFor: "password",
								children: "Senha"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/signup.tsx:130:15",
								"data-prohibitions": "[editContent]",
								id: "password",
								type: "password",
								required: true,
								value: formData.password,
								onChange: handleChange
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-uid": "src/pages/signup.tsx:138:13",
							"data-prohibitions": "[]",
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								"data-uid": "src/pages/signup.tsx:139:15",
								"data-prohibitions": "[]",
								htmlFor: "passwordConfirm",
								children: "Confirmar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"data-uid": "src/pages/signup.tsx:140:15",
								"data-prohibitions": "[editContent]",
								id: "passwordConfirm",
								type: "password",
								required: true,
								value: formData.passwordConfirm,
								onChange: handleChange
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
				"data-uid": "src/pages/signup.tsx:150:9",
				"data-prohibitions": "[editContent]",
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					"data-uid": "src/pages/signup.tsx:151:11",
					"data-prohibitions": "[editContent]",
					type: "submit",
					className: "w-full",
					disabled: loading,
					children: loading ? "Criando conta..." : "Cadastrar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-uid": "src/pages/signup.tsx:154:11",
					"data-prohibitions": "[]",
					className: "text-center text-sm text-muted-foreground",
					children: [
						"Já tem uma conta?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							"data-uid": "src/pages/signup.tsx:156:13",
							"data-prohibitions": "[]",
							to: "/login",
							className: "text-primary hover:underline",
							children: "Faça login"
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { Signup as default };

//# sourceMappingURL=signup-BzuwRkIL.js.map