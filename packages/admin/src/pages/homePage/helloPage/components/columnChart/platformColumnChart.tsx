import { useFlatInject } from "@/common/hooks";
import { Column } from "@ant-design/plots";
import { useEffect, useState } from "react";

const PlatformColumnChart = () => {
	const { platformStatisticsDataNew } = useFlatInject("helloPageStore")[0];
	const config = {
		data: platformStatisticsDataNew,
		xField: "created_at",
		yField: "value",
		seriesField: "type",
		isGroup: true,
		xAxis: {
			label: {
				autoRotate: false,
			},
		},
		slider: {
			start: 0.1,
			end: 0.2,
		},
	};

	return <Column {...config} />;
};

export default PlatformColumnChart;
