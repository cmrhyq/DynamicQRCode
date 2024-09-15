package com.dynamic.qrcode.common.exception;

/**
 * <p>业务异常</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname ServiceException.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.common.exception
 * @date 2024/9/16 0:01
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class ServiceException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    /**
     * 错误码
     */
    private Integer code;

    /**
     * 错误提示
     */
    private String message;

    /**
     * 错误明细，内部调试错误
     * <p>
     * 和 {@link CommonResult#getDetailMessage()} 一致的设计
     */
    private String detailMessage;

    /**
     * 空构造方法，避免反序列化问题
     */
    public ServiceException() {
    }

    public ServiceException(String message) {
        this.message = message;
    }

    public ServiceException(String message, Integer code) {
        this.message = message;
        this.code = code;
    }

    public String getDetailMessage() {
        return detailMessage;
    }

    public ServiceException setDetailMessage(String detailMessage) {
        this.detailMessage = detailMessage;
        return this;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public ServiceException setMessage(String message) {
        this.message = message;
        return this;
    }

    public Integer getCode() {
        return code;
    }
}
