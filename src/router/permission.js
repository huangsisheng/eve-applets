/*
 * @Author: your name
 * @Date: 2021-04-09 15:58:33
 * @LastEditTime: 2021-04-09 16:36:58
 * @LastEditors: Please set LastEditors
 * @Description: 路由拦截
 * @FilePath: \eva-applets\src\router\permission.js
 */
import store from "@/store";
// 白名单
const whiteList = [
    '../index/index',
    '../themeSetting/index'
]

export const permission = (path) => {
    if (whiteList.includes(path)) {
        return true
    }
    
    if (store.state.user.token){
        return true
    }
    
    uni.reLaunch({
        url: '../login/index'
    })
}



