import { Layout, theme } from "antd";
import Tabs from "src/components/navTabs";
import React from "react";

const { Content } = Layout;
const MainContent = ({ children }: React.PropsWithChildren) => {
	const {
		token: { colorFillAlter },
	} = theme.useToken();
	return (
		<Content
			style={{
				margin: "12px",
				display: "flex",
				flexDirection: "column",
				background: colorFillAlter,
			}}
		>
			<Tabs />
			<div
				style={{
					flex: 1,
					overflow: "auto",
					padding: 32,
					height: "100%",
					overflowX: "hidden",
				}}
			>
				{children}
			</div>
		</Content>
	);
};
export default MainContent;
