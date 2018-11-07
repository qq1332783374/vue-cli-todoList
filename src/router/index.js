import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import mHone from '@/components/home/todolist'
//二级路由
import done from '@/components/home/pages/done'
import todo from '@/components/home/pages/todo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/todo',
      component: mHone,
      children:[
        {
          path:'done',
          name:'done',
          component:done
        },
        {
          path:'todo',
          name:'todo',
          component:todo
        },
      ]
    },

  ]
})