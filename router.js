import Vue from 'vue'
import Router from 'vue-router'
import Home from './src/components/Home.vue'
import Biography from './src/components/Biography.vue'
import Works from './src/components/Works.vue'
import Contact from './src/components/Contact.vue'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/biography',
      name: 'biography',
      component: Biography
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
})