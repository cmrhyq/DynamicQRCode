import "./login.css";
import loginBox from "../../assets/images/login_box.png"
import {Button, Checkbox, Col, Flex, Form, Input, message, Row} from "antd";
import {LockOutlined, UserOutlined, VerifiedOutlined} from "@ant-design/icons";
import {getCodeImg} from "../../api/login";
import {useEffect, useState} from "react";

export default function Login() {
    const [loginForm] = useState({
        codeUrl: "",
        username: "",
        password: "",
        code: "",
        uuid: "",
        // 验证码开关
        captchaEnabled: true,
        // 注册开关
        register: false,
    });
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = (values) => {
        console.log(values)
        const username = values.username;
        const password = values.password;
        const remenber = values.remember;
        const code = values.captcha
        const uuid = "123"
    }
    const createAndForgot = () => {
        messageApi.open({
            type: 'warning',
            content: '创建账户或忘记密码请联系管理员',
        });
    }

    const getCode = () => {
        getCodeImg().then(res => {
            loginForm.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
            if (loginForm.captchaEnabled) {
                loginForm.codeUrl = "data:image/gif;base64," + res.img;
                loginForm.uuid = res.uuid;
            }
        });
    }

    useEffect(() => {
        getCode();
        console.log(loginForm)
    })

    return (
        <div className="main-box">
            {contextHolder}
            <div className="login-box">
                <Row justify="center" align="middle" style={{margin: "0 auto"}}>
                    <Col span={13}>
                        <img src={loginBox} alt="" style={{width: "100%"}}/>
                    </Col>
                    <Col span={11}>
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
                            <Form.Item extra="We must make sure that your are a human.">
                                <Row gutter={8}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="captcha"
                                            noStyle
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input the captcha you got!',
                                                },
                                            ]}>
                                            <Input prefix={<VerifiedOutlined />}
                                                type="captcha"
                                                placeholder="captcha"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Button>Get captcha</Button>
                                    </Col>
                                </Row>
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
