/*
 * @Author: your name
 * @Date: 2021-04-07 13:38:17
 * @LastEditTime: 2021-04-09 17:13:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\main.js
 */
import Vue from 'vue'
import App from './App'
import store from './store'
import Plugins from "./plugins"
new Plugins(Vue)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})

app.$mount()
