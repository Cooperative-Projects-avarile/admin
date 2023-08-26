import { routerHelper } from "@/services";
import { useEffect } from "react";
import { Routes, useLocation, useNavigate } from "react-router-dom";
import { ROUTE_ID } from "./config/routerConfig";
import { useFlatInject } from "@/common/hooks";

const App = () => {
	const { routesData, createRoutesAction } = useFlatInject("routerStore")[0];
	const { token } = useFlatInject("userInfoStore")[0];
	const location = useLocation();
	const navi = useNavigate();

	useEffect(() => {
		// 判断是否登陆
		if (token) {
			const loginPath = routerHelper.getRoutePathByKey(
				ROUTE_ID.loginPage,
			);
			createRoutesAction();
			// 判断是否是登录页
			if (location.pathname === loginPath) {
				navi(routerHelper.getRoutePathByKey(ROUTE_ID.helloPage));
			}
		} else {
			navi(routerHelper.getRoutePathByKey(ROUTE_ID.loginPage));
		}
	}, [token]);

	return (
		<Routes>
			{routesData?.map((item) => {
				return routerHelper.toRenderRouteLoop(item);
			})}
		</Routes>
	);
};

export default App;
