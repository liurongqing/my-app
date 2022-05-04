import { hmApi } from '../utils'
import { API_USER } from '../constants'

export const getUser = async (data: any) => {
  return await hmApi.request({
    url: API_USER,
    data,
    interceptors: {
      requestInterceptors: (config: any) => {
        console.log('接口请求... config', config)
        return config
      },
      responseInterceptors: (res: any) => {
        console.log('接口响应... res', res)
        return res
      },
    },
  })
}
