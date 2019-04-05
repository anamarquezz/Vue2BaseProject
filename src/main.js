// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import jQuery from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue'
import VueResource from 'vue-resource'
import vuex from 'vuex'


Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(vuex);



/* Extra components */





/* Extra components */

Vue.config.productionTip = false ; 


import store from './store/store'


/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  store:store,
  components: { App },
  template: '<App/>'
})
