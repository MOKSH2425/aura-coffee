document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE MENU LOGIC (NEW) ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileBtn = document.getElementById('close-mobile-menu');

    if (mobileBtn && mobileMenu && closeMobileBtn) {
        // Open Menu
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        // Close Menu
        closeMobileBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });

        // Close when clicking a link inside menu
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });
    }

    // --- 2. LOGGED IN STATE LOGIC (NEW) ---
    // Check if user is logged in (saved in browser memory)
    const user = localStorage.getItem('auraUser');
    
    // Find all "Account" icons that point to login.html
    const accountLinks = document.querySelectorAll('a[href="login.html"]');

    if (user) {
        console.log("User is logged in:", user);
        
        // Change the link to go to Rewards instead of Login
        accountLinks.forEach(link => {
            link.href = "rewards.html";
            
            // Turn the icon Gold to show they are active
            const icon = link.querySelector('.material-icons');
            if(icon) {
                icon.classList.add('text-aura-gold'); 
            }
        });
    }

    // Handle the Login Form Submit (Only runs on login.html)
    const loginForm = document.querySelector('form[action="rewards.html"]');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            // Get the email the user typed
            const emailInput = loginForm.querySelector('input[type="email"]');
            
            if(emailInput && emailInput.value) {
                // Save it to browser memory
                localStorage.setItem('auraUser', emailInput.value);
            }
            // Form will now continue to redirect to rewards.html automatically
        });
    }


    // --- 3. CART LOGIC (EXISTING) ---
    let cart = [];
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    // FIXED SELECTOR: Only selects badges that are absolute positioned (the red dots)
    const cartCountBadges = document.querySelectorAll('.material-icons + span.absolute'); 

    function toggleCart(show) {
        if (!cartSidebar) return;
        if (show) {
            cartSidebar.classList.add('cart-open');
            cartOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
        } else {
            cartSidebar.classList.remove('cart-open');
            cartOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    const navCartButtons = document.querySelectorAll('nav button, .flex button');
    navCartButtons.forEach(btn => {
        if(btn.querySelector('.material-icons') && btn.querySelector('.material-icons').innerText.includes('shopping_bag')) {
            btn.onclick = (e) => {
                e.preventDefault();
                toggleCart(true);
            };
        }
    });

    if(document.getElementById('close-cart')) {
        document.getElementById('close-cart').onclick = () => toggleCart(false);
    }
    if(cartOverlay) {
        cartOverlay.onclick = () => toggleCart(false);
    }

    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(btn => {
        const icon = btn.querySelector('.material-icons');
        const isAddBtn = (icon && icon.innerText === 'add_shopping_cart') || btn.innerText.includes('Quick') || btn.innerText.includes('Add') || btn.innerText.includes('Shop Now');

        if (isAddBtn) {
            btn.addEventListener('click', (e) => {
                if(btn.tagName !== 'A') {
                    e.preventDefault();
                    e.stopPropagation();
                }

                const card = btn.closest('.group') || btn.closest('.bg-aura-card');
                
                if (card) {
                    const title = card.querySelector('h3') ? card.querySelector('h3').innerText : 'Premium Item';
                    let priceText = '0';
                    const priceEl = card.querySelector('span.text-aura-gold') || card.querySelector('span.font-bold.text-lg');
                    if(priceEl) priceText = priceEl.innerText;
                    
                    const imageSrc = card.querySelector('img') ? card.querySelector('img').src : '';
                    const price = parseInt(priceText.replace(/[^\d]/g, '')); 

                    addToCartItem({ title, price, imageSrc });
                }
            });
        }
    });

    function addToCartItem(product) {
        const existingItem = cart.find(item => item.title === product.title);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
        toggleCart(true); 
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        cartCountBadges.forEach(badge => {
            badge.innerText = totalItems;
            badge.classList.remove('hidden');
            if(totalItems === 0) badge.classList.add('hidden');
            badge.classList.add('scale-125');
            setTimeout(() => badge.classList.remove('scale-125'), 200);
        });

        if(cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            let totalPrice = 0;

            cart.forEach((item, index) => {
                totalPrice += item.price * item.quantity;
                const itemHTML = `
                    <div class="flex gap-4 mb-6 animate-fade-in border-b border-white/5 pb-4 last:border-0">
                        <img src="${item.imageSrc}" class="cart-item-image w-16 h-16 object-cover rounded-md bg-gray-800">
                        <div class="flex-grow">
                            <h4 class="text-sm font-bold text-white leading-tight mb-1">${item.title}</h4>
                            <p class="text-xs text-aura-gold font-bold">₹${item.price}</p>
                            <div class="flex items-center gap-3 mt-2 bg-[#2A2521] inline-flex rounded-md p-1">
                                <button onclick="changeQty(${index}, -1)" class="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-xs hover:bg-white/20 text-white">-</button>
                                <span class="text-xs font-bold text-white w-4 text-center">${item.quantity}</span>
                                <button onclick="changeQty(${index}, 1)" class="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-xs hover:bg-white/20 text-white">+</button>
                            </div>
                        </div>
                        <button onclick="removeItem(${index})" class="text-gray-500 hover:text-red-500 self-start p-1">
                            <span class="material-icons text-sm">close</span>
                        </button>
                    </div>
                `;
                cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
            });

            if(cartTotalElement) cartTotalElement.innerText = '₹' + totalPrice;

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-gray-500 opacity-50 mt-10">
                        <span class="material-icons text-4xl mb-2">shopping_bag</span>
                        <p class="text-xs uppercase tracking-widest">Your bag is empty</p>
                    </div>
                `;
            }
        }
    }

    window.changeQty = (index, change) => {
        if (cart[index].quantity + change <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity += change;
        }
        updateCartUI();
    };

    window.removeItem = (index) => {
        cart.splice(index, 1);
        updateCartUI();
    };

    console.log("Aura Cart Engine Loaded 🛒");
});