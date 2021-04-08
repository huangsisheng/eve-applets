/*
 * @Author: your name
 * @Date: 2021-04-07 17:53:52
 * @LastEditTime: 2021-04-08 10:21:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\store\index.js
 */

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
// 防止命名冲突
Object.keys(modules).forEach((key) => {
    modules[key]['namespaced'] = true
})

const store = new Vuex.Store({
    modules
})

export default store