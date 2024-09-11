package com.dynamic.qrcode.system.domain;

import com.dynamic.qrcode.common.core.domain.BaseEntity;

/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname SysConfig.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.system.domain
 * @date 2024/9/12 0:30
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class SysConfig extends BaseEntity {
    private static final long serialVersionUID = 1L;

    /**
     * 系统主键
     */
    private Long config_id;
    private String config_name;
    private String config_key;
    private String config_value;
    private String config_type;
}
