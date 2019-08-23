<template>
  <div class="card-list">
    <div class="ietm" v-for="i in num" :key="i">
      <div class="ietm-content" :style="{background:isImg}" @click="iscolse = true">
        <div class="left">
          <div>
            <p class="money">
              ￥
              <span>194</span>
            </p>
            <p class="if-money">满6500可用</p>
          </div>
          <img src="../../assets/xvx.png" alt />
        </div>
        <div class="centre">
          <p class="card-name">新人194元卷</p>
          <p class="card-time">有效日期截止:2019.08.28</p>
        </div>
        <div class="right">
          <img src="../../assets/rwm.png" />
        </div>
        <img src="../../assets/bot.png" class="bott" />
      </div>
      <div class="ietm-text">立即使用</div>
    </div>
    <div class="end">
      <a href="#">查看失效卷</a> |
      <a href="#">红包说明</a>
    </div>
    <div class="mask-container" v-if="iscolse">
      <div class="inner-container">
        <div class="modal-content">
          <p>优惠券二维码</p>
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=446853653,990487943&fm=26&gp=0.jpg"
          />
          <div class="tips">请向服务站工作人员出示二维码</div>
        </div>
        <div class="close-icon" @click="iscolse = false"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'card',
  data () {
    return {
      iscolse: false
    }
  },
  props: {
    isImg: String,
    num: Number
  }
}
</script>
<style lang="scss">
.card-list {
  .ietm {
    margin: 10px;
  }
  .ietm-content {
    display: flex;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    & > div {
      height: 60px;
    }
    .bott {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }
    .left {
      display: flex;
      //flex-direction: column;
      justify-content: space-between;
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      img {
        width: 2px;
        margin: 0 15px;
      }
      .money {
        font-size: 18px;
        color: #fff;
        span {
          font-size: 38px;
        }
      }
      .if-money {
        color: #fff;
        font-size: 14px;
      }
    }
    .centre {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;
      .card-name {
        font-size: 16px;
      }
      .card-time {
        font-size: 12px;
      }
    }
    .right {
      width: 20px;
      height: 20px;
      img {
        width: 100%;
      }
    }
  }
  .ietm-text {
    line-height: 20px;
    background: #fff;
    text-align: center;
    font-size: 14px;
    padding: 5px;
    color: rgb(181, 181, 181);
    border-bottom: 1px solid #eee;
    border-radius: 0 0 5px 5px;
  }
  .end {
    height: 40px;
    text-align: center;
    padding-top: 8px;
    color: rgb(74, 144, 226);
    a {
      font-size: 14px;
      color: rgb(74, 144, 226);
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
      width: 250px;
    }
    .modal-content {
      background-color: #fff;
      border-radius: 0 0 4px 4px;
      padding-bottom: 25px;
      overflow: hidden;
      p {
        text-align: center;
        margin: 10px 0;
      }
      img {
        display: block;
        width: 150px;
        height: 150px;
        margin: 0 auto;
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
        font-size: 14px;
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
