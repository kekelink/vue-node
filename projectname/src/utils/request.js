import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import router from '../router'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  // timeout: 5000, // 请求超时时间
  withCredentials: true
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (localStorage.eleToken) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      // config.headers['SWOFT_SESSION_ID'] = getToken()
      config.headers.Authorization = localStorage.eleToken
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 1) {
      // 101:非法的token; 102:其他客户端登录了;
      if (res.code === 102) {
        MessageBox.confirm(
          `${res.msg}`, // 。你已被登出，请重新登录
          '确定登出',
          {
            confirmButtonText: '重新登录',
            showCancelButton: false,
            type: 'warning'
          }
        )
      } else if (res.code === 101) {
        // 授权过期
        MessageBox.confirm(
          `${res.msg}。你可以取消继续留在该页面，或者重新登录`,
          '提示',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          // console.log(111)
          localStorage.removeItem('eleToken')
          router.push(`/login`)
        })
      } else if (res.code === 0) {
        console.log(res)

        Message({
          message: res.msg,
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
