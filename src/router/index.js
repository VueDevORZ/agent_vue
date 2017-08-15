import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import MyAgent from '@/pages/myAgentAll/myAgent.vue'
import PersonAgent from '@/pages/myAgentAll/person_message.vue'
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
    },
    {
      path: '/myAgentAll/personAgent',
      name: 'PersonAgent',
      component: PersonAgent
    }
  ]
})
