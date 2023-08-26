import state, { initState } from "./state";
import actions from "./action";
import watch from "./watch";

const companyPageStore = {
	// 状态
	state,
	// 计算属性
	actions: {
		...actions,
		init: initState,
	},
	watch,
};

export default companyPageStore;
