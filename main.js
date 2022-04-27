const app = Vue.createApp({
	data() {
		return {
			cart: [],
			premium: false,
		};
	},
	methods: {
		updateCart: function (id) {
			this.cart.push(id);
		},
	},
});

// console.log(navigator.userAgentData);
// console.log(navigator.userAgent);
// console.log(navigator.appVersion);
// console.log(navigator.platform);
