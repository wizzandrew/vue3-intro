const app = Vue.createApp({
    data: function () {
        return {
            product: {
                name: 'Socks',
                description: "Blue magnifisent socks",
                image: './assets/images/socks_green.jpg',
                inventory: 100,
                details: ['50% cotton', '30% wool', '20% polyester']
            },
            productVariants: [{
                id: 2234,
                color: 'green',
                image: './assets/images/socks_green.jpg'
            },
            {
                id: 2235,
                color: 'blue',
                image: './assets/images/socks_blue.jpg'
            }],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        showImage(image) {
            this.product.image = image;
        }
    }
})

