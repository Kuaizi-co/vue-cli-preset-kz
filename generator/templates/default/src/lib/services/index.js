import Vue from 'vue'
import axios from 'axios'
import config from '@/config'

const api = axios.create({
  baseURL: config.baseURL
})

api.interceptors.request.use(config => config, err => Promise.reject(err))
api.interceptors.response.use(({ data: { data, code, message } }) => {
  if (code === 0) return data
  const failData = { code, message }
  return Promise.reject(failData)
}, err => Promise.reject(err))

/**
 * GET method
 * @param {*} url  请求地址
 * @param {*} data 查询参数
 */
api.fetch = async config => {
  const result = await api(config)
  return result
}

if (!Vue.$http) Vue.$http = api

export default api
