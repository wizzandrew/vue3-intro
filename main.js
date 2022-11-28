//import { Vue, createApp } from 'vue';
const app = Vue.createApp({
    data: function () {
        return {
            cart: [],
            premium: true
        }
    },

    methods: {
        updateCard(id) {
            this.cart.push(id)
        }
    }
})

