import {Outlet, To, useNavigate} from "react-router-dom";
import {CSSProperties, useState} from "react";
import {Breadcrumb, Button, Layout, Menu, theme} from "antd";
import menuItems from "./menu.tsx";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

function Index() {
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
    const {Header, Content, Footer, Sider} = Layout;
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const switchMenu = (e: { key: To; }) => {
        navigate(e.key, {replace: true});
    }
    const logoStyle: CSSProperties = {
        width: '100%',
        height: '50px',
        textAlign: 'center',
        lineHeight: '50px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 'x-large'
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
                    <Content style={{margin: '0px 16px'}}>
                        <Breadcrumb
                            style={{margin: '16px 0'}}
                            items={[
                                {title: 'Home'},
                                {title: 'List'},
                            ]}/>
                        <div style={{
                            padding: 24,
                            minHeight: 700,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG
                        }}>
                            {/*占位符组件，类似于窗口*/}
                            <Outlet></Outlet>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        <a href="https://github.com/cmrhyq/DynamicQRCode" target={"_blank"} rel="noreferrer">
                            Fork me on Github
                        </a>
                        , Mixed by Nelson Kuang @2017, currently under developing... </Footer>
                </Header>
            </Layout>
        </Layout>
    )
}

export default Index;
