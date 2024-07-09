import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import MainBox from '@/views/MainBox.vue'
import Home from '@/views/home/Home.vue'
import Center from '@/views/center/Center.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: MainBox,
  },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.addRoute("mainbox", {
  path: '/index',
  component:Home
})
router.addRoute("mainbox", {
  path: '/center',
  component:Center
})


export default router
