// import {getToken} from '../utils/login';
// import axios from 'axios';
//
// const requestBeforeSend = (config) => {
//   let token = getToken();
//   config.headers.token = token.token;
//   return config;
// }
//
// const requestError = (error) => {
//   return Promise.reject(error);
// }
//
// const afterResponse = (response) => {
//
//   switch (response.status) {
//     case 404:
//       // TODO: 捕获404错误
//       console.log("response.data.resultCode是404")
//       return response;
//     case 401:
//       // TODO: 捕获401用户未认证错误，一般跳转到登录页
//       return response;
//     default:
//   }
//
//   return response;
// }
//
// const responseError = (error) => {
//   return Promise.reject(error.response)
// }
//
// /**
//  * 为axios添加拦截器
//  * @param enableRequestInterceptor 是否使用请求拦截器
//  * @param enableResponseInterceptor 是否使用响应拦截器
//  */
// const init = (enableRequestInterceptor, enableResponseInterceptor) => {
//
//   enableRequestInterceptor && axios.interceptors.request.use(requestBeforeSend, requestError);
//
//   enableResponseInterceptor && axios.interceptors.response.use(afterResponse, responseError);
// }
//
// export default init;
