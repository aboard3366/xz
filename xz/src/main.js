import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader.vue'
Vue.config.productionTip = false

Vue.component("my-header",MyHeader)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
