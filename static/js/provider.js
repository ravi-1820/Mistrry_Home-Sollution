/**
 * HOMESERV - Service Provider Portal Logic (Mistrry Pro Edition)
 * Handles Job Requests, Status Stepper Timeline, Calendar Availability, OTP Verification, and Revenue Trends Charts.
 */

let providerEarningsChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initProviderCharts();
  initRequestActions();
  initStatusStepperControls();
});

/* --------------------------------------------------------------------------
   Provider Charts (Revenue & Payout Trends)
   -------------------------------------------------------------------------- */
function initProviderCharts() {
  const earningsCanvas = document.getElementById('providerEarningsChart');
  if (earningsCanvas && typeof Chart !== 'undefined') {
    const ctx = earningsCanvas.getContext('2d');
    
    // Create soft teal area gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 260);
    gradient.addColorStop(0, 'rgba(0, 137, 123, 0.22)');
    gradient.addColorStop(1, 'rgba(0, 137, 123, 0.01)');

    providerEarningsChartInstance = new Chart(earningsCanvas, {
      type: 'line',
      data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
          label: 'Net Earnings (₹)',
          data: [0, 25000, 42000, 65000, 84000, 114500],
          borderColor: '#00897B',
          borderWidth: 2.5,
          backgroundColor: gradient,
          tension: 0.35,
          fill: true,
          pointBackgroundColor: '#00897B',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2.5,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0F172A',
            padding: 10,
            titleFont: { family: 'Outfit', size: 12 },
            bodyFont: { family: 'Plus Jakarta Sans', size: 13, weight: 'bold' },
            callbacks: {
              label: (context) => ' ₹' + context.parsed.y.toLocaleString('en-IN')
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 120000,
            grid: { color: '#F1F5F9' },
            ticks: { 
              color: '#64748B',
              font: { family: 'Plus Jakarta Sans', size: 11 },
              stepSize: 20000,
              callback: (val) => val === 0 ? '0' : '₹' + (val / 1000) + 'k' 
            },
            border: { display: false }
          },
          x: { 
            grid: { display: false },
            ticks: { color: '#64748B', font: { family: 'Plus Jakarta Sans', size: 12 } },
            border: { display: false }
          }
        }
      }
    });
  }
}

function updateChartRange(range) {
  if (!providerEarningsChartInstance) return;
  if (range === '3M') {
    providerEarningsChartInstance.data.labels = ['Aug', 'Sep', 'Oct'];
    providerEarningsChartInstance.data.datasets[0].data = [65000, 84000, 114500];
  } else if (range === '1Y') {
    providerEarningsChartInstance.data.labels = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    providerEarningsChartInstance.data.datasets[0].data = [18000, 24000, 31000, 38000, 49000, 52000, 60000, 72000, 81000, 92000, 104000, 114500];
  } else {
    providerEarningsChartInstance.data.labels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    providerEarningsChartInstance.data.datasets[0].data = [0, 25000, 42000, 65000, 84000, 114500];
  }
  providerEarningsChartInstance.update();
  if (window.showToast) {
    window.showToast(`Chart updated to ${range === '3M' ? 'Last 3 Months' : range === '1Y' ? 'Past Year' : 'Last 6 Months'}`, 'info');
  }
}

/* --------------------------------------------------------------------------
   Provider Availability Status Toggle
   -------------------------------------------------------------------------- */
let isAcceptingJobs = true;
function toggleProviderAvailability() {
  const btn = document.getElementById('availability-toggle-btn');
  const txt = document.getElementById('availability-text');
  isAcceptingJobs = !isAcceptingJobs;
  
  if (btn && txt) {
    if (isAcceptingJobs) {
      btn.classList.remove('offline');
      txt.innerText = 'Accepting New Jobs';
      if (window.showToast) window.showToast('🟢 Partner Status: Accepting New Jobs. You are visible for dispatch.', 'success');
    } else {
      btn.classList.add('offline');
      txt.innerText = 'Offline (Paused)';
      if (window.showToast) window.showToast('⏸ Partner Status: Offline. Dispatch leads paused temporarily.', 'neutral');
    }
  }
}

/* --------------------------------------------------------------------------
   Job Request Filter Tabs
   -------------------------------------------------------------------------- */
