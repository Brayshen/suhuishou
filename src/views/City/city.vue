<template>
  <div class="page-city">
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    <div class="van-index-anchor">
      <div class="van-cen">#</div>
    </div>
    <ul class="z_list-ci">
      <li>#</li>
      <li v-for="item in pys" :ref="'item-' + item.py" :key="item" @click="fn1(item)">{{item}}</li>
    </ul>
    <ul class="City-list">
      <li>北京市</li>
      <li>上海市</li>
      <li>深圳市</li>
      <li>广州市</li>
      <li>武汉市</li>
    </ul>

    <ul class="z_list_city">
      <li class="city-list__item" v-for="item in cityList">
        <div class="z_list_city_cen">{{item.py}}</div>
        <ul class="z_city_list_two">
          <li>
            <ul>
              <li v-for="city in item.list" :key="city.cityId">{{city.name}}</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'City',
  data () {
    return {
      value: ''
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
    ...mapGetters('city', ['cityList', 'pys'])
  },

  created () {
    this.getCities()
  }

}
</script>
<style lang="scss">
@import '../../assets/styles/common/mixin.scss';
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
.z_list-ci {
  position: fixed;
  top: 163px;
  left: 363px;
  li {
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
  }
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
