package com.dynamic.qrcode.system.service;

import com.dynamic.qrcode.system.domain.SysOperLog;

import java.util.List;

/**
 * <p>操作日志 服务层</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname ISysOperLogService.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.system.service
 * @date 2024/9/15 23:41
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public interface ISysOperLogService {

    /**
     * 新增操作日志
     *
     * @param operLog 操作日志对象
     */
    public void insertOperlog(SysOperLog operLog);

    /**
     * 查询系统操作日志集合
     *
     * @param operLog 操作日志对象
     * @return 操作日志集合
     */
    public List<SysOperLog> selectOperLogList(SysOperLog operLog);

    /**
     * 批量删除系统操作日志
     *
     * @param operIds 需要删除的操作日志ID
     * @return 结果
     */
    public int deleteOperLogByIds(Long[] operIds);

    /**
     * 查询操作日志详细
     *
     * @param operId 操作ID
     * @return 操作日志对象
     */
    public SysOperLog selectOperLogById(Long operId);

    /**
     * 清空操作日志
     */
    public void cleanOperLog();
}
