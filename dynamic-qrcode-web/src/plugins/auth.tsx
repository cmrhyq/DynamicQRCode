import cache from './cache'

const tokenKey = 'Admin-Token'

/**
 * 获取token
 * @returns {string}
 */
export function getToken() {
    return cache.session.get(tokenKey)
}

/**
 * 设置token
 * @param token
 */
export function setToken(token: string) {
    return cache.session.set(tokenKey, token)
}

/**
 * 移除token
 * @returns {boolean}
 */
export function removeToken() {
    return cache.session.remove(tokenKey)
}

/**
 * 是否登录
 * @returns {boolean}
 */
export function isLoggedIn() {
    return !!cache.session.get(tokenKey);
}
