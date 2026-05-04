/* START: Constants */
const WHATSAPP_NUMBER = "971547220879";
const STORAGE_KEYS = {
    CART: "velvet_cart",
    THEME: "velvet_theme",
    LANG: "velvet_lang",
    EXIT: "velvet_exit_seen"
};

const PRODUCTS = [
    {
        id: 1,
        nameEn: "Noir Éclat",
        nameAr: "نوار إكلات",
        price: 285,
        image: "images/1.jpeg",
        rating: "★★★★★"
    },
    {
        id: 2,
        nameEn: "Cuir Lumière",
        nameAr: "كوير لومييير",
        price: 310,
        image: "images/2.jpeg",
        rating: "★★★★★"
    },
    {
        id: 3,
        nameEn: "Marj",
        nameAr: "مرج",
        price: 295,
        image: "images/4.jpeg",
        rating: "★★★★★"
    },
    {
        id: 4,
        nameEn: "Oud & Roses",
        nameAr: "عود وورد",
        price: 420,
        image: "images/5.jpeg",
        rating: "★★★★★"
    },
    {
        id: 5,
        nameEn: "Bin Shaikh",
        nameAr: "بن شيخ",
        price: 450,
        image: "images/10.jpeg",
        rating: "★★★★★"
    },
    {
        id: 6,
        nameEn: "Ignite Oud",
        nameAr: "إيجنايت عود",
        price: 475,
        image: "images/11.jpeg",
        rating: "★★★★★"
    },
    {
        id: 7,
        nameEn: "Rose Diamond",
        nameAr: "روز دايموند",
        price: 380,
        image: "images/12.jpeg",
        rating: "★★★★★"
    },
    {
        id: 8,
        nameEn: "Signature Duo Set",
        nameAr: "مجموعة ديو الخاصة",
        price: 520,
        image: "images/3.jpeg",
        rating: "★★★★★"
    },
    {
        id: 9,
        nameEn: "Premium Trio Collection",
        nameAr: "مجموعة ثلاثية فاخرة",
        price: 750,
        image: "images/7.jpeg",
        rating: "★★★★★"
    },
    {
        id: 10,
        nameEn: "Bakhoor Classic",
        nameAr: "بخور كلاسيكي",
        price: 180,
        image: "images/18.jpeg",
        rating: "★★★★★"
    },
    {
        id: 11,
        nameEn: "Oud Maliki",
        nameAr: "عود ملكي",
        price: 220,
        image: "images/19.jpeg",
        rating: "★★★★★"
    },
    {
        id: 12,
        nameEn: "Mini Pocket Set",
        nameAr: "مجموعة الجيب الصغيرة",
        price: 59,
        image: "images/20.jpeg",
        rating: "★★★★★"
    }
];

const REVIEWS = [
    {
        enName: "Ahmed Al Mansoori - Dubai",
        arName: "أحمد المنصوري - دبي",
        enText: "Amazing projection and elegant smell. Ordered on WhatsApp and received quickly.",
        arText: "ثبات وفوحان ممتاز، والطلب عبر واتساب كان سهل وسريع."
    },
    {
        enName: "Fatima Al Nuaimi - Abu Dhabi",
        arName: "فاطمة النعيمي - أبوظبي",
        enText: "Premium quality for this price. The mini set is perfect for my handbag.",
        arText: "جودة ممتازة مقابل السعر، ومجموعة الميني مناسبة جدًا للحقيبة."
    },
    {
        enName: "Omar Al Kaabi - Sharjah",
        arName: "عمر الكعبي - الشارقة",
        enText: "Scent lasts long even outdoors. Customer support is responsive on WhatsApp.",
        arText: "العطر يدوم طويلًا حتى خارج المنزل، والدعم على واتساب سريع."
    },
    {
        enName: "Mariam Al Mazrouei - Ajman",
        arName: "مريم المزروعي - عجمان",
        enText: "Loved the presentation and the fragrance profile. Will order again.",
        arText: "أعجبني التغليف ورائحة العطر جدًا، وسأطلب مرة أخرى."
    },
    {
        enName: "Saeed Al Dhaheri - Al Ain",
        arName: "سعيد الظاهري - العين",
        enText: "Fast delivery and authentic feeling perfumes. Highly recommended.",
        arText: "توصيل سريع وعطور أصلية بطابع فاخر. أنصح بها بقوة."
    }
];

