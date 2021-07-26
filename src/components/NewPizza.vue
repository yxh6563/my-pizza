<template>
    <form>
        <h3 class="text-muted my-5">添加新的Pizza</h3>
        <div class="form-group row">
            <label class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
         <div class="form-group row">
            <label class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows="5" v-model="newPizza.description" class="form-control"></textarea>
            </div>
        </div>
        <p><strong>选项1</strong></p>
         <div class="form-group row">
            <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
         <div class="form-group row">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p><strong>选项2</strong></p>
         <div class="form-group row">
            <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
         <div class="form-group row">
            <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
    </form>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            newPizza:{}
        }
    },
    methods:{
        addMenuItem(){
            let data = {
                name: this.newPizza.name,
                description: this.newPizza.description,
                options:[
                    {
                        size: this.newPizza.size1,
                        price: this.newPizza.price1
                    },
                     {
                        size: this.newPizza.size2,
                        price: this.newPizza.price2
                    }
                ]
            }
            axios.post("http://localhost:3000/pizzaMenu",data)
              .then(res => {
                  //console.log(res.data)
                  this.$router.push({path:'/menu'})
              })
        }
    }
}
</script>