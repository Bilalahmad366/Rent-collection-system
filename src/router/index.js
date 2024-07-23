import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dashboard from '../views/dashboard.vue'
import property from '../components/Addproperty.vue'
import Addrent from '../components/Addrent.vue'
import update from '../components/update.vue'
import updaterent from '../components/updaterent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/Addproperty',
      name: 'property',
      component: property
    },
    {
      path: '/Addrent',
      name: 'Addrent',
      component: Addrent
    },
    {
      path: '/update/:id',
      name: 'update',
      component: update
    },
    {
      path: '/updaterent/:id',
      name: 'updaterent',
      component: updaterent
    }
  ]
})

export default router
