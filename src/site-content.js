const media = (fileName) => `${import.meta.env.BASE_URL}media/${fileName}`;

export const siteContent = {
  meta: {
    title: "Parmar Lab | Nova Southeastern University",
    description:
      "The Parmar Lab at Nova Southeastern University studies neurodegeneration, neuroinflammation, and translational therapeutics."
  },
  brand: {
    name: "Parmar Lab",
    subtitle: "NSU KPCOM"
  },
  nav: [
    { id: "welcome", label: "Welcome" },
    { id: "research-focus", label: "Research Focus" },
    { id: "people", label: "People" },
    { id: "lab-news", label: "Lab News" },
    { id: "publications", label: "Publications" },
    { id: "extracurricular", label: "Extracurricular" }
  ],
  hero: {
    eyebrow:
      "The Parmar Lab | Nova Southeastern University | Kiran C. Patel College of Osteopathic Medicine",
    title: ["Neurodegeneration", "and translational", "neuroscience"],
    summary:
      "Faculty-led research on neuroinflammation, therapeutics, and clinically relevant brain science.",
    ctas: [
      { label: "View research focus", href: "#research-focus" },
      { label: "Meet the lab", href: "#people" }
    ],
    metrics: [
      { label: "Focus", value: "Neurodegeneration" },
      { label: "Focus", value: "Neuroinflammation" },
      { label: "Method", value: "Translational therapeutics" }
    ],
    collage: [
      { src: media("microscopes.jpg"), alt: "Researchers using microscopes" },
      { src: media("mouse-neurons.jpg"), alt: "Neuron microscopy image" },
      { src: media("brain-mri.jpg"), alt: "Magnetic resonance image of the brain" },
      { src: media("pain-neurons.jpg"), alt: "Microscopy image of neural tissue" }
    ],
    credit: "Concept collage built from public-domain scientific imagery."
  },
  welcome: {
    eyebrow: "Welcome",
    title: "Clean science. Clear direction.",
    body:
      "This concept reframes the lab as a modern research home: visually confident, easy to scan, and anchored in a few strong takeaways instead of dense copy."
  },
  researchFocus: {
    eyebrow: "Research Focus",
    title: "Four directions shape the story of the lab.",
    summary:
      "The public-facing identity should immediately communicate where the work lives and why it matters.",
    stories: [
      {
        title: "Parkinson's disease",
        body: "Gene therapy, translation, and future direction.",
        image: media("brain-mri.jpg"),
        href:
          "https://scholars.nova.edu/en/publications/gene-therapy-for-parkinsons-disease-current-landscape-translation/"
      },
      {
        title: "Neuroinflammation",
        body: "Inflammatory pathways as therapeutic targets.",
        image: media("pain-neurons.jpg"),
        href:
          "https://scholars.nova.edu/en/publications/targeting-neuroinflammation-in-neurodegenerative-disorders-the-em/"
      },
      {
        title: "Alzheimer's disease",
        body: "Disease progression viewed through mechanistic questions.",
        image: media("mouse-neurons.jpg"),
        href: "https://scholars.nova.edu/en/persons/mayur-parmar"
      },
      {
        title: "Student scholarship",
        body: "Publication-minded mentorship and review writing.",
        image: media("microscopes.jpg"),
        href: "https://osteopathic.nova.edu/documents/publications/kpcom-link-fall-2025.pdf"
      }
    ],
    highlight: {
      eyebrow: "Project Highlight",
      title: "Parkinson's disease gene therapy",
      body:
        "A recent review maps the current landscape, translational hurdles, and future directions of gene therapy in Parkinson's disease.",
      href:
        "https://scholars.nova.edu/en/publications/gene-therapy-for-parkinsons-disease-current-landscape-translation/",
      image: media("brain-mri.jpg"),
      label: "Read the review"
    }
  },
  people: {
    eyebrow: "People",
    title: "Faculty-led work with room for student authorship.",
    summary:
      "The lab should feel both academically serious and visibly mentorship-oriented.",
    lead: {
      name: "Mayur Parmar, Ph.D.",
      role: "Associate Professor of Pharmacology",
      body:
        "Dr. Parmar leads the lab's work across neuroscience, pharmacology, and translational therapeutics at NSU KPCOM.",
      links: [
        {
          label: "Faculty profile",
          href: "https://osteopathic.nova.edu/people/parmar-mayur.html"
        },
        {
          label: "NSU Scholars",
          href: "https://scholars.nova.edu/en/persons/mayur-parmar"
        }
      ]
    },
    cards: [
      {
        title: "Vito Evola",
        meta: "Predoctoral Research Fellow",
        body:
          "Recent scholarship and student-facing research momentum are part of the lab's public identity.",
        link: {
          label: "KPCOM feature",
          href: "https://osteopathic.nova.edu/documents/publications/kpcom-link-fall-2025.pdf"
        }
      },
      {
        title: "Lab environment",
        meta: "Mentorship-first culture",
        body:
          "The site should present a lab where publication, advising, and professional growth are visible parts of the work.",
        link: {
          label: "About NSU KPCOM",
          href: "https://osteopathic.nova.edu/index.html"
        }
      }
    ]
  },
  labNews: {
    eyebrow: "Lab News",
    title: "Recent movement from the lab.",
    summary:
      "Short, current, and easy to share. This section should read like momentum, not archive.",
    image: media("microscopes.jpg"),
    items: [
      {
        meta: "2026",
        title: "Parkinson's gene therapy review published",
        body: "A focused review outlines major translational challenges and next steps.",
        href:
          "https://scholars.nova.edu/en/publications/gene-therapy-for-parkinsons-disease-current-landscape-translation/"
      },
      {
        meta: "2026",
        title: "Semaglutide review highlights neuroinflammation",
        body: "Recent work examines inflammation across neurodegenerative disorders.",
        href:
          "https://scholars.nova.edu/en/publications/targeting-neuroinflammation-in-neurodegenerative-disorders-the-em/"
      },
      {
        meta: "KPCOM",
        title: "Predoctoral fellowship spotlight",
        body: "A public-facing profile reinforces the lab's student-centered research culture.",
        href: "https://osteopathic.nova.edu/documents/publications/kpcom-link-fall-2025.pdf"
      }
    ]
  },
  publications: {
    eyebrow: "Publications",
    title: "Selected work and scholarship links.",
    summary:
      "A short featured list keeps the site clean while still giving visitors credible research touchpoints.",
    items: [
      {
        meta: "Expert Review of Neurotherapeutics | 2026",
        title:
          "Gene therapy for Parkinson's disease: current landscape, translational challenges, and future directions",
        href:
          "https://scholars.nova.edu/en/publications/gene-therapy-for-parkinsons-disease-current-landscape-translation/"
      },
      {
        meta: "Inflammation Research | 2026",
        title:
          "Targeting neuroinflammation in neurodegenerative disorders: the emerging potential of semaglutide",
        href:
          "https://scholars.nova.edu/en/publications/targeting-neuroinflammation-in-neurodegenerative-disorders-the-em/"
      },
      {
        meta: "NSU Scholars",
        title: "Full faculty scholarship profile",
        href: "https://scholars.nova.edu/en/persons/mayur-parmar"
      }
    ]
  },
  extracurricular: {
    eyebrow: "Extracurricular",
    title: "Space for what happens beyond the paper.",
    summary:
      "This section can hold the broader life of the lab without cluttering the scientific core of the site.",
    cards: [
      {
        title: "Mentorship",
        body: "Student advising, fellowships, and authorship pathways."
      },
      {
        title: "Conference presence",
        body: "Talks, posters, invited lectures, and regional or national meetings."
      },
      {
        title: "Campus engagement",
        body: "Events, outreach, and the visible culture surrounding the group."
      }
    ]
  },
  footer: {
    institution: "Nova Southeastern University | Dr. Kiran C. Patel College of Osteopathic Medicine",
    body:
      "For collaborations and inquiries, use Dr. Parmar's faculty profile or NSU Scholars page.",
    quickLinks: [
      { label: "Research Focus", href: "#research-focus" },
      { label: "People", href: "#people" },
      { label: "Lab News", href: "#lab-news" },
      { label: "Publications", href: "#publications" }
    ],
    links: [
      {
        label: "Faculty profile",
        href: "https://osteopathic.nova.edu/people/parmar-mayur.html"
      },
      {
        label: "NSU Scholars",
        href: "https://scholars.nova.edu/en/persons/mayur-parmar"
      }
    ]
  }
};
