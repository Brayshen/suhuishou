import request from '../../utils/request'

export default {
  namespaced: true,
  state: {
    cities: [], // 存储全部的城市数据
    Bigcity: [
      { cityId: '1', name: '北京市' },
      { cityId: '2', name: '上海市' },
      { cityId: '3', name: '深圳市' },
      { cityId: '4', name: '广州市' },
      { cityId: '5', name: '武汉市' }
    ]
  },
  getters: {
    cityList(state) {
      let result = []
      state.cities.forEach(item => {
        // 1. 取出当前城市的拼音首字母的大写
        let py = item.pinyin.charAt(0).toUpperCase()
        // 2. 找出result中有没有某个项，他的py为这里的py的对象
        let index = result.findIndex(a => a.py === py)
        // 3. 判断
        if (index > -1) {
          // 找到了
          result[index].list.push(item)
        } else {
          // 没找到
          // 构建一个 包含 py 与 list 的对象 {py: 'B', list: [item]}
          let obj = {
            py,
            list: [item]
          }

          result.push(obj)
        }
      })

      return result.sort((a, b) => {
        // return a.py.charCodeAt() - b.py.charCodeAt()
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
    },
    //在getter里面定义了一个方法拿gettters 里面的数据,
    pys(state, getters) {
      // return getters.cityList.map(item => item.py)
      return getters.cityList.map(item => item.py)
    },
    Bigcity(state) {
      return state.Bigcity
    }
  },

  mutations: {
    setCities(state, payload) {
      state.cities = payload.cities
    }
  },

  actions: {
    /**
     * 获取城市列表数据
     * @param {*} param0
     */
    getCities({ commit }) {
      request
        .get('/gateway?k=9634874', {
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156584910960129542198"}',
            'X-Host': 'mall.film-ticket.city.list'
          }
        })
        .then(res => {
          if (res.status === 0) {
            console.log(res.data.cities)
            commit({
              type: 'setCities',
              cities: res.data.cities
            })
          }
        })
    }
  }
}
