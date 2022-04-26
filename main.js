const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: "Socks",
			description: "Madison's Blue Socks",
			image: "./assets/images/socks_blue.jpg",
			onSale: true,
			inStock: false,
			colors: [
				{
					id: 2234,
					color: "blue",
					image: "./assets/images/socks_blue.jpg",
				},
				{
					id: 2235,
					color: "green",
					image: "./assets/images/socks_green.jpg",
				},
			],
			url: "https://screenfiction.org/content/image/0/50/581/00292771-full.webp",
			product_m: "Madisons",
			description_m: "Many Madisons in stock",
			details: [
				"18-years-old",
				"Chinese-American",
				"Columbia University Freshman",
				"Actress",
				"Intelligence (1-100): 96",
				"Obedience (1-100): 94",
				"General cuteness (1-100): 99",
			],
			variants: [
				{ id: 1001, hair: "Shoulder length" },
				{ id: 1002, hair: "Neck length" },
			],
			image_m:
				"https://screenfiction.org/content/image/0/50/581/00292771-full.webp",
			inventory: 8,
			url_m: "https://screenfiction.org/content/image/0/50/581/00292771-full.webp",
		};
	},
	methods: {
		addToCart: function () {
			this.cart += 1;
		},
		changeImage: function () {
			this.colors.image = this.colors.image;
		},
	},
});

// console.log(navigator.userAgentData);
// console.log(navigator.userAgent);
// console.log(navigator.appVersion);
// console.log(navigator.platform);
