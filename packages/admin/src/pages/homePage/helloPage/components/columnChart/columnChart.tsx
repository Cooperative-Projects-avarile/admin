import { useFlatInject } from "@/common/hooks";
import { Column } from "@ant-design/plots";
import { useEffect, useState } from "react";

const ColumnChart = () => {
	const { opportunityStatisticsData } = useFlatInject("helloPageStore")[0];

	const config = {
		data:opportunityStatisticsData,
		xField: "城市",
		yField: "销售额",
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

export default ColumnChart;
