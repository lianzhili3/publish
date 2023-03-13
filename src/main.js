import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

// import axios from './axios'
// Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

// import request from "./axios/index.js";   //1、导入

// Vue.prototype.$axios=request  //2.使用

// axios.defaults.baseURL = "/api";//buzhi不知道这个要不要删除，，，删了，没事


// import request from "./util/request";   //1、导入

// Vue.prototype.request=request  //2.使用

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
