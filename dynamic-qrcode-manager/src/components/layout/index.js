import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Breadcrumb, Button, Layout, Menu, message, theme} from "antd";
import menuItems from "./Menu";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

function Index() {
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
    const [contextHolder] = message.useMessage();
    const {Header, Content, Footer, Sider} = Layout;
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const switchMenu = (e) => {
        navigate(e.key, {replace: true});
    }

    return (
        <Layout style={{minHeight: "100vh"}}>
            {contextHolder}
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}>
                <div className="demo-logo-vertical">
                    <h1 style={{textAlign: "center", color: "white"}}>DynamicQRCode</h1>
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
                            {/*<ContentRoute/>*/}
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
