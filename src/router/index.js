import Vue from 'vue'
import VueRouter from 'vue-router'
import FormView from '../views/FormView'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView'
import MainView from '../views/MainView'
import UserControl from '../views/UserControl'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/user',
    name: 'user',
    component: UserControl
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
