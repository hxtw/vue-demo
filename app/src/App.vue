<template>
  <div id="app">
    <header class="header" v-if="$store.state.header">
      <a class="go_return" @touchstart.stop.prevent="$store.state.left.click" v-text="$store.state.left.text" v-bind:style="{ backgroundImage: $store.state.left.img}"></a>
      <p>{{$store.state.title}}</p>
      <a v-bind:style="{ backgroundImage: $store.state.right.img}"  class="right_btn" @touchstart.stop.prevent='$store.state.right.click'></a>
    </header>
    <div style="height:1.26rem;width:100%"></div>
    <transition name='fade' type='animation'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
