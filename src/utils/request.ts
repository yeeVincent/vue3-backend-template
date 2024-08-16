import axios from 'axios';

/**
 *  需要封装的request, 使用@/hooks/request
 *  axios用于发起请求, 数据缓存使用vue-query
 *  响应、请求拦截, baseUrl设置 在@/api/interceptor
 */
export const request = axios;
export const { get } = axios;
export const { post } = axios;
