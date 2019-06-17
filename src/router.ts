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
    // {
    //   path: '/rouFocus',
    //   name: 'rouFocus',
    //   // route level code-splitting
    //   // this generates a separate chunk (rouFocus.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "rouFocus" */ './views/rouFocus.vue'),
    // },
    // {
    //   path: '/rouSearch2',
    //   name: 'rouSearch2',
    //   // route level code-splitting
    //   // this generates a separate chunk (rouSearch2.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "rouSearch2" */ './views/rouSearch2.vue'),
    // },
    // {
    //   path: '/rouCook',
    //   name: 'rouCook',
    //   // route level code-splitting
    //   // this generates a separate chunk (rouCook.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "rouCook" */ './views/rouCook.vue'),
    // },
    // {
    //   path: '/rouRecommend',
    //   name: 'rouRecommend',
    //   // route level code-splitting
    //   // this generates a separate chunk (rouRecommend.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "rouRecommend" */ './views/rouRecommend.vue'),
    // },
    // {
    //   path: '/rouBeauty',
    //   name: 'rouBeauty',
    //   // route level code-splitting
    //   // this generates a separate chunk (rouRecommend.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "rouRecommend" */ './views/rouBeauty.vue'),
    // },
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
