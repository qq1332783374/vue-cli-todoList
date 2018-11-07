<template>
    <div class="done">
        <ul class="list-group"  v-if="toggle">
            <li 
                class="list-group-item" 
                v-for="(item , index) in doneList" 
                :key="index"
            >
                {{item.content}}
            </li>
        </ul>
         <div v-else>
            暂无完成事项...
        </div>
    </div>
</template>

<script>
export default {
    name:'done',
    data(){
        return {
            isShow:false
        }
    },
    props:['doneList'],
    computed:{
        toggle(){
            return this.doneList.length>0?this.isShow=true:this.isShow=false
        }
    }
}
</script>

<style>

</style>


