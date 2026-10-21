/**
 * PROJECTS DATA & FILTERING ENGINE
 * Contains full project data from portfolio-info.md with modal inspector
 */

const projectsData = [
  {
    id: 'happengrid',
    title: 'HappenGrid – Event Management Platform',
    category: 'web',
    categoryLabel: 'Full-Stack Web',
    type: 'Client Project (Freelance) / Live Web Platform',
    shortDesc: 'End-to-end event management platform where organizers host and manage events while attendees explore, book tickets, and follow communities.',
    fullDesc: 'End-to-end event management platform where organizers can host and manage events while attendees explore, register, and follow communities. Built with scalable cloud infrastructure and secure payment reconciliation.',
    tags: ['Django', 'Python', 'PostgreSQL', 'AWS Lightsail', 'Coolify', 'AWS S3', 'Razorpay', 'GitHub CI/CD'],
    liveUrl: 'https://happengrid.com',
    githubUrl: null,
    highlights: [
      'Attendee Portal: Event discovery, paid/free ticket booking, and community following.',
      'Organizer Dashboard: Event creation & lifecycle management, ticket tracking, and event payout requests.',
      'Admin Dashboard: Platform-wide oversight of organizers, events, blogs, user inquiries, and payouts.',
      'Infrastructure: Integrated Razorpay payment gateway; deployed on AWS Lightsail VPS managed via Coolify with automated GitHub push-to-deploy CI/CD; daily PostgreSQL backups & S3 storage.'
    ]
  },
  {
    id: 'stepo',
    title: 'Stepo – School Management App',
    category: 'android',
    categoryLabel: 'Native Android',
    type: 'Solo Project / S.T.R.E.A.M. Edutech Internship',
    shortDesc: 'Comprehensive native Android school management system actively used by 150+ students to streamline academic workflows, assessments, and school communications.',
    fullDesc: 'Architected and developed Stepo as a solo developer during internship at S.T.R.E.A.M. Edutech, actively serving 150+ students. Features academic scheduling, online assessment engine, automated dynamic fee receipt generation, and real-time school circulars.',
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Firebase FCM', 'iText7', 'Material Design 3', 'Coroutines'],
    liveUrl: null,
    githubUrl: null,
    highlights: [
      'Academic & Timetable Management: Real-time class schedules, exam timetables, academic calendars, curriculum browser with study material downloads.',
      'Assessments & Submissions: Interactive test and online exercise engine with instant feedback and multi-format assignment submission.',
      'Circulars & Notifications: Firebase Cloud Messaging (FCM) to deliver instant school circulars and announcements.',
      'Fee Payments & Invoicing: Secure payment gateway and automated dynamic PDF receipt generation using iText7.',
      'Modern Architecture: Jetpack Compose, MVVM pattern, Retrofit REST APIs, Coil image loading, Google Play Core in-app updates.'
    ]
  },
  {
    id: 'steller-sprangs',
    title: 'Steller Sprangs – Commercial Agency & CRM',
    category: 'web',
    categoryLabel: 'Full-Stack Web',
    type: 'Commercial Web App / Client Project (Live)',
    shortDesc: 'Complete commercial agency web application and zero-server-cost Lead Management CRM built for a digital marketing and strategic PR consultancy.',
    fullDesc: 'Features public service catalogs, customer inquiries, and an internal administrative dashboard for live lead triage and Excel reporting with zero server cost.',
    tags: ['HTML5 Semantic', 'CSS3 Custom System', 'JavaScript ES6+', 'Firebase RTDB', 'SheetJS', 'Netlify Edge CDN'],
    liveUrl: 'https://stellersprangs.com',
    githubUrl: null,
    highlights: [
      'Public MPA Architecture: Multi-page semantic architecture with 9 service deep-dive pages and structured Schema.org JSON-LD markup.',
      'Custom Geometry & GPU Animation: Curved header geometry and pure CSS GPU-accelerated infinite client logo ticker.',
      'Zero-Server-Cost Admin CRM: Single-Page Application (SPA) dashboard for agency staff with real-time KPI counters.',
      'In-Memory Filtering: Client-side full-text search, status dropdowns, and date-range filters with instant in-place DOM updates.',
      'Client-Side SheetJS Excel Export: In-browser JSON-to-XLSX workbook generator that compiles filtered lead lists into formatted spreadsheets.'
    ]
  },
  {
    id: 'ascend-2k26',
    title: 'ASCEND 2K26 – National Technical Symposium',
    category: 'web',
    categoryLabel: 'Full-Stack Web',
    type: 'Live Institutional Event Platform / College Web App',
    shortDesc: 'Official web portal for the annual National Technical Symposium hosted by KKWIEER MCA, engineered with a cyberpunk terminal design language and dynamic event workflows.',
    fullDesc: 'Role: Co-Head Design Committee & Lead Developer. Engineered an immersive cyberpunk terminal boot sequence, competition registration workflows, guidelines for 4 major tracks, and live schedules.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Responsive Web Design'],
    liveUrl: 'https://ascend2k26.in',
    githubUrl: null,
    highlights: [
      'Cyberpunk Terminal Boot Sequence: Animated initialization sequence and command-line aesthetics tailored to the symposium theme.',
      'Competition Tracks Hub: Detail panels, prize pool disclosures, guidelines for Mini Hackathon, BGMI Tournament, Art Arena, and Bowl\'ed Out.',
      'Dynamic Schedule & Timelines: Interactive agenda breakdown from inauguration to valedictory ceremony.',
      'Registration Engine: Integrated workflows, Google Form bridges, payment guidelines, WhatsApp community channels.'
    ]
  },
  {
    id: 'house-of-deepak',
    title: 'House of Deepak – E-commerce Platform',
    category: 'web',
    categoryLabel: 'Full-Stack Web',
    type: 'Live Site (E-commerce) / Client Project',
    shortDesc: 'Comprehensive fashion e-commerce platform featuring dual brand collections—traditional Indian wear and contemporary Western wear—with full cart, checkout, and admin suite.',
    fullDesc: 'Complete mobile-first shopping experience with persistent cart, coupon code engine, Razorpay payments with server-side HMAC signature verification, and granular Firestore security rules.',
    tags: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Firebase Firestore', 'Node.js', 'Express', 'Razorpay'],
    liveUrl: 'https://houseofdeepak.in',
    githubUrl: null,
    highlights: [
      'Dual Brand Storefronts: Dedicated storefronts for House of Deepak (traditional ethnic) and Scan by Deepak Raj (contemporary Western).',
      'Product Discovery: Multi-attribute filtering, interactive high-resolution galleries with zoom, size/color variant selector.',
      'Payment Gateway: Integrated Razorpay with client checkout modal, secure backend order creation, and server-side HMAC verification.',
      'Admin Dashboard: Centralized dashboard with business analytics, CRUD for products, and coupon code administration.'
    ]
  },
  {
    id: 'gta-maharashtra-mods',
    title: 'GTA Maharashtra Mods – Digital Asset Delivery',
    category: 'web',
    categoryLabel: 'Full-Stack Web',
    type: 'Live Site (E-commerce) / Client Project',
    shortDesc: 'Full-stack e-commerce marketplace and secure digital asset distribution platform built for the Indian gaming community with INR currency and UPI payment support.',
    fullDesc: 'Zero-bundle framework-free Vanilla JS architecture with custom DOM event bus, achieving sub-second initial loads. Features anti-piracy zero-trust digital fulfillment with cryptographic signed URLs.',
    tags: ['Vanilla JS', 'Tailwind CSS', 'Firebase Cloud Functions', 'Cloud Storage', 'Razorpay UPI', 'Swiper.js'],
    liveUrl: 'https://gtamaharashtramods.in',
    githubUrl: null,
    highlights: [
      'Zero-Bundle High Performance: Sub-second initial load on mobile connections without heavy JS bundles.',
      'Anti-Piracy Digital Fulfillment: 3D model ZIP files locked in private Cloud Storage with cryptographic 24-hr signed URLs and 3-download lifetime limit.',
      'Payment Integration: Razorpay UPI, Cards, NetBanking with HMAC-SHA256 signature verification and resilient webhook reconciliation.',
      'Anti-Tampering: Real-time price hydration and atomic batch updates to guard against client-side price tampering.'
    ]
  },
  {
    id: 'mediscribe-ai',
    title: 'MediScribe AI – Medical Prescription OCR',
    category: 'ai',
    categoryLabel: 'AI & IoT',
    type: 'AI / Machine Learning Web Application',
    shortDesc: 'Advanced AI-powered OCR system specifically designed to interpret and digitize doctors\' handwritten medical prescriptions, mitigating medication misinterpretation.',
    fullDesc: 'Computer vision preprocessing pipeline with OpenCV, multi-pass recognition powered by PaddleOCR (SVTR_LCNet) and PyTorch CNN models, spaCy Medical Named Entity Recognition, and dynamic PDF reports.',
    tags: ['Python', 'PaddleOCR', 'PyTorch', 'OpenCV', 'spaCy NER', 'Flask', 'FPDF', 'FuzzyWuzzy'],
    liveUrl: null,
    githubUrl: 'https://github.com/Shriram2005/MediScribe-OCR',
    highlights: [
      'Computer Vision Preprocessing: OpenCV adaptive thresholding, Non-Local Means noise reduction, contrast normalization.',
      'OCR Engine: Multi-pass recognition with SVTR_LCNet algorithm and PyTorch CNN models with confidence scoring.',
      'Medical Lexicon: Integrated dictionary containing 60+ Indian pharmaceuticals and spaCy Medical NER to extract drug names, dosages, and routes.',
      'High Accuracy: 95%+ accuracy on trained formats, 90%+ on untrained samples, with 3–5s processing latency.'
    ]
  },
  {
    id: 'zervista',
    title: 'Zervista – Salon Management App',
    category: 'android',
    categoryLabel: 'Mobile App',
    type: 'Solo Project (Published on Google Play)',
    shortDesc: 'Comprehensive salon & parlour service management system with customer management, staff management, analytics, and inventory tracking.',
    fullDesc: 'Built with Flutter, Dart, and Firebase. Features appointments scheduling, bill calculation, customer loyalty records, and staff commission tracking.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Cloud', 'Play Store'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.zervista&pcampaignid=web_share',
    githubUrl: null,
    highlights: [
      'Published on Google Play Store with active customer base.',
      'Realtime appointment scheduling and staff queue management.',
      'Automated bill and receipt generation with tax breakdown.',
      'Inventory depletion tracking and supply replenishment alerts.'
    ]
  },
  {
    id: 'smart-assistant-iot',
    title: 'Smart Assistant for Visually Impaired',
    category: 'ai',
    categoryLabel: 'AI & IoT',
    type: 'Hardware / Software IoT Project',
    shortDesc: 'IoT-based smart assistant using Raspberry Pi 4B for reading printed text with OCR technology and instant text-to-speech conversion for the visually impaired.',
    fullDesc: 'Designed to assist blind individuals by capturing printed book pages or signage with a camera module, running Tesseract OCR on Raspberry Pi 4B, and speaking out the text via audio output.',
    tags: ['Python', 'Raspberry Pi 4B', 'Tesseract OCR', 'Text-to-Speech', 'GCP', 'AWS', 'IoT'],
    liveUrl: null,
    githubUrl: 'https://github.com/Shriram2005/Smart-Assistant-for-Blind-People-using-Raspberry-Pi',
    highlights: [
      'Hardware integration with Raspberry Pi 4B, camera sensor, and tactile pushbutton controls.',
      'On-device image processing and OCR pipeline via Tesseract.',
      'Real-time natural text-to-speech audio feedback.',
      'Compact wearable/portable form-factor prototype.'
    ]
  },
  {
    id: 'barcode-scanner',
    title: 'Barcode Product Scanner (Inventory)',
    category: 'android',
    categoryLabel: 'Native Android',
    type: 'Android App / Solo Project',
    shortDesc: 'Automated e-commerce product photography and image management app replacing manual file transfers and renaming by binding barcode scans with multi-shot camera capture.',
    fullDesc: 'Automates inventory listing workflows. Instantly scans barcodes to retrieve unique product identifiers, rapidly captures multi-angle photos, and auto-formats sequential filenames like [barcodeNo-1], [barcodeNo-2].',
    tags: ['Kotlin', 'Android SDK', 'Barcode Scanning', 'Camera API', 'Local Storage'],
    liveUrl: null,
    githubUrl: 'https://github.com/Shriram2005/Barcode-Product-Scanner',
    highlights: [
      'Instant Barcode Binding: Scans UPC/EAN barcodes to retrieve item IDs.',
      'Automated Multi-Image Capture: Captures 360-degree product angles.',
      'Smart Sequential Naming: Automatically names files in [barcodeNo-1] format.',
      'Batch Directory Organization: Ready for immediate bulk upload to e-commerce catalogs.'
    ]
  },
  {
    id: 'qr-mlkit-scanner',
    title: 'QR & Barcode Scanner (Google ML Kit)',
    category: 'android',
    categoryLabel: 'Native Android',
    type: 'Android App / Solo Project',
    shortDesc: 'Fast, lightweight scanner app built with Jetpack Compose and Google ML Kit Barcode Scanning API, featuring real-time code scanning and streamlined utility actions.',
    fullDesc: 'High-accuracy real-time code scanning and decoding for various QR codes and standard barcodes. Offers one-tap URL navigation, copy-to-clipboard, and native Android share sheet integration.',
    tags: ['Kotlin', 'Jetpack Compose', 'Google ML Kit', 'CameraX', 'Android SDK'],
    liveUrl: null,
    githubUrl: 'https://github.com/Shriram2005/QR-Barcode-Scanner-App',
    highlights: [
      'Google ML Kit on-device barcode vision scanning with zero network latency.',
      'Declarative Jetpack Compose UI with smooth animations.',
      'One-tap deep linking to URLs and clipboard copy.',
      'Native Android share sheet integration.'
    ]
  },
  {
    id: 'pdfdroid',
    title: 'Pdfdroid – Comprehensive PDF Toolkit',
    category: 'web',
    categoryLabel: 'Full-Stack Web',
    type: 'Web Application',
    shortDesc: 'Comprehensive PDF management web application featuring split, merge, compress, and conversion utility tools running efficiently in the browser.',
    fullDesc: 'Zero-upload client-side PDF manipulation toolkit using PDF.js and modern Web APIs, ensuring user documents stay private and secure on their local machine.',
    tags: ['JavaScript', 'PDF.js', 'Web Technologies', 'HTML5', 'CSS3'],
    liveUrl: 'https://pdfdroid.netlify.app',
    githubUrl: 'https://github.com/Shriram2005/Pdfdroid',
    highlights: [
      'Client-side PDF merging and page reordering.',
      'Page extraction and document splitting.',
      'Client-side privacy: files never leave the user browser.',
      'Clean, intuitive drag-and-drop user interface.'
    ]
  },
  {
    id: 'calculator-compose',
    title: 'Calculator App (Jetpack Compose)',
    category: 'android',
    categoryLabel: 'Native Android',
    type: 'Android App / Solo Project',
    shortDesc: 'Modern Android Calculator Application crafted with Kotlin and Jetpack Compose featuring smooth state transitions and tactile animations.',
    fullDesc: 'Demonstrates modern declarative UI state handling, arithmetic expression parsing, and edge-to-edge Material 3 styling in Jetpack Compose.',
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3', 'State Hoisting'],
    liveUrl: null,
    githubUrl: 'https://github.com/Shriram2005/Calculator-App-Jetpack-Compose',
    highlights: [
      'Declarative state management using Compose remember and mutableStateOf.',
      'Custom keypad layout with responsive button aspect ratios.',
      'Smooth haptic and visual feedback on button presses.'
    ]
  },
  {
    id: 'neutralise',
    title: 'Neutralise – Modern E-Commerce',
    category: 'web',
    categoryLabel: 'Full-Stack Web',
    type: 'Web Application / Freelance Demo',
    shortDesc: 'Modern responsive E-Commerce platform with product catalog, shopping cart, and user profile management.',
    fullDesc: 'Frontend e-commerce shopping experience with interactive product filtering, cart drawer, and responsive layouts tailored for mobile shoppers.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    liveUrl: 'https://shriram2005.github.io/Neutralise/',
    githubUrl: 'https://github.com/Shriram2005/Neutralise',
    highlights: [
      'Dynamic product catalog with category and price filters.',
      'Interactive cart drawer with quantity counters.',
      'Mobile-first responsive design.'
    ]
  }
];

