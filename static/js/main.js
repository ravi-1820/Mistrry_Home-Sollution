/**
 * HOMESERV - Global JavaScript Engine
 * Shared utilities, portal switchbar, toast notification manager, and global micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScrollEffect();
  initPortalSwitcherHighlight();
  initToastContainer();
  initTooltipsAndPopovers();
  initAllCarousels();
  initAuthNavState();
});

/* --------------------------------------------------------------------------
   Sticky Navbar Scroll Elevation
   -------------------------------------------------------------------------- */
function initNavbarScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   Portal Switcher Active Link Sync
   -------------------------------------------------------------------------- */
function initPortalSwitcherHighlight() {
  const currentPath = window.location.pathname.toLowerCase();
  const switchLinks = document.querySelectorAll('.platform-switch-bar .switch-link');

  switchLinks.forEach(link => {
    const href = link.getAttribute('href') ? link.getAttribute('href').toLowerCase() : '';
    if (currentPath.includes('provider') && href.includes('provider')) {
      link.classList.add('active');
    } else if (currentPath.includes('admin') && href.includes('admin')) {
      link.classList.add('active');
    } else if (!currentPath.includes('provider') && !currentPath.includes('admin') && (href === 'index.html' || href === './')) {
      link.classList.add('active');
    }
  });
}

/* --------------------------------------------------------------------------
   Toast Notification System
   -------------------------------------------------------------------------- */
