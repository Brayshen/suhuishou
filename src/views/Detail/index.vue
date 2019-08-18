<template>
  <div class="page-detail">
    <h1>{{msg}}</h1>
    <p>{{xinxi+this.$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: "商品的详情页~",
      xinxi: "改详情是---"
    }
  }
}
</script>