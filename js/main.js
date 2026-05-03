/* 
    Velvet Scents - Core JavaScript Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCart();
    initAnimations();
    initTheme();
    initLanguage();
    initSearch();
});

// --- Navigation Logic ---
function initNavigation() {
    const navWrapper = document.querySelector('.nav-wrapper');
    const mobileTrigger = document.querySelector('.mobile-trigger');
    const searchBtn = document.querySelector('.search-toggle-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navWrapper.classList.add('scrolled');
        } else {
            navWrapper.classList.remove('scrolled');
        }
    });

    if (mobileTrigger) {
        mobileTrigger.addEventListener('click', () => {
            // Simplified mobile toggle
            alert('Mobile menu coming soon in full version. For now, use the desktop links.');
        });
    }
}

// --- Cart Logic ---
let cart = JSON.parse(localStorage.getItem('vs_cart')) || [];

function initCart() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    const addButtons = document.querySelectorAll('.add-to-bag');

    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });

    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);

    addButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const product = {
                id: productCard.dataset.id,
                name: productCard.querySelector('h4').textContent,
                price: parseFloat(productCard.querySelector('.product-price').textContent.replace('AED ', '')),
                image: productCard.querySelector('img').src,
                quantity: 1
            };
            addToCart(product);
        });
    });

    updateCartUI();
}

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push(product);
    }
    saveCart();
    updateCartUI();
    openCart();
}

function saveCart() {
    localStorage.setItem('vs_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.querySelectorAll('.cart-count');
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalDisplays = document.querySelectorAll('.subtotal-amount');
    
    // Update all counts (desktop/mobile)
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.forEach(el => el.textContent = totalCount);

    // Update items list in sidebar
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center" style="margin-top: 50px; opacity: 0.5;">Your bag is empty</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item" style="display: flex; gap: 15px; margin-bottom: 20px;">
                    <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover;">
                    <div style="flex: 1;">
                        <h5 style="margin-bottom: 5px; font-family: 'Cormorant Garamond', serif;">${item.name}</h5>
                        <p style="font-size: 0.8rem; color: var(--accent-gold);">AED ${item.price.toFixed(2)}</p>
                        <div style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                            <button onclick="changeQty('${item.id}', -1)" style="border: 1px solid var(--soft-gold); background: none; cursor: pointer; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="changeQty('${item.id}', 1)" style="border: 1px solid var(--soft-gold); background: none; cursor: pointer; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">+</button>
                        </div>
                    </div>
                    <button onclick="removeFromCart('${item.id}')" style="border: none; background: none; cursor: pointer; opacity: 0.5; font-size: 1.2rem;">×</button>
                </div>
            `).join('');
        }
    }

    // Update all subtotal/total displays everywhere on the page
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const formattedTotal = `AED ${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    
    subtotalDisplays.forEach(display => {
        display.textContent = formattedTotal;
    });

    // Save state
    saveCart();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
}

function openCart() {
    document.querySelector('.cart-sidebar').classList.add('open');
    document.querySelector('.cart-overlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    document.querySelector('.cart-sidebar').classList.remove('open');
    document.querySelector('.cart-overlay').classList.remove('show');
    document.body.style.overflow = '';
}

// --- Theme Logic ---
function initTheme() {
    const themeBtn = document.querySelector('.theme-toggle-btn');
    const storedTheme = localStorage.getItem('vs_theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', storedTheme);
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('vs_theme', next);
        });
    }
}

// --- Language Logic ---
function initLanguage() {
    const langBtn = document.querySelector('.lang-toggle-btn');
    const storedLang = localStorage.getItem('vs_lang') || 'en';
    
    setLanguage(storedLang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = localStorage.getItem('vs_lang') || 'en';
            const next = current === 'en' ? 'ar' : 'en';
            setLanguage(next);
        });
    }
}

function setLanguage(lang) {
    localStorage.setItem('vs_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    // Here you would typically trigger i18n changes
}

// --- Animations ---
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// --- Search Logic ---
function initSearch() {
    const searchBtn = document.querySelector('.search-toggle-btn');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');

    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchOverlay.querySelector('input').focus();
        });

        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
        
        // Close on ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') searchOverlay.classList.remove('active');
        });
    }
}

// --- Filter Tab Logic ---
function initFilters() {
    const filters = document.querySelectorAll('.filter-pill');
    filters.forEach(pill => {
        pill.addEventListener('click', () => {
            filters.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            // In a real app, this would filter products
            console.log('Filtering by:', pill.textContent);
        });
    });
}

// Initialize filters
document.addEventListener('DOMContentLoaded', initFilters);
