import { Layout, theme } from "antd";
import styles from "./index.module.scss";
import MainContent from "./mainContent";
import NavHeader from "./navHeader";
import SliderMenu from "./sliderMenu";
import React from "react";

const { Content, Footer } = Layout;
export const Wind = ({ children }: React.PropsWithChildren) => {
	const {
		token: { colorBgContainer, borderRadiusLG, colorBgLayout },
	} = theme.useToken();

	return (
		<div
			className={styles.content}
			style={{
				background: colorBgLayout,
			}}
		>
			<NavHeader></NavHeader>
			<Content
				style={{
					display: "flex",
					padding: "10px 48px",
					flex: 1,
					height: 0,
					overflowY: "auto",
				}}
			>
				<div
					style={{
						display: "flex",
						padding: "24px 0",
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
						overflowY: "auto",

						flex: 1,
					}}
				>
					<SliderMenu />
					<MainContent>{children}</MainContent>
				</div>
			</Content>
			<Footer
				style={{ textAlign: "center", height: "30px", padding: "10px" }}
			>
				闲D岛🏝️
			</Footer>
		</div>
	);
};
