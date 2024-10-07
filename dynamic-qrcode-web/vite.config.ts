import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    publicDir: 'public',
    envDir: './env',

    // 项目构建过程配置
    build: {
        // 打包输出目录
        outDir: 'dist',
        // 是否压缩代码
        minify: false,
        // 是否生成sourcemap
        sourcemap: true,
    },

    // 全局变量
    define: {},

    // 配置插件
    plugins: [
        react(),
        basicSsl()
    ],

    // 配置模块解析规则
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        // 配置省略文件后缀
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    },

    // 配置服务端
    server: {
        // 端口号
        port: 4000,
        // 是否自动打开浏览器
        open: true,
        // 是否开启https
        https: false,
        // 监听所有地址
        host: true,
        // 跨域代理，为开发服务器配置CORS
        cors: true,
        // 代理配置
        proxy: {
            // '/api': {
            //     target: 'URL_ADDRESS',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/api/, ''),
            // },
        },
    },


    // 配置css
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    }
})
