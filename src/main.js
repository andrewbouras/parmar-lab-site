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

const renderTabs = () =>
  siteContent.tabs
    .map(
      (tab) => `
        <button
          class="tab-button"
          type="button"
          role="tab"
          aria-selected="false"
          aria-controls="panel-${tab.id}"
          id="tab-${tab.id}"
          data-tab="${tab.id}"
        >
          ${tab.label}
        </button>
      `
    )
    .join("");

const renderWelcomeSignals = () =>
  siteContent.welcome.signals
    .map(
      (item) => `
        <li>
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </li>
      `
    )
    .join("");

const renderWelcomeStats = () =>
  siteContent.welcome.stats
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");

const renderWelcomeCollage = () =>
  siteContent.welcome.collage
    .map(
      (item, index) => `
        <figure class="collage-tile collage-tile-${index + 1}">
          <img src="${item.src}" alt="${item.alt}" />
        </figure>
      `
    )
    .join("");

const renderWelcomeCtas = () =>
  siteContent.welcome.ctas
    .map(
      (cta, index) => `
        <button class="button ${index === 0 ? "button-primary" : "button-secondary"}" type="button" data-tab-link="${cta.target}">
          ${cta.label}
        </button>
      `
    )
    .join("");

const renderResearchCards = () =>
  siteContent.researchFocus.cards
    .map(
      (card) => `
        <article class="content-card">
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `
    )
    .join("");

const renderResearchStrip = () =>
  siteContent.researchFocus.strip
    .map(
      (item) => `
        <li>${item}</li>
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
          <div class="card-links">
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

const renderNews = () =>
  siteContent.labNews.items
    .map(
      (item) => `
        <article class="news-card">
          <p class="card-meta">${item.meta}</p>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <a href="${item.href}" ${getLinkAttrs(item.href)}>Open item</a>
        </article>
      `
    )
    .join("");

const renderPublications = () =>
  siteContent.publications.items
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

const renderExtraCards = () =>
  siteContent.extracurricular.cards
    .map(
      (card) => `
        <article class="content-card">
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </article>
      `
    )
    .join("");

app.innerHTML = `
  <div class="site-shell">
    <div class="page-glow glow-left"></div>
    <div class="page-glow glow-right"></div>

    <header class="masthead">
      <div class="brand-lockup">
        <a class="brand" href="#welcome">
          <span class="brand-mark">PL</span>
          <span class="brand-copy">
            <strong>${siteContent.brand.name}</strong>
            <small>${siteContent.brand.subtitle}</small>
          </span>
        </a>
      </div>

      <nav class="tab-nav" role="tablist" aria-label="Site sections">
        ${renderTabs()}
      </nav>
    </header>

    <main>
      <section
        id="panel-welcome"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-welcome"
      >
        <div class="hero-layout">
          <div class="hero-copy">
            <p class="eyebrow">${siteContent.welcome.eyebrow}</p>
            <h1>${siteContent.welcome.title}</h1>
            <p class="hero-summary">${siteContent.welcome.summary}</p>
            <div class="hero-actions">
              ${renderWelcomeCtas()}
            </div>
            <div class="stats-row">
              ${renderWelcomeStats()}
            </div>
          </div>

          <aside class="hero-aside">
            <div class="media-collage">
              ${renderWelcomeCollage()}
            </div>
            <div class="signal-panel">
              <p class="card-meta">At a glance</p>
              <ul class="signal-list">
                ${renderWelcomeSignals()}
              </ul>
              <p class="media-credit">${siteContent.welcome.mediaCredit}</p>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="panel-research-focus"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-research-focus"
        hidden
      >
        <div class="page-header">
          <p class="eyebrow">${siteContent.researchFocus.eyebrow}</p>
          <h2>${siteContent.researchFocus.title}</h2>
          <p>${siteContent.researchFocus.intro}</p>
        </div>
        <div class="content-grid three-up">
          ${renderResearchCards()}
        </div>
        <ul class="focus-strip">
          ${renderResearchStrip()}
        </ul>
      </section>

      <section
        id="panel-people"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-people"
        hidden
      >
        <div class="page-header">
          <p class="eyebrow">${siteContent.people.eyebrow}</p>
          <h2>${siteContent.people.title}</h2>
          <p>${siteContent.people.intro}</p>
        </div>
        <div class="content-grid three-up">
          ${renderPeople()}
        </div>
      </section>

      <section
        id="panel-lab-news"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-lab-news"
        hidden
      >
        <div class="page-header">
          <p class="eyebrow">${siteContent.labNews.eyebrow}</p>
          <h2>${siteContent.labNews.title}</h2>
          <p>${siteContent.labNews.intro}</p>
        </div>
        <div class="content-grid news-grid">
          ${renderNews()}
        </div>
      </section>

      <section
        id="panel-publications"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-publications"
        hidden
      >
        <div class="page-header">
          <p class="eyebrow">${siteContent.publications.eyebrow}</p>
          <h2>${siteContent.publications.title}</h2>
          <p>${siteContent.publications.intro}</p>
        </div>
        <div class="content-grid publication-grid">
          ${renderPublications()}
        </div>
      </section>

      <section
        id="panel-extracurricular"
        class="tab-panel"
        role="tabpanel"
        aria-labelledby="tab-extracurricular"
        hidden
      >
        <div class="page-header">
          <p class="eyebrow">${siteContent.extracurricular.eyebrow}</p>
          <h2>${siteContent.extracurricular.title}</h2>
          <p>${siteContent.extracurricular.intro}</p>
        </div>
        <div class="content-grid three-up">
          ${renderExtraCards()}
        </div>
      </section>
    </main>

    <footer id="contact" class="site-footer">
      <div class="footer-copy">
        <p class="eyebrow">${siteContent.footer}</p>
      </div>
      <div class="footer-links">
        ${siteContent.people.cards[0].links
          .map(
            (link) => `
              <a href="${link.href}" ${getLinkAttrs(link.href)}>${link.label}</a>
            `
          )
          .join("")}
        ${siteContent.labNews.items[0]
          ? `<a href="${siteContent.people.cards[0].links[0].href}" ${getLinkAttrs(siteContent.people.cards[0].links[0].href)}>Contact</a>`
          : ""}
      </div>
    </footer>
  </div>
`;

const tabButtons = [...app.querySelectorAll("[data-tab]")];
const tabPanels = [...app.querySelectorAll(".tab-panel")];
const tabLinks = [...app.querySelectorAll("[data-tab-link]")];

const validTabs = new Set(siteContent.tabs.map((tab) => tab.id));

const setActiveTab = (tabId, replace = false) => {
  const nextTab = validTabs.has(tabId) ? tabId : siteContent.tabs[0].id;

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === nextTab;
    button.setAttribute("aria-selected", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.tabIndex = isActive ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    panel.hidden = panel.id !== `panel-${nextTab}`;
  });

  const nextHash = `#${nextTab}`;
  if (replace) {
    history.replaceState(null, "", nextHash);
  } else if (window.location.hash !== nextHash) {
    history.pushState(null, "", nextHash);
  }
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button.dataset.tab);
  });
});

tabLinks.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button.dataset.tabLink);
  });
});

window.addEventListener("popstate", () => {
  const hashTab = window.location.hash.replace("#", "");
  setActiveTab(hashTab, true);
});

const initialTab = window.location.hash.replace("#", "");
setActiveTab(initialTab, true);
