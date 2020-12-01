import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './quasar'
import {
  Quasar,
  QAvatar,
  QForm
} from 'quasar'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Quasar, {
  components: {
    QAvatar,
    QForm
  }
})
