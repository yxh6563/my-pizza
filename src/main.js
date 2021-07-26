// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import {store} from './store/store'
//配置Vue原型（在任何页面种都可以正常使用，无需再引入）
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false
Vue.use(VueRouter)
// axios.defaults.baseURL = 'http://localhost:3000'
/* eslint-disable no-new */
// const router = new VueRouter({
//   mode:'history'
//   routes
// })

//全局守卫
// router.beforeEach((to,from,next) =>{
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录");
//     next('/login');
//   }
// })


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
