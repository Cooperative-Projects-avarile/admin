import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	MoonOutlined,
	SunOutlined,
	SyncOutlined,
} from "@ant-design/icons";
import {
	Button,
	Dropdown,
	Layout,
	MenuProps,
	Modal,
	Space,
	theme as antdTheme,
} from "antd";
import { useTranslation } from "react-i18next";
import themeHoc from "src/common/hocs/themeHoc/themeHoc";
import storageHelper from "src/common/utils/storageHelper";
import CustomBreadcrumb from "src/components/customBreadcrumb";
import { useFlat } from "src/service";
import { ThemeColor } from "src/service/stores/appStore/slice";
import styles from "./index.module.scss";

const CustomDropdownButton = themeHoc(Dropdown.Button, {});

const lngList: MenuProps["items"] = [
	{
		key: "zh",
		label: "中文",
	},
	{
		key: "en",
		label: "英文",
	},
];

const NavHeader = () => {
	const {
		isThemeAuto,
		setTheme,
		setIsThemeAuto,
		currentTheme,
		isCollapsedMenu,
		setIsCollapsedMenu,
		setLanguage,
		language,
	} = useFlat("appStore");
	const antdThemeToken = antdTheme.useToken();
	const { t, i18n } = useTranslation();
	const items = [
		{
			icon: <MoonOutlined />,
			label: t("app:dark"),
			key: ThemeColor.dark,
		},
		{
			icon: <SunOutlined />,
			label: t("app:light"),
			key: ThemeColor.light,
		},
		{
			icon: <SyncOutlined />,
			label: t("app:sys"),
			key: "auto",
		},
	];
	return (
		<Layout.Header
			style={{
				background: antdThemeToken.token.colorBgContainer,
				display: "flex",
				alignItems: "center",
				position: "relative",
			}}
		>
			<Button
				type="primary"
				style={{
					position: "absolute",
					left: "0px",
				}}
				onClick={() => {
					setIsCollapsedMenu(!isCollapsedMenu);
				}}
			>
				{isCollapsedMenu ? (
					<MenuUnfoldOutlined />
				) : (
					<MenuFoldOutlined />
				)}
			</Button>
			<CustomBreadcrumb />
			<div className={styles.toolBtnList}>
				<Dropdown
					menu={{
						items: lngList,
						selectable: true,
						defaultSelectedKeys: ["3"],
						onClick: (e) => {
							i18n.changeLanguage(e.key);
							setLanguage(e.key);
						},
					}}
				>
					<Space>
						<Button>
							{
								{
									zh: "中文",
									en: "EN",
								}[language]
							}
						</Button>
					</Space>
				</Dropdown>
				<CustomDropdownButton
					trigger={["hover"]}
					placement="bottomRight"
					buttonsRender={() => {
						return [
							<Button type="primary">
								{isThemeAuto
									? t("app:sys2")
									: items.find((item) => {
											return item.key == currentTheme;
										})?.label}
							</Button>,
							<Button
								type="primary"
								icon={
									items.find((item) => {
										return item.key == currentTheme;
									})?.icon
								}
							></Button>,
						];
					}}
					type="primary"
					menu={{
						items: items,
						onClick: (e) => {
							if (e.key == "auto") {
								setIsThemeAuto(true);
							} else {
								setIsThemeAuto(false);
								setTheme(e.key as ThemeColor);
							}
						},
					}}
					icon={<MoonOutlined />}
				></CustomDropdownButton>
				<Button
					type="primary"
					onClick={() => {
						Modal.confirm({
							title: "确定么？",
							content: "更新权限之后，需要重新登陆",
							onOk: () => {
								storageHelper.clear();
								window.location.href = "/";
							},
						});
					}}
				>
					{t("app:logout")}
				</Button>
			</div>
		</Layout.Header>
	);
};

export default NavHeader;
