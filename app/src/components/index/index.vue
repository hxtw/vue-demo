<template>
  <div>
    <transition name='fade' type='animation'>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  //  import units from '../tools/units'
  //  import cookie from '../tools/cookie'
  export default {
    name: 'list',
    data () {
      return {
        details:{}
      }
    },
    created:function () {
    },
    mounted:function () {
    }
  }
</script>
