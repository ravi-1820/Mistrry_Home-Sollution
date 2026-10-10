/**
 * HOMESERV - Customer Marketplace Interactions
 * Handles Before/After sliders, Services filters, and Multi-Step Booking Wizard.
 */

document.addEventListener('DOMContentLoaded', () => {
  initBeforeAfterSliders();
  initBookingWizard();
  initFavoriteToggles();
  initServicesFilter();
  initCustomerDashboardTabs();
});

function initCustomerDashboardTabs() {
  const hash = window.location.hash;
  if (hash) {
    const cleanHash = hash.replace('#', '').replace('tab-', '');
    const targetBtn = document.getElementById(`tab-${cleanHash}-btn`) || document.querySelector(`button[data-bs-target="${hash}"]`);
    if (targetBtn && typeof bootstrap !== 'undefined' && bootstrap.Tab) {
      const tabInstance = bootstrap.Tab.getOrCreateInstance(targetBtn);
      tabInstance.show();
    }
  }
}

/* --------------------------------------------------------------------------
   Before / After Interactive Sliders
   -------------------------------------------------------------------------- */
function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll('.before-after-container');
  sliders.forEach(container => {
    const rangeInput = container.querySelector('.ba-range-input');
    const beforeWrapper = container.querySelector('.ba-image-before-wrapper');
    const handle = container.querySelector('.ba-slider-handle');

    if (!rangeInput || !beforeWrapper || !handle) return;

    const updateSlider = (val) => {
      beforeWrapper.style.width = `${val}%`;
      handle.style.left = `${val}%`;
    };

    rangeInput.addEventListener('input', (e) => {
      updateSlider(e.target.value);
    });

    // Touch and mouse movement support
    container.addEventListener('mousemove', (e) => {
      if (e.buttons === 1) { // Left click dragged
        const rect = container.getBoundingClientRect();
        let x = e.clientX - rect.left;
        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;
        const percentage = (x / rect.width) * 100;
        rangeInput.value = percentage;
        updateSlider(percentage);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Favorite Heart Button Toggles
   -------------------------------------------------------------------------- */
function initFavoriteToggles() {
  document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.service-card-favorite');
    if (favBtn) {
      e.preventDefault();
      favBtn.classList.toggle('active');
      const icon = favBtn.querySelector('i');
      if (favBtn.classList.contains('active')) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill');
        window.showToast('Added to your saved wishlist!', 'success', 'bi-heart-fill');
      } else {
        icon.classList.remove('bi-heart-fill');
        icon.classList.add('bi-heart');
        window.showToast('Removed from saved wishlist', 'neutral', 'bi-heart');
      }
    }
  });
}

/* --------------------------------------------------------------------------
   Multi-Step Booking Wizard Engine
   -------------------------------------------------------------------------- */
let currentBookingStep = 1;
const totalBookingSteps = 6;
let bookingData = {
  serviceId: 'serv-101',
  serviceName: 'Full Home Electrical Safety Audit & Rewiring',
  basePrice: 1499,
  addons: [],
  address: 'Home - Flat 402, Goyal Intercity, Drive-In Road, Bodakdev, Ahmedabad',
  date: 'Tomorrow, Oct 6, 2026',
  timeSlot: '10:00 AM - 12:00 PM',
  provider: 'Vikram Electrical Solutions',
  paymentMethod: 'upi',
  total: 1499
};

function initBookingWizard() {
  // Slot selection handlers
  document.addEventListener('click', (e) => {
    const slotBtn = e.target.closest('.slot-btn');
    if (slotBtn) {
      const parent = slotBtn.parentElement;
      parent.querySelectorAll('.slot-btn').forEach(btn => btn.classList.remove('selected'));
      slotBtn.classList.add('selected');
      bookingData.timeSlot = slotBtn.getAttribute('data-slot') || slotBtn.innerText;
    }
  });

  // Addon check handlers
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('addon-checkbox')) {
      calculateBookingTotal();
    }
  });
}

