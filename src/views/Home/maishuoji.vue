<template>
  <div class="page-maishuoji">
    <div class="jh-header-wrap" :class="{'bgcolor':isChange}">
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
          <i class="iconfont icontext"></i>
          <span>企业回收</span>
        </a>
      </div>
    </div>

    <!-- 轮播图 -->
    <Banner :imgs='bannerListImgs' :pagination=false />

    <!-- welcome -->
    <div ref="myWel" class="welcome-wrap">
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
          <span>678989</span>位机友
        </div>
      </div>
    </div>

    <!-- 主题内容 -->
    <div class="jh-container">
      <div class="title">
        <div class="left">
          <span></span>
          <i class="iconfont iconwenhao"></i>
        </div>
        <div class="right">
          <span>全部型号</span>
        </div>
      </div>
      <div class="wrap">
        <div class="item">
          <div
            class="img"
            style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/bijiben.png) 0% 0% / 100% no-repeat"
          ></div>
          <span>笔记本</span>
        </div>
        <div class="item">
          <div
            class="img"
            style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/pad.png) 0% 0% / 100% no-repeat"
          ></div>
          <span>平板</span>
        </div>
        <div class="item">
          <div
            class="imgBig"
            style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/shouji.png) 0% 0% / 100% no-repeat"
          ></div>
          <span>手机</span>
        </div>
        <div class="item">
          <div
            class="img"
            style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/shuma.png) 0% 0% / 100% no-repeat"
          ></div>
          <span>数码</span>
        </div>
        <div class="item">
          <div
            class="img"
            style="background: url(https://image.suhuishou.com/assets/image/navigate/20190312/shoubiao.png) 0% 0% / 100% no-repeat"
          ></div>
          <span>手表</span>
        </div>
      </div>
      <button class="guess">估价下单</button>
    </div>

    <!-- 热门回收 -->
    <div class="jh-hot-wrap">
      <div class="title">
        <span class="hotBg"></span>
        <countDown :actEndTime='endTime' />
      </div>
      <BannerTxt :txt="hotList" :pagination='false' />
    </div>

    <!-- 推荐 -->
    <div class="jh-recom">
      <div class="title">
        <span></span>
      </div>
      <div class="container">
        <div class="left">
          <a href>
            <h2>以旧换新</h2>
            <p>官方授权 正品保障</p>
            <span>立即参与</span>
          </a>
        </div>
        <div class="right">
          <a href class="top">
            <h2>信用回收</h2>
            <p>速回收合作芝麻信用</p>
            <p>先得钱后回收</p>
          </a>
          <a href class="buttom">
            <h2>二手良品</h2>
            <p>每日上新/优惠/秒杀</p>
          </a>
        </div>
      </div>
    </div>

    <!-- 看点 -->
    <div class="jh-news">
      <div class="title">
        <span></span>
      </div>
      <BannerNews :news="newsList" :pagination=true />
    </div>

    <!-- 合作品牌 -->
    <div class="jh-partner">
      <div class="title">合作品牌</div>
      <div class="item">
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
      </div>
    </div>

    <!-- 自助服务 -->
    <div class="jh-autoself">
      <div class="title">自助服务</div>
      <autoself :test="testList" />
    </div>

    <!-- copyright -->
    <div class="jh-copyright">
      <p>深圳协腾网络电子科技有限公司</p>
      <p>粤ICP备16015090号</p>
    </div>
  </div>
</template>

<script>
import Banner from '../../components/BBanner'
import BannerTxt from '../../components/BannerText'
import BannerNews from '../../components/BannerNews'
import autoself from '../../components/autoself'
import countDown from '../../components/countdown'

import { mapActions, mapGetters, mapState } from 'vuex'


function resetZoom() {
  var designWidth = 414 //设计稿宽度，需根据设计稿进行调整
  var deviceWidth = document.documentElement.clientWidth //设备宽度
  var scale = deviceWidth / designWidth
  document.body.style.zoom = scale
}
resetZoom()
window.onresize = function() {
  resetZoom()
}
export default {
  name: 'msj',
  data () {
    return {
      isChange : false, // 头部样式背景变色
    }
  },
  components: {
    Banner,
    BannerTxt,
    BannerNews,
    autoself,
    countDown
  },
  computed: {
    ...mapGetters('index', ['bannerListImgs']),
    ...mapState('index', ['hotList', 'newsList','testList','endTime'])
  },
  methods: {
    ...mapActions('index', ['getBannerList','getHotList']),

    header () {
       let welHeight = this.$refs['myWel'].offsetTop
    this.$el.addEventListener('scroll', () => {
      if (this.$el.scrollTop >= welHeight) {
        this.isChange = true
      } else {
        this.isChange = false
      }
    })
    },
　　
  },
  created() {
    this.getBannerList()
  },

  mounted () {
   this.header()
  },
}
</script>

