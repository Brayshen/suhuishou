// 需要调用 ajax 。那么引入封装好的 网络请求工具模块
// import Vue from 'vue'
import request from '../../utils/request'
// import VueRouter from 'vue-router'
// import router from '../../router'
// Vue.use(VueRouter)

export default {
  namespaced: true,

  state: {
    bannerList: [], // 热门影片轮播图数据
    products: []
    // areaList: [],
    // searchResult: []
  },

  getters: {
    bannerListImgs(state) {
      return state.bannerList
    }
  },

  mutations: {
    setBannerList(state, payload) {
      state.bannerList = payload
    },
    setState(state, payload) {
      state.products = payload
      console.log(state.products)
    },
    setGoodList(state, payload) {
      state.goodlist = state.goodlist.concat(payload.goodlist)
      state.totalPage = payload.tPage
    }
  },

  actions: {
    getBannerList({ commit }, payload) {
      // axios.get('/banner') 如果这里直接用axios不用封装了baseUrl的实例则前面会自动生成页面地current_page=2址再拼接http://localhost:8080/banner

      let idNum = payload.params.id.substr(1)
      request
        .get('http://localhost:3000/data', {
          params: {
            id: idNum
          }
        })
        .then(data => {
          // 请求成功，还需将后台返回的数.据存放到 state 中
          console.log(data)
          let mobilebanners = data[0].gallery
          commit('setBannerList', mobilebanners)
        })
    },
    getState({ commit }, payload) {
      // axios.get('/banner') 如果这里直接用axios不用封装了baseUrl的实例则前面会自动生成页面地址再拼接http://localhost:8080/banner
      let idNum = payload.params.id.substr(1)
      request
        .get('http://localhost:3000/data', {
          params: {
            id: idNum
          }
        })
        .then(data => {
          // 请求成功，还需将后台返回的数.据存放到 state 中

          commit('setState', data)
        })
    }
  }
}