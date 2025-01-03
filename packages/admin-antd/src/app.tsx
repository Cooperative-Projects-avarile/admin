import { ThemeProvider } from "@/mui/theme/theme-provider";
import "nprogress/nprogress.css";
import { Routes } from "react-router-dom";
import { routerHelper } from "src/service";
import { useFlat } from "./service";

const App = () => {
	const { isLoading } = useFlat("appStore", {
		isCollapsedMenu: "IN",
		isLoading: "IN",
	});

	const { routesTree } = useFlat("routerStore", {
		routesTree: "IN",
	});

	return (
		<ThemeProvider>
			<Routes>
				{routesTree.map((item) => {
					return routerHelper.toRenderRouteLoop(item);
				})}
			</Routes>
			{isLoading && <div className="loading g-glossy"></div>}
		</ThemeProvider>
	);
};

export default App;
