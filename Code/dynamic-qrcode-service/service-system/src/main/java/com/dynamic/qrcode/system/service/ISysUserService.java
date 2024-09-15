package com.dynamic.qrcode.system.service;

import com.dynamic.qrcode.common.core.domain.entity.SysUser;

/**
 * <p>用户 业务层</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname ISysUserService.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.system.service
 * @date 2024/9/16 0:22
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public interface ISysUserService {

    /**
     * 修改用户基本信息
     *
     * @param user 用户信息
     * @return 结果
     */
    public int updateUserProfile(SysUser user);
}
