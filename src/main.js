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

const renderHighlights = () =>
  siteContent.highlights
    .map(
      (item) => `
        <li>
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </li>
      `
    )
    .join("");

const renderStats = () =>
  siteContent.stats
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");

const renderFocusCards = () =>
  siteContent.focus.cards
    .map(
      (card) => `
        <article class="focus-card">
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `
    )
    .join("");

const renderWork = () =>
  siteContent.work.items
    .map(
      (item) => `
        <article class="work-card">
          <p class="card-meta">${item.meta}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <a href="${item.href}" target="_blank" rel="noreferrer">View publication</a>
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

      <nav class="main-nav" aria-label="Primary">
        ${renderNavLinks()}
      </nav>

      <a class="header-cta" href="#contact">Contact</a>
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
          <div class="stats-row">
            ${renderStats()}
          </div>
        </div>

        <aside class="hero-panel">
          <p class="card-meta">At a glance</p>
          <h2>Focused science. Clear priorities. Strong mentorship.</h2>
          <ul class="highlight-list">
            ${renderHighlights()}
          </ul>
        </aside>
      </section>

      <section id="focus" class="section-block">
        <div class="section-heading">
          <p class="eyebrow">${siteContent.focus.label}</p>
          <h2>${siteContent.focus.title}</h2>
        </div>
        <div class="focus-grid">
          ${renderFocusCards()}
        </div>
      </section>

      <section id="work" class="section-block">
        <div class="section-heading">
          <p class="eyebrow">${siteContent.work.label}</p>
          <h2>${siteContent.work.title}</h2>
        </div>
        <div class="work-grid">
          ${renderWork()}
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

      <section id="contact" class="contact-block">
        <div class="section-heading">
          <p class="eyebrow">${siteContent.contact.label}</p>
          <h2>${siteContent.contact.title}</h2>
        </div>
        <p class="contact-copy">${siteContent.contact.body}</p>
        <ul class="contact-list">
          ${renderContact()}
        </ul>
      </section>
    </main>

    <footer class="site-footer">
      <p>${siteContent.footer}</p>
    </footer>
  </div>
`;
