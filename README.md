<div style="font-family: 'Kanit', sans-serif;text-align: center;border: 10px solid #fff;box-shadow: 1px 1px 2px #e6e6e6;background: linear-gradient(to left top, #11998e, #38ef7d); padding: 50px 0;">
<div style="color: #fff;">
    <h3 style="font-size: 25px;font-weight: 600;letter-spacing: 1px;text-transform: uppercase;margin: 0;">
       Dynamic QR Code
    </h3>
    <span style="font-size: 16px;text-transform: capitalize;">
    	动态二维码
    </span>
</div>
</div>



## 简介

​	本项目主要实现生成二维码活码的功能，何为二维码活码，即根据需要的信息，生成二维码后，信息可修改，二维码图片不会改变，在修改信息后，第一次生成的二维码还可以扫，扫出来的信息会跟着变动



## 技术栈

- Java
- Spring boot
- Redis
- Mysql
- XxlJob



## 时序图

### 服务端

![image-20240810233121992](MarkdownImageUpload/image-20240810233121992.png)

### 客户端

