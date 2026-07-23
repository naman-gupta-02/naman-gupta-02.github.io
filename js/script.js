// ---------- Project Data (from github.com/naman-gupta-02, newest first) ----------
const projects = [
  {
    name: "DNA Sequence Alignment: DP vs. Divide-and-Conquer",
    date: "Apr 2026 – May 2026",
    pushedAt: "2026-07-20",
    tags: ["Python"],
    lang: "Python",
    desc: "Implemented the Needleman-Wunsch algorithm end-to-end with a full O(m×n) dynamic programming table, configurable gap penalties, and a custom mismatch cost matrix. Optimized memory with Hirschberg's divide-and-conquer approach, cutting peak memory footprint by 60% (O(m×n) → O(m+n)) without sacrificing traceback correctness.",
    url: "https://github.com/naman-gupta-02/Sequence-Alignment",
    featured: false
  },
  {
    name: "TechHire",
    date: "May 2026 – Jun 2026",
    pushedAt: "2026-07-13",
    tags: ["JavaScript", "Python", "ML"],
    lang: "JavaScript",
    desc: "Full-stack AI job search platform integrating a Python scraper with a FastAPI backend and React frontend, indexing over 5,000 live postings with sub-second search across skills and salary filters. Ships a multi-model Groq LLM pipeline behind an AI resume analyzer that scores candidate-job fit and gives resume quality feedback.",
    url: "https://github.com/naman-gupta-02/TechHire",
    featured: true
  },
  {
    name: "Mind-Map: Mental Wellbeing Detection",
    date: "Dec 2024 – Jun 2025",
    pushedAt: "2025-06-01",
    tags: ["HTML", "Python", "ML"],
    lang: "HTML",
    desc: "A mental health screening pipeline that web-scrapes over 50,000 Reddit posts and comments, then fine-tunes BERT and LLaMA models on labeled sentiment data — achieving 91% classification accuracy for real-time wellbeing screening across thousands of scraped community posts daily.",
    url: "https://github.com/naman-gupta-02/Mind-Map",
    featured: true
  },
  {
    name: "Intrusion-Detection-System",
    date: "Jan 2024",
    pushedAt: "2024-01-01",
    tags: ["Python", "ML"],
    lang: "Python",
    desc: "Real-time alerts, customizable rules, and an intuitive web interface for efficient network security management and monitoring.",
    url: "https://github.com/naman-gupta-02/Intrusion-Detection-System",
    featured: true
  },
  {
    name: "Problems",
    date: "Aug 2024",
    pushedAt: "2024-08-11",
    tags: ["Python"],
    lang: "Python",
    desc: "A collection of data structures & algorithms problem solutions in Python, used for continuous interview prep and practice (see my LeetCode profile).",
    url: "https://github.com/naman-gupta-02/Problems",
    featured: false
  },
  {
    name: "Chord-DHC",
    date: "Jul 2024",
    pushedAt: "2024-07-24",
    tags: ["Java"],
    lang: "Java",
    desc: "Implementation of the Chord distributed hash table (DHT) protocol in Java, demonstrating peer-to-peer key lookup and node routing in a distributed system.",
    url: "https://github.com/naman-gupta-02/Chord-DHC",
    featured: false
  },
  {
    name: "Real-Time Sign Language Detection",
    date: "Feb 2026 – Mar 2026",
    pushedAt: "2024-06-07",
    tags: ["Python", "ML"],
    lang: "Python",
    desc: "Real-time computer vision pipeline using OpenCV to process live hand-gesture video streams at 30 frames per second with minimal latency and jitter. Fine-tuned a TensorFlow/Keras CNN across 26 gesture classes, achieving 98% real-time translation accuracy for practical sign language communication.",
    url: "https://github.com/naman-gupta-02/Sign-Language-Detection",
    featured: true
  },
  {
    name: "Easy Rent: E-commerce & Rental Platform",
    date: "May 2024 – Jun 2024",
    pushedAt: "2024-06-07",
    tags: ["JavaScript"],
    lang: "JavaScript",
    desc: "Comprehensive MERN-stack platform for buying, selling, and renting new and second-hand items, improving user interactions by 40% and transaction efficiency by 30%.",
    url: "https://github.com/naman-gupta-02/Easy-Rent",
    featured: true
  },
  {
    name: "Chat-Bot",
    date: "Feb 2024",
    pushedAt: "2024-02-05",
    tags: ["Python", "ML"],
    lang: "Python",
    desc: "A conversational chatbot built in Python, exploring natural language processing techniques to handle user queries and simple dialogue flows.",
    url: "https://github.com/naman-gupta-02/Chat-Bot",
    featured: false
  },
  {
    name: "Image-Text-Detection",
    date: "Jan 2024",
    pushedAt: "2024-01-15",
    tags: ["Python"],
    lang: "Python",
    desc: "Extracts text from images using OCR and Pytesseract, exposed through a simple command-line interface.",
    url: "https://github.com/naman-gupta-02/Image-Text-Detection",
    featured: false
  },
  {
    name: "E-Commerce-Website",
    date: "Sep 2023",
    pushedAt: "2023-09-01",
    tags: ["HTML"],
    lang: "HTML",
    desc: "An early e-commerce website prototype built with HTML/CSS/JS, laying the groundwork for later full-stack marketplace projects like Easy Rent.",
    url: "https://github.com/naman-gupta-02/E-Commerce-Website",
    featured: false
  },
  {
    name: "Spam-Ham-Message-Detection",
    date: "Aug 2023",
    pushedAt: "2023-08-30",
    tags: ["Java", "ML"],
    lang: "Java",
    desc: "Uses machine learning with a Java GUI to identify unwanted (spam) versus legitimate (ham) text messages.",
    url: "https://github.com/naman-gupta-02/Spam-Ham-Message-Detection",
    featured: false
  },
  {
    name: "Spam-Ham-Mail-Detection",
    date: "Aug 2023",
    pushedAt: "2023-08-30",
    tags: ["Java", "ML"],
    lang: "Java",
    desc: "Employs machine learning and a Java interface to streamline email classification into spam and legitimate mail.",
    url: "https://github.com/naman-gupta-02/Spam-Ham-Mail-Detection",
    featured: false
  },
  {
    name: "Malware-Detection",
    date: "Aug 2023",
    pushedAt: "2023-08-30",
    tags: ["Java", "ML"],
    lang: "Java",
    desc: "Addresses phishing website threats using machine learning classification paired with a Java interface.",
    url: "https://github.com/naman-gupta-02/Malware-Detection",
    featured: false
  },
  {
    name: "Credit-Card-Fraud-Detection",
    date: "Aug 2023",
    pushedAt: "2023-08-29",
    tags: ["Python", "ML"],
    lang: "Python",
    desc: "Leverages machine learning classification models to detect fraudulent transactions and safeguard financial activity.",
    url: "https://github.com/naman-gupta-02/Credit-Card-Fraud-Detection",
    featured: false
  },
  {
    name: "Library-Management-System",
    date: "Aug 2023",
    pushedAt: "2023-08-29",
    tags: ["C++"],
    lang: "C++",
    desc: "Terminal-based resource management platform in C++ for organized library operations — cataloguing, checkouts, and returns.",
    url: "https://github.com/naman-gupta-02/Library-Management-System",
    featured: false
  },
  {
    name: "A Full-Featured Blogging Website",
    date: "Nov 2023",
    pushedAt: "2023-08-29",
    tags: ["HTML"],
    lang: "Python",
    desc: "Dynamic, user-friendly blogging platform built end-to-end with Flask and SQLAlchemy, including auth, post creation, and a responsive Bootstrap UI — driving a 20% increase in user engagement.",
    url: "https://github.com/naman-gupta-02/Blog-Post",
    featured: true
  }
];

