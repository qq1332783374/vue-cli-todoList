<template>
    <div class="home">
        <mHeader @addtodo="addtodo"></mHeader>
        <mTab :todoListLength="todoListLength" :doneListLength="doneListLength"></mTab>
        <router-view :todoList="todoList" :doneList="doneList" @del="del"/>
    </div>
</template>

<script>
//引入头部
import mHeader from './pages/mHeader'
//引入导航栏
import mTab from './pages/mTabbar'
export default {
    name:'home',
    components:{
        mHeader,
        mTab
    },
    data(){
        return{
            todoList:[
                {id:1,content:'todo-1'},
                {id:2,content:'todo-2'},
                {id:3,content:'todo-3'},
                {id:4,content:'todo-4'},
                {id:5,content:'todo-5'}
            ],
            doneList:[]
        }
    },
    computed:{
        todoListLength(){  //计算代办
            return this.todoList.length
        },
        doneListLength(){ //计算完成
            return this.doneList.length
        }
    },
    methods:{
        addtodo(val){
            if(this.todoList == 0){
                var obj = {
                    id:1,
                    content:val
                }
                this.todoList.push(obj)
            }else{
                var obj1 = {
                    id:this.todoList[this.todoList.length-1]+1,
                    content:val
                }
                this.todoList.push(obj1)
            }
        },
        del(index){
            if(confirm("确定完成了吗？")){
                var obj = this.todoList.splice(index,1)
                this.doneList.push(obj[0])
            }
        }
    }
}
</script>

<style>

</style>


