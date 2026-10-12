/**
 * HOMESERV - Projects Showcase & Portfolio Filter Engine
 * Handles category filtering, keyword search, view mode toggle (Grid vs Compare),
 * interactive before/after sliders, and rich project case study modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectsPortfolio();
});

let currentCategory = 'all';
let currentSearchQuery = '';
let currentSort = 'featured';
let currentViewMode = 'grid'; // 'grid' or 'compare'

function initProjectsPortfolio() {
  // Check URL params for category preset (e.g. projects.html?cat=renovation)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    currentCategory = catParam;
  }

  // Bind Category Filter Pills
  const filterPills = document.querySelectorAll('.project-filter-pill');
  filterPills.forEach(pill => {
    if (pill.getAttribute('data-category') === currentCategory) {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    }

    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category') || 'all';
      renderProjects();
    });
  });

  // Bind Search Input
  const searchInput = document.getElementById('projectSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  // Bind Sort Select
  const sortSelect = document.getElementById('projectSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProjects();
    });
  }

  // Bind View Mode Switcher
  const viewBtns = document.querySelectorAll('.view-mode-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentViewMode = btn.getAttribute('data-mode') || 'grid';
      renderProjects();
    });
  });

  // Initial render
  renderProjects();
  updateCategoryCounts();
}

/**
 * Filter and Sort Projects
 */
function getFilteredProjects() {
  const projects = MockData.projects || [];

  return projects.filter(proj => {
    // Category match
    const matchCategory = currentCategory === 'all' || proj.category === currentCategory;

    // Search query match across title, tags, description, materials, client, location
    const searchTarget = `${proj.title} ${proj.description} ${proj.location} ${proj.tags.join(' ')} ${proj.verifiedPro.name}`.toLowerCase();
    const matchSearch = !currentSearchQuery || searchTarget.includes(currentSearchQuery);

    return matchCategory && matchSearch;
  }).sort((a, b) => {
    if (currentSort === 'budget-asc') {
      return a.budgetRaw - b.budgetRaw;
    } else if (currentSort === 'budget-desc') {
      return b.budgetRaw - a.budgetRaw;
    } else if (currentSort === 'newest') {
      return (b.id > a.id ? 1 : -1);
    } else {
      // Featured
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    }
  });
}

/**
 * Update the item counts inside category pills
 */
function updateCategoryCounts() {
  const projects = MockData.projects || [];
  const counts = {
    all: projects.length,
    renovation: 0,
    electrical: 0,
    furniture: 0,
    plumbing: 0,
    construction: 0
  };

  projects.forEach(p => {
    if (counts[p.category] !== undefined) {
      counts[p.category]++;
    }
  });

  Object.keys(counts).forEach(cat => {
    const badge = document.querySelector(`.project-filter-pill[data-category="${cat}"] .pill-count`);
    if (badge) {
      badge.textContent = counts[cat];
    }
  });
}

/**
 * Render Projects into Grid or Compare View
 */
function renderProjects() {
  const container = document.getElementById('projectsGridContainer');
  const countEl = document.getElementById('projectResultsCount');
  if (!container) return;

  const filtered = getFilteredProjects();

  if (countEl) {
    countEl.innerHTML = `Showing <strong>${filtered.length}</strong> completed master project${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="card-custom p-5 mx-auto text-center" style="max-width: 500px;">
          <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
          <h4 class="font-weight-bold mt-3 mb-2">No Projects Found</h4>
          <p class="text-muted small mb-4">No completed projects match your current filters. Try changing your category or search query.</p>
          <button class="btn-custom btn-custom-outline btn-custom-sm mx-auto" onclick="resetProjectFilters()">
            <i class="bi bi-arrow-counterclockwise me-1"></i> Reset Filters
          </button>
        </div>
      </div>
    `;
    return;
  }

  if (currentViewMode === 'compare') {
    renderCompareView(container, filtered);
  } else {
    renderStandardGridView(container, filtered);
  }

  // Initialize before/after range sliders
  initBeforeAfterSliders();
}

