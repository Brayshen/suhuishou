// 需要调用 ajax 。那么引入封装好的 网络请求工具模块
import request from '../../utils/request'
import { log } from 'util'

export default {
  namespaced: true,

  state: {
    bannerList: [], // 热门影片轮播图数据
    products: [],
    goodlist: [],
    totalPage: 1
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
      state.products = payload
    },
    setGoodList(state, payload) {
      state.goodlist = state.goodlist.concat(payload.goodlist)
      state.totalPage = payload.tPage
    }
  },

  actions: {
    getBannerList({ commit }) {
      // axios.get('/banner') 如果这里直接用axios不用封装了baseUrl的实例则前面会自动生成页面地current_page=2址再拼接http://localhost:8080/banner
      request.get('http://localhost:3000/data?current_page=0').then(data => {
        // 请求成功，还需将后台返回的数.据存放到 state 中
        // console.log(data)

        let mobilebanners = data[0].mobilebanners
        commit('setBannerList', mobilebanners)
      })
    },
    getState({ commit }) {
      // axios.get('/banner') 如果这里直接用axios不用封装了baseUrl的实例则前面会自动生成页面地址再拼接http://localhost:8080/banner
      request.get('http://localhost:3000/data').then(data => {
        // 请求成功，还需将后台返回的数.据存放到 state 中
        // console.log(data)
        let products = data.products
        commit('setState', products)
      })
    },
    getGoodList({ commit }, payload) {
      // axios.get('/banner') 如果这里直接用axios不用封装了baseUrl的实例则前面会自动生成页面地址再拼接http://localhost:8080/banner
      setTimeout(() => {
        request
          .get('http://localhost:3000/data', {
            params: {
              current_page: payload.pageNum
            }
          })
          .then(data => {
            // console.log(data)
            // 请求成功，还需将后台返回的数.据存放到 state 中
            let goodlist = data[0].data
            let tPage = data[0].last_page
            // console.log(tPage)
            commit({
              type: 'setGoodList',
              goodlist: goodlist,
              tPage: tPage
              // totalPage = tPage
            })

            // 调用哪个回调函数即可
            payload.callback()
          })
      }, 1500)
    }
  }
}
