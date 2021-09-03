/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-06-05 11:45:02
 * @LastEditTime: 2021-08-17 10:49:24
 */
import '@babel/polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
// vxe-table
import 'xe-utils'
import VXETable from 'vxe-table'
import VXETablePluginElement from 'vxe-table-plugin-element'

import '@/config/global'
import '@/lin/mixin'
import '@/lin/filter'
import '@/lin/plugin'
import '@/lin/directive'

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import LinNotify from '@/component/notify'
import router from '@/router'
import store from '@/store'
import App from '@/app.vue'

import StickyTop from '@/component/base/sticky-top/sticky-top'
import LIcon from '@/component/base/icon/lin-icon'
import SourceCode from '@/component/base/source-code/source-code'

import '@/assets/style/index.scss' // eslint-disable-line
import '@/assets/style/realize/element-variable.scss'
import 'element-ui/lib/theme-chalk/display.css'
import 'vxe-table/lib/style.css'
import 'vxe-table-plugin-element/dist/style.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(LinNotify, {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
})
VXETable.use(VXETablePluginElement)
Vue.use(VXETable)
Vue.component(CollapseTransition.name, CollapseTransition)

// base 组件注册
Vue.component('sticky-top', StickyTop)
Vue.component('l-icon', LIcon)
Vue.component('source-code', SourceCode)

/* eslint no-unused-vars: 0 */
const AppInstance = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// 设置 App 实例
window.App = AppInstance