// ---------- Render Projects ----------
const grid = document.getElementById("projectGrid");
const countEl = document.getElementById("projectCount");
const searchInput = document.getElementById("projectSearch");
const sortSelect = document.getElementById("projectSort");
const filterBtns = document.querySelectorAll(".filter-btn");

const viewState = { filter: "all", search: "", sort: "newest" };

function githubIconSVG() {
  return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.94c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17v3.22c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>`;
}
function starIconSVG() {
  return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.26 6.85.73-5.17 4.72 1.48 6.79L12 17.27l-6.06 3.73 1.48-6.79-5.17-4.72 6.85-.73L12 2.5z"/></svg>`;
}

function repoSlug(url) {
  return url.split("/").pop();
}

// Real brand colors for each tech tag — the little dot next to each tag/chip site-wide
const TECH_COLORS = {
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  Java: "#ED8B00",
  "C++": "#00599C",
  HTML: "#E34F26",
  ML: "#8B5CF6"
};
function techColor(tag) {
  return TECH_COLORS[tag] || "#48A89A";
}

// ---------- Language distribution bar (aggregated from each repo's GitHub-reported language) ----------
function renderLanguageBar() {
  const bar = document.getElementById("langBar");
  const legend = document.getElementById("langLegend");
  if (!bar || !legend) return;

  const counts = {};
  projects.forEach((p) => {
    counts[p.lang] = (counts[p.lang] || 0) + 1;
  });
  const total = projects.length;
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  bar.innerHTML = entries
    .map(([lang, count]) => {
      const pct = (count / total) * 100;
      return `<span style="flex:${pct} 0 0%; background:${techColor(lang)}" title="${lang}: ${count} repo${count > 1 ? "s" : ""}"></span>`;
    })
    .join("");

  legend.innerHTML = entries
    .map(([lang, count]) => {
      const pct = Math.round((count / total) * 100);
      return `<span class="legend-item"><i class="tech-dot" style="background:${techColor(lang)};color:${techColor(lang)}"></i>${lang} · ${pct}%</span>`;
    })
    .join("");
}
renderLanguageBar();

