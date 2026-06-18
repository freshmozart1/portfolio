/*
 * content.js — all site copy in English and German.
 * To edit text or fix a translation, change the strings below. Keys map to
 * `data-i18n` attributes in index.html. Proper nouns (tech names, project
 * code-names, URLs) live directly in index.html and are not translated.
 */
const I18N = {
  en: {
    "meta.title": "Ole Köster — Self-taught Full-Stack Developer",
    "meta.description":
      "Portfolio of Ole Köster, a self-taught full-stack developer who learns by building — TypeScript, Vue, Next.js, React Native, and AI-powered products.",

    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.vision": "Vision",
    "nav.openToRoles": "Open to roles",
    "nav.langAria": "Switch language",
    "nav.menuAria": "Sections",

    "hero.eyebrow": "self-taught full-stack developer",
    "hero.lead": "I learn by building.",
    "hero.support":
      "From full-stack TypeScript apps to AI-powered tools, I take ideas all the way from a blank file to a working, shipped product — picking up whatever the problem needs along the way.",
    "hero.ctaProjects": "See what I've built",
    "hero.photoAlt": "Portrait of Ole Köster",

    "about.label": "about",
    "about.heading": "Who I am",
    "about.body1":
      "I'm Ole Köster, a self-taught developer. What started as curiosity became a habit: pick an idea, then build it until it works. Every project on this page taught me something I couldn't have learned from a tutorial alone.",
    "about.body2":
      "I'm most at home across the full stack — designing an interface, wiring up an API, modelling data, and getting the whole thing deployed. I don't wait for permission to learn a new framework; I reach for whatever the problem in front of me actually needs.",

    "skills.label": "skills",
    "skills.heading": "What I work with",
    "skills.langTitle": "Languages",
    "skills.frontendTitle": "Frontend",
    "skills.backendTitle": "Backend",
    "skills.dataTitle": "Data",
    "skills.aiTitle": "AI & Automation",
    "skills.toolingTitle": "Tooling & Deploy",

    "projects.label": "projects",
    "projects.heading": "What I've built",
    "projects.intro":
      "A selection of things I've shipped — each one started as an empty repository.",
    "projects.linkCode": "Code",
    "projects.linkServer": "Server",
    "projects.linkLive": "Live demo",
    "projects.linkVideo": "Watch video",

    "projects.jobsuite.title": "Job-search suite",
    "projects.jobsuite.desc":
      "A two-part system that automates the job hunt: a Node/Express service uses Puppeteer to scrape and normalize LinkedIn postings into MongoDB, paired with a Vue 3 + Vite frontend to browse and match them.",
    "projects.receipts.title": "Receipt Tracker",
    "projects.receipts.desc":
      "A Next.js progressive web app that scans receipts with your phone camera. The OpenAI API reads each image and extracts the store, items, and prices into structured data, shown on a spending-analytics dashboard.",
    "projects.chat.title": "Talk with Everyone",
    "projects.chat.desc":
      "A React Native + Expo mobile app for anonymous chat, with image and location messages, backed by Google Firestore.",
    "projects.notes.title": "Notes Whiteboard",
    "projects.notes.desc":
      "A lightweight, dependency-free web app for arranging sticky notes on a whiteboard — built with vanilla HTML, CSS, and JavaScript.",
    "projects.tinder.title": "Tinder UI",
    "projects.tinder.desc":
      "A pixel-faithful Tinder interface rebuilt from scratch in a single timed speed-run, documented in an accompanying build video.",

    "vision.label": "where I'm headed",
    "vision.heading": "The next five years",
    "vision.body":
      "I want to grow into an established developer with hands-on experience on large-scale, real-world corporate projects. My goal is to bring the drive that made me self-taught into a professional engineering team — to learn from production systems at scale, take on real responsibility, and keep getting better at the craft.",

    "footer.note": "Built from scratch with HTML, CSS, and JavaScript.",
  },

  de: {
    "meta.title": "Ole Köster — Autodidaktischer Full-Stack-Entwickler",
    "meta.description":
      "Portfolio von Ole Köster, einem autodidaktischen Full-Stack-Entwickler, der durch Bauen lernt — TypeScript, Vue, Next.js, React Native und KI-gestützte Produkte.",

    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.projects": "Projekte",
    "nav.vision": "Vision",
    "nav.openToRoles": "Offen für Stellen",
    "nav.langAria": "Sprache wechseln",
    "nav.menuAria": "Abschnitte",

    "hero.eyebrow": "autodidaktischer full-stack-entwickler",
    "hero.lead": "Ich lerne, indem ich baue.",
    "hero.support":
      "Von Full-Stack-Anwendungen mit TypeScript bis zu KI-gestützten Tools bringe ich Ideen vom leeren File bis zum fertigen, lauffähigen Produkt — und eigne mir dabei an, was das Problem gerade braucht.",
    "hero.ctaProjects": "Meine Projekte ansehen",
    "hero.photoAlt": "Porträt von Ole Köster",

    "about.label": "über mich",
    "about.heading": "Wer ich bin",
    "about.body1":
      "Ich bin Ole Köster, ein autodidaktischer Entwickler. Was als Neugier begann, wurde zur Gewohnheit: eine Idee nehmen und sie so lange bauen, bis sie funktioniert. Jedes Projekt auf dieser Seite hat mir etwas beigebracht, das ich aus einem Tutorial allein nie gelernt hätte.",
    "about.body2":
      "Am wohlsten fühle ich mich über den gesamten Stack hinweg — ein Interface gestalten, eine API anbinden, Daten modellieren und das Ganze ausliefern. Ich warte nicht auf Erlaubnis, um ein neues Framework zu lernen, sondern greife zu dem, was das Problem vor mir tatsächlich erfordert.",

    "skills.label": "fähigkeiten",
    "skills.heading": "Womit ich arbeite",
    "skills.langTitle": "Sprachen",
    "skills.frontendTitle": "Frontend",
    "skills.backendTitle": "Backend",
    "skills.dataTitle": "Daten",
    "skills.aiTitle": "KI & Automatisierung",
    "skills.toolingTitle": "Tools & Deployment",

    "projects.label": "projekte",
    "projects.heading": "Was ich gebaut habe",
    "projects.intro":
      "Eine Auswahl dessen, was ich umgesetzt habe — jedes Projekt begann als leeres Repository.",
    "projects.linkCode": "Code",
    "projects.linkServer": "Server",
    "projects.linkLive": "Live-Demo",
    "projects.linkVideo": "Video ansehen",

    "projects.jobsuite.title": "Job-Suche-Suite",
    "projects.jobsuite.desc":
      "Ein zweiteiliges System, das die Jobsuche automatisiert: Ein Node-/Express-Dienst nutzt Puppeteer, um LinkedIn-Stellenanzeigen zu scrapen, zu normalisieren und in MongoDB zu speichern — kombiniert mit einem Frontend aus Vue 3 und Vite zum Durchsuchen und Abgleichen.",
    "projects.receipts.title": "Beleg-Tracker",
    "projects.receipts.desc":
      "Eine progressive Web-App auf Next.js-Basis, die Belege mit der Handykamera scannt. Die OpenAI-API liest jedes Bild und extrahiert Geschäft, Artikel und Preise als strukturierte Daten — dargestellt in einem Dashboard zur Ausgabenanalyse.",
    "projects.chat.title": "Talk with Everyone",
    "projects.chat.desc":
      "Eine mobile App mit React Native und Expo für anonymes Chatten, inklusive Bild- und Standortnachrichten, mit Google Firestore als Backend.",
    "projects.notes.title": "Notiz-Whiteboard",
    "projects.notes.desc":
      "Eine schlanke, abhängigkeitsfreie Web-App, um Notizzettel auf einem Whiteboard anzuordnen — gebaut mit reinem HTML, CSS und JavaScript.",
    "projects.tinder.title": "Tinder-UI",
    "projects.tinder.desc":
      "Eine originalgetreue Tinder-Oberfläche, in einem einzigen Speedrun von Grund auf nachgebaut und in einem begleitenden Video dokumentiert.",

    "vision.label": "wohin ich will",
    "vision.heading": "Die nächsten fünf Jahre",
    "vision.body":
      "Ich möchte zu einem etablierten Entwickler heranwachsen, mit praktischer Erfahrung in großen, realen Unternehmensprojekten. Mein Ziel ist es, den Antrieb, der mich zum Autodidakten gemacht hat, in ein professionelles Entwicklungsteam einzubringen — von Produktivsystemen im großen Maßstab zu lernen, echte Verantwortung zu übernehmen und im Handwerk immer besser zu werden.",

    "footer.note": "Von Grund auf gebaut mit HTML, CSS und JavaScript.",
  },
};
