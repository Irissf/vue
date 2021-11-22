import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    //otra forma de enrutar poniendo el import dentro
    component: () => import('../views/About.vue')
  },
  {
    path: '/servicios',
    name:'Servicios',
    component:()=>import('../views/Servicios.vue')
  },
  {
    //rutas dinámicas
    path:'/fotos/:id',//:id => una variable
    name:'Fotos',
    component:()=>import('../views/Fotos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
