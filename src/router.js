/* eslint-disable no-console */
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

// Faz o Lazy Loading do component.
// const Home = () => import(/* webpackChunkName: "info" */'@/pages/Home/Home.vue');
// const Login = () => import(/* webpackChunkName: "info" */'@/pages/Login/Login.vue');
// const Info = () => import(/* webpackChunkName: "info" */'./components/info/Info.vue');

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */'@/pages/Home/Home.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */'@/pages/Login/Login.vue')
  },
  /* {
    path: '/info',
    component: Info,
    props: true,
  }, */
  {
    path: '/*',
    redirect: '/'
  }
];

const router = new Router({
  routes,
  mode: 'history'
});

export default router;