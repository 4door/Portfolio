import Vue from 'vue'
import Router from 'vue-router'
import Home from './src/components/Home.vue'
import About from './src/components/About.vue'
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
      path: '/about',
      name: 'about',
      component: About
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