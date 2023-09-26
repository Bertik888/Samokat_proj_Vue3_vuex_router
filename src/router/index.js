import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/product/:product_id',
    name: 'productPage',
    component: ProductPage
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('@/pages/ExamplePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
