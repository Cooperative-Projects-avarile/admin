import { createActions } from "@/common/hooks";
import api from "../api";
import state from "./state";
import { PageType, QueryActParams } from "./model";
import { pickBy } from "lodash-es";

const actions = createActions(state)({
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
	setAddModalShowAct: (isShowAddModal: boolean, recordData = null) => {
		let extra = !isShowAddModal?{
			isDetail:false
		}:{}
		return {
			recordData,
			isShowAddModal,
			...extra
		};
	},
	addAct: async (params) => {
		await api.addApi(pickBy(params));
	},
	deleteAct: async (params) => {
		await api.deleteApi(params);
	},
	updateAct: async (params) => {
		await api.upadteApi(pickBy(params));
	},
	approveAct: async (params: { id: number; title: string }) => {
		await api.approveApi(params);
	},
	rejectAct: async (params: { id: number; reject_reason: string }) => {
		await api.rejectApi(params);
	},
	queryAct:
		(params:QueryActParams = {}) =>
		async (naturApi) => {
			naturApi.setState({
				loading: true,
			});
			const res = await api.queryApi<PageType>(params).finally(() => {
				naturApi.setState({
					loading: false,
				});
			});
			const { content: dataList, count } = res.data;
			return {
				pageNum: params.page,
				dataList,
				total: count,
			};
		},
});

export default actions;
