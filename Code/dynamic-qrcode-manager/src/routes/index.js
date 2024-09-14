import React, {lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

const Login = lazy(() => import("../page/login/Login"));
const Home = lazy(() => import("../page/home/Home"));
const UserManager = lazy(() => import("../page/system/UserManager"));
const RoleManager = lazy(() => import("../page/system/RoleManager"));
const DeptManager = lazy(() => import("../page/system/DeptManager"));
const CacheMonitor = lazy(() => import("../page/monitor/CacheMonitor"));
const File = lazy(() => import("../page/file/File"));
const NotFound = lazy(() => import("../page/Error/NotFound"));
const PermissionDenied = lazy(() => import("../page/Error/PermissionDenied"));
const ServerError = lazy(() => import("../page/Error/ServerError"));

export const ContentRoute = () => (
    <Routes>
        <Route exact path="/" element=<Home/> />
        <Route exact path="/login" element=<Login/> />
        <Route exact path="/home" element=<Home/> />
        <Route exact path="/file" element=<File/> />
        <Route exact path="/system/user" element=<UserManager/> />
        <Route exact path="/system/role" element=<RoleManager/> />
        <Route exact path="/system/dept" element=<DeptManager/> />
        <Route exact path="/monitor/cache" element=<CacheMonitor/> />
        <Route path="*" element=<NotFound/> />
        <Route path="/403" element=<PermissionDenied/> />
        <Route path="/404" element=<NotFound/> />
        <Route path="/500" element=<ServerError/> />
    </Routes>
)

// 弃用
// export const routes = [
//     {
//         path: '/',
//         element: <Login/>,
//     },
//     {
//         path: '/login',
//         element: <Login/>,
//     },
//     {
//         path: '/*',
//         element: <NotFound/>,
//     },
//     {
//         path: '/admin',
//         element: <Outlet/>,
//         children: [
//             {
//                 path: 'home',
//                 element: <Home/>,
//             },
//         ]
//     }
// ]

export default ContentRoute