package com.dynamic.qrcode.utils.qr;

import com.google.zxing.WriterException;
import org.junit.jupiter.api.Test;

import java.io.IOException;

/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname QrCodeTest.java
 * @project DynamicQRCodeService
 * @package com.dynamic.qrcode.utils.qr
 * @date 2024/8/11 0:29
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class QrCodeTest {

    @Test
    public void testGenerateQrCode() throws IOException, WriterException {
        QrCode.QREncode("https://www.google.com","H:", "test.png");
    }
}
