import React, {lazy} from "react";
import {Navigate} from "react-router-dom";
import {Spin} from "antd";

const Login = lazy(() => import("../views/login/Login.tsx"));
const Dashboard = lazy(() => import("../views/dashboard/Dashboard.tsx"));
const PermissionDenied = lazy(() => import("../views/error/PermissionDenied.tsx"));
const NotFound = lazy(() => import("../views/error/NotFound.tsx"));
const ServerError = lazy(() => import("../views/error/ServerError.tsx"));
const UserManager = lazy(() => import("../views/system/UserManager.tsx"));
const RoleManager = lazy(() => import("../views/system/RoleManager.tsx"));
const DeptManager = lazy(() => import("../views/system/DeptManager.tsx"));
const CacheMonitor = lazy(() => import("../views/monitor/CacheMonitor.tsx"));
const Qrcode = lazy(() => import("../views/qrcode/Qrcode.tsx"));
const GridTable = lazy(() => import("../views/grid/GridTable.tsx"));

const Loading = () => (
    <Spin delay={1000} tip="Page Loading" spinning={true} percent="auto" fullscreen />
)

const withLoadingComponent = (component: JSX.Element) => {
    return (
        <React.Suspense fallback={<Loading></Loading>}>
            {component}
        </React.Suspense>
    )
}

const routes = [
    {
        path: "/",
        element: <Navigate to="/dashboard"/>
    }, {
        path: "/login",
        element: withLoadingComponent(<Login/>)
    }, {
        path: "/dashboard",
        element: withLoadingComponent(<Dashboard/>)
    }, {
        path: "/system/user",
        element: withLoadingComponent(<UserManager/>)
    }, {
        path: "/system/role",
        element: withLoadingComponent(<RoleManager/>)
    }, {
        path: "/system/dept",
        element: withLoadingComponent(<DeptManager/>)
    }, {
        path: "/monitor/cache",
        element: withLoadingComponent(<CacheMonitor/>)
    }, {
        path: "/file/qrcode",
        element: withLoadingComponent(<Qrcode/>)
    }, {
        path: "/file/grid",
        element: withLoadingComponent(<GridTable/>)
    }, {
        path: "/403",
        element: withLoadingComponent(<PermissionDenied/>)
    }, {
        path: "/404",
        element: withLoadingComponent(<NotFound/>)
    }, {
        path: "/500",
        element: withLoadingComponent(<ServerError/>)
    }, {
        path: "*",
        element: withLoadingComponent(<NotFound/>)
    }
]

export default routes;
