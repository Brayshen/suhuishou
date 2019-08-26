<template>
  <div class="page-card">
    <van-nav-bar title="卷包" left-arrow :border="false" @click-left="$router.replace('/my')" />
    <van-tabs v-model="active">
      <van-tab title="回收">
        <cardList
          isImg="url('https://sr.aihuishou.com/c2b/zy-fe/anole/5Jt532Gh/static/media/bg-coupon-blue.5aed91fc.png')"
          :num="10"
          v-if="userInfo.getmoney == 1"
        />
        <empty v-else />
      </van-tab>
      <van-tab title="商品">
        <cardList
          isImg="url('https://sr.aihuishou.com/c2b/zy-fe/anole/5Jt532Gh/static/media/bg-coupon-yellow.68d12da0.png')"
          :num="4"
          v-if="userInfo.getmoney == 1"
        />
        <empty v-else />
      </van-tab>
      <van-tab title="维修">
        <empty />
      </van-tab>
    </van-tabs>
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
import cardList from '../../components/Card/index'
import empty from '../../components/Card/empty'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState('login', ['userInfo'])
  },
  components: {
    cardList,
    empty
  },
  methods: {
  }
}
</script>

<style lang="scss">
.page-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  .van-tabs {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    .van-tabs__content {
      background: rgb(249, 250, 255);
      flex: 1;
      overflow-y: auto;
    }
  }
  .van-nav-bar {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
    .van-icon {
      color: #111;
      font-size: 20px;
    }
  }
  .van-tabs__line {
    background-color: rgb(255, 211, 63);
  }
}
</style>
