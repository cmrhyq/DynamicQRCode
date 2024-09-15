package com.dynamic.qrcode.common.core.domain.model;

/**
 * <p>用户登录对象</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname LoginBody.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.common.core.domain.model
 * @date 2024/9/15 23:11
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class LoginBody {
    /**
     * 用户名
     */
    private String username;

    /**
     * 用户密码
     */
    private String password;

    /**
     * 验证码
     */
    private String code;

    /**
     * 唯一标识
     */
    private String uuid;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
}
