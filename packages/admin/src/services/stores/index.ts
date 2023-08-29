import categoryPageStore from "@/pages/homePage/cmsPage/categoryPage/services/pageStore";
import companyPageStore from "@/pages/homePage/cmsPage/companyPage/services/pageStore";
import enquiryPageStore from "@/pages/homePage/cmsPage/enquiryPage/services/pageStore";
import feedbackPageStore from "@/pages/homePage/cmsPage/feedbackPage/services/pageStore";
import opportunityPageStore from "@/pages/homePage/cmsPage/opportunityPage/services/pageStore";
import paymentPageStore from "@/pages/homePage/cmsPage/paymentPage/services/pageStore";
import tagPageStore from "@/pages/homePage/cmsPage/tagPage/services/pageStore";
import usersPageStore from "@/pages/homePage/cmsPage/usersPage/services/pageStore";
import helloPageStore from "@/pages/homePage/helloPage/services/pageStore";
import { createStore } from "natur";
import { thunkMiddleware } from "natur-immer";
import {
	fillObjectRestDataMiddleware,
	filterUndefinedMiddleware,
	promiseMiddleware,
	shallowEqualMiddleware,
} from "natur/dist/middlewares";
import appStore from "./appStore";
import articleStore from "./articleStore/articleStore";
import devStore from "./devStore/devStore";
import permissionStore from "./permissionStore/permissionStore";
import routerStore from "./routerStore/routerStore";
import userInfoStore from "./userInfoStore/userInfoStore";

// MODERATE_AUTO_STORES_1:START
const stores = {
	routerStore,
	userInfoStore,
	articleStore,
	appStore,
	permissionStore,
	devStore,
	companyPageStore,
	categoryPageStore,
	opportunityPageStore,
	tagPageStore,
	enquiryPageStore,
	feedbackPageStore,
	paymentPageStore,
	usersPageStore,
	helloPageStore,
};
// MODERATE_AUTO_STORES_1:END
export const store = createStore(
	stores, // 同步加载模块
	{}, // 懒加载模块
	{
		middlewares: [
			thunkMiddleware,
			promiseMiddleware,
			fillObjectRestDataMiddleware,
			shallowEqualMiddleware,
			filterUndefinedMiddleware,
		],
	}, //中间价
);
