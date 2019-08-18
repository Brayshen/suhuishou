import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { NavBar } from "vant";

Vue.config.productionTip = false;
Vue.use(NavBar);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
