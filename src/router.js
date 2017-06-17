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
