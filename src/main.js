// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App';
import Movies from './components/Movies';
import More from './components/More';
import Subject from './components/Subject';

Vue.use(VueRouter);

Vue.prototype.$axios = axios;

const router = new VueRouter({
  routes: [
    { path: '/:category/:type', component: More },
    { path: '/movies', component: Movies, alias: '/' },
    { path: '/movie/subject/:id', component: Subject },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
