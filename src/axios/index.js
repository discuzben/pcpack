import Vue from 'vue'
import Axios from 'axios'
import qs from "qs"
import Config from "./config"
import { Message } from 'element-ui';

Vue.prototype.$axios = Axios
Vue.prototype.$message = Message;
Vue.prototype.HOST = '/api'
Vue.use(Message)


Axios.defaults.baseURL =  '/api';
// Axios.defaults.baseURL =  Config.baseUrl;
// Axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// Axios.defaults.headers.post['Content-Type'] =  'application/x-www-form-urlencoded';
//添加请求拦截器
Axios.interceptors.request.use(function(config) {
  if(config.method == "post") {
    config.data = qs.stringify(config.data);
  }
  config.url = Config.urlHub[config.url]
  return config;
}, function(error) {
  return Promise.reject(error);
})
//添加响应拦截器
Axios.interceptors.response.use(function(response) {
  console.log(Vue.$message)
  if(response.data.code!=1000) {
    Vue.$message.error(response.data.message);
  }
  return response;
}, function(error) {
  return Promise.reject(error);
})

export default {
  Axios
}
