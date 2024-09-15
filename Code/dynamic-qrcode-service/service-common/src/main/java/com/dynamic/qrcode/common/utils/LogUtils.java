package com.dynamic.qrcode.common.utils;

/**
 * <p>处理并记录日志文件</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname LogUtils.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.common.utils
 * @date 2024/9/15 23:31
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class LogUtils {
    public static String getBlock(Object msg) {
        if (msg == null) {
            msg = "";
        }
        return "[" + msg.toString() + "]";
    }
}
