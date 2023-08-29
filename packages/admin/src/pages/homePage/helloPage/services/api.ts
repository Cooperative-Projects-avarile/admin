import { http } from "@/common/http";
import {
	OpportunityStatisticsEntity,
	PlatformStatisticsEntity,
} from "./pageStore/model";

let baseUrl = "/nestApi/statistics/query/";

export interface QueryOpportunityParams {
	opportunity_ids: number[];
	order?: { [key: string]: any };
}

export interface QueryPlatformParams {
	order?: { [key: string]: any };
}

const queryOpportunity = (data: QueryOpportunityParams) => {
	return http.request<OpportunityStatisticsEntity[]>({
		url: baseUrl + "opportunity",
		method: "POST",
		data,
	});
};

const queryPlatform = (data: QueryPlatformParams) => {
	return http.request<PlatformStatisticsEntity[]>({
		url: baseUrl + "platform",
		method: "POST",
		data,
	});
};

const devApi = {
	queryOpportunity,
	queryPlatform,
};

export default devApi;
