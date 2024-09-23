import axios from "axios";
import {getToken} from "./auth.tsx";
import cache from "./cache.tsx";
import errorCode from "../utils/errorCode.tsx";
import {message, Modal} from "antd";
import {useNavigate} from "react-router-dom";

const isLoggedIn = {show: false}

const service = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
    config => {
        // 是否设置token
        const isToken = (config.headers || {}).isToken === false;
        // 是否防止重复提交
        const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;
        if (getToken() && !isToken) {
            config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        // get请求映射params参数
        if (config.method === "get" && config.params) {
            let url = config.url + "?" + tansParams(config.params);
            url = url.slice(0, -1);
            config.params = {};
            config.url = url;
        }
        if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
            const requestObj = {
                url: config.url,
                data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
                time: new Date().getTime()
            }
            const requestSize = Object.keys(JSON.stringify(requestObj)).length; // 请求数据大小
            const limitSize = 5 * 1024 * 1024; // 限制存放数据5M
            if (requestSize >= limitSize) {
                console.warn('[' + config.url + ']: 请求数据大小超出允许的5M限制，无法进行防重复提交验证。')
                return config;
            }
            const sessionObj = cache.session.getJSON('sessionObj')
            if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
                cache.session.setJSON('sessionObj', requestObj)
            } else {
                const s_url = sessionObj.url;                  // 请求地址
                const s_data = sessionObj.data;                // 请求数据
                const s_time = sessionObj.time;                // 请求时间
                const interval = 1000;                         // 间隔时间(ms)，小于此时间视为重复提交
                if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
                    const message = '数据正在处理，请勿重复提交';
                    console.warn(`[${s_url}]: ` + message)
                    return Promise.reject(new Error(message))
                } else {
                    cache.session.setJSON('sessionObj', requestObj)
                }
            }
        }
        return config
    }, error => {
        console.log(error)
        return Promise.reject(error)
    }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
    res => {
        const navigate = useNavigate();
        // 未设置状态码则默认成功状态
        const code = res.data.code || 200;
        // 获取错误信息
        const msg = errorCode[code as keyof typeof errorCode] || res.data.msg || errorCode["default"]

        // 二进制数据则直接返回
        if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
            return res.data
        }
        if (code === 401) {
            if (!isLoggedIn.show) {
                isLoggedIn.show = true;
                Modal.confirm({
                    title: "确定登出?",
                    content:
                        "由于长时间未操作，您已被登出，可以取消继续留在该页面，或者重新登录",
                    okText: "重新登录",
                    cancelText: "取消",
                    onOk() {
                        isLoggedIn.show = false;
                        navigate("/login", {replace: true});
                        // window.location.href = "/login";
                    },
                    onCancel() {
                        console.log("Cancel");
                        isLoggedIn.show = false;
                    },
                });
            }
            return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
        } else if (code === 500) {
            message.error(msg)
            return Promise.reject(new Error(msg))
        } else if (code === 601) {
            message.warning(msg)
            return Promise.reject('error')
        } else if (code !== 200) {
            message.error(msg)
            return Promise.reject('error')
        } else {
            return res.data
        }
    }, error => {
        let {msg} = error;
        if (msg === "Network Error") {
            msg = "后端接口连接异常";
        } else if (msg.includes("timeout")) {
            msg = "系统接口请求超时";
        } else if (msg.includes("Request failed with status code")) {
            msg = "系统接口" + msg.substr(msg.length - 3) + "异常";
        }
        message.error({
            content: msg,
            duration: 5
        })
        return Promise.reject(error)
    }
)

/**
 * 参数处理
 * @param {*} params  参数
 */
export function tansParams(params: { [x: string]: never; }) {
    let result = ''
    for (const propName of Object.keys(params)) {
        const value = params[propName];
        const part = encodeURIComponent(propName) + "=";
        if (value !== null && value !== "" && typeof (value) !== "undefined") {
            if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                    if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
                        const params = propName + '[' + key + ']';
                        const subPart = encodeURIComponent(params) + "=";
                        result += subPart + encodeURIComponent(value[key]) + "&";
                    }
                }
            } else {
                result += part + encodeURIComponent(value) + "&";
            }
        }
    }
    return result
}

export default service;
