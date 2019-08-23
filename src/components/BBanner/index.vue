<template>
  <div class="swiper-container swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
        <img :src="item" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="pagination"></div>

    <!-- 如果需要导航按钮 -->
    <template v-if="navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Banner',

  props: {
    imgs: Array, // 轮播图的数据
    pagination: {
      type: Boolean,
      default: true
    }, // 是否需要分页器
    navigation: Boolean // 是否需要前进后退按钮
  },
  methods: {
    initSwiper() {
      new Swiper('.swiper1', {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          },
        pagination: this.pagination
          ? {
              el: '.swiper-pagination'
            }
          : {},

        navigation: this.navigation
          ? {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          : {}
      })
    }
  },
  updated() {
    this.initSwiper()
  }
}
</script>

<style lang="scss">
.swiper-container {
  height: 180px;
  img {
    height: 180px;
    width: 100%;
  }
}
</style>
