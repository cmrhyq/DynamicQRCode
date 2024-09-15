package com.dynamic.qrcode.system.mapper;

import com.dynamic.qrcode.system.domain.SysConfig;

/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname SysConfigMapper.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.system.mapper
 * @date 2024/9/16 0:31
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public interface SysConfigMapper {

    /**
     * 查询参数配置信息
     *
     * @param config 参数配置信息
     * @return 参数配置信息
     */
    public SysConfig selectConfig(SysConfig config);
}
