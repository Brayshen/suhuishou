<template>
  <div class="info">
    <div class="item" v-for="(item, index) in test" :key="index">
      <a href>
        <div class="img" :style=item.bg></div>
        <div class="con">
          <p class="txtA">{{item.title}}</p>
          <p class="txtB">{{item.content}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'autoself',
  props: {
    test: Array
  }
}
</script>
