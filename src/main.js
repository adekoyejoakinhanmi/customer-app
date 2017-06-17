/*jshint esversion:6*/
/*global console, Vue, VueRouter, Factory*/
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Data Helpers imports */
import Factory from './helpers/factory';
import customerFactory from '../externals/customers';

/* Reusable Components */
import customer from './reusable/customer.vue';
import customerOrder from './reusable/customerOrder.vue';

/* Main Components */
import Customers from './components/Customers.vue';
import CustomerOrder from './components/CustomerOrder.vue';
import Orders from './components/Orders.vue';

Vue.use(VueRouter);


/*Routes*/
const routes = [
    {
        name : 'all_customers',
        path : '/customers',
        component : Customers
    },
    {
        name : 'customer_order',
        path : '/orders/customer/:id',
        component : CustomerOrder
    },
    {
        name : 'all_orders',
        path : '/orders',
        component : Orders
    }
];

/*Router*/
const router = new VueRouter({
    routes : routes,
    mode : 'history'
});

/*App*/
const App = new Vue({
    router,
    el : "#app",
    created() {
        this.$router.push('/customers');
    }
});
