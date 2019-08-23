import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  NavBar,
  Icon,
  Checkbox,
  CheckboxGroup,
  Toast,
  Popup,
  Field,
  Tab,
  Tabs,
  Uploader
} from 'vant'
import './assets/styles/base.scss'
//window.isLogin = false
Vue.config.productionTip = false
Vue.use(NavBar)
  .use(Icon)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Toast)
  .use(Popup)
  .use(Field)
  .use(Tab)
  .use(Tabs)
  .use(Uploader)
new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
