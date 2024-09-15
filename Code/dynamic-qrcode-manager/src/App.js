import './App.css';
import {isLoggedIn} from "./util/auth";
import RootHeader from "./components/layout/RootHeader";
import Login from "./page/login/Login";

function App() {
    return (
        isLoggedIn() ?
            <RootHeader/> :
            <Login/>
    )
}

export default App;
