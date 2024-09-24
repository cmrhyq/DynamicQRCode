import Login from "../views/login/Login.tsx";
import Dashboard from "../views/dashboard/Dashboard.tsx";
import PermissionDenied from "../views/error/PermissionDenied.tsx";
import NotFound from "../views/error/NotFound.tsx";
import ServerError from "../views/error/ServerError.tsx";
import UserManager from "../views/system/UserManager.tsx";
import RoleManager from "../views/system/RoleManager.tsx";
import DeptManager from "../views/system/DeptManager.tsx";
import CacheMonitor from "../views/monitor/CacheMonitor.tsx";
import File from "../views/file/File.tsx";
import { Navigate } from "react-router-dom";

// const baseRouter = () => (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App/>}>
//                 <Route path="/login" element={<Login/>}></Route>
//                 <Route path="/dashboard" element={<Dashboard/>}></Route>
//                 <Route path="/system/user" element={<UserManager/>}></Route>
//                 <Route path="/system/role" element={<RoleManager/>}></Route>
//                 <Route path="/system/dept" element={<DeptManager/>}></Route>
//                 <Route path="/monitor/cache" element={<CacheMonitor/>}></Route>
//                 <Route path="/file" element={<File/>}></Route>
//                 <Route path="/403" element={<PermissionDenied/>}></Route>
//                 <Route path="/404" element={<NotFound/>}></Route>
//                 <Route path="/500" element={<ServerError/>}></Route>
//                 <Route path="*" element={<NotFound/>}></Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// )
//
// export default baseRouter;

const routes = [
    {
        path: "/",
        element: <Navigate to="/dashboard"/>
    }, {
        path: "/login",
        element: <Login/>
    }, {
        path: "/dashboard",
        element: <Dashboard/>
    }, {
        path: "/system/user",
        element: <UserManager/>
    }, {
        path: "/system/role",
        element: <RoleManager/>
    }, {
        path: "/system/dept",
        element: <DeptManager/>
    }, {
        path: "/monitor/cache",
        element: <CacheMonitor/>
    }, {
        path: "/file",
        element: <File/>
    }, {
        path: "/403",
        element: <PermissionDenied/>
    }, {
        path: "/404",
        element: <NotFound/>
    }, {
        path: "/500",
        element: <ServerError/>
    }, {
        path: "*",
        element: <NotFound/>
    }
]

export default routes;
