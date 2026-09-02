const SITE = {
  name: "Yahel Malka",
  repo: "yahel-portfolio",
  pagesBase: "https://Yahelmalka.github.io/yahel-portfolio",
  email: "Yahelmalka28@gmail.com",
  phone: "054-256-0997",
  phoneHref: "tel:+972542560997",
  linkedin: "https://www.linkedin.com/in/yahel-malka",
  github: "https://github.com/Yahelmalka",
  profileImage: "assets/Yahel.profile.pic.png",
  ogImage: "https://Yahelmalka.github.io/yahel-portfolio/assets/Yahel.profile.pic.png"
};

const SKILL_CATEGORIES = {
  programming: {
    title: "Programming",
    items: ["Python", "JavaScript", "SQL", "C"]
  },
  web: {
    title: "Web Development",
    items: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3"]
  },
  testing: {
    title: "Testing & QA",
    items: ["Manual Testing", "API Testing", "Postman", "E2E Testing", "Debugging", "Test Cases", "Bug Reporting"]
  },
  apis: {
    title: "APIs & Databases",
    items: ["REST APIs", "MySQL", "Client-Server", "JSON"]
  },
  data: {
    title: "Data & Analytics",
    items: ["Excel", "Tableau", "Data Analysis", "Data Visualization"]
  },
  networking: {
    title: "Networking",
    items: ["TCP/IP", "HTTP/HTTPS", "Client-Server"]
  },
  tools: {
    title: "Tools",
    items: ["Git", "GitHub"]
  },
  professional: {
    title: "Professional Skills",
    items: [
      "Problem Solving",
      "Analytical Thinking",
      "Attention to Detail",
      "Independent Learning",
      "Teamwork",
      "Software Troubleshooting",
      "Customer Communication",
      "Working Under Pressure"
    ]
  }
};

const PROJECTS = {
  bin: {
    id: "bin",
    number: "01 / SMART CITY",
    title: "Full Bin Detection System",
    repo: "https://github.com/ol-zab/Full-bin-detection-system-front-end",
    featured: true,
    images: [
      { src: "assets/bin-route-1.jpeg", alt: "Full Bin Detection route planning map" },
      { src: "assets/bin-route-2.jpeg", alt: "Collection route on the interactive map" },
      { src: "assets/bin-management.jpeg", alt: "Bin management interface" }
    ],
    defaultSummary: "A full-stack platform for monitoring waste-bin fill levels, managing locations and planning efficient collection routes on an interactive map.",
    defaultBullets: [
      "Built responsive React interfaces and map-based workflows",
      "Developed REST APIs with Node.js and Express",
      "Worked with MySQL data and tested endpoints using Postman",
      "Debugged front-end, back-end and integration issues"
    ],
    defaultTags: ["React", "Node.js", "MySQL", "REST API", "Postman"]
  },
  rental: {
    id: "rental",
    number: "02 / WEB3",
    title: "Rental Smart Contracts DApp",
    repo: "https://github.com/Yahelmalka/Rental-dApp",
    featured: false,
    images: [
      { src: "assets/rental-contract.jpeg", alt: "Rental Smart Contracts DApp interface" },
      { src: "assets/rental-sign.jpeg", alt: "MetaMask signature flow" }
    ],
    defaultSummary: "A decentralized rental platform that lets landlords and tenants deploy, sign, lock and manage rental agreements securely through MetaMask.",
    defaultBullets: [
      "Created Solidity smart-contract flows",
      "Connected React UI with Ethers and MetaMask",
      "Handled payments, contract status and transaction states",
      "Tested success, rejection and invalid-input scenarios"
    ],
    defaultTags: ["Solidity", "React", "Ethers", "MetaMask"]
  }
};

const DEFAULT_SKILL_ORDER = ["programming", "web", "testing", "apis", "data", "tools", "professional"];

