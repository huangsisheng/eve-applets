/*
 * @Author: your name
 * @Date: 2021-04-07 16:43:45
 * @LastEditTime: 2021-04-07 16:54:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\utils\storage.js
 */
const {
    setStorage,
    setStorageSync,
    getStorage,
    getStorageSync,
    getStorageInfo,
    getStorageInfoSync,
    removeStorage,
    removeStorageSync,
    clearStorage,
    clearStorageSync,
} = uni

export default class Storage {
    constructor() { }

    // 同步设置某一项
    setItem(key, value) {
        return setStorageSync(key, JSON.stringify(value))
    }

    // 同步获取某一项
    getItem(key) {
        return JSON.parse(getStorageSync(key))
    }

    // 同步移除某一项
    removeItem(key) {
        removeStorageSync(key)
    }

    // 同步清除
    clear() {
        clearStorageSync()
    }

    // 同步获取当前 storage 的相关信息。
    getInfo() {
        return getStorageInfoSync();
    }

}