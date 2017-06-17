<template>
    <div class="row">
        <h1>Customer Orders</h1>
        <div class="col-md-8" v-for="customer in customers">
            <p><strong>{{customer.firstName}} {{customer.lastName}}</strong></p>
            <customerOrder :key="customer.id" :customer="customer"></customerOrder>
        </div>
    </div>
</template>

<script>
    import customerFactory from '../../externals/customers';
    import customerOrder from '../reusable/customerOrder.vue';

    export default {
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
        components : {
            'customerOrder' : customerOrder
        }
    }
</script>

<style>

</style>
