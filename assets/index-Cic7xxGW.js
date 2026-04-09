(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const l=e=>`/parmar-lab-site/media/${e}`,a={meta:{title:"Parmar Lab | Nova Southeastern University",description:"The Parmar Lab at Nova Southeastern University studies neurodegeneration, neuroinflammation, and translational therapeutics."},brand:{name:"Parmar Lab",subtitle:"NSU KPCOM"},nav:[{id:"welcome",label:"Welcome"},{id:"research-focus",label:"Research Focus"},{id:"people",label:"People"},{id:"lab-news",label:"Lab News"},{id:"publications",label:"Publications"},{id:"extracurricular",label:"Extracurricular"}],hero:{eyebrow:"The Parmar Lab | Nova Southeastern University | Kiran C. Patel College of Osteopathic Medicine",title:["Neurodegeneration","and translational","neuroscience"],summary:"Faculty-led research on neuroinflammation, therapeutics, and clinically relevant brain science.",ctas:[{label:"View research focus",href:"#research-focus"},{label:"Meet the lab",href:"#people"}],metrics:[{label:"Focus",value:"Neurodegeneration"},{label:"Focus",value:"Neuroinflammation"},{label:"Method",value:"Translational therapeutics"}],collage:[{src:l("microscopes.jpg"),alt:"Researchers using microscopes"},{src:l("mouse-neurons.jpg"),alt:"Neuron microscopy image"},{src:l("brain-mri.jpg"),alt:"Magnetic resonance image of the brain"},{src:l("pain-neurons.jpg"),alt:"Microscopy image of neural tissue"}],credit:"Concept collage built from public-domain scientific imagery."},welcome:{eyebrow:"Welcome",title:"Clean science. Clear direction.",body:"This concept reframes the lab as a modern research home: visually confident, easy to scan, and anchored in a few strong takeaways instead of dense copy."},researchFocus:{eyebrow:"Research Focus",title:"Four directions shape the story of the lab.",summary:"The public-facing identity should immediately communicate where the work lives and why it matters.",stories:[{title:"Parkinson's disease",body:"Gene therapy, translation, and future direction.",href:"https://scholars.nova.edu/en/publications/gene-therapy-for-parkinsons-disease-current-landscape-translation/"},{title:"Neuroinflammation",body:"Inflammatory pathways as therapeutic targets.",href:"https://scholars.nova.edu/en/publications/targeting-neuroinflammation-in-neurodegenerative-disorders-the-em/"},{title:"Alzheimer's disease",body:"Disease progression viewed through mechanistic questions.",href:"https://scholars.nova.edu/en/persons/mayur-parmar"},{title:"Student scholarship",body:"Publication-minded mentorship and review writing.",href:"https://osteopathic.nova.edu/documents/publications/kpcom-link-fall-2025.pdf"}],highlight:{eyebrow:"Project Highlight",title:"Parkinson's disease gene therapy",body:"A recent review maps the current landscape, translational hurdles, and future directions of gene therapy in Parkinson's disease.",href:"https://scholars.nova.edu/en/publications/gene-therapy-for-parkinsons-disease-current-landscape-translation/",signals:["Therapeutic strategy","Translational hurdles","Future direction"],label:"Read the review"}},people:{eyebrow:"People",title:"Faculty-led work with room for student authorship.",summary:"The lab should feel both academically serious and visibly mentorship-oriented.",lead:{name:"Mayur Parmar, Ph.D.",role:"Associate Professor of Pharmacology",image:l("parmar-headshot.jpeg"),imageAlt:"Portrait of Dr. Mayur Parmar",body:"Dr. Parmar leads the lab's work across neuroscience, pharmacology, and translational therapeutics at NSU KPCOM.",links:[{label:"Faculty profile",href:"https://osteopathic.nova.edu/people/parmar-mayur.html"},{label:"NSU Scholars",href:"https://scholars.nova.edu/en/persons/mayur-parmar"}]},cards:[{title:"Vito Evola",meta:"Predoctoral Research Fellow",image:l("vito-headshot.jpeg"),imageAlt:"Portrait of Vito Evola",body:"Recent scholarship and student-facing research momentum are part of the lab's public identity.",link:{label:"KPCOM feature",href:"https://osteopathic.nova.edu/documents/publications/kpcom-link-fall-2025.pdf"}},{title:"Lab environment",meta:"Mentorship-first culture",body:"The site should present a lab where publication, advising, and professional growth are visible parts of the work.",link:{label:"About NSU KPCOM",href:"https://osteopathic.nova.edu/index.html"}}]},labNews:{eyebrow:"Lab News",title:"Recent movement from the lab.",summary:"Short, current, and easy to share. This section should read like momentum, not archive.",signals:["Recent reviews","Student spotlight","Research momentum"],items:[{meta:"2026",title:"Parkinson's gene therapy review published",body:"A focused review outlines major translational challenges and next steps.",href:"https://scholars.nova.edu/en/publications/gene-therapy-for-parkinsons-disease-current-landscape-translation/"},{meta:"2026",title:"Semaglutide review highlights neuroinflammation",body:"Recent work examines inflammation across neurodegenerative disorders.",href:"https://scholars.nova.edu/en/publications/targeting-neuroinflammation-in-neurodegenerative-disorders-the-em/"},{meta:"KPCOM",title:"Predoctoral fellowship spotlight",body:"A public-facing profile reinforces the lab's student-centered research culture.",href:"https://osteopathic.nova.edu/documents/publications/kpcom-link-fall-2025.pdf"}]},publications:{eyebrow:"Publications",title:"Selected work and scholarship links.",summary:"A short featured list keeps the site clean while still giving visitors credible research touchpoints.",items:[{meta:"Expert Review of Neurotherapeutics | 2026",title:"Gene therapy for Parkinson's disease: current landscape, translational challenges, and future directions",href:"https://scholars.nova.edu/en/publications/gene-therapy-for-parkinsons-disease-current-landscape-translation/"},{meta:"Inflammation Research | 2026",title:"Targeting neuroinflammation in neurodegenerative disorders: the emerging potential of semaglutide",href:"https://scholars.nova.edu/en/publications/targeting-neuroinflammation-in-neurodegenerative-disorders-the-em/"},{meta:"NSU Scholars",title:"Full faculty scholarship profile",href:"https://scholars.nova.edu/en/persons/mayur-parmar"}]},extracurricular:{eyebrow:"Extracurricular",title:"Space for what happens beyond the paper.",summary:"This section can hold the broader life of the lab without cluttering the scientific core of the site.",cards:[{title:"Mentorship",body:"Student advising, fellowships, and authorship pathways."},{title:"Conference presence",body:"Talks, posters, invited lectures, and regional or national meetings."},{title:"Campus engagement",body:"Events, outreach, and the visible culture surrounding the group."}]},footer:{institution:"Nova Southeastern University | Dr. Kiran C. Patel College of Osteopathic Medicine",body:"For collaborations and inquiries, use Dr. Parmar's faculty profile or NSU Scholars page.",quickLinks:[{label:"Research Focus",href:"#research-focus"},{label:"People",href:"#people"},{label:"Lab News",href:"#lab-news"},{label:"Publications",href:"#publications"}],links:[{label:"Faculty profile",href:"https://osteopathic.nova.edu/people/parmar-mayur.html"},{label:"NSU Scholars",href:"https://scholars.nova.edu/en/persons/mayur-parmar"}]}},p=document.querySelector("#app");document.title=a.meta.title;const d=document.querySelector('meta[name="description"]');d&&d.setAttribute("content",a.meta.description);const o=e=>e.startsWith("http")?'target="_blank" rel="noreferrer"':"",f=()=>a.nav.map(e=>`
        <a class="nav-link" href="#${e.id}" data-nav="${e.id}">
          ${e.label}
        </a>
      `).join(""),b=e=>e.map((s,i)=>`
        <a
          class="button ${i===0?"button-primary":"button-secondary"}"
          href="${s.href}"
          ${o(s.href)}
        >
          ${s.label}
        </a>
      `).join(""),v=()=>a.hero.metrics.map(e=>`
        <li class="metric-item">
          <span>${e.label}</span>
          <strong>${e.value}</strong>
        </li>
      `).join(""),g=()=>a.hero.collage.map((e,s)=>`
        <figure class="collage-card collage-card-${s+1}">
          <img src="${e.src}" alt="${e.alt}" />
        </figure>
      `).join(""),y=()=>a.researchFocus.stories.map((e,s)=>`
        <a class="story-card story-card-${s+1}" href="${e.href}" ${o(e.href)}>
          <div class="story-surface" aria-hidden="true"></div>
          <div class="story-overlay">
            <p>${e.body}</p>
            <h3>${e.title}</h3>
          </div>
        </a>
      `).join(""),$=()=>a.researchFocus.highlight.signals.map(e=>`
        <span class="feature-signal">${e}</span>
      `).join(""),w=()=>a.people.lead.links.map(e=>`
        <a class="inline-link" href="${e.href}" ${o(e.href)}>
          ${e.label}
        </a>
      `).join(""),k=()=>a.people.cards.map(e=>`
        <article class="info-card ${e.image?"has-photo":""}">
          ${e.image?`
                <figure class="card-photo">
                  <img src="${e.image}" alt="${e.imageAlt||e.title}" />
                </figure>
              `:""}
          <p class="eyebrow">${e.meta}</p>
          <h3>${e.title}</h3>
          <p>${e.body}</p>
          <a class="inline-link" href="${e.link.href}" ${o(e.link.href)}>
            ${e.link.label}
          </a>
        </article>
      `).join(""),P=()=>a.labNews.items.map(e=>`
        <a class="news-item" href="${e.href}" ${o(e.href)}>
          <p class="news-meta">${e.meta}</p>
          <h3>${e.title}</h3>
          <p>${e.body}</p>
        </a>
      `).join(""),N=()=>a.labNews.signals.map(e=>`
        <span class="news-signal">${e}</span>
      `).join(""),S=()=>a.publications.items.map((e,s)=>`
        <a class="publication-item" href="${e.href}" ${o(e.href)}>
          <span class="publication-index">${String(s+1).padStart(2,"0")}</span>
          <div class="publication-copy">
            <p class="eyebrow">${e.meta}</p>
            <h3>${e.title}</h3>
          </div>
        </a>
      `).join(""),F=()=>a.extracurricular.cards.map(e=>`
        <article class="extra-card">
          <h3>${e.title}</h3>
          <p>${e.body}</p>
        </article>
      `).join(""),L=()=>a.footer.quickLinks.map(e=>`
        <a class="quick-link" href="${e.href}" ${o(e.href)}>
          ${e.label}
        </a>
      `).join(""),j=()=>a.footer.links.map(e=>`
        <a class="inline-link" href="${e.href}" ${o(e.href)}>
          ${e.label}
        </a>
      `).join("");p.innerHTML=`
  <div class="site-root">
    <header class="site-header">
      <a class="brand" href="#welcome">
        <span class="brand-mark">PL</span>
        <span class="brand-copy">
          <strong>${a.brand.name}</strong>
          <small>${a.brand.subtitle}</small>
        </span>
      </a>

      <nav class="site-nav" aria-label="Site sections">
        ${f()}
      </nav>
    </header>

    <main class="page-sections">
      <section id="welcome" class="scene scene-hero">
        <div class="scene-inner hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${a.hero.eyebrow}</p>
            <h1>
              <span>${a.hero.title[0]}</span>
              <span>${a.hero.title[1]}</span>
            </h1>
            <p class="scene-summary">${a.hero.summary}</p>
            <div class="action-row">
              ${b(a.hero.ctas)}
            </div>
            <ul class="metric-row">
              ${v()}
            </ul>
          </div>

          <div class="hero-media">
            <div class="hero-collage">
              ${g()}
            </div>
            <p class="media-credit">${a.hero.credit}</p>
          </div>
        </div>

        <div class="scene-inner intro-band">
          <p class="eyebrow">${a.welcome.eyebrow}</p>
          <div class="intro-copy">
            <h2>${a.welcome.title}</h2>
            <p>${a.welcome.body}</p>
          </div>
        </div>
      </section>

      <section id="research-focus" class="scene scene-dark">
        <div class="scene-inner section-stack">
          <div class="section-heading">
            <p class="eyebrow">${a.researchFocus.eyebrow}</p>
            <h2>${a.researchFocus.title}</h2>
            <p class="section-summary">${a.researchFocus.summary}</p>
          </div>

          <div class="story-grid">
            ${y()}
          </div>

          <div class="feature-band">
            <div class="feature-media" aria-hidden="true">
              <div class="feature-orb feature-orb-one"></div>
              <div class="feature-orb feature-orb-two"></div>
              <div class="feature-grid-lines"></div>
              <div class="feature-signal-stack">
                ${$()}
              </div>
            </div>

            <div class="feature-copy">
              <p class="eyebrow">${a.researchFocus.highlight.eyebrow}</p>
              <h3>${a.researchFocus.highlight.title}</h3>
              <p>${a.researchFocus.highlight.body}</p>
              <a
                class="inline-link"
                href="${a.researchFocus.highlight.href}"
                ${o(a.researchFocus.highlight.href)}
              >
                ${a.researchFocus.highlight.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="people" class="scene scene-light">
        <div class="scene-inner people-layout">
          <article class="lead-panel">
            <p class="eyebrow">${a.people.eyebrow}</p>
            <h2>${a.people.title}</h2>
            <p class="section-summary">${a.people.summary}</p>
            <div class="lead-spotlight">
              <figure class="lead-photo">
                <img
                  src="${a.people.lead.image}"
                  alt="${a.people.lead.imageAlt}"
                />
              </figure>

              <div class="lead-detail">
                <p class="person-role">${a.people.lead.role}</p>
                <h3>${a.people.lead.name}</h3>
                <p>${a.people.lead.body}</p>
                <div class="inline-link-row">
                  ${w()}
                </div>
              </div>
            </div>
          </article>

          <div class="side-stack">
            ${k()}
          </div>
        </div>
      </section>

      <section id="lab-news" class="scene scene-news">
        <div class="scene-inner news-layout">
          <div class="news-copy">
            <p class="eyebrow">${a.labNews.eyebrow}</p>
            <h2>${a.labNews.title}</h2>
            <p class="section-summary">${a.labNews.summary}</p>
            <div class="news-panel">
              ${N()}
            </div>
          </div>

          <div class="news-list">
            ${P()}
          </div>
        </div>
      </section>

      <section id="publications" class="scene scene-deep">
        <div class="scene-inner section-stack">
          <div class="section-heading">
            <p class="eyebrow">${a.publications.eyebrow}</p>
            <h2>${a.publications.title}</h2>
            <p class="section-summary">${a.publications.summary}</p>
          </div>

          <div class="publication-list">
            ${S()}
          </div>
        </div>
      </section>

      <section id="extracurricular" class="scene scene-soft">
        <div class="scene-inner section-stack">
          <div class="section-heading">
            <p class="eyebrow">${a.extracurricular.eyebrow}</p>
            <h2>${a.extracurricular.title}</h2>
            <p class="section-summary">${a.extracurricular.summary}</p>
          </div>

          <div class="extra-grid">
            ${F()}
          </div>

          <footer class="site-footer">
            <div class="footer-copy">
              <p class="eyebrow">Contact</p>
              <h3>${a.footer.institution}</h3>
              <p>${a.footer.body}</p>
              <div class="inline-link-row">
                ${j()}
              </div>
            </div>

            <div class="quick-links">
              ${L()}
            </div>
          </footer>
        </div>
      </section>
    </main>
  </div>
`;const u=[...p.querySelectorAll("[data-nav]")],h=u.map(e=>document.querySelector(e.getAttribute("href"))).filter(Boolean),m=e=>{u.forEach(s=>{const i=s.dataset.nav===e;s.classList.toggle("is-active",i),s.setAttribute("aria-current",i?"page":"false")})};if(h.length){const e=new IntersectionObserver(s=>{const i=s.filter(n=>n.isIntersecting).sort((n,r)=>r.intersectionRatio-n.intersectionRatio)[0];i?.target?.id&&m(i.target.id)},{threshold:[.3,.55,.75],rootMargin:"-18% 0px -28% 0px"});h.forEach(s=>e.observe(s))}m(window.location.hash.replace("#","")||a.nav[0].id);
