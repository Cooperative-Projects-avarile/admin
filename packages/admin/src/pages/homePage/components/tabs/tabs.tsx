import { useInject } from "@/common/hooks";
import useLocationListen from "@/common/hooks/useLocationListen";
import { routerHelper } from "@/services";
import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./tabs.module.scss";

const TabsComp  = () => {
	const [activeKey, setActiveKey] = useState("");
	const [items, setItems] = useState([]);
	const navigate = useNavigate();
	const [routerStore] = useInject("routerStore");
	const {
		state: { tabsHistory },
		actions: { deleteTabHistory },
	} = routerStore;
	useEffect(() => {
		const tabsHistoryArr = Object.values(tabsHistory);
		setItems(
			tabsHistoryArr.map((item: any) => {
				const { pathname } = item;
				const id = pathname.split("/").slice(-1)[0];
				return {
					label: routerHelper.getRouteTitleByKey(id),
					key: pathname,
				};
			}),
		);
	}, [tabsHistory]);
	useLocationListen((location) => {
		setActiveKey(location.pathname);
	});
	const onChange = (newActiveKey: string) => {
		setActiveKey(newActiveKey);
		navigate(newActiveKey);
	};

	return (
		<Tabs
			className={styles.content}
			type="editable-card"
			onChange={onChange}
			activeKey={activeKey}
			items={items}
			hideAdd={true}
			onEdit={(e, action) => {
				if (action === "remove") {
					deleteTabHistory(e as string);
				}
			}}
		/>
	);
};

export default TabsComp
