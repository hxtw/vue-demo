// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from './vue-resource'
// import Vuex from './vuex'
import layer from '../static/layer.m'

Vue.config.productionTip = false
Vue.use(vueResource);
// Vue.use(Vuex);
Vue.use(layer);

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
router.beforeEach(function(to,from,next){
  $(window).scrollTop(0);
  window.route = to; //每次都在window 全局挂在当前页面路由信息
  store.state.left.fn = function() {
    let obj = window.route;
    let paramsData = store.state.paramsData;
    let cUrl = store.state.cUrl;
    try{
      if(obj.path == cUrl && !units.is_obj(paramsData)) {
        units.appGo('H5Finish');
      }else{
        history.go(-1);
      }
    }catch(e){
      history.go(-1);
    }
  };
  let winH = document.documentElement.clientHeight;
  $('#loading').show().animate({
    top:(winH-116)/2,
    opacity:1
  },10,function () {
    console.log(1);
  });
  store.state.header = true; //header 单独控制
  next();
});
router.afterEach(function(transition) {
  setTimeout(function () {
    $('#loading').animate({
      opacity:0
    },10).hide()
  },800);
});

