import { http } from "@/common/http";

let baseUrl = "/nestApi/category/";
// 增
function addApi(data) {
	return http.request({
		url: baseUrl + "create",
		method: "POST",
		data,
	});
}

// 删
function deleteApi(data) {
	return http.request({
		url: baseUrl + "delete",
		method: "POST",
		data,
	});
}

// 改
function upadteApi(data) {
	return http.request({
		url: baseUrl + "update",
		method: "POST",
		data,
	});
}

// 查
function queryApi(data: any) {
	return http.request({
		url: baseUrl + "query",
		method: "POST",
		data,
	});
}

const devApi = {
	addApi,
	deleteApi,
	upadteApi,
	queryApi,
};

export default devApi;
