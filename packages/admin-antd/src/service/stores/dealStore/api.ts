import {
	DealChartsQueryModel,
	DealStatisticsQueryModel,
	IDealUpdate,
	INewDealDraft,
	QueryDealForDashboard,
	QueryDealForMarketplace,
	TargetDeal,
	UploadDealFileModel,
} from "@/types/model";
import { FileUploadApiRespone } from "@/types/model/appStoreModel";
import {
	DealStatistics,
	DealStats,
	GetFromConnectionParams,
	QueryDealByIdApiRequest,
	QueryUserDealListActParams,
	QueryUserListActParams,
	ShareAttamptParams,
	UserDealEntity,
} from "./model";
import { _httpForUpload, http } from "@/common/http";
import { DealEntity } from "@/types/model/dealEntity";
import { RankApiParams } from "./modelBase";

// 市场列表
function dealMarketplaceListApi(params: Partial<QueryUserListActParams>) {
	return http.request<{ content: DealEntity[]; count: number }>({
		url: "/api/deal/query/marketplace",
		method: "POST",
		data: { ...params },
	});
}
// 查询用户的deal列表
function dealUserDealListApi(params: Partial<QueryUserDealListActParams>) {
	return http.request<{ content: DealEntity[]; count: number }>({
		url: "/api/deal/query/profile",
		method: "POST",
		data: { ...params },
	});
}

function dealLandingPageListApi(params: QueryDealForMarketplace) {
	return http.request<{ content: DealEntity[]; counter: number }>({
		url: "/api/deal/query/public",
		method: "POST",
		data: {
			...params,
			page: 1,
			page_size: 5,
		},
	});
}

function createDraftApi(data: INewDealDraft) {
	return http.request<{ content: DealEntity[] }>({
		url: "/api/deal/draft",
		method: "POST",
		data,
	});
}

function updateDraftApi(data: IDealUpdate) {
	return http.request<Partial<DealEntity>>({
		url: "/api/deal/update",
		method: "POST",
		data,
	});
}

function submitDraftApi(data: { id: number }) {
	return http.request<Partial<DealEntity>>({
		url: "/api/deal/submit",
		method: "POST",
		data: {
			id: data.id,
		},
	});
}

function publishDraftApi(data: TargetDeal) {
	return http.request<string>({
		url: "/api/deal/publish",
		method: "POST",
		data,
	});
}

function renewDealApi(data: TargetDeal) {
	return http.request<Partial<DealEntity>>({
		url: "/api/deal/re-newal",
		method: "POST",
		data,
	});
}

function reviseDealApi(data: TargetDeal) {
	return http.request<Partial<{ content: string }>>({
		url: "/api/deal/revise",
		method: "POST",
		data,
	});
}

function queryDealByIdApi(data: QueryDealByIdApiRequest) {
	return http.request<{ content: DealEntity[] }>({
		url: "/api/deal/query/id",
		method: "POST",
		data,
	});
}

function queryDealForDashboardApi(data: QueryDealForDashboard) {
	return http.request<{ content: DealEntity[]; count: number }>({
		url: "/api/deal/query/dashboard",
		method: "POST",
		data,
	});
}

function archiveDealApi(data: TargetDeal) {
	return http.request<string>({
		url: "/api/deal/archive",
		method: "POST",
		data,
	});
}

// 文件上传
function getDealFileUploadApi(params: UploadDealFileModel) {
	return http.request<{ content: FileUploadApiRespone }>({
		url: "/api/deal/file/upload",
		method: "POST",
		data: params,
	});
}

function getDealPDFUploadApi(params: UploadDealFileModel) {
	return http.request<{ content: FileUploadApiRespone }>({
		url: "/api/deal/file/upload/pdf",
		method: "POST",
		data: params,
	});
}

