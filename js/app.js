// Main JavaScript Application for Muhammad Nur Azam's HR Portfolio
import { PORTFOLIO_DATA } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderPhilosophy();
  renderCareerJourney();
  renderAchievements();
  renderSelectedWork();
  renderHRJournal();
  renderExpertise();
  renderResumeSection();
  renderContactSection();
  initModals();
  initMobileMenu();
  initScrollSpy();
  initContactCopy();
  initRevealAnimations();

  // Refresh Lucide Icons if available and replace unsupported LinkedIn icons with inline SVGs
  refreshIcons();
});

function replaceLinkedinIcons() {
  const icons = document.querySelectorAll('i[data-lucide="linkedin"]');

  icons.forEach((icon) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.classList.add(...Array.from(icon.classList));
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38A1.56 1.56 0 0 1 6.94 8.5ZM5.38 9.75h3.12v8.06H5.38zm5.1 0h2.99v1.1h.04c.42-.8 1.44-1.64 2.96-1.64 3.17 0 3.75 2.08 3.75 4.79v2.81h-3.12v-2.63c0-1.18-.02-2.69-1.64-2.69s-1.89 1.28-1.89 2.6v2.72H10.48z');
    path.setAttribute('fill', 'currentColor');
    svg.appendChild(path);

    icon.replaceWith(svg);
  });
}

