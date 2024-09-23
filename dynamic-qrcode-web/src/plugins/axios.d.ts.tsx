/**
 * 解决以下问题
 * TS2339: Property captchaEnabled does not exist on type AxiosResponse<any, any>
 */
declare module 'axios' {

    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>
    }
}
