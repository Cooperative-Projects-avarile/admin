import { dpChain, getActionType } from "@/service";
import { startAppListening } from "src/service/setup";

const watch = () => {
	startAppListening({
		type: getActionType("subsStore").setPageData,
		effect: async (_, api) => {
			const { pageData } = api.getState().subsStore;
			dpChain("subsStore").queryListAct(pageData);
		},
	});
};

export default watch;