const FAQ_ITEMS = [
    {
        qEn: "Delivery time in UAE?",
        qAr: "ما مدة التوصيل داخل الإمارات؟",
        aEn: "Most orders are delivered within 1 to 3 business days based on your city.",
        aAr: "يتم توصيل أغلب الطلبات خلال 1 إلى 3 أيام عمل حسب المدينة."
    },
    {
        qEn: "Payment methods?",
        qAr: "ما طرق الدفع المتاحة؟",
        aEn: "We currently support Cash on Delivery to maximize convenience.",
        aAr: "ندعم حاليًا الدفع عند الاستلام لتسهيل تجربة الشراء."
    },
    {
        qEn: "Product authenticity?",
        qAr: "هل المنتجات أصلية؟",
        aEn: "Yes. Velvet Scent provides quality-checked fragrance products for UAE customers.",
        aAr: "نعم. فيلفت سينت يقدم منتجات عطرية تم فحص جودتها لعملاء الإمارات."
    },
    {
        qEn: "Refund policy?",
        qAr: "ما سياسة الاسترجاع؟",
        aEn: "If there is an issue with your delivery, contact us on WhatsApp and we will assist promptly.",
        aAr: "في حال وجود مشكلة في الطلب، تواصل معنا عبر واتساب وسنساعدك فورًا."
    }
];