/**
 * Render Standard Luxury Grid View
 */
function renderStandardGridView(container, list) {
  let html = '';

  list.forEach(proj => {
    const categoryBadgeClass = proj.category === 'renovation' ? 'badge-custom-lime' :
                               proj.category === 'electrical' ? 'badge-custom-teal' :
                               proj.category === 'plumbing' ? 'badge-custom-teal' :
                               proj.category === 'furniture' ? 'badge-custom-neutral' : 'badge-custom-dark';

    const tagsHtml = proj.tags.slice(0, 3).map(tag => `<span class="project-tag-pill">${tag}</span>`).join('');

    html += `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="project-card">
          <!-- Image Box -->
          <div class="project-card-img-box">
            <img src="${proj.imageAfter}" alt="${proj.title}" class="project-card-img" loading="lazy">
            <div class="project-badge-top-left">
              <span class="badge-custom ${categoryBadgeClass}">
                ${proj.categoryName}
              </span>
            </div>
            ${proj.featured ? `
              <div class="project-badge-top-right">
                <span class="badge-custom badge-custom-lime">
                  <i class="bi bi-star-fill"></i> Flagship
                </span>
              </div>
            ` : ''}
          </div>

          <!-- Card Body -->
          <div class="project-card-body">
            <div class="project-category-row">
              <span class="text-muted small"><i class="bi bi-geo-alt-fill text-teal-custom me-1"></i> ${proj.location}</span>
              <span class="project-duration-tag"><i class="bi bi-stopwatch text-teal-custom"></i> ${proj.duration}</span>
            </div>

            <h3 class="project-card-title">
              <a href="javascript:void(0)" onclick="openProjectModal('${proj.id}')">${proj.title}</a>
            </h3>

            <p class="project-card-desc">${proj.description}</p>

            <div class="project-tags-list">
              ${tagsHtml}
            </div>

            <!-- Pro Mini Strip -->
            <div class="project-pro-strip">
              <div class="d-flex align-items-center gap-2">
                <img src="${proj.verifiedPro.avatar}" alt="${proj.verifiedPro.name}" class="rounded-circle border" style="width: 28px; height: 28px; object-fit: cover;">
                <span class="font-weight-bold text-dark text-truncate" style="max-width: 140px;">${proj.verifiedPro.name}</span>
              </div>
              <span class="text-lime-custom font-weight-bold"><i class="bi bi-patch-check-fill"></i> ${proj.verifiedPro.rating}</span>
            </div>

            <!-- Footer -->
            <div class="project-card-footer">
              <div>
                <div class="project-budget-label">Total Escrow Budget</div>
                <div class="project-budget-value">${proj.budget}</div>
              </div>
              <button class="btn-custom btn-custom-outline btn-custom-sm" onclick="openProjectModal('${proj.id}')">
                <i class="bi bi-eye-fill me-1"></i> Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * Render Interactive Before & After Comparison Mode
 */
function renderCompareView(container, list) {
  let html = '';

  list.forEach(proj => {
    html += `
      <div class="col-lg-6 mb-4">
        <div class="project-compare-card">
          <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
            <div>
              <span class="badge-custom badge-custom-teal mb-1">${proj.categoryName}</span>
              <h4 class="font-weight-bold mb-0 text-dark">${proj.title}</h4>
              <span class="text-muted small"><i class="bi bi-geo-alt-fill text-teal-custom me-1"></i> ${proj.location} • Handled by ${proj.verifiedPro.name}</span>
            </div>
            <span class="badge-custom badge-custom-lime">${proj.budget}</span>
          </div>

          <!-- Before / After Interactive Container -->
          <div class="before-after-container mb-3" style="height: 320px;">
            <img src="${proj.imageAfter}" alt="After Work" class="ba-image-after">
            <div class="ba-image-before-wrapper">
              <img src="${proj.imageBefore}" alt="Before Work">
            </div>
            <div class="ba-slider-handle">
              <i class="bi bi-chevron-bar-expand" style="transform: rotate(90deg);"></i>
            </div>
            <span class="ba-label-before">Before</span>
            <span class="ba-label-after">After</span>
            <input type="range" min="0" max="100" value="50" class="ba-range-input" aria-label="Compare Before and After">
          </div>

          <div class="d-flex align-items-center justify-content-between pt-2 border-top flex-wrap gap-2">
            <span class="text-muted small"><i class="bi bi-shield-check text-teal-custom me-1"></i> ${proj.warranty}</span>
            <button class="btn-custom btn-custom-primary btn-custom-sm" onclick="openProjectModal('${proj.id}')">
              <i class="bi bi-info-circle me-1"></i> Full Project Breakdown
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * Initialize interactive before/after range sliders
 */
function initBeforeAfterSliders() {
  const containers = document.querySelectorAll('.before-after-container');
  containers.forEach(container => {
    const rangeInput = container.querySelector('.ba-range-input');
    const beforeWrapper = container.querySelector('.ba-image-before-wrapper');
    const handle = container.querySelector('.ba-slider-handle');

    if (rangeInput && beforeWrapper && handle) {
      rangeInput.addEventListener('input', (e) => {
        const val = e.target.value;
        beforeWrapper.style.width = `${val}%`;
        handle.style.left = `${val}%`;
      });
    }
  });
}

/**
 * Open Project Case Study Modal
 */
function openProjectModal(projectId) {
  const projects = MockData.projects || [];
  const proj = projects.find(p => p.id === projectId);
  if (!proj) return;

  const modalBody = document.getElementById('projectModalBody');
  const modalTitle = document.getElementById('projectModalTitle');

  if (modalTitle) {
    modalTitle.textContent = proj.title;
  }

  if (modalBody) {
    modalBody.innerHTML = `
      <div class="row g-4">
        <!-- Left: Interactive Comparison & Gallery -->
        <div class="col-lg-7">
          <div class="before-after-container mb-3" style="height: 380px;">
            <img src="${proj.imageAfter}" alt="After Work" class="ba-image-after">
            <div class="ba-image-before-wrapper">
              <img src="${proj.imageBefore}" alt="Before Work">
            </div>
            <div class="ba-slider-handle">
              <i class="bi bi-chevron-bar-expand" style="transform: rotate(90deg);"></i>
            </div>
            <span class="ba-label-before">Original State</span>
            <span class="ba-label-after">Completed Craft</span>
            <input type="range" min="0" max="100" value="50" class="ba-range-input" aria-label="Compare Before and After">
          </div>
          <div class="d-flex align-items-center justify-content-between text-muted small px-1 mb-4">
            <span><i class="bi bi-arrows-expand me-1"></i> Drag slider to compare transformation</span>
            <span><i class="bi bi-calendar-check me-1"></i> Completed ${proj.completionDate}</span>
          </div>

          <!-- Project Challenge & Solution -->
          <div class="card-custom p-4 bg-light mb-3">
            <h6 class="font-weight-bold text-dark mb-2"><i class="bi bi-exclamation-diamond-fill text-warning me-2"></i> Client Objective & Challenge</h6>
            <p class="text-secondary small mb-3">${proj.challenge}</p>

            <h6 class="font-weight-bold text-teal-custom mb-2"><i class="bi bi-check-circle-fill text-teal-custom me-2"></i> The Engineering Solution</h6>
            <p class="text-secondary small mb-0">${proj.solution}</p>
          </div>
        </div>

        <!-- Right: Specs, Contractor & Booking -->
        <div class="col-lg-5 d-flex flex-column justify-content-between">
          <div>
            <!-- Badges -->
            <div class="d-flex align-items-center gap-2 mb-3">
              <span class="badge-custom badge-custom-verified">${proj.categoryName}</span>
              <span class="badge-custom badge-custom-lime"><i class="bi bi-patch-check-fill"></i> ${proj.warranty}</span>
            </div>

            <h4 class="font-weight-bold mb-3">${proj.title}</h4>
            <p class="text-secondary small mb-4">${proj.description}</p>

            <!-- Metrics List -->
            <div class="p-3 bg-white border rounded-3 mb-4">
              <div class="d-flex justify-content-between py-2 border-bottom small">
                <span class="text-muted">Client & Property:</span>
                <span class="font-weight-bold text-dark">${proj.client} (${proj.location})</span>
              </div>
              <div class="d-flex justify-content-between py-2 border-bottom small">
                <span class="text-muted">Project Turnaround:</span>
                <span class="font-weight-bold text-dark">${proj.duration}</span>
              </div>
              <div class="d-flex justify-content-between py-2 border-bottom small">
                <span class="text-muted">Escrow Amount:</span>
                <span class="font-weight-bold text-teal-custom fs-6">${proj.budget}</span>
              </div>
              <div class="d-flex justify-content-between py-2 small">
                <span class="text-muted">Warranty Backing:</span>
                <span class="font-weight-bold text-dark">${proj.warranty}</span>
              </div>
            </div>

            <!-- Verified Contractor Info -->
            <div class="p-3 rounded-3 bg-light border mb-4">
              <span class="text-muted small text-uppercase font-weight-bold">Executed by Verified Guild Pro</span>
              <div class="d-flex align-items-center gap-3 mt-2">
                <img src="${proj.verifiedPro.avatar}" alt="${proj.verifiedPro.name}" class="rounded-circle border" style="width: 44px; height: 44px; object-fit: cover;">
                <div>
                  <h6 class="font-weight-bold mb-0">${proj.verifiedPro.name}</h6>
                  <div class="text-lime-custom small font-weight-bold"><i class="bi bi-star-fill"></i> ${proj.verifiedPro.rating} • ${proj.verifiedPro.badge}</div>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div class="mb-4">
              <span class="text-muted small d-block mb-2 font-weight-bold">Materials & Techniques:</span>
              <div class="d-flex flex-wrap gap-1">
                ${proj.tags.map(t => `<span class="badge bg-white border text-dark px-2 py-1 small">${t}</span>`).join('')}
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="pt-3 border-top d-flex gap-2">
            <a href="/service-detail/" class="btn-custom btn-custom-primary flex-grow-1 py-3 text-center">
              <i class="bi bi-lightning-charge-fill me-1"></i> Book Similar Project
            </a>
            <button type="button" class="btn-custom btn-custom-outline" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    `;

    // Initialize the slider inside modal after render
    setTimeout(() => {
      const modalSlider = modalBody.querySelector('.before-after-container');
      if (modalSlider) {
        const range = modalSlider.querySelector('.ba-range-input');
        const beforeWrapper = modalSlider.querySelector('.ba-image-before-wrapper');
        const handle = modalSlider.querySelector('.ba-slider-handle');
        if (range && beforeWrapper && handle) {
          range.addEventListener('input', (e) => {
            beforeWrapper.style.width = `${e.target.value}%`;
            handle.style.left = `${e.target.value}%`;
          });
        }
      }
    }, 100);
  }

  const modalEl = document.getElementById('projectDetailModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function resetProjectFilters() {
  currentCategory = 'all';
  currentSearchQuery = '';
  currentSort = 'featured';

  const searchInput = document.getElementById('projectSearchInput');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('projectSortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  const filterPills = document.querySelectorAll('.project-filter-pill');
  filterPills.forEach(p => {
    if (p.getAttribute('data-category') === 'all') {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  renderProjects();
}

// Global exposure
window.openProjectModal = openProjectModal;
window.resetProjectFilters = resetProjectFilters;
