import './App.css';
// import RootHeader from "./components/layout/RootHeader";
// import Login from "./page/login/Login";
import {routes} from "./routes/index";
import {message} from "antd";
import React from "react";
// import {isLoggedIn} from "./plugins/auth";
import {useRoutes} from "react-router";

function App() {
    // const [login] = useState(isLoggedIn());
    const element = useRoutes(routes);
    message.config({
        top: 100,
        duration: 2,
        maxCount: 3,
        rtl: true,
        prefixCls: 'system-message',
    })
    return (
        // {login} === true ?
        //     <RootHeader/> :
        //     <Login/>
        <div style={{height:'100%'}}>
            {element}
        </div>
    )
}

export default App;
