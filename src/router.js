//1.引入Vue
import Vue from 'vue'
// 2.引入 VueRouter
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 3.调用 VueRouter
Vue.use(VueRouter)

// 定义路由规则:
const routes = [
  {
    path: '/',
    component: () => import('./views/Home/index.vue'),
    children: [
      {
        path: 'maishuoji',
        component: () => import('./views/Home/maishuoji.vue'),
        meta: {
          title: '速回收'
        }
      },
      {
        path: 'huanshouji',
        component: () => import('./views/Home/huanshouji.vue'),
        meta: {
          title: '换手机'
        }
      },
      {
        path: 'my',
        component: () => import('./views/Home/my.vue'),
        meta: {
          title: '个人中心'
        }
      },
      {
        path: '',
        redirect: '/maishuoji'
      }
    ]
  },
  {
    path: '/wallet',
    component: () => import('./views/Wallet/index.vue'),
    meta: {
      title: '钱包',
      needLogin: true
    }
  },
  {
    path: '/card',
    component: () => import('./views/Card/index.vue'),
    meta: {
      title: '卷包',
      needLogin: true
    }
  },
  {
    path: '/bankcard',
    component: () => import('./views/Bankcard/index.vue'),
    meta: {
      title: '银行卡',
      needLogin: true
    }
  },
  {
    path: '/myset',
    component: () => import('./views/Myset/index.vue'),
    meta: {
      title: '设置',
      needLogin: true
    }
  },
  {
    path: '/login',
    component: () => import('./views/Login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/city',
    component: () => import('./views/City/city.vue'),
    meta: {
      title: '城市选择'
    }
  },
  {
    path: '/huishou',
    component: () => import('./views/Huishou/index.vue'),
    meta: {
      title: '以旧换新首页'
    }
  },
  {
    path: '/detail:id',
    component: () => import('./views/Detail/index.vue'),
    meta: {
      title: '产品详情'
    }
  },
  {
    path: '/goodlist',
    component: () => import('./views/goodList/index.vue'),
    meta: {
      title: '产品列表'
    }
  },
  {
    path: '/searchlist',
    component: () => import('./views/Searchlist/searchlist.vue'),
    meta: {
      title: '城市搜索页'
    }
  },
  {
    path: '/search',
    component: () => import('./views/Search/index.vue'),
    meta: {
      title: '机型搜索'
    }
  }
]

// 5. 创建 路由实例对象
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.needLogin) {
    if (window.localStorage.getItem('user')) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  NProgress.done()
  let title = to.meta.title
  document.title = title
})

// 6. 暴露
export default router
