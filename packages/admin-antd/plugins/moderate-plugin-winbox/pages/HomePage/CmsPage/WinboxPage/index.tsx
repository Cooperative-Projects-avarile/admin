import { Button } from "antd";
import { Suspense } from "react";
import { appHelper } from "src/service";

const WinboxPage = () => {
	return (
		<div>
			<Button
				onClick={() => {
					appHelper.addWinbox({
						content: <Suspense></Suspense>,
					});
				}}
			>
				Show winbox
			</Button>
		</div>
	);
};

export default WinboxPage;
