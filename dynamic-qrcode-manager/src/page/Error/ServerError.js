import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

export default function ServerError() {
    const navigate = useNavigate();

    return (
        <div className="ServerError">
            <Result
                status="500"
                title="500"
                subTitle="抱歉，出了点问题。"
                extra={
                    <Button type="primary" onClick={() => navigate("/admin/home", {replace: true})}>返回主页</Button>
                }
            />
        </div>
    );
}