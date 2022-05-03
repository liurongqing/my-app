import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IRequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any

  // 响应拦截
  responseInterceptors?: (config: T) => T
  responseINterceptorsCatch?: (err: any) => any
}

// 自定义传入的参数
export interface IRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors<T>
}

export interface ICancelRequestSource {
  [index: string]: () => void
}
