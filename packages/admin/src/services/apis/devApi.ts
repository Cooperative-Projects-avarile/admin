import { http } from "@/common/http";
import { PageType } from "../stores/devStore/devStore.model";

export interface AdcompanyPageParams {
  pageName: string;
  pagePath: string;
  pageRemark: string;
}

export interface AddStoreParams {
  name: string;
  path: string;
  remark?: string;
}

export interface FetchPageListRes {
  pageList: PageType[];
  exportList: string[];
}

export interface FetchStoreListRes {
  list: string[];
}

// 查询文章列表，post
function fetchPageList() {
  return http.request<FetchPageListRes>({
    url: "/api/pageDev/getPageList",
    method: "GET",
  });
}

// 添加页面
function adcompanyPageList(params: AdcompanyPageParams) {
  return http.request({
    url: "/api/pageDev/addPage",
    method: "POST",
    data: params,
  });
}

// 查询仓库列表，post
function fetchStoreList() {
  return http.request<FetchStoreListRes>({
    url: "/api/storeDev/getStoreList",
    method: "GET",
  });
}
// 添加页面
function addStore(params: AddStoreParams) {
  return http.request({
    url: "/api/storeDev/addStore",
    method: "POST",
    data: params,
  });
}

// 查询仓库列表，post
function fetchApiList() {
  return http.request<FetchStoreListRes>({
    url: "/api/apiDev/getApiList",
    method: "GET",
  });
}
// 添加页面
function addApi(params: AddStoreParams) {
  
  return http.request({
    url: "/api/apiDev/addApi",
    method: "POST",
    data: params,
  });
}

const devApi = {
  fetchPageList,
  adcompanyPageList,
  fetchStoreList,
  addStore,
  fetchApiList,
  addApi
};

export default devApi;
