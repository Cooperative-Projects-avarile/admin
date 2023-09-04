import categoryPageStore from "@/pages/homePage/cmsPage/Category/services/pageStore";
import companyPageStore from "@/pages/homePage/cmsPage/Partner/services/pageStore";
import enquiryPageStore from "@/pages/homePage/cmsPage/Enquiries/services/pageStore";
import feedbackPageStore from "@/pages/homePage/cmsPage/MemberFeedback/services/pageStore";
import opportunityPageStore from "@/pages/homePage/cmsPage/Opportunities/services/pageStore";
import paymentPageStore from "@/pages/homePage/cmsPage/Payments/services/pageStore";
import tagPageStore from "@/pages/homePage/cmsPage/Tags/services/pageStore";
import usersPageStore from "@/pages/homePage/cmsPage/Members/services/pageStore";
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
