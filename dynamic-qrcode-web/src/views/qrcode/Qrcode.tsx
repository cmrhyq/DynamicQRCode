import {useState} from "react";
import { Input, QRCode, Space } from 'antd';

function Qrcode() {
    const [text, setText] = useState<string>('');
    const [status] = useState<any>(['loading','expired', 'scanned']);

    return (
        <div>
            <h1>Qrcode</h1>
            <Space direction="vertical" align="center">
                <QRCode value={text || '-'} status={status[3]}/>
                <Input
                    placeholder="-"
                    maxLength={60}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Space>
        </div>
    )
}

export default Qrcode;
