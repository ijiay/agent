import axios from 'axios'
import Qs from 'qs'
import router from './router'

// 创建axios实例
const http = axios.create({
  baseURL: '', // api的base_url
  timeout: 60000,                  // 请求超时时间
  withCredentials: true,
  transformRequest: [function (data) {
    if (data instanceof FormData) {
      return data
    } else {
      data = Qs.stringify(data)
      return data
    }
  }]
})
// request拦截器
http.interceptors.request.use(config => {
  // EventBus.$emit('ajax-start', config.extra || {
  //   showLoading: true
  // });
  return config
}, error => {
  return Promise.reject(error)
})

// respone拦截器
http.interceptors.response.use(response => {
    // EventBus.$emit('ajax-success', response.config.extra || {
    //   showLoading: true
    // })
  const code = response.data.code
  if (+code === 2) {
    router.app.$router.push({
      name: 'login'
    })
  } else {
    return response.data
  }
  return response.data
}, error => {
  return Promise.reject(error)
})

export default http
