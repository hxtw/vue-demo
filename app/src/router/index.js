import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: function(resolve){
        require(['../components/index.vue'],resolve)
      }
    },
    {
      path: '/basic',
      name: 'basic',
      component: function(resolve){
        require(['../components/basic.vue'],resolve)
      }
    },
    {
      path: '/bankCard',
      name: 'bankCard',
      component: function(resolve){
        require(['../components/bankCard.vue'],resolve)
      }
    },
    {
      path: '/supply',
      name: 'supply',
      component: function(resolve){
        require(['../components/supply.vue'],resolve)
      },
    },
    {
      path: '/loanRepay',
      name: 'loanRepay',
      component: function(resolve){
        require(['../components/loanRepay.vue'],resolve)
      },
    },
    {
      path: '/regist',
      name: 'regist',
      component: function(resolve){
        require(['../components/regist.vue'],resolve)
      },
    },
    {
      path: '/cityDemo',
      name: 'cityDemo',
      component: function(resolve){
        require(['../components/cityDemo.vue'],resolve)
      },
    },
    {
      path: '/sourceIndex',
      name: 'sourceIndex',
      component: function(resolve){
        require(['../components/sourceIndex.vue'],resolve)
      },
    },
  ]
})
