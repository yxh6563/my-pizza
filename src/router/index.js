import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/About/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

//二级路由
import Contact from '@/components/About/Contact'
import Delivery from '@/components/About/Delivery'
import History from '@/components/About/History'
import OrderingGuide from '@/components/About/OrderingGuide'

//三级路由
import Phone from '@/components/About/contact/Phone'
import PersonName from '@/components/About/contact/PersonName'

Vue.use(Router)

export default new Router({
  mode:'history',
  // scrollBehavior(to,from,savedPosition){
  //   if(savedPosition){
  //     return savedPosition
  //   }else{
  //     return {x:0,y:0}
  //   }
  // },
  routes: [
    {path:'/',components:{
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
    }},
    {path:'/menu',component:Menu},
    {path:'/admin',component:Admin},
    {
      path:'/about',
      component:About,
      redirect:'/contact',
      children:[
        {path:'/contact',redirect:'/personName',component:Contact,children:[
          {path:'/phoneNumber',component:Phone},
          {path:'/personName',component:PersonName}
        ]},
        {path:'/delivery',component:Delivery},
        {path:'/history',component:History},
        {path:'/orderingGuide',component:OrderingGuide},
      ]
    },
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'*',redirect:'/'}
  ]
})