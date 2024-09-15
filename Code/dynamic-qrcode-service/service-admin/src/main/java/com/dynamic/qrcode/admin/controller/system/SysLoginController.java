package com.dynamic.qrcode.admin.controller.system;

import com.dynamic.qrcode.common.constant.Constants;
import com.dynamic.qrcode.common.core.domain.AjaxResult;
import com.dynamic.qrcode.common.core.domain.model.LoginBody;
import com.dynamic.qrcode.framework.web.service.SysLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname SysLoginController.java
 * @project dynamic-qrcode-service
 * @package com.dynamic.qrcode.admin.controller.system
 * @date 2024/9/14 23:46
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
@RestController
public class SysLoginController {

    @Autowired
    private SysLoginService loginService;

    @PostMapping("/login")
    public AjaxResult login(@RequestBody LoginBody loginBody){
        AjaxResult ajaxResult = new AjaxResult();
        String token = loginService.login(loginBody.getUsername(), loginBody.getPassword(), loginBody.getCode(),
                loginBody.getUuid());
        ajaxResult.put(Constants.TOKEN, token);
        return ajaxResult;
    }
}
