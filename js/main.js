/* 
    Velvet Scents - Core Logic
    Senior-Level Rebuild | Production Ready
*/

// ==========================================
// MODULE 1: PRODUCT DATABASE
// ==========================================
const PRODUCTS = [
  { id:1, name:"Noir Éclat",    notes:"Bergamot · Amber · Woods",      price:285, cat:"perfumes",     img:"images/1.jpeg"  },
  { id:2, name:"Cuir Lumière",  notes:"Saffron · Leather · Cedar",     price:310, cat:"perfumes",     img:"images/2.jpeg"  },
  { id:3, name:"Marj",          notes:"Rose · Jasmine · Sandalwood",   price:295, cat:"perfumes",     img:"images/4.jpeg"  },
  { id:4, name:"Oud & Roses",   notes:"Oud · Rose · Musk",             price:420, cat:"perfumes",     img:"images/5.jpeg"  },
  { id:5, name:"Bin Shaikh",    notes:"Oud · Leather · Amber",         price:450, cat:"perfumes",     img:"images/10.jpeg" },
  { id:6, name:"Ignite Oud",    notes:"Oud · Spice · Wood",            price:475, cat:"perfumes",     img:"images/11.jpeg" },
  { id:7, name:"Rose Diamond",  notes:"Rose · Peony · Musk",           price:380, cat:"perfumes",     img:"images/12.jpeg" },
  { id:8, name:"Signature Duo", notes:"Gift Set · 2 Fragrances",       price:520, cat:"giftsets",     img:"images/3.jpeg"  },
  { id:9, name:"Premium Trio",  notes:"Gift Set · 3 Fragrances",       price:750, cat:"giftsets",     img:"images/7.jpeg"  },
  { id:10,name:"Bakhoor Classic",notes:"Traditional · Woody · Warm",   price:180, cat:"dakhoon",      img:"images/18.jpeg" },
  { id:11,name:"Oud Maliki",    notes:"Oud · Incense · Deep",          price:220, cat:"dakhoon",      img:"images/19.jpeg" },
];

