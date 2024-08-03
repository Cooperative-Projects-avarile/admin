/* Instruments */
import { dp } from "src/service";
import { createThunks } from "src/service";
import httpApi from "./api";
import { DeleteApiParams, GetApiParams, Sort } from "./model";

const thunks = createThunks("sortStore", {
  createAct: async (params: Sort) => {
    return await httpApi.createApi(params);
  },
  deleteAct: async (params: DeleteApiParams) => {
    await httpApi.deleteApi(params);
  },
  updateAct: async (params: Sort) => {
    return await httpApi.upadteApi(params);
  },
  getDetailAct: async (params: GetApiParams) => {
    // await httpApi.getDetail(params);
    const { data } = await httpApi.getDetail(params);
    dp("sortStore", "setCurrentData", data);
  },
  queryListAct: async (_, api) => {
    const { filterData, tablePagedata } = api.getState().sortStore;
    const { pageNum, pageSize } = tablePagedata;
    // 请求回来list数据
    const { data } = await httpApi.getListApi({
      pageNo: pageNum,
      pageSize,
      ...filterData,
    });
    dp("sortStore", "setList", data);
  },
});
export default thunks;
