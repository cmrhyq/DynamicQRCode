package com.dynamic.qrcode.common.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * <p>读取项目相关配置</p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname SystemConfig.java
 * @project DynamicQRCodeService
 * @package com.dynamic.qrcode.common.config
 * @date 2024/8/12 0:13
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
@Component
@ConfigurationProperties(prefix = "system")
public class SystemConfig {

    private static String filePath;

    /**
     * 获取地址开关
     */
    private static boolean addressEnabled;


    public static String getFilePath() {
        return filePath;
    }

    public static void setFilePath(String filePath) {
        SystemConfig.filePath = filePath;
    }

    public static String getQrCodeImportPath() {
        return getFilePath() + "/qrcode";
    }

    public static boolean isAddressEnabled() {
        return addressEnabled;
    }

    public void setAddressEnabled(boolean addressEnabled) {
        SystemConfig.addressEnabled = addressEnabled;
    }

}
