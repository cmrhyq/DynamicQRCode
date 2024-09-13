/**
 * 获取token
 * @returns {string}
 */
export function getToken() {
    return localStorage.getItem("token")
}

/**
 * 设置token
 * @param token
 */
export function setToken(token) {
    localStorage.setItem("token", token)
}

/**
 * 清除token
 */
export function clearToken() {
    localStorage.removeItem("token")
}

/**
 * 是否登录
 * @returns {boolean}
 */
export function isLoggedIn() {
    return !!localStorage.getItem("token");
}
