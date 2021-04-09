/*
 * @Author: your name
 * @Date: 2021-04-07 18:02:45
 * @LastEditTime: 2021-04-09 09:43:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\store\modules\theme.js
 */

import { CHANGE_THEME_COLOR } from "../constants";
import storage from "@/utils/storage"

export default {
    state: {
        theme_data: {}
    },
    mutations: {
        [CHANGE_THEME_COLOR]: (state, data) => {
            state.theme_data = data
            storage.setItem('THEME_DATA', data)
        }
    },
    actions: {
        changeTheme({ commit }, data) {
            commit('CHANGE_THEME_COLOR', data)
        }
    },
}