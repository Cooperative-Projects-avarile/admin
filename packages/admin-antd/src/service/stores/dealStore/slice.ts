/* Core */
import { type PayloadAction } from "redux-eazy";

/* Instruments */
import { DealType } from "@/types/model/dealEntity";
import storageHelper from "src/common/utils/storageHelper";
import { createSlice } from "src/service/setup";
import {
	DealStatistics,
	DealStats,
	PageData,
	PaginationData,
	SliceState,
	UserDealEntity,
	DealEntity,
} from "./model";
import thunks from "./thunks";

/* Types */

const initialState = (): SliceState => {
	return {
		step: 1,
		searchList: [],
		isShowAddModal: false,
		isUpdate: false,
		recordData: null,
		loading: false,
		isDetail: false,
		formVersion: "0",
		approvalPageData: {
			dataList: [],
			pageSize: 16,
			pageNum: 1,
			total: 0,
		},
		rankPageData: {
			dataList: [],
			pageSize: 16,
			pageNum: 1,
			total: 0,
		},
		pageData: {
			dataList: [],
			pageSize: 16,
			pageNum: 1,
			total: 0,
		},
		//
		userDealList: [],
		isFirstAdd: false,
		stepIndex: 0,
		dealData: null,
		targetType: DealType.PARTNERSHIPS,
		currentDeal: null,
		dealList: [],
		pageSize: 8,
		page: 1,
		count: 0,
		// statistics, deal相关的统计数据
		statistics: [],
		statistics_count: 0,
		statistics_detail: null,
		// 当前用户的deal列表
		current_user_deals_list: [],
		current_user_deals_list_counter: 1,
		// 市场页-列表数据
		dealMarketList: [],
		dealMarketListPageNum: 1,
		// **deal详情**
		dealDetail: null,
		currentDealId: storageHelper.getItem("DEAL_ID") || NaN,
		// 评论翻页数据
		expandId: NaN,
		dealComentPagination: {
			pageNum: 1,
			pageCount: 0,
			pageSize: 6,
		},
		isComplete: false,
		currentUserDeal: null,
		relatedUserDealList: [],
		dealStat: null,
	};
};

