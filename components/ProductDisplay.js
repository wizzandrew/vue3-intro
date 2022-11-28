app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        `<div class="product-display">
    <div class="product-container">
      <div
        class="product-image"
        :class="{ 'out-of-stock-img': inStock === 0 }"
      >
        <img v-bind:src="image" :alt="product.description" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock > 10">In Stock</p>
        <p v-else-if="inStock > 0 && inStock <= 10">Almost sold out</p>
        <p v-show="inStock === 0">Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in product.details">{{ detail }}</li>
        </ul>

        <div
          class="color-circle"
          v-for="(variant, index) in productVariants"
          @mouseover="updateVariant(index)"
          :style="{ backgroundColor: variant.color}"
          :key="variant.id"
        ></div>
        <button
          class="button"
          :class="{ disabledButton:  inStock === 0}"
          v-on:click="addToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>`,
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
        },
        shipping() {
            return this.premium ? 'Free' : 2.99;
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.productVariants[this.product.selectedVariant].id);
        },
        updateVariant(index) {
            this.product.selectedVariant = index;
        }
    }
})