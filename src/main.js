import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import VueCompositionAPI from '@vue/composition-api'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import '../gen-tools/gen-components' // 自动化注册组件

// set composition api
Vue.use(VueCompositionAPI)

Vue.use(ElementUI, { size: 'medium' })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})
