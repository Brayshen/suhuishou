<template>
  <div class="page_detail">
    <div id="addFixed">
      <div>添加旧机，享受超额优惠</div>
      <div>立即添加</div>
    </div>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <div id="basicInfo">
          <i class="iconfont iconarrow_left" @click="back"></i>
          <router-link to="/" tag="i" class="iconfont iconzhuye"></router-link>
          <h3 id="info_t">{{item.title.substr(0,8)}}</h3>
          <Banner pagination autoplay loop :imgs="bannerListImgs" v-if="bannerListImgs.length > 0" />
          <span class="info_p">¥{{item.price}}</span>
          <span class="info_v">{{item.title}}【享环保奖励金】</span>
        </div>
        <div id="version">
          <span class="selected_t">已选</span>
          <span>{{item.attr[0].attr_value[0].attr_value_name}}</span>
          <span>{{item.attr[1].attr_value[0].attr_value_name}}</span>
          <span>1件(可选服务)</span>
          <i class="iconfont iconqj" @click="showPopup"></i>
        </div>
        <div id="old_eva">
          <h4>旧机估价</h4>
          <div class="add_phone">
            <a href="#" class="icon-phone">
              <i class="iconfont iconunie639"></i>
            </a>
            <span>添加您的旧机享受超额优惠</span>
            <div class="button">必选项</div>
            <i class="iconfont iconqj"></i>
          </div>
        </div>
        <div id="benefit">
          <h4>换新福利</h4>
          <div class="add_phone">
            <a href="#" class="icon-phone">
              <i class="iconfont iconunie639"></i>
            </a>
            <span>环保补助金50元</span>
          </div>
        </div>
        <van-address-edit
          :area-list="areadate"
          show-delete
          show-search-result
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
        <van-tabs type="line">
          <van-tab title="=商品参数">
            <div v-html="item.desc" id="desc"></div>
          </van-tab>
          <van-tab title="换新流程">
            <div id="cProcess">
              <div class="cP_inner">
                <img src="../../../public/cProcess.jpg" alt />
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <!-- <van-popup v-model="show" position="bottom" get-container="#app"></van-popup> -->
        <van-sku v-model="show" :sku="sku" :goods="goods" />
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
// import router from '../../router'

import Banner from '../../components/Banner'
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import { AddressEdit, Area, Toast, Tab, Tabs, Popup, Sku } from 'vant'
Vue.use(AddressEdit)
  .use(Area)
  .use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Sku)
