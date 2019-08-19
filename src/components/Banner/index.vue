<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://image.suhuishou.com/attached/image/20190315/20190315152620_97175.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="https://image.suhuishou.com/attached/image/20190709/20190709091743_24936.jpg" alt />
      </div>
      <div class="swiper-slide">
        <img src="https://image.suhuishou.com/attached/image/20190722/20190722091951_15814.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "Banner",

  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        autoplay: true,
        loop: true // 循环模式选项
      });
    }
  },
  mounted () {
    this.initSwiper();
  }
};
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
