import KeepAlive from "@/common/hocs/keepAlive";
import themeProviderHoc from "@/common/hocs/themeHoc/themeHoc";
import { initAllStores, useFlatInject } from "@/common/hooks";
import useLocationListen from "@/common/hooks/useLocationListen";
import { routerHelper } from "@/services";
import defaultTopPermission from "@/static/defaultTopPermission";
import { Button, Layout, Menu, Modal } from "antd";
import { useNavigate, type Location } from "react-router-dom";
import Breadcrumb from "./components/breadcrumb/breadcrumb";
import Tabs from "./components/tabs/tabs";
import styles from "./homePage.module.scss";

const { Header, Content, Sider } = Layout;

const HomePage = () => {
	const { updatePermissions } = useFlatInject("userInfoStore")[0];
	const { addTabHistoryAction } = useFlatInject("routerStore")[0];
	const {
		menuData,
		menuDefaultOpenKeys,
		menuDefaultSelectedKeys,
		setMenuDefaultOpenKeysAct,
		setMenuDefaultSelectedKeysAct,
	} = useFlatInject("appStore")[0];
	const navigate = useNavigate();

	useLocationListen((location: Location) => {
		const { pathname } = location;
		const selectedKeysTemp = pathname.split("/").filter((item) => {
			return item;
		});
		setMenuDefaultSelectedKeysAct([selectedKeysTemp.slice(-1)[0]]);
		const openKeysTemp = selectedKeysTemp.slice(
			1,
			selectedKeysTemp.length - 1,
		);
		setMenuDefaultOpenKeysAct(openKeysTemp.length ? openKeysTemp : []);
		addTabHistoryAction(location);
	});
	return (
		<Layout className={styles.content}>
			<Header className="header">
				<div className={styles.logo}>Moderate admin React</div>
				<Button
					type="primary"
					onClick={() => {
						Modal.confirm({
							title: "确定么？",
							content: "更新权限之后，需要重新登陆",
							onOk: () => {
								{
									updatePermissions(
										defaultTopPermission,
									).then(() => {
										initAllStores();
										routerHelper.init();
										navigate("/");
									});
								}
							},
						});
					}}
					className={styles.resetBtn}
				>
					重置权限
				</Button>
			</Header>
			<Layout>
				<Sider width={260} className="site-layout-background">
					{menuData.length > 0 && menuDefaultOpenKeys && (
						<Menu
							theme="dark"
							mode="inline"
							selectedKeys={menuDefaultSelectedKeys}
							defaultOpenKeys={menuDefaultOpenKeys}
							style={{ height: "100%", borderRight: 0 }}
							items={menuData}
							onClick={({ key }) => {
								const path =
									routerHelper.getRoutePathByKey(key);
									debugger
								if (path) {
									navigate(path);
								}
							}}
						/>
					)}
				</Sider>
				<Layout style={{ padding: "0 24px 24px" }}>
					<Breadcrumb />
					<Content
						className="site-layout-background"
						style={{
							margin: 0,
							minHeight: 280,
							height: "100%",
							overflow: "auto",
						}}
					>
						<Tabs></Tabs>
						<div
							style={{
								overflow: "auto",
								padding: 32,
								background: "white",
							}}
						>
							<KeepAlive
								include={[
									"/homePage/sysPage/userPage",
									"/homePage/sysPage/rolePage",
								]}
								keys={[]}
							></KeepAlive>
						</div>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default themeProviderHoc(HomePage, {});
