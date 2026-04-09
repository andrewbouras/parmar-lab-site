import "./styles.css";
import { siteContent } from "./site-content.js";

const app = document.querySelector("#app");

document.title = siteContent.meta.title;

const descriptionTag = document.querySelector('meta[name="description"]');
if (descriptionTag) {
  descriptionTag.setAttribute("content", siteContent.meta.description);
}

const getLinkAttrs = (href) =>
  href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : "";

const renderNavLinks = () =>
  siteContent.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");

const renderSignals = () =>
  siteContent.hero.signals
    .map(
      (item) => `
        <li>
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </li>
      `
    )
    .join("");

const renderStoryCards = () =>
  siteContent.stories.cards
    .map(
      (card, index) => `
        <article class="story-card story-card-${index + 1}">
          <div class="story-visual">
            <span>${card.tag}</span>
          </div>
          <div class="story-copy">
            <h3>${card.title}</h3>
            <p>${card.body}</p>
          </div>
        </article>
      `
    )
    .join("");

const renderFeatureLinks = () =>
  siteContent.feature.links
    .map(
      (link) => `
        <a href="${link.href}" ${getLinkAttrs(link.href)}>${link.label}</a>
      `
    )
    .join("");

const renderPublications = () =>
  siteContent.feature.publications
    .map(
      (item) => `
        <article class="publication-card">
          <p class="card-meta">${item.meta}</p>
          <h3>${item.title}</h3>
          <a href="${item.href}" ${getLinkAttrs(item.href)}>View publication</a>
        </article>
      `
    )
    .join("");

const renderPeople = () =>
  siteContent.people.cards
    .map(
      (person) => `
        <article class="person-card">
          <p class="card-meta">${person.role}</p>
          <h3>${person.name}</h3>
          <p>${person.body}</p>
          <div class="person-links">
            ${person.links
              .map(
                (link) => `
                  <a href="${link.href}" ${getLinkAttrs(link.href)}>${link.label}</a>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");

const renderContact = () =>
  siteContent.contact.details
    .map(
      (item) => `
        <li>
          <span>${item.label}</span>
          <a href="${item.href}" ${getLinkAttrs(item.href)}>${item.value}</a>
        </li>
      `
    )
    .join("");

app.innerHTML = `
  <div class="site-shell">
    <div class="page-glow glow-left"></div>
    <div class="page-glow glow-right"></div>

    <header class="masthead">
      <a class="brand" href="#top">
        <span class="brand-mark">PL</span>
        <span class="brand-copy">
          <strong>${siteContent.brand.name}</strong>
          <small>${siteContent.brand.subtitle}</small>
        </span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="site-navigation"
      >
        Menu
      </button>

      <nav id="site-navigation" class="main-nav" aria-label="Primary">
        ${renderNavLinks()}
        <a class="header-cta" href="#contact">Contact</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${siteContent.hero.eyebrow}</p>
          <h1>${siteContent.hero.title}</h1>
          <p class="hero-summary">${siteContent.hero.summary}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${siteContent.hero.primaryCta.href}">
              ${siteContent.hero.primaryCta.label}
            </a>
            <a class="button button-secondary" href="${siteContent.hero.secondaryCta.href}">
              ${siteContent.hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <aside class="hero-media">
          <div class="hero-orbit" aria-hidden="true">
            <span class="orbit-ring orbit-ring-one"></span>
            <span class="orbit-ring orbit-ring-two"></span>
            <span class="orbit-ring orbit-ring-three"></span>
            <span class="orbit-node orbit-node-one"></span>
            <span class="orbit-node orbit-node-two"></span>
            <span class="orbit-node orbit-node-three"></span>
          </div>

          <div class="hero-media-copy">
            <p class="card-meta">At a glance</p>
            <p class="media-caption">${siteContent.hero.caption}</p>
            <ul class="signal-list">
              ${renderSignals()}
            </ul>
          </div>
        </aside>
      </section>

      <section id="overview" class="statement-section">
        <p class="eyebrow">${siteContent.overview.label}</p>
        <div class="statement-copy">
          <h2>${siteContent.overview.title}</h2>
          <p>${siteContent.overview.body}</p>
        </div>
      </section>

      <section id="stories" class="section-block">
        <div class="section-heading">
          <p class="eyebrow">${siteContent.stories.label}</p>
          <h2>${siteContent.stories.title}</h2>
        </div>
        <div class="story-grid">
          ${renderStoryCards()}
        </div>
      </section>

      <section class="feature-section">
        <div class="feature-copy">
          <p class="eyebrow">${siteContent.feature.label}</p>
          <h2>${siteContent.feature.title}</h2>
          <p>${siteContent.feature.body}</p>
          <div class="feature-links">
            ${renderFeatureLinks()}
          </div>
        </div>
        <div class="publication-grid">
          ${renderPublications()}
        </div>
      </section>

      <section id="people" class="section-block">
        <div class="section-heading">
          <p class="eyebrow">${siteContent.people.label}</p>
          <h2>${siteContent.people.title}</h2>
        </div>
        <div class="people-grid">
          ${renderPeople()}
        </div>
      </section>

      <section id="contact" class="contact-section">
        <div class="contact-copy">
          <p class="eyebrow">${siteContent.contact.label}</p>
          <h2>${siteContent.contact.title}</h2>
          <p>${siteContent.contact.body}</p>
          <ul class="contact-list">
            ${renderContact()}
          </ul>
        </div>

        <aside class="contact-note">
          <p class="card-meta">Institutional home</p>
          <h3>${siteContent.contact.note.title}</h3>
          <p>${siteContent.contact.note.body}</p>
        </aside>
      </section>
    </main>

    <footer class="site-footer">
      <p>${siteContent.footer}</p>
    </footer>
  </div>
`;

const masthead = app.querySelector(".masthead");
const menuToggle = app.querySelector(".menu-toggle");
const mobileNavLinks = app.querySelectorAll(".main-nav a");

const closeMobileMenu = () => {
  if (!masthead || !menuToggle) {
    return;
  }

  masthead.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "Menu";
};

if (masthead && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = masthead.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "Close" : "Menu";
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 820) {
        closeMobileMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMobileMenu();
    }
  });
}
