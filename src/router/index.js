import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Team from '@/components/Team.vue'
import Contact from '@/components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
}) 