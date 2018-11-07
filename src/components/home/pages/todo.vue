<template>
    <div class="todo">
        <ul class="list-group">
            <li 
                class="list-group-item"
                v-for="(item,index) in todoList"
                :key="index"
                @click="del(index)"
            >
            {{item.content}}
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name:'todo',
    props:['todoList'],
    methods:{
        del(index){
            this.$emit('del',index)
        }
    }
}
</script>

<style>

</style>


