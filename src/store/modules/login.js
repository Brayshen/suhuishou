import { Toast } from 'vant'
import request from '../../utils/request'
let userInfo = localStorage.getItem('user')
let token = localStorage.getItem('token')
export default {
  namespaced: true,
  state: {
    userInfo: userInfo ? JSON.parse(userInfo) : '',
    token: token || '',
    isClose: false
  },
  mutations: {
    login(state, payload) {
      state.userInfo = payload.userInfo
      state.token = payload.token
    },
    close(state) {
      state.isClose = false
    },
    open(state) {
      state.isClose = true
    },
    stemoney(state) {
      state.userInfo.getmoney = 1
    },
    xzMoney(state, payload) {
      state.userInfo.money = payload.newMoney
    },
    quit(state) {
      state.userInfo = ''
      state.token = ''
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },
    setname(state, payload) {
      state.userInfo.username = payload
    },
    setlog(state, payload) {
      state.userInfo.log = payload
    }
  },
  getters: {},
  actions: {
    //注册ajax调用方法
    registerApi(state, payload) {
      request.post('http://localhost:9090/api/sign-up', payload).then(res => {
        console.log(res)
        if (res.code === 0) {
          Toast.success(res.msg)
          payload.success()
        } else {
          Toast.fail(res.msg)
        }
      })
    },

    // 登录
    loginApi({ commit }, payload) {
      request.post('http://localhost:9090/api/sign-in', payload).then(res => {
        if (res.code === 0) {
          window.localStorage.setItem('user', JSON.stringify(res.data.userInfo))
          window.localStorage.setItem('token', res.data.token)
          commit('login', res.data)
          commit('open')
          Toast.success(res.msg)
          payload.success()
        } else {
          Toast.fail(res.msg)
        }
      })
    }
  }
}
