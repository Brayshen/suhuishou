<template>
  <div class="page-goodList">
    <div id="hot-Model">
      <div class="hot-Model_t">
        <i class="iconfont iconarrow_left"></i>
        <h5>产品列表</h5>
      </div>
      <div class="hot-Model_b">
        <ul>
          <li v-for="(item, index) in 8" :key="index">
            <div class="hot-Model_b_img">
              <img
                src="https://image.suhuishou.com/attached/image/20190615/20190615104859_71428.png"
              />
              <span class="discount_text">-¥150</span>
              <span class="discount_btn"></span>
            </div>
            <div class="hot-Model_b_info">
              <div class="hot-Model_title">vivo Y93s</div>
              <div class="hot-Model_price">
                新机价格
                <span>
                  <span>¥</span>1398.00
                </span>
              </div>
              <div class="hot-Model_bonusprice">享环保补助金</div>
              <button class="hot-Model_btn">去换新</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
function resetZoom () {
  var designWidth = 414 // 设计稿宽度，需根据设计稿进行调整
  var deviceWidth = document.documentElement.clientWidth // 设备宽度
  var scale = deviceWidth / designWidth
  document.body.style.zoom = scale
}
resetZoom()
window.onresize = function () {
  resetZoom()
}
</script>
<style lang="scss" scoped>
.page-goodList {
  #hot-Model {
    .hot-Model_t {
      width: 100%;
      height: 60px;
      position: relative;
      .iconarrow_left {
        position: absolute;
        left: 10px;
        top: 10px;
      }
      h5 {
        text-align: center;
        margin-top: 20px;
      }
    }
    .hot-Model_b {
      width: 100%;
      ul {
        width: 100%;
        overflow: hidden;
        li {
          width: 180.1px;
          height: 254px;
          float: left;
          box-shadow: 0px 0px 2px #eee;
          box-sizing: border-box;
          z-index: 999;
          margin: 8px;
          .hot-Model_b_img {
            height: 88px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;
            overflow: hidden;
            img {
              width: 88px;
              height: 88px;
            }
            .discount_btn {
              width: 74px;
              height: 40px;
              position: absolute;
              right: -29px;
              top: -14px;
              border-radius: 20px;
              background: #fa5770;
            }
            .discount_text {
              display: block;
              z-index: 999;
              color: #fff;
              position: absolute;
              right: 0;
              top: 0;
              font-size: 15px;
            }
          }
          .hot-Model_b_info {
            height: 166px;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            .hot-Model_title {
              font-weight: 800;
            }
            .hot-Model_price {
              color: #999999;
              span {
                color: #f9415d;
              }
            }
            .hot-Model_bonusprice {
              color: #fa6d82;
            }
            .hot-Model_btn {
              border: none;
              width: 100px;
              height: 30px;
              border-radius: 15px;
              background: #fa4762;
              text-align: center;
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