function fileUploadApi(url: string, params: File) {
	return _httpForUpload.put(url, params, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
}

// 统计数据获取
function getDealStatisticsApi(params: DealStatisticsQueryModel) {
	return http.request<{ content: DealStatistics[]; count: number }>({
		url: "/api/statistics/query/deal",
		method: "POST",
		data: params,
	});
}

function getDealStatisticsDetailApi(params: DealChartsQueryModel) {
	return http.request<{ content: DealStats; count: number }>({
		url: "/api/statistics/query/deal-stat",
		method: "POST",
		data: params,
	});
}
let baseUrl = "/api/deal/";

// 增
function addApi(data: any) {
	return http.request({
		url: baseUrl + "create",
		method: "POST",
		data,
	});
}

// 删
function deleteApi(data: any) {
	return http.request({
		url: baseUrl + "delete",
		method: "POST",
		data,
	});
}

// 改
function updateApi(data: any) {
	return http.request({
		url: baseUrl + "update",
		method: "POST",
		data,
	});
}

// 查
function queryApi<T>(data: any) {
	return http.request<{ count: number; content: T[] }>({
		url: baseUrl + "query",
		method: "POST",
		data: {
			...data,
			ids: data?.id ? [Number(data.id)] : undefined,
		},
	});
}

function queryLiveApi<T>(data: any) {
	return http.request<{ count: number; content: T[] }>({
		url: "/api/deal/query/pending",
		method: "POST",
		data: {
			...data,
			ids: data?.id ? [Number(data.id)] : undefined,
		},
	});
}

function approveApi(data: { id: number; title: string }) {
	return http.request({
		url: baseUrl + "approve-deal",
		method: "POST",
		data,
	});
}

function revokeApi(data: { id: number }) {
	return http.request({
		url: baseUrl + "revoke",
		method: "POST",
		data,
	});
}

function rejectApi(data: { id: number; reject_reason: string }) {
	return http.request({
		url: baseUrl + "reject-deal",
		method: "POST",
		data,
	});
}

function rankApi(data: RankApiParams) {
	console.log("data", data);

	return http.request({
		url: baseUrl + "ranking",
		method: "POST",
		data,
	});
}
const api = {
	addApi,
	deleteApi,
	updateApi,
	queryApi,
	approveApi,
	rejectApi,
	rankApi,
	revokeApi,
	queryLiveApi,
	// base
	// 查询deal详情
	fetchDealDetailApi(params: TargetDeal) {
		return http.request<{ content: DealEntity[]; count: number }>({
			url: "/api/deal/query/id",
			method: "POST",
			data: {
				id: params.id,
			},
		});
	},
	// query shared deal detail
	fetchShareDealDetailApi(params: TargetDeal) {
		return http.request<{ content: DealEntity[]; count: number }>({
			url: "/api/deal/query/share",
			method: "POST",
			data: {
				id: params.id,
			},
		});
	},

	fetchDealWishlistApi(params: {
		ids: number[];
		page_size: number;
		page: number;
	}) {
		return http.request<{ content: DealEntity[]; count: number }>({
			url: "/api/deal/query/wishlist",
			method: "POST",
			data: {
				ids: params.ids,
				page_size: params.page_size,
				page: params.page,
			},
		});
	},

	likeDealApi(params: TargetDeal) {
		return http.request<{ content: string }>({
			url: "/api/deal/wish",
			method: "POST",
			data: {
				id: params.id,
			},
		});
	},
	getFromConnection(data: GetFromConnectionParams) {
		return http.request<{ content: UserDealEntity }>({
			url: "/api/user-profile/get-from-connection",
			method: "POST",
			data,
		});
	},
	dealMarketplaceListApi,
	dealLandingPageListApi,
	createDraftApi,
	updateDraftApi,
	submitDraftApi,
	publishDraftApi,
	renewDealApi,
	archiveDealApi,
	queryDealByIdApi,
	queryDealForDashboardApi,
	getDealFileUploadApi,
	getDealPDFUploadApi,
	fileUploadApi,
	getDealStatisticsApi,
	getDealStatisticsDetailApi,
	dealUserDealListApi,
	reviseDealApi,
	queryUserInteractionApi(params: ShareAttamptParams) {
		return http.request({
			url: "/api/statistics/query/user-interaction/ctr",
			method: "POST",
			data: params,
		});
	},
	shareAttamptApi(params: ShareAttamptParams) {
		return http.request({
			url: "/api/deal/share-attampt",
			method: "POST",
			data: params,
		});
	},
};

export default api;
