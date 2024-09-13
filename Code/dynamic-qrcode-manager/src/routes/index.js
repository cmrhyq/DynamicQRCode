import {lazy} from "react";
import {Outlet} from "react-router";

const Login = lazy(() => import("../page/login/Login"));
const NotFund = lazy(() => import("../page/404/NotFound"));
const Home = lazy(() => import("../page/home/Home"));

// 路由配置文件
export const routes = [
    {
        path: '/',
        element: <Login/>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/*',
        element: <NotFund/>,
    },
    {
        path: '/admin',
        element: <Outlet/>,
        children: [
            {
                path: 'home',
                element: <Home/>,
            },
        ]
    }
]