function getFilteredSortedProjects() {
  const q = viewState.search.trim().toLowerCase();
  let list = projects.filter((p) => {
    const matchesFilter = viewState.filter === "all" || p.tags.includes(viewState.filter);
    const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesFilter && matchesSearch;
  });

  list = list.slice();
  if (viewState.sort === "oldest") {
    list.reverse();
  } else if (viewState.sort === "featured") {
    list.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
  } else if (viewState.sort === "az") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }
  return list;
}

let cardObserver = null;

function renderProjects() {
  const list = getFilteredSortedProjects();

  if (list.length === 0) {
    grid.innerHTML = `<p class="no-results">No projects match "<strong>${viewState.search}</strong>". Try a different search or filter.</p>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => `
    <div class="project-card card-enter${p.featured ? " featured" : ""}" data-tags="${p.tags.join(",")}" data-repo="${repoSlug(p.url)}" style="transition-delay:${Math.min(i, 8) * 60}ms">
      ${p.featured ? '<span class="badge-featured">Highlight</span>' : ""}
      <div class="card-spotlight"></div>
      <div class="project-top">
        <span class="folder-icon">📁</span>
        <span class="project-links">
          <a href="${p.url}" target="_blank" rel="noopener" aria-label="View on GitHub">${githubIconSVG()}</a>
        </span>
      </div>
      <h3>${p.name}</h3>
      <span class="project-date">${p.date}</span>
      <p>${p.desc}</p>
      <div class="tech-row">${p.tags.map((t) => `<span><i class="tech-dot" style="background:${techColor(t)};color:${techColor(t)}"></i>${t}</span>`).join("")}</div>
      <div class="stat-row loading" data-stat-for="${repoSlug(p.url)}">
        <span class="stat-stars"><span class="stat-icon">${starIconSVG()}</span><span class="stat-skel"></span></span>
        <span class="stat-updated"><span class="stat-skel"></span></span>
      </div>
    </div>
  `).join("");

  // Stagger reveal-in for the freshly rendered cards
  if (cardObserver) cardObserver.disconnect();
  cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".project-card.card-enter").forEach((card) => cardObserver.observe(card));

  hydrateStats();
}

function applyView() {
  renderProjects();
}

renderProjects();

// ---------- Filtering, search, sort ----------
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    viewState.filter = btn.dataset.filter;
    applyView();
  });
});

if (searchInput) {
  let debounceId;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceId);
    debounceId = setTimeout(() => {
      viewState.search = searchInput.value;
      applyView();
    }, 150);
  });
}

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    viewState.sort = sortSelect.value;
    applyView();
  });
}

// ---------- 3D tilt + cursor spotlight on project cards ----------
grid.addEventListener("pointermove", (e) => {
  if (e.pointerType === "touch") return; // don't fight with touch-scrolling
  const card = e.target.closest(".project-card");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const px = x / rect.width;
  const py = y / rect.height;
  const rotateY = (px - 0.5) * 10;
  const rotateX = (0.5 - py) * 10;
  card.style.transition = "box-shadow 0.25s ease, border-color 0.25s ease"; // no transform easing while tracking — instant follow
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  card.style.setProperty("--mx", `${px * 100}%`);
  card.style.setProperty("--my", `${py * 100}%`);
});
grid.addEventListener("pointerout", (e) => {
  const card = e.target.closest(".project-card");
  if (!card) return;
  if (e.relatedTarget && card.contains(e.relatedTarget)) return; // still inside the same card
  card.style.transition = "transform 0.45s cubic-bezier(.16,1,.3,1), box-shadow 0.25s ease, border-color 0.25s ease";
  card.style.transform = "";
});

// ---------- Live GitHub stats (stars + last updated), cached in localStorage ----------
const STATS_CACHE_KEY = "gh_stats_cache_v1";
const STATS_TTL = 60 * 60 * 1000; // 1 hour

function loadStatsCache() {
  try {
    return JSON.parse(localStorage.getItem(STATS_CACHE_KEY)) || {};
  } catch {
    return {};
  }
}
function saveStatsCache(cache) {
  try {
    localStorage.setItem(STATS_CACHE_KEY, JSON.stringify(cache));
  } catch {
    /* storage unavailable — skip caching silently */
  }
}
function timeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diffMs / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function paintStats(slug, stars, updatedAt) {
  const row = document.querySelector(`.stat-row[data-stat-for="${slug}"]`);
  if (!row) return;
  row.classList.remove("loading");
  row.querySelector(".stat-stars").innerHTML = `${starIconSVG()}<span>${stars}</span>`;
  row.querySelector(".stat-updated").textContent = `Updated ${timeAgo(updatedAt)}`;
}

async function hydrateStats() {
  const cache = loadStatsCache();
  const now = Date.now();
  const rows = document.querySelectorAll(".stat-row[data-stat-for]");

  for (const row of rows) {
    const slug = row.dataset.statFor;
    const cached = cache[slug];
    if (cached && now - cached.fetchedAt < STATS_TTL) {
      paintStats(slug, cached.stars, cached.updatedAt);
      continue;
    }
    fetch(`https://api.github.com/repos/naman-gupta-02/${slug}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return; // rate-limited or offline — leave the static date, skip silently
        cache[slug] = { stars: data.stargazers_count, updatedAt: data.pushed_at, fetchedAt: Date.now() };
        saveStatsCache(cache);
        paintStats(slug, data.stargazers_count, data.pushed_at);
      })
      .catch(() => {});
  }
}

