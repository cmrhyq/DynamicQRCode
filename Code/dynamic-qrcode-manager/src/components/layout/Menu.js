import {FileOutlined, HomeOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

export const menuItems = [
    getItem('主页', '/home', <HomeOutlined/>),
    getItem('系统管理', '/system', <UserOutlined/>, [
        getItem('用户管理', '/system/user'),
        getItem('角色管理', '/system/role'),
        getItem('部门管理', '/system/dept'),
    ]),
    getItem('系统监控', '/monitor', <TeamOutlined/>, [
        getItem('缓存监控', '/monitor/cache'),
    ]),
    getItem('文件管理', '/file', <FileOutlined/>),
];
export default menuItems;