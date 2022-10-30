import axios from "axios"
// import router from '@/router'

// 创建一个axios实例
const axiosService = axios.create({
  // 设置请求接口的基地址
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: "", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// 添加请求拦截器
axiosService.interceptors.request.use(config => {
  const _token = ""
  const _authorization = `Bearer ${_token}`

  if (_token) config.headers!.Authorization = _authorization

  return config
}, error => Promise.reject(error))

// 添加响应拦截器
axiosService.interceptors.response.use(response => {


  // const { } = response.data
  console.log('interceptors.response 成功')

  return response

}, error => Promise.reject(error))


export default axiosService
