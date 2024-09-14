import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

export default function PermissionDenied() {
    const navigate = useNavigate();

    return (
        <div className="PermissionDenied">
            <Result
                status="403"
                title="403"
                subTitle="抱歉，您无权访问此页面。"
                extra={
                    <Button type="primary" onClick={() => navigate("/admin/home", {replace: true})}>返回主页</Button>
                }
            />
        </div>
    );
}