const path = require('path')
module.exports = {
    entry: path.join(__dirname, './src/js/index.js'), // 项目的入口文件
    output: {
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'bundle.js' // 输出文件名
    },
    // devServer: {
    //     port: 3000,
    //     stats: 'minimal'
    // },
    mode: 'development' // 设置mode
}