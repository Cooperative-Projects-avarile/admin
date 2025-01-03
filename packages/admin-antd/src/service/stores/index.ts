import { stores as pluginStores } from "plugins/config/services/stores";
import appStore from "./appStore";
import authStore from "./authStore";
import dealStore from "./dealStore";
import routerStore from "./routerStore";
import commonStore from "./commonStore";
import categoryStore from "./categoryStore";
import subsStore from "./subsStore";

const stores = {
	appStore,
	subsStore,
	commonStore,
	authStore,
	routerStore,
	dealStore,
	categoryStore,
	...pluginStores,
};

export { stores };
