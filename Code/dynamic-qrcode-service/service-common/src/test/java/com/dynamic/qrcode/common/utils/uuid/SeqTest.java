package com.dynamic.qrcode.common.utils.uuid;

import org.junit.jupiter.api.Test;

import static com.dynamic.qrcode.common.utils.uuid.Seq.getId;

/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname SeqTest.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.common.utils.uuid
 * @date 2024/8/13 23:53
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class SeqTest {

    @Test
    void getIdTest(){
        System.out.println(getId());
    }
}