// ==========================================
// MODULE 2: TRANSLATIONS
// ==========================================
const TRANSLATIONS = {
  en: {
    announce:        "🚀 Free shipping across UAE on orders above AED 200  ·  Cash on Delivery Available",
    nav_home:        "Home",
    nav_shop:        "Shop",
    nav_dakhoon:     "Dakhoon",
    nav_gifts:       "Gift Sets",
    nav_about:       "About",
    nav_contact:     "Contact",
    hero_label:      "Ultra-Luxury Arabic Perfumery",
    hero_h1:         "Iconic Indulgence",
    hero_sub:        "Crafted for the discerning",
    btn_shop:        "Shop Now",
    btn_explore:     "Explore the Maison",
    sig_label:       "Signature Selections",
    sig_h2:          "Fragrances Adored by All",
    add_bag:         "Add to Bag",
    wishlist:        "Wishlist",
    cart_title:      "Shopping Bag",
    cart_empty:      "Your bag is empty.",
    cart_subtotal:   "Subtotal",
    checkout_wa:     "Checkout via WhatsApp",
    continue_shop:   "Continue Shopping",
    search_ph:       "Search fragrances, oud, rose...",
    search_recent:   "Recent Searches",
    search_none:     "No fragrances found for",
    order_title:     "Complete Your Order",
    order_name:      "Full Name",
    order_phone:     "Phone Number",
    order_address:   "Delivery Address",
    order_city:      "City",
    order_email:     "Email (optional)",
    order_notes:     "Order Notes (optional)",
    order_payment:   "Payment Method",
    order_cod:       "Cash on Delivery",
    order_bank:      "Bank Transfer",
    order_submit:    "Send Order on WhatsApp",
    order_success:   "✅ Order Sent! We'll confirm shortly via WhatsApp.",
    newsletter_label:"Join the Private List",
    newsletter_h2:   "First access to limited drops.",
    newsletter_ph:   "Your email address",
    newsletter_btn:  "Subscribe",
    newsletter_ok:   "✓ You're on the list.",
    trust_ship:      "Swift Shipping",
    trust_ship_sub:  "Next-day delivery across UAE",
    trust_pay:       "Secure Payment",
    trust_pay_sub:   "Protected transactions",
    trust_cod:       "Cash on Delivery",
    trust_cod_sub:   "Pay upon receipt",
    trust_care:      "Client Care",
    trust_care_sub:  "24/7 WhatsApp support",
    footer_tagline:  "A private perfume house in the UAE blending French structure with Arabian depth.",
    footer_shop:     "Shop",
    footer_connect:  "Connect",
    footer_visit:    "Visit Us",
    copy:            "© 2026 Velvet Scents. All rights reserved.",
    dev:             "Developed by Abdul Rehman Ali",
    wa_tooltip:      "Order via WhatsApp",
  },
  ar: {
    announce:        "🚀 شحن مجاني في الإمارات على الطلبات فوق 200 درهم · الدفع عند الاستلام متاح",
    nav_home:        "الرئيسية",
    nav_shop:        "المتجر",
    nav_dakhoon:     "الدخون",
    nav_gifts:       "طقم هدايا",
    nav_about:       "من نحن",
    nav_contact:     "تواصل معنا",
    hero_label:      "عطور عربية فاخرة",
    hero_h1:         "تميّز أيقوني",
    hero_sub:        "صُنعت للذواقة",
    btn_shop:        "تسوق الآن",
    btn_explore:     "اكتشف المزيد",
    sig_label:       "المختارات الراقية",
    sig_h2:          "عطور يعشقها الجميع",
    add_bag:         "أضف للحقيبة",
    wishlist:        "المفضلة",
    cart_title:      "حقيبة التسوق",
    cart_empty:      "حقيبتك فارغة.",
    cart_subtotal:   "الإجمالي",
    checkout_wa:     "أتمّ الطلب عبر واتساب",
    continue_shop:   "مواصلة التسوق",
    search_ph:       "ابحث عن عطور، عود، ورد...",
    search_recent:   "عمليات البحث الأخيرة",
    search_none:     "لا توجد عطور لـ",
    order_title:     "أكمل طلبك",
    order_name:      "الاسم الكامل",
    order_phone:     "رقم الهاتف",
    order_address:   "عنوان التسليم",
    order_city:      "المدينة",
    order_email:     "البريد الإلكتروني (اختياري)",
    order_notes:     "ملاحظات الطلب (اختياري)",
    order_payment:   "طريقة الدفع",
    order_cod:       "الدفع عند الاستلام",
    order_bank:      "تحويل بنكي",
    order_submit:    "أرسل الطلب عبر واتساب",
    order_success:   "✅ تم إرسال طلبك! سنؤكد قريباً عبر واتساب.",
    newsletter_label:"انضم للقائمة الخاصة",
    newsletter_h2:   "أوّل من يعلم بالإصدارات المحدودة.",
    newsletter_ph:   "بريدك الإلكتروني",
    newsletter_btn:  "اشترك",
    newsletter_ok:   "✓ تم إضافتك للقائمة.",
    trust_ship:      "شحن سريع",
    trust_ship_sub:  "توصيل في اليوم التالي",
    trust_pay:       "دفع آمن",
    trust_pay_sub:   "معاملات محمية",
    trust_cod:       "الدفع عند الاستلام",
    trust_cod_sub:   "ادفع عند الاستلام",
    trust_care:      "خدمة العملاء",
    trust_care_sub:  "دعم واتساب 24/7",
    footer_tagline:  "دار عطور خاصة في الإمارات تمزج بين الأناقة الفرنسية والعمق العربي.",
    footer_shop:     "المتجر",
    footer_connect:  "تواصل",
    footer_visit:    "زرنا",
    copy:            "© 2026 Velvet Scents. جميع الحقوق محفوظة.",
    dev:             "تطوير: عبد الرحمن علي",
    wa_tooltip:      "اطلب عبر واتساب",
  }
};

