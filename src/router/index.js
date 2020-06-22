import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/Index';
import Form from '../components/Form';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/' , component: Index
        },
        {
            path: '/create' , component: Form
        }
    ]
});