const I18N = {
    en: {
        navHome: "Home",
        navShop: "Shop",
        navReviews: "Reviews",
        navFaq: "FAQ",
        navContact: "Contact",
        cart: "Cart",
        offer: "45% OFF - Limited Time",
        heroTitle: "Unleash Your Signature Scent",
        heroSub: "Luxury Fragrances for Men and Women in UAE",
        shopNow: "Shop Now",
        orderWhatsapp: "Order on WhatsApp",
        productsTitle: "Best Selling Collection",
        whyKicker: "Why Choose Us",
        whyTitle: "Luxury Crafted for Everyday Confidence",
        f1t: "Long-lasting Fragrance",
        f1d: "Performance that stays fresh for hours in UAE weather.",
        f2t: "Premium Oils",
        f2d: "High-quality concentrated oils for rich signature scent trails.",
        f3t: "Affordable Luxury",
        f3d: "Luxury feeling at conversion-focused, practical prices.",
        f4t: "Unisex Perfumes",
        f4d: "Balanced profiles made for both men and women.",
        f5t: "Fast UAE Delivery",
        f5d: "Quick dispatch and reliable local shipping support.",
        howKicker: "How To Order",
        howTitle: "Simple WhatsApp Checkout Flow",
        s1t: "Select Product",
        s1d: "Choose your favorite perfume set from the collection.",
        s2t: "Click WhatsApp",
        s2d: "Use direct order or cart checkout to open WhatsApp.",
        s3t: "Fill Details",
        s3d: "Enter your name, phone, UAE address, and city.",
        s4t: "Confirm Order",
        s4d: "Send and our team confirms your order quickly.",
        reviewsKicker: "Customer Reviews",
        reviewsTitle: "Trusted by Customers Across UAE",
        tb1t: "Cash on Delivery Available",
        tb1d: "Pay only when your order reaches your door.",
        tb2t: "Fast Shipping Across UAE",
        tb2d: "Coverage across Dubai, Abu Dhabi, Sharjah and more.",
        tb3t: "100% Satisfaction Guarantee",
        tb3d: "Support team ready to help if you need assistance.",
        faqTitle: "Frequently Asked Questions",
        aboutKicker: "About Velvet Scent",
        aboutTitle: "Identity, Confidence, and Elegant Presence",
        aboutText: "At Velvet Scent, we believe fragrance is your unseen signature. Our creations are inspired by confidence, refined identity, and timeless elegance. Each blend is crafted to help you stand out with sophistication from day to night, delivering premium character in every spray.",
        footerTag: "Luxury fragrances for UAE customers.",
        whatsLabel: "WhatsApp",
        socialLabel: "Social",
        stickyOrder: "Order Now",
        cartTitle: "Your Selection",
        total: "Total",
        checkoutWhatsapp: "Checkout on WhatsApp",
        checkoutFormTitle: "Complete Your WhatsApp Order",
        fullName: "Full Name",
        phoneNumber: "Phone Number",
        deliveryAddress: "Delivery Address (UAE)",
        city: "City",
        paymentCod: "Payment Method: Cash on Delivery",
        sendOrder: "Send Order",
        exitKicker: "Wait Before You Go",
        exitTitle: "Get 10% Extra on Your WhatsApp Order",
        exitText: "Message us now and mention code VELVET10 to unlock your additional discount.",
        quickView: "Quick View",
        addToCart: "Add to Cart",
        emptyCart: "Your cart is empty.",
        remove: "Remove"
    },
    ar: {
        navHome: "الرئيسية",
        navShop: "المتجر",
        navReviews: "التقييمات",
        navFaq: "الأسئلة الشائعة",
        navContact: "اتصل بنا",
        cart: "السلة",
        offer: "خصم 45% - لفترة محدودة",
        heroTitle: "أطلق عطرك المميز",
        heroSub: "عطور فاخرة للرجال والنساء في الإمارات",
        shopNow: "تسوق الآن",
        orderWhatsapp: "اطلب عبر واتساب",
        productsTitle: "الأكثر مبيعًا",
        whyKicker: "لماذا نحن",
        whyTitle: "فخامة مصممة لثقة يومية",
        f1t: "ثبات طويل",
        f1d: "أداء يدوم لساعات في أجواء الإمارات.",
        f2t: "زيوت فاخرة",
        f2d: "زيوت مركزة عالية الجودة لانتشار واضح.",
        f3t: "فخامة بسعر مناسب",
        f3d: "إحساس فاخر بسعر عملي ومنافس.",
        f4t: "عطور للجنسين",
        f4d: "تركيبات متوازنة للرجال والنساء.",
        f5t: "توصيل سريع داخل الإمارات",
        f5d: "شحن سريع ودعم محلي موثوق.",
        howKicker: "طريقة الطلب",
        howTitle: "خطوات سهلة عبر واتساب",
        s1t: "اختر المنتج",
        s1d: "اختر عطرك المفضل من المجموعة.",
        s2t: "اضغط واتساب",
        s2d: "اطلب مباشرة أو من خلال السلة.",
        s3t: "أدخل التفاصيل",
        s3d: "أدخل الاسم والهاتف والعنوان والمدينة.",
        s4t: "تأكيد الطلب",
        s4d: "أرسل الرسالة وسيتم التأكيد بسرعة.",
        reviewsKicker: "آراء العملاء",
        reviewsTitle: "موثوق من العملاء في الإمارات",
        tb1t: "الدفع عند الاستلام متاح",
        tb1d: "ادفع فقط عند استلام طلبك.",
        tb2t: "شحن سريع في جميع الإمارات",
        tb2d: "تغطية في دبي وأبوظبي والشارقة والمزيد.",
        tb3t: "ضمان رضا 100%",
        tb3d: "فريق الدعم جاهز لمساعدتك دائمًا.",
        faqTitle: "الأسئلة الشائعة",
        aboutKicker: "عن فيلفت سينت",
        aboutTitle: "هوية وثقة وأناقة",
        aboutText: "في فيلفت سينت نؤمن أن العطر هو توقيعك غير المرئي. تركيباتنا مستوحاة من الثقة والهوية الراقية والأناقة الخالدة، لتمنحك حضورًا مميزًا من الصباح إلى المساء.",
        footerTag: "عطور فاخرة لعملاء الإمارات.",
        whatsLabel: "واتساب",
        socialLabel: "منصات التواصل",
        stickyOrder: "اطلب الآن",
        cartTitle: "اختياراتك",
        total: "الإجمالي",
        checkoutWhatsapp: "إتمام الطلب عبر واتساب",
        checkoutFormTitle: "أكمل طلبك عبر واتساب",
        fullName: "الاسم الكامل",
        phoneNumber: "رقم الهاتف",
        deliveryAddress: "عنوان التوصيل (الإمارات)",
        city: "المدينة",
        paymentCod: "طريقة الدفع: الدفع عند الاستلام",
        sendOrder: "إرسال الطلب",
        exitKicker: "قبل أن تغادر",
        exitTitle: "احصل على خصم إضافي 10%",
        exitText: "راسلنا الآن واذكر الكود VELVET10 للحصول على خصم إضافي.",
        quickView: "عرض سريع",
        addToCart: "أضف إلى السلة",
        emptyCart: "سلتك فارغة.",
        remove: "حذف"
    }
};
/* END: Constants */

