package com.dynamic.qrcode.common.bean;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname BeanConfig.java
 * @project DynamicQRCodeService
 * @package com.dynamic.qrcode.common.bean
 * @date 2024/8/11 0:35
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
@Data
@Service
@Component
public class SystemConfigInject {

    public static String qrCodeSaveAddress;

    @Value("${system.qrcode.save-address}")
    public void setQrCodeSaveAddress(String qrCodeSaveAddress) {
        SystemConfigInject.qrCodeSaveAddress = qrCodeSaveAddress;
    }
}
