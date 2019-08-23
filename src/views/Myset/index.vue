<template>
  <div class="page-myset">
    <van-nav-bar title="账户管理" left-arrow :border="false" @click-left="$router.replace('/my')" />
    <div class="infoList">
      <dl>
        <dt>账户信息</dt>
        <dd>
          <ul>
            <li>
              <div class="basic-info">
                <p class="title">头像</p>

                <div class="info">
                  <!-- <img :src="userInfo ? userInfo.log : '' " /> -->
                  <img :src="userInfo.log" />
                </div>
                <van-uploader :after-read="afterRead" />
              </div>
            </li>
            <li @click="isOpen = true">
              <div class="basic-info">
                <p class="title">用户名</p>
                <!-- <div class="info">{{userInfo ? userInfo.username : ''}}</div> -->
                <div class="info">{{userInfo.username}}</div>
              </div>
              <div class="operations">更换</div>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>安全设置</dt>
        <dd>
          <ul>
            <li @click="isOpen = true, ispwd = true">
              <div class="basic-info">
                <p class="title">登录密码</p>
              </div>
              <div class="operations">修改</div>
            </li>
            <li @click="not">
              <div class="basic-info">
                <p class="title">提现密码</p>
              </div>
              <div class="operations" style="color:#fc6232">未设置</div>
            </li>
            <li @click="not">
              <div class="basic-info">
                <p class="title" style="width:auto;">实名认证（保障资金安全）</p>
              </div>
              <div class="operations" style="color:#fc6232">未认证</div>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="button" @click="isQuit">退出当前账号</div>
    <div class="mask-container" v-if="isOpen">
      <div class="inner-container">
        <div class="modal-content">
          <h2>{{ispwd ? '修改密码' : '修改用户名'}}</h2>
          <template v-if="ispwd">
            <van-field v-model="password" placeholder="请输入旧密码" />
            <van-field v-model="newpassword" placeholder="请输入新密码" />
          </template>
          <van-field v-model="newusername" placeholder="请输入新用户名" v-else />

          <div class="take-button" @click="setuser">确认修改</div>
        </div>
        <div
          class="close-icon"
          @click=" isOpen = false, newusername = '', ispwd = false ,password = '',newpassword=''"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request.js'
import { Toast } from 'vant'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'myset',
  data () {
    return {
      isOpen: false,
      ispwd: false,
      newusername: '',
      password: '',
      newpassword: ''
    }
  },
  computed: {
    ...mapState('login', ['userInfo'])
  },
  methods: {
    ...mapMutations('login', ['quit', 'setname', 'setlog']),
    isQuit () {
      this.quit()
      this.$router.replace('/my')

      Toast.success('已退出账号')
    },
    setuser () {
      if (this.ispwd) {
        //修改密码
        if (!this.password || !this.newpassword) {
          Toast('密码不能为空')
          return
        }
        if (this.password === this.newpassword) {
          Toast('新密码与旧密码一致')
          return
        }
        request.post('http://localhost:9090/api/set-password', {
          username: this.userInfo.username,
          password: this.password,
          newpassword: this.newpassword
        }).then(res => {
          if (res.code === 0) {
            this.$router.replace('/login')
            Toast(res.msg)
            this.quit()
          } else {
            Toast('密码错误')
          }
        })

      } else {
        // 修改用户名
        if (!this.newusername) {
          Toast('用户名不能为空')
          return
        }
        if (this.newusername === this.userInfo.username) {
          Toast('用户名与当前一致')
          return
        }
        request.post('http://localhost:9090/api/set-name', {
          username: this.userInfo.username,
          newusername: this.newusername
        }).then(res => {
          if (res.code === 0) {
            Toast(res.msg)
            this.setname(res.data.newusername)
            let obj = JSON.parse(window.localStorage.getItem('user'))
            obj.username = res.data.newusername
            window.localStorage.setItem('user', JSON.stringify(obj))
            this.isOpen = false
          } else {
            Toast(res.msg)
          }
        })
      }
    },
    not () {
      Toast('暂不支持')
    },
    afterRead (file) {
      let formData = new FormData()
      formData.append('avatar', file.file)
      request.post('http://localhost:9090/api/user/update', formData, {
        contentType: false,
        processData: false,
      }).then(res => {
        this.setlog(res.data)
        Toast('修改成功')
        let obj = JSON.parse(window.localStorage.getItem('user'))
        obj.log = res.data
        window.localStorage.setItem('user', JSON.stringify(obj))
      })

    }
  }
}
</script>

<style lang="scss">
.page-myset {
  display: flex;
  flex-direction: column;
  height: 100%;
  .van-nav-bar {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
    .van-icon {
      color: #111;
      font-size: 20px;
    }
  }
  .infoList {
    flex: 1;
    background: #f5f5f5;
  }
  .infoList > dl {
    dt {
      font-size: 13px;
      color: #666;
      height: 40px;
      line-height: 40px;
      text-indent: 15px;
    }
    dd {
      background-color: #fff;
      padding-left: 15px;
      li {
        position: relative;
        border-bottom: 1px solid #f2f2f2;
        height: 55px;
        overflow: hidden;
        display: flex;
        font-size: 15px;
        align-items: center;
        color: #757575;
        .basic-info {
          flex: 1 1;
          display: flex;
          height: 100%;
          -ms-flex-align: center;
          align-items: center;
          .title {
            color: #333;
            width: 65px;
          }
          .info {
            flex: 1 1;
            display: flex;
            align-items: center;
            img {
              width: 36px;
              height: 36px;
            }
          }
        }
        .operations {
          height: 100%;
          padding-right: 40px;
          position: relative;
          display: flex;
          align-items: center;
          &::after {
            content: '';
            background-image: url('https://sr.aihuishou.com/c2b/zy-fe/neom/5JtbpADb/static/media/icons_wallet.a3d7b480.png');
            background-size: 375px 667px;
            background-position: -115px -161px;
            background-repeat: no-repeat;
            position: absolute;
            width: 7px;
            height: 12px;
            top: 22px;
            right: 16px;
          }
        }
      }
    }
  }
  .button {
    font-size: 18px;
    color: #333;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 100%;
    max-width: 750px;
    height: 50px;
    background-color: #fcdb00;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mask-container {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 101;
    .inner-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
    }
    .modal-content {
      background-color: #fff;
      border-radius: 0 0 4px 4px;
      padding-bottom: 25px;
      overflow: hidden;
      h2 {
        font-size: 20px;
        color: #000;
        text-align: center;
        margin: 20px 0;
      }
      .van-field__control {
        font-size: 18px;
        text-align: center;
      }
      .take-button {
        width: 230px;
        height: 35px;
        background: #3ba776;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #111;
        font-weight: 500;
        margin: 37px auto 0;
      }
    }
    .close-icon {
      width: 28px;
      height: 28px;
      background-image: url('../../assets/close.png');
      background-size: cover;
      background-repeat: no-repeat;
      margin: 23px auto 0;
    }
  }
  .van-uploader__upload {
    width: 50px;
    height: 50px;
    margin: 0 15px 0 0;
  }
}
</style>
