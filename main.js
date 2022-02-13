const app = Vue.createApp({
	data() {
		return {
			product: "Socks",
			description: "Madison's Blue Socks",
			image: "./assets/images/socks_blue.jpg",
			onSale: true,
			inStock: false,
			url: "https://screenfiction.org/content/image/0/50/581/00292771-full.webp",
			product_m: "Madisons",
			description_m: "Many Madisons in stock",
			image_m:
				"https://screenfiction.org/content/image/0/50/581/00292771-full.webp",
			inventory: 8,
			url_m: "https://screenfiction.org/content/image/0/50/581/00292771-full.webp",
		};
	},
});