// ---------- Animated project counter ----------
if (countEl) {
  const total = projects.length;
  let counted = false;
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          const start = performance.now();
          const duration = 900;
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            countEl.textContent = Math.round(eased * total);
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          counterObserver.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );
  counterObserver.observe(countEl);
}

// ---------- Typing effect ----------
const typedEl = document.getElementById("typed");
const phrases = [
  "machine learning systems.",
  "full-stack web apps.",
  "internal tools that scale.",
  "data-driven products."
];
let phraseIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    charIdx++;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIdx--;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
if (typedEl) typeLoop();

// ---------- Theme toggle ----------
// Initial theme is already applied by the inline script in <head> (avoids flash-of-wrong-theme).
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  const next = isLight ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ---------- Mobile nav ----------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ---------- Scroll progress, navbar state, active link, back-to-top ----------
const progressBar = document.getElementById("progressBar");
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");
const sections = document.querySelectorAll("section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;

  navbar.classList.toggle("scrolled", scrollTop > 20);
  backToTop.classList.toggle("visible", scrollTop > 500);

  let currentId = sections[0]?.id;
  sections.forEach((sec) => {
    if (scrollTop >= sec.offsetTop - 120) currentId = sec.id;
  });
  navLinkEls.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}
window.addEventListener("scroll", onScroll);
onScroll();

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Magnetic buttons ----------
document.querySelectorAll(".btn").forEach((btn) => {
  const strength = 0.4;
  btn.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    btn.style.transition = "transform 0.08s linear";
    btn.style.transform = `translate(${x * strength}px, ${y * strength - 3}px)`;
  });
  btn.addEventListener("pointerleave", () => {
    btn.style.transition = "transform 0.5s cubic-bezier(.34,1.56,.64,1)";
    btn.style.transform = "";
  });
});

