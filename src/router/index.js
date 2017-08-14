import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyAgent from '@/components/myAgentAll/myAgent.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/myAgentAll/myAgent',
      name: 'MyAgent',
      component: MyAgent
    }
  ]
})
