package com.dynamic.qrcode.framework.security.context;

import org.springframework.security.core.Authentication;

/**
 * <p>身份验证信息</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname AuthenticationContextHolder.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.framework.security.context
 * @date 2024/9/15 23:15
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class AuthenticationContextHolder {
    private static final ThreadLocal<Authentication> contextHolder = new ThreadLocal<>();

    public static Authentication getContext() {
        return contextHolder.get();
    }

    public static void setContext(Authentication context) {
        contextHolder.set(context);
    }

    public static void clearContext() {
        contextHolder.remove();
    }
}
