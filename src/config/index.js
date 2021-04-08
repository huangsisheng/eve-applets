/*
 * @Author: your name
 * @Date: 2021-04-07 15:25:38
 * @LastEditTime: 2021-04-08 10:54:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\config\index.js
 */
console.log(process.env)
export default {
    env: process.env.NODE_ENV,
    baseUrl: process.env.VUE_APP_TITLE === 'test' ? 'https://bytedance.artstep.cn' : 'https://cp.artstep.cn'
}