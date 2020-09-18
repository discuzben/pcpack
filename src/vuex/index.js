import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)
// 创建一个store
export default new Vuex.Store({
  debug: true,
  state:{
    count: 0,
    userinfo: ''
  },
  getters: {
    getState(state){
      return state.count>0 ? state.count : 0
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    }
  },
  //异步操作（例如请求数据时）时使用actions分发任务，平时不使用
  actions: {
    //context 承上启下
    increment(context){
      // setTimeout(function(){
        context.commit("increment");
      // },1000)
    },
    decrease(context){
      context.commit("decrease");
    }
  }
})
