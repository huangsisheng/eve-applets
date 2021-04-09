/*
 * @Author: your name
 * @Date: 2021-04-07 14:07:03
 * @LastEditTime: 2021-04-09 09:51:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\api\index.js
 */

// 引入拦截器
import request from "@/utils/request.js"

/* S 使用拦截器部分 */
export const userLogin = (params) => {
    return request.get('', params)
}

export const getEvaTemplate = (params) => {
    return request.get('/api/evaluation/templete/preview', params)
}
/* E 使用拦截器部分 */


/* S 无拦截器部分 */

/* E 无拦截器部分 */
