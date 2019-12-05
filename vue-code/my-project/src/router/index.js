import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index1 from '@/pages/demo1/index'
import Index2 from '@/pages/demo2/index'
import Index3 from '@/pages/demo3/index'
import Index4 from '@/pages/demo4/index'
import Index5 from '@/pages/demo5/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Index1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Index2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: Index3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: Index4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: Index5
    }

  ]
})