function calculateBookingTotal() {
  let total = bookingData.basePrice;
  const addonCheckboxes = document.querySelectorAll('.addon-checkbox:checked');
  addonCheckboxes.forEach(cb => {
    total += parseInt(cb.getAttribute('data-price') || 0, 10);
  });
  bookingData.total = total;

  const totalDisplays = document.querySelectorAll('.booking-total-display');
  totalDisplays.forEach(el => {
    el.innerText = `₹${total.toLocaleString('en-IN')}`;
  });
}

function selectPaymentMethod(btn, method) {
  bookingData.paymentMethod = method;
  
  // Update button active states
  const parentGrid = btn.closest('.payment-methods-grid');
  if (parentGrid) {
    parentGrid.querySelectorAll('.payment-option-btn').forEach(b => b.classList.remove('active'));
  }
  btn.classList.add('active');

  const cashNotice = document.getElementById('cash-payment-notice');
  const escrowNotice = document.getElementById('escrow-payment-notice');
  const payBtn = document.getElementById('btn-confirm-pay');

  if (method === 'cash') {
    if (cashNotice) cashNotice.classList.remove('d-none');
    if (escrowNotice) escrowNotice.classList.add('d-none');
    if (payBtn) payBtn.innerHTML = `<i class="bi bi-check-circle-fill me-1"></i> Confirm & Book Slot (Pay ₹${bookingData.total.toLocaleString('en-IN')} Cash)`;
  } else if (method === 'card') {
    if (cashNotice) cashNotice.classList.add('d-none');
    if (escrowNotice) escrowNotice.classList.remove('d-none');
    if (payBtn) payBtn.innerHTML = `<i class="bi bi-shield-lock-fill me-1"></i> Authorize Escrow & Book`;
  } else {
    if (cashNotice) cashNotice.classList.add('d-none');
    if (escrowNotice) escrowNotice.classList.remove('d-none');
    if (payBtn) payBtn.innerHTML = `<i class="bi bi-shield-lock-fill me-1"></i> Confirm & Authorize Escrow`;
  }
}

function nextBookingStep() {
  if (currentBookingStep < totalBookingSteps) {
    // Validate step before proceeding
    if (currentBookingStep === 2) {
      const addrInput = document.querySelector('input[name="bookingAddress"]:checked');
      if (addrInput) bookingData.address = addrInput.value;
    }

    currentBookingStep++;
    updateBookingStepUI();
  }
}

function prevBookingStep() {
  if (currentBookingStep > 1) {
    currentBookingStep--;
    updateBookingStepUI();
  }
}

function updateBookingStepUI() {
  // Update step indicator
  for (let i = 1; i <= totalBookingSteps; i++) {
    const stepNode = document.getElementById(`step-indicator-${i}`);
    const contentNode = document.getElementById(`booking-step-${i}`);

    if (stepNode) {
      stepNode.classList.remove('active', 'completed');
      if (i < currentBookingStep) {
        stepNode.classList.add('completed');
      } else if (i === currentBookingStep) {
        stepNode.classList.add('active');
      }
    }

    if (contentNode) {
      if (i === currentBookingStep) {
        contentNode.classList.add('active');
      } else {
        contentNode.classList.remove('active');
      }
    }
  }

  // Update summary in step 5
  if (currentBookingStep === 5) {
    const summaryService = document.getElementById('summary-service-name');
    const summaryAddress = document.getElementById('summary-address');
    const summaryDateTime = document.getElementById('summary-datetime');
    const summaryProvider = document.getElementById('summary-provider');

    if (summaryService) summaryService.innerText = bookingData.serviceName;
    if (summaryAddress) summaryAddress.innerText = bookingData.address;
    if (summaryDateTime) summaryDateTime.innerText = `${bookingData.date} at ${bookingData.timeSlot}`;
    if (summaryProvider) summaryProvider.innerText = bookingData.provider;
    calculateBookingTotal();
  }
}

