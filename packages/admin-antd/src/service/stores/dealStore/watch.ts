import { dp, getActionType } from "src/service";
import { startAppListening } from "src/service/setup";

const watch = () => {
	startAppListening({
		type: getActionType("dealStore").setApprovalPageData,
		effect: async () => {
			dp("dealStore", "queryLiveDealListAct");
		},
	});
	startAppListening({
		type: getActionType("dealStore").setRankPageData,
		effect: async () => {
			dp("dealStore", "queryRankDealListAct");
		},
	});

	startAppListening({
		type: getActionType("dealStore").setPageData,
		effect: async () => {
			dp("dealStore", "queryDealListAct");
		},
	});
};

export default watch;
