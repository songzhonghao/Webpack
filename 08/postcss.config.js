// postcss配置文件
// const AutoPrefixer = require('autoprefixer')
const PostPresetEnv = require('postcss-preset-env');
module.exports = {
    plugins: [
        new PostPresetEnv({
            overrideBrowserslist: ['> 0.15% in CN']
        })
    ]
}