import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Request from '../views/Request.vue';
import Volunteer from '../views/Volunteer';
import FourHoFour from "../components/FourHoFour";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/aid-request',
    name: 'Request',
    component: Request
  },{
    path: '/volunteer',
    name: 'Volunteer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Volunteer.vue')
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
    path: '/create-req',
    name: 'MobCreateReq',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MobCreateReq.vue')
  },
  {
    path: '/card-detail',
    name: 'MobCardDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MobCardDetail.vue')
  },
  {
    path: '/*',
    component: FourHoFour
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
