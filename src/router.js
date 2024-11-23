import Vue from 'vue';
import Router from 'vue-router';
import RegisterForm from './components/RegisterForm.vue';
import LoginForm from './components/LoginForm.vue';
import BlogList from './components/BlogList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'RegisterForm',
      component: RegisterForm
    },
    {
      path: '/authenticate',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/blogs',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '*',
      redirect: '/register'
    }
  ]
});