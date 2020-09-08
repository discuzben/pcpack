// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import qs from "qs"
import router from './router'
import Element from 'element-ui';
import VueLazyload from 'vue-lazyload'

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

Vue.prototype.$axios = Axios

Axios.defaults.baseURL =  'https://test.juniuapi.com';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] =  'application/x-www-form-urlencoded';
//添加请求拦截器
Axios.interceptors.request.use(function(config) {
  if(config.method == "post") {
    config.data = qs.stringify(config.data);
  }
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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
