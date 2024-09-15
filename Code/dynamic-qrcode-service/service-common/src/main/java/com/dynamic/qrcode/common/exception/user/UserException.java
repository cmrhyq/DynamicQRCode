package com.dynamic.qrcode.common.exception.user;

import com.dynamic.qrcode.common.exception.base.BaseException;

/**
 * <p>用户信息异常类</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname UserException.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.common.exception.user
 * @date 2024/9/16 0:00
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class UserException extends BaseException {
    private static final long serialVersionUID = 1L;

    public UserException(String code, Object[] args) {
        super("user", code, args, null);
    }
}
