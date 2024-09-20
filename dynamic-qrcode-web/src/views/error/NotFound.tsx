import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="NotFound">
            <Result
                status="404"
                title="404"
                subTitle="抱歉，您访问的页面不存在。"
                extra={
                    <Button type="primary" onClick={() => navigate("/admin/home", {replace: true})}>返回主页</Button>
                }
            />
        </div>
    );
}
