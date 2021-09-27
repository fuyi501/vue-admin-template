import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入全局 css
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons' // 引入自定义 svg icon 文件
import '@/permission' // permission control

// 开发环境下使用
// if (process.env.NODE_ENV === 'development') {
const { mockXHR } = require('../mock')
mockXHR()
// }

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
