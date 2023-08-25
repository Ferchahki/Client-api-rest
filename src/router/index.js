import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashborad from '../views/Dashborad.vue'
import Singin from '../views/Sing.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashborad',
    name: 'Dashborad',
    component: Dashborad

  },
  {
    path: '/singin',
    name: 'Singin',
    component: Singin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
