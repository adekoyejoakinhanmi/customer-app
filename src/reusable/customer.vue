<template>
    <div class="col-md-3">
        <div class="panel panel-default">
            <div class="panel-heading">
                <strong>{{customer.firstName}} {{customer.lastName}}</strong>
                <div class="pull-right">
                    <a @click="removeCustomer"><i class="glyphicon glyphicon-remove"></i></a>
                </div>
            </div>
            <div class="panel-body">
                <p>{{customer.city}}</p>
                <p><router-link :to="{name : 'customer_order', params : {id : customer.id}}"> View Orders </router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import customerFactory from '../../externals/customers';

/* Reuseable Components*/
export default {
    props : ['customer'],
    methods : {
        removeCustomer() {
            customerFactory.removeOne(
                this.customer.id
            );
        }
    }
};
</script>
