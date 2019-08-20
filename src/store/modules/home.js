// import axios from 'axios'

// export default {
//   namespaced: true,

//   state: {
//     bannerList: [] // 主页轮播图数据
//   },

//   getters: {
//     bannerListImgs (state) {
//       return state.bannerList.map(item => item.img)
//     }
//   },

//   mutations: {
//     setBannerList (state, payload) {
//       state.bannerList = payload
//     }
//   },
//   actions: {
//     getBannerList ({ commit }) {
//       axios.get('http://localhost:3000/banner').then(data => {
//         // console.log(data)
//         // 请求成功 将后台返回的数据 存放在state数据中
//         commit('setBannerList', data)
//       })
//     }
//   }
// }
