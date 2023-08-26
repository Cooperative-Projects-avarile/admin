// 权限仓库，一切与权限相关联的数据都放在这里
// 路由数据，权限数据，token，是否是管理员，tabs历史记录
import { routerHelper } from "@/services";
import actions from "./routerStore.action";
import watch from "./routerStore.watch";
import type { RouterStoreState } from "./routerStore.model";
import { ROUTE_ID, ROUTE_INFO_CONFIG } from "@/config/routerConfig";
import { cloneDeep } from "lodash-es";
// 状态

const initState = (): RouterStoreState => {
	let defaultRouteKeys = [ROUTE_ID.loginPage, ROUTE_ID.homePage];
	let defaultRoutesData =
		routerHelper.createDefaultRoutesConfig(defaultRouteKeys);
		debugger
	return {
		defaultRouteKeys,
		defaultRoutesData,
		routesData: defaultRoutesData || [],
		tabsHistory: {},
		routesConfigMap: cloneDeep(ROUTE_INFO_CONFIG),
		defaultPermissions: Object.values(cloneDeep(ROUTE_INFO_CONFIG))
			.filter((item) => {
				return item.isMustShow;
			})
			.map((item) => {
				return item.id;
			}),
	};
};

const routerStore = {
	state: initState(),
	actions: {
		...actions,
		init: initState,
	},
	watch,
};
export default routerStore;
