/*
 * @Author: your name
 * @Date: 2021-04-07 18:00:54
 * @LastEditTime: 2021-04-08 16:39:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\store\modules\user.js
 */


import { SET_USER_INFO } from "../constants";

import { userLogin } from "@/api";

import Storage from "@/utils/storage"
const storage = new Storage()

export default {
    state: {
        user_info: {}
    },
    mutations: {
        [SET_USER_INFO](state, data) {
            state.user_info = data
            storage.setItem('USER_INFO', data)
        }
    },
    actions: {
        login({ commit }, data) {
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await userLogin(data)
                    if (res.code === 200) {
                        commit('USER_INFO', res.data)
                    }
                    return resolve(res)
                } catch (error) {
                    reject(error)
                }
            })
        }
    },
}