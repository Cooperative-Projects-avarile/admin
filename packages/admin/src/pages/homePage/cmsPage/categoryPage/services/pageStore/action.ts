import { createActions } from "@/common/hooks";
import { UUID } from "@/common/utils";
import api from "../api";
import { PageType, QueryActParams } from "./model";
import state from "./state";
import { pickBy } from "lodash-es";

const actions = createActions(state)({
	refreshFormVersionAct: () => {
		return {
			formVersion: UUID(),
		};
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
	setAddModalShowAct: (isShowAddModal: boolean, recordData = null) => {
		let extra = !isShowAddModal
			? {
					isDetail: false,
			  }
			: {};
		return {
			recordData,
			isShowAddModal,
			...extra,
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
	queryAct:
		(params: QueryActParams = {}) =>
		async (naturApi) => {
			naturApi.setState({
				loading: true,
			});
			const res = await api.queryApi<PageType>(params).finally(() => {
				naturApi.setState({
					loading: false,
				});
			});
			const { data: dataList, count } = res;
			return {
				pageNum: params.page,
				dataList,
				total: count,
			};
		},
});

export default actions;
