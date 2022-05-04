import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { IRequestConfig, IRequestInterceptors } from './ITypes'

export class Request {
  // axios 实例
  instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: IRequestInterceptors<AxiosResponse>

  // 保存url对应的取消方法的集合
  cancelRequestSourceList?: Map<string, () => void>

  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
    this.cancelRequestSourceList = new Map()

    // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应

    // 全局请求
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求... res', res)
        return res
      },
      (err: any) => err
    )

    // 实例请求
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应...res', res)
        return res.data
      },
      (err: any) => err
    )
  }

  // 发起请求
  request<T>(config: IRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }

      const { url } = config
      if (url) {
        config.cancelToken = new axios.CancelToken((c) => {
          this.cancelRequestSourceList?.set(url, c)
        })
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
        .finally(() => {
          if (url) {
            this.cancelRequestSourceList?.delete(url)
          }
        })
    })
  }

  // 取消请求
  cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      this.cancelRequestSourceList?.get(url)?.()
    } else {
      url.forEach((source) => this.cancelRequestSourceList?.get(source)?.())
    }
  }

  // 取消全部请求
  cancelAllRequest() {
    this.cancelRequestSourceList?.forEach((source) => source())
  }
}
