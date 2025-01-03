import { http } from "@/common/http";
import { ICategory } from "@/types/model";
import { Category } from "./slice";
const baseUrl = "/api/category/";

// 增
function addApi(data: any) {
	return http.request({
		url: baseUrl + "create",
		method: "POST",
		data,
	});
}

// 删
function deleteApi(data: any) {
	return http.request({
		url: baseUrl + "delete",
		method: "POST",
		data,
	});
}

// 改
function updateApi(data: any) {
	return http.request({
		url: "/api/subscription/create",
		method: "POST",
		data,
	});
}

// 查
function queryApi(data: any) {
	return http.request<any, Category[]>({
		url: "/api/subscription/query",
		method: "POST",
		data,
	});
}
function categoryFindAllApi() {
	return http.request<{
		content: {
			allChildCategory: ICategory[];
			allParentCategory: ICategory[];
			allPrimeCategory: ICategory[];
		};
	}>({
		url: "/api/category/find/all",
		method: "POST",
	});
}

const api = {
	categoryFindAllApi,
	addApi,
	deleteApi,
	updateApi,
	queryApi,
};

export default api;
