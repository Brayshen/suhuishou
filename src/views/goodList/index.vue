<template>
  <div class="page-list">
    <h2>产品列表</h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        <router-link :to="'/detail'+item.id">{{item.text}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "List",
  data () {
    return {
      list: [
        {
          id: 1, name: "A1", text: "A1手机"
        },
        {
          id: 2, name: "A2", text: "A2手机"
        },
        {
          id: 3, name: "A3", text: "A3手机"
        },

      ]
    }
  }
}
</script>