// ==========================================
// MODULE 3: STATE MANAGEMENT
// ==========================================
let cart = JSON.parse(localStorage.getItem('vs_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('vs_wishlist')) || [];
let currentLang = localStorage.getItem('vs_lang') || 'en';
let currentTheme = localStorage.getItem('vs_theme') || 'ivory';

// ==========================================
// MODULE 4: CART LOGIC
// ==========================================
function saveCart() {
    localStorage.setItem('vs_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartSidebar();
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    saveCart();
    openCart();
    
    // Scale pop animation for badge
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) removeFromCart(id);
        else saveCart();
    }
}

function updateCartBadge() {
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function renderCartSidebar() {
    const container = document.querySelector('.cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<p class="cart-empty-text" data-i18n="cart_empty">${TRANSLATIONS[currentLang].cart_empty}</p>`;
        document.querySelector('.cart-footer').style.display = 'none';
        return;
    }

    document.querySelector('.cart-footer').style.display = 'block';
    
    container.innerHTML = cart.map(item => `
        <div class="cart-sidebar-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.notes}</p>
                <div class="cart-qty-ctrl">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <div class="cart-item-right">
                <span class="price">AED ${item.price * item.qty}</span>
                <button class="remove-item" onclick="removeFromCart(${item.id})">🗑</button>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    document.querySelectorAll('.subtotal-amount').forEach(el => {
        el.textContent = `AED ${subtotal}`;
    });
}

function openCart() {
    document.querySelector('.cart-sidebar').classList.add('open');
    document.querySelector('.overlay-all').classList.add('show');
}

function closeCart() {
    document.querySelector('.cart-sidebar').classList.remove('open');
    document.querySelector('.overlay-all').classList.remove('show');
}

// ==========================================
// MODULE 5: WHATSAPP ORDER
// ==========================================
function buildWhatsAppMessage(formData) {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    let message = `🌿 *New Order — Velvet Scents*\n\n`;
    message += `👤 Name: ${formData.name}\n`;
    message += `📱 Phone: ${formData.phone}\n`;
    message += `📍 Address: ${formData.address}, ${formData.city}\n`;
    message += `📧 Email: ${formData.email || 'N/A'}\n`;
    message += `💳 Payment: ${formData.payment}\n\n`;
    message += `🛍️ *Order Details:*\n`;
    
    cart.forEach(item => {
        message += `• ${item.name} × ${item.qty} — AED ${item.price * item.qty}\n`;
    });
    
    message += `─────────────────\n`;
    message += `💰 *Total: AED ${subtotal}*\n\n`;
    message += `📝 Notes: ${formData.notes || 'None'}\n\n`;
    message += `_Thank you for choosing Velvet Scents! We'll confirm your order shortly._`;

    return encodeURIComponent(message);
}

function handleCheckout() {
    const modal = document.querySelector('.order-modal');
    modal.classList.add('show');
    document.querySelector('.overlay-all').classList.add('show');
}

// ==========================================
// MODULE 6: LANGUAGE & THEME
// ==========================================
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('vs_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = TRANSLATIONS[lang][key];
            } else {
                el.textContent = TRANSLATIONS[lang][key];
            }
        }
    });

    const langBtn = document.querySelector('.lang-toggle-btn');
    if (langBtn) langBtn.textContent = lang === 'en' ? 'عربي' : 'EN';
}

function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('vs_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
}

function cycleTheme() {
    const themes = ['ivory', 'noir', 'system'];
    let index = themes.indexOf(currentTheme);
    index = (index + 1) % themes.length;
    applyTheme(themes[index]);
}

// ==========================================
// MODULE 7: ENHANCED SEARCH
// ==========================================
let recentSearches = JSON.parse(localStorage.getItem('vs_recent_searches')) || [];

function openSearch() {
    const overlay = document.querySelector('.search-overlay');
    overlay.classList.add('show');
    overlay.querySelector('input').focus();
    renderRecentSearches();
}

function closeSearch() {
    document.querySelector('.search-overlay').classList.remove('show');
}

