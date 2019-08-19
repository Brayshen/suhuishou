//1.引入Vue
import Vue from "vue";
// 2.引入 VueRouter
import VueRouter from "vue-router";
// 3.调用 VueRouter
Vue.use(VueRouter);

// 定义路由规则:
const routes = [
  {
    path: "/",
    component: () => import("./views/Home/index.vue"),
    children: [
      {
        path: "maishuoji",
        component: () => import("./views/Home/maishuoji.vue")
      },
      {
        path: "huanshouji",
        component: () => import("./views/Home/huanshouji.vue")
      },
      {
        path: " ",
        redirect: "/huanshouji"
      }
    ]
  },
  {
    path: "/my",
    component: () => import("./views/Home/my.vue")
  },
  {
    path: "/login",
    component: () => import("./views/Login/index.vue")
  },
  {
    path: "/city",
    component: () => import("./views/City/city.vue")
  },
  {
    path: "/center",
    component: () => import("./views/Center/center.vue")
  },
  {
    path: "/huishou",
    component: () => import("./views/Huishou/index.vue")
  },
  {
    path: "/detail:id",
    component: () => import("./views/Detail/index.vue")
  },
  {
    path: "/goodlist",
    component: () => import("./views/goodList/index.vue")
  },
  {
    path: "/searchlist",
    component: () => import("./views/Searchlist/searchlist.vue")
  }
];

// 5. 创建 路由实例对象
const router = new VueRouter({
  routes
});

// 6. 暴露
export default router;
