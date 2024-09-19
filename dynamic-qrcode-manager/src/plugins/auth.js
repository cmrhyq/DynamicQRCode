import cache from './cache'

const TokenKey = 'Admin-Token'

/**
 * 获取token
 * @returns {string}
 */
export function getToken() {
    return cache.session.get(TokenKey)
}

/**
 * 设置token
 * @param token
 */
export function setToken(token) {
    return cache.session.set(TokenKey, token)
}

/**
 * 移除token
 * @returns {boolean}
 */
export function removeToken() {
    return cache.session.remove(TokenKey)
}

/**
 * 是否登录
 * @returns {boolean}
 */
export function isLoggedIn() {
    return !!cache.session.get(TokenKey);
}
