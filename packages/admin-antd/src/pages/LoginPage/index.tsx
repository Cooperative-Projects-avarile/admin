import { Fit, Layout } from "@rive-app/react-canvas";
import { RiveAni } from "plugins/moderate-plugin-rive/common/components/riveAni";
import LoginCard from "./loginCard";
import LoginForm from "./loginForm";
import styles from "./loginPage.module.scss";
import { useIsMobile } from "src/common/hooks";

const LoginPage = () => {
	const isMobile = useIsMobile();
	return (
		<div className={styles.content}>
			<LoginCard>
				<LoginForm />
			</LoginCard>
			{!isMobile && (
				<div
					style={{
						flex: 1,
					}}
				>
					<img
						style={{
							width: "100%",
						}}
						src="/loginCover.png"
						alt="loginCover.png"
					/>
				</div>
			)}
		</div>
	);
};

export default LoginPage;
