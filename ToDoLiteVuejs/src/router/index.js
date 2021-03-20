import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue' ;




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
   path: '/hello',
   name : 'HelloWorld',

   component: () => import('../components/HelloWorld.vue')
   



  },
  {
    path: '/login',
    name : 'Login',
 
    component: () => import('../views/Login.vue')
    
 
 
 
   },
   {
    path: '/inscription',
    name : 'Inscription',
 
    component: () => import('../views/Inscription.vue')
    
 
 
 
   },


 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
