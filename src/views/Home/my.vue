<template>
  <div class="page-my">
    <van-nav-bar title="我的" :left-arrow="false" :border="false" size="18px" @click-right="not">
      <van-icon name="shopping-cart" slot="right" color="#000000" size="18px" />
    </van-nav-bar>
    <div class="page-my-main">
      <div class="top">
        <div class="top-img">
          <img v-if="userInfo" :src="userInfo.log" />
          <img v-else src="../../assets/tx.png" />
        </div>
        <div class="top-content">
          <span class="mobile" v-if="userInfo">{{userInfo.username}}</span>
          <template v-else>
            <router-link to="/login" tag="p" class="login-now">立即登录</router-link>
            <p class="top-content-bot">注册领￥799新人礼包</p>
          </template>
        </div>

        <div class="top-rigth">
          <router-link to="/myset">
            <i class="iconfont iconset"></i>设置
            <i class="iconfont iconqj"></i>
          </router-link>
        </div>
      </div>
      <div class="component">
        <div class="my-account">
          <a href="#/wallet">
            <i class="iconfont iconqb"></i>
            <span>我的钱包</span>
            <span>{{userInfo ? userInfo.money : '0.00'}}</span>
          </a>
          <a href="#/card">
            <i class="iconfont iconyhj"></i>
            <span>卷包</span>
            <span>{{userInfo ? (userInfo.getmoney == 0 ? 0 : 14) : 0}}张可用</span>
          </a>
          <a href="#/bankcard">
            <i class="iconfont iconyhk"></i>
            <span>银行卡</span>
            <span>未绑定</span>
          </a>
        </div>
        <div class="my-reservation" @click="not">
          <p>我的预约</p>
          <a href="#">
            查看更多
            <i class="iconfont iconqj"></i>
          </a>
        </div>
        <div class="my-reservation" @click="not">
          <p>我的订单</p>
          <a href="#">
            查看更多
            <i class="iconfont iconqj"></i>
          </a>
        </div>
      </div>
      <div class="single-image">
        <img
          src="https://sr.aihuishou.com/sos/image/637014786030915820239916785.png?x-oss-process=image/quality,q_80&size=750x200"
          alt
        />
      </div>
      <div class="nav-box">
        <p class="nav-title">其他服务</p>
        <div class="nav-item" @click="not">
          <a href="#">
            <img
              src="https://sr.aihuishou.com/sos/image/6367531157664817602114108197.png?x-oss-process=image/quality,q_80"
              alt
            />
            <span>回收指南</span>
          </a>
          <a href="#">
            <img
              src="https://sr.aihuishou.com/sos/image/636874828441982300519058732.png?x-oss-process=image/quality,q_80&size=174x110"
              alt
            />
            <span>特权专区</span>
          </a>
          <a href="#">
            <img
              src="https://sr.aihuishou.com/sos/image/636882696222504540870181993.png?x-oss-process=image/quality,q_80&size=174x110"
              alt
            />
            <span>新人福利</span>
          </a>
        </div>
      </div>
      <div class="nav-box">
        <p class="nav-title">第三方服务</p>
        <div class="nav-item" @click="not">
          <a href="#">
            <img
              src="https://sr.aihuishou.com/sos/image/636753114564194110368733657.png?x-oss-process=image/quality,q_80"
            />
            <span>兑换中心</span>
          </a>
        </div>
      </div>
    </div>
    <div class="mask-container" v-if="isClose && userInfo.getmoney == 0">
      <div class="inner-container">
        <div class="modal-content">
          <img src="https://sr.aihuishou.com/appgateway/homenav/login_coupon@3x.png" />
          <div class="take-button" @click="getMoney">一键领取</div>
          <div class="tips">领取后7日有效</div>
        </div>
        <div class="close-icon" @click="close"></div>
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
import request from '../../utils/request'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'my',
  data () {
    return {
      //user: '',
      //isClose: this.userInfo
      //userInfo: null
      // isClose: false
      num: 0
    }
  },
  computed: {
    ...mapState('login', ['userInfo', 'isClose', 'token'])
  },
  methods: {
    ...mapMutations('login', ['close', 'stemoney']),
    not () {
      Toast('暂不支持')
    },
    getMoney () {
      console.log(1)
      request.post('http://localhost:9090/api/get-money', {
        username: this.userInfo.username
      }).then((res) => {
        if (res.code === 0) {
          Toast.success('领取成功')
          console.log('领取成功')

          this.close()
          let obj = JSON.parse(window.localStorage.getItem('user'))
          obj.getmoney = 1
          window.localStorage.setItem('user', JSON.stringify(obj))
          this.stemoney()

        }
      })
    }
    // colse(){
    //   this.
    // }
  },
  created () {
    // console.log(1)
    // let userStr = window.localStorage.getItem('user')
    // userStr = userStr ? JSON.parse(userStr) : ''
    // this.user = userStr
    // this.isClose = userStr ? (userStr.getmoney == 0 ? true : false) : false
  }
}
</script>

