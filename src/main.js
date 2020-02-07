import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css';
import './assets/css/styles.css';
import './assets/css/icons.css'

Vue.use(VueNoty);

Vue.config.productionTip = false

const authData = localStorage.getItem("auth")

new Vue({ 
  router,
  
  data: {
    auth: authData ? JSON.parse(authData) : {}
  },
  render: h => h(App),
}).$mount('#app')
