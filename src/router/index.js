import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../components/home/Home'
// import Home from '../components/HelloWorld'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  , {
    path: '/one',
    name: 'one',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeoView.vue')
  }
  ,
  {
    path: '/MyTest',
    name: 'MyTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyTest.vue')
  }



]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',//js报错，试一下这个方式
  // base: process.env.BASE_URL,
  base:'/admin/',
  routes
})

export default router
