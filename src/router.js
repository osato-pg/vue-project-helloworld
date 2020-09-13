import Vue from 'vue';
import Router from 'vue-router';
import CostomerInfo from './components/CostomerInfo.vue';
import DetailInfo from './components/DetailInfo.vue';
import FreeField from './components/FreeField.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: CostomerInfo},
    {path: '/Detail', component: DetailInfo},
    {path: '/Free', component: FreeField},
  ]
})