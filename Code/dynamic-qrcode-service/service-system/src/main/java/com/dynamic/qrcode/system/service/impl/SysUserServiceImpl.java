package com.dynamic.qrcode.system.service.impl;

import com.dynamic.qrcode.common.core.domain.entity.SysUser;
import com.dynamic.qrcode.system.mapper.SysUserMapper;
import com.dynamic.qrcode.system.service.ISysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname SysUserServiceImpl.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.system.service.impl
 * @date 2024/9/16 0:24
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
@Service
public class SysUserServiceImpl implements ISysUserService {

    @Autowired
    private SysUserMapper userMapper;

    /**
     * 修改用户基本信息
     *
     * @param user 用户信息
     * @return 结果
     */
    @Override
    public int updateUserProfile(SysUser user) {
        return userMapper.updateUser(user);
    }
}
