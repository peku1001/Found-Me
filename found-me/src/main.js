import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

/* if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../src/registerServiceWorker.js')
    .then(() => console.log('Service worker registered'))
    .catch((error) => console.log('service worker not registered', error))
} */
