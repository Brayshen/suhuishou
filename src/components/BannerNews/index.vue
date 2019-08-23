<template>
  <div class="swiper-container swiper2" style="overflow:visible">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="num in pageTotal" :key=num>
        <div class="news-info">
        <div class="item" v-for="item in news.slice( (num - 1) * pageSize , pageSize * num )" :key="item.articleId">
          <a href>
            <img :src="item.articleImg" />
            <div class="con">
              <p class="txtA">{{item.title}}</p>
              <p class="txtB">{{item.articleDesc}}</p>
            </div>
          </a>
        </div>
      </div>

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
  name: 'BannerNews',
  data() {
    return {
      pageSize: 2
    }
  },
  props: {
    news: Array,
    pagination: {
      type: Boolean,
      default: false
    }, // 是否需要分页器
    navigation: Boolean // 是否需要前进后退按钮
  },
  computed: {
    pageTotal () {
      return Math.ceil(this.news.length / this.pageSize)
    }
  },

  methods: {
    initSwiper() {
      new Swiper(this.$el, {
      loop: true,
        autoplay: {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: false
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
.swiper2{


.swiper-pagination{
    bottom: 203px;
    left: 145px;
}
  .swiper-pagination-bullet{
    width: 6px;
    height:6px;
  }
  .swiper-pagination-bullet-active {
    background: #999;
  }


}
</style>
