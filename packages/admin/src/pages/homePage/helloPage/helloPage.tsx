import { useFlatInject } from "@/common/hooks";
import { useEffect } from "react";
import ColumnChart from "./components/columnChart/opportunityColumnChart";
import PlatformColumnChart from "./components/columnChart/platformColumnChart";
import styles from "./helloPage.module.scss";
import { Space } from "antd";
import { CardContainer } from "./components/card/cardContainer";

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
			<Space
				direction="vertical"
				size={"middle"}
				style={{ display: "flex" }}
			>
				<CardContainer />
				<PlatformColumnChart />
			</Space>
		</div>
	);
};

export default HelloPage;
