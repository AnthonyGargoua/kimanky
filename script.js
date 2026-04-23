document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',      // Page par défaut
        mobileMenu: false, // État du menu mobile
        cartOpen: false,   // État de la sidebar panier
        notification: '',  // Texte du petit message d'alerte
        cart: [],          // Tableau contenant les articles du panier

        // Liste des produits
        products: [
            { id: 1, name: "Kimono 'Neo-Osaka'", price: 89, image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800" },
            { id: 2, name: "Hoodie Kanji Black", price: 55, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" },
            { id: 3, name: "Pantalon Cargo Cyber", price: 75, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800" },
            { id: 4, name: "T-shirt Print Geisha", price: 35, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800" },
            { id: 5, name: "Veste Souvenir Tiger", price: 110, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800" },
            { id: 6, name: "Casquette Tokyo Red", price: 29, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800" }
        ],

        // Ajouter au panier
        addToCart(product) {
            this.cart.push(product);
            this.showNotification(`${product.name} ajouté !`);
        },

        // Supprimer du panier
        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        // Calculer le prix total
        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        },

        // Afficher une notification temporaire
        showNotification(msg) {
            this.notification = msg;
            setTimeout(() => {
                this.notification = '';
            }, 3000); // Disparaît après 3 secondes
        }
    }))
});
