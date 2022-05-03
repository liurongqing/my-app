import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type {
  IRequestConfig,
  IRequestInterceptors,
  ICancelRequestSource,
} from './ITypes'

export class Request {
  // axios 实例
  instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: IRequestInterceptors<AxiosResponse>

  CancelRequestSourceList?: ICancelRequestSource[]

  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors

    // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应

    // 全局请求
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => res,
      (err: any) => err
    )

    // 实例请求
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => res.data,
      (err: any) => err
    )
  }

  request<T>(config: IRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
        .finally(() => {})
    })
  }
}
