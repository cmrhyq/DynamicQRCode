package com.dynamic.qrcode.system.mapper;

import com.dynamic.qrcode.common.core.domain.entity.SysUser;

/**
 * <p>用户表 数据层</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname SysUserMapper.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.system.mapper
 * @date 2024/9/16 0:25
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public interface SysUserMapper {

    /**
     * 修改用户信息
     *
     * @param user 用户信息
     * @return 结果
     */
    public int updateUser(SysUser user);
}
