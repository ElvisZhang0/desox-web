import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router'//引入router
import store from './store'//引入store
import axios from 'axios'
import qs from 'qs'

import App from './App.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)


Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
axios.defaults.baseURL = 'http://localhost:8080'  //关键代码

axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
	var authorization = store.getters.authorization;
    config.headers.Authorization = authorization;
    return config;
}, function (err) {
    return Promise.reject(err);
});



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
