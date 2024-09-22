import {Button} from "antd";
import Dashboard from "./components/dashboard/dashboard.tsx";
import Login from "./components/login/login.tsx";
import {PlayCircleOutlined} from "@ant-design/icons";

function App() {

    return (
        <div>
            <PlayCircleOutlined />
            <Button type="primary">abc</Button>
            <Dashboard/>
            <Login/>
        </div>
    )
}

export default App
