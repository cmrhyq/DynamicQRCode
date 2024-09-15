import "./login.css";
import loginBox from "../../assets/images/login_box.png"
import {Button, Checkbox, Col, Flex, Form, Input, message, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

export default function Login() {
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = (values) => {
        console.log(values);
    }
    const createAndForgot = () => {
        messageApi.open({
            type: 'warning',
            content: '创建账户或忘记密码请联系管理员',
        });
    }
    return (
        <div className="main-box">
            {contextHolder}
            <div className="login-box">
                <Row justify="center" align="middle" style={{margin: "0 auto"}}>
                    <Col span={12}>
                        <img src={loginBox} alt="" style={{width: "100%"}}/>
                    </Col>
                    <Col span={12}>
                        <Form name="login"
                              initialValues={{remember: true}}
                              style={{maxWidth: 360}}
                              onFinish={onFinish}>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username",
                                    }
                                ]}>
                                <Input prefix={<UserOutlined/>}
                                       placeholder="Username"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password",
                                    }
                                ]}>
                                <Input.Password prefix={<LockOutlined/>}
                                       type="password"
                                       placeholder="password"/>
                            </Form.Item>
                            <Form.Item>
                                <Flex justify="space-between" align="center">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <a href="#" onClick={createAndForgot}>Forgot password</a>
                                </Flex>
                            </Form.Item>
                            <Form.Item>
                                <Flex gap="large" wrap align="center" justify="space-between">
                                    <Button type="primary" htmlType="submit">
                                        Login Now
                                    </Button>
                                    <Button type="dashed" onClick={createAndForgot}>
                                        Create Account
                                    </Button>
                                </Flex>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
