import { cApi } from "@/services/apis";

const actions = {
	searchAct: async (params) => {
		await cApi.searchApi(params);
	},
};

export default actions;
