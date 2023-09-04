import { enumToObject } from "@/common/utils";
import type { ROUTE_ID_KEY, RouteItem, RoutesStructDataItem } from "./types";

// =============== 路由name和id ===============
// MODERATE_AUTO_2:START
export enum ROUTE_NAME {
	homePage,
	loginPage,
	helloPage,
	cmsPage,
	sysPage,
	rolePage,
	userPage,
	articlePage,
	devPage,
	pageDevPage,
	permissionPage,
	storeDevPage,
	apiDevPage,
	companyPage,
	categoryPage,
	opportunityPage,
	tagPage,
	enquiryPage,
	feedbackPage,
	paymentPage,
	usersPage,
}
// MODERATE_AUTO_2:END
export const ROUTE_ID = enumToObject(ROUTE_NAME);
// =============== 路由信息数组和路由信息对象 ===============
// ROUTE_INFO_CONFIG，路由信息字典
// MODERATE_AUTO_3:START
export const ROUTE_INFO_CONFIG: {
	[key in ROUTE_ID_KEY]: RouteItem;
} = {
	loginPage: {
		id: "loginPage",
		meta: {
			title: "Login",
		},
		component: "LoginPage",
		path: "/login",
		isMustShow: true,
	},
	homePage: {
		id: "homePage",
		meta: {
			title: "Home",
		},
		path: "/",
		component: "HomePage",
		isMustShow: true,
		actionPermissions: ["ADD", "EDIT"],
	},
	helloPage: {
		id: "helloPage",
		meta: {
			title: "Statistics Dashboard",
		},
		component: "HelloPage",
		actionPermissions: ["ADD", "EDIT"],
	},
	sysPage: {
		id: "sysPage",
		meta: {
			title: "System Management",
		},
		actionPermissions: ["ADD", "EDIT"],
	},
	cmsPage: {
		id: "cmsPage",
		meta: {
			title: "Content Management",
		},
		actionPermissions: ["ADD", "EDIT"],
	},
	userPage: {
		id: "userPage",
		meta: {
			title: "User Management",
		},
		actionPermissions: ["ADD", "EDIT"],
		component: "UserPage",
	},
	rolePage: {
		id: "rolePage",
		meta: {
			title: "Role Management",
		},
		component: "RolePage",
		actionPermissions: ["ADD", "EDIT"],
	},
	articlePage: {
		id: "articlePage",
		meta: {
			title: "Blog Management",
		},
		component: "ArticlePage",
		actionPermissions: ["ADD", "EDIT"],
	},
	devPage: {
		id: "devPage",
		meta: {
			title: "Dev Page",
		},
		actionPermissions: ["ADD", "EDIT"],
	},
	pageDevPage: {
		id: "pageDevPage",
		meta: {
			title: "Router Management",
		},
		component: "PageDevPage",
		actionPermissions: ["ADD", "EDIT"],
	},
	permissionPage: {
		id: "permissionPage",
		meta: {
			title: "Permission Management",
		},
		component: "PermissionPage",
		isMenu: false,
		actionPermissions: ["ADD", "EDIT"],
	},
	storeDevPage: {
		id: "storeDevPage",
		meta: {
			title: "Store Management",
		},
		component: "StoreDevPage",
		actionPermissions: ["ADD", "EDIT"],
	},
	apiDevPage: {
		id: "apiDevPage",
		meta: {
			title: "API Management",
		},
		component: "ApiDevPage",
		isMustShow: true,
		actionPermissions: ["ADD", "EDIT"],
	},
	companyPage: {
		id: "companyPage",
		meta: {
			title: "Company Management",
		},
		component: "companyPage",
		isMustShow: true,
		keepAlive: true,
	},
	categoryPage: {
		id: "categoryPage",
		meta: {
			title: "Category Management",
		},
		component: "CategoryPage",
		isMustShow: true,
	},
	opportunityPage: {
		id: "opportunityPage",
		meta: {
			title: "Opportunity Management",
		},
		component: "OpportunityPage",
		isMustShow: true,
	},
	tagPage: {
		id: "tagPage",
		meta: {
			title: "Opportunity Management",
		},
		component: "TagPage",
		isMustShow: true,
	},
	enquiryPage: {
		id: "enquiryPage",
		meta: {
			title: "Enquiry Management",
		},
		component: "EnquiryPage",
		isMustShow: true,
	},
	feedbackPage: {
		id: "feedbackPage",
		meta: {
			title: "Feedback Management",
		},
		component: "FeedbackPage",
		isMustShow: true,
	},
	paymentPage: {
		id: "paymentPage",
		meta: {
			title: "Payment Management",
		},
		component: "PaymentPage",
		isMustShow: true,
	},
	usersPage: {
		id: "usersPage",
		meta: {
			title: "Users Management",
		},
		component: "UsersPage",
		isMustShow: true,
	},
}; //MODERATE_AUTO_3:END
// =============== 路由结构数据 ===============
// MODERATE_AUTO:START 
export const ROUTE_STRUCT_CONFIG: RoutesStructDataItem[] = [{
  id: ROUTE_ID.homePage,
  children: [{
    id: ROUTE_ID.cmsPage,
    children: [{
      id: ROUTE_ID.categoryPage
    }, {
      id: ROUTE_ID.companyPage
    }, {
      id: ROUTE_ID.enquiryPage
    }, {
      id: ROUTE_ID.feedbackPage
    }, {
      id: ROUTE_ID.opportunityPage
    }, {
      id: ROUTE_ID.paymentPage
    }, {
      id: ROUTE_ID.tagPage
    }, {
      id: ROUTE_ID.usersPage
    }]
  }, {
    id: ROUTE_ID.devPage,
    children: [{
      id: ROUTE_ID.apiDevPage
    }, {
      id: ROUTE_ID.pageDevPage
    }, {
      id: ROUTE_ID.storeDevPage
    }]
  }, {
    id: ROUTE_ID.helloPage
  }, {
    id: ROUTE_ID.permissionPage
  }, {
    id: ROUTE_ID.sysPage,
    children: [{
      id: ROUTE_ID.articlePage
    }, {
      id: ROUTE_ID.rolePage
    }, {
      id: ROUTE_ID.userPage
    }]
  }]
}, {
  id: ROUTE_ID.loginPage
}]
// MODERATE_AUTO:END