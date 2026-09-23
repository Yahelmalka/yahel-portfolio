function getRoleId() {
  if (window.PORTFOLIO_ROLE && ROLES[window.PORTFOLIO_ROLE]) {
    return window.PORTFOLIO_ROLE;
  }

  const segments = location.pathname.replace(/\\/g, "/").split("/").filter(Boolean);
  const meaningful = segments.filter((part) => !["index.html", "links.html"].includes(part));
  const last = meaningful[meaningful.length - 1];

  if (last && ROLES[last]) return last;
  return "general";
}

function getAssetPrefix() {
  if (window.PORTFOLIO_ROLE) return "../";

  const parts = location.pathname.replace(/\\/g, "/").split("/").filter((part) => part && part !== "index.html");
  const last = parts[parts.length - 1];
  if (!last || last === SITE.repo) return "";
  if (ROLES[last] || parts.includes(SITE.repo) && last !== SITE.repo) return "../";
  return "";
}

function getRole() {
  return ROLES[getRoleId()] || ROLES.general;
}

function asset(path) {
  if (!path || /^(https?:|mailto:|tel:|data:|#)/.test(path)) return path;
  return getAssetPrefix() + path;
}

function setMeta(selector, attribute, value) {
  if (!value) return;
  let node = document.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    const match = selector.match(/\[([^=]+)="([^"]+)"\]/);
    if (match) node.setAttribute(match[1], match[2]);
    document.head.appendChild(node);
  }
  node.setAttribute(attribute, value);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function applyDocumentMeta(role) {
  const pageUrl = `${SITE.pagesBase}/${role.path}`;
  document.title = role.pageTitle;
  setMeta('meta[name="description"]', "content", role.seoDescription);
  setMeta('meta[property="og:title"]', "content", role.pageTitle);
  setMeta('meta[property="og:description"]', "content", role.seoDescription);
  setMeta('meta[property="og:image"]', "content", SITE.ogImage);
  setMeta('meta[property="og:type"]', "content", "website");
  setMeta('meta[property="og:url"]', "content", pageUrl);
  setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
  setMeta('meta[name="twitter:title"]', "content", role.pageTitle);
  setMeta('meta[name="twitter:description"]', "content", role.seoDescription);
  setMeta('meta[name="twitter:image"]', "content", SITE.ogImage);
  setCanonical(pageUrl);
}

function applyHero(role) {
  const eyebrow = document.querySelector("[data-bind='eyebrow']");
  const title = document.querySelector("[data-bind='headline']");
  const lead = document.querySelector("[data-bind='introduction']");
  const portrait = document.querySelector("[data-bind='portrait']");

  if (eyebrow) eyebrow.textContent = role.eyebrow;
  if (title) {
    title.innerHTML = `${escapeHtml(role.headlineLead)}<br><em>${escapeHtml(role.headlineAccent)}</em>`;
  }
  if (lead) lead.textContent = role.introduction;
  if (portrait) {
    portrait.src = asset(SITE.profileImage);
    portrait.alt = `Professional portrait of ${SITE.name}`;
  }

  const actions = document.querySelector("[data-bind='actions']");
  if (actions) {
    actions.innerHTML = "";
    actions.appendChild(createCta(role.primaryCta, "btn primary"));
    if (role.secondaryCta) actions.appendChild(createCta(role.secondaryCta, "btn ghost"));
  }

  const quick = document.querySelector("[data-bind='quick']");
  if (quick) {
    quick.innerHTML = role.quickFacts
      .map((fact) => `<div><b>${escapeHtml(fact.value)}</b><span>${escapeHtml(fact.label)}</span></div>`)
      .join("");
  }
}

function createCta(cta, className) {
  const link = document.createElement("a");
  link.className = className;
  link.textContent = cta.label;
  if (cta.tab) {
    link.href = `#${cta.tab}`;
    link.dataset.tab = cta.tab;
  } else {
    link.href = cta.href;
    if (/^https?:/.test(cta.href)) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
  }
  return link;
}

function applyProjects(role) {
  const list = document.querySelector("[data-bind='projects']");
  if (!list) return;

  const order = role.projectOrder.length ? role.projectOrder : Object.keys(PROJECTS);
  list.innerHTML = order.map((id, index) => renderProject(id, role, index)).join("");
}

function renderProject(id, role, index) {
  const project = PROJECTS[id];
  if (!project) return "";

  const details = role.highlightedProjectDetails[id] || {};
  const summary = details.summary || project.defaultSummary;
  const bullets = details.bullets || project.defaultBullets;
  const tags = details.tags || project.defaultTags;
  const reverse = index % 2 === 1 ? " reverse" : "";
  const featured = index === 0 ? " featured" : "";
  const images = project.images || [];
  const main = images[0];
  const thumbs = images.slice(1);
  const thumbsClass = thumbs.length === 1 ? " thumbs one" : " thumbs";
  const noMedia = main ? "" : " no-media";
  const gallery = main
    ? `<div class="gallery">
        <img class="main-shot" src="${asset(main.src)}" alt="${escapeHtml(main.alt)}">
        ${thumbs.length ? `<div class="${thumbsClass}">${thumbs.map((img) => `<img src="${asset(img.src)}" alt="${escapeHtml(img.alt)}">`).join("")}</div>` : ""}
      </div>`
    : `<div class="gallery project-visual">
        <span>${escapeHtml(project.number)}</span>
        <b>${escapeHtml(project.title)}</b>
      </div>`;
  const repoLink = project.repo
    ? `<a class="text-link" href="${project.repo}" target="_blank" rel="noreferrer">View repository ↗</a>`
    : "";

  return `
    <article class="project${featured}${reverse}${noMedia} reveal">
      ${gallery}
      <div class="project-copy">
        <span class="number">${escapeHtml(project.number)}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(summary)}</p>
        <ul>${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <div class="tags">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        ${repoLink}
      </div>
    </article>
  `;
}

function applySkills(role) {
  const grid = document.querySelector("[data-bind='skills']");
  if (!grid) return;

  const order = role.skillCategoryOrder.length ? role.skillCategoryOrder : DEFAULT_SKILL_ORDER;
  const highlighted = new Set(role.highlightedSkills || []);
  const learning = role.learningSkills || [];

  const cards = order.map((key, index) => {
    const category = SKILL_CATEGORIES[key];
    if (!category) return "";
    const isHighlight = key === role.highlightedCategory;
    const pills = category.items
      .map((item) => `<span class="${highlighted.has(item) ? "accent" : ""}">${escapeHtml(item)}</span>`)
      .join("");

    return `
      <div class="skill-card reveal${isHighlight ? " highlight" : ""}">
        <i>${String(index + 1).padStart(2, "0")}</i>
        <h3>${escapeHtml(category.title)}</h3>
        <div class="skill-pills">${pills}</div>
      </div>
    `;
  });

  if (learning.length) {
    const learningPills = learning
      .map((item) => `<span class="learning">${escapeHtml(item)}</span>`)
      .join("");
    cards.push(`
      <div class="skill-card reveal learning-card">
        <i>LEARNING</i>
        <h3>Currently learning</h3>
        <div class="skill-pills">${learningPills}</div>
      </div>
    `);
  }

  grid.innerHTML = cards.join("");
}

function applyExperience(role) {
  const intro = document.querySelector("[data-bind='experience-intro']");
  if (intro && role.focusAreas.length) {
    intro.textContent = `Computer Science at HIT, IDF team command, and a short operations role coordinating requests under pressure. Focus for this version: ${role.focusAreas.slice(0, 3).join(", ")}.`;
  }
}

function applyContact(role) {
  const copy = document.querySelector("[data-bind='contact-intro']");
  if (copy) copy.textContent = role.contactIntro;
}

async function applyCvButton(role) {
  const actions = document.querySelector("[data-bind='actions']");
  if (!actions || !role.cvPath) return;

  const href = asset(role.cvPath);
  const exists = await fileExists(href);
  if (!exists) return;

  const link = document.createElement("a");
  link.className = "btn ghost";
  link.href = href;
  link.download = role.cvFilename || "";
  link.textContent = "Download CV";
  actions.appendChild(link);
}

async function fileExists(url) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const head = await fetch(url, { method: "HEAD", signal: controller.signal });
    clearTimeout(timer);
    if (head.ok) return true;
    if (head.status === 405) {
      const get = await fetch(url, { method: "GET", signal: controller.signal });
      return get.ok;
    }
  } catch (error) {
    return false;
  }
  return false;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function ensureShell() {
  if (document.getElementById("home")) return;

  const candidates = [];
  if (window.PORTFOLIO_ROLE) candidates.push("../index.html");
  candidates.push(asset("index.html"));

  let html = "";
  for (const url of [...new Set(candidates)]) {
    try {
      const response = await fetch(url, { cache: "no-cache" });
      if (!response.ok) continue;
      const text = await response.text();
      if (text.includes('id="home"')) {
        html = text;
        break;
      }
    } catch (error) {
      /* try the next candidate */
    }
  }

  if (!html) {
    document.body.insertAdjacentHTML("afterbegin", "<p class='boot-error'>The portfolio could not be loaded. Refresh the page.</p>");
    return;
  }

  const parsed = new DOMParser().parseFromString(html, "text/html");
  parsed.body.querySelectorAll("script").forEach((node) => node.remove());

  const keepHeadLinks = document.head.querySelectorAll("link, style, script");
  document.body.innerHTML = parsed.body.innerHTML;
  keepHeadLinks.forEach((node) => {
    if (!document.head.contains(node)) document.head.appendChild(node);
  });
}

function initNavigation() {
  const views = [...document.querySelectorAll(".view")];
  const nav = document.querySelector("nav");
  const menu = document.querySelector(".menu");

  function show(id) {
    const target = views.some((view) => view.id === id) ? id : "home";
    views.forEach((view) => view.classList.toggle("active", view.id === target));
    document.querySelectorAll("nav [data-tab]").forEach((link) => {
      link.classList.toggle("active", link.dataset.tab === target);
    });
    if (nav) nav.classList.remove("open");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-tab]");
    if (!link) return;
    const id = link.dataset.tab;
    if (!id) return;
    event.preventDefault();
    history.pushState(null, "", `#${id}`);
    show(id);
  });

  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
  }

  window.addEventListener("popstate", () => show(location.hash.slice(1)));
  show(location.hash.slice(1) || "home");
}

async function boot() {
  const role = getRole();
  document.documentElement.dataset.role = role.id;
  await ensureShell();
  applyDocumentMeta(role);
  applyHero(role);
  applyProjects(role);
  applySkills(role);
  applyExperience(role);
  applyContact(role);
  initNavigation();
  applyCvButton(role);
}

if (typeof ROLES !== "undefined") {
  boot();
}
