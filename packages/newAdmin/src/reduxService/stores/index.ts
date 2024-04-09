// 职责功能划分的仓库
import appStore from "./appStore";
import authStore from "./authStore";
import devStore from "./devStore";
import routerStore from "./routerStore";
import dealStore from "./dealStore";
// 组件划分
import categoryStore from "src/pages/homePage/cmsPage/categoryPage/services";

const stores = {
	appStore,
	authStore,
	devStore,
	routerStore,
	categoryStore,
	dealStore,
};

export { stores };
