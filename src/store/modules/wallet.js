import request from '../../utils/request'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state: {},
  actions: {
    setMoney({ conmit }, payload) {
      request
        .post(
          'http://localhost:9090/api/set-money',
          //payload
          {
            username: payload.username,
            money: payload.money
          }
        )
        .then(res => {
          console.log(res)
          if (res.code === 0) {
            Toast.success(res.msg)
            payload.close(res.data.newMoney)
          }
        })
    }
  }
}
