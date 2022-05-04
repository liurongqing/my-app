import { Request } from './Request'
// import { AxiosResponse } from 'axios'

import { IRequestConfig } from './ITypes'

interface IBaseResponse<T> {
  code: number
  data: T
  msg: string
}

// 重写返回类型
interface IBaseRequestConfig<T, R> extends IRequestConfig<IBaseResponse<R>> {
  data?: T
}

export const baseRequest = (instanceConfig: any) => {
  const request = new Request(instanceConfig)

  return {
    request: <D = any, T = any>(config: IBaseRequestConfig<D, T>) => {
      const { method = 'GET' } = config
      if (['get', 'GET'].includes(method)) {
        config.params = config.data
      }
      return request.request<IBaseResponse<T>>(config)
    },
    cancelRequest: request.cancelRequest,
    cancelAllRequest: request.cancelAllRequest,
  }
}
