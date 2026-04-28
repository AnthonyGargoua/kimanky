document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        filter: 'all',
        cartOpen: false,
        cart: [],
        products: initialProducts,
        dropDate: new Date("June 1, 2026 00:00:00").getTime(),
        countdown: { d: "00", h: "00", m: "00", s: "00" },

        init() {
            this.updateCounter();
            setInterval(() => this.updateCounter(), 1000);
            initScrollAnimations(); // Appel de la logique d'animation
        },

        updateCounter() {
            const now = new Date().getTime();
            const diff = this.dropDate - now;
            if (diff > 0) {
                this.countdown.d = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
                this.countdown.h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
                this.countdown.m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
                this.countdown.s = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
            }
        },

        addToCart(product) {
            this.cart.push({...product, cartId: Date.now()});
            this.cartOpen = true;
        },

        toggleCart(status) {
            this.cartOpen = status;
            document.body.style.overflow = status ? 'hidden' : '';
        }
    }));
});
