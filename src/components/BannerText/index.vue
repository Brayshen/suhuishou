<template>
  <div class="swiper-container swiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in txt" :key="item.goodsId">
        <div class="info-wrap">
          <div class="info">
            <img :src="item.originalImg" />
            <p class="title">{{ item.goodsName }}</p>
            <p class="money">
              回收均价
              <span>{{ item.shopPrice }}</span>
            </p>
          </div>
          <div class="way">
            <i class="iconfont iconwenhao"></i>
            <div class="item">
              <span class="icon"></span>
              <p class="item-title">信用回收</p>
              <div class="payBefore">
                <p>先预付</p>
                <p class="money">￥1500</p>
              </div>
            </div>
            <div class="item">
              <span
                class="icon"
                style="margin-bottom:-5px; background: url(https://m.suhuishou.com/static/img/indexShunFeng.7faf19be.png) no-repeat; background-size: 100%;"
              ></span>
              <p class="item-title">信用回收</p>
              <div class="payBefore">
                <p>先预付</p>
                <p class="money">{{item.shopPrice+150}}</p>
              </div>
            </div>
            <div class="item">
              <span
                class="icon"
                style="margin-bottom:-5px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAApCAYAAAChi6CMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OEQ3N0ZCNzQ0OTYxMUU5OUE4RUMzMzMwQkEyRjUxQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2OEQ3N0ZCODQ0OTYxMUU5OUE4RUMzMzMwQkEyRjUxQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY4RDc3RkI1NDQ5NjExRTk5QThFQzMzMzBCQTJGNTFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY4RDc3RkI2NDQ5NjExRTk5QThFQzMzMzBCQTJGNTFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4zp0EQAABK5JREFUeNrsWFtoFFcY/s/MJNldiTFGi9F6q6US24faalNBMfWCgtCNvSESsNKH1qaF0of6YB/6WAs+ibRQMF6Q9KleClVQkShKqjF9SEzpk09BFLomTWKiE/f0+8/JmZ3NTnZns7t1A/7wzzlzbvOd//yX84+Qra3kkesSPXhA9OQJ0eLFRHPmEI2MaK6oIIrFiMbHiUZHdT2ZJBJCtzmOfpfyG7Ksg96aUu5H+w+qzmMtS5dmriF+D0kOFYuSyWqAOA7emdYuxEEAfRv9e/E2ONFaBf4EXDPxzu0/Y4Pu/wfastbj+Qt4UWA/b8S2GfguALuKlla0HUqTcmXlQopEvg0j8cJBS/k1QB9CmWtkPcZ1oGSJr520KaKnT1cqtSuZpDXAWeBj4A9CAPZTW8BJsLT/BfB0PS8KaF5Q8zq8tYOXFs0mzNohBGbltai2+K+gfzdQLx5gTeO+U8w8WR87eahDBEDblDHZNuWpErkFwqrBaxppcznFN6yci/FEx2kE0D7Ud00pjcKpGYb6phJIDjWxQqjDF1CHTiy4vERgtRBs+wV8qwv1z3J62MBWjozJZCUi4ykscjjbURUVuKYfJ7ySHQ40T+QQXlOzBm93EJ5307OhPer7RKtzg2Z9qq39nOrrb0ElXi65dLPTSpxwN8pPpwYtpQPQJ2n+/COeeykHEuIncJq6GNCr0dGLskXpc7kA9quLED0oXzeg9wJktzqO8qYGAP8T5ccM+qi6484E0vfxNgeu7TRFo9vp8WPTFZ2my/oVz7+x8Cso3/e1n0Mbe4IV4I+mBVTKUZ9bPM9h/D1wnW/YJvApcEVIsAnwDmy+04tmUjah/A6hma+sv6l2DlTV1d+j/jsNDi4IeTkawrwPId0uX+s/Qu7bB9lGtX/m+M+LO04PFn0tlEE6zhrMua0M2KRShl035UpnzybqwHX63r0Gisf7vG9lB92BMU1qfobLMxcWZj14POThXcPc2wosc7ZNslDq6jj3/AtALoYSiBBS5Z4Z92kTotMv4HZI1bjp2cJU92FuY0k9ekS0apVOkBOJ6+jZGkJF7KDNOeqIxsbCXcAzqQJ6SmnHZ06NM3iu89rDw7rObQwiGrWpqiqvDDwTNH8kX7enJbiZ+vq0FI1183HyRvgXBL/zrwYGaNRHb2BHIQHMmazkni6FWdSyXgWIzZDgZc9zPHyI7BHp47JlGiiD7u83Bk40d+5GJLBvFAY66IgEvp7LsLiP9bmx8Sg8w1I1niV69y7R/fupMYkEzPVa6ofOli0nlLdy3SKDtsPZoQI6PLyEhobOQMWalYRZVdhTMPGmeEw8bgRwFn1LCgGsXZ5xV37OP2rFwSczUjHjUVjKrtuO8t2i/BtKCwYplnnrnG234HkB4KJKkilvVIPTvKLyy2l6i9JIOpWmbUPy0ItE4i0lXSE2AGyvCutFpGCdtqzchhhE7DpjsZfg8v6A7l4B6HdKcdlzvNA92cCme3VkIegsviSAU2F8hpFFM5Ceg34OOqshBrs1u0zw2cGgg91btEz+fUSC1YMvR5NZiKtl4govBUt63rzMwDI29iUNDLyoLvnPiqQ8DT4Q1PWfAAMAIznSbzSWBrEAAAAASUVORK5CYII=) no-repeat; background-size: 100%;"
              ></span>
              <p class="item-title">信用回收</p>
              <div class="payBefore">
                <p>先预付</p>
                <p class="money">{{item.shopPrice}}</p>
              </div>
            </div>
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
  name: 'BannerTxt',

  props: {
    txt: Array,
    pagination: {
      type: Boolean,
      default: true
    }, // 是否需要分页器
    navigation: Boolean // 是否需要前进后退按钮
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

</style>
