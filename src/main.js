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

const renderNav = () =>
  siteContent.nav
    .map(
      (item) => `
        <a class="nav-link" href="#${item.id}" data-nav="${item.id}">
          ${item.label}
        </a>
      `,
    )
    .join("");

const renderActions = (items) =>
  items
    .map(
      (item, index) => `
        <a
          class="button ${index === 0 ? "button-primary" : "button-secondary"}"
          href="${item.href}"
          ${getLinkAttrs(item.href)}
        >
          ${item.label}
        </a>
      `,
    )
    .join("");

const renderHeroMetrics = () =>
  siteContent.hero.metrics
    .map(
      (item) => `
        <li class="metric-item">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </li>
      `,
    )
    .join("");

const renderHeroCollage = () =>
  siteContent.hero.collage
    .map(
      (item, index) => `
        <figure class="collage-card collage-card-${index + 1}">
          <img src="${item.src}" alt="${item.alt}" />
        </figure>
      `,
    )
    .join("");

const renderStoryCards = () =>
  siteContent.researchFocus.stories
    .map(
      (story) => `
        <a class="story-card" href="${story.href}" ${getLinkAttrs(story.href)}>
          <img src="${story.image}" alt="${story.title}" />
          <div class="story-overlay">
            <p>${story.body}</p>
            <h3>${story.title}</h3>
          </div>
        </a>
      `,
    )
    .join("");

const renderLeadLinks = () =>
  siteContent.people.lead.links
    .map(
      (link) => `
        <a class="inline-link" href="${link.href}" ${getLinkAttrs(link.href)}>
          ${link.label}
        </a>
      `,
    )
    .join("");

const renderPeopleCards = () =>
  siteContent.people.cards
    .map(
      (card) => `
        <article class="info-card ${card.image ? "has-photo" : ""}">
          ${
            card.image
              ? `
                <figure class="card-photo">
                  <img src="${card.image}" alt="${card.imageAlt || card.title}" />
                </figure>
              `
              : ""
          }
          <p class="eyebrow">${card.meta}</p>
          <h3>${card.title}</h3>
          <p>${card.body}</p>
          <a class="inline-link" href="${card.link.href}" ${getLinkAttrs(card.link.href)}>
            ${card.link.label}
          </a>
        </article>
      `,
    )
    .join("");

const renderNewsItems = () =>
  siteContent.labNews.items
    .map(
      (item) => `
        <a class="news-item" href="${item.href}" ${getLinkAttrs(item.href)}>
          <p class="news-meta">${item.meta}</p>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </a>
      `,
    )
    .join("");

const renderPublicationItems = () =>
  siteContent.publications.items
    .map(
      (item, index) => `
        <a class="publication-item" href="${item.href}" ${getLinkAttrs(item.href)}>
          <span class="publication-index">${String(index + 1).padStart(2, "0")}</span>
          <div class="publication-copy">
            <p class="eyebrow">${item.meta}</p>
            <h3>${item.title}</h3>
          </div>
        </a>
      `,
    )
    .join("");

const renderExtraCards = () =>
  siteContent.extracurricular.cards
    .map(
      (card) => `
        <article class="extra-card">
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `,
    )
    .join("");

const renderQuickLinks = () =>
  siteContent.footer.quickLinks
    .map(
      (link) => `
        <a class="quick-link" href="${link.href}" ${getLinkAttrs(link.href)}>
          ${link.label}
        </a>
      `,
    )
    .join("");

const renderFooterLinks = () =>
  siteContent.footer.links
    .map(
      (link) => `
        <a class="inline-link" href="${link.href}" ${getLinkAttrs(link.href)}>
          ${link.label}
        </a>
      `,
    )
    .join("");

