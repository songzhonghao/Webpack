const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/js/index.js'), // 项目的入口文件
    output: {
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'bundle.js' // 输出文件名
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']

            },
            // {
            //     test: /\.(jpg|png|gif)$/,
            //     // use: ['file-loader']
            //     loader: 'file-loader',
            //     options: {
            //         name: './img/[name].[ext]'
            //     }

            // }
            {
                test: /\.(jpg|png|gif)$/,
                // use: ['file-loader']
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: './img/[name].[ext]'
                }

            },
            {
                test: /\.html$/,
                // use: ['file-loader']
                use: ['html-loader']
            }
        ]
    },
    devServer: {
        publicPath: '/dist',
        port: 3000,
        hot: true,
        stats: 'minimal'
    },
    plugins: [
        new htmlWebpackPlugin(options = {
            template: "06.html"
        })
    ],
    // devtools: 'source-map',
    mode: 'development' // 设置mode
}