function filterJobCards(status, btn) {
  // Update button active state
  document.querySelectorAll('.job-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const container = document.getElementById('provider-jobs-cards-container');
  if (!container) return;

  if (status === 'accepted') {
    container.innerHTML = `
      <div class="col-12">
        <div class="p-4 text-center border rounded-3 bg-light">
          <i class="bi bi-clock-history text-teal-custom fs-3 mb-2 d-block"></i>
          <h6 class="font-weight-bold mb-1 text-dark">1 Active Accepted Job in Dispatch</h6>
          <p class="text-muted small mb-0">#JOB-8841 (Electrical Fitting) is currently underway. Check the Dispatch radar above.</p>
        </div>
      </div>
    `;
  } else if (status === 'progress') {
    container.innerHTML = `
      <div class="col-12">
        <div class="p-4 text-center border rounded-3 bg-light">
          <i class="bi bi-gear-wide-connected text-teal-custom fs-3 mb-2 d-block"></i>
          <h6 class="font-weight-bold mb-1 text-dark">2 Turnkey Jobs in Work-In-Progress</h6>
          <p class="text-muted small mb-0">Bathroom sanitary installation & 3BHK false ceiling rewiring.</p>
        </div>
      </div>
    `;
  } else if (status === 'completed') {
    container.innerHTML = `
      <div class="col-12">
        <div class="p-4 text-center border rounded-3 bg-light">
          <i class="bi bi-check2-all text-success fs-3 mb-2 d-block"></i>
          <h6 class="font-weight-bold mb-1 text-dark">5 Jobs Completed Recently</h6>
          <p class="text-muted small mb-0">100% Escrow released and customer reviews logged with 5.0 ★ average.</p>
        </div>
      </div>
    `;
  } else {
    // Restore new requests
    container.innerHTML = `
      <!-- Card 1: AC Repair -->
      <div class="col-md-6 job-item-wrapper" data-status="new">
        <div class="job-req-card">
          <div>
            <div class="d-flex align-items-start gap-3 mb-2.5">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=160&q=80" alt="AC Repair" class="rounded-3" style="width: 58px; height: 58px; object-fit: cover; flex-shrink: 0;">
              <div class="flex-grow-1">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center gap-2">
                    <h6 class="font-weight-bold mb-0 text-dark" style="font-size: 15px;">AC Repair</h6>
                    <span class="badge" style="background: #E0F2FE; color: #0284C7; font-weight: 700; font-size: 10.5px; border-radius: 9999px; padding: 2px 7px;">New</span>
                  </div>
                </div>
                <div class="text-muted mt-1" style="font-size: 12px;"><i class="bi bi-person me-1"></i> Priya Singh</div>
                <div class="text-muted" style="font-size: 12px;"><i class="bi bi-geo-alt me-1"></i> Sector 62, Noida, UP</div>
                <div class="text-muted" style="font-size: 12px;"><i class="bi bi-calendar3 me-1"></i> Today, 05:00 PM – 07:00 PM</div>
              </div>
              <div class="text-end" style="flex-shrink: 0;">
                <div class="text-muted" style="font-size: 11px; font-weight: 600;">Budget</div>
                <div class="font-weight-bold text-dark" style="font-size: 14.5px;">₹1,200 – ₹1,800</div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between pt-2.5 border-top flex-wrap gap-2">
            <div class="d-flex align-items-center gap-3 text-muted" style="font-size: 11.5px;">
              <span><i class="bi bi-geo-alt text-teal-custom me-1"></i>3.5 km</span>
              <span><i class="bi bi-lightning-charge text-muted me-1"></i>Priority: Normal</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button type="button" class="btn btn-sm btn-accept-request px-3 py-1 font-weight-bold" style="background: #00897B; color: #FFFFFF; border-radius: 9999px; font-size: 12px;">Accept Job</button>
              <button type="button" class="btn btn-sm btn-reject-request px-3 py-1 font-weight-semibold" style="background: #FFFFFF; color: #EF4444; border: 1px solid #FCA5A5; border-radius: 9999px; font-size: 12px;">Decline</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2: Plumber -->
      <div class="col-md-6 job-item-wrapper" data-status="new">
        <div class="job-req-card">
          <div>
            <div class="d-flex align-items-start gap-3 mb-2.5">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=160&q=80" alt="Plumber" class="rounded-3" style="width: 58px; height: 58px; object-fit: cover; flex-shrink: 0;">
              <div class="flex-grow-1">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center gap-2">
                    <h6 class="font-weight-bold mb-0 text-dark" style="font-size: 15px;">Plumber</h6>
                    <span class="badge" style="background: #E0F2FE; color: #0284C7; font-weight: 700; font-size: 10.5px; border-radius: 9999px; padding: 2px 7px;">New</span>
                  </div>
                </div>
                <div class="text-muted mt-1" style="font-size: 12px;"><i class="bi bi-person me-1"></i> Amit Verma</div>
                <div class="text-muted" style="font-size: 12px;"><i class="bi bi-geo-alt me-1"></i> Gurgaon, Haryana</div>
                <div class="text-muted" style="font-size: 12px;"><i class="bi bi-calendar3 me-1"></i> Tomorrow, 10:00 AM – 12:00 PM</div>
              </div>
              <div class="text-end" style="flex-shrink: 0;">
                <div class="text-muted" style="font-size: 11px; font-weight: 600;">Budget</div>
                <div class="font-weight-bold text-dark" style="font-size: 14.5px;">₹800 – ₹1,500</div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between pt-2.5 border-top flex-wrap gap-2">
            <div class="d-flex align-items-center gap-3 text-muted" style="font-size: 11.5px;">
              <span><i class="bi bi-geo-alt text-teal-custom me-1"></i>5.2 km</span>
              <span class="text-danger font-weight-bold"><i class="bi bi-lightning-charge-fill me-1"></i>Priority: High</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button type="button" class="btn btn-sm btn-accept-request px-3 py-1 font-weight-bold" style="background: #00897B; color: #FFFFFF; border-radius: 9999px; font-size: 12px;">Accept Job</button>
              <button type="button" class="btn btn-sm btn-reject-request px-3 py-1 font-weight-semibold" style="background: #FFFFFF; color: #EF4444; border: 1px solid #FCA5A5; border-radius: 9999px; font-size: 12px;">Decline</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

/* --------------------------------------------------------------------------
   Incoming Request Actions (Accept / Reject)
   -------------------------------------------------------------------------- */
function initRequestActions() {
  document.addEventListener('click', (e) => {
    const acceptBtn = e.target.closest('.btn-accept-request');
    const rejectBtn = e.target.closest('.btn-reject-request');

    if (acceptBtn) {
      const card = acceptBtn.closest('.job-item-wrapper') || acceptBtn.closest('.request-card');
      if (card) {
        card.style.opacity = '0.5';
        card.innerHTML = `
          <div class="p-3 text-center text-teal-custom border rounded-3 bg-light">
            <i class="bi bi-check-circle-fill fs-3 mb-1 d-block text-teal-custom"></i>
            <h6 class="mb-0 font-weight-bold">Request Accepted! Assigned to your queue.</h6>
          </div>
        `;
        setTimeout(() => card.remove(), 1800);
      }
      if (window.showToast) window.showToast('✅ Job Request Accepted! Customer has been notified via WhatsApp & SMS.', 'success', 'bi-check-circle-fill');
    }

    if (rejectBtn) {
      const card = rejectBtn.closest('.job-item-wrapper') || rejectBtn.closest('.request-card');
      if (card) {
        card.remove();
      }
      if (window.showToast) window.showToast('Job request declined and returned to dispatch pool.', 'neutral', 'bi-x-circle');
    }
  });
}

/* --------------------------------------------------------------------------
   Live Job Status Progression Timeline Controller & OTP
   -------------------------------------------------------------------------- */
function updateJobStatus(stepIndex, statusName) {
  const timelineNodes = document.querySelectorAll('.status-timeline-node');
  const badge = document.getElementById('current-job-status-badge');

  timelineNodes.forEach((node, idx) => {
    node.classList.remove('active', 'completed');
    if (idx < stepIndex) {
      node.classList.add('completed');
    } else if (idx === stepIndex) {
      node.classList.add('active');
    }
  });

  if (badge) {
    badge.innerText = statusName;
  }

  if (window.showToast) {
    window.showToast(`Status updated to: "${statusName}"`, 'info', 'bi-arrow-repeat');
  }
}

function verifyJobOtp() {
  const otpInput = document.getElementById('providerOtpInput');
  if (!otpInput) return;
  const otpVal = otpInput.value.trim();

  if (otpVal.length === 6) {
    if (window.showToast) {
      window.showToast('🔒 Customer OTP Verified Successfully! Service Meter Started.', 'success', 'bi-shield-check');
    }
    updateJobStatus(4, 'Quotation');
    otpInput.classList.add('is-valid');
    otpInput.classList.remove('is-invalid');
  } else {
    if (window.showToast) {
      window.showToast('⚠️ Please enter the complete 6-digit OTP provided by the customer.', 'warning');
    }
    otpInput.classList.add('is-invalid');
  }
}

function saveTimelineProgression() {
  const modalEl = document.getElementById('timelineOtpModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }
  if (window.showToast) {
    window.showToast('✅ Timeline progress synced with Customer & Admin Dispatch.', 'success');
  }
}

function initStatusStepperControls() {
  // Binding hooks
}

// Window global exports
window.updateJobStatus = updateJobStatus;
window.updateChartRange = updateChartRange;
window.toggleProviderAvailability = toggleProviderAvailability;
window.filterJobCards = filterJobCards;
window.verifyJobOtp = verifyJobOtp;
window.saveTimelineProgression = saveTimelineProgression;
