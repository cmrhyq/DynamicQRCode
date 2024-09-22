import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.tsx";
import Login from "../components/login/login.tsx";
import Dashboard from "../components/dashboard/dashboard.tsx";
import PermissionDenied from "../components/Error/PermissionDenied.tsx";
import NotFound from "../components/Error/NotFound.tsx";
import ServerError from "../components/Error/ServerError.tsx";

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/403" element={<PermissionDenied/>}></Route>
                <Route path="/404" element={<NotFound/>}></Route>
                <Route path="/500" element={<ServerError/>}></Route>
                <Route path="*" element={<PermissionDenied/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;
