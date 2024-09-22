import {FileOutlined, HomeOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {JSX} from "react/jsx-runtime";

interface childrenType {
    key: string,
    icon: JSX.Element | null,
    children: childrenType[] | null,
    label: string,
}

function getItem(label: string, key: string, icon: JSX.Element | null, children: childrenType[] | null) {
    return {
        key,
        icon,
        children,
        label,
    };
}

export const menuItems = [
    getItem('主页', '/dashboard', <HomeOutlined/>, null),
    getItem('系统管理', '/system', <UserOutlined/>, [
        getItem('用户管理', '/system/user', null, null),
        getItem('角色管理', '/system/role', null, null),
        getItem('部门管理', '/system/dept', null, null),
    ]),
    getItem('系统监控', '/monitor', <TeamOutlined/>, [
        getItem('缓存监控', '/monitor/cache', null, null),
    ]),
    getItem('文件管理', '/file', <FileOutlined/>, null),
];
export default menuItems;