function initToastContainer() {
  if (!document.querySelector('.toast-container-custom')) {
    const container = document.createElement('div');
    container.className = 'toast-container-custom';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'success', icon = 'bi-check-circle-fill') {
  let container = document.querySelector('.toast-container-custom');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container-custom';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-custom toast-${type}`;
  toast.innerHTML = `
    <i class="bi ${icon} text-accent-custom fs-5"></i>
    <div class="flex-grow-1">${message}</div>
    <button type="button" class="btn-close btn-close-white ms-auto" aria-label="Close" onclick="this.parentElement.remove()"></button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

window.showToast = showToast;

/* --------------------------------------------------------------------------
   Initialize Bootstrap Tooltips & Radar Carousel
   -------------------------------------------------------------------------- */
function initTooltipsAndPopovers() {
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  initRadarCarousel();
}

function initRadarCarousel() {
  const radarCarousel = document.getElementById('radarProCarousel');
  if (!radarCarousel) return;

  const dots = radarCarousel.querySelectorAll('.radar-dot');
  radarCarousel.addEventListener('slide.bs.carousel', (event) => {
    dots.forEach((dot, idx) => {
      if (idx === event.to) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('active');
        dot.removeAttribute('aria-current');
      }
    });

    const selectEl = document.getElementById('hero-service-select');
    if (selectEl && selectEl.value !== String(event.to)) {
      selectEl.value = String(event.to);
    }
  });
}

/* --------------------------------------------------------------------------
   Global Navbar Search Handler
   -------------------------------------------------------------------------- */
window.handleNavGlobalSearch = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  let query = '';
  if (e && e.target) {
    const input = e.target.querySelector('input') || document.getElementById('navGlobalSearch');
    if (input) query = input.value.trim();
  }
  if (!query) {
    const fallbackInput = document.getElementById('navGlobalSearch');
    if (fallbackInput) query = fallbackInput.value.trim();
  }

  if (query) {
    window.location.href = `services.html?q=${encodeURIComponent(query)}`;
  } else {
    window.location.href = 'services.html';
  }
};

/* --------------------------------------------------------------------------
   Live Pro Dispatch Radar Interactive Pagination
   -------------------------------------------------------------------------- */
const RADAR_PAGES = [
  [
    { name: 'Rakesh Patel', role: 'Electrician & Wiring Specialist', rating: '4.8 (120+ jobs)', price: '₹499', online: true, cat: 'electrician', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80' },
    { name: 'Imran Shaikh', role: 'Plumber & Sanitary Expert', rating: '4.7 (95+ jobs)', price: '₹599', online: false, cat: 'plumber', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
    { name: 'Suresh Kumar', role: 'AC Repair Specialist', rating: '4.9 (200+ jobs)', price: '₹699', online: false, cat: 'ac-repair', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' }
  ],
  [
    { name: 'Manish Suthar', role: 'Master Carpenter & Woodcraft', rating: '4.95 (180+ jobs)', price: '₹799', online: true, cat: 'carpenter', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' },
    { name: 'Dharmesh Prajapati', role: 'Turnkey Renovation Lead', rating: '4.88 (64+ jobs)', price: '₹1,499', online: true, cat: 'renovation', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80' },
    { name: 'Amit Solanki', role: 'RO & Water Purifier Tech', rating: '4.8 (110+ jobs)', price: '₹399', online: false, cat: 'ro-geyser', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80' }
  ],
  [
    { name: 'Kishan Vaghela', role: 'Smart Geyser & Heater Pro', rating: '4.85 (88+ jobs)', price: '₹449', online: true, cat: 'ro-geyser', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80' },
    { name: 'Vijay Parmar', role: 'Washing Machine Specialist', rating: '4.9 (140+ jobs)', price: '₹549', online: true, cat: 'washing-machine', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
    { name: 'Ravi Mistry', role: 'Structural Construction Mason', rating: '4.75 (50+ jobs)', price: '₹1,200', online: false, cat: 'construction', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80' }
  ],
  [
    { name: 'Pankaj Panchal', role: 'Modular Kitchen Carpenter', rating: '4.92 (160+ jobs)', price: '₹899', online: true, cat: 'carpenter', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
    { name: 'Jayesh Dave', role: 'Inverter & EV Charger Electrician', rating: '4.89 (105+ jobs)', price: '₹649', online: true, cat: 'electrician', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80' },
    { name: 'Bhavin Patel', role: 'Drainage & Pipe Unclogger', rating: '4.8 (75+ jobs)', price: '₹499', online: false, cat: 'plumber', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80' }
  ],
  [
    { name: 'Harish Makwana', role: 'Split & Inverter AC Tech', rating: '4.95 (230+ jobs)', price: '₹699', online: true, cat: 'ac-repair', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80' },
    { name: 'Gautam Chauhan', role: 'Full Home Deep Renovation', rating: '4.86 (45+ jobs)', price: '₹1,999', online: true, cat: 'renovation', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
    { name: 'Kamlesh Soni', role: 'Switchboard & Safety Audit Lead', rating: '4.9 (190+ jobs)', price: '₹549', online: false, cat: 'electrician', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' }
  ]
];

let currentRadarPage = 0;

window.changeRadarPage = function(delta) {
  currentRadarPage += delta;
  if (currentRadarPage < 0) currentRadarPage = RADAR_PAGES.length - 1;
  if (currentRadarPage >= RADAR_PAGES.length) currentRadarPage = 0;

  const indicator = document.getElementById('radar-page-indicator');
  const listEl = document.getElementById('radar-pro-list');
  if (indicator) indicator.innerText = `${currentRadarPage + 1}/${RADAR_PAGES.length}`;

  if (listEl) {
    const pros = RADAR_PAGES[currentRadarPage];
    listEl.innerHTML = pros.map(p => `
      <div class="radar-pro-item">
        <div class="d-flex align-items-center gap-3">
          <img src="${p.img}" alt="${p.name}" class="radar-pro-avatar">
          <div>
            <h6 class="font-weight-bold text-white mb-0" style="font-size: 14.5px;">${p.name}</h6>
            <div class="text-white-50" style="font-size: 11.5px;">${p.role}</div>
            <div class="text-warning small" style="font-size: 11px;"><i class="bi bi-star-fill"></i> ${p.rating}</div>
          </div>
        </div>
        <div class="text-end">
          <div class="text-white font-weight-bold" style="font-size: 13.5px;">${p.price} <span class="text-white-50 font-weight-normal" style="font-size: 11px;">/ service</span></div>
          <div class="mb-1">
            <span class="badge" style="background: ${p.online ? 'rgba(16, 185, 129, 0.2); color: #34D399;' : 'rgba(0, 137, 123, 0.25); color: #2DD4BF;'}; font-size: 10px; border-radius: 9999px;">
              <i class="bi bi-circle-fill me-1" style="font-size: 5px;"></i>${p.online ? 'Online Now' : 'Available'}
            </span>
          </div>
          <a href="services.html?cat=${p.cat}" class="btn btn-sm radar-book-btn">Book Now</a>
        </div>
      </div>
    `).join('');
  }
};

/* --------------------------------------------------------------------------
   Universal Modern Multi-Card Carousel Engine
   -------------------------------------------------------------------------- */
function setupModernCarousel({ trackId, prevId, nextId, dotsId, slideSelector = '.modern-carousel-card' }) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  const dotsContainer = document.getElementById(dotsId);

  if (!track) return null;

  const getVisibleSlides = () => {
    return Array.from(track.querySelectorAll(slideSelector)).filter(el => {
      return el.style.display !== 'none' && !el.classList.contains('d-none');
    });
  };

  const buildDots = () => {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const slides = getVisibleSlides();
    if (!slides.length) return;

    const totalDots = Math.max(1, Math.ceil(slides.length / (window.innerWidth < 768 ? 1 : 2)));
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.className = `services-carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        const slideWidth = slides[0].offsetWidth + 18;
        const scrollAmount = window.innerWidth < 768 ? slideWidth : slideWidth * 2;
        track.scrollTo({
          left: i * scrollAmount,
          behavior: 'smooth'
        });
      });
      dotsContainer.appendChild(dot);
    }
  };

  const updateControls = () => {
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth - 12);
    if (prevBtn) {
      if (track.scrollLeft <= 8) {
        prevBtn.classList.add('disabled');
      } else {
        prevBtn.classList.remove('disabled');
      }
    }
    if (nextBtn) {
      if (track.scrollLeft >= maxScroll) {
        nextBtn.classList.add('disabled');
      } else {
        nextBtn.classList.remove('disabled');
      }
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.services-carousel-dot');
      const slides = getVisibleSlides();
      if (dots.length && slides.length) {
        const slideWidth = slides[0].offsetWidth + 18;
        const scrollAmount = window.innerWidth < 768 ? slideWidth : slideWidth * 2;
        const activeIdx = Math.min(
          Math.round(track.scrollLeft / Math.max(1, scrollAmount)),
          dots.length - 1
        );
        dots.forEach((d, idx) => {
          d.classList.toggle('active', idx === activeIdx);
        });
      }
    }
  };

  buildDots();

  if (prevBtn) {
    prevBtn.onclick = () => {
      const slides = getVisibleSlides();
      const slideWidth = slides.length ? (slides[0].offsetWidth + 18) : 280;
      const scrollAmt = window.innerWidth < 768 ? slideWidth : slideWidth * 2;
      track.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      const slides = getVisibleSlides();
      const slideWidth = slides.length ? (slides[0].offsetWidth + 18) : 280;
      const scrollAmt = window.innerWidth < 768 ? slideWidth : slideWidth * 2;
      track.scrollBy({ left: scrollAmt, behavior: 'smooth' });
    };
  }

  track.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', () => {
    buildDots();
    updateControls();
  });
  updateControls();

  // Mouse drag scrolling
  let isDown = false;
  let startX;
  let scrollLeftPos;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('active-dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeftPos = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('active-dragging');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('active-dragging');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeftPos - walk;
  });

  return {
    refresh: () => {
      buildDots();
      updateControls();
    }
  };
}

