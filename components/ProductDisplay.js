app.component("product-display", {
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
	},
	template: /*html*/ `
        <div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <img
                :src="image"
                :alt="description"
                :class="{ 'out-of-stock-img': !inStock }"
            />
        </div>
        <div class="product-info">
        <h1>{{ title }}</h1>
        <product-details :details="details"></product-details>
        <p v-if="onSale">ON SALE</p>
        <!-- As in v2, we can also use v-show here; v-if adds and removes the element from the DOM where v-show only toggles the element's visibility via stylesheet -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <div
            v-for="(color, index) in colors"
            :key="index"
            @mouseover="updateModel(index)"
            class="color-circle"
            :style="{ backgroundColor: color.color }"
        ></div>
        <button
        class="button"
        :class="{ disabledButton: !inStock }"
        :disabled="!inStock"
        @click="addToCart"
    >
        Add To Cart
    </button>
    </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
</div>
`,
	data() {
		return {
			product: "Socks",
			brand: "Vue Mastery",
			description: "Madison's Socks",
			selectedModel: 0,
			details: ["50% cotton", "30% wool", "20% polyester"],
			onSale: true,
			colors: [
				{
					id: 2234,
					color: "rgb(25, 40, 53)",
					image: "./assets/images/socks_blue.jpg",
					quantity: 50,
				},
				{
					id: 2235,
					color: "green",
					image: "./assets/images/socks_green.jpg",
					quantity: 0,
				},
			],
			reviews: [],
		};
	},
	methods: {
		updateModel: function (index) {
			this.selectedModel = index;
		},
		addToCart: function () {
			this.$emit("add-to-cart", this.colors[this.selectedModel].id);
		},
		addReview: function (review) {
			this.reviews.push(review);
		},
	},
	computed: {
		title() {
			return this.brand + " " + this.product;
		},
		image() {
			return this.colors[this.selectedModel].image;
		},
		inStock() {
			return this.colors[this.selectedModel].quantity;
		},
		shipping() {
			if (this.premium) {
				return "Free";
			}
			return 2.99;
		},
	},
});
