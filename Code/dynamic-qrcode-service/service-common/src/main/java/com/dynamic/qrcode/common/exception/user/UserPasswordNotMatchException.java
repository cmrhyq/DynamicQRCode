package com.dynamic.qrcode.common.exception.user;

/**
 * <p>用户密码不正确或不符合规范异常类</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname UserPasswordNotMatchException.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.common.exception.user
 * @date 2024/9/16 0:00
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class UserPasswordNotMatchException extends UserException {
    private static final long serialVersionUID = 1L;

    public UserPasswordNotMatchException() {
        super("user.password.not.match", null);
    }
}
