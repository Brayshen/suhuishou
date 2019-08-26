<template>
  <div class="page-wallet">
    <van-nav-bar title="我的钱包" left-arrow :border="false" @click-left="$router.replace('/my')" />
    <div class="total">
      <h2>当前账户总额</h2>
      <p>{{userInfo.money}}</p>
    </div>
    <ul class="operate-list">
      <li @click="not">
        <a href="#" class="available-balance-detail">可以余额交易明细</a>
      </li>
      <li @click="not">
        <a href="#" class="normal-question">常见问题</a>
      </li>
    </ul>
    <div class="withdraw-wrap">
      <button class="withdraw-cash" type="button" @click="isOpen = true">充值</button>
    </div>
    <div class="mask-container" v-if="isOpen">
      <div class="inner-container">
        <div class="modal-content">
          <h2>充值金额</h2>
          <van-field v-model="value" placeholder="请输入充值金额" />
          <div class="take-button" @click="czMoney">确认充值</div>
        </div>
        <div class="close-icon" @click=" isOpen = false, value = '' "></div>
      </div>
    </div>
  </div>
</template>

<script>
function resetZoom () {
  var designWidth = 375 // 设计稿宽度，需根据设计稿进行调整
  var deviceWidth = document.documentElement.clientWidth // 设备宽度
  var scale = deviceWidth / designWidth
  document.body.style.zoom = scale
}
resetZoom()
window.onresize = function () {
  resetZoom()
}
import { Toast } from 'vant'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'wallet',
  data () {
    return {
      show: true,
      value: '',
      isOpen: false
    }
  },
  computed: {
    ...mapState('login', ['userInfo'])

  },
  methods: {
    ...mapMutations('login', ['xzMoney']),
    ...mapActions('wallet', ['setMoney']),

    czMoney () {
      let money = this.value
      if (!money) {
        Toast('请输入金额')
        return
      }
      if (isNaN(money)) {
        Toast('输入有误,请输入正确金额')
        this.value = ''
        return
      }
      if (money <= 0) {
        Toast('充值金额必须大于0')
        this.value = ''
        return
      }
      this.isOpen = false
      this.value = ''
      let username = this.userInfo.username
      this.setMoney({
        username,
        money,
        close: newMoney => {
          let obj = JSON.parse(window.localStorage.getItem('user'))
          obj.money = newMoney
          window.localStorage.setItem('user', JSON.stringify(obj))
          this.xzMoney({ newMoney })
        }
      })
    },
    not () {
      Toast('暂不支持')
    }
  }
}
</script>

<style lang="scss">
.page-wallet {
  background: #f9faff;
  height: 100%;
  .van-nav-bar {
    background: #fcdb00;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
    .van-icon {
      color: #111;
      font-size: 20px;
    }
  }
  .total {
    padding: 10px 0;
    background-color: #fcdb00;
    text-align: center;
    width: 100%;
    overflow: hidden;
    h2 {
      font-size: 18px;
      color: #333;
      line-height: 24px;
      margin: 30px auto 5px;
      font-weight: 400;
    }
    p {
      color: #333;
      font-size: 48px;
      margin-top: 15px;
      padding-bottom: 35px;
      word-wrap: break-word;
    }
  }
  .operate-list {
    margin-top: 10px;
    background-color: #fff;
    li {
      font-size: 16px;
      color: #333;
      line-height: 54px;
      text-indent: 45px;
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid #eee;
      a {
        color: #000;
        display: block;
        &.available-balance-detail::before {
          content: '';
          height: 20px;
          width: 20px;
          display: block;
          top: 17px;
          left: 15px;
          position: absolute;
          background: url('https://sr.aihuishou.com/c2b/zy-fe/neom/5JtbpADb/static/media/icons-wallet.beada169.png') -135px -531px
            no-repeat;
          background-size: 375px 667px;
        }

        &::after {
          content: '';
          width: 7px;
          height: 12px;
          display: block;
          top: 21px;
          right: 15px;
          position: absolute;
          background: url('https://sr.aihuishou.com/c2b/zy-fe/neom/5JtbpADb/static/media/icons-wallet.beada169.png') -115px -161px
            no-repeat;
          background-size: 375px 667px;
        }
        &.normal-question::before {
          content: '';
          height: 20px;
          width: 20px;
          display: block;
          top: 17px;
          left: 15px;
          position: absolute;
          background: url('https://sr.aihuishou.com/c2b/zy-fe/neom/5JtbpADb/static/media/icons-wallet.beada169.png') -103px -531px
            no-repeat;
          background-size: 375px 667px;
        }
      }
    }
  }
  .withdraw-wrap {
    width: 100%;
    max-width: 750px;
    padding: 15px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    box-sizing: border-box;
    .withdraw-cash {
      font-size: 18px;
      color: #333;
      width: 100%;
      height: 100%;
      line-height: 42px;
      border-radius: 5px;
      border-color: #fcdb00;
      background-color: #fcdb00;
      border: 1px solid transparent;
      text-align: center;
    }
  }
  .mask-container {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 101;
    .inner-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
    }
    .modal-content {
      background-color: #fff;
      border-radius: 0 0 4px 4px;
      padding-bottom: 25px;
      overflow: hidden;
      h2 {
        font-size: 20px;
        color: #000;
        text-align: center;
        margin: 20px 0;
      }
      .van-field__control {
        font-size: 18px;
        text-align: center;
      }
      .take-button {
        width: 230px;
        height: 35px;
        background: #fcdb00;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #111;
        font-weight: 500;
        margin: 37px auto 0;
      }
    }
    .close-icon {
      width: 28px;
      height: 28px;
      background-image: url('../../assets/close.png');
      background-size: cover;
      background-repeat: no-repeat;
      margin: 23px auto 0;
    }
  }
}
</style>
