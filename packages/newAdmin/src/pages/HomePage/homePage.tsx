import KeepAliveOutlet from "src/common/hocs/keepAlive/keepAliveOutlet";
import themeProviderHoc from "src/common/hocs/themeHoc/themeHoc";
import layoutMap from "src/layouts";
import { useFlat } from "src/service";

const HomePage = () => {
	const { settingData, currentTheme } = useFlat("appStore");
	const layoutName =
		currentTheme == "dark"
			? settingData?.layoutSet?.dark
			: settingData?.layoutSet?.light;
	const Layout =
		layoutMap[layoutName as keyof typeof layoutMap] ||
		(layoutMap.Default as any);

	return (
		<Layout>
			<KeepAliveOutlet />
		</Layout>
	);
};

export default themeProviderHoc(HomePage, {});
