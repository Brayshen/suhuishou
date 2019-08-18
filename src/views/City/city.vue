<template>
  <div class="page-city">
    <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    <div class="van-index-anchor">
      <div class="van-cen">#</div>
    </div>
    <ul class="z_list-city">
      <li v-for="item in 23">A</li>
    </ul>
    <ul class="City-list">
      <li>北京市</li>
      <li>上海市</li>
      <li>深圳市</li>
      <li>广州市</li>
      <li>武汉市</li>
    </ul>
    <div class="z_list_city">
      <div class="z_list_city_cen">A</div>
      <ul class="z_city_list_two">
        <li v-for="item in 20">鞍山市</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "City",
  data () {
    return {
      value: "",
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
  },

}
</script>
<style lang="scss">
@import "../../assets/styles/common/mixin.scss";
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
.z_list-city {
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
