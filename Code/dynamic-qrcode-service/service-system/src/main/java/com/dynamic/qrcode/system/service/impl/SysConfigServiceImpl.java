package com.dynamic.qrcode.system.service.impl;

import com.dynamic.qrcode.common.constant.CacheConstants;
import com.dynamic.qrcode.common.core.redis.RedisCache;
import com.dynamic.qrcode.common.core.text.Convert;
import com.dynamic.qrcode.common.utils.StringUtils;
import com.dynamic.qrcode.system.domain.SysConfig;
import com.dynamic.qrcode.system.mapper.SysConfigMapper;
import com.dynamic.qrcode.system.service.ISysConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname SysConfigServiceImpl.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.system.service.impl
 * @date 2024/9/16 0:27
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
@Service
public class SysConfigServiceImpl implements ISysConfigService {

    @Autowired
    private SysConfigMapper configMapper;

    @Autowired
    private RedisCache redisCache;

    /**
     * 获取验证码开关
     *
     * @return true开启，false关闭
     */
    @Override
    public boolean selectCaptchaEnabled() {
        String captchaEnabled = selectConfigByKey("sys.account.captchaEnabled");
        if (StringUtils.isEmpty(captchaEnabled)) {
            return true;
        }
        return Convert.toBool(captchaEnabled);
    }

    /**
     * 根据键名查询参数配置信息
     *
     * @param configKey 参数key
     * @return 参数键值
     */
    @Override
    public String selectConfigByKey(String configKey) {
        String configValue = Convert.toStr(redisCache.getCacheObject(getCacheKey(configKey)));
        if (StringUtils.isNotEmpty(configValue)) {
            return configValue;
        }
        SysConfig config = new SysConfig();
        config.setConfigKey(configKey);
        SysConfig retConfig = configMapper.selectConfig(config);
        if (StringUtils.isNotNull(retConfig)) {
            redisCache.setCacheObject(getCacheKey(configKey), retConfig.getConfigValue());
            return retConfig.getConfigValue();
        }
        return StringUtils.EMPTY;
    }

    /**
     * 设置cache key
     *
     * @param configKey 参数键
     * @return 缓存键key
     */
    private String getCacheKey(String configKey) {
        return CacheConstants.SYS_CONFIG_KEY + configKey;
    }
}
