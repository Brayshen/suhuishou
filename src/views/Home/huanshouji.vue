<template>
  <div class="page-huan">
    <div id="ad">
      <img
        src="https://image.suhuishou.com/attached/image/20190813/20190813115001_17373.jpg"
        alt="广告加载失败"
      />
    </div>
    <h4 class="change_title">速回收已旧换新</h4>
    <div id="search">
      <input type="text" class="ipt" placeholder="搜索您需要的机型" />
      <button class="sub">
        <i class="iconfont icon-fangdajing"></i>
      </button>
    </div>
    <!-- 轮播图 -->
    <Banner pagination autoplay loop :imgs="bannerListImgs" v-if="bannerListImgs.length > 0" />
    <div class="useless_button">
      <button class="btn_l">官方授权</button>
      <button class="btn_r">正品保障</button>
    </div>
    <div id="change_Process">
      <h5>换新流程</h5>
      <ul class="change_p_box">
        <li>
          <i class="iconfont icontext"></i>

          <p>旧机评估</p>
        </li>
        <i class="iconfont iconhengxian"></i>
        <li>
          <i class="iconfont iconbonus"></i>
          <p>领取奖励金</p>
        </li>
        <i class="iconfont iconhengxian"></i>
        <li>
          <i class="iconfont iconunie639"></i>
          <p>旧机评估</p>
        </li>
        <i class="iconfont iconhengxian"></i>
        <li>
          <i class="iconfont iconnewPhone"></i>
          <p>旧机评估</p>
        </li>
      </ul>
    </div>
    <div id="hot-Model">
      <div class="hot-Model_t">
        <h5>热门换新机型</h5>
        <router-link :to="'/goodlist'">
          更多机型
          <i class="iconfont iconarrow_right"></i>
        </router-link>
      </div>
      <div class="hot-Model_b">
        <ul>
          <li v-for="(item, index) in products" :key="index">
            <div class="hot-Model_b_img">
              <img :src="item.img" />
              <span class="discount_text">-￥{{item.bonus_price}}</span>
              <span class="discount_btn"></span>
            </div>
            <div class="hot-Model_b_info">
              <div class="hot-Model_title">{{item.title.substr(0,13)}}</div>
              <div class="hot-Model_price">
                新机价格
                <span>
                  <span>¥</span>
                  {{item.price}}
                </span>
              </div>
              <div class="hot-Model_bonusprice">享环保补助金</div>
              <button class="hot-Model_btn">去换新</button>
            </div>
          </li>
        </ul>
      </div>
      <div id="guarantee">
        <h2>服务保障</h2>
        <ul>
          <li>
            <i class="iconfont iconprice_d"></i>
            <div class="guarantee_text">
              <h4>价格保护</h4>
              <span>官方合作报价</span>
            </div>
          </li>
          <li>
            <i class="iconfont iconprice_d"></i>
            <div class="guarantee_text">
              <h4>价格保护</h4>
              <span>官方合作报价</span>
            </div>
          </li>
          <li>
            <i class="iconfont iconprice_d"></i>
            <div class="guarantee_text">
              <h4>价格保护</h4>
              <span>官方合作报价</span>
            </div>
          </li>
          <li>
            <i class="iconfont iconprice_d"></i>
            <div class="guarantee_text">
              <h4>价格保护</h4>
              <span>官方合作报价</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from '../../components/Banner'
import { mapActions, mapGetters, mapState } from 'vuex'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { log } from 'util'

