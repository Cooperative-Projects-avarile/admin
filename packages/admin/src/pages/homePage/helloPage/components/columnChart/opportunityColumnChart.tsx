import { useFlatInject } from "@/common/hooks";
import { Column } from "@ant-design/plots";

const OpportunityColumnChart = () => {
	const { opportunityStatisticsDataNew } = useFlatInject("helloPageStore")[0];
	const config = {
		data: opportunityStatisticsDataNew,
		xField: 'created_at',
		yField: 'value',
		seriesField: 'type',
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

export default OpportunityColumnChart;
