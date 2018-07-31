import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import supplierScore from '@/components/supplierScore'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'supplierScore',
          name: 'supplierScore',
          component: supplierScore,
        }
      ]
    }
  ]
})
