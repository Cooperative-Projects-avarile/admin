import { useGreatAsync, useInject } from "@/common/hooks";
import { ROUTE_ID } from "@/config/routerConfig";
import { routerHelper } from "@/services";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userInfoStore] = useInject("userInfoStore");
  const {
    actions: { login },
  } = userInfoStore;
  const { loading, run: loginG } = useGreatAsync(login, {
    auto: false,
    single: true,
  });
  const navi = useNavigate()
  const onFinish = async (values: any) => {
    // 开发环境使用默认账号密码
    await loginG({
      userName: "avarile@gmail.com",
      password: "1q2w3e4r",
    });
    let path = routerHelper.getRoutePathByKey(ROUTE_ID.helloPage)
    navi(path)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {loading ? 1 : 0}
      <Form.Item
        label="用户名"
        name="name"
        rules={[{ required: true, message: "请输入！" }]}
      >
        <Input placeholder={"用户名是admin"} />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: "请输入！" }]}
      >
        <Input.Password placeholder={"密码是123"} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>记住我</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
