// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ZkTable from 'vue-table-with-tree-grid'
Vue.use(ZkTable)
import Axios from 'axios'
Vue.prototype.$http = Axios
import 'babel-polyfill'
// 引入 iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
// 引入 element-ui
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementUI)

Vue.config.productionTip = false

// 引入vuex
import store from './vuex/store.js'

// 引入 vue-i8n
import VueI18n from 'Static/vue-i18n.min.js'
import messages from 'Static/messages/messages.js'
Vue.use(VueI18n)
let language = 'zh_CN'
const i18n = new VueI18n({
  locale: language, // 语言标识
  messages
})

let moment = require('moment')
console.log(moment().format())

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store, // 使用vuex
  template: '<App/>',
  components: { App }
})
