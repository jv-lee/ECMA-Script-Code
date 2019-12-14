import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import vueLazyload from 'vue-lazyload'

import 'assets/scss/index.scss'
import 'swiper/dist/css/swiper.css'

// 消除所有点击事件的300ms延迟
fastclick.attach(document.body)

// 懒加载组件
Vue.use(vueLazyload, {
  preLoad: 1,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1 // 尝试加载几次
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
