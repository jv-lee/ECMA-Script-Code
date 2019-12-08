import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index1 from '@/pages/demo1/index'
import Index2 from '@/pages/demo2/index'
import Index3 from '@/pages/demo3/index'
import Index4 from '@/pages/demo4/index'
import Index5 from '@/pages/demo5/index'
import Index6 from '@/pages/demo6/index'
import Index7 from '@/pages/demo7/index'
import Index8 from '@/pages/demo8/index'
import Index9 from '@/pages/demo9/index'
import Index10 from '@/pages/demo10/index'
import Index11 from '@/pages/demo11/index'
import Index12 from '@/pages/demo12/index'
import Index13 from '@/pages/demo13/index'
import Index14 from '@/pages/demo14/index'
import Index15 from '@/pages/demo15/index'
import Index16 from '@/pages/demo16/index'
import Index17 from '@/pages/demo17/index'

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
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: Index6
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: Index7
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: Index8
    },
    {
      path: '/demo9/:userId',
      name: 'demo9',
      component: Index9
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: Index10
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: Index11
    },
    {
      path: '/demo12',
      name: 'demo12',
      component: Index12
    },
    {
      path: '/demo13',
      name: 'demo13',
      component: Index13
    },
    {
      path: '/demo14',
      name: 'demo14',
      component: Index14
    },
    {
      path: '/demo15',
      name: 'demo15',
      component: Index15
    },
    {
      path: '/demo16',
      name: 'demo16',
      component: Index16
    },
    {
      path: '/demo17',
      name: 'demo17',
      component: Index17
    }

  ]
})
