<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../src/assets/icon.jpg" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email" />
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password" />
                        </div>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
      return{
          email:'',
          password:''
      }
  },
  //组件内导航守卫
  beforeRouterEnter:(to,from,next) =>{
      next(vm => vm.$store.dispatch("setUser",null))
  },
  methods:{
      onSubmit(){
          axios.get('http://localhost:3000/doLogin')
           .then(res => {
              // console.log(res.data);
              //如果打印的数据是个Object,要进行转换成数组
            //   const data = res.data
            //   const users = []
            //遍历当前对象
            //   for(let key in data){
            //       const user = data[key]
            //     //   users.push(user)
            //   }
              //实现过滤
            //   let result = res.data.filter((user) =>{
            //       return user.email === this.email && user.password === this.password
            //   })
              let result = res.data.filter((item) =>{
                   return item.email === this.email && item.password === this.password;
               })
            //   console.log(result)
            //   //判断result的长度是否大于）
              if(result != null && result.length>0){
                  //获取用户登录的状态
                  this.$store.dispatch("setUser",result[0].email)
                  this.$router.push({path:'/'})
              }else{
                  alert("账号或密码错误!")
                  this.$store.dispatch("setUser",null)
              }
           })
      }
  }
}
</script>

<style>

</style>