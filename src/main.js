// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ZkTable from 'vue-table-with-tree-grid'
Vue.use(ZkTable)
import Axios from 'axios'
Vue.prototype.$http = Axios
// 引入 iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import 'babel-polyfill'
Vue.use(iView)
// 引入 element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)
// import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

// 引入vuex
import store from './vuex/store.js'

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// 引入 vue-i8n
import VueI18n from 'Static/vue-i18n.min.js'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ja', // 语言标识
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store, // 使用vuex
  template: '<App/>',
  components: { App }
})
