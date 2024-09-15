package com.dynamic.qrcode.system.mapper;

import com.dynamic.qrcode.system.domain.SysLogininfor;

import java.util.List;

/**
 * <p>系统访问日志情况信息 数据层</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname SysLogininforMapper.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.system.mapper
 * @date 2024/9/15 23:37
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public interface SysLogininforMapper {

    /**
     * 新增系统登录日志
     *
     * @param logininfor 访问日志对象
     */
    public void insertLogininfor(SysLogininfor logininfor);

    /**
     * 查询系统登录日志集合
     *
     * @param logininfor 访问日志对象
     * @return 登录记录集合
     */
    public List<SysLogininfor> selectLogininforList(SysLogininfor logininfor);

    /**
     * 批量删除系统登录日志
     *
     * @param infoIds 需要删除的登录日志ID
     * @return 结果
     */
    public int deleteLogininforByIds(Long[] infoIds);

    /**
     * 清空系统登录日志
     *
     * @return 结果
     */
    public int cleanLogininfor();
}
