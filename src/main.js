// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './router'
import layout from "./components/layout";
import IndexPage from "./pages/IndexPage";
Vue.use(VueRouter)

Vue.config.productionTip = false

let router = new VueRouter({
  mode: 'history',
  routers:[{
    path:'/',
    component:IndexPage
  },
    {

  }]

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  VueRouter,
  components: { layout },
  template: '<layout/>'
})
