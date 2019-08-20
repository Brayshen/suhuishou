<template>
  <van-list
    :finished="finished"
    v-model="loading"
    loading-text="等一下下嘛"
    finished-text="嗯~~讨厌~~人家已经都给你看光光了"
    @load="loadGoodList"
  >
    <div class="page-goodList">
      <div id="hot-Model">
        <div class="hot-Model_t">
          <i class="iconfont iconarrow_left"></i>
          <h5>产品列表</h5>
        </div>
        <div class="hot-Model_b">
          <ul>
            <li v-for="item in goodlist" :key="item.id">
              <div class="hot-Model_b_img">
                <img :src="item.img" />
                <span class="discount_text">-￥{{item.bonus_price}}</span>
                <span class="discount_btn"></span>
              </div>
              <div class="hot-Model_b_info">
                <div class="hot-Model_title">{{item.title.substr(0,10)}}</div>
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
      </div>
    </div>
  </van-list>
</template>

<script>
import Vue from 'vue'
import { List, Cell } from 'vant'

import { mapActions, mapGetters, mapState } from 'vuex'
Vue.use(List).use(Cell)
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
  data() {
    return {
      isFixed: false,
      finished: false, // 是否还有更多数据
      loading: false, // 是否正在请求数据
      pageNum: 0, // 当前的页码
      pageSize: 10, // 每页显示的条数
      filmType: 0 // 当前影片类型，0-正在热映 1-即将上映
    }
  },

  computed: {
    ...mapState('huanshouji', ['goodlist', 'totalPage'])
  },

  methods: {
    ...mapActions('huanshouji', ['getGoodList']),
    loadGoodList() {
      // console.log('123')
      // 3.4.1. 每次进入到这个方法的时候，都要讲 pageNum + 1
      this.pageNum++
      // 3.4.2. 调用 仓库中的 action 执行请求，并传递一些参数过去
      this.getGoodList({
        // 其他的参数
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        callback: () => {
          this.loading = false

          // 最终判断是否还有下一页
          if (this.pageNum >= this.totalPage) {
            this.finished = true
          }
        }
      })
    }
  },
  created() {
    this.getGoodList()
    // console.log(this.goodlist)
  }
}
</script>
<style lang="scss" scoped>
.page-goodList {
  #hot-Model {
    .hot-Model_t {
      width: 100%;
      height: 60px;
      position: relative;
      .iconarrow_left {
        position: absolute;
        left: 10px;
        top: 10px;
      }
      h5 {
        text-align: center;
        margin-top: 20px;
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
}
</style>
