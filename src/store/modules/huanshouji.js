// 需要调用 ajax 。那么引入封装好的 网络请求工具模块
import request from '../../utils/request'

export default {
  namespaced: true,

  state: {
    bannerList: [], // 热门影片轮播图数据
    title: [],
    price: [],
    img: [],
    id: [],
    bonus_price: []
  },

  getters: {
    bannerListImgs(state) {
      return state.bannerList.map(item => item.code)
    }
  },

  mutations: {
    setBannerList(state, payload) {
      state.bannerList = payload
    },
    setState(state, payload) {
      state.title = payload.map(item => item.code)
      state.price = payload.map(item => item.price)
      state.img = payload.map(item => item.img)
      state.id = payload.map(item => item.id)
      state.bonus_price = payload.map(item => item.bonus_price)
    }
  },

  actions: {
    getBannerList({ commit }) {
      // axios.get('/banner') 如果这里直接用axios不用封装了baseUrl的实例则前面会自动生成页面地址再拼接http://localhost:8080/banner
      request.get('http://localhost:3000/data').then(data => {
        // 请求成功，还需将后台返回的数.据存放到 state 中
        let mobilebanners = data.mobilebanners

        commit('setBannerList', mobilebanners)
      })
    },
    getState({ commit }) {
      // axios.get('/banner') 如果这里直接用axios不用封装了baseUrl的实例则前面会自动生成页面地址再拼接http://localhost:8080/banner
      request.get('http://localhost:3000/data').then(data => {
        // 请求成功，还需将后台返回的数.据存放到 state 中
        console.log(data)
        let products = data.products
        commit('setState', products)
      })
    }
  }
}
