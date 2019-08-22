<template>
  <div class="page_detail">
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <div id="basicInfo">
          <router-link to="/search" tag="i" class="iconfont iconarrow_left"></router-link>
          <router-link to="/home" tag="i" class="iconfont iconzhuye"></router-link>
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
          <i class="iconfont iconqj"></i>
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
          show-postal
          show-delete
          show-set-default
          show-search-result
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
        <div v-html="item.desc" id="desc"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import Banner from '../../components/Banner'
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import { AddressEdit, Area, Toast } from 'vant'
Vue.use(AddressEdit).use(Area)
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

  computed: {
    ...mapGetters('detail', ['bannerListImgs', 'productsInfo']),
    ...mapState('detail', ['products']),
    ...mapGetters('area', ['areadate'])
  },

  methods: {
    ...mapActions('detail', ['getBannerList', 'getState']),
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
    }
  },
  created() {
    this.getBannerList()
    this.getState()
  }
}
</script>
<style lang="scss">
.van-popup {
  height: 600px !important;
  .van-picker {
    height: 600px !important;
    .van-picker__toolbar {
      height: 200px;
    }
    .van-picker__columns {
      height: 400px !important;
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
  ul {
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 100%;
      #basicInfo {
        width: 100%;
        height: 1194px;
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
        div {
          font-size: 44px;
          height: 134px;
          line-height: 134px;
        }
      }
      #desc {
        font-size: 50px;
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
    }
  }
}
</style>

