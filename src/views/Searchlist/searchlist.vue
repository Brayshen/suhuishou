<template>
  <!-- 搜索的上半部分 -->
  <div class="page-search">
    <div class="search-box">
      <a href="#" class="z_xiaoyu">
        <em class="icon iconfont iconxiaoyuhao"></em>
      </a>
      <a href="#" class="search-right">
        <em class="icon iconfont icon-fangdajing"></em>
        <span>请输入关键词搜索</span>
      </a>
      <ul class="search-type">
        <li>手机</li>
        <li>平板</li>
        <li>笔记本</li>
        <li>台式机</li>
        <li>相机</li>
        <li>手表</li>
      </ul>
    </div>
    <!-- 商品的列表页 -->
    <div class="z_product_list">
      <ul class="brands">
        <li>
          <span class="z_span">全部</span>
        </li>
        <li v-for="item in 30">
          <a href="#">
            <img src="https://images.suhuishou.com/FoLqQKEq7BXWUKBBw6LODCOVtfJW" />
          </a>
          <span>苹果</span>
        </li>
      </ul>
      <div class="z_item"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data () {
    return {
      lists: [
        {
          icon: "iconxiaoyuhao"
        }
      ]
    }
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
.z_product_list {
  display: flex;
  overflow: hidden;
}
.z_item {
  display: flex;
  flex: 1;
  margin-top: 10px;
  background: #f8f8f8;
  overflow-y: auto;
}
.page-search {
  height: 100%;
  background: #ff4747;
}
.z_xiaoyu {
  width: 20px;
  height: 21px;
  color: #f6f7f8;
  vertical-align: center;
  margin: 5px 6px;
  i {
    font-size: 16px;
  }
}
.search-right {
  display: inline-block;
  width: 300px;
  height: 30px;
  background: #f6f7f8;
  margin-top: 10px;
  border-radius: 3px;
  span {
    color: #555;
    font-size: 14px;
  }
  em {
    font-size: 23px;
    color: #555;
    box-sizing: border-box;
    margin: 3px 8px;
  }
}
.search-type {
  height: 16px;
  display: flex;
  margin-top: 24px;
  color: #f6f7f8;
  justify-content: space-around;
  position: relative;
  li {
    &::before {
      position: absolute;
      bottom: -10px;
      left: 16;
      width: 32px;
      content: "";
      background: #000;
      height: 2px;
      transform: scaleY(0.5);
    }
  }
}
.brands {
  width: 80px;
  background: #fff;
  margin-top: 10px;
  overflow-y: auto;
  li {
    height: 90px;
    text-align: center;
    .z_span {
      width: 100%;
      height: 100%;
      display: inline-block;
      line-height: 90px;
    }
    span {
      display: inline-block;
    }
    a {
      img {
        width: 50px;
        height: 40px;
      }
    }
    border-bottom: 1px solid #efefef;
  }
}
</style>

