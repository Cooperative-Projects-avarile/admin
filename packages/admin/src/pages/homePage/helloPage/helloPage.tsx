import { useFlatInject } from "@/common/hooks";
import { useEffect } from "react";
import ColumnChart from "./components/columnChart/columnChart";
import styles from "./helloPage.module.scss";

const HelloPage = (props) => {
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
		</div>
	);
};

export default HelloPage;