/* START: State */
let cart = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || "[]");
let currentLang = localStorage.getItem(STORAGE_KEYS.LANG) || "en";
let currentTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
let sliderIndex = 0;
let sliderTimer = null;
let selectedQuickProduct = null;
/* END: State */

/* START: Helpers */
function t(key) {
    return I18N[currentLang][key] || key;
}

function getProductName(product) {
    return currentLang === "ar" ? product.nameAr : product.nameEn;
}

function getProductBenefit(product) {
    return ""; // Removed benefit text for cleaner UI
}

let currentOrderProduct = null;

function openOrderForm(productId) {
    const product = PRODUCTS.find((item) => item.id === productId);
    if (!product) return;
    
    currentOrderProduct = product;
    document.getElementById("orderFormTitle").textContent = currentLang === "en" 
        ? `Order: ${product.nameEn}` 
        : `الطلب: ${product.nameAr}`;
    openModal("checkoutModal");
}

function buildOrderMessage(product, customer) {
    const lines = [
        "Hello, I would like to place an order from Velvet Scent.",
        "",
        `🛍 Product: ${product.nameEn}`,
        `💰 Price: AED ${product.price}`,
        "",
        `👤 Full Name: ${customer.fullName}`,
        `📞 Phone: ${customer.phoneNumber}`,
        `📍 Address: ${customer.deliveryAddress}`,
        `🏙 City: ${customer.city}`,
        "",
        "💳 Payment: Cash on Delivery",
        "",
        "Please confirm my order. Thank you!"
    ];
    return encodeURIComponent(lines.join("\n"));
}

function buildCartOrderMessage(customer) {
    const itemsText = cart.map((item, index) => {
        return `${index + 1}. ${item.name} x ${item.qty} - AED ${item.price * item.qty}`;
    }).join("\n");

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const lines = [
        "Hello, I would like to place an order from Velvet Scent.",
        "",
        "Order Items:",
        itemsText,
        `Total: AED ${total}`,
        "",
        `Full Name: ${customer.fullName}`,
        `Phone Number: ${customer.phoneNumber}`,
        `Delivery Address (UAE): ${customer.deliveryAddress}`,
        `City: ${customer.city}`,
        "",
        "Payment Method: Cash on Delivery",
        "",
        "Please confirm my order. Thank you!"
    ];

    return encodeURIComponent(lines.join("\n"));
}

function openWhatsappWithText(encodedText) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(url, "_blank", "noopener");
}
/* END: Helpers */

