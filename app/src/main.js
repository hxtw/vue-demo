// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import layer from '../static/layer.m'
import axios from 'axios'
import VeeValidate from 'vee-validate'
// import qs from 'qs'

Vue.config.productionTip = false;
const config = {
  errorsBagName:'errorsBags',
}

Vue.use(Vuex);
Vue.use(layer);
Vue.use(VeeValidate,config);

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
