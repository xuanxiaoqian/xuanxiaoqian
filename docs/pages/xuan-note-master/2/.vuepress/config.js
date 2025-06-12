/*
 * @Description: 
 * @Author: 轩小浅
 * @Date: 2021-11-02 15:57:31
 * @LastEditTime: 2021-11-30 17:10:22
 * @LastEditors: 轩小浅
 * https://segmentfault.com/a/1190000022275001
 */

const headConfig = require('./config/headConfig')
const themeConfig = require('./config/themeConfig')

module.exports = {
    head: headConfig,
    title: '轩小浅',
    base: '/',
    description: '轩小浅',
    markdown: { // 不加./路径问题   npm i markdown-it-disable-url-encode
        extendMarkdown: md => {
            md.use(require("markdown-it-disable-url-encode"));
        }
    },
    plugins: {
        '@vuepress/back-to-top':true
    },

    themeConfig: themeConfig,
}