const ROLES = {
  general: {
    id: "general",
    label: "General Technology",
    path: "",
    pageTitle: "Yahel Malka | QA & Software Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with hands-on project experience in software development, QA, APIs and full-stack systems.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · QA & SOFTWARE",
    headline: "Yahel Malka",
    headlineLead: "Yahel",
    headlineAccent: "Malka.",
    professionalTitle: "Computer Science Graduate | QA & Software",
    subheadline: "Software, testing and technical problem-solving",
    introduction: "I'm Yahel Malka, a Computer Science graduate. I build software, test it and debug it when something doesn't work as expected.",
    primaryCta: { label: "Explore my work", tab: "projects" },
    secondaryCta: { label: "GitHub ↗", href: "https://github.com/Yahelmalka" },
    quickFacts: [
      { value: "B.Sc.", label: "Computer Science" },
      { value: "QA", label: "Manual & API Testing" },
      { value: "Full Stack", label: "React · Node · MySQL" }
    ],
    skillCategoryOrder: DEFAULT_SKILL_ORDER,
    highlightedCategory: "testing",
    highlightedSkills: ["Manual Testing", "API Testing", "Postman", "React.js", "Node.js", "MySQL"],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {},
    focusAreas: ["Quality Assurance", "Full-Stack Development", "APIs & Debugging"],
    preferredRoles: ["Junior QA", "Junior Software", "Technical roles"],
    contactIntro: "I'm looking for junior QA, software and technical roles.",
    cvPath: "assets/cv/yahel-malka-general-cv.pdf",
    cvFilename: "yahel-malka-general-cv.pdf"
  },

  qa: {
    id: "qa",
    label: "Junior QA",
    path: "qa/",
    pageTitle: "Yahel Malka | Junior QA Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with hands-on project experience in manual testing, API testing, Postman, debugging and end-to-end validation.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · QUALITY ASSURANCE",
    headline: "Junior QA Engineer",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior QA Engineer",
    professionalTitle: "Computer Science Graduate | Junior QA Engineer",
    subheadline: "Manual testing, API validation and careful debugging",
    introduction: "Computer Science graduate with hands-on project experience testing software across interfaces, REST APIs and databases. I write test cases, reproduce issues, report bugs and use Postman to check API behavior, including edge cases, invalid input and end-to-end flows.",
    primaryCta: { label: "View tested projects", tab: "projects" },
    secondaryCta: { label: "Skills dashboard", tab: "skills" },
    quickFacts: [
      { value: "QA", label: "Manual & API Testing" },
      { value: "Postman", label: "REST API validation" },
      { value: "E2E", label: "Flows & edge cases" }
    ],
    skillCategoryOrder: ["testing", "apis", "programming", "web", "tools", "data", "professional"],
    highlightedCategory: "testing",
    highlightedSkills: [
      "Manual Testing",
      "API Testing",
      "Postman",
      "E2E Testing",
      "Test Cases",
      "Bug Reporting",
      "Debugging",
      "REST APIs",
      "Attention to Detail",
      "Analytical Thinking"
    ],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A full-stack waste-bin platform that I built, tested and debugged across the React interface, Node.js APIs, MySQL data and map-based collection workflows.",
        bullets: [
          "Tested REST API endpoints in Postman and validated request and response data",
          "Checked end-to-end flows: bin management, fill-level data and route planning on the map",
          "Debugged front-end, back-end and integration issues across client-server layers",
          "Worked through invalid input and broken-path scenarios while verifying the system"
        ],
        tags: ["Manual Testing", "API Testing", "Postman", "E2E Testing", "Debugging"]
      },
      rental: {
        summary: "A rental DApp where I validated contract-signing, payment and status flows, including success, rejection and invalid-input scenarios.",
        bullets: [
          "Tested MetaMask signing, contract deployment and lock flows",
          "Validated payment and contract-status states across the application",
          "Checked rejection and invalid-input scenarios",
          "Debugged UI-to-contract integration issues"
        ],
        tags: ["E2E Testing", "Debugging", "Bug Reporting", "React"]
      }
    },
    focusAreas: [
      "Manual Testing",
      "API Testing",
      "Postman",
      "End-to-End Testing",
      "Test Cases",
      "Bug Reporting",
      "Debugging"
    ],
    preferredRoles: ["Junior QA Engineer", "Junior Software Tester"],
    contactIntro: "I'm looking for junior QA roles.",
    cvPath: "assets/cv/yahel-malka-qa-cv.pdf",
    cvFilename: "yahel-malka-qa-cv.pdf"
  },

  sqa: {
    id: "sqa",
    label: "Junior SQA / System Testing",
    path: "sqa/",
    pageTitle: "Yahel Malka | Junior SQA Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate focused on system testing, end-to-end validation, API checks and troubleshooting across client-server applications.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · SYSTEM TESTING",
    headline: "Junior SQA & System Testing",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior SQA & System Testing",
    professionalTitle: "Computer Science Graduate | Junior SQA & System Testing",
    subheadline: "End-to-end flows, APIs and system-level thinking",
    introduction: "Computer Science graduate with hands-on project experience checking how a full system behaves, from the interface through REST APIs to the database. I trace data flow, reproduce issues and try to find the source of a failure. Real-time and hardware-software systems are areas I am learning.",
    primaryCta: { label: "View system projects", tab: "projects" },
    secondaryCta: { label: "Skills dashboard", tab: "skills" },
    quickFacts: [
      { value: "SQA", label: "System & E2E testing" },
      { value: "APIs", label: "Client–server checks" },
      { value: "Debug", label: "Root-cause thinking" }
    ],
    skillCategoryOrder: ["testing", "apis", "programming", "web", "tools", "professional", "data"],
    highlightedCategory: "testing",
    highlightedSkills: [
      "E2E Testing",
      "Manual Testing",
      "API Testing",
      "Postman",
      "Debugging",
      "Client-Server",
      "REST APIs",
      "JSON",
      "Problem Solving",
      "Analytical Thinking"
    ],
    learningSkills: ["Real-Time Systems", "Hardware-Software Integration"],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "An end-to-end client-server system where I validated how fill-level data, bin records and map routes move between the React client, REST APIs and MySQL.",
        bullets: [
          "Followed data flow from the interface through APIs to MySQL records",
          "Tested functional flows for bin management and collection-route planning",
          "Used Postman to validate API behavior and JSON responses",
          "Debugged integration issues and traced failures across system layers"
        ],
        tags: ["System Testing", "Client-Server", "API Testing", "Debugging"]
      },
      rental: {
        summary: "A multi-layer rental application where I checked how UI actions, wallet signing and contract state stay in sync.",
        bullets: [
          "Validated end-to-end scenarios from deploy and sign through lock and payment",
          "Investigated integration issues between the React UI and smart-contract layer",
          "Tested success, rejection and invalid-input paths",
          "Debugged transaction and status mismatches"
        ],
        tags: ["E2E Testing", "Troubleshooting", "Debugging"]
      }
    },
    focusAreas: [
      "System Testing",
      "End-to-End Scenarios",
      "API Testing",
      "Client-Server Communication",
      "Troubleshooting",
      "Root Cause Analysis"
    ],
    preferredRoles: ["Junior SQA", "Junior System Tester"],
    contactIntro: "I'm looking for junior SQA and system-testing roles.",
    cvPath: "assets/cv/yahel-malka-sqa-cv.pdf",
    cvFilename: "yahel-malka-sqa-cv.pdf"
  },

  fullstack: {
    id: "fullstack",
    label: "Junior Full-Stack Developer",
    path: "fullstack/",
    pageTitle: "Yahel Malka | Junior Full-Stack Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with hands-on full-stack project experience in React, Node.js, Express, MySQL and REST APIs.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · FULL STACK",
    headline: "Junior Full-Stack Developer",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Full-Stack Developer",
    professionalTitle: "Computer Science Graduate | Junior Full-Stack Developer",
    subheadline: "React, Node.js, MySQL and end-to-end integration",
    introduction: "Computer Science graduate who builds React interfaces, Node.js and Express APIs, and MySQL data, then connects the pieces and debugs them as one system.",
    primaryCta: { label: "View full-stack work", tab: "projects" },
    secondaryCta: { label: "GitHub ↗", href: "https://github.com/Yahelmalka" },
    quickFacts: [
      { value: "React", label: "Interface development" },
      { value: "Node.js", label: "Express REST APIs" },
      { value: "MySQL", label: "Data & integration" }
    ],
    skillCategoryOrder: ["web", "apis", "programming", "testing", "tools", "data", "professional"],
    highlightedCategory: "web",
    highlightedSkills: ["React.js", "JavaScript", "Node.js", "Express.js", "MySQL", "REST APIs", "HTML5", "CSS3", "Git", "Debugging"],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A full-stack platform I designed and developed end to end: React UI, Node.js/Express APIs, MySQL records and map-based collection workflows.",
        bullets: [
          "Built responsive React interfaces and interactive map workflows",
          "Developed REST APIs with Node.js and Express",
          "Designed and managed MySQL records for bins, locations and routes",
          "Connected front end and back end, then debugged issues across both"
        ],
        tags: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Git"]
      },
      rental: {
        summary: "A React application integrated with Solidity contracts, Ethers and MetaMask for deploy, sign, lock and payment flows.",
        bullets: [
          "Built the application interface and front-end/back-end interaction flows",
          "Created Solidity smart contracts for owners and tenants",
          "Integrated Ethers and MetaMask for signing and transactions",
          "Debugged and validated interactions between UI and contracts"
        ],
        tags: ["React.js", "Solidity", "Ethers", "MetaMask"]
      }
    },
    focusAreas: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Debugging"],
    preferredRoles: ["Junior Full-Stack Developer"],
    contactIntro: "I'm looking for junior full-stack roles.",
    cvPath: "assets/cv/yahel-malka-fullstack-cv.pdf",
    cvFilename: "yahel-malka-fullstack-cv.pdf"
  },

  frontend: {
    id: "frontend",
    label: "Junior Front-End Developer",
    path: "frontend/",
    pageTitle: "Yahel Malka | Junior Front-End Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with hands-on React, JavaScript, HTML and CSS experience, including maps, forms and API-driven interfaces.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · FRONT END",
    headline: "Junior Front-End Developer",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Front-End Developer",
    professionalTitle: "Computer Science Graduate | Junior Front-End Developer",
    subheadline: "React interfaces, responsive layouts and API-driven UI",
    introduction: "Computer Science graduate who builds React interfaces: maps, cards, forms and responsive layouts. I connect them to APIs and debug UI and integration issues until the flow works.",
    primaryCta: { label: "View interfaces", tab: "projects" },
    secondaryCta: { label: "GitHub ↗", href: "https://github.com/Yahelmalka" },
    quickFacts: [
      { value: "React", label: "UI & components" },
      { value: "CSS", label: "Responsive layouts" },
      { value: "APIs", label: "Front-end integration" }
    ],
    skillCategoryOrder: ["web", "programming", "apis", "testing", "tools", "professional", "data"],
    highlightedCategory: "web",
    highlightedSkills: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Debugging"],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A React interface for monitoring bins, managing locations and planning collection routes on an interactive map. Built to work on different screen sizes.",
        bullets: [
          "Built responsive React screens for bin management and map-based workflows",
          "Designed cards, forms and location views for day-to-day use",
          "Connected the UI to REST APIs for live fill-level and route data",
          "Debugged front-end state, layout and API-integration issues"
        ],
        tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Maps"]
      },
      rental: {
        summary: "A React UI for landlords and tenants to deploy, sign, lock and follow rental agreements through MetaMask.",
        bullets: [
          "Built the application interface and user-facing contract flows",
          "Connected React views to Ethers and MetaMask",
          "Handled on-screen payment, status and transaction states",
          "Tested and debugged success, rejection and invalid-input UI paths"
        ],
        tags: ["React.js", "JavaScript", "MetaMask", "UI"]
      }
    },
    focusAreas: ["React.js", "Responsive Design", "UI Development", "API Integration", "User Experience"],
    preferredRoles: ["Junior Front-End Developer"],
    contactIntro: "I'm looking for junior front-end roles.",
    cvPath: "assets/cv/yahel-malka-frontend-cv.pdf",
    cvFilename: "yahel-malka-frontend-cv.pdf"
  },

  backend: {
    id: "backend",
    label: "Junior Back-End Developer",
    path: "backend/",
    pageTitle: "Yahel Malka | Junior Back-End Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with hands-on Node.js, Express, MySQL and REST API project experience, including Postman testing and debugging.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · BACK END",
    headline: "Junior Back-End Developer",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Back-End Developer",
    professionalTitle: "Computer Science Graduate | Junior Back-End Developer",
    subheadline: "Node.js, Express, MySQL and REST APIs",
    introduction: "Computer Science graduate who builds Node.js and Express APIs, MySQL data and JSON responses, then tests them in Postman and debugs client-server issues.",
    primaryCta: { label: "View API work", tab: "projects" },
    secondaryCta: { label: "GitHub ↗", href: "https://github.com/Yahelmalka" },
    quickFacts: [
      { value: "Node.js", label: "Express REST APIs" },
      { value: "MySQL", label: "SQL & data management" },
      { value: "Postman", label: "API testing" }
    ],
    skillCategoryOrder: ["apis", "programming", "web", "testing", "tools", "professional", "data"],
    highlightedCategory: "apis",
    highlightedSkills: ["Node.js", "Express.js", "MySQL", "SQL", "REST APIs", "JSON", "Postman", "API Testing", "Debugging"],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "The back end of a waste-bin platform: Node.js and Express REST APIs, MySQL records, and JSON exchanges with the React client.",
        bullets: [
          "Developed REST APIs with Node.js and Express for bins, locations and routes",
          "Designed and managed MySQL records and queries",
          "Tested endpoints and JSON responses with Postman",
          "Debugged client-server and database integration issues"
        ],
        tags: ["Node.js", "Express.js", "MySQL", "REST APIs", "Postman"]
      },
      rental: {
        summary: "Smart-contract logic and application flows for deploy, sign, lock and payment, with debugging between the UI and the contract layer.",
        bullets: [
          "Created Solidity contract flows for owners and tenants",
          "Implemented rental and payment interactions",
          "Validated data passed between the application and contracts",
          "Debugged transaction and status-handling issues"
        ],
        tags: ["Solidity", "JSON", "Debugging"]
      }
    },
    focusAreas: ["Node.js", "Express.js", "MySQL", "REST APIs", "API Testing", "Client-Server Architecture"],
    preferredRoles: ["Junior Back-End Developer"],
    contactIntro: "I'm looking for junior back-end roles.",
    cvPath: "assets/cv/yahel-malka-backend-cv.pdf",
    cvFilename: "yahel-malka-backend-cv.pdf"
  },

  software: {
    id: "software",
    label: "Junior Software Developer",
    path: "software/",
    pageTitle: "Yahel Malka | Junior Software Developer Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with hands-on software projects in Python, JavaScript, C, SQL, Git and debugging.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · SOFTWARE",
    headline: "Junior Software Developer",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Software Developer",
    professionalTitle: "Computer Science Graduate | Junior Software Developer",
    subheadline: "Code, problem-solving and working software",
    introduction: "Computer Science graduate who writes software in Python, JavaScript, C and SQL. My studies covered data structures, algorithms and object-oriented thinking. My projects taught me to debug, use Git and finish an end-to-end flow.",
    primaryCta: { label: "View software projects", tab: "projects" },
    secondaryCta: { label: "GitHub ↗", href: "https://github.com/Yahelmalka" },
    quickFacts: [
      { value: "Python", label: "JavaScript · C · SQL" },
      { value: "CS", label: "Data structures & OOP" },
      { value: "Git", label: "Build & debug" }
    ],
    skillCategoryOrder: ["programming", "web", "apis", "testing", "tools", "professional", "data"],
    highlightedCategory: "programming",
    highlightedSkills: ["Python", "JavaScript", "C", "SQL", "Git", "Debugging", "Problem Solving"],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A complete software system with an interface, APIs, a database and map logic. I designed, implemented and debugged it as one product.",
        bullets: [
          "Implemented application logic across React, Node.js and MySQL",
          "Used Git to manage the project and collaborate on the codebase",
          "Debugged issues in application flow, data and integrations",
          "Applied problem-solving to route planning and bin-management features"
        ],
        tags: ["JavaScript", "SQL", "Git", "Debugging", "Problem Solving"]
      },
      rental: {
        summary: "A collaborative software project with contract logic, UI integration and careful handling of transaction states.",
        bullets: [
          "Wrote Solidity contract logic for rental agreements",
          "Integrated application components and wallet interactions",
          "Debugged edge cases in signing, locking and payments",
          "Worked with teammates on development, integration and testing"
        ],
        tags: ["JavaScript", "Solidity", "Git", "Debugging"]
      }
    },
    focusAreas: ["Python", "JavaScript", "C", "SQL", "Problem Solving", "Debugging", "Software Development"],
    preferredRoles: ["Junior Software Developer"],
    contactIntro: "I'm looking for junior software-developer roles.",
    cvPath: "assets/cv/yahel-malka-software-cv.pdf",
    cvFilename: "yahel-malka-software-cv.pdf"
  },

  data: {
    id: "data",
    label: "Junior Data Analyst",
    path: "data/",
    pageTitle: "Yahel Malka | Junior Data Analyst Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with SQL, Excel, Tableau and data-analysis experience, including MySQL work on a bin-monitoring project.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · DATA ANALYSIS",
    headline: "Junior Data Analyst",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Data Analyst",
    professionalTitle: "Computer Science Graduate | Junior Data Analyst",
    subheadline: "SQL, Excel, Tableau and careful analysis",
    introduction: "Computer Science graduate with hands-on work in SQL, Excel, Tableau and data analysis, including an HIT AI Business Analytics course and MySQL records in a bin-monitoring project.",
    primaryCta: { label: "See data-related work", tab: "projects" },
    secondaryCta: { label: "Skills dashboard", tab: "skills" },
    quickFacts: [
      { value: "SQL", label: "MySQL queries" },
      { value: "Excel", label: "Tableau & analysis" },
      { value: "HIT", label: "AI Business Analytics" }
    ],
    skillCategoryOrder: ["data", "apis", "programming", "tools", "professional", "testing", "web"],
    highlightedCategory: "data",
    highlightedSkills: ["SQL", "Excel", "Tableau", "Data Analysis", "MySQL", "Analytical Thinking", "Attention to Detail"],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A MySQL-backed platform that stores bin locations and fill-level records and uses that data to support collection-route planning on a map.",
        bullets: [
          "Designed and managed MySQL records for bins, locations and fill levels",
          "Used stored data to support route planning and operational views",
          "Validated that API responses matched the underlying records",
          "Worked with structured data across the client, API and database"
        ],
        tags: ["MySQL", "SQL", "Data Analysis", "JSON"]
      },
      rental: {
        summary: "A rental application that tracks contract and payment state. Useful practice in following structured records through a multi-step flow.",
        bullets: [
          "Followed contract and payment state through the application",
          "Checked that status values stayed consistent after each action",
          "Validated inputs before they changed stored state",
          "Debugged mismatches between the interface and underlying records"
        ],
        tags: ["Analytical Thinking", "Debugging"]
      }
    },
    focusAreas: ["SQL", "Excel", "Tableau", "Data Analysis", "Data Visualization", "MySQL"],
    preferredRoles: ["Junior Data Analyst"],
    contactIntro: "I'm looking for junior data-analyst roles.",
    cvPath: "assets/cv/yahel-malka-data-cv.pdf",
    cvFilename: "yahel-malka-data-cv.pdf"
  },

  "technical-support": {
    id: "technical-support",
    label: "Junior Technical Support",
    path: "technical-support/",
    pageTitle: "Yahel Malka | Junior Technical Support Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with troubleshooting, debugging, SQL, REST API and customer-communication experience from projects and operations work.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · TECHNICAL SUPPORT",
    headline: "Junior Technical Support Specialist",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Technical Support Specialist",
    professionalTitle: "Computer Science Graduate | Junior Technical Support Specialist",
    subheadline: "Troubleshooting, clear communication and calm under pressure",
    introduction: "Computer Science graduate who investigates issues across interfaces, APIs and databases, reproduces them and explains what happened in clear language. Operations and team-lead experience taught me to stay calm under pressure and keep people informed.",
    primaryCta: { label: "See how I troubleshoot", tab: "projects" },
    secondaryCta: { label: "Experience", tab: "experience" },
    quickFacts: [
      { value: "Debug", label: "Issue reproduction" },
      { value: "SQL", label: "APIs & Postman" },
      { value: "Ops", label: "Clear communication" }
    ],
    skillCategoryOrder: ["professional", "testing", "apis", "programming", "tools", "web", "data"],
    highlightedCategory: "professional",
    highlightedSkills: [
      "Software Troubleshooting",
      "Customer Communication",
      "Working Under Pressure",
      "Problem Solving",
      "Debugging",
      "SQL",
      "REST APIs",
      "Postman",
      "Independent Learning"
    ],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A multi-layer application where I reproduced and fixed issues across the React UI, REST APIs and MySQL. This is the same path a support investigation often follows.",
        bullets: [
          "Reproduced bugs across the interface, API and database",
          "Used Postman to check if a failure was in the client or the server",
          "Debugged integration issues and checked the underlying records",
          "Fixed the issues I found"
        ],
        tags: ["Troubleshooting", "Postman", "Debugging", "SQL"]
      },
      rental: {
        summary: "A wallet-connected rental flow where I investigated failed signatures, rejected transactions and invalid input with users in mind.",
        bullets: [
          "Reproduced success, rejection and invalid-input cases",
          "Traced problems between the UI, MetaMask and contract state",
          "Debugged transaction and status issues",
          "Checked that error paths were understandable"
        ],
        tags: ["Issue Reproduction", "Debugging", "Troubleshooting"]
      }
    },
    focusAreas: [
      "Technical Troubleshooting",
      "Issue Reproduction",
      "Root Cause Analysis",
      "Clear Communication",
      "Working Under Pressure"
    ],
    preferredRoles: ["Junior Technical Support", "Junior Product Support"],
    contactIntro: "I'm looking for junior technical or product support roles.",
    cvPath: "assets/cv/yahel-malka-support-cv.pdf",
    cvFilename: "yahel-malka-support-cv.pdf"
  },

  "product-operations": {
    id: "product-operations",
    label: "Junior Product Operations",
    path: "product-operations/",
    pageTitle: "Yahel Malka | Junior Product Operations Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with operational coordination, quality-minded project work, data checks and cross-team communication.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · PRODUCT OPERATIONS",
    headline: "Junior Product Operations Specialist",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Product Operations Specialist",
    professionalTitle: "Computer Science Graduate | Junior Product Operations Specialist",
    subheadline: "Accuracy, coordination and operational work",
    introduction: "Computer Science graduate with project work and real operations experience: coordinating requests, checking details and keeping communication clear when priorities change. I don't have a formal product-operations title yet. I use the same habits of checking details, following up and working with data.",
    primaryCta: { label: "View relevant work", tab: "experience" },
    secondaryCta: { label: "Projects", tab: "projects" },
    quickFacts: [
      { value: "Ops", label: "Coordination and follow-up" },
      { value: "QA", label: "Quality checks" },
      { value: "Data", label: "Excel · SQL · Tableau" }
    ],
    skillCategoryOrder: ["professional", "data", "testing", "apis", "tools", "programming", "web"],
    highlightedCategory: "professional",
    highlightedSkills: [
      "Attention to Detail",
      "Working Under Pressure",
      "Teamwork",
      "Customer Communication",
      "Data Analysis",
      "Excel",
      "Problem Solving",
      "Independent Learning"
    ],
    learningSkills: ["AI-powered tools"],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A live view of bins, fill levels and collection routes. The work depends on accurate configuration, reliable data and a process that is easy to follow.",
        bullets: [
          "Managed bin locations and fill-level records that drive day-to-day views",
          "Checked that map routes and stored data stayed aligned",
          "Tested and debugged the path from configuration to what the user sees",
          "Worked across interface, API and database so the process stayed usable"
        ],
        tags: ["Data Analysis", "Quality Checks", "MySQL"]
      },
      rental: {
        summary: "A multi-step rental process (deploy, sign, lock, pay) where I checked that each stage stayed accurate before the next one started.",
        bullets: [
          "Followed a defined process across several application states",
          "Validated that each step completed before the next began",
          "Checked edge cases that would break an operational flow",
          "Collaborated with teammates on integration and testing"
        ],
        tags: ["Process Monitoring", "Attention to Detail"]
      }
    },
    focusAreas: [
      "Technical Operations",
      "Quality Checks",
      "Attention to Detail",
      "Cross-Team Collaboration",
      "Operational follow-through"
    ],
    preferredRoles: ["Junior Product Operations", "Junior Technical Operations"],
    contactIntro: "I'm looking for junior product-operations or technical-operations roles.",
    cvPath: "assets/cv/yahel-malka-product-operations-cv.pdf",
    cvFilename: "yahel-malka-product-operations-cv.pdf"
  },

  "priority-developer": {
    id: "priority-developer",
    label: "Junior Priority Developer",
    path: "priority-developer/",
    pageTitle: "Yahel Malka | Junior Priority Developer Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with SQL, databases, APIs, data structures and troubleshooting experience, currently learning Priority.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · PRIORITY",
    headline: "Junior Priority Developer",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Priority Developer",
    professionalTitle: "Computer Science Graduate | Junior Priority Developer",
    subheadline: "SQL, business processes and systems that connect",
    introduction: "Computer Science graduate with a foundation in SQL, databases, data structures, APIs and troubleshooting. Priority is something I am learning. I want to use the SQL and systems skills I already have from my projects.",
    primaryCta: { label: "View systems work", tab: "projects" },
    secondaryCta: { label: "Skills dashboard", tab: "skills" },
    quickFacts: [
      { value: "SQL", label: "Databases & records" },
      { value: "APIs", label: "System integration" },
      { value: "Priority", label: "Currently learning" }
    ],
    skillCategoryOrder: ["apis", "programming", "data", "testing", "professional", "tools", "web"],
    highlightedCategory: "apis",
    highlightedSkills: [
      "SQL",
      "MySQL",
      "REST APIs",
      "JSON",
      "Debugging",
      "Analytical Thinking",
      "Problem Solving",
      "Independent Learning",
      "Software Troubleshooting"
    ],
    learningSkills: ["Priority"],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A business workflow for bins, locations and collection routes. The data is stored in MySQL, exposed through APIs and used through an operational interface.",
        bullets: [
          "Modeled and managed MySQL data for a real operational process",
          "Connected application layers through REST APIs",
          "Debugged mismatches between stored data and what the process needed",
          "Thought in terms of records, status and the path a request takes"
        ],
        tags: ["SQL", "MySQL", "REST APIs", "System Integration"]
      },
      rental: {
        summary: "A defined business process (deploy, sign, lock, pay) implemented as connected application and contract steps.",
        bullets: [
          "Mapped a multi-step business process into application flows",
          "Kept contract and payment state consistent across steps",
          "Debugged integration issues between layers",
          "Validated that each stage of the process completed correctly"
        ],
        tags: ["Business Processes", "APIs", "Debugging"]
      }
    },
    focusAreas: ["SQL", "Databases", "System Integration", "APIs", "Analytical Thinking", "Priority (learning)"],
    preferredRoles: ["Junior Priority Developer"],
    contactIntro: "I'm looking for junior Priority or ERP developer roles.",
    cvPath: "assets/cv/yahel-malka-priority-cv.pdf",
    cvFilename: "yahel-malka-priority-cv.pdf"
  },

  "product-manager": {
    id: "product-manager",
    label: "Junior Product Manager",
    path: "product-manager/",
    pageTitle: "Yahel Malka | Junior Product Manager Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with project work, user flows, APIs, data analysis and operations experience, looking for a junior product role.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · PRODUCT",
    headline: "Junior Product Manager",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Product Manager",
    professionalTitle: "Computer Science Graduate | Junior Product Manager",
    subheadline: "User needs, application flows and clear communication",
    introduction: "Computer Science graduate with hands-on project work turning requirements into application flows. I built and tested user-facing features, APIs and data views. I don't have a formal product-manager title yet. I want to grow in a junior product role using the same work: understanding what users need, checking that a flow works, and coordinating with others.",
    primaryCta: { label: "View relevant work", tab: "projects" },
    secondaryCta: { label: "Experience", tab: "experience" },
    quickFacts: [
      { value: "Flows", label: "Requirements to features" },
      { value: "Data", label: "Excel · Tableau · SQL" },
      { value: "Ops", label: "Coordination under pressure" }
    ],
    skillCategoryOrder: ["professional", "data", "web", "apis", "testing", "tools", "programming"],
    highlightedCategory: "professional",
    highlightedSkills: [
      "Analytical Thinking",
      "Problem Solving",
      "Attention to Detail",
      "Customer Communication",
      "Teamwork",
      "Data Analysis",
      "Excel",
      "Independent Learning"
    ],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A waste-bin platform where I turned functional needs into features: bin data, locations, fill levels and collection routes.",
        bullets: [
          "Turned functional requirements into application features and user flows",
          "Built user-facing screens for managing bin data, locations and fill levels",
          "Connected frontend, backend, REST APIs and MySQL as one product",
          "Tested end-to-end flows and checked issues across the system"
        ],
        tags: ["User Flows", "React.js", "REST APIs", "MySQL"]
      },
      rental: {
        summary: "A rental product for owners and tenants. I helped turn those two user needs into deploy, sign, lock and payment flows.",
        bullets: [
          "Turned owner and tenant requirements into application workflows",
          "Worked with teammates on rental and payment flows",
          "Integrated the interface with Solidity contracts",
          "Tested the full workflow and fixed integration issues"
        ],
        tags: ["User Flows", "Collaboration", "Testing"]
      }
    },
    focusAreas: ["Requirements Analysis", "User Flows", "Data Analysis", "Cross-team work"],
    preferredRoles: ["Junior Product Manager"],
    contactIntro: "I'm looking for junior product-manager roles.",
    cvPath: "assets/cv/yahel-malka-product-manager-cv.pdf",
    cvFilename: "yahel-malka-product-manager-cv.pdf"
  },

  "project-manager": {
    id: "project-manager",
    label: "Junior Project Manager",
    path: "project-manager/",
    pageTitle: "Yahel Malka | Junior Project Manager Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with team leadership, operations coordination and end-to-end software project work, looking for a junior project-manager role.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · PROJECT MANAGEMENT",
    headline: "Junior Project Manager",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Project Manager",
    professionalTitle: "Computer Science Graduate | Junior Project Manager",
    subheadline: "Planning, follow-up and technical project work",
    introduction: "Computer Science graduate with hands-on work building software end to end, plus real experience leading a team of 14 and coordinating operations. I don't have a formal project-manager title yet. I want a junior project role where I can plan work, follow up, and stay close to the technical details.",
    primaryCta: { label: "View experience", tab: "experience" },
    secondaryCta: { label: "Projects", tab: "projects" },
    quickFacts: [
      { value: "Lead", label: "Team of 14 in the IDF" },
      { value: "Ops", label: "Requests and follow-up" },
      { value: "Build", label: "End-to-end projects" }
    ],
    skillCategoryOrder: ["professional", "web", "apis", "testing", "tools", "data", "programming"],
    highlightedCategory: "professional",
    highlightedSkills: [
      "Teamwork",
      "Customer Communication",
      "Working Under Pressure",
      "Problem Solving",
      "Analytical Thinking",
      "Independent Learning",
      "Attention to Detail"
    ],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A full-stack project where I turned requirements into features, built the system, and checked that the flow worked end to end.",
        bullets: [
          "Turned functional requirements into application features and user flows",
          "Built frontend and backend pieces and connected them through REST APIs",
          "Managed and checked application data in MySQL",
          "Tested the full flow and fixed issues across the system"
        ],
        tags: ["Requirements", "Coordination", "React.js", "Node.js"]
      },
      rental: {
        summary: "A group software project. I helped turn owner and tenant needs into rental and payment workflows, then tested the result.",
        bullets: [
          "Turned owner and tenant requirements into application workflows",
          "Worked with teammates on design, build and testing",
          "Integrated frontend pieces with Solidity contracts",
          "Tested end-to-end workflows and fixed integration issues"
        ],
        tags: ["Teamwork", "User Flows", "Testing"]
      }
    },
    focusAreas: ["Project Coordination", "Requirements Analysis", "Prioritization", "Communication"],
    preferredRoles: ["Junior Project Manager"],
    contactIntro: "I'm looking for junior project-manager roles in a technical environment.",
    cvPath: "assets/cv/yahel-malka-project-manager-cv.pdf",
    cvFilename: "yahel-malka-project-manager-cv.pdf"
  },

  cybersecurity: {
    id: "cybersecurity",
    label: "Junior Cybersecurity",
    path: "cybersecurity/",
    pageTitle: "Yahel Malka | Junior Cybersecurity Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with troubleshooting, APIs, databases, debugging and networking fundamentals, looking for a junior cybersecurity role.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · CYBERSECURITY",
    headline: "Junior Cybersecurity",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior Cybersecurity",
    professionalTitle: "Computer Science Graduate | Junior Cybersecurity",
    subheadline: "Troubleshooting, APIs and careful system checks",
    introduction: "Computer Science graduate with hands-on work investigating issues across frontend, backend, REST APIs and databases. I don't have a formal cybersecurity title yet. I want to grow in a junior security role using the same habits: checking details, tracing how systems connect, and finding why something failed.",
    primaryCta: { label: "View relevant work", tab: "projects" },
    secondaryCta: { label: "Skills dashboard", tab: "skills" },
    quickFacts: [
      { value: "Debug", label: "APIs · SQL · systems" },
      { value: "Net", label: "TCP/IP · HTTP/HTTPS" },
      { value: "Test", label: "Postman · E2E checks" }
    ],
    skillCategoryOrder: ["networking", "apis", "testing", "programming", "professional", "tools", "web", "data"],
    highlightedCategory: "networking",
    highlightedSkills: [
      "TCP/IP",
      "HTTP/HTTPS",
      "Client-Server",
      "REST APIs",
      "MySQL",
      "Debugging",
      "API Testing",
      "Software Troubleshooting",
      "Problem Solving",
      "Attention to Detail"
    ],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "An end-to-end application where I checked how the interface, REST APIs and MySQL stay in sync, then found and fixed failures across those layers.",
        bullets: [
          "Built backend pieces with Node.js, Express and MySQL",
          "Connected frontend and backend through REST APIs",
          "Checked API and data flows with Postman",
          "Debugged issues across the interface, API and database"
        ],
        tags: ["REST APIs", "Debugging", "MySQL", "Postman"]
      },
      rental: {
        summary: "A wallet-connected rental flow where I checked signing, payments and contract state, including cases that should fail.",
        bullets: [
          "Built Solidity contracts for owner and tenant workflows",
          "Integrated the interface with blockchain interactions",
          "Tested end-to-end contract and application flows",
          "Debugged integration issues between system components"
        ],
        tags: ["Troubleshooting", "Debugging", "E2E Testing"]
      }
    },
    focusAreas: ["Technical Troubleshooting", "APIs", "Databases", "Debugging", "Networking Fundamentals"],
    preferredRoles: ["Junior Cybersecurity"],
    contactIntro: "I'm looking for junior cybersecurity and information-security roles.",
    cvPath: "assets/cv/yahel-malka-cybersecurity-cv.pdf",
    cvFilename: "yahel-malka-cybersecurity-cv.pdf"
  },

  "ai-engineer": {
    id: "ai-engineer",
    label: "Junior AI Solution Engineer",
    path: "ai-engineer/",
    pageTitle: "Yahel Malka | Junior AI Solution Engineer Portfolio",
    seoDescription: "Yahel Malka. Computer Science graduate with Python, SQL, data analysis and an AI Business Analytics course, looking for a junior AI solutions role.",
    eyebrow: "COMPUTER SCIENCE GRADUATE · AI SOLUTIONS",
    headline: "Junior AI Solution Engineer",
    headlineLead: "Yahel Malka",
    headlineAccent: "Junior AI Solution Engineer",
    professionalTitle: "Computer Science Graduate | Junior AI Solution Engineer",
    subheadline: "Python, data analysis and reliable software",
    introduction: "Computer Science graduate with project work in Python, SQL, APIs and end-to-end testing, plus an HIT AI Business Analytics course. I don't have a formal AI-engineer title yet. I want to grow in a junior AI solutions role using the same work: understanding data, building software, and checking that a flow is reliable.",
    primaryCta: { label: "View relevant work", tab: "projects" },
    secondaryCta: { label: "Skills dashboard", tab: "skills" },
    quickFacts: [
      { value: "Python", label: "SQL · data work" },
      { value: "HIT", label: "AI Business Analytics" },
      { value: "Build", label: "APIs · testing · debug" }
    ],
    skillCategoryOrder: ["programming", "data", "apis", "testing", "web", "professional", "tools"],
    highlightedCategory: "data",
    highlightedSkills: [
      "Python",
      "SQL",
      "Data Analysis",
      "Excel",
      "Tableau",
      "Data Visualization",
      "REST APIs",
      "Debugging",
      "Problem Solving",
      "Analytical Thinking"
    ],
    learningSkills: [],
    projectOrder: ["bin", "rental"],
    highlightedProjectDetails: {
      bin: {
        summary: "A full-stack application where I connected React, Node.js, REST APIs and MySQL, then checked the data flow and fixed issues across those layers.",
        bullets: [
          "Built backend functionality and REST API endpoints",
          "Managed application data flows and MySQL records",
          "Tested APIs and end-to-end flows with Postman",
          "Debugged issues across frontend, backend, API and database"
        ],
        tags: ["Python", "SQL", "REST APIs", "MySQL"]
      },
      rental: {
        summary: "A group software project with owner and tenant workflows. I helped connect the interface to contract logic and checked the full flow.",
        bullets: [
          "Built Solidity contracts for owner and tenant workflows",
          "Integrated frontend pieces with blockchain interactions",
          "Implemented rental, payment and contract flows",
          "Tested the full workflow and fixed integration issues"
        ],
        tags: ["Debugging", "APIs", "Collaboration"]
      }
    },
    focusAreas: ["Python", "SQL", "Data Analysis", "APIs", "Debugging"],
    preferredRoles: ["Junior AI Solution Engineer"],
    contactIntro: "I'm looking for junior AI solutions roles.",
    cvPath: "assets/cv/yahel-malka-ai-cv.pdf",
    cvFilename: "yahel-malka-ai-cv.pdf"
  }
};
