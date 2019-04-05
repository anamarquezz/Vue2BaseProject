import Vue from 'vue'
import Vuex from 'vuex'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import actions from './actions';
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    token: null
  },

  /*MUTATIONS CHANGES THE VARIABLES OF THE STATE */
  mutations: mutations,
  /* Instead of mutating the state, actions commit mutations. Events and they are Actions can contain arbitrary asynchronous operations */
  actions: actions,
  getters: getters
});