Vue.use(VueRouter)
function resetZoom() {
  var designWidth = 1242 //设计稿宽度，需根据设计稿进行调整
  var deviceWidth = document.documentElement.clientWidth //设备宽度
  var scale = deviceWidth / designWidth
  document.body.style.zoom = scale
}
resetZoom()
window.onresize = function() {
  resetZoom()
}
export default {
  name: 'detail',
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
    // areaList: Object,
    // searchResult: Array
  },
  data() {
    return {
      show: false,
      sku: {
        // 数据结构见下方文档
        tree: [
          {
            k: '选择颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: '蓝色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: '选择版本', // skuKeyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '8GB+256GB', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: '6+128',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      }
    }
  },

  computed: {
    ...mapGetters('detail', ['bannerListImgs', 'productsInfo']),
    ...mapState('detail', ['products']),
    ...mapGetters('area', ['areadate'])
  },

  methods: {
    ...mapActions('detail', ['getBannerList', 'getState']),
    showPopup() {
      this.show = true
    },
    onSave() {
      Toast('save')
    },
    onDelete() {
      Toast('delete')
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    },
    back() {
      this.$router.back()
    }
  },

  created() {
    this.getBannerList(this.$route)
    this.getState(this.$route)
  }
}
</script>
<style lang="scss">
.van-toast {
  width: 300px;
  height: 150px;
  div {
    font-size: 30px;
    line-height: 150px;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
.van-dialog {
  height: 400px;
  box-sizing: border-box;
  .van-dialog__header {
    height: 150px;
    box-sizing: border-box;
    font-size: 50px;
    line-height: 150px;
  }
  .van-hairline--top {
    height: 250px;
    box-sizing: border-box;
    button {
      width: 50%;
      height: 100%;
      span {
        width: 100%;
        height: 100%;
        display: block;
        font-size: 50px;
        line-height: 250px;
      }
    }
  }
}
.van-popup {
  width: 100%;
  height: 600px;
  .van-picker {
    height: 600px;
    .van-picker__toolbar {
      height: 200px;
      div {
        width: 50%;
        text-align: center;
        line-height: 200px;
        font-size: 50px;
      }
    }
    .van-picker__columns {
      height: 400px;
      div {
        ul {
          li {
            height: 50px;
            margin-bottom: 20px;
            font-size: 50px;
          }
        }
      }
    }
  }
}
.van-sku-container {
  height: 1346px;
  margin-top: -208px;
  .van-sku-header {
    height: 483px;
  }
}

@mixin middle_c {
  height: 300px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 44px;
  border-bottom: #f5f5f5 16px solid;

  h4 {
    line-height: 150px;
    box-sizing: border-box;
    height: 150px;
    width: 100%;
    border-bottom: 2px solid #f5f5f5;
    // font-weight: 800;
  }
  .add_phone {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    .icon-phone {
      display: block;
      float: left;
      text-align: center;
      line-height: 150px;
      i {
        font-size: 57px;
        color: #f9415d;
        line-height: 150px;
      }
    }
    span {
      display: block;
      float: left;
      line-height: 150px;
      width: 540px;
      height: 150px;
    }
    .button {
      top: 50px;
      right: 410px;
      position: absolute;
      line-height: 50px;
      width: 120px;
      height: 50px;
      box-sizing: border-box;
      border: 1px solid #fc5b74;
      border-radius: 6px solid;
      text-align: center;
      z-index: 99;
      color: #fc5b74;
    }
    .iconqj {
      float: right;
      line-height: 150px;
      font-size: 43px;
      margin-right: 67px;
    }
  }
}
.page_detail {
  width: 100%;
  height: 100%;
  position: relative;
  #addFixed {
    width: 1242px； height：208px;
    line-height: 208px;
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    div {
      float: left;
      text-align: center;
      font-size: 60px;
      &:nth-child(1) {
        width: 70%;
        background: #fff;
        color: #999999;
      }
      &:nth-child(2) {
        width: 30%;
        background: #f9415d;
        border-radius: 6px;
        color: #fff;
      }
    }
  }
  ul {
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 100%;
      #basicInfo {
        width: 100%;
        min-height: 364px;
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid #f5f5f5;
        padding: 0 44px;
        i {
          position: absolute;
          font-size: 50px;
          top: 50px;
        }
        .iconarrow_left {
          left: 50px;
        }
        .iconzhuye {
          left: 118px;
        }
        #info_t {
          font-size: 50px;
          line-height: 150px;
          text-align: center;
          font-weight: 800;
        }
        .swiper-container {
          width: 830px;
          height: 810px;
          margin: 0 auto;

          .swiper-slide {
            width: 830px;
            height: 810px;
            margin: 0 auto;
            img {
              width: 830px;
              height: 810px;
              margin: 0 auto;
            }
          }
        }
        .info_p {
          margin-left: 44px;
          color: #f9415d;
          font-size: 50px;
          font-weight: 800;
          display: block;
          margin-bottom: 60px;
        }
        .info_v {
          font-size: 43px;
          color: #333333;
          overflow: hidden;
          box-sizing: border-box;
        }
      }
      #version {
        height: 172px;
        width: 100%;
        box-sizing: border-box;
        border-bottom: #f5f5f5 16px solid;
        padding-left: 44px;
        position: relative;
        .selected_t {
          color: #999999;
          margin-right: 56px;
        }
        span {
          line-height: 156px;
          font-size: 40px;
        }

        i {
          position: absolute;
          right: 60px;
          top: 57px;
          color: #888888;
          font-size: 60px;
        }
      }
      #old_eva {
        @include middle_c;
      }
      #benefit {
        @include middle_c;
      }
      .van-address-edit {
        border-bottom: 35px solid #f5f5f5 !important;
        .van-field {
          font-size: 44px;
          height: 134px;
          line-height: 134px;
          color: #666666;
          padding-left: 60px;
          box-sizing: border-box;
          .van-cell__title {
            color: #666666;
            width: 10%;
          }
          .van-cell__value {
            width: 90%;
          }
        }
        .van-address-edit__buttons {
          width: 100%;
          height: 268px;
          padding: 0;
          .van-button {
            width: 100%;
            padding: 0;
            height: 122px;
            font-size: 44px;
          }
        }
      }
      .van-tabs__wrap {
        height: 134px !important;
        bottom: top 2px solid #ebedf0;
        .van-tabs__line {
          height: 8px;
          color: #ff4444;
          bottom: 30px;
        }
        .van-tab {
          height: 134px;
          line-height: 134px !important;
          font-size: 40px;
          color: #7d7e80;
        }
      }

      #desc {
        font-size: 40px;
        tbody {
          tr:nth-child(odd) {
            background: #eee;
            overflow: hidden;
            height: 50px;
            line-height: 50px;
            overflow: hidden;
          }
          tr:nth-child(even) {
            overflow: hidden;
            height: 80px;
            line-height: 80px;
          }
        }
        p {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
      #cProcess {
        height: 1025px;
        width: 100%;
        background: #eee;
        .cP_inner {
          width: 100%;
          height: 663px;
          img {
            widows: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

