<template>
  <div class="page-server">
    <div v-for="item in content" :key="item.id">
      <a
        href="http://p.qiao.baidu.com/cps/chat?siteId=12638012&userId=19500085&cp=m.suhuishou.com&cr=&cw=kefu"
        class="iconfont"
        :class="[item.icon]"
      ></a>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Kefu",
  props: {
    content: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
.page-server {
  width: 78px;
  height: 58px;
  background: #fff;
  box-shadow: 0 0 0.066667rem #ccc;
  position: fixed;
  top: 400px;
  left: 297px;
  z-index: 2;
  text-align: center;
  padding-top: 10px;
  opacity: 0.8;
  border-top-left-radius: 37px;
  border-bottom-left-radius: 37px;

  a {
    display: block;
    font-size: 25px;
    color: #ff4447;
  }
  span {
    color: #ff4447;
    font-size: 14px;
  }
}
</style>