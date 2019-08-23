// 需要调用 ajax 。那么引入封装好的 网络请求工具模块
import request from '../../utils/request'

export default {
  namespaced: true,

  state: {
    bannerList: [], // 热门影片轮播图数据
    hotList: [], // 热门产品列表
    newsList: [], // 新闻资讯
    testList: [],
    endTime: ''
  },

  getters: {
    bannerListImgs (state) {
      return state.bannerList.map(item => item.adCode)
    }
  },

  mutations: {
    setBannerList (state, payload) {
      state.bannerList = payload
    },
    setHotList (state, payload) {
      state.hotList = payload
    },
    setNewsList (state, payload) {
      state.newsList = payload
    },
    setTestList (state, payload) {
      state.testList = payload
    },
    setendTime (state, payload) {
      state.endTime = payload
    }
  },

  actions: {
    getBannerList ({ commit }) {
      request.get('http://localhost:3000/date2').then(data => {
        console.log(data.activity.endTime)
        commit('setBannerList', data.banner)
        commit('setHotList', data.activity.products)
        commit('setNewsList', data.article)
        commit('setTestList', data.autoself)
        commit('setendTime', data.activity.endTime)
      })
    }
  }
}
