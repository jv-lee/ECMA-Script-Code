import Vue from 'vue'
import Router from 'vue-router'
import Product from 'pages/product'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '/home',
    component: () => import('pages/home'), // 动态加载 - 懒加载
    children: [{
      name: 'home-product',
      path: 'product/:id',
      component: Product
    }]
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('pages/category')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart')
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('pages/personal')
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('pages/search')
  },
  {// 配置路径不正确直接定向到home页面
    path: '*',
    redirect: '/home'
  }
]

export default new Router({
  routes
})