// ---------- Animated favicon: a tiny orbiting "NG." monogram ----------
(function animateFavicon() {
  const link = document.getElementById("favicon");
  if (!link || !window.matchMedia) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const start = performance.now();

  function draw(now) {
    const t = reduceMotion ? 0 : (now - start) / 1000;
    ctx.clearRect(0, 0, size, size);

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = "#053931";
    ctx.fill();

    const pulse = reduceMotion ? 1 : 1 + Math.sin(t * 2.4) * 0.06;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, (size / 2 - 5) * pulse, 0, Math.PI * 2);
    ctx.strokeStyle = "#48a89a";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "#cbefeb";
    ctx.font = "bold 24px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("NG", size / 2, size / 2 + 1);

    const angle = reduceMotion ? 0.6 : t * 1.4;
    const orbitR = size / 2 - 8;
    const dotX = size / 2 + Math.cos(angle) * orbitR;
    const dotY = size / 2 + Math.sin(angle) * orbitR;
    ctx.beginPath();
    ctx.arc(dotX, dotY, 3.4, 0, Math.PI * 2);
    ctx.fillStyle = "#48a89a";
    ctx.shadowColor = "#48a89a";
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.shadowBlur = 0;

    link.href = canvas.toDataURL("image/png");

    if (!reduceMotion && !document.hidden) {
      setTimeout(() => requestAnimationFrame(draw), 150); // ~6-7fps is plenty for a favicon
    }
  }

  requestAnimationFrame(draw);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && !reduceMotion) requestAnimationFrame(draw);
  });
})();

// ---------- Résumé preview modal ----------
const resumeModalOverlay = document.getElementById("resumeModalOverlay");
const viewResumeBtn = document.getElementById("viewResumeBtn");
const closeResumeModal = document.getElementById("closeResumeModal");

