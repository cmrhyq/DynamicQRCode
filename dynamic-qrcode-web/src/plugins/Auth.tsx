import Cache from "./Cache";

const tokenKey = "Admin-Token"

/**
 * 获取token
 * @returns {string}
 */
export function getToken() {
    return Cache.session.get(tokenKey)
}

/**
 * 设置token
 * @param token
 */
export function setToken(token: string) {
    return Cache.session.set(tokenKey, token)
}

/**
 * 移除token
 * @returns {boolean}
 */
export function removeToken() {
    return Cache.session.remove(tokenKey)
}

/**
 * 是否登录
 * @returns {boolean}
 */
export function isLoggedIn() {
    return !!Cache.session.get(tokenKey);
}
