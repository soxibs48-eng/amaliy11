/**
 * MOLLEN HAUTE LITERIE — CLIENT APPLICATION
 * Luxury E-Commerce, Multi-Currency, Interactive Cart Drawer, Customizer Modal
 */

// -----------------------------------------------------------------------------
// 1. Product Catalog Data
// -----------------------------------------------------------------------------
const PRODUCTS = [
  {
    id: 1,
    title: 'Комплект постельного белья "Champagne Pearl"',
    category: 'silk',
    tag: 'Флагман ателье',
    tagClass: 'tag-luxury',
    material: '100% ШЕЛК MULBERRY 22 MOMME',
    fabricInfo: 'Шелковое полотно Grade 6A с деликатным кантом цвета шампань',
    description: 'Исключительная плотность 22 Momme обеспечивает долгие годы шелковистой мягкости. Пододеяльник на скрытых пуговицах, наволочки с французским кантом 5 см.',
    priceRub: 54000,
    rating: '5.0',
    reviewsCount: 48,
    image: 'assets/images/product-silk-set.svg',
    colors: [
      { name: 'Champagne Pearl', hex: '#FAF4EB' },
      { name: 'Rose Quartz', hex: '#E8D5CA' },
      { name: 'Forest Emerald', hex: '#2F3630' },
      { name: 'Onyx Night', hex: '#222220' }
    ],
    sizes: [
      { name: '1.5-спальный (150x210)', extraRub: 0 },
      { name: 'Двуспальный (200x220)', extraRub: 0, default: true },
      { name: 'Евро Maxi (220x240)', extraRub: 6000 },
      { name: 'King Size (240x260)', extraRub: 10000 }
    ]
  },
  {
    id: 2,
    title: 'Комплект постельного белья "Graphite Onyx"',
    category: 'satin',
    tag: 'Хит продаж',
    tagClass: 'tag-bestseller',
    material: 'МАКО-САТИН 600 TC • ЕГИПЕТСКИЙ ХЛОПОК',
    fabricInfo: 'Шелковистый блеск и непревзойденная прочность длинноволокнистого хлопка Giza',
    description: 'Ткань из ультра-длинных волокон египетского хлопка Giza плотностью 600 нитей на дюйм. Выдерживает более 400 стирок, сохраняя гладкость и цвет.',
    priceRub: 28500,
    rating: '4.9',
    reviewsCount: 62,
    image: 'assets/images/product-satin-onyx.svg',
    colors: [
      { name: 'Graphite Onyx', hex: '#242422' },
      { name: 'Milky Ivory', hex: '#EDE8DE' },
      { name: 'Sage Mist', hex: '#747E70' }
    ],
    sizes: [
      { name: '1.5-спальный (150x210)', extraRub: 0 },
      { name: 'Двуспальный (200x220)', extraRub: 0, default: true },
      { name: 'Евро Maxi (220x240)', extraRub: 4000 },
      { name: 'King Size (240x260)', extraRub: 7500 }
    ]
  },
  {
    id: 3,
    title: 'Комплект "Царевна-Лебедь • Лукоморье"',
    category: 'capsule',
    tag: 'Лимитированная капсула',
    tagClass: 'tag-limited',
    material: 'АВТОРСКИЙ ШЕЛК • СКАЗКИ ПУШКИНА',
    fabricInfo: 'Художественная графика по мотивам русских сказок на нежнейшем шелке Mulberry',
    description: 'Лимитированный тираж 150 экземпляров. Каждая деталь комплекта расписана художниками Mollen и пронумерована вручную в сертификате ателье.',
    priceRub: 62000,
    rating: '5.0',
    reviewsCount: 34,
    image: 'assets/images/product-capsule-flora.svg',
    colors: [
      { name: 'Fairytale Toile', hex: '#F4EFE6' },
      { name: 'Slavic Sage', hex: '#647361' }
    ],
    sizes: [
      { name: 'Двуспальный (200x220)', extraRub: 0, default: true },
      { name: 'Евро Maxi (220x240)', extraRub: 7000 },
      { name: 'King Size (240x260)', extraRub: 12000 }
    ]
  },
  {
    id: 4,
    title: 'Шелковое кимоно макси "Emerald Forest"',
    category: 'loungewear',
    tag: 'Haute Couture',
    tagClass: 'tag-luxury',
    material: '100% ШЕЛКОВЫЙ АТЛАС • РУЧНАЯ РАБОТА',
    fabricInfo: 'Элегантный крой с глубоким запахом, широким поясом-оби и контрастным кантом',
    description: 'Невесомое кимоно из натурального шелка благородного изумрудного оттенка. Длина макси в пол, французские закрытые швы и шелковый шнур в комплекте.',
    priceRub: 36000,
    rating: '5.0',
    reviewsCount: 51,
    image: 'assets/images/product-silk-robe.svg',
    colors: [
      { name: 'Emerald Forest', hex: '#1F3F32' },
      { name: 'Pearl Ivory', hex: '#FAF4EB' },
      { name: 'Onyx Night', hex: '#242422' }
    ],
    sizes: [
      { name: 'Размер XS-S (40-44)', extraRub: 0, default: true },
      { name: 'Размер M-L (44-48)', extraRub: 0 },
      { name: 'Размер XL (48-52)', extraRub: 2500 }
    ]
  },
  {
    id: 5,
    title: 'Шелковая наволочка "Rose Quartz" 50x70',
    category: 'silk',
    tag: 'Beauty Must-Have',
    tagClass: 'tag-bestseller',
    material: '100% ШЕЛК MULBERRY 22 MOMME',
    fabricInfo: 'Французский кант 5 см, потайная молния YKK. Защита волос и кожи лица',
    description: 'Обогащена природными протеинами шелка (серицин и фиброин). Предотвращает утренние заломы на коже и сечение кончиков волос. Подарочная маска в комплекте.',
    priceRub: 9500,
    rating: '4.9',
    reviewsCount: 112,
    image: 'assets/images/product-silk-pillowcase.svg',
    colors: [
      { name: 'Rose Quartz', hex: '#E8D4CA' },
      { name: 'Champagne', hex: '#FAF4EB' },
      { name: 'Onyx', hex: '#242422' }
    ],
    sizes: [
      { name: 'Размер 50x70 см с кантом', extraRub: 0, default: true },
      { name: 'Размер 70x70 см с кантом', extraRub: 1800 }
    ]
  },
  {
    id: 6,
    title: 'Свеча "Amber & Cashmere Wood"',
    category: 'accessories',
    tag: 'Ароматерапия',
    tagClass: 'tag-luxury',
    material: 'НАТУРАЛЬНЫЙ СОЕВЫЙ ВОСК • 260Г',
    fabricInfo: 'Ноты теплой амбры, кедрового дерева, мадагаскарской ванили и шелкового мускуса',
    description: 'Интерьерная свеча в тяжелом янтарном аптекарском стекле с фитилем из органического хлопка. Время чистого горения — до 60 часов.',
    priceRub: 5800,
    rating: '4.8',
    reviewsCount: 29,
    image: 'assets/images/product-candle.svg',
    colors: [
      { name: 'Dark Amber Glass', hex: '#4A3525' }
    ],
    sizes: [
      { name: 'Объем 260 г (60 часов)', extraRub: 0, default: true }
    ]
  }
];

