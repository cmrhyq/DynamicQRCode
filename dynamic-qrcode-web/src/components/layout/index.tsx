import {To, useNavigate, useRoutes} from "react-router-dom";
import {CSSProperties, useState} from "react";
import {Avatar, Breadcrumb, Button, Col, Dropdown, Layout, Menu, MenuProps, Row, theme} from "antd";
import menuItems from "./menu.tsx";
import {MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import routes from "../../router/index.tsx";

// import cache from "../../plugins/cache.tsx";

function Index() {
    const navigate = useNavigate();
    const element = useRoutes(routes);

    const [collapsed, setCollapsed] = useState(false);
    // const [nickname] = useState(cache.session.get("nickname"));
    const [nickname] = useState("Alan");

    const {Header, Content, Footer, Sider} = Layout;
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const switchMenu = (e: { key: To; }) => {
        navigate(e.key, {replace: true});
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div onClick={() => {
                    console.log("Profile");
                }}>
                    Profile
                </div>
            ),
            icon: <UserOutlined/>,
        },
        {
            key: '2',
            label: (
                <div onClick={() => {
                    console.log("Settings");
                }}>
                    Settings
                </div>
            ),
            icon: <SettingOutlined/>,
        },
    ]

    const logoStyle: CSSProperties = {
        width: '100%',
        height: '50px',
        textAlign: 'center',
        lineHeight: '50px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 'x-large'
    }

    const contentStyle: CSSProperties = {
        padding: 24,
        minHeight: window.innerHeight - 250,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
    }

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}>
                <div style={logoStyle}>
                    DynamicQRCode
                </div>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={menuItems}
                    onClick={switchMenu}/>
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Row>
                        <Col span={8}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Col>
                        <Col offset={8} push={7}>
                            <Dropdown
                                menu={{items}}
                                autoFocus={true}
                                autoAdjustOverflow={true}>
                                <Avatar
                                    size="large"
                                    gap={4}
                                    shape="square"
                                    style={{
                                        backgroundColor: '#f56a00',
                                        verticalAlign: 'middle',
                                    }}>
                                    {nickname}
                                </Avatar>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Content style={{margin: '0px 16px'}}>
                        <Breadcrumb
                            style={{margin: '16px 0'}}
                            items={[
                                {title: 'Home'},
                                {title: 'List'},
                            ]}/>
                        <div style={contentStyle}>
                            {element}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        <a href="https://github.com/cmrhyq/DynamicQRCode" target={"_blank"} rel="noreferrer">
                            Fork me on Github
                        </a>
                        , Mixed by Alan Huang @2024, currently under developing... </Footer>
                </Header>
            </Layout>
        </Layout>
    )
}

export default Index;
