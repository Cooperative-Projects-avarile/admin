import { theme as antdTheme } from "antd";
import { useFlat } from "src/service";
const NameInfo = () => {
	const { isCollapsedMenu, settingData } = useFlat("appStore");
	const { logo, projectName } = settingData;
	const antdThemeToken = antdTheme.useToken();
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				fontSize: "20px",
				margin: "18px 20px 18px 0px",
				fontWeight: "bold",
				whiteSpace: "nowrap",
				color: antdThemeToken.token.colorText,
				alignItems: "center",
				position: "relative",
			}}
		>
			<img
				style={{
					width: "26px",
					height: "26px",
					marginRight: "5px",
				}}
				src={logo}
			></img>
			{isCollapsedMenu ? "" : projectName}
		</div>
	);
};

export default NameInfo;
