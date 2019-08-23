<template>
  <div class="page-login">
    <van-nav-bar title="登录" left-arrow :border="false" @click-left="onClickLeft" />
    <div class="banner">
      <img
        src="https://sr.aihuishou.com/c2b/zy-fe/neom/5Jtb8yxp/static/media/login_banner.8bac3c37.png"
        alt
      />
    </div>
    <div class="tab">
      <span :class="{active: curPage === 'login'}" @click="curPage='login'">快速登录</span>
      <span @click="curPage='logup'" :class="{active: curPage === 'logup'}">账号注册</span>
    </div>
    <div class="input-contanier">
      <div class="single-input">
        <label>账号</label>
        <div class="input-box">
          <input type="text" placeholder="速回收账号" v-model="name" />
        </div>
      </div>
    </div>
    <div class="input-contanier" style="border:none">
      <div class="single-input">
        <label>密码</label>
        <div class="input-box">
          <input type="text" placeholder="密码" v-model="pwd" />
        </div>
      </div>
    </div>
    <div class="login-wrap">
      <div class="add-tip" v-if="curPage === 'logup'">
        <van-checkbox v-model="checked" checked-color="yellow">
          我已详细阅读并同意
          <a href="#">用户协议</a> 和
          <a href>隐私政策</a>
        </van-checkbox>
      </div>
      <div class="btn">
        <span
          class="submit"
          @click="submit"
          :class="{active:isActive}"
        >{{curPage === 'login' ? '登录' : '注册'}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      checked: false,
      curPage: 'login',
      name: '',
      pwd: ''
    }
  },
  watch: {
    curPage () {
      this.checked = false
      this.name = ''
      this.pwd = ''
    }
  },
  computed: {
    ...mapState('login', []),
    isActive () {
      if (this.curPage === 'login') {
        return this.name !== '' && this.pwd !== ''
      } else {
        return this.name !== '' && this.pwd !== '' && this.checked
      }
    }
  },
  methods: {
    ...mapActions('login', ['registerApi', 'loginApi']),
    submit () {
      if (this.curPage === 'login') {
        if (this.name === '' || this.pwd === '') {
          this.$toast.fail('账号和密码不能为空')
        } else {
          this.loginApi({
            username: this.name,
            password: this.pwd,
            success: () => {
              let toPath = this.$route.query.redirect || '/my'
              this.$router.replace(toPath)
            }
          })
        }

      } else {
        if (this.name === '' || this.pwd === '') {
          this.$toast.fail('账号和密码不能为空')
        } else if (!this.checked) {
          this.$toast('请勾选同意下方的用户协议进行注册')
        } else {
          this.registerApi(
            {
              username: this.name,
              password: this.pwd,
              success: () => {
                this.curPage = 'login'
              }
            }
          )
        }


      }
    },
    onClickLeft () {
      //let toPath = this.$route.query.redirect || '/my'
      this.$router.replace('/my')
    }
  },
  created () {
    // this.registerApi({ username: '张三', password: '123' })
  }
}
</script>

<style lang="scss">
.page-login {
  height: 100%;
  display: flex;
  flex-direction: column;
  .van-icon {
    color: rgb(0, 0, 0);
    font-size: 20px;
  }
  .banner {
    padding-bottom: 10px;
    img {
      width: 100%;
    }
  }
  .tab {
    width: 260px;
    height: 28px;
    margin: 0 auto 10px;
    border: 1px solid #f9e72c;
    border-radius: 28px;
    span {
      display: inline-block;
      height: 100%;
      width: 50%;
      text-align: center;
      line-height: 28px;
      font-size: 14px;
      border-radius: 28px;
    }
    span.active {
      background: #f9e72c;
    }
  }
  .input-contanier {
    margin: 0 14px;
    border-bottom: 1px solid #eee;
    position: relative;
    .single-input {
      box-sizing: border-box;
      height: 48px;
      background: #fff;
      line-height: 32px;
      padding: 8px 0;
      label {
        font-size: 14px;
        color: #333;
        width: 73px;
        margin-right: -73px;
        float: left;
      }
      .input-box {
        padding: 0 20px 0 73px;
        float: left;
        position: relative;
        line-height: 32px;
        input {
          font-size: 14px;
          border: none;
          padding: 5px 0 6px;
          display: block;
          width: 100%;
          height: 32px;
          outline: none;
          box-sizing: border-box;
        }
      }
    }
  }
  .login-wrap {
    background: #f9faff;
    flex: 1;
    padding-top: 10px;
  }
  .van-checkbox {
    padding: 15px;
    font-size: 12px;
    .van-icon {
      font-size: 15px;
      color: #fff;
      margin-top: 2px;
    }
    a {
      color: #1380ff;
    }
  }
  .btn {
    .submit {
      font-size: 14px;
      color: #999;
      display: block;
      margin: 0 14px;
      height: 38px;
      line-height: 36px;
      border-radius: 4px;
      background: #e6e6e6;
      border: 1px solid #e6e6e6;
      text-align: center;
      &.active {
        color: #333;
        background: #ffe225;
        border: 1px solid #ffe225;
      }
    }
  }
}
</style>
