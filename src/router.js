/* eslint-disable no-console */
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

// Faz o Lazy Loading do component.
const Home = () => import(/* webpackChunkName: "info" */'@/pages/Home/Home.vue');
const Login = () => import(/* webpackChunkName: "info" */'@/pages/Login/Login.vue');
// const Info = () => import(/* webpackChunkName: "info" */'./components/info/Info.vue');

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login
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