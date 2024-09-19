import cache from './cache'

const TokenKey = 'Admin-Token'

export function getToken() {
    return cache.session.get(TokenKey)
}

export function setToken(token) {
    return cache.session.set(TokenKey, token)
}

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
