import Vue from 'vue'
import App from './App.vue'

//三级联动组件--全局组件
import TypeNav from '@/pages/Home/TypeNav'
vue.component(TypeNav.name, TypeNav);

import router from '@/router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
