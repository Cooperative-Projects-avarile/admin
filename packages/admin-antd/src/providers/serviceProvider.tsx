import { message } from "antd";
import React, { useEffect } from "react";
import { Provider } from "redux-eazy";
import { storageHelper } from "src/common/utils";
import { devHelper, dpChain, reduxStore } from "../service";

const App = (props: React.PropsWithChildren<{}>) => {
	return <>{props.children}</>;
};

const ServiceProvider = (props: React.PropsWithChildren<{}>) => {
	return (
		<Provider store={reduxStore}>
			<App>{props.children}</App>
		</Provider>
	);
};

export default ServiceProvider;
