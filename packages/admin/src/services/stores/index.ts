import categoryPageStore from "@/pages/homePage/cmsPage/category/services/pageStore";
import companyPageStore from "@/pages/homePage/cmsPage/partner/services/pageStore";
import enquiryPageStore from "@/pages/homePage/cmsPage/enquiries/services/pageStore";
import feedbackPageStore from "@/pages/homePage/cmsPage/memberFeedback/services/pageStore";
import opportunityPageStore from "@/pages/homePage/cmsPage/opportunities/services/pageStore";
import paymentPageStore from "@/pages/homePage/cmsPage/payments/services/pageStore";
import tagPageStore from "@/pages/homePage/cmsPage/tags/services/pageStore";
import usersPageStore from "@/pages/homePage/cmsPage/members/services/pageStore";
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