<style lang="scss">
.page-my {
  display: flex;
  flex-direction: column;
  .page-my-main {
    flex: 1;
    overflow-y: auto;
  }
  .van-nav-bar {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  }
  .top {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 20px rgba(207, 213, 215, 0.3);
    padding-left: 14px;
    height: 83px;
  }
  .top-img {
    width: 48px;
    margin-right: 10px;
    img {
      width: 48px;
    }
  }
  .top-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 22px;
    .mobile {
      font-size: 18px;
      color: #111;
      font-weight: bold;
      margin-top: 18px;
    }
    .login-now {
      color: #111;
      font-size: 18px;
      font-weight: bold;
      line-height: 25px;
      height: 25px;
    }
    .top-content-bot {
      margin-top: 10px;
      font-size: 10px;
      color: #fff;
      background: rgb(247, 57, 57);
      width: 110px;
      padding: 3px;
      text-align: center;
    }
  }
  .top-rigth {
    width: 58px;
    height: 24px;
    a {
      display: flex;
      width: 100%;
      height: 100%;
      color: #111;
      font-size: 12px;
      background: #ffd629;
      border-radius: 12px 0 0 12px;
      justify-content: center;
      align-items: center;

      i {
        font-size: 14px;
      }
    }
  }
  .component {
    padding: 0 14px;
    background: rgb(250, 250, 250);
    overflow: hidden;

    .my-account {
      display: flex;
      height: 86px;

      a {
        height: 100%;
        width: 33.33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        position: relative;
        &::after {
          content: '';
          width: 1px;
          height: 35px;
          position: absolute;
          background-color: #e1e1e1;
          right: 0;
          top: 50%;
          margin-top: -15px;
        }
        i {
          font-size: 22px;
          color: #111;
        }
        span:nth-child(2) {
          color: #111;
          line-height: 28px;
        }
        span:nth-child(3) {
          color: #999;
          font-size: 12px;
        }
      }
      a:last-child {
        &::after {
          width: 0;
        }
      }
    }
    .my-reservation {
      background: #fff;
      margin-bottom: 10px;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      p {
        color: #111;
        font-size: 16px;
        font-weight: bold;
      }
      a {
        color: #333;
        font-size: 12px;
        i {
          font-size: 12px;
          color: #000;
        }
      }
    }
  }
  .single-image {
    height: 100px;
    img {
      width: 100%;
    }
  }
  .nav-box {
    padding: 15px;
    .nav-title {
      color: #111;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .nav-item {
    display: flex;
    margin-top: 8px;
    a {
      display: flex;
      flex-direction: column;
      width: 25%;
      align-items: center;
      img {
        width: 100%;
      }
      span {
        font-size: 14px;
        color: #666;
      }
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
      img {
        display: block;
        width: 100%;
      }
      .take-button {
        width: 230px;
        height: 35px;
        background: linear-gradient(90deg, #ffa401 0%, #f84d0d 100%);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #fff;
        font-weight: 500;
        margin: 37px auto 0;
      }
      .tips {
        margin: 10px auto 0;
        text-align: center;
        font-size: 12px;
        color: #666;
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
