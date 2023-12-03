import { http } from "@/common/http";

// 增
function addApi(data) {
	return http.request({
		url: "/api/company/create",
		method: "POST",
		data,
	});
}

// 删
function deleteApi(data) {
	return http.request({
		url: "/api/company/delete",
		method: "POST",
		data,
	});
}

// 改
function upadteApi(data) {
	return http.request({
		url: "/api/company/update",
		method: "POST",
		data,
	});
}

// 查
function queryApi<T>(data: any) {
	return http.request<{}, { count: number, data: T[] }>({
		url: "/api/company/query",
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
