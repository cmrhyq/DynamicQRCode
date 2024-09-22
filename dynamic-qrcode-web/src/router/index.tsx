import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.tsx";
import Login from "../views/login/login.tsx";
import Dashboard from "../views/dashboard/dashboard.tsx";
import PermissionDenied from "../views/error/PermissionDenied.tsx";
import NotFound from "../views/error/NotFound.tsx";
import ServerError from "../views/error/ServerError.tsx";

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/403" element={<PermissionDenied/>}></Route>
                <Route path="/404" element={<NotFound/>}></Route>
                <Route path="/500" element={<ServerError/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;
