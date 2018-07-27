<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition name='fade' type='animation'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
   // (function (doc, win) {
   //   var docEl = doc.documentElement,
   //     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
   //     recalc = function () {
   //       var clientWidth = docEl.clientWidth;
   //       if (!clientWidth) return;
   //       docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
   //     };
   //   if (!doc.addEventListener) return;
   //   win.addEventListener(resizeEvt, recalc, false);
   //   doc.addEventListener('DOMContentLoaded', recalc, false);
   // })(document, window);
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html {
  font-size: calc(100vw / 7.5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  background-color: #fafafa;
}
.header {
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid #e9e9e9;
  position: relative;
  background-color:#ffffff;
}

.header .h-icon {
  width: .22rem;
  height: .38rem;
  display: block;
  background: url('../static/img/back-icon.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: .32rem;
  left: .3rem;
}

.header p {
  font-size: 0.34rem;
  font-weight: bold;
  width: 3.5rem;
  margin-left: 2rem;
  color:#333333;
  text-align:center;
}

</style>