// Project Rendering & Filtering
function renderProjects(items, containerEl) {
  if (!containerEl) return;
  containerEl.innerHTML = '';

  if (items.length === 0) {
    containerEl.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-card); border: 2px dashed var(--border-color); border-radius: var(--radius-md);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-family: var(--font-display); font-size: 1.4rem;">No projects found</h3>
        <p style="color: var(--ink-muted); margin-top: 6px;">Try clearing filters or search query!</p>
      </div>
    `;
    return;
  }

  items.forEach((proj, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-category', proj.category);

    const padIdx = String(idx + 1).padStart(2, '0');
    const tagsHtml = proj.tags.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('');

    let linksHtml = '';
    if (proj.liveUrl) {
      linksHtml += `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Open Live Site">🔗 Live Demo</a>`;
    }
    if (proj.githubUrl) {
      linksHtml += `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source on GitHub">💻 GitHub</a>`;
    }

    card.innerHTML = `
      <div class="project-card-top">
        <span class="project-index">PROJ // ${padIdx}</span>
        <span class="project-type-badge">${proj.categoryLabel}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.shortDesc}</p>
        <div class="tech-tags">${tagsHtml}</div>
      </div>
      <div class="project-footer">
        <button type="button" class="btn btn-sm btn-accent inspect-modal-btn" data-project-id="${proj.id}">
          🔍 Architecture
        </button>
        <div class="project-links">
          ${linksHtml}
        </div>
      </div>
    `;
    containerEl.appendChild(card);
  });

  // Attach modal inspection listeners
  containerEl.querySelectorAll('.inspect-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pid = btn.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });
}

