package com.dynamic.qrcode.utils.qr;

import com.google.zxing.*;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.common.HybridBinarizer;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.geom.RoundRectangle2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * <p></p>
 *
 * @author Alan Huang
 * @version v0.0.1
 * @classname QrCode.java
 * @project DynamicQRCodeService
 * @package com.dynamic.qrcode.utils.qr
 * @date 2024/8/11 0:28
 * @email cmrhyq@163.com
 * @since v0.0.1
 */
public class QrCode {

    // 图像宽度
    private final static int WIDTH = 200;
    // 图像高度
    private final static int HEIGHT = 200;

    /**
     * 生成普通二维码
     *
     * @param content
     * @param filePath
     * @param fileName
     * @throws IOException
     * @throws WriterException
     */
    public static void QREncode(String content, String filePath, String fileName) throws IOException, WriterException {
        Map<EncodeHintType, Object> qrCodeAttribute = new HashMap<>();
        // 内容编码格式
        qrCodeAttribute.put(EncodeHintType.CHARACTER_SET, "UTF-8");
        // 指定纠错等级
        qrCodeAttribute.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.H);
        // 设置二维码边的空度，非负数
        qrCodeAttribute.put(EncodeHintType.MARGIN, 1);
        BitMatrix bitMatrix = new MultiFormatWriter().encode(content, BarcodeFormat.QR_CODE, WIDTH, HEIGHT, qrCodeAttribute);
        // 输出原始(不带logo)二维码路径
        String originFilePath = filePath+ "\\" + fileName;
        MatrixToImageWriter.writeToPath(bitMatrix, "PNG", new File(originFilePath).toPath());

//        System.out.println("输出成功.");
    }

    /**
     * 生成带logo的二维码
     *
     * @param content      内容
     * @param logoFilePath logo文件路径
     * @throws WriterException
     * @throws IOException
     */
//    public static void QREncode(String content, String logoFilePath) throws WriterException, IOException {
//        Map<EncodeHintType, Object> qrCodeAttribute = new HashMap<>();
//        // 内容编码格式
//        qrCodeAttribute.put(EncodeHintType.CHARACTER_SET, "UTF-8");
//        // 指定纠错等级
//        qrCodeAttribute.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.H);
//        // 设置二维码边的空度，非负数
//        qrCodeAttribute.put(EncodeHintType.MARGIN, 1);
//        BitMatrix bitMatrix = new MultiFormatWriter().encode(content, BarcodeFormat.QR_CODE, WIDTH, HEIGHT, qrCodeAttribute);
//        // logo默认黑白，需要设置BLACK、WHITE
//        MatrixToImageConfig matrixToImageConfig = new MatrixToImageConfig(0xFF000001, 0xFFFFFFFF);
//        BufferedImage bufferedImage = LogoMatrix(MatrixToImageWriter.toBufferedImage(bitMatrix, matrixToImageConfig), new File(logoFilePath));
//        // 输出带logo二维码路径
//        String resultFilePath = "D:\\result1.png";
//        ImageIO.write(bufferedImage, "gif", new File(resultFilePath));
////        System.out.println("输出成功.");
//    }

    /**
     * 识别二维码
     *
     * @param filePath 二维码路径
     * @throws IOException
     * @throws NotFoundException
     */
    public static void QRReader(String filePath) throws IOException, NotFoundException {
        File file = new File(filePath);
        MultiFormatReader formatReader = new MultiFormatReader();
        //读取指定的二维码文件
        BufferedImage bufferedImage = ImageIO.read(file);
        BinaryBitmap binaryBitmap = new BinaryBitmap(new HybridBinarizer(new BufferedImageLuminanceSource(bufferedImage)));
        //定义二维码参数
        Map hints = new HashMap<>();
        hints.put(EncodeHintType.CHARACTER_SET, "utf-8");
        com.google.zxing.Result result = formatReader.decode(binaryBitmap, hints);
        //输出相关的二维码信息
//        System.out.println("解析结果：" + result.toString());
//        System.out.println("二维码格式类型：" + result.getBarcodeFormat());
//        System.out.println("二维码文本内容：" + result.getText());
        bufferedImage.flush();
    }

    /**
     * 二维码添加logo
     *
     * @param matrixImage 源二维码图片
     * @param logoFile    logo图片
     * @return 返回带有logo的二维码图片
     */
    public static BufferedImage LogoMatrix(BufferedImage matrixImage, File logoFile) throws IOException {
        //读取二维码图片，并构建绘图对象
        Graphics2D g2 = matrixImage.createGraphics();
        int matrixWidth = matrixImage.getWidth();
        int matrixHeight = matrixImage.getHeight();
        //读取Logo图片
        BufferedImage logo = ImageIO.read(logoFile);
        //开始绘制图片
        g2.drawImage(logo, matrixWidth / 5 * 2, matrixHeight / 5 * 2, matrixWidth / 5, matrixHeight / 5, null);
        BasicStroke stroke = new BasicStroke(5, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND);
        g2.setStroke(stroke);// 设置笔画对象
        //指定弧度的圆角矩形
        RoundRectangle2D.Float round = new RoundRectangle2D.Float((float) matrixWidth / 5 * 2, (float) matrixHeight / 5 * 2, (float) matrixWidth / 5, (float) matrixHeight / 5, 20, 20);
        g2.setColor(Color.white);
        // 绘制圆弧矩形
        g2.draw(round);
        //设置logo 有一道灰色边框
        BasicStroke stroke2 = new BasicStroke(1, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND);
        // 设置笔画对象
        g2.setStroke(stroke2);
        RoundRectangle2D.Float round2 = new RoundRectangle2D.Float((float) matrixWidth / 5 * 2 + 2, (float) matrixHeight / 5 * 2 + 2, (float) matrixWidth / 5 - 4, (float) matrixHeight / 5 - 4, 20, 20);
        g2.setColor(new Color(128, 128, 128));
        // 绘制圆弧矩形
        g2.draw(round2);
        g2.dispose();
        matrixImage.flush();
        return matrixImage;
    }
}