/* START: Product Rendering */
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.innerHTML = PRODUCTS.map((product) => {
        return `
            <article class="product-card">
                <img src="${product.image}" alt="${getProductName(product)}" loading="lazy">
                <div class="product-body">
                    <h3>${getProductName(product)}</h3>
                    <p class="price-line">AED ${product.price}</p>
                    <p class="stars">${product.rating}</p>
                    <div class="product-actions">
                        <button class="btn btn-gold order-now-btn" data-id="${product.id}" type="button">Order Now</button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    bindProductActions();
}

function bindProductActions() {
    document.querySelectorAll(".order-now-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            openOrderForm(id);
        });
    });
}
/* END: Product Rendering */

/* START: Reviews + FAQ Rendering */
function renderReviews() {
    const grid = document.getElementById("reviewsGrid");
    if (!grid) return;

    grid.innerHTML = REVIEWS.map((item) => {
        return `
            <article class="review-card">
                <p class="stars">★★★★★</p>
                <p>${currentLang === "ar" ? item.arText : item.enText}</p>
                <p class="review-name">${currentLang === "ar" ? item.arName : item.enName}</p>
            </article>
        `;
    }).join("");
}

function renderFaq() {
    const list = document.getElementById("faqList");
    if (!list) return;

    list.innerHTML = FAQ_ITEMS.map((item, idx) => {
        return `
            <article class="faq-item">
                <button class="faq-question" type="button" data-faq="${idx}">
                    ${currentLang === "ar" ? item.qAr : item.qEn}
                </button>
                <div class="faq-answer">
                    <p>${currentLang === "ar" ? item.aAr : item.aEn}</p>
                </div>
            </article>
        `;
    }).join("");

    list.querySelectorAll(".faq-question").forEach((btn) => {
        btn.addEventListener("click", () => {
            const faqItem = btn.closest(".faq-item");
            faqItem.classList.toggle("open");
        });
    });
}
/* END: Reviews + FAQ Rendering */

/* START: Cart Logic */
function addToCart(productId) {
    const product = PRODUCTS.find((item) => item.id === productId);
    if (!product) return;

    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.nameEn,
            nameAr: product.nameAr,
            price: product.price,
            image: product.image,
            qty: 1
        });
    }

    persistCart();
    openCartDrawer();
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    persistCart();
}

function changeCartQty(productId, delta) {
    const item = cart.find((entry) => entry.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    persistCart();
}

function persistCart() {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = String(count);
}

function renderCart() {
    const container = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");
    if (!container || !totalEl) return;

    if (cart.length === 0) {
        container.innerHTML = `<p>${t("emptyCart")}</p>`;
        totalEl.textContent = "AED 0";
        return;
    }

    container.innerHTML = cart.map((item) => {
        const name = currentLang === "ar" ? item.nameAr : item.name;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${name}" loading="lazy">
                <div>
                    <p><strong>${name}</strong></p>
                    <p>AED ${item.price}</p>
                    <div class="qty-row">
                        <button type="button" class="qty-minus" data-id="${item.id}">-</button>
                        <span>${item.qty}</span>
                        <button type="button" class="qty-plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="icon-btn remove-item" data-id="${item.id}" type="button" aria-label="${t("remove")}">🗑</button>
            </div>
        `;
    }).join("");

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    totalEl.textContent = `AED ${total}`;

    container.querySelectorAll(".qty-minus").forEach((btn) => {
        btn.addEventListener("click", () => changeCartQty(Number(btn.dataset.id), -1));
    });

    container.querySelectorAll(".qty-plus").forEach((btn) => {
        btn.addEventListener("click", () => changeCartQty(Number(btn.dataset.id), 1));
    });

    container.querySelectorAll(".remove-item").forEach((btn) => {
        btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.id)));
    });
}
/* END: Cart Logic */

/* START: Drawer + Modal Controls */
function openCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("overlay");
    if (!drawer || !overlay) return;

    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.classList.add("show");
}

function closeCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    if (!drawer) return;
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
}

function openModal(id) {
    const modal = document.getElementById(id);
    const overlay = document.getElementById("overlay");
    if (!modal || !overlay) return;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    overlay.classList.add("show");
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
}

