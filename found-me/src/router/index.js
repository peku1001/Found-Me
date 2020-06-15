import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FullMap from '../views/Full_Map.vue'
import Discover from '../views/Discover.vue'
import AddPlaces from '../views/Add_Places.vue'
import Categories from '../views/Categories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/full-map',
    name: 'Full_Map',
    component: FullMap

  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/add-places',
    name: 'Add_Places',
    component: AddPlaces
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
