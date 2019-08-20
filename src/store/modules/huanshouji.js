// 需要调用 ajax 。那么引入封装好的 网络请求工具模块
import request from '../../utils/request'

export default {
  namespaced: true,

  state: {
    bannerList: [] // 热门影片轮播图数据
  },

  getters: {
    bannerListImgs(state) {
      return state.bannerList.map(item => item.code)
    }
  },

  mutations: {
    setBannerList(state, payload) {
      state.bannerList = payload
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
    getGoodList({ commit }) {
      // axios.get('/banner') 如果这里直接用axios不用封装了baseUrl的实例则前面会自动生成页面地址再拼接http://localhost:8080/banner
      request.get('http://localhost:3000/data').then(data => {
        // 请求成功，还需将后台返回的数.据存放到 state 中
        console.log(data)
      })
    }
  }
}
