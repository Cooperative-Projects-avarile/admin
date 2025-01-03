/* Instruments */
import { createThunks } from "src/service/setup";

import httpApi from "./api";
import { dp } from "src/service";
import { pickBy } from "lodash-es";
import { UUID } from "@/common/utils";

const thunks = createThunks("categoryStore", {
	categoryFindAllAct: async () => {
		const {
			data: { content },
		} = await httpApi.categoryFindAllApi();
		const { allPrimeCategory, allChildCategory, allParentCategory } =
			content;
		dp("categoryStore", "setAllChildCategory", allChildCategory);
		dp("categoryStore", "setAllParentCategory", allParentCategory);
		dp("categoryStore", "setAllPrimeCategory", allPrimeCategory);
	},
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
		const data = await httpApi.queryApi({
			page: api.getState().categoryStore.pageData.pageNum || 1,
			...pickBy(params),
		});
		dp("categoryStore", "setCategoryList", {
			list: data,
			total: data.length,
		});
	},
});

export default thunks;
