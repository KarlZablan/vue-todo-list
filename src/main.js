import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index';

import Home from './components/Home.vue'

import TodoForm from './components/TodoForm.vue'

Vue.config.productionTip = false
Vue.use (VueRouter);


const routes = [
  { path: '/', component: Home },
  {path: '/todo/edit', name:"edit", component: TodoForm,  props: true},
  {path: '/todo/new', name:"new", component: TodoForm}
]

const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
