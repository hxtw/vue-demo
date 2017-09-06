import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ParentIndex from'@/components/parent/index'
import List from '@/components/parent/list'
import Login from '@/components/parent/login'
import LoginMobile from '@/components/parent/loginMobile'
import ShowIndex from '@/components/index/index'
import First from '@/components/index/first'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/parent',
      name:'parent_index',
      component:ParentIndex,
      children:[
        {
          path: '/parent/list',
          name: 'list',
          component:List
        },
        {
          path:'/parent/login',
          name:'login',
          component:Login
        },
        {
          path:'/parent/loginMobile',
          name:'loginMobile',
          component:LoginMobile
        },
      ]
    },
    {
      path:'/index',
      name:'show_index',
      component:ShowIndex,
      children:[
        {
          path:'/index/first',
          name:'first',
          component:First
        }
      ]
    }
  ]
})
