import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import UpdateView from '../views/UpdateView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/add', name: 'add', component: AddView },
  { path: '/update/:id', name: 'update', component: UpdateView, props: true },
  { path: '/detail/:id', name: 'detail', component: DetailView, props: true },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
