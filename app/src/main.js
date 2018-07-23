// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import layer from '../static/layer.m'
import axios from 'axios'
// import qs from 'qs'
// import vueLoader from 'vue-loader'

Vue.config.productionTip = false;
// Vue.use(vueLoader);
Vue.use(Vuex);
Vue.use(layer);
// Vue.use(qs);

Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;//让ajax携带cookie

const store = new Vuex.Store({
  state: {},
  mutations: {},
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
