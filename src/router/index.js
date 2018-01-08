import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Survey from '@/components/survey'
import Tree from 'Page/tree'
import Treegrid from '@/components/treegrid'
import example from '@/components/example.vue'
import Home from '@/pages/home.vue'
import Vuex from '@/pages/testVuex.vue'
import testChild from '@/pages/testChild.vue'
import english from '@/pages/translate.vue'
import Mock from '@/pages/testMock.vue'
import Jsx from '@/pages/jsx.vue'
import Select from '@/pages/testSelect.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/treegrid',
      name: 'treegrid',
      component: Treegrid
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex
    },
    {
      path: '/child',
      component: testChild
    },
    {
      path: '/en',
      component: english
    },
    {
      path: '/mock',
      component: Mock
    },
    {
      path: '/jsx',
      component: Jsx
    },
    {
      path: '/select',
      component: Select
    }
  ]
})