// -----------------------------------------------------------------------------
// 2. State Management
// -----------------------------------------------------------------------------
const state = {
  currentCurrency: 'RUB',
  currencyRates: {
    RUB: { rate: 1, symbol: '₽', suffix: true },
    USD: { rate: 0.011, symbol: '$', suffix: false },
    EUR: { rate: 0.010, symbol: '€', suffix: false }
  },
  cart: JSON.parse(localStorage.getItem('mollen_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('mollen_wishlist')) || [],
  activePromo: localStorage.getItem('mollen_promo') || null,
  activeFilter: 'all',
  activeModalProduct: null,
  selectedModalSize: null,
  selectedModalColor: null,
  selectedModalMonogram: false,
  selectedModalMonogramText: ''
};

// -----------------------------------------------------------------------------
// 3. Price & Currency Formatter
// -----------------------------------------------------------------------------
function formatPrice(rubAmount) {
  const conf = state.currencyRates[state.currentCurrency];
  const converted = Math.round(rubAmount * conf.rate);
  const formatted = converted.toLocaleString('ru-RU');
  return conf.suffix ? `${formatted} ${conf.symbol}` : `${conf.symbol}${formatted}`;
}

function updateAllPricesInDOM() {
  document.querySelectorAll('[data-rub]').forEach(el => {
    const rub = parseFloat(el.getAttribute('data-rub'));
    if (!isNaN(rub)) {
      el.textContent = formatPrice(rub);
    }
  });
  renderCart();
  if (state.activeModalProduct) {
    updateModalPriceCalculation();
  }
}

// -----------------------------------------------------------------------------
// 4. Cart Operations
// -----------------------------------------------------------------------------
function saveCart() {
  localStorage.setItem('mollen_cart', JSON.stringify(state.cart));
  updateCartBadge();
}

function updateCartBadge() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartBadgeCount');
  if (badge) {
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
  }
  const drawerBadge = document.getElementById('cartTotalItemsBadge');
  if (drawerBadge) {
    drawerBadge.textContent = `${totalQty} ${pluralize(totalQty, ['товар', 'товара', 'товаров'])}`;
  }
}

function addToCart(product, sizeName, extraRub, colorName, hasMonogram, monogramText) {
  const finalPrice = product.priceRub + extraRub + (hasMonogram ? 2500 : 0);
  const cartItemId = `${product.id}_${sizeName}_${colorName}_${hasMonogram ? monogramText : 'none'}`;

  const existing = state.cart.find(item => item.cartItemId === cartItemId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      cartItemId,
      id: product.id,
      title: product.title,
      size: sizeName,
      color: colorName,
      monogram: hasMonogram ? monogramText : '',
      priceRub: finalPrice,
      qty: 1,
      image: product.image
    });
  }

  saveCart();
  renderCart();
  openCartDrawer();
  showToast(`«${product.title}» добавлен в корзину`);
}

