import './App.css';
import {isLoggedIn} from "./plugins/auth";
import RootHeader from "./components/layout/RootHeader";
import Login from "./page/login/Login";
import {message} from "antd";

function App() {
    message.config({
        top: 100,
        duration: 2,
        maxCount: 3,
        rtl: true,
        prefixCls: 'system-message',
    })
    return (
        isLoggedIn() ?
            <RootHeader/> :
            <Login/>
    )
}

export default App;
