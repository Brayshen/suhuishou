<template>
  <div class="page-maishuoji">
<<<<<<< HEAD
    <h4>卖手机</h4>
    <router-link to="city">城市选择</router-link>
    <br />
    <router-link to="searchlist">产品页面搜索</router-link>
=======
    <div class="jh-header-wrap">
      <div class="left">
        <router-link to="city">深圳</router-link>
      </div>
      <div class="center-search">
        <a href>
          <span>搜索你要的型号</span>
        </a>
      </div>
      <div class="right">
        <a href>
          <i class="iconfont iconjiu"></i>
          <span>企业回收</span>
        </a>
      </div>
    </div>

    <!-- 轮播图 -->
    <Banner />

    <!-- welcome -->
    <div class="welcome-wrap">
      <div class="jh-welcome">
        <div class="wel-left">
          今天已有
          <span>2</span>
          <span>4</span>
          <span>8</span>
          <span>8</span>
          回收
        </div>
        <div class="wel-right">
          hi~你是第
          <span>678989</span>位基友
        </div>
      </div>
    </div>

    <!-- 主题内容 -->
    <div class="jh-container">
      <div class="title">
        <div class="left">
          <span></span>
        </div>
        <div class="right">
          <span>全部型号</span>
        </div>
      </div>
      <div class="wrap">
        <div class="item">
          <div class="img" style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/bijiben.png) 0% 0% / 100% no-repeat"></div>
          <span>笔记本</span>
        </div>
        <div class="item">
          <div class="img" style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/pad.png) 0% 0% / 100% no-repeat"></div>
          <span>平板</span>
        </div>
        <div class="item">
          <div class="imgBig" style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/shouji.png) 0% 0% / 100% no-repeat"></div>
          <span>手机</span>
        </div>
        <div class="item">
          <div class="img" style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/shuma.png) 0% 0% / 100% no-repeat"></div>
          <span>数码</span>
        </div>
        <div class="item">
          <div class="img" style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/shoubiao.png) 0% 0% / 100% no-repeat"></div>
          <span>手表</span>
        </div>
        
      </div>
      <button class="guess">估价下单</button>
    </div>

    <!--  -->
>>>>>>> 9a4a7a7064fee7d3e90cf3ad566a0c3b9130688b
  </div>
</template>

<script>
import Banner from "../../components/Banner";

export default {
  name: "Home",

  components: {
    Banner
  }
};
</script>

<style lang="scss">
.jh-header-wrap {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;

  .left {
    display: flex;
    width: 58px;

    a {
      display: inline-block;
      line-height: 44px;
      height: 44px;
      width: 58px;
      font-size: 14px;
      color: #000;
      padding-right: 10px;
      text-align: center;
    }
  }
  .center-search {
    margin: 6px 2px 2px;

    a {
      display: block;
      width: 262px;
      height: 32px;
      line-height: 32px;
      background: #fff;
      border-radius: 16px;
      position: relative;
      span {
        display: inline-block;
        font-size: 14px;
        border-left: 1px solid #999;
        height: 16px;
        line-height: 16px;
        padding-left: 9px;
        margin-left: 35px;
        color: #000;
        &::before {
          content: "\e606";
          display: inline-block;
          font-family: iconfont !important;
          font-size: 38px;
          font-style: normal;
          color: #666;
          position: absolute;
          right: 6px;
          top: 6px;
        }
        &::after {
          content: "";
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAMAAADGxShVAAAAllBMVEUAAADoLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi7oLi68+hmDAAAAMXRSTlMAC+78G/JeA/jeD+jl2a2dcFgUB9W5sKOYSPWTjkxCMCO1h31nUT4oGMW/qHk4NsvKqDaTYQAAAbpJREFUOMtt0+m6ojAMBuCv7JuigLgr7npcZnL/NzcJdUrl+P7wKRiahgRYktNqEvtONXyc8dU2d8gYPBL0JTPSIscnkR57EZuUxM/oVSjVnJYZX+wULIEO6I5Qjjhr7PUjRrAVO05W4O1FYo6eKZ8aWthWstHPep7XhNAmRLle5cTGui7fdd0qtJ7dyuJKLLcOtTSpxkR/wOSFOGZrdoExIHpxeZFJg4RY/PkypsC6vWvl2aOj+LrAstsENTEPltXktsVfIqpns9mKn3F5XYVK6/q4IK165/EdLQpMiEvaGhiSrQAUkyM6rshClAuy1MDSZ9mYQz2RyIsSvq8Hhv+JSLjo1G0+pcqBTFaJI/VDQsmT8qIhdgeO9+mOpAWX3fAAsSa2eneE5uZe3naxNP158sLReUTFy0BKlV8kC65LOnEmNoU4yVEU8NTDpRquS/Hi1uXJ/o/J4HMoR4fD4aEbZEbjLPPyxbzNaOZ4iF+2xCIFLZZp7HlGZuiF5/M+CrZj/9NqUqIssJLUJsIofohr32+uIdQl0AH+CZ9Gi7ZnWeyQdvfQd91nZLjDDb4J5/tJlabxLQ/sHf4Be0RPWo3xejwAAAAASUVORK5CYII=)
            no-repeat;
          background-size: 100%;
          position: absolute;
          left: 10px;
          top: 8px;
        }
      }
    }
  }
  .right a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
    width: 49px;
    height: 44px;
    margin-top: 4px;
    i {
      font-size: 18px;
    }
    span {
      font-size: 12px;
    }
  }
}
.welcome-wrap {
  background: #fff;
  box-shadow: 0 0 3px #ccc;
  padding-bottom: 12px;
}
.jh-welcome {
  width: 360px;
  height: 60px;
  margin: -30px auto 0;
  position: relative;
  background: #fff;
  border-radius: 6px;
  z-index: 9;
  box-shadow: 0 0 1px #ccc;
  display: flex;
  color: #666;

  .wel-left {
    width: 50%;
    height: 43px;
    box-sizing: border-box;
    padding-top: 20px;
    font-size: 14px;
    text-align: center;
    span {
      display: inline-block;
      width: 16px;
      height: 24px;
      line-height: 24px;
      background: linear-gradient(180deg, #53b5fb, #1291e9);
      margin-right: 2px;
      color: #fff;
    }
  }
  .wel-right {
    width: 50%;
    height: 43px;
    line-height: 26px;
    box-sizing: border-box;
    padding-top: 20px;
    font-size: 14px;
    text-align: center;
  }
}

.jh-container {
  width: 360px;
  margin: 10px auto 0;
  background: #fff;
  padding: 20px 14px;
  box-shadow: 3px 5px 3px 0 #d5d5d5;
  border-radius: 3px;
  height: 218px;
  box-sizing: border-box;

  .title {
    display: flex;
    justify-content: space-between;

  .left span:after{
    content: "";
    display: inline-block;
    width: 52px;
    height: 24px;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100%;
    margin: 0 0 0 0;
  }
   .right span{
    font-size: 14px;
    color: #666;
  }
  }
  .wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

  .item{
    display: flex;
    flex-direction: column;
    text-align: center;

    .img{
      width: 40px;
      height: 40px;
      margin-bottom: 10px;
    }
    .imgBig{
      width: 58px;
      height: 58px;
      margin-bottom: 10px;
    }
  }
}
.guess {
    width: 215px;
    height: 36px;
    background: #ff4447;
    box-shadow: -1px 1px 1px 0 rgba(255,71,68,.35);
    border-radius: 15px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 700;
    color: #fff;
    border: 0;
    margin: 20px auto 0;
    display: block;
}
}
</style>
