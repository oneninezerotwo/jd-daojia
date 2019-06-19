import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import rouSearch from './views/rouSearch.vue';
import login from './views/login.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/rouSearch',
      name: 'rouSearch',
      // route level code-splitting
      // this generates a separate chunk (rouSearch.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "rouSearch" */ './views/rouSearch.vue'),
    },
    {
      path: '/Search',
      name: 'Search',
      // route level code-splitting
      // this generates a separate chunk (rouSearch.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "rouSearch" */ './views/Search.vue'),
    },
    {
      path: '/rouCart',
      name: 'rouCart',
      // route level code-splitting
      // this generates a separate chunk (rouCart.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "rouCart" */ './views/rouCart.vue'),
    },
    {
      path: '/rouOrder',
      name: 'rouOrder',
      // route level code-splitting
      // this generates a separate chunk (rouOrder.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "rouOrder" */ './views/rouOrder.vue'),
    },
    {
      path: '/rouMine',
      name: 'rouMine',
      // route level code-splitting
      // this generates a separate chunk (rouMine.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "rouMine" */ './views/rouMine.vue'),
    },
  
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (Register.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Register" */ './views/Register.vue'),
    },
    {
      path: '/Jdetail',
      name: 'Jdetail',
      // route level code-splitting
      // this generates a separate chunk (Jdetail.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Jdetail" */ './views/Jdetail.vue'),
    },
    {
      path: '/Goodsdetail',
      name: 'goodsdetail',
      // route level code-splitting
      // this generates a separate chunk (Jdetail.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Jdetail" */ './views/Goodsdetail.vue'),
    }
  ],
});
