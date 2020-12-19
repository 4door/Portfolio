import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import toasted from 'vue-toasted';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from '../router';

Vue.config.productionTip = false;
Vue.use(toasted,Option);
Vue.use(BootstrapVue);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
