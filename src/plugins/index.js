/*
 * @Author: your name
 * @Date: 2021-04-08 10:32:11
 * @LastEditTime: 2021-04-09 17:42:17
 * @LastEditors: Please set LastEditors
 * @Description: 自定义插件/三方组件库
 * @FilePath: \eva-applets\src\plugins\index.js
 */

import router from "@/router"
import Toast from "@/utils/toast.js"
import storage from "@/utils/storage.js"
import uCharts from "./uCharts"

export default class Plugins {
    constructor(Vue){
        Vue.prototype.$router = router
        Vue.prototype.$storage = storage
        Vue.prototype.$toast = new Toast()
        Vue.prototype.$uCharts = uCharts
    }
}