function openResumeModal() {
  resumeModalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeResumeModalFn() {
  resumeModalOverlay.hidden = true;
  document.body.style.overflow = "";
}
if (viewResumeBtn) viewResumeBtn.addEventListener("click", openResumeModal);
if (closeResumeModal) closeResumeModal.addEventListener("click", closeResumeModalFn);
if (resumeModalOverlay) {
  resumeModalOverlay.addEventListener("click", (e) => {
    if (e.target === resumeModalOverlay) closeResumeModalFn();
  });
}

// ---------- Command palette ("/" to open) ----------
const cmdkOverlay = document.getElementById("cmdkOverlay");
const cmdkInput = document.getElementById("cmdkInput");
const cmdkResults = document.getElementById("cmdkResults");
const cmdkTrigger = document.getElementById("cmdkTrigger");

const sectionCommands = [
  { icon: "🏠", label: "Home", hint: "section", action: () => scrollToId("home") },
  { icon: "👤", label: "About", hint: "section", action: () => scrollToId("about") },
  { icon: "💼", label: "Experience", hint: "section", action: () => scrollToId("experience") },
  { icon: "📁", label: "Projects", hint: "section", action: () => scrollToId("projects") },
  { icon: "🛠️", label: "Skills", hint: "section", action: () => scrollToId("skills") },
  { icon: "🏆", label: "Achievements", hint: "section", action: () => scrollToId("achievements") },
  { icon: "✉️", label: "Contact", hint: "section", action: () => scrollToId("contact") }
];
const actionCommands = [
  { icon: "🌗", label: "Toggle theme", hint: "action", action: () => themeToggle.click() },
  { icon: "📄", label: "View résumé", hint: "action", action: () => openResumeModal() },
  { icon: "⬇️", label: "Download résumé", hint: "action", action: () => window.location.assign("assets/Naman_Gupta_Resume.pdf") },
  { icon: "🐙", label: "Open GitHub", hint: "external", action: () => window.open("https://github.com/naman-gupta-02", "_blank", "noopener") },
  { icon: "💼", label: "Open LinkedIn", hint: "external", action: () => window.open("https://linkedin.com/in/-namangupta", "_blank", "noopener") },
  { icon: "🧩", label: "Open LeetCode", hint: "external", action: () => window.open("https://leetcode.com/namanguptaprogrammer", "_blank", "noopener") }
];
const projectCommands = projects.map((p) => ({
  icon: "📦",
  label: p.name,
  hint: "project",
  action: () => {
    scrollToId("projects");
    if (searchInput) {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
      setter.call(searchInput, p.name);
      searchInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }
}));
const allCommands = [...sectionCommands, ...actionCommands, ...projectCommands];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

let cmdkSelected = 0;
let cmdkFiltered = allCommands;

function renderCmdkResults() {
  if (cmdkFiltered.length === 0) {
    cmdkResults.innerHTML = `<div class="cmdk-empty">No matches. Try "projects" or "theme".</div>`;
    return;
  }
  cmdkResults.innerHTML = cmdkFiltered
    .map(
      (cmd, i) => `
      <div class="cmdk-item${i === cmdkSelected ? " selected" : ""}" data-index="${i}">
        <span class="cmdk-icon">${cmd.icon}</span>
        <span class="cmdk-label">${cmd.label}</span>
        <span class="cmdk-hint">${cmd.hint}</span>
      </div>`
    )
    .join("");
}

function filterCmdk(query) {
  const q = query.trim().toLowerCase();
  cmdkFiltered = !q ? allCommands : allCommands.filter((c) => c.label.toLowerCase().includes(q));
  cmdkSelected = 0;
  renderCmdkResults();
}

function openCmdk() {
  cmdkOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  cmdkInput.value = "";
  filterCmdk("");
  setTimeout(() => cmdkInput.focus(), 0);
}
function closeCmdk() {
  cmdkOverlay.hidden = true;
  document.body.style.overflow = "";
}
function runSelected() {
  const cmd = cmdkFiltered[cmdkSelected];
  if (!cmd) return;
  closeCmdk();
  cmd.action();
}

if (cmdkTrigger) cmdkTrigger.addEventListener("click", openCmdk);
if (cmdkOverlay) {
  cmdkOverlay.addEventListener("click", (e) => {
    if (e.target === cmdkOverlay) closeCmdk();
  });
}
if (cmdkInput) {
  cmdkInput.addEventListener("input", () => filterCmdk(cmdkInput.value));
  cmdkInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      cmdkSelected = Math.min(cmdkSelected + 1, cmdkFiltered.length - 1);
      renderCmdkResults();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      cmdkSelected = Math.max(cmdkSelected - 1, 0);
      renderCmdkResults();
    } else if (e.key === "Enter") {
      e.preventDefault();
      runSelected();
    }
  });
}
if (cmdkResults) {
  cmdkResults.addEventListener("click", (e) => {
    const item = e.target.closest(".cmdk-item");
    if (!item) return;
    cmdkSelected = Number(item.dataset.index);
    runSelected();
  });
}

document.addEventListener("keydown", (e) => {
  const activeTag = document.activeElement && document.activeElement.tagName;
  const isTyping = activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT";

  if (e.key === "/" && !isTyping && cmdkOverlay.hidden) {
    e.preventDefault();
    openCmdk();
    return;
  }
  if (e.key === "Escape") {
    if (!cmdkOverlay.hidden) closeCmdk();
    if (!resumeModalOverlay.hidden) closeResumeModalFn();
  }
});
