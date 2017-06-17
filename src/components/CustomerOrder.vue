<template>
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
</template>

<script>
    import customerFactory from '../../externals/customers';
    import customerOrder from '../reusable/customerOrder.vue';

    export default {
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
        components : {
            'customerOrder' : customerOrder
        }
    }
</script>

<style>

</style>
