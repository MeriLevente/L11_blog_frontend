import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/user/LoginView.vue'
import RegistratitonView from '@/views/user/RegistratitonView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/regisztracio',
      name: 'reg',
      component: RegistratitonView,
    },
    {
      path: '/bejelentkezes',
      name: 'bej',
      component: LoginView,
    },
  ],
})

export default router
