import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    searchlist: [], // 存储全部的城市数据
    logolist: [], // 存储全部的logo数据
    earchlist: [
      { pinyin: 'shuoji', id: 1, name: '手机' },
      { pinyin: 'pingban', id: 2, name: '平板' },
      { pinyin: 'bijiben', id: 3, name: '笔记本' },
      { pinyin: 'taishiji', id: 4, name: '台式机' },
      { pinyin: 'xaingji', id: 5, name: '相机' },
      { pinyin: 'shoubiao', id: 6, name: '手表' }
    ]
  },
  getters: {
    citylist(state) {
      return state.searchlist
    },
    logolist(state) {
      return state.logolist
    },
    earchlist(state) {
      return state.earchlist
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
          // console.log(res.products)
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
