import { Layout, theme } from "antd";
import styles from "./index.module.scss";
import MainContent from "./mainContent";
import NavHeader from "./navHeader";
import SliderMenu from "./sliderMenu";
import { useFlat } from "src/service";
const { Content, Footer } = Layout;
export const Wind = ({
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
			<Content style={{ padding: "10px 48px" }}>
				<Layout
					style={{
						padding: "24px 0",
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
						height: "100%",
					}}
				>
					<SliderMenu />
					<MainContent isDark={isDark}>{children}</MainContent>
				</Layout>
			</Content>
			<Footer style={{ textAlign: "center" }}>{projectName}</Footer>
		</Layout>
	);
};
