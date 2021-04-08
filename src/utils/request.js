/*
 * @Author: your name
 * @Date: 2021-04-07 14:03:03
 * @LastEditTime: 2021-04-08 10:59:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\utils\request.js
 */
import configs from "../config/index.js"
import Toast from "./toast"
const toast = new Toast()

let Fly=require("flyio/dist/npm/wx") 
let fly=new Fly

//配置请求基地址
fly.config.baseURL = configs.baseUrl

fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    request.headers["X-Tag"]="flyio";
  	//终止请求
  	//let err=new Error("xxx")
  	//err.request=request
  	//return Promise.reject(new Error(""))
    
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    toast.showLoading()
    return request;
})
 
//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
		console.log(response.data)
        toast.hideLoading()
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)

export default fly