module.exports = {
    publicPath: '././', //重点，生产环境的路径也改成 '/' 即可
    // eslint效验，在非生产环境为校验
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    devServer: {
        open: true,
        // proxy: {
        //     '/api': {
        //         target: 'https://www.fastmock.site/mock/a7d45b31bf32f34e39c0bf950ce7524c/api',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    }
}