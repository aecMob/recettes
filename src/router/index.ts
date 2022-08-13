import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
//import AccueilPage from '../views/AccueilPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Accueil'
  },
  {
    path: '/folder/Accueil',
    component: () => import ('../views/AccueilPage.vue')
  },
  {
    path: '/recette/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
