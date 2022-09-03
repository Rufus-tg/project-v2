module.exports = {
    publicPath:'././',
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'https://www.fastmock.site/mock/a7d45b31bf32f34e39c0bf950ce7524c/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}