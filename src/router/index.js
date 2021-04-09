/*
 * @Author: your name
 * @Date: 2021-04-07 14:35:24
 * @LastEditTime: 2021-04-09 16:31:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\router\index.js
 */

import { permission } from './permission';
import { obj2Query } from '@/utils/tools.js';
const {
    navigateTo,
    redirectTo,
    reLaunch,
    switchTab,
    navigateBack
} = uni


/**
 * @description: 路由跳转
 * @param 除返回外path 为必传字段
 */
const router = {

    // 保留当前页面，跳转到应用内的某个页面
    async push(params) {
        if (permission(params.path)) {
            navigateTo({
                url: params.query ? `${params.path}?${obj2Query(params.query)}` : params.path
            })
        }
    },

    // 关闭当前页面，跳转到应用内的某个页面。
    async redirect(params) {
        if (permission(params.path)) {
            redirectTo({
                url: params.query ? `${params.path}?${obj2Query(params.query)}` : params.path
            })
        }
    },

    // 跳转关闭所有页面，打开到应用内的某个页面。
    async replace(params) {
        if (permission(params.path)) {
            reLaunch({
                url: params.query ? `${params.path}?${obj2Query(params.query)}` : params.path
            })
        }
    },

    // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。 无参数
    async switchTab(params) {
        if (permission(params.path)) {
            switchTab({
                url: params.path
            })
        }
    },

    // 关闭当前页面，返回上一页面或多级页面
    async back(delta = 1) {
        navigateBack({
            delta: delta
        })
    }

}

export default router