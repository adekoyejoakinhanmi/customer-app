<template>
    <table class="table table-hover table-bordered table-striped table-condensed">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-show="!customer.orders || !(customer.orders.length > 0)" class="danger">
                    <td colspan="4">
                        <span class="text-center">No orders</span>
                    </td>
                </tr>
                <tr v-for="order in customer.orders">
                    <td> {{order.product}} </td>
                    <td> {{order.quantity}} </td>
                    <td> {{order.price}} </td>
                    <td> {{order.orderTotal}} </td>
                </tr>
                <tr class="info">
                    <td colspan="3"></td>
                    <td> {{ currency(ordersTotal) }} </td>
                </tr>
            </tbody>
        </table>
</template>

<script>
    export default {
        props : ['customer'],
        computed : {
            ordersTotal() {
                let counter = 0;
                if (!this.customer.orders) {
                    return counter;
                }

                this.customer.orders.forEach((order) => {
                    counter += order.orderTotal;
                });
                return counter;
            }
        },
        methods : {
            currency(val) {
                return `$${val.toFixed(2)}`;
            }
        }
    }
</script>

<style>

</style>
