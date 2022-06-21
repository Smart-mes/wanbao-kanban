import axios from 'axios'

const MockBaseURL = '/mock'

// 创建axios实例
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? MockBaseURL : 'http://xxxx:yyy/api',
  timeout: 25000,
})

// request请求拦截器
api.interceptors.request.use((reqConfig) => reqConfig, (error) => Promise.reject(error))

// respone拦截器
api.interceptors.response.use((response) => {
  const { data } = response
  return response.config.baseURL === MockBaseURL ? data.data : data
}, (error) => Promise.reject(error))

export default {
  get: (url, params) => api.get(url, { params }),

  post: (url, data) => api.post(url, data),

  put: (url, data) => api.put(url, data),

  delete: (url, data) => api.delete(url, { data }),

  all: axios.all,
}
