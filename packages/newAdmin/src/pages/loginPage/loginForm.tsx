import { Button, Form, Input, message } from "antd";
import { Fragment, useEffect, useState } from "react";
import { useGreatAsync } from "src/common/hooks";
import storageHelper from "src/common/utils/storageHelper";
import { useFlat } from "src/reduxService";
/**
 * 被注释掉的是滑块拼图验证功能 暂时保留
 * @returns
 */
const LoginForm = () => {
	const [form] = Form.useForm();
	let { loginNest, btnTime, setBtnTime, setBtnCon, getLoginCodeAct } =
		useFlat("authStore");
	// const [isShow, setIsShow] = useState<boolean>(false);
	const [timer, setTimer] = useState<ReturnType<typeof setInterval>>();
	const { fn: loginG } = useGreatAsync(loginNest, {
		auto: false,
		single: true,
	});
	useEffect(() => {
		getVerifCode();
		//图片滑块验证==获取图片地址
		// getImageUrlAct();
		//验证码倒计时刷新时，应保证继续倒计时
		if (btnTime > 0 && btnTime < 60) {
			startTimer();
		}
	}, []);

	const onFinish = async (values: any) => {
		// 开发环境使用默认账号密码
		loginG({
			username: values.name,
			password: values.password,
			captchaVerification: values.code,
		}).then(() => {
			clearInterval(timer);
			storageHelper.setItem("BTN_CON", "点击获取验证码");
			storageHelper.setItem("BTN_TIME", 60);
		});
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	const getVerifCode = () => {
		getLoginCodeAct().then(() => {
			message.success("验证码发送成功");
		});
	};
	//开启定时器
	const startTimer = () => {
		setTimer(
			setInterval(() => {
				if (btnTime <= 0) {
					restBtn();
				} else {
					setBtnTime(btnTime--);
					setBtnCon(btnTime + "s后重新获取验证码");
				}
			}, 1000),
		);
	};
	//重置获取验证码信息
	const restBtn = () => {
		clearInterval(timer);
		setBtnTime(60);
		setBtnCon("点击获取验证码");
	};

	return (
		<Fragment>
			<Form
				form={form}
				name="basic"
				labelCol={{ span: 8 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				style={{ padding: "0 15px" }}
			>
				<Form.Item
					label=""
					name="name"
					rules={[
						{
							required: true,
							message: "用户名不能为空！",
						},
						{
							max: 100,
							message: "用户名不得多于100个字符",
						},
					]}
				>
					<Input placeholder={"请输入用户名"} />
				</Form.Item>

				<Form.Item
					label=""
					name="password"
					rules={[
						{
							required: true,
							message: "密码不能为空！",
						},
						{
							max: 19,
							message: "密码长度不能多于19个字符",
						},
					]}
				>
					<Input.Password placeholder={"请输入密码"} />
				</Form.Item>
				<Form.Item wrapperCol={{ span: 24 }}>
					<Button
						type="primary"
						htmlType="submit"
						style={{ width: "100%" }}
					>
						Login
					</Button>
				</Form.Item>
			</Form>
		</Fragment>
	);
};

export default LoginForm;
