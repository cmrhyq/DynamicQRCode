import "./login.css";
import loginBox from "../../assets/images/login_box.png"
import {Button, Checkbox, Col, Flex, Form, Image, Input, message, Row} from "antd";
import {LockOutlined, UserOutlined, VerifiedOutlined} from "@ant-design/icons";
import {getCodeImg, login} from "../../api/login";
import {useEffect, useState} from "react";
import {setToken} from "../../plugins/auth";
import {useNavigate} from "react-router-dom";
import cache from '../../plugins/cache'

function Login() {
    const navigate = useNavigate();

    /**
     * 初始化
     */
    useEffect(() => {
        getCode();
        onRemember();
    }, []);

    /**
     * 登录表单数据
     */
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
        remember: true
    });

    /**
     * 加载中
     */
    const [loading, setLoading] = useState(false);

    /**
     * 登录
     * 1. 获取表单数据
     * 2. 发送登录请求
     * 3. 处理登录结果
     * 4. TODO 存储token
     * 5. 跳转到首页
     * 6. 关闭加载中
     * @param values
     */
    const onFinish = (values) => {
        setLoading(true);
        const {username, password, remember, code} = values;

        if (remember) {
            cache.session.set("username", username);
            cache.session.set("password", password);
        }
        const uuid = loginForm.uuid; // 使用更新后的 uuid

        // 发送登录请求
        login(username, password, code, uuid).then(res => {
            message.success("登录成功")
            setToken(res.token)
            // 登录成功后跳转到首页
            navigate("/", {replace: true});
        }).catch(err => {
            console.log(err.message);
            getCode();
        }).finally(() => {
            setLoading(false);
        });
    }

    /**
     * 获取验证码
     */
    const getCode = () => {
        getCodeImg().then(res => {
            const captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
            if (captchaEnabled) {
                const codeUrl = "data:image/gif;base64," + res.img;
                const uuid = res.uuid;
                setLoginForm({
                    captchaEnabled: captchaEnabled,
                    codeUrl: codeUrl,
                    uuid: uuid
                });
            }
        }).catch(err => {
            console.log(err)
            message.error("获取验证码异常")
        })
    }

    /**
     * 记住用户名和密码
     */
    const onRemember = () => {
        const username = cache.session.get("username");
        const password = cache.session.get("password");
        if (username !== "" && password !== "") {
            setLoginForm({
                username: username,
                password: password
            });
        }
    }

    return (
        <div className="main-box">
            <div className="login-box">
                <Row justify="center" align="middle" style={{margin: "0 auto"}}>
                    <Col span={14}>
                        <img src={loginBox} alt="" style={{width: "100%"}}/>
                    </Col>
                    <Col span={10}>
                        <Form name="login"
                              initialValues={loginForm}
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
                                                placeholder="Password"/>
                            </Form.Item>
                            <Form.Item extra="We must make sure that your are a human.">
                                <Row gutter={9} justify="space-between">
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
                                                   placeholder="Captcha"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Image
                                            width={100}
                                            height={32}
                                            onClick={getCode}
                                            src={loginForm.codeUrl}
                                            preview={false}
                                        />
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
                                    <Button type="primary" htmlType="submit" loading={loading}>
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
