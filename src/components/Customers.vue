<template>
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
</template>

<script>
    import customerFactory from '../../externals/customers';
    import customer from '../reusable/customer.vue';

    export default {
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
        methods : {
            addCustomer() {
                customerFactory.addOne(this.newCustomer.firstName, this.newCustomer.lastName, this.newCustomer.city);
            }
        },
        components : {
            'customer' : customer
        }
    }
</script>

<style>

</style>
