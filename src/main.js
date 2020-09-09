// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import pcRouter from './pc/router'
import mobRouter from './mobile/router'
import Axios from './axios'
import Element from 'element-ui';
import VueLazyload from 'vue-lazyload'


Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/error.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false

//判断是否为移动设备，是，则切换为移动端的路由
let router;
if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
    router = mobRouter
}else{
  router = pcRouter
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
