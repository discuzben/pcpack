import Vue from 'vue'
import Axios from 'axios'
import qs from "qs"
import Config from "./config"

Vue.prototype.$axios = Axios



Axios.defaults.baseURL =  Config.baseUrl;
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] =  'application/x-www-form-urlencoded';
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
  return response;
}, function(error) {
  return Promise.reject(error);
})

export default {
  Axios
}
