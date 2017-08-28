<template>
    <div>
        登录
    </div>
</template>
<script>

    export default {
        name: '',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
      created:function(){
        this.$store.commit('titleChange','登录');
      },
    }
</script>
