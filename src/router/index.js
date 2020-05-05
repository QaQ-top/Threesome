import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home';
import Mine from '../pages/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'home'
    },
    {
      path:'/home',
      component:Home,
      children:[
        
      ]
    },
    {
      path:'/mine',
      component:Mine
    }
  ]
})
