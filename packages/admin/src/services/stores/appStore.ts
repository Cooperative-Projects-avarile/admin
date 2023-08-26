import { ItemType } from "antd/es/menu/hooks/useItems";
import { ModuleEvent, WatchAPI } from "natur";
import { RouterStoreState } from "./routerStore/routerStore.model";
import { routerHelper } from "../helper";
import { ROUTE_ID } from "@/config/routerConfig";

interface AppStoreState {
	menuDefaultSelectedKeys: string[];
	menuDefaultOpenKeys: string[];
	menuData: ItemType[];
}

const initState = (): AppStoreState => {
	return {
		menuDefaultSelectedKeys: [],
		menuDefaultOpenKeys: null,
		menuData: [],
	};
};

const appStore = {
	// 状态
	state: initState(),
	// 计算属性
	maps: {},
	watch: {
		routerStore: (event: ModuleEvent, api: WatchAPI) => {
			const {
				actionName,
				newModule: { state },
			} = event;
			const { routesData } = state as RouterStoreState;
			if (
				actionName === "createRoutesAction" &&
				event.type === "update"
			) {
				if (routesData.length) {
					const temp = routesData.find((item) => {
						return item.id === ROUTE_ID.homePage;
					}).children;
					if (temp?.length) {
						const memuDataTemp = routerHelper.generateMenuDataLoop(
							temp,
							[],
						);
						api.localDispatch("setMenuDataAct", memuDataTemp);
					}
				}
			}
		},
	},
	// 操作
	actions: {
		setMenuDefaultSelectedKeysAct: (menuDefaultSelectedKeys: string[]) => {
			return {
				menuDefaultSelectedKeys,
			};
		},
		setMenuDefaultOpenKeysAct: (menuDefaultOpenKeys: string[]) => {
    return {
				menuDefaultOpenKeys,
			};
		},
		setMenuDataAct: (menuData: ItemType[]) => {
			return {
				menuData,
			};
		},
	},
};

export default appStore;
