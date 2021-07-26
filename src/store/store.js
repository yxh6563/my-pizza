import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        //设置属性
        menuItem:{},
        currentUser: null,
        isLogin: false
    },
    getters:{
        //获取属性的状态
        getMenuItems: state => state.menuItem,
        currentUser:state => state.currentUser,
        isLogin:state => state.isLogin
    },
   mutations:{
       //更改属性状态
       setMenuItem(state,data){
           state.menuItem = data
       },
       //更改用户状态信息
       userStatus(state,user){
           if(user){
               state.currentUser = user
               state.isLogin = true
           }else{
               state.currentUser = null
               state.isLogin = false
           }
       }
   },
   actions:{
       //应用mutations
       setUser({commit},user){
           commit("userStatus",user)
       }
   }
})