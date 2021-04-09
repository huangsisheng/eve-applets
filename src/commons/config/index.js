/*
 * @Author: your name
 * @Date: 2021-04-07 15:25:38
 * @LastEditTime: 2021-04-09 09:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\config\index.js
 */

const prodUrl = 'https://evaluation.1ceping.cn'
const testUrl = 'https://preevaluation.1ceping.cn'
export default {
    env: process.env.NODE_ENV,
    // baseUrl: process.env.VUE_APP_TITLE === 'test' ? testUrl : prodUrl
    baseUrl: process.env.VUE_APP_TITLE === 'test' ? 'https://bytedance.artstep.cn' : 'https://cp.artstep.cn'
}