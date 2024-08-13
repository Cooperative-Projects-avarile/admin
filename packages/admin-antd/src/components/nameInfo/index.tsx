import { theme as antdTheme, Typography } from "antd";
import { useFlat } from "src/service";
const NameInfo = () => {
	const { isCollapsedMenu, settingData } = useFlat("appStore");
	const antdThemeToken = antdTheme.useToken();
	const { projectName } = settingData;
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				fontSize: "20px",
				fontWeight: "bold",
				whiteSpace: "nowrap",
				color: antdThemeToken.token.colorText,
				alignItems: "center",
				position: "relative",
				left: isCollapsedMenu ? "0px" : "-15px",
			}}
		>
			<img
				style={{
					width: "36px",
					height: "36px",
					marginRight: "5px",
				}}
				src={"/favicon-32x32.png"}
			></img>
			<div
				style={{
					fontSize: "30px",
					marginLeft: "12px",
					fontWeight: "bold",
				}}
			>
				{"Admin"}
			</div>
		</div>
	);
};

export default NameInfo;
