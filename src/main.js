import Vue from 'vue'
import App from './App.vue'
import router from './router'

//import VeeValidate from 'vee-validate';  // Add this
//Vue.use(VeeValidate);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false

