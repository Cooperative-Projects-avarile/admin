import { http } from "@/common/http";

// 查询仓库列表，post
function searchApi(data: any) {
	return http.request({
		url: "/api/apiDev/getApiList",
		method: "POST",
		data,
	});
}

const devApi = {
	searchApi,
};

export default devApi;