function updateCartQty(cartItemId, delta) {
  const item = state.cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
  }
  saveCart();
  renderCart();
}

function removeFromCart(cartItemId) {
  state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
  saveCart();
  renderCart();
  showToast('Товар удален из корзины');
}

function renderCart() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A880" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p>В вашей корзине пока пусто</p>
        <a href="#collections" class="btn btn-secondary-white" id="btnEmptyShop" onclick="closeCartDrawer()">Выбрать комплект</a>
      </div>
    `;
    updateCartTotals(0);
    return;
  }

  let html = '';
  let subtotalRub = 0;

  state.cart.forEach(item => {
    const itemTotalRub = item.priceRub * item.qty;
    subtotalRub += itemTotalRub;

    html += `
      <div class="cart-item" data-cart-id="${item.cartItemId}">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-specs">
            <span>${item.size}</span> &bull; 
            <span>${item.color}</span>
            ${item.monogram ? ` &bull; <span>Монограмма: «${item.monogram}»</span>` : ''}
          </div>
          <div class="cart-qty-stepper">
            <button class="qty-btn" onclick="updateCartQty('${item.cartItemId}', -1)">&minus;</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.cartItemId}', 1)">&plus;</button>
          </div>
        </div>
        <div class="cart-item-price-col">
          <span class="cart-item-price">${formatPrice(itemTotalRub)}</span>
          <span class="cart-item-remove" onclick="removeFromCart('${item.cartItemId}')">Удалить</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateCartTotals(subtotalRub);
}

function updateCartTotals(subtotalRub) {
  const freeThresholdRub = 15000;
  const progressPercent = Math.min(100, Math.round((subtotalRub / freeThresholdRub) * 100));
  const progressBar = document.getElementById('shippingProgressBar');
  const progressMsg = document.getElementById('shippingProgressMsg');

  if (progressBar && progressMsg) {
    progressBar.style.width = `${progressPercent}%`;
    if (subtotalRub >= freeThresholdRub) {
      progressMsg.innerHTML = '&#10003; Поздравляем! Вам доступна <strong>бесплатная доставка с примеркой</strong>.';
    } else {
      const remaining = freeThresholdRub - subtotalRub;
      progressMsg.textContent = `До бесплатной доставки осталось ${formatPrice(remaining)}`;
    }
  }

  let discountRub = 0;
  if (state.activePromo === 'MOLLEN10') {
    discountRub = Math.round(subtotalRub * 0.10);
  }

  const grandTotalRub = Math.max(0, subtotalRub - discountRub);

  // Subtotal
  const subtotalEl = document.getElementById('cartSubtotalText');
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotalRub);

  // Discount
  const discountRow = document.getElementById('cartDiscountRow');
  const discountText = document.getElementById('cartDiscountText');
  const promoAppliedBadge = document.getElementById('promoAppliedBadge');
  const promoDiscountAmount = document.getElementById('promoDiscountAmount');

  if (state.activePromo && discountRub > 0) {
    if (discountRow) discountRow.style.display = 'flex';
    if (discountText) discountText.textContent = `-${formatPrice(discountRub)}`;
    if (promoAppliedBadge) promoAppliedBadge.style.display = 'flex';
    if (promoDiscountAmount) promoDiscountAmount.textContent = formatPrice(discountRub);
  } else {
    if (discountRow) discountRow.style.display = 'none';
    if (promoAppliedBadge) promoAppliedBadge.style.display = 'none';
  }

  // Grand Total
  const grandTotalEl = document.getElementById('cartGrandTotalText');
  if (grandTotalEl) grandTotalEl.textContent = formatPrice(grandTotalRub);
}

