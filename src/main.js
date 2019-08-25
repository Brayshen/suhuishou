import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { NavBar, Icon, Checkbox, CheckboxGroup, Sticky } from 'vant'
import './assets/styles/base.scss'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.use(NavBar)
  .use(Icon)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Sticky)

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
