import { baseRequest } from './baseRequest'

export const hmRequest = baseRequest({
  baseURL: '/bb',
  timeout: 1000 * 60 * 5,
  interceptors: {
    // requestInterceptors: (config: any) => config,
    // responseInterceptors: (result: AxiosResponse) => result,
  },
})
