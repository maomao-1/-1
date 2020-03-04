/*
 * @Author: your name
 * @Date: 2020-03-04 09:26:38
 * @LastEditTime: 2020-03-04 11:01:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmpygd:\前端文件\就业班\就业班\Vue进阶\11111\新建文件夹\hm-toutiao-pc-911\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