function refreshIcons() {
  replaceLinkedinIcons();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 1. Render Hero Section
function renderHero() {
  const { personal, hero } = PORTFOLIO_DATA;
  const container = document.getElementById('hero-content');
  if (!container) return;

  container.innerHTML = `
    <div class="hero-layout grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div class="hero-atmosphere" aria-hidden="true">
        <span class="hero-ambient hero-ambient--teal"></span>
        <span class="hero-ambient hero-ambient--sand"></span>
        <span class="hero-ambient hero-ambient--lines"></span>
      </div>

      <!-- Left Column: Editorial Identity & CTAs (approx 58%) -->
      <div class="hero-copy lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-6">
        
        <!-- Live Status Pill -->
        <div class="current-status inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold w-fit tracking-wide">
          <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span>${hero.liveStatus}</span>
        </div>

        <!-- Name & Professional Descriptor -->
        <div>
          <h1 class="hero-name text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] font-heading">
            ${personal.name}
          </h1>
          <p class="mt-2.5 text-lg sm:text-xl font-medium text-[#1F6F68] tracking-tight">
            ${personal.positioning}
          </p>
        </div>

        <!-- Positioning Summary -->
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          ${hero.bio}
        </p>

        <!-- CTAs Group -->
        <div class="flex flex-wrap items-center gap-4 pt-2">
          <a href="#selected-work" 
             class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1F6F68] hover:bg-[#185A55] transition-all shadow-sm hover:shadow active:scale-[0.98]">
            Explore Selected Work
            <i data-lucide="arrow-down" class="w-4 h-4 ml-2"></i>
          </a>
          <a href="${personal.linkedinUrl}" 
             target="_blank" 
             rel="noopener noreferrer"
             class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white border border-slate-200 hover:border-[#1F6F68] hover:text-[#1F6F68] transition-all shadow-sm hover:shadow-sm active:scale-[0.98]">
            <i data-lucide="linkedin" class="w-4 h-4 mr-2 text-[#0A66C2]"></i>
            Connect on LinkedIn
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 ml-1.5 opacity-70"></i>
          </a>
          <button id="hero-resume-btn" 
                  class="inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
            <i data-lucide="file-text" class="w-4 h-4 mr-2"></i>
            Resume
          </button>
        </div>

        <!-- Subtle Proof Points Strip (Preserves whitespace & avoids clutter) -->
        <div class="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${hero.heroProofPoints.map(point => `
            <div class="flex items-start gap-3">
              <div class="p-1.5 rounded-lg bg-[#DCEBE7] text-[#1F6F68] shrink-0 mt-0.5">
                <i data-lucide="check" class="w-4 h-4"></i>
              </div>
              <div>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">${point.label}</p>
                <p class="text-sm font-semibold text-slate-800">${point.value}</p>
              </div>
            </div>
          `).join('')}
        </div>

      </div>

      <!-- Right Column: Professional Portrait (approx 42%) -->
      <div class="hero-portrait-column lg:col-span-5 flex justify-center lg:justify-end">
        <div class="hero-portrait-shell w-full max-w-md lg:max-w-none">
          <div class="portrait-container aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] relative bg-[#EAE8E3]">
            <img src="${personal.portrait}" 
                 alt="${personal.portraitAlt}" 
                 class="portrait-img" 
                 loading="eager" />
            <div class="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[20px] pointer-events-none"></div>
          </div>
          <div class="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
            <span>Human Resources Professional</span>
            <span class="inline-flex items-center gap-1 font-medium text-[#1F6F68]">
              <i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${personal.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('hero-resume-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// 2. Render Philosophy
function renderPhilosophy() {
  const { philosophy } = PORTFOLIO_DATA;
  const container = document.getElementById('philosophy-content');
  if (!container) return;

  container.innerHTML = `
    <div class="philosophy-panel rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
      <!-- Quote block -->
      <div class="max-w-3xl mx-auto text-center space-y-4">
        <span class="inline-block text-xs font-bold uppercase tracking-widest text-[#1F6F68] bg-white/80 px-3.5 py-1 rounded-full border border-[#1F6F68]/20">
          Core HR Philosophy
        </span>
        <blockquote class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-snug tracking-tight font-heading">
          “${philosophy.quote}”
        </blockquote>
      </div>

      <!-- 3 Guiding Pillars -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-[#1F6F68]/15">
        ${philosophy.principles.map((p, idx) => `
          <div class="philosophy-card p-6 flex flex-col justify-between">
            <div>
              <div class="w-8 h-8 rounded-lg bg-[#DCEBE7] text-[#1F6F68] flex items-center justify-center font-bold text-xs mb-3">
                0${idx + 1}
              </div>
              <h3 class="text-base font-bold text-slate-900 mb-2 font-heading">${p.title}</h3>
              <p class="text-sm text-slate-600 leading-relaxed">${p.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 3. Render Career Journey
function renderCareerJourney() {
  const { careerJourney } = PORTFOLIO_DATA;
  const container = document.getElementById('journey-content');
  if (!container) return;

  container.innerHTML = `
    <div class="journey-timeline space-y-8">
      ${careerJourney.map(job => `
        <div class="journey-entry editorial-card p-6 sm:p-8 lg:p-10 ${job.isCurrent ? 'is-current' : ''}">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div class="flex flex-wrap items-center gap-2.5 mb-1.5">
                <h3 class="text-xl sm:text-2xl font-bold text-slate-900 font-heading">${job.company}</h3>
                <span class="tag-pill">${job.badge}</span>
              </div>
              <p class="text-base font-semibold text-[#1F6F68]">${job.role}</p>
            </div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold w-fit">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-500"></i>
              ${job.period}
            </div>
          </div>

          <div class="mt-6">
            <p class="text-sm sm:text-base text-slate-700 font-medium mb-4">${job.summary}</p>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Key Responsibilities & Scope:</h4>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              ${job.responsibilities.map(r => `
                <li class="flex items-start gap-2.5 text-sm text-slate-600">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#1F6F68] shrink-0 mt-2"></span>
                  <span>${r}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 4. Render Career Impact & Proof Metrics
function renderAchievements() {
  const { achievements } = PORTFOLIO_DATA;
  const container = document.getElementById('impact-content');
  if (!container) return;

  container.innerHTML = `
    <div class="impact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${achievements.map(item => `
        <div class="impact-item editorial-card p-6 flex flex-col justify-between">
          <div>
            <div class="impact-metric inline-block px-3 py-1 text-xs font-bold mb-4">
              ${item.metric}
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-2 font-heading">
              ${item.title}
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              ${item.description}
            </p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 5. Render Selected Work (CAR initiatives)
function renderSelectedWork() {
  const { selectedWork } = PORTFOLIO_DATA;
  const container = document.getElementById('work-content');
  if (!container) return;

  container.innerHTML = `
    <div class="work-list grid grid-cols-1 gap-0">
      ${selectedWork.map(item => `
        <article class="case-study-module p-6 sm:p-8 lg:p-10 group">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="tag-pill">${item.category}</span>
              <span class="text-xs font-mono font-bold text-slate-400">INITIATIVE ${item.number}</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-[#1F6F68] transition-colors mb-3 font-heading">
              ${item.title}
            </h3>
            <p class="text-sm text-slate-600 mb-6 leading-relaxed">
              ${item.summary}
            </p>

            <!-- Compact CAR Overview -->
            <div class="case-study-grid mb-7">
              <div class="case-study-detail">
                <span class="case-study-label">Context</span>
                <p>${item.context}</p>
              </div>
              <div class="case-study-detail">
                <span class="case-study-label">Contribution</span>
                <ul>
                  ${item.contribution.map(contribution => `<li>${contribution}</li>`).join('')}
                </ul>
              </div>
              <div class="case-study-detail case-study-outcome">
                <span class="case-study-label">Outcome</span>
                <p>${item.outcome}</p>
              </div>
            </div>
          </div>

          <button class="open-case-btn inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-semibold text-[#1F6F68] hover:text-[#185A55] transition-colors"
                  data-case-id="${item.id}">
            <span>View Complete Breakdown</span>
            <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1"></i>
          </button>
        </article>
      `).join('')}
    </div>
  `;

  // Attach modal triggers
  document.querySelectorAll('.open-case-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const caseId = e.currentTarget.getAttribute('data-case-id');
      openCaseStudyModal(caseId);
    });
  });
}

// 6. Render HR Journal by Azam (Editorial Teasers)
function renderHRJournal() {
  const { hrJournal } = PORTFOLIO_DATA;
  const container = document.getElementById('journal-content');
  if (!container) return;

  container.innerHTML = `
    <div class="journal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      ${hrJournal.entries.map(entry => `
        <article class="journal-entry p-6 sm:p-7 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-bold text-[#1F6F68] bg-[#DCEBE7] px-2.5 py-1 rounded-md">
                ${entry.number}
              </span>
              <span class="text-xs text-slate-400 font-medium">HR Reflection</span>
            </div>
            
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-[#1F6F68] transition-colors leading-snug mb-3 font-heading">
              ${entry.title}
            </h3>
            
            <p class="text-sm text-slate-600 leading-relaxed mb-6">
              ${entry.teaser}
            </p>
          </div>

          <a href="${entry.linkedinUrl}" 
             target="_blank" 
             rel="noopener noreferrer"
             class="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-bold text-[#1F6F68] hover:text-[#185A55] transition-colors">
            <span class="inline-flex items-center gap-1.5">
              <i data-lucide="linkedin" class="w-3.5 h-3.5 text-[#0A66C2]"></i>
              Read & Discuss on LinkedIn
            </span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </a>
        </article>
      `).join('')}
    </div>
  `;
}

// 7. Render Core Areas of Expertise
function renderExpertise() {
  const { expertise } = PORTFOLIO_DATA;
  const container = document.getElementById('expertise-content');
  if (!container) return;

  container.innerHTML = `
    <div class="expertise-grid grid grid-cols-1 md:grid-cols-2 gap-0">
      ${expertise.map(domain => `
        <div class="expertise-column p-6 sm:p-8">
          <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <h3 class="text-lg font-bold text-slate-900 font-heading">${domain.domain}</h3>
            <span class="text-xs font-semibold text-[#1F6F68] bg-[#DCEBE7] px-2.5 py-0.5 rounded-full">
              ${domain.badge}
            </span>
          </div>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${domain.skills.map(skill => `
              <li class="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-[#1F6F68] shrink-0"></i>
                <span>${skill}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

// 8. Render Resume Section with Graceful Handling
function renderResumeSection() {
  const { resume } = PORTFOLIO_DATA;
  const container = document.getElementById('resume-content');
  if (!container) return;

  container.innerHTML = `
    <div class="resume-panel editorial-card p-8 sm:p-12 lg:p-14 bg-white border border-slate-200">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div class="lg:col-span-8 space-y-4">
          <span class="tag-pill">Curriculum Vitae</span>
          <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">${resume.title}</h3>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            A comprehensive, verified record of professional HR experience, operational initiatives, and talent acquisition milestones.
          </p>
          <div class="space-y-2 pt-2">
            ${resume.highlights.map(h => `
              <div class="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <i data-lucide="badge-check" class="w-4 h-4 text-[#1F6F68] shrink-0"></i>
                <span>${h}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="lg:col-span-4 flex flex-col gap-3">
          <button id="download-resume-btn" 
                  class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1F6F68] hover:bg-[#185A55] transition-all shadow-sm active:scale-[0.98]">
            <i data-lucide="download" class="w-4 h-4 mr-2"></i>
            Download Resume (PDF)
          </button>
          <button id="view-resume-btn" 
                  class="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-slate-50 border border-slate-200 hover:border-[#1F6F68] hover:text-[#1F6F68] transition-all active:scale-[0.98]">
            <i data-lucide="eye" class="w-4 h-4 mr-2"></i>
            View Career Summary
          </button>
        </div>

      </div>
    </div>
  `;

  document.getElementById('download-resume-btn')?.addEventListener('click', handleResumeDownload);
  document.getElementById('view-resume-btn')?.addEventListener('click', openResumeSummaryModal);
}

// 9. Render Contact Section
function renderContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const container = document.getElementById('contact-content');
  if (!container) return;

  container.innerHTML = `
    <div class="contact-panel rounded-3xl bg-[#1B2430] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
      <div class="contact-inner">
        <div class="contact-intro max-w-5xl space-y-6">
          <span class="inline-block text-xs font-bold uppercase tracking-widest text-[#DCEBE7] bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
            Connect & Inquiries
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading">
            Let’s discuss human-centered HR and<br class="hidden sm:block" /> professional opportunities.
          </h2>
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
            Open to connecting with HR leaders, recruiters, and professionals across the talent ecosystem.
          </p>
        </div>

        <div class="contact-layout">
          <section class="contact-directory" aria-labelledby="contact-directory-title">
            <div class="contact-directory__heading">
              <h3 id="contact-directory-title">Contact Directory</h3>
            </div>

            <div class="contact-directory__row">
              <span class="contact-directory__label">Email</span>
              <a class="contact-directory__value" href="mailto:${personal.email}">${personal.email}</a>
              <div class="contact-directory__actions">
                <button type="button" class="contact-action" data-copy-contact="email" aria-label="Copy email address">
                  <span data-copy-label aria-live="polite">Copy</span>
                </button>
              </div>
            </div>

            <div class="contact-directory__row">
              <span class="contact-directory__label">Phone</span>
              <a class="contact-directory__value" href="tel:${personal.phone}">${personal.phone}</a>
              <div class="contact-directory__actions">
                <a class="contact-action" href="tel:${personal.phone}" aria-label="Call ${personal.phone}">Call</a>
                <button type="button" class="contact-action" data-copy-contact="phone" aria-label="Copy phone number">
                  <span data-copy-label aria-live="polite">Copy</span>
                </button>
              </div>
            </div>

            <div class="contact-directory__row">
              <span class="contact-directory__label">Portfolio</span>
              <a class="contact-directory__value" href="${personal.portfolioUrl}" target="_blank" rel="noopener noreferrer">
                ${personal.portfolioDisplay}
              </a>
              <div class="contact-directory__actions">
                <a class="contact-action" href="${personal.portfolioUrl}" target="_blank" rel="noopener noreferrer" aria-label="Visit portfolio website">
                  Visit ↗
                </a>
              </div>
            </div>

            <div class="contact-directory__row contact-directory__row--location">
              <span class="contact-directory__label">Location</span>
              <span class="contact-directory__value">${personal.contactLocation.city}</span>
              <div class="contact-directory__actions contact-directory__country">
                ${personal.contactLocation.country}
              </div>
            </div>
          </section>

          <aside class="contact-linkedin-card" aria-label="LinkedIn profile">
            <div>
              <span class="contact-linkedin-card__label">LinkedIn Profile</span>
              <p class="contact-linkedin-card__headline">${personal.linkedinHeadline}</p>
            </div>
            <a href="${personal.linkedinUrl}"
               target="_blank"
               rel="noopener noreferrer"
               class="contact-linkedin-card__cta">
              <i data-lucide="linkedin" class="w-4 h-4" aria-hidden="true"></i>
              <span>View Profile on LinkedIn ↗</span>
            </a>
          </aside>
        </div>
      </div>
    </div>
  `;
}

// Modal Controllers
function initModals() {
  const modal = document.getElementById('case-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', () => closeModal());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

function openCaseStudyModal(caseId) {
  const { selectedWork } = PORTFOLIO_DATA;
  const item = selectedWork.find(w => w.id === caseId);
  if (!item) return;

  const modal = document.getElementById('case-modal');
  const body = document.getElementById('modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="space-y-6">
      <div class="border-b border-slate-100 pb-4 pr-12">
        <div class="flex items-center gap-3 mb-2">
          <span class="tag-pill">${item.category}</span>
          <span class="text-xs font-mono font-bold text-slate-400">INITIATIVE ${item.number}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug font-heading">${item.title}</h2>
      </div>

      <!-- Context -->
      <div>
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Context & Background</h3>
        <p class="text-sm text-slate-700 leading-relaxed">${item.context}</p>
      </div>

      <!-- Contribution / Approach -->
      <div>
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Contribution & Methodology</h3>
        <ul class="space-y-2">
          ${item.contribution.map(c => `
            <li class="flex items-start gap-2 text-sm text-slate-700">
              <i data-lucide="check" class="w-4 h-4 text-[#1F6F68] shrink-0 mt-0.5"></i>
              <span>${c}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Outcome -->
      <div class="bg-[#DCEBE7]/60 p-4 rounded-xl border border-[#1F6F68]/20">
        <h3 class="text-xs font-bold uppercase tracking-wider text-[#1F6F68] mb-1">Outcome & Contribution</h3>
        <p class="text-sm text-slate-900 font-medium">${item.outcome}</p>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  refreshIcons();
}

function openResumeSummaryModal() {
  const modal = document.getElementById('case-modal');
  const body = document.getElementById('modal-body');
  if (!modal || !body) return;

  const { personal, careerJourney, achievements } = PORTFOLIO_DATA;

  body.innerHTML = `
    <div class="space-y-6">
      <div class="border-b border-slate-100 pb-4 pr-12">
        <span class="tag-pill mb-2">Verified Professional Summary</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">${personal.name}</h2>
        <p class="text-sm font-semibold text-[#1F6F68] mt-1">${personal.positioning}</p>
        <p class="text-xs text-slate-500 mt-1">${personal.email} • ${personal.company}</p>
      </div>

      <!-- Experience Summary -->
      <div>
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Work History</h3>
        <div class="space-y-4">
          ${careerJourney.map(j => `
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div class="flex justify-between items-start mb-1">
                <span class="font-bold text-slate-900 text-sm font-heading">${j.company}</span>
                <span class="text-xs text-slate-500 font-mono">${j.period}</span>
              </div>
              <p class="text-xs font-semibold text-[#1F6F68] mb-2">${j.role}</p>
              <p class="text-xs text-slate-600">${j.summary}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Verified Achievements -->
      <div>
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Achievements</h3>
        <ul class="space-y-1.5 text-xs text-slate-700">
          ${achievements.map(a => `
            <li class="flex items-start gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#1F6F68] shrink-0 mt-1.5"></span>
              <span><strong>${a.metric}:</strong> ${a.title} — ${a.description}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-2 flex justify-end">
        <button id="modal-download-fallback" class="px-5 py-2.5 rounded-xl bg-[#1F6F68] text-white text-xs font-bold hover:bg-[#185A55] transition-colors">
          Download PDF
        </button>
      </div>
    </div>
  `;

  document.getElementById('modal-download-fallback')?.addEventListener('click', handleResumeDownload);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  refreshIcons();
}

function closeModal() {
  const modal = document.getElementById('case-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Graceful Resume Download Handler
function handleResumeDownload() {
  fetch('assets/resume.pdf', { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        window.open('assets/resume.pdf', '_blank');
      } else {
        showResumePlaceholderNotice();
      }
    })
    .catch(() => {
      showResumePlaceholderNotice();
    });
}

function showResumePlaceholderNotice() {
  showToast('📄 Resume PDF placeholder active. Complete on-page career summary is available below.');
}

// Contact directory copy actions reuse the shared toast feedback system.
function initContactCopy() {
  document.addEventListener('click', (e) => {
    const button = e.target?.closest('[data-copy-contact]');
    if (!button) return;

    const contactDetails = {
      email: {
        value: PORTFOLIO_DATA.personal.email,
        label: 'Email'
      },
      phone: {
        value: PORTFOLIO_DATA.personal.phone,
        label: 'Phone number'
      }
    };
    const detail = contactDetails[button.dataset.copyContact];
    if (!detail) return;

    const buttonLabel = button.querySelector('[data-copy-label]');
    const originalLabel = buttonLabel?.textContent || 'Copy';

    navigator.clipboard.writeText(detail.value).then(() => {
      if (buttonLabel) buttonLabel.textContent = 'Copied';
      button.classList.add('is-copied');
      showToast(`✓ ${detail.label} copied: ${detail.value}`);

      window.setTimeout(() => {
        if (buttonLabel) buttonLabel.textContent = originalLabel;
        button.classList.remove('is-copied');
      }, 1800);
    }).catch(() => {
      showToast(`${detail.label}: ${detail.value}`);
    });
  });
}

// Toast Alert
function showToast(message) {
  let container = document.getElementById('toast-box');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-box';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span class="font-medium">${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// Mobile Menu Drawer
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('close-drawer-btn');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
    document.body.style.overflow = drawer.classList.contains('hidden') ? '' : 'hidden';
  });

  closeBtn?.addEventListener('click', () => {
    drawer.classList.add('hidden');
    document.body.style.overflow = '';
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
}

// Active Scroll Spy
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// Subtle, dependency-free reveal transitions with reduced-motion support.
function initRevealAnimations() {
  const targets = document.querySelectorAll(
    '.section-intro, .philosophy-panel, .journey-entry, .impact-item, .case-study-module, .journal-entry, .expertise-column, .resume-panel, .contact-panel'
  );

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(target => target.classList.add('is-visible'));
    return;
  }

  targets.forEach(target => target.classList.add('reveal-target'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px' });

  targets.forEach(target => observer.observe(target));
}
