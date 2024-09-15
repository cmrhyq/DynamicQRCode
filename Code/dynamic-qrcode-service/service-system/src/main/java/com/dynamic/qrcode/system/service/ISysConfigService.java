package com.dynamic.qrcode.system.service;

import org.springframework.stereotype.Service;

/**
 * <p>参数配置 服务层</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname ISysConfigService.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.system.service
 * @date 2024/9/16 0:27
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public interface ISysConfigService {

    /**
     * 获取验证码开关
     *
     * @return true开启，false关闭
     */
    public boolean selectCaptchaEnabled();

    /**
     * 根据键名查询参数配置信息
     *
     * @param configKey 参数键名
     * @return 参数键值
     */
    public String selectConfigByKey(String configKey);
}
