const WHATSAPP_NUMBER = '971547220879';
const STORAGE_KEYS = {
  cart: 'velvet_cart',
  theme: 'velvet_theme',
  lang: 'velvet_lang',
  exitSeen: 'velvet_exit_seen'
};

const HERO_SLIDES = ['images/28.jpeg', 'images/14.jpeg', 'images/19.jpeg'];
const PRODUCT_FILES = [
  '1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg',
  '10.jpeg','11.jpeg','12.jpeg','13.jpeg','14.jpeg','15.jpeg','16.jpeg','17.jpeg','18.jpeg',
  '19.jpeg','20.jpeg','21.jpeg','22.jpeg','23.jpeg','24.jpeg','25.jpeg','26.jpeg','27.jpeg','28.jpeg'
];

const EMIRATE_CITIES = {
  Dubai: ['Dubai', 'Deira', 'Jumeirah', 'Dubai Marina', 'Business Bay', 'Al Barsha'],
  'Abu Dhabi': ['Abu Dhabi', 'Al Ain', 'Khalifa City', 'Mohammed Bin Zayed City'],
  Sharjah: ['Sharjah', 'Al Nahda', 'Muwailih', 'Khor Fakkan', 'Dhaid'],
  Ajman: ['Ajman', 'Al Jurf', 'Al Hamidiya', 'Al Nuaimiya'],
  'Ras Al Khaimah': ['Ras Al Khaimah', 'Al Hamra', 'Mina Al Arab'],
  Fujairah: ['Fujairah', 'Dibba Al Fujairah'],
  'Umm Al Quwain': ['Umm Al Quwain'],
  'Al Ain': ['Al Ain']
};

const TRANSLATIONS = {
  en: {
    navHome: 'Home', navShop: 'Shop', navReviews: 'Reviews', navContact: 'Contact',
    heroTitle: 'Unleash Your Signature Scent',
    heroSub: 'Luxury Fragrances for Men and Women in UAE',
    heroCtaShop: 'Shop Now',
    heroCtaWhatsApp: 'WhatsApp Order',
    productsTitle: 'Luxury Perfume Collection',
    productsSub: 'Browse every fragrance and open the detail view to add it to your order.',
    viewDetails: 'View Details',
    addToOrder: 'Add to Order',
    cartTitle: 'Cart',
    cartEmpty: 'Your cart is empty.',
    cartProceed: 'Proceed to WhatsApp Order',
    orderFormTitle: 'Complete Your WhatsApp Order',
    fullName: 'Full Name',
    phone: 'Phone Number',
    emirate: 'State / Emirate',
    city: 'City',
    address: 'Delivery Address',
    sendOrder: 'Send Order to WhatsApp',
    stickyOrder: 'Order Now',
    whyTitle: 'Why Velvet Scent',
    reviewsTitle: 'Customer Reviews',
    footerBrand: 'Velvet Scent – Luxury Fragrance Brand',
    footerContact: 'WhatsApp',
    developerCredit: 'Developed By: Abdul Rehman Ali',
    copyright: '© 2026 Velvet Scent. All Rights Reserved. Developed by Abdul Rehman Ali',
    paymentCod: 'Cash on Delivery (UAE)',
    orderConfirmed: 'Your order is ready to send via WhatsApp.'
  },
  ar: {
    navHome: 'الرئيسية', navShop: 'المتجر', navReviews: 'التقييمات', navContact: 'التواصل',
    heroTitle: 'أطلق عطرك المميز',
    heroSub: 'عطور فاخرة للرجال والنساء في الإمارات',
    heroCtaShop: 'تسوق الآن',
    heroCtaWhatsApp: 'طلب واتساب',
    productsTitle: 'مجموعة العطور الفاخرة',
    productsSub: 'تصفح كل عطر وافتح التفاصيل لإضافته إلى طلبك.',
    viewDetails: 'عرض التفاصيل',
    addToOrder: 'أضف إلى الطلب',
    cartTitle: 'السلة',
    cartEmpty: 'سلتك فارغة.',
    cartProceed: 'إتمام الطلب عبر واتساب',
    orderFormTitle: 'أكمل طلبك عبر واتساب',
    fullName: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    emirate: 'الولاية / الإمارة',
    city: 'المدينة',
    address: 'عنوان التوصيل',
    sendOrder: 'إرسال الطلب إلى واتساب',
    stickyOrder: 'اطلب الآن',
    whyTitle: 'لماذا فيلفت سينت',
    reviewsTitle: 'آراء العملاء',
    footerBrand: 'فيلفت سينت – علامة عطور فاخرة',
    footerContact: 'واتساب',
    developerCredit: 'تم التطوير بواسطة: عبد الرحمن علي',
    copyright: '© 2026 Velvet Scent. جميع الحقوق محفوظة. تم التطوير بواسطة عبد الرحمن علي',
    paymentCod: 'الدفع عند الاستلام (الإمارات)',
    orderConfirmed: 'طلبك جاهز للإرسال عبر واتساب.'
  }
};

