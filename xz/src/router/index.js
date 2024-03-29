import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Details from '../views/Details.vue'
import Products from '../views/Products.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