// -----------------------------------------------------------------------------
// 5. Quick View Modal Logic
// -----------------------------------------------------------------------------
function openQuickViewModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.activeModalProduct = product;
  const defaultSize = product.sizes.find(s => s.default) || product.sizes[0];
  state.selectedModalSize = defaultSize;
  state.selectedModalColor = product.colors[0];
  state.selectedModalMonogram = false;
  state.selectedModalMonogramText = '';

  document.getElementById('modalProductImg').src = product.image;
  document.getElementById('modalEyebrow').textContent = product.material;
  document.getElementById('modalTitle').textContent = product.title;
  document.getElementById('modalRatingText').textContent = `${product.rating} (${product.reviewsCount} отзывов)`;
  document.getElementById('modalDesc').textContent = product.description;

  // Render sizes
  const sizesContainer = document.getElementById('modalSizeChips');
  sizesContainer.innerHTML = '';
  product.sizes.forEach(sz => {
    const btn = document.createElement('button');
    btn.className = `size-chip ${sz.name === defaultSize.name ? 'active' : ''}`;
    btn.textContent = sz.extraRub > 0 ? `${sz.name} (+${formatPrice(sz.extraRub)})` : sz.name;
    btn.onclick = () => {
      document.querySelectorAll('#modalSizeChips .size-chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      state.selectedModalSize = sz;
      updateModalPriceCalculation();
    };
    sizesContainer.appendChild(btn);
  });

  // Render colors
  const colorsContainer = document.getElementById('modalColorSwatches');
  const colorNameLabel = document.getElementById('modalSelectedColorName');
  colorsContainer.innerHTML = '';
  colorNameLabel.textContent = product.colors[0].name;

  product.colors.forEach((col, idx) => {
    const btn = document.createElement('button');
    btn.className = `swatch ${idx === 0 ? 'active' : ''}`;
    btn.style.backgroundColor = col.hex;
    btn.title = col.name;
    btn.onclick = () => {
      document.querySelectorAll('#modalColorSwatches .swatch').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      state.selectedModalColor = col;
      colorNameLabel.textContent = col.name;
    };
    colorsContainer.appendChild(btn);
  });

  // Monogram reset
  const monogramCheck = document.getElementById('monogramCheckbox');
  const monogramInput = document.getElementById('monogramTextInput');
  monogramCheck.checked = false;
  monogramInput.value = '';
  monogramInput.style.display = 'none';

  monogramCheck.onchange = (e) => {
    state.selectedModalMonogram = e.target.checked;
    monogramInput.style.display = e.target.checked ? 'block' : 'none';
    if (e.target.checked) monogramInput.focus();
    updateModalPriceCalculation();
  };

  monogramInput.oninput = (e) => {
    state.selectedModalMonogramText = e.target.value.toUpperCase();
  };

  updateModalPriceCalculation();

  document.getElementById('quickViewModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickViewModal() {
  document.getElementById('quickViewModal').classList.remove('active');
  document.body.style.overflow = '';
}

function updateModalPriceCalculation() {
  if (!state.activeModalProduct || !state.selectedModalSize) return;

  const base = state.activeModalProduct.priceRub;
  const extra = state.selectedModalSize.extraRub || 0;
  const mono = state.selectedModalMonogram ? 2500 : 0;
  const total = base + extra + mono;

  const priceEl = document.getElementById('modalPrice');
  const btnPriceEl = document.getElementById('modalFinalPriceBtn');

  if (priceEl) priceEl.textContent = formatPrice(total);
  if (btnPriceEl) btnPriceEl.textContent = formatPrice(total);
}

// -----------------------------------------------------------------------------
// 6. Cart Drawer & Overlay Handlers
// -----------------------------------------------------------------------------
function openCartDrawer() {
  document.getElementById('cartBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

// -----------------------------------------------------------------------------
// 7. Toast Notifications
// -----------------------------------------------------------------------------
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A880" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// -----------------------------------------------------------------------------
// 8. Helper Functions
// -----------------------------------------------------------------------------
function pluralize(n, forms) {
  const pr = new Intl.PluralRules('ru');
  const rule = pr.select(n);
  if (rule === 'one') return forms[0];
  if (rule === 'few') return forms[1];
  return forms[2];
}

// -----------------------------------------------------------------------------
// 9. Event Listeners & Initialization
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // A. Sticky Header Shadow on Scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // B. Currency Selector Buttons
  document.querySelectorAll('.currency-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.currency-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentCurrency = btn.getAttribute('data-currency');
      updateAllPricesInDOM();
      showToast(`Валюта изменена на ${state.currentCurrency}`);
    });
  });

  // C. Mobile Drawer Menu
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => mobileDrawer.classList.add('active'));
    mobileDrawerClose.addEventListener('click', () => mobileDrawer.classList.remove('active'));
    document.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => mobileDrawer.classList.remove('active'));
    });
  }

  // D. Search Overlay Toggle
  const searchTrigger = document.getElementById('searchTriggerBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchCloseBtn');
  const searchInput = document.getElementById('siteSearchInput');

  if (searchTrigger && searchOverlay) {
    searchTrigger.addEventListener('click', () => {
      searchOverlay.classList.toggle('active');
      if (searchOverlay.classList.contains('active')) {
        searchInput.focus();
      }
    });
    searchClose.addEventListener('click', () => searchOverlay.classList.remove('active'));

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.product-card');
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });

    document.querySelectorAll('.quick-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const q = tag.getAttribute('data-query');
        searchInput.value = q;
        searchInput.dispatchEvent(new Event('input'));
      });
    });
  }

  // E. Category Tabs Filtering
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      state.activeFilter = filter;

      document.querySelectorAll('.product-card').forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Cross-section filter triggers (e.g. from Material cards or Footer)
  document.querySelectorAll('[data-filter-trigger]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const cat = trigger.getAttribute('data-filter-trigger');
      const targetTab = document.querySelector(`.tab-btn[data-filter="${cat}"]`);
      if (targetTab) {
        targetTab.click();
      }
    });
  });

  // F. Quick View Trigger Buttons on Cards
  document.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-id'), 10);
      openQuickViewModal(id);
    });
  });

  // Quick Add Trigger Buttons on Cards
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-id'), 10);
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        const defSize = product.sizes.find(s => s.default) || product.sizes[0];
        addToCart(product, defSize.name, defSize.extraRub, product.colors[0].name, false, '');
      }
    });
  });

  // Hero Quick Add
  const heroQuickAddBtn = document.getElementById('heroQuickAddBtn');
  if (heroQuickAddBtn) {
    heroQuickAddBtn.addEventListener('click', () => {
      const product = PRODUCTS[0];
      addToCart(product, product.sizes[1].name, 0, product.colors[0].name, false, '');
    });
  }

  // Capsule Button
  const btnExploreCapsule = document.getElementById('btnExploreCapsule');
  if (btnExploreCapsule) {
    btnExploreCapsule.addEventListener('click', () => {
      openQuickViewModal(3);
    });
  }

  // G. Modal Close & Actions
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const quickViewModal = document.getElementById('quickViewModal');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickViewModal);
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickViewModal();
    });
  }

  const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener('click', () => {
      if (!state.activeModalProduct) return;
      addToCart(
        state.activeModalProduct,
        state.selectedModalSize.name,
        state.selectedModalSize.extraRub || 0,
        state.selectedModalColor.name,
        state.selectedModalMonogram,
        state.selectedModalMonogramText
      );
      closeQuickViewModal();
    });
  }

  // H. Cart Drawer Trigger & Close
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) closeCartDrawer();
    });
  }

  // I. Promo Code Handling
  const btnApplyPromo = document.getElementById('btnApplyPromo');
  const promoInput = document.getElementById('promoCodeInput');
  const btnRemovePromo = document.getElementById('btnRemovePromo');

  if (btnApplyPromo && promoInput) {
    btnApplyPromo.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'MOLLEN10') {
        state.activePromo = 'MOLLEN10';
        localStorage.setItem('mollen_promo', 'MOLLEN10');
        renderCart();
        showToast('Промокод MOLLEN10 активирован: скидка 10%');
      } else {
        showToast('Неверный промокод. Попробуйте MOLLEN10');
      }
    });
  }

  if (btnRemovePromo) {
    btnRemovePromo.addEventListener('click', () => {
      state.activePromo = null;
      localStorage.removeItem('mollen_promo');
      renderCart();
      showToast('Промокод удален');
    });
  }

  // J. Concierge Form Handling
  const conciergeForm = document.getElementById('conciergeForm');
  if (conciergeForm) {
    conciergeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('conciergeName').value;
      const phone = document.getElementById('conciergePhone').value;
      conciergeForm.reset();
      showToast(`Спасибо, ${name}! Консьерж Mollen позвонит на ${phone} для подтверждения примерки.`);
    });
  }

  // K. Newsletter Form Handling
  const newsletterForm = document.getElementById('newsletterForm');
  const nlSuccessMsg = document.getElementById('nlSuccessMsg');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      state.activePromo = 'MOLLEN10';
      localStorage.setItem('mollen_promo', 'MOLLEN10');
      newsletterForm.style.display = 'none';
      if (nlSuccessMsg) nlSuccessMsg.classList.add('active');
      renderCart();
      showToast('Вы получили промокод MOLLEN10 на скидку 10%!');
    });
  }

  // L. Checkout Flow
  const btnCheckout = document.getElementById('btnCheckout');
  const checkoutSuccessModal = document.getElementById('checkoutSuccessModal');
  const checkoutSuccessClose = document.getElementById('checkoutSuccessClose');
  const btnBackToStore = document.getElementById('btnBackToStore');
  const checkoutSuccessSummary = document.getElementById('checkoutSuccessSummary');

  if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Ваша корзина пуста');
        return;
      }

      closeCartDrawer();

      // Render summary in modal
      let summaryHtml = '<strong>Выбранные комплекты для примерки:</strong><ul style="margin-top: 0.5rem; list-style: disc; padding-left: 1.2rem;">';
      state.cart.forEach(item => {
        summaryHtml += `<li>${item.title} (${item.size}, ${item.color}) &times; ${item.qty} шт.</li>`;
      });
      summaryHtml += '</ul>';
      if (checkoutSuccessSummary) checkoutSuccessSummary.innerHTML = summaryHtml;

      // Clear cart
      state.cart = [];
      saveCart();
      renderCart();

      if (checkoutSuccessModal) checkoutSuccessModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeSuccessModal() {
    if (checkoutSuccessModal) checkoutSuccessModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (checkoutSuccessClose) checkoutSuccessClose.addEventListener('click', closeSuccessModal);
  if (btnBackToStore) btnBackToStore.addEventListener('click', closeSuccessModal);

  // M. Wishlist Simple Toggle
  const wishlistBtn = document.getElementById('wishlistBtn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => {
      showToast('Список избранного синхронизирован с вашим профилем Mollen Club');
    });
  }

  // Concierge Anchor Triggers
  const btnHeroConcierge = document.getElementById('btnHeroConcierge');
  if (btnHeroConcierge) {
    btnHeroConcierge.addEventListener('click', () => {
      document.getElementById('atelier').scrollIntoView({ behavior: 'smooth' });
    });
  }

  const btnAtelierModalOpen = document.getElementById('btnAtelierModalOpen');
  if (btnAtelierModalOpen) {
    btnAtelierModalOpen.addEventListener('click', () => {
      document.getElementById('atelierFormContainer').scrollIntoView({ behavior: 'smooth' });
      document.getElementById('conciergeName').focus();
    });
  }

  // Initial render
  updateCartBadge();
  renderCart();
  updateAllPricesInDOM();
});
