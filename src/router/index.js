import Vue from 'vue'
import Router from 'vue-router'
import resume from '@/components/resume'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/resume'
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
