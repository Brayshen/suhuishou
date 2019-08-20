import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    searchlist: [], // 存储全部的城市数据
    logolist: [] // 存储全部的logo数据
  },
  getters: {
    citylist(state) {
      return state.searchlist
    },
    logolist(state) {
      return state.logolist
    }
  },

  mutations: {
    setphonelist(state, payload) {
      state.searchlist = payload.searchlist
    },
    Logolist(state, payload) {
      state.logolist = payload.logolist
    }
  },

  actions: {
    // 获取手机产品的列表数据
    getPhonelist({ commit }) {
      request.get('http://localhost:3000/dataes').then(res => {
        if (res.Status === 0) {
          console.log(res.brands)
          console.log(res.products)
          console.log('请求成功~')
          // commit({
          //   type: 'setphonelist',
          //   searchlist: res.products
          // })
          commit({
            type: 'Logolist',
            logolist: res.brands
          })
        }
      })
    }
  }
}
