import Vue from 'vue'
import VueCookie from 'vue-cookie';
import App from './App.vue'
import store from '../store'
import vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false
Vue.use(VueCookie);

new Vue({
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')