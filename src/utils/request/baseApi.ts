import { AxiosResponse } from 'axios'
import { baseRequest } from './baseRequest'

/**
 * @example
 * ```bash
 * hmApi.request({ url: 'xx', method: 'GET' }) 发起请求
 * hmApi.cancelRequest('https://www.xx.com/getUser') 取消请求
 * hmApi.cancelAllRequest() 取消所有请求
 * ```
 */
export const baseApi = baseRequest({
  baseURL: '/aa',
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptors: (config: any) => {
      console.log('实例 hmApi 请求... config', config)
      return config
    },
    responseInterceptors: (result: AxiosResponse) => {
      console.log('实例 hmApi 响应... result', result)
      return result
    },
  },
})

export const hmApi = baseRequest({
  baseURL: '/aa',
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptors: (config: any) => {
      console.log('实例 hmApi 请求... config', config)
      return config
    },
    responseInterceptors: (result: AxiosResponse) => {
      console.log('实例 hmApi 响应... result', result)
      return result
    },
  },
})

export const uploadApi = baseRequest({
  baseURL: '/bb',
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptors: (config: any) => {
      console.log('实例 uploadApi 请求... config', config)
      return config
    },
    responseInterceptors: (result: AxiosResponse) => {
      console.log('实例 uploadApi 响应... result', result)
      return result
    },
  },
})
