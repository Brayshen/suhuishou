import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar, Icon, Checkbox, CheckboxGroup } from 'vant'
import './assets/styles/base.scss'

Vue.config.productionTip = false
Vue.use(NavBar)
  .use(Icon)
  .use(Checkbox)
  .use(CheckboxGroup)

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
