import Vue from 'vue'
import App from './App.vue'

//三级联动组件--全局组件
import TypeNav from '@/pages/Home/TypeNav'

import router from '@/router'
Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
