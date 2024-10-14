/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { pc } from '@es/request/pc'
import { genTraceId } from '@es/traceid'
import { message } from '@m-ui/react'

/**
 * HTTP状态码-成功
 *
 * @const
 * @type {number}
 */
const HTTP_STATUS_CODE_OK = 200

/**
 * 业务请求成功码
 *
 * @const
 * @type {number}
 */
const SUCCESS_RESULT = [1, 200]

const requestModelInstance = pc.create({
  headers: {
    'Content-Type': 'application/json',
  },
  errorConfig: {
    showError(error) {
      const errorMsg = '网络请求超时，请检查您的网络';
      if (`timeout of ${requestModelInstance.defaults?.timeout}ms exceeded` === error?.message) {
        message.error(errorMsg);
        return Promise.reject(new Error(errorMsg));
      } else {
        message.error(error.error_msg);
        return Promise.reject(error);
      }
    }
  },
  formatResponse(response: any) {
    const data = typeof response.data === 'object' && response.data ? response.data : {};
    const error_msg = data.error_msg || data.errorMsg || data.errMsg;
    data.error_msg = error_msg ? `${error_msg} [${data.code || data.result || 0}]` : error_msg;

    const res = {
      ...data,
      result: data.result,
      error_msg: data.error_msg,
    };
    // 这里code为0是做amc权限校验的
    if (
      response.status === HTTP_STATUS_CODE_OK &&
      (!!SUCCESS_RESULT.includes(data.result as number) || data.code === 0)
    ) {
      return res;
    }
    return Promise.reject(data);
  },
})

requestModelInstance.defaults.headers.common.Accept = 'application/json'
requestModelInstance.defaults.withCredentials = true
requestModelInstance.defaults.timeout = 30 * 1000

requestModelInstance.interceptors.request.use((config: any) => {
  config.headers['Trace-Id'] = genTraceId()
  config.metadata = { startTime: +new Date() }
  return config
})

export type commonResType<T> = Promise<{
  result: number
  code: number
  error_msg: string
  data: T
  page?: {
    totalCount: number
    pageNum: number
    pageCount: number
    pageSize: number
  }
}>

export default requestModelInstance
