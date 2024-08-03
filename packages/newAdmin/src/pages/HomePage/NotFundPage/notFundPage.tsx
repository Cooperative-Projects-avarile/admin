import { Button, Result } from "antd";
import React from "react";
import { useFlat } from "src/service";
import { RouterHelper } from "src/service/helper";
import { ROUTE_ID } from "src/router/name";

const ErrPage: React.FC = () => {
	const { routesPermissions } = useFlat("authStore");
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				alignContent: "center",
			}}
		>
			{routesPermissions && (
				<Result
					status="404"
					title="404"
					subTitle="对不起，没有页面匹配当前url."
					extra={
						<Button
							onClick={() => {
								RouterHelper.jumpTo(ROUTE_ID.HelloPage);
							}}
							type="primary"
						>
							返回首页
						</Button>
					}
				/>
			)}
		</div>
	);
};
export default ErrPage;
