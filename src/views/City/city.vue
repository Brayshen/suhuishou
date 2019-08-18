<template>
  <div class="page=home">
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" />
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
