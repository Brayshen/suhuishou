  <template>
  <div class="page-my">
    <van-nav-bar
      title="我的"
      :left-arrow="false"
      :border="false"
      size="18px"
      @click-right="onClickRight"
    >
      <van-icon name="shopping-cart" slot="right" color="#000000" size="18px" />
    </van-nav-bar>
    <div class="page-my-main">
      <div class="top">
        <div class="top-img">
          <img src="../../assets/tx.png" />
        </div>
        <div class="top-content">
          <p class="login-now">立即登录</p>
          <p class="top-content-bot">注册领￥799新人礼包</p>
        </div>
        <div class="top-rigth">
          <router-link to="#">
            <i class="iconfont iconset"></i>设置
            <i class="iconfont iconqj"></i>
          </router-link>
        </div>
      </div>
      <div class="component">
        <div class="my-account">
          <a href="#">
            <i class="iconfont iconqb"></i>
            <span>我的钱包</span>
            <span>0.00</span>
          </a>
          <a href="#">
            <i class="iconfont iconyhj"></i>
            <span>卷包</span>
            <span>0张可用</span>
          </a>
          <a href="#">
            <i class="iconfont iconyhk"></i>
            <span>银行卡</span>
            <span>未绑定</span>
          </a>
        </div>
        <div class="my-reservation">
          <p>我的预约</p>
          <a href="#">
            查看更多
            <i class="iconfont iconqj"></i>
          </a>
        </div>
        <div class="my-reservation">
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
        <div class="nav-item">
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
        <div class="nav-item">
          <a href="#">
            <img
              src="https://sr.aihuishou.com/sos/image/636753114564194110368733657.png?x-oss-process=image/quality,q_80"
            />
            <span>兑换中心</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my',
  methods: {
    onClickRight () {
      console.log(1)
    }
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
}
</style>