const REVIEWS = [
  { en: 'Ahmed Al Mansoori from Dubai said the scent is elegant and long lasting.', ar: 'أحمد المنصوري من دبي قال إن الرائحة أنيقة وثابتة.' },
  { en: 'Fatima Al Nuaimi from Abu Dhabi loved the premium feel and fast service.', ar: 'فاطمة النعيمي من أبوظبي أعجبتها الجودة الفاخرة وسرعة الخدمة.' },
  { en: 'Omar Al Kaabi from Sharjah praised the smooth WhatsApp order experience.', ar: 'عمر الكعبي من الشارقة أشاد بسهولة الطلب عبر واتساب.' },
  { en: 'Mariam Al Mazrouei from Ajman said the bottles look as premium as they smell.', ar: 'مريم المزروعي من عجمان قالت إن العبوات فاخرة مثل الرائحة.' },
  { en: 'Saeed Al Dhaheri from Al Ain recommended Velvet Scent for daily wear.', ar: 'سعيد الظاهري من العين أوصى بفيلفت سينت للاستخدام اليومي.' }
];

const BASE_PRICES = [39, 49, 59, 69, 79, 89, 99, 109, 119, 129, 139, 149, 159, 169, 179, 189, 199, 209, 219, 229, 239, 249, 259, 269, 279, 289, 299, 309];

const PRODUCTS = PRODUCT_FILES.map((file, index) => {
  const code = String(index + 1).padStart(2, '0');
  const name = `Velvet Scent ${code}`;
  const price = BASE_PRICES[index] || (39 + (index * 10));
  const category = index < 12 ? 'perfume' : index < 20 ? 'giftset' : 'dakhoon';
  return {
    id: index + 1,
    name,
    img: `images/${file}`,
    price,
    desc: `A luxurious fragrance selected from the Velvet Scent collection, designed for refined UAE tastes and elegant daily wear.`,
    category,
    bestSeller: index === 4 || index === 9 || index === 13,
    badge: index === 4 ? 'Best Seller' : index === 9 ? 'Limited' : ''
  };
});

let cart = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || '[]');
let currentTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'light';
let currentLang = localStorage.getItem(STORAGE_KEYS.lang) || 'en';
let currentSlide = 0;
let heroTimer = null;
let activeProduct = null;
let currentOrderMode = 'cart';

function money(value) {
  return `AED ${value}`;
}

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key;
}

function getProductById(id) {
  return PRODUCTS.find((product) => product.id === Number(id));
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach((el) => {
    el.textContent = String(count);
    el.style.display = 'inline-grid';
  });
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;
  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });
  saveCart();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== Number(productId));
  saveCart();
}

