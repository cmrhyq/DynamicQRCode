package com.dynamic.qrcode.framework.manager;

import com.dynamic.qrcode.common.utils.Threads;
import com.dynamic.qrcode.common.utils.spring.SpringUtils;

import java.util.TimerTask;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * <p>异步任务管理器</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname AsyncManager.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.framework.manager
 * @date 2024/9/15 23:17
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class AsyncManager {

    private static AsyncManager me = new AsyncManager();
    /**
     * 操作延迟10毫秒
     */
    private final int OPERATE_DELAY_TIME = 10;
    /**
     * 异步操作任务调度线程池
     */
    private ScheduledExecutorService executor = SpringUtils.getBean("scheduledExecutorService");

    /**
     * 单例模式
     */
    private AsyncManager() {
    }

    public static AsyncManager me() {
        return me;
    }

    /**
     * 执行任务
     *
     * @param task 任务
     */
    public void execute(TimerTask task) {
        executor.schedule(task, OPERATE_DELAY_TIME, TimeUnit.MILLISECONDS);
    }

    /**
     * 停止任务线程池
     */
    public void shutdown() {
        Threads.shutdownAndAwaitTermination(executor);
    }
}
