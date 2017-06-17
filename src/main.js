/*jshint esversion:6*/
/*global console, Vue, VueRouter, Factory*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import Factory from './helpers/factory';
import router from './router';

Vue.use(VueRouter);

/*App*/
const App = new Vue({
    router,
    el : "#app",
    created() {
        this.$router.push('/customers');
    }
});
