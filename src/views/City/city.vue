<template>
  <div class="page-city">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
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
