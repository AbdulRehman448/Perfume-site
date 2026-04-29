(() => {
  const STORAGE_KEYS = {
    cart: 'velvet-scents-cart',
    theme: 'velvet-scents-theme',
  };

  const noteSets = [
    'Bergamot, iris root, smoked amber, velvet woods',
    'Saffron, soft leather, cedar smoke, iris petals',
    'Black fig, rose absolute, tonka, dark musk',
    'Cashmere woods, incense, vanilla orchid, powdery amber',
    'Neroli, suede, sandalwood, pink pepper',
    'Jasmine, patchouli, resin, warm musk',
    'Pear blossom, oud, white tea, amber haze',
    'Mandarin, black tea, cedar, vetiver',
  ];

  const names = [
    'Noir Éclat',
    'Cuir Lumière',
    'Velours Minuit',
    'Amber Veil',
    'Sable Rosé',
    'Nuit Cuir',
    'Iris Noir',
    'Golden Veil',
    'Shadow Petal',
    'Obsidian Rose',
    'Velvet Ember',
    'Smoke Fleur',
    'Nuit Blanche',
    'Cashmere Resin',
    'Noir Botanique',
    'Rose Cendre',
    'Lune Saffron',
    'Atelier Musk',
    'Ébène Silk',
    'Dawn Amber',
    'Paris Nocturne',
    'Drift Iris',
    'Cuir Velvet',
    'Oro Rose',
    'Moon Fig',
    'Dark Jardin',
    'Satin Resin',
    'Noir Intense',
  ];

  const priceSteps = [168, 174, 180, 186, 192, 198];

  const products = names.map((name, index) => {
    const number = String(index + 1).padStart(2, '0');
    return {
      id: String(index + 1),
      number,
      name,
      image: `images/${index + 1}.jpeg`,
      notes: noteSets[index % noteSets.length],
      price: priceSteps[index % priceSteps.length],
    };
  });

  const money = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  });

  const getCart = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.cart);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const saveCart = (cart) => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
    updateCartCount();
  };

  const findProduct = (productId) => products.find((product) => product.id === productId);

  const updateCartCount = () => {
    const count = getCart().reduce((total, item) => total + item.qty, 0);
    document.querySelectorAll('[data-cart-count]').forEach((element) => {
      element.textContent = String(count);
    });
  };

  const setThemePreference = () => {
    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    themeToggle.checked = savedTheme === 'light';
    themeToggle.addEventListener('change', () => {
      localStorage.setItem(STORAGE_KEYS.theme, themeToggle.checked ? 'light' : 'dark');
    });
  };

  const addToCart = (productId, quantity = 1) => {
    const product = findProduct(productId);
    if (!product) return;

    const cart = getCart();
    const existing = cart.find((item) => item.id === productId);
    if (existing) {
      existing.qty += quantity;
    } else {
      cart.push({ id: productId, qty: quantity });
    }

    saveCart(cart);
  };

  const setQty = (productId, quantity) => {
    const cart = getCart();
    const existing = cart.find((item) => item.id === productId);
    if (!existing) return;

    if (quantity <= 0) {
      const filtered = cart.filter((item) => item.id !== productId);
      saveCart(filtered);
      renderCartPage();
      return;
    }

    existing.qty = quantity;
    saveCart(cart);
    renderCartPage();
  };

  const renderGallery = () => {
    const galleryGrid = document.querySelector('[data-gallery-grid]');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = products.map((product) => `
      <article class="gallery-card">
        <div class="gallery-media">
          <img src="${product.image}" alt="${product.name} fragrance bottle" loading="lazy" />
        </div>
        <div class="gallery-card__body">
          <div class="gallery-card__heading">
            <span class="gallery-number">${product.number}</span>
            <h3>${product.name}</h3>
          </div>
          <p>${product.notes}</p>
          <div class="gallery-card__meta">
            <span class="rating">★★★★★</span>
            <strong>${money.format(product.price)}</strong>
          </div>
          <div class="gallery-card__actions">
            <button class="btn btn-small" type="button" data-add-to-cart data-product-id="${product.id}">Add to Cart</button>
            <button class="btn btn-small secondary" type="button" data-buy-now data-product-id="${product.id}">Buy Now</button>
          </div>
        </div>
      </article>
    `).join('');
  };

  const renderCartPage = () => {
    const cartItemsContainer = document.querySelector('[data-cart-items]');
    const cartSummary = document.querySelector('[data-cart-summary]');
    const cartTotal = document.querySelector('[data-cart-total]');
    const cartSubtotal = document.querySelector('[data-cart-subtotal]');
    if (!cartItemsContainer || !cartSummary || !cartTotal || !cartSubtotal) return;

    const cart = getCart();
    if (!cart.length) {
      cartItemsContainer.innerHTML = `
        <div class="empty-state">
          <h3>Your cart is empty</h3>
          <p>Add fragrances from the gallery or featured collection to begin your order.</p>
          <a class="btn" href="gallery.html">Browse the Gallery</a>
        </div>
      `;
      cartSubtotal.textContent = money.format(0);
      cartTotal.textContent = money.format(0);
      cartSummary.classList.add('is-empty');
      return;
    }

    cartSummary.classList.remove('is-empty');
    const rows = cart.map((item) => {
      const product = findProduct(item.id);
      if (!product) return '';
      const lineTotal = product.price * item.qty;
      return `
        <article class="cart-item">
          <img class="cart-item__image" src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="cart-item__body">
            <div>
              <h3>${product.name}</h3>
              <p>${product.notes}</p>
            </div>
            <div class="cart-item__meta">
              <strong>${money.format(product.price)}</strong>
              <span>Line total: ${money.format(lineTotal)}</span>
            </div>
          </div>
          <div class="cart-item__controls">
            <button type="button" class="qty-btn" data-qty-change="decrease" data-product-id="${product.id}">−</button>
            <span>${item.qty}</span>
            <button type="button" class="qty-btn" data-qty-change="increase" data-product-id="${product.id}">+</button>
            <button type="button" class="remove-btn" data-remove-item data-product-id="${product.id}">Remove</button>
          </div>
        </article>
      `;
    }).join('');

    cartItemsContainer.innerHTML = rows;

    const subtotal = cart.reduce((total, item) => {
      const product = findProduct(item.id);
      return product ? total + product.price * item.qty : total;
    }, 0);

    cartSubtotal.textContent = money.format(subtotal);
    cartTotal.textContent = money.format(subtotal);
  };

  const bindCartActions = () => {
    document.addEventListener('click', (event) => {
      const addButton = event.target.closest('[data-add-to-cart]');
      if (addButton) {
        addToCart(addButton.dataset.productId);
        return;
      }

      const buyNowButton = event.target.closest('[data-buy-now]');
      if (buyNowButton) {
        addToCart(buyNowButton.dataset.productId);
        window.location.href = 'cart.html';
        return;
      }

      const qtyButton = event.target.closest('[data-qty-change]');
      if (qtyButton) {
        const productId = qtyButton.dataset.productId;
        const cart = getCart();
        const existing = cart.find((item) => item.id === productId);
        if (!existing) return;

        if (qtyButton.dataset.qtyChange === 'increase') {
          existing.qty += 1;
        } else {
          existing.qty -= 1;
        }

        const filtered = cart.filter((item) => item.qty > 0);
        saveCart(filtered);
        renderCartPage();
        return;
      }

      const removeButton = event.target.closest('[data-remove-item]');
      if (removeButton) {
        setQty(removeButton.dataset.productId, 0);
      }
    });
  };

  const bindCheckout = () => {
    const checkoutForm = document.querySelector('[data-checkout-form]');
    const orderMessage = document.querySelector('[data-order-message]');
    if (!checkoutForm || !orderMessage) return;

    checkoutForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const cart = getCart();
      if (!cart.length) {
        orderMessage.textContent = 'Your cart is empty. Add a fragrance before placing an order.';
        orderMessage.classList.add('is-error');
        return;
      }

      localStorage.removeItem(STORAGE_KEYS.cart);
      updateCartCount();
      renderCartPage();
      checkoutForm.reset();
      orderMessage.classList.remove('is-error');
      orderMessage.textContent = 'Your order request has been captured. A Velvet Scents advisor will contact you shortly.';
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    setThemePreference();
    updateCartCount();
    renderGallery();
    renderCartPage();
    bindCartActions();
    bindCheckout();
  });
})();
