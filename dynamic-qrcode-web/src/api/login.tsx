import request from "../plugins/request.tsx";

/**
 * 登录请求
 * @param username
 * @param password
 * @param code
 * @param uuid
 */
export function login(username: string, password: string, code: string, uuid: string) {
    const data = {
        username,
        password,
        code,
        uuid
    }
    return request({
        url: '/login',
        headers: {
            isToken: false
        },
        method: 'post',
        data: data
    })
}

/**
 * 获取验证码
 */
export function getCodeImg() {
    return request({
        url: '/captchaImage',
        headers: {
            isToken: false
        },
        method: 'get',
        timeout: 20000
    })
}