function changeQty(productId, delta) {
  const item = cart.find((entry) => entry.id === Number(productId));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  if (!cartItems || !cartTotal) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="cart-empty-message">${t('cartEmpty')}</p>`;
    cartTotal.textContent = money(0);
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-row">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <div class="cart-row__info">
        <strong>${item.name}</strong>
        <span>${money(item.price)}</span>
        <div class="cart-qty">
          <button type="button" data-action="minus" data-id="${item.id}">−</button>
          <span>${item.qty}</span>
          <button type="button" data-action="plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <div class="cart-row__actions">
        <strong>${money(item.price * item.qty)}</strong>
        <button type="button" class="remove-line" data-remove="${item.id}">✕</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  cartTotal.textContent = money(total);

  cartItems.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      const action = button.getAttribute('data-action');
      changeQty(id, action === 'plus' ? 1 : -1);
    });
  });

  cartItems.querySelectorAll('[data-remove]').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(button.getAttribute('data-remove')));
  });
}

function renderProducts() {
  const targets = ['productsGrid', 'product-grid'];
  targets.forEach((targetId) => {
    const grid = document.getElementById(targetId);
    if (!grid) return;
    grid.innerHTML = PRODUCTS.map((product) => `
      <article class="product-card glass-card ${product.bestSeller ? 'best-seller' : ''}" data-product-id="${product.id}">
        <div class="product-media">
          <img src="${product.img}" alt="${product.name}" loading="lazy">
          ${product.bestSeller ? '<span class="product-badge">Best Seller</span>' : ''}
        </div>
        <div class="product-copy">
          <div class="product-copy__head">
            <h3>${product.name}</h3>
            <strong>${money(product.price)}</strong>
          </div>
          <p>${product.desc}</p>
          <button class="btn btn-gold product-view-btn" type="button" data-view="${product.id}">${t('viewDetails')}</button>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('[data-view]').forEach((button) => {
      button.addEventListener('click', () => openProductModal(button.getAttribute('data-view')));
    });

    grid.querySelectorAll('.product-card').forEach((card) => {
      card.addEventListener('click', (event) => {
        if (event.target.closest('button')) return;
        openProductModal(card.getAttribute('data-product-id'));
      });
    });
  });
}

function renderReviews() {
  const target = document.getElementById('reviewsGrid');
  if (!target) return;
  target.innerHTML = REVIEWS.map((review) => `
    <article class="review-card glass-card">
      <div class="review-stars">★★★★★</div>
      <p>${currentLang === 'ar' ? review.ar : review.en}</p>
    </article>
  `).join('');
}

function renderFaq() {
  const target = document.getElementById('faqList');
  if (!target) return;
  const items = [
    { q: currentLang === 'ar' ? 'كم مدة التوصيل داخل الإمارات؟' : 'How long is delivery in UAE?', a: currentLang === 'ar' ? 'عادةً من يوم إلى ثلاثة أيام عمل حسب الإمارة.' : 'Usually 1 to 3 business days depending on your emirate.' },
    { q: currentLang === 'ar' ? 'ما هي طريقة الدفع؟' : 'What payment method do you accept?', a: currentLang === 'ar' ? 'الدفع عند الاستلام داخل الإمارات فقط.' : 'Cash on Delivery within the UAE.' },
    { q: currentLang === 'ar' ? 'هل أحتاج حسابًا للطلب؟' : 'Do I need an account to order?', a: currentLang === 'ar' ? 'لا، فقط أضف المنتجات وأكمل النموذج ثم أرسل الطلب.' : 'No. Add items, complete the form, and send the order.' },
    { q: currentLang === 'ar' ? 'هل لديكم دعم واتساب؟' : 'Do you offer WhatsApp support?', a: currentLang === 'ar' ? 'نعم، واتساب هو وسيلة التواصل والطلب الوحيدة.' : 'Yes. WhatsApp is the only contact and ordering channel.' }
  ];

  target.innerHTML = items.map((item, index) => `
    <button class="faq-item glass-card" type="button" data-faq="${index}">
      <span>${item.q}</span>
      <small>${item.a}</small>
    </button>
  `).join('');

  target.querySelectorAll('[data-faq]').forEach((btn) => {
    btn.addEventListener('click', () => btn.classList.toggle('open'));
  });
}

function setHeroSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function nextSlide() {
  setHeroSlide(currentSlide + 1);
}

function prevSlide() {
  setHeroSlide(currentSlide - 1);
}

function startHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('sliderDots');
  if (!slides.length || !dotsWrap) return;

  dotsWrap.innerHTML = slides.map((_, index) => `<button type="button" class="slider-dot ${index === 0 ? 'active' : ''}" aria-label="Slide ${index + 1}" data-slide="${index}"></button>`).join('');
  dotsWrap.querySelectorAll('[data-slide]').forEach((dot) => {
    dot.addEventListener('click', () => setHeroSlide(Number(dot.getAttribute('data-slide'))));
  });

  setHeroSlide(0);
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(nextSlide, 4000);
}

function openOverlay() {
  document.getElementById('overlay')?.classList.add('show');
}

