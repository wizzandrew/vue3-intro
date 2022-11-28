//import { Vue, createApp } from 'vue';
const app = Vue.createApp({
    data: function () {
        return {
            product: {
                name: 'Socks',
                description: "Blue magnifisent socks",
                brand: 'Vue Mastery',
                selectedVariant: 0,
                details: ['50% cotton', '30% wool', '20% polyester']
            },
            productVariants: [{
                id: 2234,
                color: 'green',
                image: './assets/images/socks_green.jpg',
                quantity: 50
            },
            {
                id: 2235,
                color: 'blue',
                image: './assets/images/socks_blue.jpg',
                quantity: 0
            }],
            cart: 0
        }
    },
    computed: {
        title() {
            return this.product.brand + ' ' + this.product.name;
        },
        image() {
            return this.productVariants[this.product.selectedVariant].image;
        },
        inStock() {
            return this.productVariants[this.product.selectedVariant].quantity;
        }
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        updateVariant(index) {
            this.product.selectedVariant = index;
        }
    }
})

