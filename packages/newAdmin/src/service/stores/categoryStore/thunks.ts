/* Instruments */
import { pickBy } from "lodash-es";
import { UUID } from "src/common/utils";
import { createThunks } from "src/service/setup";
import names from "src/service/stores/names";
import httpApi from "./api";
import { dp } from "src/service";

const thunks = createThunks(names.categoryStore, {
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
	setAddModalShowAct: ({ isShowAddModal }: { isShowAddModal: boolean }) => {
		let extra = !isShowAddModal
			? {
					isDetail: false,
				}
			: {};
		return {
			isShowAddModal,
			...extra,
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
	queryListAct: async (params, api) => {
		const { data } = await httpApi.queryApi({
			page: api.getState().categoryStore.pageData.pageNum || 1,
			...pickBy(params),
		});
		const { content } = data || {};
		dp("categoryStore", "setCategoryList", {
			list: content,
			total: content.length,
		});
	},
});
export default thunks;
