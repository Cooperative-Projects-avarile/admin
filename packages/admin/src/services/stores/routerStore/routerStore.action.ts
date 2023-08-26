// 用户信息仓库，信息包括：
// token：登录凭证
// isAdmin：是否是管理员，最高权限，直接跳过权限校验
import { routerHelper } from "@/services";
import { RouterStoreState } from "@/services/stores/routerStore/routerStore.model";
import { ITP } from "natur-immer";

const actions = {
	setRoutesConfigMap(routesConfigMap) {
		debugger
		return {
			routesConfigMap,
		};
	},
	createRoutesAction: () => {
		let routesData = routerHelper.createRoutesConfigByUserInfo();
		return {
			routesData,
		};
	},
	deleteTabHistory:
		(pathName: string) =>
		({ setState }: ITP<RouterStoreState>) =>
			setState((state) => {
				let temp = state.tabsHistory;
				if (Object.values(temp).length > 1) {
					Reflect.deleteProperty(temp, pathName);
				}
			}),
	addTabHistoryAction:
		(newItem: any) =>
		({ setState }: ITP<RouterStoreState>) => {
			return setState((state) => {
				state.tabsHistory[newItem.pathname] = newItem;
			});
		},
};
export default actions;
