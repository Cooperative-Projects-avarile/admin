/* Instruments */
import {
	DealChartsQueryModel,
	DealStatisticsQueryModel,
	IDealUpdate,
	INewDealDraft,
	QueryDealForDashboard,
	TargetDeal,
	UploadDealFileModel,
} from "@/types/model";
import { dp, dpChain } from "src/service";
import { createThunks } from "src/service/setup";
import httpApi from "./api";
import {
	GetFromConnectionParams,
	QueryDealByIdApiRequest,
	QueryUserDealListActParams,
	QueryUserListActParams,
	ShareAttamptParams,
} from "./model";
import { pickBy } from "lodash-es";
import { QueryActParams, RankApiParams } from "./modelBase";
import { DealEntity } from "@/types/model/dealEntity";

const thunks = createThunks("dealStore", {
	queryDealDetailAct: async (params: TargetDeal) => {
		const {
			data: { content },
		} = await httpApi.fetchDealDetailApi(params);
		dp("dealStore", "setDealDetail", content?.[0]);
	},
	createDraftAct: async (arg: INewDealDraft) => {
		const { data } = await httpApi.createDraftApi(arg);
		data.content[0] && dp("dealStore", "setCurrentDeal", data.content[0]);
		return data;
	},

	updateDraftAct: async (arg: IDealUpdate) => {
		await httpApi.updateDraftApi(arg);
	},

	submitDraftAct: async (arg: { id: number }) => {
		await httpApi.submitDraftApi(arg);
	},

	publishDraftAct: async (arg: TargetDeal) => {
		await httpApi.publishDraftApi(arg);
	},

	//
	renewDealAct: async (arg: TargetDeal) => {
		await httpApi.renewDealApi(arg);
	},
	reviseDealAct: async (arg: TargetDeal) => {
		const { data } = await httpApi.reviseDealApi(arg);
		return data;
	},

	// archive deal
	archiveDealAct: async (arg: TargetDeal) => {
		await httpApi.archiveDealApi(arg);
	},

	//延长60天Deal life span
	queryDealByIdAct: async (arg: QueryDealByIdApiRequest) => {
		const { data } = await httpApi.queryDealByIdApi(arg);
		dp("dealStore", "setCurrentDeal", data.content[0]);
	},

	queryDealForDashboardAct: async (arg: QueryDealForDashboard) => {
		const { data } = await httpApi.queryDealForDashboardApi(arg);
		dp("dealStore", "setCurrentUserDealsList", data.content);
		dp("dealStore", "setListTotalCount", data.count);
	},

	// 统计数据获取
	getDealStatisticsAct: async (arg: DealStatisticsQueryModel) => {
		const {
			data: { content, count },
		} = await httpApi.getDealStatisticsApi(arg);
		dp("dealStore", "setStatistics", content);
		dp("dealStore", "setStatisticsCount", count);
	},

	getDealStatisticsDetailAct: async (arg: DealChartsQueryModel) => {
		const {
			data: { content },
		} = await httpApi.getDealStatisticsDetailApi(arg);
		console.log(content);
		dp("dealStore", "setStatisticsDetail", content);
	},

	// file uploads
	getUploadUrlAct: async (arg: UploadDealFileModel) => {
		const { file, ...rest } = arg;
		rest.id = Number(rest.id);
		const { data } = await httpApi.getDealFileUploadApi(rest);
		const { fileUrl, presignedUrl } = data.content;
		await httpApi.fileUploadApi(presignedUrl, file!);
		return { presignedUrl, fileUrl };
	},

	// PDF file uploads
	getPDFUploadUrlAct: async (arg: UploadDealFileModel) => {
		const { file, ...rest } = arg;
		rest.id = Number(rest.id);
		const { data } = await httpApi.getDealPDFUploadApi(rest);
		const { fileUrl, presignedUrl } = data.content;
		await httpApi.fileUploadApi(presignedUrl, file!);
		return { presignedUrl, fileUrl };
	},
	shareAttamptAct: async (arg: ShareAttamptParams) => {
		httpApi.shareAttamptApi(arg);
	},
	// 市场页面的列表查询
	queryUserListAct: async (searchParams: QueryUserDealListActParams = {}) => {
		const {
			data: { content },
		} = await httpApi.dealUserDealListApi({ ...searchParams });
		dp("dealStore", "setUserDealList", content);
	},
	queryRelatedListAct: async (
		searchParams: Partial<QueryUserListActParams> = {},
	) => {
		const {
			data: { content },
		} = await httpApi.dealMarketplaceListApi({ ...searchParams });
		dp("dealStore", "setRelatedDealList", content);
	},
	getFromConnectionAct: async (arg: GetFromConnectionParams) => {
		const { data } = await httpApi.getFromConnection(arg);
		await dpChain("dealStore").setCurrentUserDeal(data.content);
		return data.content;
	},
	queryUserInteractionAct: async (arg: any) => {
		await httpApi.queryUserInteractionApi(arg);
	},
	setIsDetailAct: (isDetail: boolean) => {
		return {
			isDetail,
		};
	},
	setPageNum: (pageNum: number) => {
		return {
			pageNum,
		};
	},

	addAct: async (params) => {
		await httpApi.addApi(pickBy(params));
	},
	deleteAct: async (params) => {
		await httpApi.deleteApi(params);
	},
	updateAct: async (params) => {
		await httpApi.updateApi(pickBy(params));
	},
	approveAct: async (params: {
		id: number;
		title: string;
		content: string;
	}) => {
		await httpApi.approveApi(params);
	},
	rejectAct: async (params: { id: number; reject_reason: string }) => {
		await httpApi.rejectApi(params);
	},
	revokeAct: async (params: { id: number }) => {
		await httpApi.revokeApi(params);
	},
	// 请求deal列表
	queryDealListAct: async (params: QueryActParams, api) => {
		dp("dealStore", "setLoading", true);
		const res = await httpApi
			.queryApi<DealEntity>({
				page: api.getState().dealStore.pageData.pageNum || 1,
				page_size: api.getState().dealStore.pageData.pageSize,
				...params,
			})
			.finally(() => {
				dp("dealStore", "setLoading", false);
			});
		const { content: dataList, count } = res.data;
		dp("dealStore", "setDealList", {
			list: dataList,
			total: count,
		});
	},
	queryLiveDealListAct: async (params: QueryActParams, api) => {
		dp("dealStore", "setLoading", true);
		const res = await httpApi
			.queryLiveApi<DealEntity>({
				page: api.getState().dealStore.approvalPageData.pageNum || 1,
				page_size: api.getState().dealStore.approvalPageData.pageSize,
				status: "pending",
				is_submitted: true,
				is_approved: false,
				is_draft: true,
				...params,
			})
			.finally(() => {
				dp("dealStore", "setLoading", false);
			});
		const { content: dataList, count } = res.data;
		dp("dealStore", "setApprovalDealList", {
			list: dataList,
			total: count,
		});
	},
	queryApprovalDealListAct: async (params: QueryActParams, api) => {
		dp("dealStore", "setLoading", true);
		const res = await httpApi
			.queryApi<DealEntity>({
				page: api.getState().dealStore.approvalPageData.pageNum || 1,
				page_size: api.getState().dealStore.approvalPageData.pageSize,
				status: "pending",
				is_submitted: true,
				is_approved: false,
				is_draft: true,
				...params,
			})
			.finally(() => {
				dp("dealStore", "setLoading", false);
			});
		const { content: dataList, count } = res.data;
		dp("dealStore", "setApprovalDealList", {
			list: dataList,
			total: count,
		});
	},
	queryRankDealListAct: async (params: QueryActParams, api) => {
		dp("dealStore", "setLoading", true);
		const res = await httpApi
			.queryApi<DealEntity>({
				page: api.getState().dealStore.rankPageData.pageNum || 1,
				page_size: api.getState().dealStore.rankPageData.pageSize,
				is_submitted: true,
				is_approved: false,
				is_draft: true,
				order: {
					priority: "DESC",
					rating: "DESC",
				},
				...params,
			})
			.finally(() => {
				dp("dealStore", "setLoading", false);
			});
		const { content: dataList, count } = res.data;
		dp("dealStore", "setRankList", {
			list: dataList,
			total: count,
		});
	},
	rankListAct: async (params: RankApiParams) => {
		console.log("params", params);
		httpApi.rankApi(params);
	},
	querySearchListAct: async () => {
		dp("dealStore", "setLoading", true);
		const res = await httpApi
			.queryApi<DealEntity>({
				is_approved: true,
				is_draft: false,
				status: "active",
			})
			.finally(() => {
				dp("dealStore", "setLoading", false);
			});
		dp("dealStore", "setSearchList", res.data.content);
	},
});

export default thunks;
