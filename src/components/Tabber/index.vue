<template>
  <ul class="Tabbar">
    <li v-for="tab in tabs" :key="tab.id">
      <router-link :to="tab.href" class="z_tabber_a">
        <i class="iconfont" :class="[tab.icon]"></i>
        <span>{{tab.name}}</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {

  name: "Tabbar",
  props: {
    tabs: {
      type: Array
    }
  }
}
</script>

<style lang="scss" >
.Tabbar {
  display: flex;
  height: 53px;
  // position: relative;
  box-sizing: border-box;
  // &::before {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   content: "";
  //   background: rgba(134, 130, 130);
  //   height: 1px;
  //   transform: scaleY(0.5);
  // }
  box-shadow: 0 0 2px rgba(134, 130, 130);
}
li {
  list-style: none;
  flex: 1;
}
.z_tabber_a {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  text-decoration: none;
  color: #ababab;
  i {
    font-size: 30px;
  }
  span {
    font-size: 14px;
  }
  font-size: 20px;
  &.router-link-active {
    color: #f9415d;
  }
}
</style>
