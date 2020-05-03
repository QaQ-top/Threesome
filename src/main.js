// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**
 * @property 引入axios，并且挂载在Vue原型上
 */
import axios from './api'
Vue.prototype.axios = axios;

/**
 * @property 引入Element ui
 */
import './vant'

/**
 * @property 引入flexible自适应
 */
import 'amfe-flexible'





/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

/**
 * @function beforeEach 路由跳转前
 * @param {*} to 要去的页面
 * @param {*} fom 当前页面
 * @param {function} next 调用函数进行页面跳转
 */
router.beforeEach((to,fom,next)=>{
  
  next();
})