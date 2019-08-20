import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    searchlist: [] // 存储全部的城市数据
  },

  getters: {
    setphonelist(state) {
      state.searchlist = searchlist
    }
  },

  mutations: {
    setphonelist(state, payload) {
      state.searchlist = payload.searchlist
    }
  },

  actions: {
    // 获取手机产品的列表数据
    getPhonelist({ commit }) {
      request.get('http://localhost:3000/datas').then(res => {
        if (res.status === 0) {
          console.log(res.products)
          commit({
            type: 'setphonelist',
            searchlist: res.datas.brands
          })
        }
      })
    }
  }
}
