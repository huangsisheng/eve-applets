/*
 * @Author: your name
 * @Date: 2021-04-08 10:32:11
 * @LastEditTime: 2021-04-08 11:08:06
 * @LastEditors: Please set LastEditors
 * @Description: 自定义插件/三方组件库
 * @FilePath: \eva-applets\src\plugins\index.js
 */

import Router from "@/utils/router.js"
import Storage from "@/utils/storage.js"
import Toast from "@/utils/toast.js"

export default class Plugins {
    constructor(Vue){
        Vue.prototype.$router = new Router()
        Vue.prototype.$storage = new Storage()
        Vue.prototype.$toast = new Toast()
    }
}