/* Core */
import { type PayloadAction } from "redux-eazy";

/* Instruments */

import { ICategory } from "@/types/model";
import { createSlice } from "src/service/setup";

/* Types */
export interface SliceState extends StoreStateBase {
	allChildCategory: ICategory[];
	allPrimeCategory: ICategory[];
	allParentCategory: ICategory[];
	loading: boolean;
	setIsAddModalShow: boolean;
}

export interface PageData {
	dataList: Category[];
	pageSize: number;
	pageNum: number;
	total: number;
}
export interface Category {
	created_at: Date;
	deleted_at: Date;
	description: string;
	id: number;
	name: string;
	parent_id: number;
	prime_id: number;
	updated_at: Date;
}
export interface StoreStateBase {
	pageData: PageData;
	isShowAddModal: boolean;
	isUpdate: boolean;
	currentData: unknown;
	loading: boolean;
	isDetail: boolean;
	formVersion: string;
}
const initialState = (): SliceState => {
	return {
		allChildCategory: [],
		allPrimeCategory: [],
		allParentCategory: [],
		loading: false,
		setIsAddModalShow: false,
		pageData: {
			dataList: [],
			pageSize: 12,
			pageNum: 1,
			total: 0,
		},
		isShowAddModal: false,
		isUpdate: false,
		currentData: null,
		isDetail: false,
		formVersion: "",
	};
};

const subsSlice = createSlice({
	name: "subsStore",
	stateInit: initialState,
	reducers: {
		setDataList(state, action: PayloadAction<any[]>) {
			state.pageData = {
				...state.pageData,
				dataList: action.payload,
			};
		},
		setIsAddModalShow(state, action: PayloadAction<boolean>) {
			state.isShowAddModal = action.payload;
		},
		setAllPrimeCategory: (state, action: PayloadAction<ICategory[]>) => {
			const { payload } = action;
			state.allPrimeCategory = payload;
		},
		setAllChildCategory: (state, action: PayloadAction<ICategory[]>) => {
			const { payload } = action;
			state.allChildCategory = payload;
		},
		setAllParentCategory: (state, action: PayloadAction<ICategory[]>) => {
			const { payload } = action;
			state.allParentCategory = payload;
		},
		setIsDetailAct(state, { payload }: PayloadAction<boolean>) {
			state.isDetail = payload;
		},
		setIsShowModal(state, { payload }: PayloadAction<boolean>) {
			state.isShowAddModal = payload;
		},
		setCurrentData(state, { payload }: PayloadAction<Category>) {
			state.currentData = payload;
		},
		setCategoryList(
			state,
			{ payload }: PayloadAction<{ list: Category[]; total: number }>,
		) {
			state.pageData = {
				...state.pageData,
				total: payload.total,
				dataList: payload.list,
			};
		},
		setPageData(state, { payload }: PayloadAction<Partial<PageData>>) {
			state.pageData = { ...state.pageData, ...payload };
		},
	},
});

export default subsSlice;
