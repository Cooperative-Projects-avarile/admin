import { useIsMobile } from "src/common/hooks";
import LoginCard from "./loginCard";
import LoginForm from "./loginForm";
import styles from "./loginPage.module.scss";

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
							height: "100%",
							objectFit: "cover",
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
