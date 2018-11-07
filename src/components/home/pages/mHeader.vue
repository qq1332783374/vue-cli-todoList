<template>
    <div class="header">
        <div class="row">
           <div class="col-xs-8">
               <input type="text" class="form-control" placeholder="输入代办" v-model="todoItem">
           </div>
           <div class="col-xs-4">
               <button class="btn btn-info" type="button" @click="addtodo">添加</button>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'mHeader',
    data(){
        return {
            todoItem:''
        }
    },
    methods:{
        addtodo(){
            if(this.todoItem!=0){
                this.$emit('addtodo',this.todoItem)
                this.todoItem = ""
            }else{
                alert('请输入代办')
            }
            
        }
    }
}
</script>

<style scoped>
.header{
    padding: 6px 12px;
}
</style>