const categorySlice = createSlice({
	name: "dealStore",
	stateInit: initialState,
	reducers: {
		setStep(state, action: PayloadAction<number>) {
			state.step = action.payload;
		},
		setIsFirstAdd(state, action: PayloadAction<boolean>) {
			state.isFirstAdd = action.payload;
		},
		setIsComplete(state, action: PayloadAction<boolean>) {
			state.isComplete = action.payload;
		},
		// **deal详情页面**
		// 当前deal的id
		setCurrentDealId(state, action: PayloadAction<number>) {
			state.currentDealId = action.payload;
			action.payload && storageHelper.setItem("DEAL_ID", action.payload);
		},
		// 当前deal的详情信息
		setDealDetail(state, action: PayloadAction<DealEntity | null>) {
			state.dealDetail = action.payload;
		},
		//
		setDealType(state, action: PayloadAction<DealType>) {
			const { payload } = action;
			state.targetType = payload;
			state.currentDeal = {
				...(state.currentDeal! || {}),
				type: payload,
			};
		},

		setCurrentUserDealsList: (
			state,
			action: PayloadAction<DealEntity[]>,
		) => {
			const { payload } = action;
			state.current_user_deals_list = payload;
		},
		setCurrentUserDealsListCounter: (
			state,
			action: PayloadAction<number>,
		) => {
			const { payload } = action;
			state.current_user_deals_list_counter = payload;
		},

		// 全量设置deal
		setCurrentDeal(state, action: PayloadAction<DealEntity | null>) {
			state.currentDeal = action.payload;
			state.targetType = action.payload?.type
				? action.payload?.type
				: DealType.PARTNERSHIPS;
		},

		// 增量更新deal，因为是步进器，数据是需要逐步扩展更新的
		updateCurrentDeal(state, action: PayloadAction<DealEntity>) {
			state.currentDeal = { ...state.currentDeal, ...action.payload };
		},

		setListTotalCount: (state, action: PayloadAction<number>) => {
			state.count = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setPageSize: (state, action: PayloadAction<number>) => {
			state.pageSize = action.payload;
		},
		setPageNum: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		// 设置交易产品列表
		setMarketList: (state, action: PayloadAction<DealEntity[]>) => {
			const { payload } = action;
			state.dealMarketList = payload;
		},
		setMarketListPageNum: (state, action: PayloadAction<number>) => {
			const { payload } = action;
			state.dealMarketListPageNum = payload;
		},
		setMarketListCount: (state, action: PayloadAction<number>) => {
			const { payload } = action;
			state.count = payload;
		},
		// 设置statistics
		setStatistics: (
			state,
			action: PayloadAction<Array<DealStatistics>>,
		) => {
			state.statistics = action.payload;
		},
		setStatisticsCount: (state, action: PayloadAction<number>) => {
			state.statistics_count = action.payload;
		},
		// **deal详情**
		// 评论翻页数据
		setDealComentPagination: (
			state,
			action: PayloadAction<Partial<PaginationData>>,
		) => {
			const { payload } = action;
			state.dealComentPagination = {
				...state.dealComentPagination,
				...payload,
			};
		},
		setStepIndex(state, action: PayloadAction<number>) {
			state.stepIndex = action.payload;
		},
		setExpandDealId(state, action: PayloadAction<number>) {
			state.expandId = action.payload;
		},
		setUserDealList(state, action: PayloadAction<DealEntity[]>) {
			state.userDealList = action.payload;
		},
		setRelatedDealList(state, action: PayloadAction<DealEntity[]>) {
			state.relatedUserDealList = action.payload;
		},
		setCurrentUserDeal(
			state,
			action: PayloadAction<UserDealEntity | null>,
		) {
			state.currentUserDeal = action.payload;
		},
		setStatisticsDetail(state, action: PayloadAction<DealStats | null>) {
			state.statistics_detail = action.payload;
		},
		setApprovalDealList(
			state,
			{ payload }: PayloadAction<{ list: DealEntity[]; total: number }>,
		) {
			state.approvalPageData = {
				...state.approvalPageData,
				total: payload.total,
				dataList: payload.list,
			};
		},
		setRankList(
			state,
			{ payload }: PayloadAction<{ list: DealEntity[]; total: number }>,
		) {
			state.rankPageData = {
				...state.rankPageData,
				total: payload.total,
				dataList: payload.list,
			};
		},
		setDealList(
			state,
			{ payload }: PayloadAction<{ list: DealEntity[]; total: number }>,
		) {
			state.pageData = {
				...state.pageData,
				total: payload.total,
				dataList: payload.list,
			};
		},
		setIsAddModalShow: (
			state,
			{
				payload: { isShowAddModal, recordData, isDetail },
			}: PayloadAction<{
				isShowAddModal: boolean;
				recordData?: any;
				isDetail?: boolean;
			}>,
		) => {
			state.recordData = recordData;
			state.isShowAddModal = isShowAddModal;
			!isShowAddModal
				? (state.isDetail = false)
				: (state.isDetail = !!isDetail);
		},
		setApprovalPageData(
			state,
			{ payload }: PayloadAction<Partial<PageData>>,
		) {
			state.approvalPageData = { ...state.approvalPageData, ...payload };
		},
		setRankPageData(state, { payload }: PayloadAction<Partial<PageData>>) {
			state.rankPageData = { ...state.rankPageData, ...payload };
		},
		setPageData(state, { payload }: PayloadAction<Partial<PageData>>) {
			state.pageData = { ...state.pageData, ...payload };
		},
		setSearchList(state, { payload }: PayloadAction<DealEntity[]>) {
			state.searchList = payload;
		},
	},
	extraReducers: (builder) => {
		Object.values(thunks).forEach((thk) => {
			builder
				.addCase(thk.pending, (state) => {
					state.loading = true;
				})
				.addCase(thk.fulfilled, (state) => {
					state.loading = false;
				})
				.addCase(thk.rejected, (state) => {
					state.loading = false;
				});
		});
	},
});

export default categorySlice;
