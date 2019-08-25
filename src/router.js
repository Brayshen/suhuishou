//1.引入Vue
import Vue from 'vue'
// 2.引入 VueRouter
import VueRouter from 'vue-router'
// 3.调用 VueRouter
Vue.use(VueRouter)

// 定义路由规则:
const routes = [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import('./views/Home/index.vue'),
    children: [
      {
        path: 'maishuoji',
        component: () => import('./views/Home/maishuoji.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'huanshouji',
        component: () => import('./views/Home/huanshouji.vue'),
        meta: {
          title: '换手机页'
        }
      },
      {
        path: 'my',
        component: () => import('./views/Home/my.vue'),
        meta: {
          title: '个人中心页'
        }
      },
      {
        path: '',
        redirect: '/maishuoji'
      }
    ]
  },
  {
    path: '/login',
    component: () => import('./views/Login/index.vue'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/city',
    component: () => import('./views/City/city.vue'),
    meta: {
      title: '城市页'
    }
  },
  {
    path: '/center',
    component: () => import('./views/Center/center.vue'),
    meta: {
      title: '个人中心页'
    }
  },
  {
    path: '/huishou',
    component: () => import('./views/Huishou/index.vue'),
    meta: {
      title: '收回页'
    }
  },
  {
    path: '/detail:id',
    component: () => import('./views/Detail/index.vue'),
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/goodlist',
    component: () => import('./views/goodList/index.vue'),
    meta: {
      title: '产品列表页'
    }
  },
  {
    path: '/searchlist',
    component: () => import('./views/Searchlist/searchlist.vue'),
    meta: {
      title: '城市搜索页'
    }
  }
]

// 5. 创建 路由实例对象
const router = new VueRouter({
  routes
})

// 6. 暴露
export default router
