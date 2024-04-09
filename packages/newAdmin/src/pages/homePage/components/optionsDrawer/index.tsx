import type { DrawerProps } from "antd";
import { Button, Drawer, Space, theme } from "antd";
import React, { useState } from "react";
import { useFlat } from "src/reduxService";

const OptionsDrawer: React.FC = () => {
	const { isShowOptionsDrawer, setIsShowOptionsDrawer } = useFlat("appStore");
	const [placement] = useState<DrawerProps["placement"]>("right");
	const antdToken = theme.useToken();

	const onClose = () => {
		setIsShowOptionsDrawer(false);
	};

	return (
		<>
			<Drawer
				title="Drawer with extra actions"
				placement={placement}
				width={500}
				onClose={onClose}
				open={isShowOptionsDrawer}
				style={{
					color: antdToken.token.colorText,
				}}
				extra={
					<Space>
						<Button onClick={onClose}>Cancel</Button>
						<Button type="primary" onClick={onClose}>
							OK
						</Button>
					</Space>
				}
			>
				hello
			</Drawer>
		</>
	);
};

export default OptionsDrawer;