function handleSearch(query) {
    const resultsContainer = document.querySelector('.search-results');
    if (!query) {
        resultsContainer.innerHTML = '';
        renderRecentSearches();
        return;
    }

    const results = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.notes.toLowerCase().includes(query.toLowerCase()) ||
        p.cat.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length === 0) {
        resultsContainer.innerHTML = `<p class="search-none" data-i18n="search_none">${TRANSLATIONS[currentLang].search_none} "${query}"</p>`;
    } else {
        resultsContainer.innerHTML = results.map(p => `
            <div class="search-result-card" onclick="addToCart(${p.id}); closeSearch();">
                <img src="${p.img}" alt="${p.name}">
                <div class="search-result-info">
                    <h4>${p.name}</h4>
                    <p>${p.notes}</p>
                    <span class="price">AED ${p.price}</span>
                </div>
            </div>
        `).join('');
    }

    if (query.length > 3) saveRecentSearch(query);
}

function saveRecentSearch(query) {
    if (!recentSearches.includes(query)) {
        recentSearches.unshift(query);
        recentSearches = recentSearches.slice(0, 5);
        localStorage.setItem('vs_recent_searches', JSON.stringify(recentSearches));
    }
}

function renderRecentSearches() {
    const container = document.querySelector('.recent-searches-list');
    if (!container) return;
    if (recentSearches.length === 0) {
        container.innerHTML = '';
        return;
    }
    container.innerHTML = `<p class="eyebrow" data-i18n="search_recent">${TRANSLATIONS[currentLang].search_recent}</p>` + 
        recentSearches.map(s => `<button class="recent-tag" onclick="document.querySelector('.search-input').value='${s}'; handleSearch('${s}')">${s}</button>`).join('');
}

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(null, args), delay);
    };
};

const debouncedSearch = debounce(handleSearch, 250);

// ==========================================
// MODULE 8: INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Apply persisted state
    applyTranslations(currentLang);
    applyTheme(currentTheme);
    updateCartBadge();
    renderCartSidebar();

    // 2. Search Listeners
    document.querySelector('.search-trigger')?.addEventListener('click', openSearch);
    document.querySelector('.search-close')?.addEventListener('click', closeSearch);
    document.querySelector('.search-input')?.addEventListener('input', (e) => debouncedSearch(e.target.value));

    // 3. Animation: Nav scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav-shell');
        if (window.scrollY > 80) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // 3. Animation: Hero zoom
    const hero = document.querySelector('.hero');
    if (hero) setTimeout(() => hero.classList.add('loaded'), 100);

    // 4. Animation: Intersection Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 5. Global Event Listeners
    document.querySelectorAll('.close-trigger').forEach(el => {
        el.addEventListener('click', () => {
            closeCart();
            document.querySelector('.order-modal')?.classList.remove('show');
            document.querySelector('.overlay-all').classList.remove('show');
        });
    });

    document.querySelector('.overlay-all')?.addEventListener('click', () => {
        closeCart();
        document.querySelector('.order-modal')?.classList.remove('show');
        document.querySelector('.overlay-all').classList.remove('show');
    });

    // 6. Checkout Modal Logic
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: orderForm.querySelector('[name="name"]').value,
                phone: orderForm.querySelector('[name="phone"]').value,
                address: orderForm.querySelector('[name="address"]').value,
                city: orderForm.querySelector('[name="city"]').value,
                email: orderForm.querySelector('[name="email"]').value,
                notes: orderForm.querySelector('[name="notes"]').value,
                payment: orderForm.querySelector('[name="payment"]:checked').value
            };

            const waLink = `https://wa.me/qr/4EGSY3HZUCP3E1?text=${buildWhatsAppMessage(formData)}`;
            window.open(waLink, '_blank');
            
            cart = [];
            saveCart();
            document.querySelector('.order-modal').classList.remove('show');
            document.querySelector('.overlay-all').classList.remove('show');
            alert(TRANSLATIONS[currentLang].order_success);
        });
    }

    // 7. Announcement Bar
    const announceBar = document.querySelector('.announce-bar');
    if (announceBar && sessionStorage.getItem('vs_announce_hidden')) {
        announceBar.style.display = 'none';
    }
    document.querySelector('.announce-close')?.addEventListener('click', () => {
        announceBar.style.display = 'none';
        sessionStorage.setItem('vs_announce_hidden', 'true');
    });
});
