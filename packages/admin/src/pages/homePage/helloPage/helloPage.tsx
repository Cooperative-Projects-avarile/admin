import { useFlatInject } from "@/common/hooks";
import { useEffect } from "react";
import ColumnChart from "./components/columnChart/opportunityColumnChart";
import PlatformColumnChart from "./components/columnChart/platformColumnChart";
import styles from "./helloPage.module.scss";

const HelloPage = () => {
	const { queryOpportunityACT, queryPlatformACT } =
		useFlatInject("helloPageStore")[0];

	useEffect(() => {
		queryOpportunityACT({
			opportunity_ids: [],
			order: {},
		});
		queryPlatformACT({
			order: {},
		});
	}, []);

	return (
		<div className={styles.content}>
			<ColumnChart />
			<PlatformColumnChart />
		</div>
	);
};

export default HelloPage;
