<template>
  <div class="page-home">
    <router-view />
    <Tabbar :tabs="tabs"></Tabbar>
  </div>
</template>
<script>

import Tabbar from '../../components/Tabber/index';
export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data () {
    return {
      tabs: [
        { id: 1, name: '卖手机', icon: 'iconjiu', href: '/maishuoji' },
        { id: 2, name: '换新机', icon: 'iconunie639', href: '/huanshouji' },
        { id: 3, name: '我的', icon: 'iconwode', href: '/my' }

      ]
    }
  }

}
</script>

<style lang="scss">
body,
html {
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
.page-home {
  background: #f8f8f8;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