function closeAllOverlays() {
    closeCartDrawer();
    closeModal("quickViewModal");
    closeModal("checkoutModal");
    closeModal("exitIntentModal");

    const overlay = document.getElementById("overlay");
    if (overlay) overlay.classList.remove("show");
}
/* END: Drawer + Modal Controls */

/* START: Quick View */
function openQuickView(productId) {
    const product = PRODUCTS.find((item) => item.id === productId);
    if (!product) return;

    selectedQuickProduct = product;

    const image = document.getElementById("quickViewImage");
    const name = document.getElementById("quickViewName");
    const benefit = document.getElementById("quickViewBenefit");
    const price = document.getElementById("quickViewPrice");

    if (image) {
        image.src = product.image;
        image.alt = getProductName(product);
    }
    if (name) name.textContent = getProductName(product);
    if (benefit) benefit.textContent = getProductBenefit(product);
    if (price) price.textContent = `AED ${product.price}`;

    openModal("quickViewModal");
}
/* END: Quick View */

/* START: Slider */
function renderSliderDots() {
    const dotsWrap = document.getElementById("sliderDots");
    const slides = document.querySelectorAll(".hero-slide");
    if (!dotsWrap || slides.length === 0) return;

    dotsWrap.innerHTML = "";
    slides.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.type = "button";
        if (idx === sliderIndex) dot.classList.add("active");
        dot.addEventListener("click", () => {
            sliderIndex = idx;
            showSlide();
            restartSliderTimer();
        });
        dotsWrap.appendChild(dot);
    });
}

function showSlide() {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll("#sliderDots button");

    slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === sliderIndex);
    });

    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === sliderIndex);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(".hero-slide");
    if (slides.length === 0) return;
    sliderIndex = (sliderIndex + 1) % slides.length;
    showSlide();
}

function prevSlide() {
    const slides = document.querySelectorAll(".hero-slide");
    if (slides.length === 0) return;
    sliderIndex = (sliderIndex - 1 + slides.length) % slides.length;
    showSlide();
}

function restartSliderTimer() {
    if (sliderTimer) clearInterval(sliderTimer);
    sliderTimer = setInterval(nextSlide, 4000);
}
/* END: Slider */

/* START: Language + Theme */
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEYS.LANG, currentLang);

    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", lang === "ar");

    document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.getAttribute("data-i18n");
        if (I18N[currentLang][key]) {
            node.textContent = I18N[currentLang][key];
        }
    });

    renderProducts();
    renderReviews();
    renderFaq();
    renderCart();

    const toggle = document.getElementById("langToggle");
    if (toggle) {
        toggle.textContent = currentLang === "en" ? "EN | العربية" : "العربية | EN";
    }
}

function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(STORAGE_KEYS.THEME, currentTheme);
    document.body.setAttribute("data-theme", theme);

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        themeBtn.textContent = theme === "dark" ? "Dark" : "Light";
    }
}
/* END: Language + Theme */

/* START: Live Order Popup */
function startLiveOrderPopup() {
    const popup = document.getElementById("liveOrderPopup");
    if (!popup) return;

    const citiesEn = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Al Ain"];
    const namesEn = ["Ahmed", "Fatima", "Omar", "Mariam", "Saeed", "Noora"];
    const citiesAr = ["دبي", "أبوظبي", "الشارقة", "عجمان", "العين"];
    const namesAr = ["أحمد", "فاطمة", "عمر", "مريم", "سعيد", "نورة"];

    function showRandom() {
        const name = currentLang === "ar"
            ? namesAr[Math.floor(Math.random() * namesAr.length)]
            : namesEn[Math.floor(Math.random() * namesEn.length)];

        const city = currentLang === "ar"
            ? citiesAr[Math.floor(Math.random() * citiesAr.length)]
            : citiesEn[Math.floor(Math.random() * citiesEn.length)];

        const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];

        popup.textContent = currentLang === "ar"
            ? `${name} من ${city} طلب ${getProductName(product)}`
            : `${name} from ${city} just ordered ${getProductName(product)}`;

        popup.classList.add("show");
        setTimeout(() => popup.classList.remove("show"), 3800);
    }

    setTimeout(showRandom, 2500);
    setInterval(showRandom, 9000);
}
/* END: Live Order Popup */

