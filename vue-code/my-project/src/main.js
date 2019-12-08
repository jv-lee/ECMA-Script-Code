// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueResource from 'vue-resource'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

// 设置网络请求全局使用
Vue.use(VueResource)
// 设置全局使用MintUi库
Vue.use(MintUi)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