function confirmBookingAndPay() {
  const payBtn = document.getElementById('btn-confirm-pay');
  const isCash = bookingData.paymentMethod === 'cash';

  if (payBtn) {
    payBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> ${isCash ? 'Confirming Your Slot...' : 'Processing Secure Escrow...'}`;
    payBtn.disabled = true;
  }

  setTimeout(() => {
    currentBookingStep = 6;
    updateBookingStepUI();
    
    // Update confirmation screen payment method label
    const confMethod = document.getElementById('confirmation-payment-method');
    if (confMethod) {
      if (isCash) {
        confMethod.innerHTML = `<i class="bi bi-cash-stack text-success me-1"></i> <strong>Payment Mode:</strong> Cash on Service (Pay ₹${bookingData.total.toLocaleString('en-IN')} directly to pro after job)`;
      } else if (bookingData.paymentMethod === 'card') {
        confMethod.innerHTML = `<i class="bi bi-credit-card text-teal-custom me-1"></i> <strong>Payment Mode:</strong> Credit / Debit Card (Escrow Protected)`;
      } else {
        confMethod.innerHTML = `<i class="bi bi-qr-code text-teal-custom me-1"></i> <strong>Payment Mode:</strong> Instant UPI / GPay (Escrow Protected)`;
      }
    }

    window.showToast('🎉 Booking Confirmed! OTP sent to your phone.', 'success', 'bi-check-circle-fill');
    if (payBtn) payBtn.disabled = false;
  }, 1100);
}

window.selectPaymentMethod = selectPaymentMethod;
window.nextBookingStep = nextBookingStep;
window.prevBookingStep = prevBookingStep;
window.confirmBookingAndPay = confirmBookingAndPay;

/* --------------------------------------------------------------------------
   Services Listing Search & Dynamic Filtering
   -------------------------------------------------------------------------- */
function initServicesFilter() {
  const filterInputs = document.querySelectorAll('.service-filter-input');
  const searchInput = document.getElementById('service-search-input');
  const sortSelect = document.getElementById('service-sort-select');
  const cardsContainer = document.getElementById('services-grid-container');

  if (!cardsContainer) return;

  // Read URL query parameter for category or search query preselection
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam) {
      const targetCheckbox = document.querySelector(`input[name="catFilter"][value="${catParam}"]`);
      if (targetCheckbox) {
        targetCheckbox.checked = true;
      }
    }
    const qParam = urlParams.get('q');
    if (qParam && searchInput) {
      searchInput.value = qParam;
    }
  } catch (err) {
    console.error('URL params error:', err);
  }

  // Category synonyms map
  const categoryMap = {
    'electrician': ['electrician', 'electrical'],
    'electrical': ['electrician', 'electrical'],
    'plumber': ['plumber', 'plumbing'],
    'plumbing': ['plumber', 'plumbing'],
    'carpenter': ['carpenter', 'furniture'],
    'furniture': ['carpenter', 'furniture'],
    'ac-repair': ['ac-repair', 'ac'],
    'ac': ['ac-repair', 'ac'],
    'renovation': ['renovation'],
    'construction': ['construction']
  };

  function renderFilteredServices() {
    if (!window.MockData || !window.MockData.services) return;

    let services = [...window.MockData.services];

    // Search query
    if (searchInput && searchInput.value.trim() !== '') {
      const q = searchInput.value.toLowerCase();
      services = services.filter(s => 
        (s.title && s.title.toLowerCase().includes(q)) || 
        (s.categoryName && s.categoryName.toLowerCase().includes(q)) || 
        (s.description && s.description.toLowerCase().includes(q))
      );
    }

    // Category checkboxes
    const checkedCategories = Array.from(document.querySelectorAll('input[name="catFilter"]:checked')).map(cb => cb.value);
    if (checkedCategories.length > 0 && !checkedCategories.includes('all')) {
      services = services.filter(s => {
        return checkedCategories.some(cat => {
          const accepted = categoryMap[cat] || [cat];
          return accepted.includes(s.category);
        });
      });
    }

    // Minimum Rating
    const ratingRadio = document.querySelector('input[name="ratingFilter"]:checked');
    if (ratingRadio && ratingRadio.value !== 'all') {
      const minRating = parseFloat(ratingRadio.value);
      if (!isNaN(minRating)) {
        services = services.filter(s => s.rating >= minRating);
      }
    }

    // Price Tier
    const checkedPrices = Array.from(document.querySelectorAll('input[name="priceTier"]:checked')).map(cb => cb.value);
    if (checkedPrices.length > 0) {
      services = services.filter(s => {
        return checkedPrices.some(tier => {
          if (tier === 'under-1000') return s.price < 1000;
          if (tier === '1000-10000') return s.price >= 1000 && s.price <= 10000;
          if (tier === 'over-10000') return s.price > 10000;
          return true;
        });
      });
    }

    // Verified Only
    const verifiedOnlyCb = document.getElementById('filter-verified-only');
    if (verifiedOnlyCb && verifiedOnlyCb.checked) {
      services = services.filter(s => s.verified);
    }

    // Sorting
    if (sortSelect) {
      const sortVal = sortSelect.value;
      if (sortVal === 'price-low') {
        services.sort((a, b) => a.price - b.price);
      } else if (sortVal === 'price-high') {
        services.sort((a, b) => b.price - a.price);
      } else if (sortVal === 'rating') {
        services.sort((a, b) => b.rating - a.rating);
      }
    }

    const countDisplay = document.getElementById('service-results-count');
    if (countDisplay) {
      countDisplay.innerText = `${services.length} services available`;
    }

    if (services.length === 0) {
      cardsContainer.innerHTML = `
        <div class="col-12">
          <div class="empty-state-box">
            <div class="empty-state-icon"><i class="bi bi-search"></i></div>
            <h4>No matching services found</h4>
            <p class="text-muted">Try adjusting your filters, location, or search keywords.</p>
            <button class="btn-custom btn-custom-outline mt-3" onclick="window.resetServiceFilters()">
              Reset All Filters
            </button>
          </div>
        </div>
      `;
      return;
    }

    cardsContainer.innerHTML = services.map(s => `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="service-card card-custom-hover-lift">
          <div class="service-card-img-wrapper">
            <img src="${s.image}" alt="${s.title}" class="service-card-img" loading="lazy">
            <span class="badge-custom badge-custom-accent service-card-badge">
              <i class="bi bi-shield-check"></i> Verified
            </span>
            <button class="service-card-favorite" aria-label="Add to wishlist">
              <i class="bi bi-heart"></i>
            </button>
          </div>
          <div class="service-card-body">
            <div class="service-card-category">${s.categoryName}</div>
            <h5 class="service-card-title">
              <a href="service-detail.html?id=${s.id}">${s.title}</a>
            </h5>
            <div class="service-rating-row">
              <div class="star-rating"><i class="bi bi-star-fill"></i></div>
              <span class="rating-score">${s.rating}</span>
              <span class="rating-count">(${s.reviewsCount} reviews)</span>
            </div>
            <div class="service-card-location">
              <i class="bi bi-geo-alt-fill text-accent-custom"></i>
              <span>${s.location}</span>
            </div>
            <div class="service-card-footer">
              <div class="service-price-box">
                <span class="service-price-label">Starting from</span>
                <span class="service-price-value">${s.priceFormatted}</span>
              </div>
              <a href="service-detail.html?id=${s.id}" class="btn-custom btn-custom-primary btn-custom-sm">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  filterInputs.forEach(input => input.addEventListener('change', renderFilteredServices));
  if (searchInput) searchInput.addEventListener('input', renderFilteredServices);
  if (sortSelect) sortSelect.addEventListener('change', renderFilteredServices);

  window.resetServiceFilters = function() {
    document.querySelectorAll('.service-filter-input').forEach(i => {
      if (i.type === 'checkbox') i.checked = false;
      if (i.type === 'radio') i.checked = (i.value === 'all');
    });
    if (searchInput) searchInput.value = '';
    renderFilteredServices();
  };

  renderFilteredServices();
}
