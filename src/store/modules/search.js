// 需要调用 ajax 。那么引入封装好的 网络请求工具模块
import request from '../../utils/request'
import search from '../../views/Search/index.vue'
import { log } from 'util'

export default {
  namespaced: true,

  state: {
    searchName: '', // 搜索关键字
    resList: []
  },
  getters: {
    searchList(state) {
      // 基于 studentList 与 searchName 计算之后返回一个新的数据
      let result = []
      if (state.searchName != '') {
        state.resList.forEach(item => {
          item.forEach(item => {
            // console.log(item.title.indexOf(state.searchName))

            if (item.title.indexOf(state.searchName) > -1) {
              result.push(item)
            }
          })
        })
      }
      return result
    }
  },

  mutations: {
    setSearchRes(state, payload) {
      // console.log(state.resList)
      let N_Data = payload.slice(1).map(item => item.data)
      console.log(N_Data)
      state.resList = N_Data
    },
    search(state, payload) {
      state.searchName = payload
      // console.log(this.resList)
      // console.log(this.searchList)
    },
    reset(state) {
      state.searchName = null
      // console.log(this.searchList)
    }
  },

  actions: {
    getSearchRes({ commit }) {
      request.get('http://localhost:3000/data').then(data => {
        // console.log(data)
        // console.log(tPage)
        commit('setSearchRes', data)
      })
    }
  }
}
