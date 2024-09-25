import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
/**
 * css文件引入顺序
 * 1. 引入reset-css
 * 2. 引入antd样式
 * 3. 引入全局样式
 * 4. 引入业务样式
 */
import 'reset-css'
import '@/assets/styles/global.scss'
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
