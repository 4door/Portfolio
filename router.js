import Vue from 'vue'
import Router from 'vue-router'
import Home from './src/components/Home.vue'
import Biography from './src/components/Biography.vue'
import Work from './src/components/Work.vue'
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
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})