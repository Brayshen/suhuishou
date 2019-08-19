import Vue from 'vue'

import Vuex from 'vuex'

import city from './modules/city'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    home
  }
})
