import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

// Faz o Lazy Loading do component.
const Admin = () => import(/* webpackChunkName: "info" */'@/pages/Admin/Admin.vue');
// const Info = () => import(/* webpackChunkName: "info" */'./components/info/Info.vue');

const routes = [
  {
    path: '/',
    component: Admin
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