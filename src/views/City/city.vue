<template>
  <div class="page-city">
    <van-sticky>
      <van-nav-bar title="选择城市" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <div class="city-box">
      <div class="city-left">
        <div class="van-index-anchor">
          <div class="van-cen">#</div>
        </div>
        <ul class="City-list">
          <li v-for="item in Bigcity" :key="item.id">{{item.name}}</li>
        </ul>
        <ul class="z_list_city">
          <!-- 北上广城市的展示~ -->
          <li class="city-list__item" v-for="item in cityList" :key="item.id">
            <div class="z_list_city_cen">{{item.py}}</div>
            <ul class="z_city_list_two">
              <li v-for="city in item.list" :key="city.cityId">{{city.name}}</li>
            </ul>
          </li>
        </ul>
      </div>

      <ul class="z_list-ci">
        <li>#</li>
        <li v-for="item in pys" :ref="'item-' + item.py" :key="item" @click="fn1(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex"
import { Toast } from "vant"
export default {
  name: "City",
  data () {
    return {
      value: "",
    }
  },
  methods: {
    ...mapActions('city', ['getCities']),


    onClickLeft () {
      this.$router.back()
    },
    fn1 (py) {
      console.log(456)
      // 1. 我得知道我点击的是个啥
      let itemBox = this.$refs[`item-${py}`][0]
      // 2. 算出 itemBox 距离顶部的高度
      let offsetTop = itemBox.offsetTop - 100
      // 3. 控制那个可滚动div的 scrollTop
      this.$refs['myBox'].scrollTop = offsetTop
    }
  },
  computed: {
    ...mapState('city', ["cities"]),
    ...mapGetters('city', ['cityList', 'pys', 'Bigcity']),
  },

  created () {
    Toast.loading({ duration: 500 })
    this.getCities();

  },
}
</script>
<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
.page-city {
  height: 100%;
}
.city-box {
  height: 100%;
  display: flex;
  overflow: hidden;
}
.city-left {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
}
.z_list-ci {
  display: flex;
  flex-direction: column;
  justify-content: center;
  li {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #000;
  }
}

.van-index-anchor {
  height: 32px;
  background: #f8f8f8;
  line-height: 32px;
}
.van-cen {
  height: 100%;
  width: 100%;
  background: #f8f8f8;
  padding: 0 18px;
  box-sizing: border-box;
}

.City-list {
  padding-left: 20px;
  height: 170px;
  li {
    @include border-bottom;
    height: 35px;
    line-height: 35px;
    width: 100%;
    color: #191a1b;
    &:last-child {
      height: 0;
    }
  }
}
.z_list_city {
  height: 32px;
  line-height: 32px;
  background: #f8f8f8;
}
.z_list_city_cen {
  height: 100%;
  width: 100%;
  background: #f8f8f8;
  padding: 0 18px;
  box-sizing: border-box;
}
.z_city_list_two {
  padding-left: 20px;
  li {
    @include border-bottom;
    height: 35px;
    line-height: 35px;
    width: 100%;
    color: #191a1b;
  }
}
</style>
