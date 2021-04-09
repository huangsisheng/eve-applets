/*
 * @Author: your name
 * @Date: 2021-04-08 11:02:51
 * @LastEditTime: 2021-04-09 12:22:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\vue.config.js
 */

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    configureWebpack: () => ({
        resolve: {
            alias: {
                '@': resolve('src'),
            }
        }
    })
}