app.innerHTML = `
  <div class="site-root">
    <header class="site-header">
      <a class="brand" href="#welcome">
        <span class="brand-mark">PL</span>
        <span class="brand-copy">
          <strong>${siteContent.brand.name}</strong>
          <small>${siteContent.brand.subtitle}</small>
        </span>
      </a>

      <nav class="site-nav" aria-label="Site sections">
        ${renderNav()}
      </nav>
    </header>

    <main class="page-sections">
      <section id="welcome" class="scene scene-hero">
        <div class="scene-inner hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${siteContent.hero.eyebrow}</p>
            <h1>
              <span>${siteContent.hero.title[0]}</span>
              <span>${siteContent.hero.title[1]}</span>
            </h1>
            <p class="scene-summary">${siteContent.hero.summary}</p>
            <div class="action-row">
              ${renderActions(siteContent.hero.ctas)}
            </div>
            <ul class="metric-row">
              ${renderHeroMetrics()}
            </ul>
          </div>

          <div class="hero-media">
            <div class="hero-collage">
              ${renderHeroCollage()}
            </div>
            <p class="media-credit">${siteContent.hero.credit}</p>
          </div>
        </div>

        <div class="scene-inner intro-band">
          <p class="eyebrow">${siteContent.welcome.eyebrow}</p>
          <div class="intro-copy">
            <h2>${siteContent.welcome.title}</h2>
            <p>${siteContent.welcome.body}</p>
          </div>
        </div>
      </section>

      <section id="research-focus" class="scene scene-dark">
        <div class="scene-inner section-stack">
          <div class="section-heading">
            <p class="eyebrow">${siteContent.researchFocus.eyebrow}</p>
            <h2>${siteContent.researchFocus.title}</h2>
            <p class="section-summary">${siteContent.researchFocus.summary}</p>
          </div>

          <div class="story-grid">
            ${renderStoryCards()}
          </div>

          <div class="feature-band">
            <figure class="feature-media">
              <img
                src="${siteContent.researchFocus.highlight.image}"
                alt="${siteContent.researchFocus.highlight.title}"
              />
            </figure>

            <div class="feature-copy">
              <p class="eyebrow">${siteContent.researchFocus.highlight.eyebrow}</p>
              <h3>${siteContent.researchFocus.highlight.title}</h3>
              <p>${siteContent.researchFocus.highlight.body}</p>
              <a
                class="inline-link"
                href="${siteContent.researchFocus.highlight.href}"
                ${getLinkAttrs(siteContent.researchFocus.highlight.href)}
              >
                ${siteContent.researchFocus.highlight.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="people" class="scene scene-light">
        <div class="scene-inner people-layout">
          <article class="lead-panel">
            <p class="eyebrow">${siteContent.people.eyebrow}</p>
            <h2>${siteContent.people.title}</h2>
            <p class="section-summary">${siteContent.people.summary}</p>
            <div class="lead-spotlight">
              <figure class="lead-photo">
                <img
                  src="${siteContent.people.lead.image}"
                  alt="${siteContent.people.lead.imageAlt || siteContent.people.lead.name}"
                />
              </figure>

              <div class="lead-detail">
                <p class="person-role">${siteContent.people.lead.role}</p>
                <h3>${siteContent.people.lead.name}</h3>
                <p>${siteContent.people.lead.body}</p>
                <div class="inline-link-row">
                  ${renderLeadLinks()}
                </div>
              </div>
            </div>
          </article>

          <div class="side-stack">
            ${renderPeopleCards()}
          </div>
        </div>
      </section>

      <section id="lab-news" class="scene scene-news">
        <div class="scene-inner news-layout">
          <div class="news-copy">
            <p class="eyebrow">${siteContent.labNews.eyebrow}</p>
            <h2>${siteContent.labNews.title}</h2>
            <p class="section-summary">${siteContent.labNews.summary}</p>
            <figure class="news-image">
              <img src="${siteContent.labNews.image}" alt="Research activity in the lab" />
            </figure>
          </div>

          <div class="news-list">
            ${renderNewsItems()}
          </div>
        </div>
      </section>

      <section id="publications" class="scene scene-deep">
        <div class="scene-inner section-stack">
          <div class="section-heading">
            <p class="eyebrow">${siteContent.publications.eyebrow}</p>
            <h2>${siteContent.publications.title}</h2>
            <p class="section-summary">${siteContent.publications.summary}</p>
          </div>

          <div class="publication-list">
            ${renderPublicationItems()}
          </div>
        </div>
      </section>

      <section id="extracurricular" class="scene scene-soft">
        <div class="scene-inner section-stack">
          <div class="section-heading">
            <p class="eyebrow">${siteContent.extracurricular.eyebrow}</p>
            <h2>${siteContent.extracurricular.title}</h2>
            <p class="section-summary">${siteContent.extracurricular.summary}</p>
          </div>

          <div class="extra-grid">
            ${renderExtraCards()}
          </div>

          <footer class="site-footer">
            <div class="footer-copy">
              <p class="eyebrow">Contact</p>
              <h3>${siteContent.footer.institution}</h3>
              <p>${siteContent.footer.body}</p>
              <div class="inline-link-row">
                ${renderFooterLinks()}
              </div>
            </div>

            <div class="quick-links">
              ${renderQuickLinks()}
            </div>
          </footer>
        </div>
      </section>
    </main>
  </div>
`;

const navLinks = [...app.querySelectorAll("[data-nav]")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.dataset.nav === id;
    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
};

if (sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveNav(visible.target.id);
      }
    },
    {
      threshold: [0.3, 0.55, 0.75],
      rootMargin: "-18% 0px -28% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

setActiveNav(window.location.hash.replace("#", "") || siteContent.nav[0].id);
