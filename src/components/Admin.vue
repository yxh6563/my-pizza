<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!--new Pizza-->
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!--品种展示-->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button class="btn btn-outline-danger btn-sm" @click="deleteData(item)">&item;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import NewPizza from './NewPizza.vue'
export default {
    data(){
        return{
            getMenuItems:[],
            id: this.$route.params.id
        }
    },
    components:{
        'app-new-pizza': NewPizza
    },
    created(){
        axios.get("http://localhost:3000/pizzaMenu")
         .then(res => {
            //  console.log(res.data)
            const data = res.data
            const menuArray = []
            for(let key in data){
                const menu = data[key]
                menuArray.push(menu) 
            }
            this.getMenuItems = menuArray
         })
    },
    methods:{
        deleteData(item){
            axios.delete("http://localhost:3000/pizzaMenu/"+item.id)
              .then( res => {
                //   console.log(res.data)
                this.$router.push({path:'/menu'})
              }).catch(error =>{
                  console.log(error)
              })
        }
    }
}
</script>

<style>

</style>