import Vue from 'vue'

import Vuex from 'vuex'

import city from './modules/city'
import home from './modules/home'
import huanshouji from './modules/huanshouji'
import search from './modules/search'
import detail from './modules/detail'
import area from './modules/area'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    home,
    huanshouji,
    search,
    detail,
    area
  }
})
