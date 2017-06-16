/*jshint esversion:6*/
/*global console, Vue, VueRouter, Factory*/
import Vue from 'vue';
import VueRouter from 'vue-router';

/* Local imports */
import Factory from './helpers/factory';
import customerFactory from '../externals/customers';

import customer from './reusable/customer.vue';
import customerOrder from './reusable/customerOrder.vue';

Vue.use(VueRouter);

/*Components*/
const Customers = Vue.extend({
    data() {
        return {
            customers : customerFactory.getAll(),
            newCustomer : {
                firstName : '',
                lastName : '',
                city : ''
            }
        };
    },
    template : `
        <div>
            <h1>Customers</h1>
            <form class="row">
                <div class="col-md-3">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="First Name" v-model="newCustomer.firstName">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Last Name" v-model="newCustomer.lastName">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="City" v-model="newCustomer.city">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="input-group">
                        <button type="button"
                                class="btn btn-primary"
                                @click="addCustomer"
                                :disabled="!newCustomer.firstName && !newCustomer.lastName && !newCustomer.city">
                            Add Customer</button>
                    </div>
                </div>
            </form>

            <div class="row">
                <customer :key="customer.id"
                          :customer="customer"
                          v-for="customer in customers"></customer>
            </div>
        </div>
    `,
    methods : {
        addCustomer() {
            customerFactory.addOne(this.newCustomer.firstName, this.newCustomer.lastName, this.newCustomer.city);
        }
    },
    components : {
        'customer' : customer
    }
});

const CustomerOrder = Vue.extend({
    data() {
        return {
            customer : {}
        };
    },
    created() {
        this.getCustomer();
    },
    methods : {
        getCustomer() {
            this.customer = customerFactory.getOne(
                this.$route.params.id
            );
        }
    },
    template : `
        <div class="row">>
            <h1>Customer Order</h1>
            <h2>Orders for {{customer.firstName}} {{customer.lastName}}</h2>
            <p>{{customer.address}}</p>
            <p>{{customer.city}}</p>
            <div class="col-md-8">
                <customerOrder :key="customer.id"
                               :customer="customer">
                </customerOrder>
            </div>
        </div>
    `,
    components : {
        'customerOrder' : customerOrder
    }
});

const Orders = Vue.extend({
    data() {
        return {
            customers : []
        };
    },
    created() {
        this.getCustomers();
    },
    methods : {
        getCustomers() {
            this.customers = customerFactory.getAll();
        }
    },
    template : `
        <div class="row">
            <h1>Customer Orders</h1>
            <div class="col-md-8" v-for="customer in customers">
                <p><strong>{{customer.firstName}} {{customer.lastName}}</strong></p>
                <customerOrder :key="customer.id" :customer="customer"></customerOrder>
            </div>
        </div>
    `,
    components : {
        'customerOrder' : customerOrder
    }
});

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
