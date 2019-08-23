import Vue from 'vue'

import Vuex from 'vuex'

import city from './modules/city'
import home from './modules/home'
import index from './modules/home'
import login from './modules/login'
import wallet from './modules/wallet'
import listcity from './modules/listcity'
import huanshouji from './modules/huanshouji'
import search from './modules/search'
import detail from './modules/detail'
import area from './modules/area'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    home,
    index,
    login,
    wallet,
    listcity,
    huanshouji,
    search,
    detail,
    area
  }
})
