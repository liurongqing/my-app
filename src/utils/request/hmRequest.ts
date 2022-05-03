import { Request } from './Request'
import { AxiosResponse } from 'axios'

import { IRequestConfig } from './ITypes'

interface IHmResponse<T> {
  code: number
  data: T
  msg: string
}

// 重写返回类型
interface IHmRequestConfig<T, R> extends IRequestConfig<IHmResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: '/aa',
  timeout: 1000 * 60 * 5, // 5分钟
  interceptors: {
    requestInterceptors: (config) => config,
    responseInterceptors: (result: AxiosResponse) => result,
  },
})

export const hmRequest = <D = any, T = any>(config: IHmRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (['get', 'GET'].includes(method)) {
    config.params = config.data
  }
  return request.request<IHmResponse<T>>(config)
}