function initAllCarousels() {
  window.servicesCarouselInstance = setupModernCarousel({
    trackId: 'servicesCarouselTrack',
    prevId: 'servicesCarouselPrev',
    nextId: 'servicesCarouselNext',
    dotsId: 'servicesCarouselDots',
    slideSelector: '.services-carousel-card'
  });

  window.prosCarouselInstance = setupModernCarousel({
    trackId: 'prosCarouselTrack',
    prevId: 'prosCarouselPrev',
    nextId: 'prosCarouselNext',
    dotsId: 'prosCarouselDots',
    slideSelector: '.pro-carousel-card'
  });

  window.projectsCarouselInstance = setupModernCarousel({
    trackId: 'projectsCarouselTrack',
    prevId: 'projectsCarouselPrev',
    nextId: 'projectsCarouselNext',
    dotsId: 'projectsCarouselDots',
    slideSelector: '.projects-carousel-card'
  });

  window.testimonialsCarouselInstance = setupModernCarousel({
    trackId: 'testimonialsCarouselTrack',
    prevId: 'testimonialsCarouselPrev',
    nextId: 'testimonialsCarouselNext',
    dotsId: 'testimonialsCarouselDots',
    slideSelector: '.testimonials-carousel-card'
  });

  window.detailRelatedCarouselInstance = setupModernCarousel({
    trackId: 'detailRelatedTrack',
    prevId: 'detailRelatedPrev',
    nextId: 'detailRelatedNext',
    dotsId: 'detailRelatedDots',
    slideSelector: '.services-carousel-card'
  });
}

window.setupModernCarousel = setupModernCarousel;
window.initAllCarousels = initAllCarousels;

/* --------------------------------------------------------------------------
   Auth State Synchronization (Navbar Corner: Sign In/Register vs Profile)
   -------------------------------------------------------------------------- */
function initAuthNavState() {
  const token = localStorage.getItem('mistry_access_token') || sessionStorage.getItem('access_token');
  const userJson = localStorage.getItem('mistry_user') || sessionStorage.getItem('user');
  let user = null;
  if (userJson) {
    try {
      user = JSON.parse(userJson);
    } catch (err) {
      console.warn('Failed to parse cached user json:', err);
    }
  }

  const serverAuth = document.body && document.body.getAttribute('data-user-authenticated') === 'true';
  const isLoggedIn = !!token || serverAuth;

  const guestElements = document.querySelectorAll('.auth-guest-only');
  const userElements = document.querySelectorAll('.auth-user-only');
  const nameDisplays = document.querySelectorAll('.nav-profile-name, .user-display-name');

  if (isLoggedIn) {
    guestElements.forEach(el => {
      el.style.setProperty('display', 'none', 'important');
    });
    userElements.forEach(el => {
      el.style.removeProperty('display');
    });

    if (user && (user.full_name || user.email)) {
      const displayName = user.full_name || user.email;
      nameDisplays.forEach(el => {
        el.textContent = displayName;
      });
    }
  } else {
    userElements.forEach(el => {
      el.style.setProperty('display', 'none', 'important');
    });
    guestElements.forEach(el => {
      el.style.removeProperty('display');
    });
  }
}

function handleClientLogout(e) {
  if (e) {
    e.preventDefault();
  }
  try {
    localStorage.removeItem('mistry_access_token');
    localStorage.removeItem('mistry_refresh_token');
    localStorage.removeItem('mistry_user');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    sessionStorage.removeItem('user');
  } catch (err) {
    console.warn('Error clearing auth storage:', err);
  }
  window.location.href = '/logout/';
}

window.initAuthNavState = initAuthNavState;
window.handleClientLogout = handleClientLogout;


