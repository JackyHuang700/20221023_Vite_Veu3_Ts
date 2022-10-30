import axios from "axios"
import { /**AxiosRequestConfig, */ AxiosInstance, AxiosResponse, AxiosRequestConfig  } from 'axios'
// import router from '@/router'

// 创建一个axios实例
const axiosService:AxiosInstance = axios.create({
  // 设置请求接口的基地址
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: "", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// 添加请求拦截器
axiosService.interceptors.request.use((config: AxiosRequestConfig) => {
  const _token = ""
  const _authorization = `Bearer ${_token}`

  if (_token) config.headers!.Authorization = _authorization

  return config
}, error => Promise.reject(error))

// 添加响应拦截器
axiosService.interceptors.response.use((response: AxiosResponse) => {


  // const { } = response.data
  console.log('interceptors.response 成功')



  return response

}, error => {

  // https://juejin.cn/post/7070847898832863269?share_token=0ae4ec72-ee83-47cb-b7ee-226b73adf8fe


  //    驗證失敗，登出
  // if(){
  //   router.push('/login')

  //   Message.error('登录超时正在退出...')
  // }

  Promise.reject(error)
})


export default axiosService
