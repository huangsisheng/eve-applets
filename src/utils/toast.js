/*
 * @Author: your name
 * @Date: 2021-04-07 17:08:40
 * @LastEditTime: 2021-04-08 10:39:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\utils\toast.js
 */

export default class Toast {
    constructor() { }

    showToast(params = {}) {
        const {
            title = null,
            duration = 1500,
            mask = false,
            icon = 'none',
            image = ''
        } = params

        uni.showToast({
            title,
            duration,
            mask,
            icon,
            image
        })
    }

    hideToast() {
        uni.hideToast()
    }

    showLoading(params = {}) {
        const {
            title = '加载中...',
            mask = false,
        } = params
        uni.showLoading({
            title,
            mask
        });
    }

    hideLoading() {
        uni.hideLoading();
    }

    showModal(params = {}) {
        const {
            title = '提示',
            content = '这是一个模态弹窗',
            showCancel = true,
            confirmText = '确定',
            cancelText = '取消' } = params
        return new Promise((resolve, reject) => {
            return uni.showModal({
                title,
                content,
                showCancel,
                cancelText,
                confirmText,
                cancelColor: '#000000',
                confirmColor: '#3CC51F',
                success: (res) => {
                    if (res.confirm) {
                        return resolve(res.confirm)
                    } else if (res.cancel) {
                        return reject(res.cancel)
                    }
                },
                fail: () => reject(true)
            });
        })
    }

    
    showActionSheet() {
        uni.showActionSheet();
    }
}

