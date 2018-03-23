import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import welcome from '@/components/welcome'
import customList from '@/components/customList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/welcome',
      component: welcome
    },
    {
      path: '/customList',
      component: customList
    }
  ]
})
