import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  base: '/agent',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '小乐爱心天使'
      }
    },
    {
      path: '/center',
      name: 'center',
      component: () => import(/* webpackChunkName: "center" */ '../views/center.vue'),
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/centerInfo',
      name: 'centerInfo',
      component: () => import(/* webpackChunkName: "centerInfo" */ '../views/centerInfo.vue'),
      meta: {
        title: '个人信息'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