// Modal Inspection Details
function openProjectModal(projectId) {
  const proj = projectsData.find(p => p.id === projectId);
  if (!proj) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-details-container');
  if (!modalOverlay || !modalBody) return;

  const highlightsHtml = proj.highlights.map(h => `<li style="margin-bottom: 8px;"><strong>✓</strong> ${h}</li>`).join('');
  const allTagsHtml = proj.tags.map(t => `<span class="tech-tag" style="background: var(--bg-card); font-size: 0.8rem;">${t}</span>`).join('');

  modalBody.innerHTML = `
    <div style="margin-bottom: 16px;">
      <span class="swiss-tagline" style="font-size: 0.75rem;">ARCHITECTURAL SPECIFICATION</span>
      <h2 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 800; margin-top: 8px; line-height: 1.2;">
        ${proj.title}
      </h2>
      <p style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--swiss-red); font-weight: 700; margin-top: 4px;">
        ${proj.type}
      </p>
    </div>

    <div style="background: var(--bg-card-alt); border: 2px solid var(--border-color); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 20px;">
      <h4 style="font-family: var(--font-mono); font-size: 0.82rem; text-transform: uppercase; margin-bottom: 6px;">Overview & Scope</h4>
      <p style="font-size: 0.96rem; color: var(--ink);">${proj.fullDesc}</p>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-family: var(--font-mono); font-size: 0.82rem; text-transform: uppercase; margin-bottom: 10px;">Technical Stack & Tools</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${allTagsHtml}
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-family: var(--font-mono); font-size: 0.82rem; text-transform: uppercase; margin-bottom: 10px;">Key Architectural Highlights</h4>
      <ul style="list-style: none; padding-left: 0; font-size: 0.95rem; line-height: 1.5; color: var(--ink-muted);">
        ${highlightsHtml}
      </ul>
    </div>

    <div style="display: flex; gap: 12px; flex-wrap: wrap; border-top: 2px solid var(--border-color); padding-top: 20px;">
      ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-red" style="font-size: 0.9rem;">🚀 Launch Live Site</a>` : ''}
      ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.9rem;">💻 Explore GitHub Repo</a>` : ''}
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.sfx) window.sfx.playCuteClick();
}

function initModalClose() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  const close = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', close);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      close();
    }
  });
}

// Filter and Search
function initProjectsFilter() {
  const container = document.getElementById('projects-container');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('project-search');

  if (!container) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let filtered = projectsData.filter(p => {
      const matchesCat = (currentCategory === 'all') || (p.category === currentCategory);
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || 
        p.title.toLowerCase().includes(q) || 
        p.shortDesc.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });

    renderProjects(filtered, container);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.sfx) window.sfx.playCuteClick();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      applyFilters();
    });
  }

  // Initial render
  applyFilters();
  initModalClose();
}

document.addEventListener('DOMContentLoaded', () => {
  initProjectsFilter();
});
