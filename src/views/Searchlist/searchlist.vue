<template>
  <!-- 搜索的上半部分 -->
  <div class="page-search">
    <div class="search-box">
      <a href="#" class="z_xiaoyu">
        <em class="icon iconfont iconxiaoyuhao"></em>
      </a>
      <a href="#" class="search-right">
        <em class="icon iconfont icon-fangdajing"></em>
        <span>请输入关键词搜索,修改下</span>
      </a>
      <ul class="search-type">
        <li
          v-for="item in earchlist"
          :key="item.id"
          @click="fn2(item.id,item.pinyin)"
          :class="{'actives':item.id===Searchlist}"
        >{{item.name}}</li>
      </ul>
    </div>
    <!-- 商品的列表页 -->
    <div class="z_product_list">
      <ul class="brands">
        <li
          v-for="item in all"
          :key="item.id"
          :class="{'active': item.id === curBrandId}"
          @click="fn1(item.id)"
        >
          <span class="z_span">{{item.name}}</span>
        </li>
        <li
          v-for="item in logolist"
          :key="item.id"
          :class="{'active':item.id===curBrandId}"
          @click="fn1(item.id)"
        >
          <a href="#">
            <img :src="item.logo" />
          </a>
          <span>{{item.name}}</span>
        </li>
      </ul>
      <!-- 右边列表~ -->
      <div class="z_van_list">
        <div class="z_item">
          <a href="#" class="z_index" v-for="(item,index) in phones" :key="item.goodsId">
            <i class="z_i">{{index+1}}</i>
            <div class="z_img">
              <a href="#">
                <img :src="item.originalImg" />
              </a>
            </div>
            <div class="z_con">
              <p class="z_p_one">{{item.goodsName}}</p>
              <p class="z_p_two">
                回收均价 :
                <span>{{'¥'+item.shopPrice}}</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import request from '../../utils/request'
export default {
  name: "Search",
  data () {
    return {
      Searchlist: 1, //点击搜索的id
      curBrandId: " ", //选择品牌的id
      phones: [], //
      pinyin: " ",
      allId: " ", //控制显示全部高亮的id~
    }
  },
  computed: {
    ...mapGetters('listcity', ['setphonelist', 'citylist', 'logolist', 'earchlist', 'all'])
  },
  methods: {
    ...mapActions('listcity', ['getPhonelist']),
    fn1 (id) {
      this.curBrandId = id;
      this.getPhones();
    },
    fn2 (id, pinyin) {
      this.Searchlist = id;
      this.pinyin = pinyin;
      this.getPhones();
    },
    fn3 (id) {
      this.allId = id;
      this.getallphone();
    },
    getPhones () {
      request.get(`http://localhost:3000/${this.curBrandId}`).then(res => {
        this.phones = res.products;
      });
      request.get(`http://localhost:3000/${this.pinyin}`).then(res => {
        this.phones = res.products;
      });
    },
    // 初始状态下,加载全部的数据
    getallphone () {
      request.get('http://localhost:3000/quanbu').then(res => {
        this.phones = res.products;
      });
    }
  },
  created () {
    this.getPhones(); //这个是默认显示
    this.getPhonelist();
    this.getallphone();   // 初始状态下,加载全部的数据
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
.page-search {
  height: 100%;
}
.z_product_list {
  display: flex;
  height: 100%;
  overflow: hidden;
}
.z_van_list {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  margin-top: 90px;
  background: #f8f8f8;
  overflow-y: auto;
}
.z_item {
  width: 100%;
  height: 90px;
  background: #f8f8f8;
  border-bottom: 1px solid #efefef;

  .z_index {
    display: block;
    display: flex;
    width: 255px;
    height: 70px;
    margin-top: 20px;
    margin-left: 40px;
    background: #f8f8f8;
    box-sizing: border-box;
    position: relative;
    .z_con {
      width: 329px;
      height: 60px;
      margin-left: 10px;
      .z_p_one {
        color: #555;
        font-size: 11px;
        height: 22px;
        line-height: 22px;
      }
      .z_p_two {
        color: #555;
        font-size: 11px;
        height: 22px;
        line-height: 22px;
        span {
          color: red;
        }
      }
    }

    .z_i {
      position: absolute;
      top: 0;
      left: -26px;
      display: block;
      width: 18px;
      height: 18px;
      background: #ccc;
      line-height: 16px;
      text-align: center;
      color: #fff;
    }
    .z_img {
      width: 60px;
      height: 60px;

      a {
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
}
.search-box {
  height: 90px;
  background: #ff4747;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.z_xiaoyu {
  width: 20px;
  height: 21px;
  color: #f6f7f8;
  vertical-align: center;
  margin: 5px 15px;
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
  margin-top: 20px;
  color: #f6f7f8;
  justify-content: space-around;
  position: relative;
  li {
    font-size: 14px;
    &.actives {
      &::before {
        position: absolute;
        bottom: -12px;
        left: 16;
        width: 32px;
        content: '';
        background: #000;
        height: 2px;
        transform: scaleY(0.5);
      }
    }
  }
}
.brands {
  width: 80px;
  background: #fff;
  margin-top: 90px;
  overflow-y: auto;
  li {
    height: 90px;
    text-align: center;
    position: relative;
    &.active {
      background: #f8f8f8;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        content: '';
        width: 1.5px;
        height: 100%;
        background: #3782ff;
      }
    }
    .z_span {
      width: 100%;
      height: 100%;
      display: inline-block;
      line-height: 62px;
    }
    span {
      display: inline-block;
      width: 100%;
      margin-top: 15px;
      font-size: 12px;
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
