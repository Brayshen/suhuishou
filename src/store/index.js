import Vue from 'vue'

import Vuex from 'vuex'

import city from './modules/city'
import home from './modules/home'
import login from './modules/login'
import wallet from './modules/wallet'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    home,
    login,
    wallet
  }
})
