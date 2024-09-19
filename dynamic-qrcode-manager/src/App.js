import './App.css';
import RootHeader from "./components/layout/RootHeader";
import Login from "./page/login/Login";
import {message} from "antd";
import React, {useState} from "react";
import {isLoggedIn} from "./plugins/auth";

function App() {
    const [login] = useState(isLoggedIn());
    message.config({
        top: 100,
        duration: 2,
        maxCount: 3,
        rtl: true,
        prefixCls: 'system-message',
    })
    return (
        {login} === true ?
            <RootHeader/> :
            <Login/>
    )
}

export default App;