/* START: Exit Intent */
function bindExitIntent() {
    if (localStorage.getItem(STORAGE_KEYS.EXIT) === "yes") return;

    document.addEventListener("mouseleave", (event) => {
        if (event.clientY <= 0) {
            openModal("exitIntentModal");
            localStorage.setItem(STORAGE_KEYS.EXIT, "yes");
        }
    }, { once: true });
}
/* END: Exit Intent */

/* START: Events */
function bindEvents() {
    const navBtn = document.getElementById("mobileNavBtn");
    const nav = document.getElementById("mainNav");

    navBtn?.addEventListener("click", () => {
        nav?.classList.toggle("open");
    });

    document.querySelectorAll(".main-nav a").forEach((link) => {
        link.addEventListener("click", () => nav?.classList.remove("open"));
    });

    document.getElementById("langToggle")?.addEventListener("click", () => {
        applyLanguage(currentLang === "en" ? "ar" : "en");
    });

    document.getElementById("themeToggle")?.addEventListener("click", () => {
        applyTheme(currentTheme === "dark" ? "light" : "dark");
    });

    document.getElementById("cartBtn")?.addEventListener("click", openCartDrawer);
    document.getElementById("closeCartBtn")?.addEventListener("click", closeAllOverlays);
    document.getElementById("overlay")?.addEventListener("click", closeAllOverlays);

    document.getElementById("sliderNext")?.addEventListener("click", () => {
        nextSlide();
        restartSliderTimer();
    });

    document.getElementById("sliderPrev")?.addEventListener("click", () => {
        prevSlide();
        restartSliderTimer();
    });

    ["heroWhatsappBtn", "heroWhatsappBtn2", "heroWhatsappBtn3"].forEach((id) => {
        document.getElementById(id)?.addEventListener("click", () => {
            // Scroll to products
            document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
        });
    });

    document.getElementById("stickyOrderBtn")?.addEventListener("click", () => {
        document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    });



    document.getElementById("closeQuickViewBtn")?.addEventListener("click", closeAllOverlays);
    document.getElementById("closeCheckoutBtn")?.addEventListener("click", closeAllOverlays);
    document.getElementById("closeExitIntentBtn")?.addEventListener("click", closeAllOverlays);



    document.getElementById("checkoutForm")?.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!currentOrderProduct) return;

        const fullName = document.getElementById("fullName")?.value.trim() || "";
        const phoneNumber = document.getElementById("phoneNumber")?.value.trim() || "";
        const deliveryAddress = document.getElementById("deliveryAddress")?.value.trim() || "";
        const city = document.getElementById("city")?.value.trim() || "";

        // Basic validation
        if (!fullName || !phoneNumber || !deliveryAddress || !city) {
            alert("Please fill in all required fields");
            return;
        }

        const customer = {
            fullName: fullName,
            phoneNumber: phoneNumber,
            deliveryAddress: deliveryAddress,
            city: city
        };

        const encodedText = buildOrderMessage(currentOrderProduct, customer);
        openWhatsappWithText(encodedText);

        closeAllOverlays();
        event.target.reset();
        currentOrderProduct = null;
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const targetId = anchor.getAttribute("href");
            if (!targetId || targetId === "#") return;
            const section = document.querySelector(targetId);
            if (!section) return;
            event.preventDefault();
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}
/* END: Events */

/* START: Init */
function init() {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    renderSliderDots();
    showSlide();
    restartSliderTimer();

    applyTheme(currentTheme);
    applyLanguage(currentLang);

    renderProducts();
    renderReviews();
    renderFaq();
    renderCart();
    updateCartCount();

    bindEvents();
    bindExitIntent();
    startLiveOrderPopup();
}

document.addEventListener("DOMContentLoaded", init);
/* END: Init */
