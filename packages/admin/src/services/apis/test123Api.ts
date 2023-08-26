
import { http } from "@/common/http";
import { PageType } from "../stores/devStore/devStore.model";

export interface AdcompanyPageParams {
  pageName: string;
  pagePath: string;
  pageRemark: string;
}

export interface FetchPageListRes {
  pageList: PageType[];
  exportList: string[];
}


// 查询文章列表，post
function fetchPageList() {
  return http.request<FetchPageListRes>({
    url: "/api/dev/getPageList",
    method: "GET",
  });
}

// 添加页面
function adcompanyPageList(params: AdcompanyPageParams) {
  return http.request({
    url: "/api/dev/adcompanyPage",
    method: "POST",
    data: params,
  });
}


const test123Api = {
  fetchPageList,
  adcompanyPageList,
};

export default test123Api;
