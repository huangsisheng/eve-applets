/*
 * @Author: your name
 * @Date: 2021-04-07 18:00:54
 * @LastEditTime: 2021-04-07 18:07:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\store\modules\user.js
 */
import { CHANGE_THEME_COLOR } from "../constants";
export default {
    state: {
        themeColor: "#ff00"
    },
    mutations: {
        [CHANGE_THEME_COLOR]: (state, data) => {
            state.themeColor = data
        }
    },
    actions: {
        changeTheme({ commit }, data) {
            commit('CHANGE_THEME_COLOR', data)
        }
    },
}