import { obj2Query } from './tools.js';
const {
    navigateTo,
    redirectTo,
    reLaunch,
    switchTab,
    navigateBack
} = uni



/**
 * @description: 路由跳转
 * @param path 为必传字段
 */
export default class Router {
    constructor(props) {
    }
    // 保留当前页面，跳转到应用内的某个页面
    async push(params) {
        navigateTo({
            url: params.query ? `${params.path}?${obj2Query(params.query)}` : params.path
        })
    }

    // 关闭当前页面，跳转到应用内的某个页面。
    async redirect(params) {
        redirectTo({
            url: params.query ? `${params.path}?${obj2Query(params.query)}` : params.path
        })
    }

    // 跳转关闭所有页面，打开到应用内的某个页面。
    async replace(params) {
        reLaunch({
            url: params.query ? `${params.path}?${obj2Query(params.query)}` : params.path
        })
    }

    // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
    async switchTab(params) {
        switchTab({
            url: params.path
        })
    }

    // 关闭当前页面，返回上一页面或多级页面
    async back(delta = 1) {
        navigateBack({
            delta: delta
        })
    }

}
