<template>
  <div class="page_search">
    <div id="top">
      <div id="zoom">
        <i class="iconfont icon-fangdajing"></i>
      </div>
      <input ref="ipt" type="text" id="search" placeholder="请输入您想找的型号" @keyup="fn1" />
      <button id="cancel" @click="cancel">取消</button>
    </div>
    <div id="result">
      <ul>
        <li v-for="(item, index) in searchList" :key="index">
          <div class="title">{{item.title}}</div>
          <div class="price">
            <p class="p_text">回收均价</p>
            <span class="p_num">{{item.price}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import { log } from 'util'
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
  name: 'search',
  computed: {
    ...mapState('search', ['resList', 'searchName']),
    ...mapGetters('search', ['searchList'])
  },
  methods: {
    ...mapActions('search', ['getSearchRes']),
    ...mapMutations('search', ['search', 'reset']),
    fn1() {
      this.search(this.$refs['ipt'].value)
    },
    cancel() {
      this.$refs['ipt'].value = ''
      this.reset()
    }
  },
  created() {
    this.getSearchRes()
  }
}
</script>
<style lang="scss" scoped>
body,
html {
  width: 100%;
  height: 100%;
}
.page_search {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  // margin-top: -30px;
  #top {
    width: 100%;
    height: 160px;
    background: #efefef;
    padding: 30px 0;
    box-sizing: border-box;
    #zoom {
      width: 120px;
      height: 100px;
      border: none;
      box-sizing: border-box;
      background: #fff;
      float: left;

      i {
        font-size: 80px;
        line-height: 100px;
        margin-left: 20px;
      }
    }
    #search {
      width: 956px;
      height: 100px;
      box-sizing: border-box;
      float: left;
      border: none;
      font-size: 44px;
      color: #767676;
    }
    #cancel {
      width: 166px;
      height: 100px;
      border: none;
      box-sizing: border-box;
      float: left;
      background: #fff;
      border: none;
      background: #efefef;
      font-size: 44px;
      text-align: center;
      color: #108ee9;
      // font-weight: 800;
    }
  }
  #result {
    width: 100%;
    min-height: 166px;
    ul {
      width: 100%;
      min-height: 166px;
      li {
        height: 166px;
        overflow: hidden;
        border-bottom: 1px solid #e2e2e2;
        .title {
          float: left;
          width: 912px;
          float: left;
          padding-left: 26px;
          color: #666666;
          box-sizing: border-box;
          font-size: 55px;
          line-height: 166px;
        }
        .price {
          width: 330px;
          height: 100%;
          float: left;
          text-align: center;

          .p_text {
            color: #666666;
            margin: 52px 0 24px 0;
            font-size: 40px;
          }
          .p_num {
            color: #f23030;
            font-size: 40px;
          }
        }
      }
    }
  }
}
</style>
