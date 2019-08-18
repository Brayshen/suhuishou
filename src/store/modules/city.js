import request from "../../utils/request";

export default {
  namespaced: true,

  state: {
    cities: [] // 存储全部的城市数据
  },

  getters: {},

  mutations: {
    setCities(state, payload) {
      state.cities = payload.cities;
    }
  },

  actions: {
    /**
     * 获取城市列表数据
     * @param {*} param0
     */
    getCities({ commit }) {
      request
        .get("/gateway?k=9634874", {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156584910960129542198"}',
            "X-Host": "mall.film-ticket.city.list"
          }
        })
        .then(res => {
          if (res.status === 0) {
            commit({
              type: "setCities",
              cities: res.data.cities
            });
          }
        });
    }
  }
};
