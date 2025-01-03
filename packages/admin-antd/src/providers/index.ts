import { pluginProviders } from "plugins/config/providers";
import RouterProvider from "./routerProvider";
import AuthProvider from "./authProvider";
import ServiceProvider from "./serviceProvider";
import { NotifyProvider } from "@/mui/components";

const providerArr = [
	ServiceProvider,
	RouterProvider,
	AuthProvider,
	NotifyProvider,
	...pluginProviders,
];

export default providerArr;