function closeOverlayIfIdle() {
  const open = document.querySelector('.modal.show, .cart-drawer.open');
  if (!open) document.getElementById('overlay')?.classList.remove('show');
}

function openCart() {
  const cartDrawer = document.getElementById('cartDrawer');
  if (!cartDrawer) return;
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  openOverlay();
  renderCart();
}

function closeCart() {
  const cartDrawer = document.getElementById('cartDrawer');
  if (!cartDrawer) return;
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  closeOverlayIfIdle();
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  openOverlay();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  closeOverlayIfIdle();
}

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;
  activeProduct = product;
  currentOrderMode = 'product';

  const image = document.getElementById('quickViewImage');
  const name = document.getElementById('quickViewName');
  const price = document.getElementById('quickViewPrice');
  const benefit = document.getElementById('quickViewBenefit');
  const desc = document.getElementById('quickViewDescription');

  if (image) image.src = product.img;
  if (name) name.textContent = product.name;
  if (price) price.textContent = money(product.price);
  if (benefit) benefit.textContent = product.bestSeller ? (currentLang === 'ar' ? 'الأكثر مبيعًا' : 'Best Seller') : (currentLang === 'ar' ? 'عطر فاخر مختار بعناية.' : 'Premium fragrance selected for elegance and daily wear.');
  if (desc) desc.textContent = product.desc;

  openModal('quickViewModal');
}

function openCheckoutModal() {
  currentOrderMode = 'cart';
  if (cart.length === 0 && activeProduct) {
    cart.push({ ...activeProduct, qty: 1 });
    saveCart();
  }
  populateCityOptions();
  updateOrderSummary();
  openModal('checkoutModal');
}

function updateOrderSummary() {
  const summary = document.getElementById('orderSummaryLine');
  if (!summary) return;
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  summary.textContent = currentLang === 'ar'
    ? `عدد المنتجات المختارة: ${count} - الإجمالي: ${money(total)}`
    : `Selected items: ${count} - Total: ${money(total)}`;
}

function populateEmirates() {
  const emirateSelect = document.getElementById('stateSelect');
  if (!emirateSelect) return;
  emirateSelect.innerHTML = Object.keys(EMIRATE_CITIES).map((emirate) => `<option value="${emirate}">${emirate}</option>`).join('');
}

function populateCityOptions() {
  const emirateSelect = document.getElementById('stateSelect');
  const citySelect = document.getElementById('citySelect');
  if (!emirateSelect || !citySelect) return;
  const emirate = emirateSelect.value || Object.keys(EMIRATE_CITIES)[0];
  const cities = EMIRATE_CITIES[emirate] || [emirate];
  citySelect.innerHTML = cities.map((city) => `<option value="${city}">${city}</option>`).join('');
}

function buildWhatsAppMessage(customer) {
  const items = cart.map((item) => `- ${item.name} — ${money(item.price * item.qty)}`).join('\n');
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const message = [
    'VELVET SCENT ORDER',
    '━━━━━━━━━━━━',
    '',
    'Selected Fragrances:',
    items,
    '',
    `Total: ${money(total)}`,
    '',
    '━━━━━━━━━━━━',
    '',
    'Customer Details:',
    `Name: ${customer.fullName}`,
    `Phone: ${customer.phoneNumber}`,
    `City: ${customer.city}`,
    `State: ${customer.state}`,
    `Delivery Address: ${customer.address}`,
    '',
    '━━━━━━━━━━━━',
    '',
    `💳 Payment: ${t('paymentCod')}`,
    '',
    'Please confirm my order.',
    'Thank you.'
  ].join('\n');
  return encodeURIComponent(message);
}

function openWhatsAppOrder(customer) {
  const encoded = buildWhatsAppMessage(customer);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener');
}

function handleCheckout() {
  openCheckoutModal();
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
  document.body.setAttribute('data-theme', theme);
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.textContent = theme === 'light' ? 'Light' : 'Dark';
}

function cycleTheme() {
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(STORAGE_KEYS.lang, currentLang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key]) element.textContent = TRANSLATIONS[lang][key];
  });

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang === 'en' ? 'EN | العربية' : 'العربية | EN';
  renderProducts();
  renderReviews();
  renderFaq();
  updateOrderSummary();
}

function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'ar' : 'en');
}

