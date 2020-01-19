import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './router';
import App from './App.vue'
import store from "./store";
Vue.use(Vuex);
const vuexStore = new Vuex.Store(store);
const router = new VueRouter({
    routes
})


Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store:vuexStore,
    router,
}).$mount('#root');