function resetZoom() {
  var designWidth = 414 // 设计稿宽度，需根据设计稿进行调整
  var deviceWidth = document.documentElement.clientWidth // 设备宽度
  var scale = deviceWidth / designWidth
  document.body.style.zoom = scale
}
resetZoom()
window.onresize = function() {
  resetZoom()
}
export default {
  name: 'List',
  components: {
    Banner
  },

  props: {
    imgs: Array, // 轮播图的数据 ['http://11.jpg', 'http://22.jpg']
    pagination: {
      type: Boolean,
      default: true
    }, // 是否需要分页器
    navigation: Boolean // 是否需要前进后退按钮
  },

  computed: {
    ...mapGetters('huanshouji', ['bannerListImgs']),
    ...mapState('huanshouji', ['products'])
  },

  methods: {
    ...mapActions('huanshouji', ['getBannerList', 'getState'])
  },
  created() {
    this.getBannerList()
    this.getState()
  }
}
</script>
<style lang="scss" scoped>
@mixin changePhone_title {
  h5 {
    font-size: 17px;
    margin-bottom: 24px;
    padding-left: 13px;
    box-sizing: border-box;
    font-weight: 800;
    position: relative;
    &::before {
      content: '';
      height: 17px;
      width: 5px;
      border-radius: 2.5px;
      background: #ffc95c;
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
.page-huan {
  width: 400px;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
  position: relative;
  box-sizing: border-box;
  #ad {
    position: fixed;
    display: block;
    width: 85px;
    height: 48px;
    bottom: 80px;
    right: 5px;
    // cursor: pointer;

    z-index: 10000;

    img {
      width: 100%;
      height: 100%;
      display: block;
      &:hover {
        cursor: pointer;
        width: 120%;
      }
    }
  }
  .change_title {
    font-size: 17px;
    widows: 100%;
    text-align: center;
    line-height: 53px;
  }
  #search {
    width: 100%;
    height: 30px;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid #eee;
    margin-bottom: 15px;
    .ipt {
      width: 92%;
      height: 100%;
      float: left;
      box-sizing: border-box;
      border: none;
      padding-left: 10px;
    }
    .sub {
      width: 8%;
      height: 100%;
      float: left;
      box-sizing: border-box;
      border: none;
      background: #fff;

      text-align: center;
      i {
        width: 100%;
        height: 100%;
        color: #888888;
        font-size: 30px;
      }
    }
  }

  .useless_button {
    width: 172px;
    height: 30px;
    display: flex;
    align-items: center;
    margin: 15px auto;
    border: 1px solid #efeeee;

    button {
      width: 86px;
      height: 28px;
      border: none;
    }
    .btn_l {
      background: #efeeee;
    }
    .btn_r {
      background: #ffffff;
    }
  }
  #change_Process {
    width: 100%;
    margin: 0 auto 30px;
    z-index: 999;
    @include changePhone_title;

    .change_p_box {
      display: block;
      width: 100%;
      height: 90px;
      border-radius: 6px;
      border: 1px solid #f0efef;
      box-shadow: 0px 0px 8px #f0efef;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 auto;
      box-sizing: border-box;
      .iconhengxian {
        font-size: 24px;
        color: #f94560;
        margin-top: -30px;
      }
      li {
        width: 25%;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .iconfont {
          font-size: 38px;
          color: #f94560;
        }
        p {
          font-size: 15px;
          color: #333;
        }
      }
    }
  }
  #hot-Model {
    .hot-Model_t {
      @include changePhone_title;
      display: flex;
      width: 100%;
      height: 60px;
      justify-content: space-between;

      a {
        display: block;
        font-size: 15px;
        line-height: 15px;
        color: #999999;
        i {
          font-size: 12px;
          height: 100%;
          z-index: 999;
        }
      }
    }
    .hot-Model_b {
      width: 100%;
      ul {
        width: 100%;
        overflow: hidden;
        li {
          width: 180.1px;
          height: 254px;
          float: left;
          box-shadow: 0px 0px 2px #eee;
          box-sizing: border-box;
          z-index: 999;
          margin: 8px;
          background: #fff;
          .hot-Model_b_img {
            height: 88px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;
            overflow: hidden;
            img {
              width: 88px;
              height: 88px;
            }
            .discount_btn {
              width: 74px;
              height: 40px;
              position: absolute;
              right: -29px;
              top: -14px;
              border-radius: 20px;
              background: #fa5770;
            }
            .discount_text {
              display: block;
              z-index: 999;
              color: #fff;
              position: absolute;
              right: 0;
              top: 0;
              font-size: 15px;
            }
          }
          .hot-Model_b_info {
            height: 166px;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            .hot-Model_title {
              font-weight: 800;
            }
            .hot-Model_price {
              color: #999999;
              span {
                color: #f9415d;
              }
            }
            .hot-Model_bonusprice {
              color: #fa6d82;
            }
            .hot-Model_btn {
              border: none;
              width: 100px;
              height: 30px;
              border-radius: 15px;
              background: #fa4762;
              text-align: center;
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  #guarantee {
    width: 100%;
    margin: 0 auto;
    h2 {
      font-size: 17px;
      font-weight: 800;
      text-align: center;
      line-height: 60px;
      color: #000;
    }
    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      li {
        flex: none;
        width: 48%;
        height: 70px;
        float: left;
        overflow: hidden;
        margin-bottom: 5px;

        box-shadow: 0px 0px 2px #eee;
        i {
          display: block;
          float: left;
          width: 25%;
          font-size: 30px;
          color: #fa697f;
          text-align: center;
          line-height: 70px;
          height: 100%;
        }
        .guarantee_text {
          float: left;
          width: 75%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          span {
            color: #999;
          }
        }
      }
    }
  }
}
</style>