<style lang="scss">
 .bgcolor{
  background: #ff4747;
}
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
      color: #fff;
      margin-left: 6px;
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
          content: '\e610';
          display: inline-block;
          font-family: iconfont !important;
          font-size: 27px;
          font-style: normal;
          color: #666;
          position: absolute;
          right: 6px;
          top: 8px;
        }
        &::after {
          content: '';
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
    color: #fff;
    width: 49px;
    height: 44px;
    margin-top: 4px;
    i {
      font-size: 22px;
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

    .left {
      position: relative;
      span:after {
      content: '';
      display: inline-block;
      width: 52px;
      height: 24px;
      background: url(data:image/png;base64,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)
        no-repeat;
      background-size: 100%;
      margin: 0 0 0 0;
    }
    i{
        position: absolute;
        left: 55px;
        top:-10px;
      }
  }
    .right span {
      font-size: 14px;
      color: #666;

      &::before{
          content: "\e604";
          display: inline-block;
          font-family: iconfont!important;
          font-size: 15px;
          font-style: normal;
          margin: 0 4px 0 0;
      }
    }
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    .item {
      display: flex;
      flex-direction: column;
      text-align: center;

      .img {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
      }
      .imgBig {
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
    box-shadow: -1px 1px 1px 0 rgba(255, 71, 68, 0.35);
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
.jh-hot-wrap {
  width: 360px;
  height: 210px;
  margin: 10px auto 0;
  background: #fff;
  padding: 20px 12px 0;
  box-sizing: border-box;
  position: relative;

  .title .hotBg:before {
    display: inline-block;
    content: '';
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAAkCAMAAABYKOOTAAAAw1BMVEUAAABoXGBoXGBqXF9oXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBvXV1oXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGBoXGD5eBL+eRDudhn+eRD+eRD6eBKzajjvdhhoXGD+eRDRWf9kAAAAP3RSTlMA+QsHw+7h7JFyXiUdEDnN9ehJ01e5LsYVrykZ3IVBbE6AZL5GqaI914ryeWc1jlq0UpUhnZnj7aVYzGxJjT0Kwzr9AAAG7UlEQVRYw82Y5xqaMBSGE6IgS5QlspWtIs7ult7/VfUkqMVql09/9PsjxJjzclaC6EFESVN97KEnIu/ffUD/XsRTuGfj48MgOcUqAqnSrDT4rYMe9eHr16/v/xWKF+0GgzylFqNkvpQfWWOtbfGG8TrrSdu2uYoe9RGg3hL0C3EcIQSRe3HwEzZ+J+W8ats3GxiVc4zL5Ow8g2qb7gko1CR45lD1K+gj4sbRsq8ovq5nr0fBxnbXVdBTFTRyvai2on0PdQCoMoarYgbGcfaQMSkd17uHjWAyv0HP9A6gPiAvEKZ9CdYYdZJ8vEr2MT+5k5ClGx5jzUR9HUfDth1Q0L0Pxo2aPEANYJzGl3AsfEbD/N5zlyPL7vHL16/vVKSc2ntpIeq0FOCmMXF7r0EcAYAv9VaCVRiUCwPiFBx1uE8413btiIYvsh21kCIL1pw1tm7uzVi9BXiTzedn990n+ostntzEjN48xbd4sI/9odDXdJ5uwK5hfl/pFCLv6invBItoe8JdRD1mnuZZNhNaILFMd+T71M4ujixDM3L5lsEZjE4746qZ5RedMvwAFbtisOhrbbqRwKBuK02W36H0GThq5MVSpyUNWAUQV20Lq7s4FRW1lrg3qC2GW/ly43lOJ9Ue/gg109GDiNiDoiu9KZByhYp4GlqXn7JMHQ4zmBQIVyTcVnaOGeMhpLWB5989NcIttuTHbvMU6hoKeqFy4Ns+1Aig+PENiuQTKD1d/J6BMGkxveVrKSpxlVEza06Ej2HlvQYVi0zSsf789uvb97+ActF4gNtpBOV/VUL7RV0UhWjAneTAozkmT6FQDB/CWv0dlPIUKp9SvUmK5i3tt7+CYk5J6pD3Syqf53N0kUtzKVjsVU+WYNJqg3QfIr/kXoO6ZOZUX36l+hWUnMDCB0fd63uzkcxYj2tWTEc3XPgtMLQnd7OjHcHQmaf8mLwGtYPBoW/sCuk3UEltguVy70CeQNFeu/64WRxoR2A62Dn7zGXmKT9Fr0HNoegt0dSV30KNxTeQ5q6dIg6u2rKbI5YTjC/VN1yPrQ7OQ3uetv7XoYZbBSHyB1B8W0bhRkfqeXLbG3Se8bDq27runF35jUN7v6ZAQZMXoSoHBv4IKg8XVoPUDJqQ1YVPtTDGgi9Q/8iI7LWWKosXFKpuAqlWyGue8v4MaorFwhpukDPDLG+YxN28igLKEjgIukbXsqIFDd9yjvnd2nsFSljQym1+m+gRnqVLHq+RDVOGCwcxybLDEWBhUDJsjlSlGPlQ0lkJGTs/vgK1yuKxrf7UU/YFyg53Zp3j9uzo1Kx0LXfCqZ5Em2elqmsBKHYlbNopPYuu4PdC4LwChYd+OXvWEgjdVad7zu22GU7migHQhdRT1q2y0sxKDOqghUzd087q9BQ5ct52eiNyL/UpkPCseRLYkGHWZrwVLoc8O8Pw6BxswufbthZqbSdxnNF0iiGkKiKx0Y36Jnm1o/vpIxTRu6w9h9UVilvTokrVrNzcdhCy7vIImwpc3Q7C3LKD3Sl/3xIWlrXbWbuDnT7sfd6564qj4gaF9BKsJ4re2ARdVcwNwyi10xHJZ23hqM7RI2z8MDD8gfRCn/JkJmhz7+GU8KkPpZwmXVLU36GUjI6B/Z5UO03DsQuWCedwxyiYB/TGUVW50OUXOvqDuCsUDQDMEYy16myHVyiy9GmkIqd/JoqjTUiQp2/Wkkqk4Qr7JnKipBxU7kvbDPlRPSikJFiL2IvDDUqtVi1oJfao4oQvBxHaJP5q7iJToC0LHTNgn+buXx/yBnF92s37ysQ66lWfFNVgvAfFRf6l0E/2zQnVhMYYsRoIUTGATJwfiUjNTUTyayhVeIAy4zf4Tqtd/20G0fNxH8oRS9x2WlniBcuktQ/2GuDlJaQcaHNbInnOWnv8cyjiprpIHT8r7qAa3N5rFvegQH0op6h4dhiYsQ4wnUepCl/Sg8EwQCTUAGbNkSW1k3PIZE6dux3U9hGKEzXjzZP3vjDR7jQbFZHwHCqp94lAmRpPn+EOK/cgeDRMsxQhG6BWBwUVdEArkFfRWZMFYQBnatxFfdEIM52vxbykGRA7RXinwvWoQ8vm8b+EwXiNaY8yIaRFNmUdFzpoatBYBirEdtCy3cc12FcEhQYw8QuuCx+cBZMfcupyJPQlcoX62XufpPn8bv8EqgbnCqeQLWCvwaAfwbU+soTWYAvlK17Lx+h41ma7SueQsp1qI6kDIXF12G6cH7I8mEyn/mx963r14ryN3CdQrrSU9vdfeKKlaSPZPVuBcp1mzobd9kfsrbZlyzYjMR57SI0bnX3Dpds9+qWK8yIQ4TFfkWrrul5zyLV7v9er9Jqwssyh/0nfADNkip77QqtxAAAAAElFTkSuQmCC)
      no-repeat;
    background-size: 100%;
    width: 74px;
    height: 18px;
    position: absolute;
    left: 10px;
  }
  .hotTime {
    margin-left: 84px;
    color: #666;
    font-size: 14px;

    .time {
      display: inline-block;
      background: #1b1b1b;
      color: #fff;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      margin: 0 6px;
      border-radius: 2px;
      font-size: 14px;
    }
  }
  .info-wrap {
    margin: 15px 0 0;
    display: flex;

    .info {
      width: 94px;
      img {
        width: 80px;
        height: 80px;
      }
      p {
        margin: 5px 0;
        font-family: MicrosoftYaHei-Bold;
        height: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 700;
        color: #333;
        font-size: 12px;
      }
      .money {
        font-size: 12px;
        span {
          color: #ff4747;
        }
      }
    }
    .way i{
        position: absolute;
        right: 10px;
        top:10px ;
    }
    .way {
      width: 222px;
      margin: 0 0 0 9px;
      box-shadow: 0 0 2px #ccc;
      border-radius: 3px;
      padding: 0 0 10px 8px;
      position: relative;

      .item {
        width: 63px;
        height: 125px;
        display: inline-block;
        text-align: center;
        position: relative;
        margin-right: 10px;

        &:before {
          content: '';
          display: inline-block;
          width: 15px;
          height: 12px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAATBAMAAAB1gKBPAAAAMFBMVEUAAAD/jFH/jFH/jFH/jFH/jFH/jFH/jFH/jFH/jFH/jFH/jFH/jFH/jFH/jFH/jFEao/2rAAAAD3RSTlMAd+67ZkQiEZkzqlXdiMwQA7DjAAAA2klEQVQY0yWNPUoDYRRFj3+JcUAyYGcxdmI1ggvQrCA2prAarOwcBHsr2wTtbHQH4grUFcQdWFrrGJSIHL+XHB4P3uXde2kfAa1YF70B0Pcdrt3hVn2B0g94sMkMdtFpiM25wS9jrTP96Rt8UejBqk4KPx/HbnOm94v6nO5Rlles6feTdovkGQHLyTTU6kRtDonsaRo6pemjhrd5Dzfz/ghMccDxrI91E690BpxqE4GJKtmu2I+7XYbcVvf0DxiGreWMCXCnW6EGl8CSdmGhNN6D3iaJlTzfqPkHd9elQsMitzMAAAAASUVORK5CYII=)
            no-repeat;
          background-size: 100%;
          position: absolute;
          top: 34px;
          right: -11px;
        }

        .icon {
          display: inline-block;
          margin-top: 28px;
          width: 20px;
          height: 27px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAA3CAYAAACRvGMdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NjU2REMzNDQ0OUExMUU5ODRENDgzRDg2MzA5NkY5RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NjU2REMzNTQ0OUExMUU5ODRENDgzRDg2MzA5NkY5RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg2NTZEQzMyNDQ5QTExRTk4NEQ0ODNEODYzMDk2RjlGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg2NTZEQzMzNDQ5QTExRTk4NEQ0ODNEODYzMDk2RjlGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bNtkYwAABIlJREFUeNrMmXtsFEUcx+devRUJCDWWmoDIWSJUWhMwgKYQCYeQxqKgUbRVaJVAwAABgkQe4fEHJUIo6B8kxvIHCKQxWgG1XgzQJsZA1WiwBJo+qJTyCPHREKBA1+9cf5jNdmZ39nF3/pLP3e3OzN53Z3d+v9/MBHRdZ0aLn8dHr4l78uMAmgeS33ryd/A+KA6BSADgRBZORHEiGtSXaWFWht95Wli/oYVYIhpm67WQ3sHL34xFmNnCLL1WDeYbjgeBt8BskA86RY2CaRT4hkmg0QaDw7KG6RS52qb8OfBkpkXmKtTJz7TI6wp1LmRa5H4FgY2ZFrkNnLYon/t/GDjcIU8Ce0GP4fyPYCL4SdYw3X6Sh4BFYDOIgT/BGbtGfoocCBBfWLdC3UuEknkVOY9HUjAOPEEiO8ApcBB878fduxXJ/dk+MEFQNo6oAMfAYvCHF5FuBs5k8KtEoNmKQRPF5rSJHAZOUILj5F39EnyQrsf9Fchy+V9bwSh6DaRW034nGAnpayNBlh0Oso9eyM1qdSJyJnjG4xgoBw+C1yXlfODVgDl0vLCuq6fQyeMu88lVvQYOSMo0g0BGN/SSisi3aTQP8Dm33CU4fxv8YDp33E7kFnI1f/ksktsysEAQkUqop78F0/BO/mz1Tq4E6yiC8LQ+koIw+SmoBy33T7w6MsJTulIVF8Qf8YeGl5lbV4riea0bPzmBHrHRz0VBQ4pE5lNUUhMZb04+0jpBvang8xRmRzusXidzT34Mhgrq8WhxTZbe+2APcJ9oKzLewkbj611JvSlgCHglhb25SqUnK20u8g3NQWpTJHIkZe5ikfFWlsM9u81FeIq/guq1pUjoy1YJhmrI2wluUr54Fgz3WeSzVo+72MGFuDu6Qa7qnM8in0IWFO0nMt7GshWzm3YwFlTR8VXwNDjqo8iHwGOinsynbMPKfgEF9IiNdgu8SK+BX/aISOSjNo3aaNR128T55T76zH4i7XrxedNkXmZVPgm9JxLZa9FgrcMow4UmPIr8WySy26JypYs/ec/jUkynSKSsp45RI6fG3VKzS5HtyCcvi0Q2UfJgtrMeeuR3l+2Ei1bBxONJx9zo8xLMLZft6qwizteCsgIPIvNctvvCSqRoijnD5UIAT1bGu2jHx8B1qcjEqOQ64SFTGfef77tcqXBjG1XyyXWC8k0Un52scrzjQuB3zGKl9z+RiVhyWlktqMPXGqcr/FEJJcZurMLJbHEJ+Md0LkJRZDcoFFyDx/VPPGTsS8FFqwoBwQZoEQJlvcUGaBOOO/EdBiMCOos53ABlWrjvtxbWq7UQK4/iWAvpzMkGaAMlCrskNzaW8Gp8X6dcpWLQIlFYlcKZ4WYHUxbLld4dNBj8nGufJw+w0Ukju1W1I4DPxzcwta0PmbXSTHOMLPR5Ecko4d1CoW4NOKkYm/lWyWc0TY3RO97r5g6tkogi1reQX0PHV8B2IscwgB6mCdRd1rfDxSdsvzGFnS6vImcZko5qwSi8QhxnaTDZ4zYud8xjGTaZyD3USzzLLs20yH8FGACHLwG8Cy8PTQAAAABJRU5ErkJggg==)
            no-repeat;
          background-size: 100%;
        }
        .item-title {
          margin: 10px 0 15px;
          font-size: 14px;
          font-weight: 700;
        }
        .payBefore {
          text-align: center;
          font-size: 12px;
          color: #666;
          .money {
            color: #ff4747;
            font-weight: 700;
          }
        }
      }
    }
    .item:last-of-type:before {
      display: none;
    }
  }
}
.jh-recom {
  width: 360px;
  height: 206px;
  margin: 10px auto 0;
  background: #fff;
  padding: 20px 0 0;
  box-shadow: 0 0 2px #ccc;
  border-radius: 2px;

  .title {
    position: relative;
    border-bottom: 1px solid #efefef;
    height: 18px;
    padding-bottom: 20px;
    span::before {
      display: inline-block;
      content: '';
      background: url(data:image/png;base64,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)
        no-repeat;
      background-size: 100%;
      width: 74px;
      height: 18px;
      position: absolute;
      left: 10px;
    }
  }

  .container {
    display: flex;

    .left a {
      display: block;
      width: 160px;
      height: 140px;
      margin: 15px 0 0 18px;
      border-right: 1px solid #efefef;
      position: relative;

      h2 {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        font-weight: 700;
        color: #333;
      }
      &::before {
        position: absolute;
        display: inline-block;
        content: ' ';
        width: 60px;
        height: 87px;
        background: url(https://image.suhuishou.com/assets/image/reco_bg.png)
          no-repeat;
        background-size: 180px;
        right: 12px;
        bottom: 0;
      }
      p {
        margin-top: 7px;
        font-size: 12px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #999;
      }
      span {
        display: inline-block;
        width: 60px;
        height: 21px;
        background: #ff4447;
        box-shadow: -1.5px 1.5px 0 rgba(255, 71, 68, 0.35);
        border-radius: 12px;
        font-size: 12px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #fff;
        line-height: 21px;
        text-align: center;
        margin-top: 11px;
      }
    }
    .right .top {
      display: block;
      width: 150px;
      height: 70px;
      margin: 10px;
      position: relative;
      border-bottom: 1px solid #efefef;
      h2 {
        margin-top: 15px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        font-weight: 700;
        color: #333;
        &::before {
          position: absolute;
          display: inline-block;
          content: ' ';
          width: 34px;
          height: 54px;
          background: url(https://image.suhuishou.com/assets/image/reco_bg.png)
            no-repeat;
          background-position: -200px -40px;
          right: 0;
          top: 0;
        }
      }

      p {
        margin-top: 7px;
        font-size: 12px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #999;
      }
    }
    .right .buttom {
      display: block;
      width: 150px;
      height: 70px;
      margin: 10px;
      position: relative;
      h2 {
        margin-top: 15px;
        font-size: 15px;
        font-family: MicrosoftYaHei;
        font-weight: 700;
        color: #333;
      }
      p {
        margin-top: 7px;
        font-size: 12px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #999;
      }
    }
  }
}
.jh-news {
  width: 360px;
  height: 276px;
  margin: 10px auto 0;
  background: #fff;
  padding: 20px 0 20px;
  box-shadow: 2px 2px 2px 0 #d5d5d5;
  border-radius: 3px;
  overflow: hidden;
  box-sizing: border-box;
  .title {
    position: relative;
    border-bottom: 1px solid #efefef;
    height: 18px;
    padding-bottom: 20px;
    span::before {
      display: inline-block;
      content: '';
      background: url(data:image/png;base64,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)
        no-repeat;
      background-size: 100%;
      width: 38px;
      height: 18px;
      position: absolute;
      left: 10px;
    }
  }
  .item {
    a {
      margin: 20px;
      display: flex;
      border-bottom: 1px solid #efefef;
      padding-bottom: 20px;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      .con {
        width: 240px;
        margin: 0 0 0 20px;
        .txtA {
          font-size: 14px;
          height: 20px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: #555;
        }
        .txtB {
          font-size: 12px;
          color: #888;
          margin-top: 5px;
          height: 24px;
          overflow: hidden;
        }
      }
    }
  }
}
.jh-partner {
  width: 365px;
  margin: 10px auto 0;
  background: #fff;
  padding: 20px 0 20px;
  box-shadow: 1px 2px 1px 0 #d5d5d5;
  border-radius: 6px;
  .title {
    height: 15px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
  }
  .item {
    display: flex;
    flex-wrap: wrap;

    .img {
      display: inline-block;
      width: 100px;
      height: 70px;
      background: url(https://m.suhuishou.com/static/img/partner.96c6efd4.png)
        no-repeat;
      background-size: 120px;
      box-shadow: 0 0 10px #ccc;
      margin: 10px 10px 15px;
      background-position: -11px 7px;
      border-radius: 2px;
    }
    .img:nth-child(2) {
      background-position: -6px -53px;
    }
    .img:nth-child(3) {
      background-position: -11px -114px;
    }
    .img:nth-child(4) {
      background-position: -4px -173px;
    }
    .img:nth-child(5) {
      background-position: -8px -239px;
    }
    .img:nth-child(6) {
      background-position: -8px -294px;
    }
  }
}
.jh-autoself{
    width: 360px;
    margin: 10px auto 0;
    background: #fff;
    padding: 20px 0 20px;
    box-shadow: 0 0 4px #ccc;
    border-radius: 2px;
    .title{
    height: 15px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;

    }
    .info{
      display: flex;
      flex-wrap: wrap;
    .item a{
    width: 145px;
    margin: 10px 10px 15px;
    padding: 10px 10px 10px 5px;
    display: flex;
      .img{
        width: 38px;
        height: 38px;
        display: inline-block;
        overflow: hidden;
        border-radius: 50%;
        background: url(https://m.suhuishou.com/static/img/autoself.caad9f26.png) #efefef no-repeat;
        background-size: 33px;
        background-position: 4px 6px;
      }
      .con{
        width: 96px;
        margin-left:10px;
        .txtA{
          font-size: 14px;
          color:#555;
        }
        .txtB{
              color: #888;
              font-size: 12px;
              margin-top: 5px;
        }
      }
    }

    }
}
.jh-copyright{
      margin: 30px auto 20px;
  p{
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    }

}
</style>
