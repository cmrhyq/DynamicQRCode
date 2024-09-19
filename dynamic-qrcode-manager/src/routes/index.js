import React, {lazy} from 'react'
import {Navigate} from 'react-router-dom'
import {getToken} from "../plugins/auth";

const Login = lazy(() => import("../page/login/Login"));
const Home = lazy(() => import("../page/home/Home"));
const RootHeader = lazy(() => import("../components/layout/RootHeader"));
const UserManager = lazy(() => import("../page/system/UserManager"));
const RoleManager = lazy(() => import("../page/system/RoleManager"));
const DeptManager = lazy(() => import("../page/system/DeptManager"));
const CacheMonitor = lazy(() => import("../page/monitor/CacheMonitor"));
const File = lazy(() => import("../page/file/File"));
const NotFound = lazy(() => import("../page/Error/NotFound"));
const PermissionDenied = lazy(() => import("../page/Error/PermissionDenied"));
const ServerError = lazy(() => import("../page/Error/ServerError"));

/**
 * 路由鉴权组件
 * @param children
 * @returns {*|React.JSX.Element}
 * @constructor
 */
const Appraisal = ({children}: any) => {
    const token = getToken();
    return token ? children : <Navigate to="/login"/>;
};

interface Router {
    name?: string;
    path: string;
    children?: Array<Router>;
    element: any;
}

export const routes: Array<Router> = [
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/",
        element: <Appraisal>{<RootHeader/>}</Appraisal>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "file",
                element: <File/>,
            },
            {
                path: "user",
                element: <UserManager/>,
            },
            {
                path: "role",
                element: <RoleManager/>,
            },
            {
                path: "dept",
                element: <DeptManager/>,
            },
            {
                path: "cache",
                element: <CacheMonitor/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            }
        ],
    },
    {
        path: "*",
        element: <NotFound/>,
    },
    {
        path: "/403",
        element: <PermissionDenied/>,
    },
    {
        path: "/404",
        element: <NotFound/>,
    },
    {
        path: "/500",
        element: <ServerError/>,
    }
]
