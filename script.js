document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        cartOpen: false,
        mobileMenu: false,
        cart: [],
        email: '',
        mailSubmitted: false,
        dropDate: new Date(2026, 11, 25, 20, 0, 0).getTime(), 
        countdown: { d: "00", h: "00", m: "00", s: "00" },

        init() {
            this.updateCounter();
            setInterval(() => this.updateCounter(), 1000);
            this.initAOS();
        },

        initAOS() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('aos-animate');
                    }
                });
            }, { threshold: 0.2 });

            document.querySelectorAll('.aos-init').forEach(el => observer.observe(el));
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

        products: [
            { id: 1, name: "Hoodie Shinigami V1", price: 65, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" },
            { id: 2, name: "Cargo 'Tech-Kyoto'", price: 85, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800" },
            { id: 3, name: "Kimono Black Mesh", price: 120, image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800" },
            { id: 4, name: "Tee Oversize 'Akira'", price: 35, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800" }
        ],

        addToCart(product) {
            this.cart.push(product);
            this.cartOpen = true;
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        },

        submitMail() {
            if (this.email.includes('@')) this.mailSubmitted = true;
        }
    }))
});
