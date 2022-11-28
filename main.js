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
                color: 'green'
            },
            {
                id: 2235,
                color: 'blue'
            }]
        }
    }
})

