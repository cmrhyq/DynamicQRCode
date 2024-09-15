package com.dynamic.qrcode.common.utils;

import com.dynamic.qrcode.common.utils.spring.SpringUtils;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;

/**
 * <p>获取i18n资源文件</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname MessageUtils.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.common.utils
 * @date 2024/9/15 23:58
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class MessageUtils {

    /**
     * 根据消息键和参数 获取消息 委托给spring messageSource
     *
     * @param code 消息键
     * @param args 参数
     * @return 获取国际化翻译值
     */
    public static String message(String code, Object... args) {
        MessageSource messageSource = SpringUtils.getBean(MessageSource.class);
        return messageSource.getMessage(code, args, LocaleContextHolder.getLocale());
    }
}
