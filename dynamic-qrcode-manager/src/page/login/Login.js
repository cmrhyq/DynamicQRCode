import "./login.css";
import loginBox from "../../assets/images/login_box.png"
import {Button, Checkbox, Col, Flex, Form, Input, message, Row} from "antd";
import {LockOutlined, UserOutlined, VerifiedOutlined} from "@ant-design/icons";
import {getCodeImg} from "../../api/login";
import {useState} from "react";

function Login() {
    const [loginForm, setLoginForm] = useState({
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
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        const {username, password, remember, code} = values;
        const uuid = loginForm.uuid; // 使用更新后的 uuid

    }

    const getCode = () => {
        setLoading(true);
        getCodeImg().then(res => {
            const captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
            if (captchaEnabled) {
                const codeUrl = "data:image/gif;base64," + res.img;
                const uuid = res.uuid;
                setLoginForm( {
                    captchaEnabled: captchaEnabled,
                    codeUrl: codeUrl,
                    uuid: uuid
                });
            }
            console.log(loginForm)
        }).catch(err => {
            console.log(err)
            message.error("获取验证码失败")
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <div className="main-box">
            <div className="login-box">
                <Row justify="center" align="middle" style={{margin: "0 auto"}}>
                    <Col span={13}>
                        <img src={loginBox} alt="" style={{width: "100%"}}/>
                    </Col>
                    <Col span={11}>
                        <Form name="login"
                              initialValues={{remember: false}}
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
                                            name="code"
                                            noStyle
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input the captcha you got!',
                                                },
                                            ]}>
                                            <Input prefix={<VerifiedOutlined/>}
                                                   type="captcha"
                                                   placeholder="captcha"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Button onClick={getCode} loading={loading}>Get captcha</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Flex justify="space-between" align="center">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <a href="#" onClick={() => {
                                        message.warning("创建账户或忘记密码请联系管理员")
                                    }}>
                                        Forgot password
                                    </a>
                                </Flex>
                            </Form.Item>
                            <Form.Item>
                                <Flex gap="large" wrap align="center" justify="space-between">
                                    <Button type="primary" htmlType="submit">
                                        Login Now
                                    </Button>
                                    <Button type="dashed" onClick={() => {
                                        message.warning("创建账户或忘记密码请联系管理员")
                                    }}>
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

export default Login;