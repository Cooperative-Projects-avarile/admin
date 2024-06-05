import { Layout, theme } from "antd";
import CustomBreadcrumb from "src/components/customBreadcrumb";
import styles from "./index.module.scss";
import MainContent from "./mainContent";
import NavHeader from "./navHeader";
import { useFlat } from "src/service";
const { Content, Footer } = Layout;
export const Rain = ({
	children,
	isDark,
	...rest
}: React.PropsWithChildren<{ isDark?: boolean }>) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	const { settingData } = useFlat("appStore");
	const { projectName } = settingData;
	return (
		<Layout {...rest} className={styles.content}>
			<NavHeader></NavHeader>
			<Content
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "10px 48px",
				}}
			>
				<CustomBreadcrumb />
				<Layout
					style={{
						flex: 1,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
						overflow: "auto",
					}}
				>
					<MainContent isDark={isDark}>{children}</MainContent>
				</Layout>
			</Content>
			<Footer style={{ textAlign: "center" }}>{projectName}</Footer>
		</Layout>
	);
};