function bindEvents() {
  document.getElementById('mobileNavBtn')?.addEventListener('click', () => {
    document.getElementById('mainNav')?.classList.toggle('open');
  });

  document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);
  document.getElementById('themeToggle')?.addEventListener('click', cycleTheme);

  document.getElementById('sliderPrev')?.addEventListener('click', prevSlide);
  document.getElementById('sliderNext')?.addEventListener('click', nextSlide);

  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  document.getElementById('closeQuickViewBtn')?.addEventListener('click', () => closeModal('quickViewModal'));
  document.getElementById('closeCheckoutBtn')?.addEventListener('click', () => closeModal('checkoutModal'));

  document.getElementById('productModalAddBtn')?.addEventListener('click', () => {
    if (!activeProduct) return;
    addToCart(activeProduct.id);
    closeModal('quickViewModal');
    openCart();
  });

  document.getElementById('checkoutWhatsappBtn')?.addEventListener('click', openCheckoutModal);
  document.getElementById('stickyOrderBtn')?.addEventListener('click', () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('floatingWhatsAppBtn')?.addEventListener('click', (event) => {
    event.preventDefault();
    if (cart.length) openCart();
    else document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('overlay')?.addEventListener('click', () => {
    closeCart();
    closeModal('quickViewModal');
    closeModal('checkoutModal');
    closeModal('exitIntentModal');
  });

  document.getElementById('stateSelect')?.addEventListener('change', populateCityOptions);

  document.getElementById('checkoutForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!cart.length) {
      alert(currentLang === 'ar' ? 'الطلب فارغ. أضف منتجات أولاً.' : 'Your order is empty. Please add products first.');
      return;
    }

    const fullName = document.getElementById('customerName')?.value.trim();
    const phoneNumber = document.getElementById('customerPhone')?.value.trim();
    const state = document.getElementById('stateSelect')?.value;
    const city = document.getElementById('citySelect')?.value;
    const address = document.getElementById('customerAddress')?.value.trim();

    if (!fullName || !phoneNumber || !state || !city || !address) {
      alert(currentLang === 'ar' ? 'يرجى تعبئة جميع الحقول المطلوبة.' : 'Please complete all required fields.');
      return;
    }

    openWhatsAppOrder({ fullName, phoneNumber, state, city, address });
    cart = [];
    saveCart();
    event.target.reset();
    closeModal('checkoutModal');
    closeCart();
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href');
      const target = id && id !== '#' ? document.querySelector(id) : null;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeCart();
      closeModal('quickViewModal');
      closeModal('checkoutModal');
      closeModal('exitIntentModal');
    }
  });

  document.addEventListener('mouseleave', (event) => {
    if (localStorage.getItem(STORAGE_KEYS.exitSeen) === 'yes') return;
    if (event.clientY <= 0) {
      localStorage.setItem(STORAGE_KEYS.exitSeen, 'yes');
      openModal('exitIntentModal');
    }
  });

  document.getElementById('exitOrderBtn')?.addEventListener('click', () => {
    closeModal('exitIntentModal');
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('closeExitIntentBtn')?.addEventListener('click', () => closeModal('exitIntentModal'));
}

function setupHeroInteractions() {
  HERO_SLIDES.forEach((_, index) => {
    const slide = document.querySelector(`.hero-slide[data-slide="${index}"]`);
    if (slide) slide.addEventListener('click', () => setHeroSlide(index));
  });
}

function populateFooterYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

function init() {
  populateFooterYear();
  populateEmirates();
  populateCityOptions();
  renderProducts();
  renderReviews();
  renderFaq();
  renderCart();
  updateCartCount();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  startHeroSlider();
  bindEvents();
  setupHeroInteractions();

  document.querySelectorAll('.hero-slide').forEach((slide, index) => {
    slide.addEventListener('click', () => setHeroSlide(index));
  });

  // Support older page scripts without breaking the site.
  window.PRODUCTS = PRODUCTS;
  window.cart = cart;
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.changeQty = changeQty;
  window.openCart = openCart;
  window.closeCart = closeCart;
  window.handleCheckout = handleCheckout;
  window.cycleTheme = cycleTheme;
  window.toggleLanguage = toggleLanguage;
  window.updateCartUI = renderCart;
  window.openProductModal = openProductModal;
}

document.addEventListener('DOMContentLoaded', init);
