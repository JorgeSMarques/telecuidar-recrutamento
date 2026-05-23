import { n as pb } from "./client-D0EdZ3Dh.js";
import { z as createLucideIcon } from "./index-DNFkD0_T.js";
var RotateCw = createLucideIcon("rotate-cw", [["path", {
	d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
	key: "1p45f6"
}], ["path", {
	d: "M21 3v5h-5",
	key: "1q7to0"
}]]);
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
//#endregion
//#region src/services/api.ts
var api = {
	async fetchWithRetry(path, options, retries = 1) {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 28e3);
		try {
			const res = await pb.send(path, {
				...options,
				signal: controller.signal
			});
			clearTimeout(timeoutId);
			return res;
		} catch (error) {
			clearTimeout(timeoutId);
			if (error.status === 503 && retries > 0) {
				await new Promise((resolve) => setTimeout(resolve, 2e3));
				return this.fetchWithRetry(path, options, retries - 1);
			}
			throw error;
		}
	},
	post(path, body) {
		return this.fetchWithRetry(path, {
			method: "POST",
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" }
		});
	},
	captureCandidate(data) {
		return this.post("/backend/v1/candidates/capture", data);
	},
	createManifestacao(data) {
		return this.post("/backend/v1/manifestacoes/create", data);
	},
	createAvaliacao(data) {
		return this.post("/backend/v1/avaliacoes/create", data);
	},
	submitAvaliacaoRH(data) {
		return this.post("/backend/v1/avaliacoes/rh", data);
	},
	createInterview(data) {
		return this.post("/backend/v1/interviews/create", data);
	},
	scoreAlinhamento(data) {
		return this.post("/backend/v1/scoring/alinhamento", data);
	},
	searchWeb(candidatoId) {
		return this.post("/backend/v1/search/web", { candidatoId });
	}
};
//#endregion
export { Search as n, RotateCw as r, api as t };

//# sourceMappingURL=api-7RNZxqYh.js.map