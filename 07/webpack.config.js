const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: path.join(__dirname, './src/js/index.js'), // 项目的入口文件
    output: {
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'js/bundle.js' // 输出文件名
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    'css-loader'
                ]

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
                    name: '[name].[ext]',
                    outputPath: 'img'
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
            template: "07.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    // devtools: 'source-map',
    mode: 'development' // 设置mode
}