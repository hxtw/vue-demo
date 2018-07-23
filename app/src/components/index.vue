<template>
    <div>
        <div>this is template body</div>
    </div>
</template>
<script>
  import unit from '../tools/units'
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
      created:function(){
        this.getList();
      },
      methods:{
        getList(){
          this.$axios.get(unit.host('cityJson.json')).then(res=>{
              console.log(res)
          });
        },
      }
    }
</script>
