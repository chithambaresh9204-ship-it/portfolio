export const personalInfo = {
  name: "CHITHAMBARESH S",
  title: "Aspiring AI/ML Engineer | Software Developer (SDE)",
  tagline: "Building scalable ML pipelines, explainable AI architectures, and resilient production systems.",
  location: "Tenkasi, Tamil Nadu, India",
  phone: "+91 94420 61961",
  phoneRaw: "+919442061961",
  email: "chithambaresh9204@gmail.com",
  linkedin: "https://linkedin.com/in/chithambaresh-s-9b8a44224",
  linkedinHandle: "chithambaresh-s-9b8a44224",
  github: "https://github.com/chithambaresh9204-ship-it",
  githubHandle: "chithambaresh9204-ship-it",
  avatar: "/profile.jpg",
  cgpa: "9.16 / 10",
  university: "Kalasalingam Academy of Research and Education",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  duration: "2023 – 2027",
  bio: [
    "I am a B.Tech Computer Science & Engineering (AI & ML) undergraduate at Kalasalingam Academy of Research and Education with a 9.16/10 CGPA. I specialize in building end-to-end Machine Learning pipelines, stacking ensembles, and explainable AI (XAI) systems that bring transparency to high-stakes algorithmic decisions.",
    "Bridging the gap between cutting-edge AI research and robust software engineering, I design and deploy production-grade predictive models via FastAPI microservices, backed by PostgreSQL, TimescaleDB, and Redis. My work spans impactful real-world domains including smart precision agriculture, healthcare risk diagnostics, and fleet telematics analytics."
  ],
  stats: [
    { label: "B.Tech CGPA", value: "9.16 / 10", subtitle: "CSE (AI & ML)" },
    { label: "Production Projects", value: "4+", subtitle: "Full-Stack & ML" },
    { label: "Test Coverage", value: "95.7%", subtitle: "1,657 Automated Tests" },
    { label: "Internships", value: "2", subtitle: "Infosys & NSIC" }
  ]
};

export const educationData = [
  {
    institution: "Kalasalingam Academy of Research and Education",
    shortName: "KARE",
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    period: "2023 – 2027",
    score: "CGPA: 9.16 / 10",
    scoreHighlight: "Top Academic Standing",
    location: "Krishnankoil, Tamil Nadu",
    status: "Currently Pursuing (3rd Year)",
    highlights: [
      "Specialization in Artificial Intelligence, Machine Learning, and Neural Networks.",
      "Core coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Machine Learning, Deep Learning, Cloud Computing.",
      "Active participant in technical symposiums, research seminars, and hackathons."
    ]
  },
  {
    institution: "Esakki Vidyashram (CBSE)",
    shortName: "Esakki Vidyashram",
    degree: "Higher Secondary Certificate (HSC) — Class XII",
    period: "2021 – 2023",
    score: "80.2%",
    scoreHighlight: "CBSE Board",
    location: "Tenkasi, Tamil Nadu",
    status: "Completed",
    highlights: [
      "Specialized in Physics, Chemistry, Mathematics, and Computer Science.",
      "Strengthened foundations in analytical problem solving and algorithmic logic."
    ]
  },
  {
    institution: "Sri Parasakthi Vidyalaya (CBSE)",
    shortName: "Sri Parasakthi Vidyalaya",
    degree: "Secondary School Leaving Certificate (SSLC) — Class X",
    period: "2021",
    score: "73.6%",
    scoreHighlight: "CBSE Board",
    location: "Courtallam, Tamil Nadu",
    status: "Completed",
    highlights: [
      "Rigorous secondary education with distinction in mathematics and science.",
      "Participated in school science exhibitions and inter-school academic competitions."
    ]
  }
];

export const experienceData = [
  {
    role: "AI/ML Virtual Intern",
    company: "Infosys Springboard",
    period: "Oct 2026 – Present",
    location: "Remote",
    badge: "Current Role",
    summary: "Architecting and developing core modules for Sasyam AI, an enterprise-grade 8-week smart precision irrigation platform.",
    responsibilities: [
      "Engineered comprehensive platform modules for Sasyam AI: secure JWT-based authentication, farmer dashboard, geofenced field registration, telemetry analytics, threshold alerts, and real-time ML irrigation prediction engine.",
      "Constructed a high-performance modern user interface utilizing React and Next.js Progressive Web App (PWA) standards for offline-first agricultural usability.",
      "Built resilient REST APIs using FastAPI and PostgreSQL, integrating real-time weather forecasts and predictive precipitation models.",
      "Designed and implemented high-throughput IoT & weather ingestion pipelines leveraging PostgreSQL, TimescaleDB, and MQTT brokers.",
      "Trained, benchmarked, and tracked MLflow-monitored machine learning models including Random Forest, Gradient Boosting, and LSTM recurrent neural networks for continuous soil moisture forecasting.",
      "Developing multi-lingual regional translation (leveraging Sarvam AI), automated Twilio SMS dispatches, and Web Push notifications to notify farmers in real-time."
    ],
    tech: ["FastAPI", "React", "Next.js PWA", "PostgreSQL", "TimescaleDB", "MQTT", "MLflow", "Random Forest", "Gradient Boosting", "LSTM", "Twilio", "Sarvam AI", "Docker"]
  },
  {
    role: "Machine Learning Intern",
    company: "National Small Industries Corporation (NSIC)",
    period: "May 2025 – Jun 2025",
    location: "Chennai, Tamil Nadu, India",
    badge: "Completed",
    summary: "Developed automated data preprocessing, statistical exploration, and supervised machine learning pipelines for predictive analytics.",
    responsibilities: [
      "Architected data ingestion, cleaning, outlier detection, and Exploratory Data Analysis (EDA) pipelines using Python, Pandas, and NumPy.",
      "Engineered tabular feature transformations, imputations, normalization, and categorical encodings for diverse industrial datasets.",
      "Trained, validated, and evaluated supervised classification algorithms using Scikit-learn (Logistic Regression, Decision Trees, Random Forests, Support Vector Machines).",
      "Conducted hyperparameter optimization using GridSearchCV and cross-validation, generating comprehensive ROC-AUC and precision-recall performance reports."
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "EDA", "Supervised Learning", "Hyperparameter Tuning", "Matplotlib", "Seaborn"]
  }
];

export const projectsData = [
  {
    id: "aegis-agent",
    title: "AegisAgent — Human-in-the-Loop Security Gateway for AI Agents",
    tagline: "Sub-millisecond policy engine & tamper-evident audit trail for autonomous AI agents",
    category: "Systems & Security",
    featured: true,
    highlights: [
      "~0.05ms p50 latency over 297 red-team attack cases",
      "1,657 automated tests with 95.7% code coverage",
      "Tamper-evident per-tenant SHA-256 hash chains",
      "Live WebSocket approval console"
    ],
    description: "A production-grade human-in-the-loop security gateway that monitors, intercepts, and scores every tool invocation executed by autonomous AI agents (SQL queries, shell executions, filesystem operations, and network calls) with auto-approve, hold-for-review, or block decisions.",
    deepDive: "Features a rule-based policy engine achieving ultra-low ~0.05ms p50 latency over a comprehensive 297-case red-team test corpus. Built an immutable, tamper-evident audit ledger using per-tenant cryptographic SHA-256 hash chains combined with PostgreSQL Row-Level Security (RLS) for absolute tenant isolation. Includes a real-time React/TypeScript approver console delivering sub-second manual verification workflows via WebSockets.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Model Context Protocol (MCP)", "React", "TypeScript", "WebSockets", "Docker", "Pytest"],
    metrics: [
      { label: "P50 Latency", value: "~0.05ms" },
      { label: "Corpus Size", value: "297 Red-Team Cases" },
      { label: "Automated Tests", value: "1,657 Tests" },
      { label: "Code Coverage", value: "95.7%" }
    ],
    github: "https://github.com/chithambaresh9204-ship-it",
    demo: null
  },
  {
    id: "osteoporosis-xai",
    title: "Explainable AI-Based Osteoporosis Risk Prediction",
    tagline: "Stacking ensemble clinical decision support with SHAP & LIME interpretability",
    category: "AI / ML & XAI",
    featured: true,
    highlights: [
      "Heterogeneous stacking ensemble architecture",
      "SHAP, LIME, and Partial Dependence Plots (PDP)",
      "Real-time clinical transparency for medical practitioners",
      "High ROC-AUC classification performance"
    ],
    description: "An advanced Explainable AI (XAI) clinical framework that predicts patient osteoporosis risk using a multi-model stacking ensemble, coupled with real-time explainability tools to demystify black-box algorithmic recommendations for healthcare clinicians.",
    deepDive: "Integrated Random Forest, Gradient Boosting, Support Vector Machines (SVM), and Logistic Regression into an optimized meta-learner. Integrated SHAP (Shapley Additive exPlanations) summary and force plots alongside LIME local surrogates to identify patient-specific bone mineral density risk drivers, providing actionable explanations directly aligned with medical compliance standards.",
    tech: ["Random Forest", "Gradient Boosting", "SVM", "Logistic Regression", "SHAP", "LIME", "Partial Dependence Plots (PDP)", "Scikit-learn", "Python", "Pandas", "NumPy"],
    metrics: [
      { label: "Base Models", value: "4 Diverse Classifiers" },
      { label: "Ensemble Type", value: "Optimized Stacking" },
      { label: "Explainability", value: "SHAP + LIME + PDP" },
      { label: "Domain", value: "Healthcare Diagnostics" }
    ],
    github: "https://github.com/chithambaresh9204-ship-it",
    demo: null
  },
  {
    id: "smart-irrigation",
    title: "AI-Powered Smart Irrigation System (Sasyam AI)",
    tagline: "IoT telemetry ingestion, LSTM moisture forecasting & farmer-first alerts",
    category: "Smart IoT & Web",
    featured: true,
    highlights: [
      "Time-series soil moisture forecasting with LSTM & Gradient Boosting",
      "Real-time MQTT telemetry & TimescaleDB time-series storage",
      "Farmer-first icon-driven PWA UI with multi-lingual voice/translation",
      "Automated Twilio SMS dispatches and automated PDF/CSV reports"
    ],
    description: "An end-to-end smart precision agriculture platform combining ground IoT soil moisture telemetry, live meteorological forecasts, and crop-stage agronomic data to calculate precise irrigation schedules, saving water and optimizing crop yields.",
    deepDive: "Engineered during the Infosys Springboard internship. The architecture integrates an MQTT telemetry broker feeding into TimescaleDB and PostgreSQL. ML models (Random Forest, Gradient Boosting, and LSTM networks) are systematically tracked using MLflow to deliver accurate future soil moisture levels. Delivers automated alerts via Twilio SMS, push notifications, and localized regional translations.",
    tech: ["FastAPI", "LSTM", "MLflow", "Next.js", "PostgreSQL", "TimescaleDB", "MQTT", "Docker", "Twilio", "Sarvam AI"],
    metrics: [
      { label: "Forecasting Model", value: "LSTM Recurrent NN" },
      { label: "Telemetry Broker", value: "MQTT + TimescaleDB" },
      { label: "Model Registry", value: "MLflow Tracked" },
      { label: "Alert Dispatch", value: "Twilio SMS & Push" }
    ],
    github: "https://github.com/chithambaresh9204-ship-it",
    demo: null
  },
  {
    id: "driver-behaviour",
    title: "Driver Behaviour Analysis & Risk Prediction",
    tagline: "Machine learning pipeline classifying driving risk from vehicle trip telematics",
    category: "AI / ML & XAI",
    featured: false,
    highlights: [
      "Telematics feature extraction from acceleration and GPS data",
      "Supervised risk classification across driving profiles",
      "Actionable safety insights for commercial fleet operators",
      "Open-source codebase on GitHub"
    ],
    description: "A machine learning predictive pipeline that processes multi-dimensional vehicle trip data to evaluate, categorize, and predict driver risk scores for commercial fleet management and insurance telematics.",
    deepDive: "Performs rigorous feature engineering on vehicular sensor data—including sudden braking events, harsh acceleration spikes, rapid lane changes, and cornering anomalies. Evaluates driver habits to classify trips into risk categories, delivering statistical safety summaries and fleet safety dashboards.",
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn", "Feature Engineering"],
    metrics: [
      { label: "Input Data", value: "Trip Telematics" },
      { label: "Pipeline", value: "End-to-End Scikit-learn" },
      { label: "Safety Metrics", value: "Aggression & Risk Index" },
      { label: "Target", value: "Commercial Fleets" }
    ],
    github: "https://github.com/chithambaresh9204-ship-it",
    demo: null
  }
];

export const skillsData = [
  {
    category: "Languages & Databases",
    description: "Core programming languages and relational/time-series data storage systems",
    skills: [
      { name: "Python", level: "Advanced", icon: "Code2" },
      { name: "Java", level: "Proficient", icon: "Code2" },
      { name: "C", level: "Proficient", icon: "Terminal" },
      { name: "C#", level: "Intermediate", icon: "Terminal" },
      { name: "SQL", level: "Advanced", icon: "Database" },
      { name: "PostgreSQL", level: "Advanced", icon: "Database" },
      { name: "TimescaleDB", level: "Proficient", icon: "Database" }
    ]
  },
  {
    category: "ML & Explainable AI",
    description: "Supervised algorithms, deep neural architectures, and model interpretability frameworks",
    skills: [
      { name: "Scikit-learn", level: "Advanced", icon: "Cpu" },
      { name: "LSTM (Deep Learning)", level: "Proficient", icon: "Cpu" },
      { name: "Random Forest", level: "Advanced", icon: "Cpu" },
      { name: "Gradient Boosting", level: "Advanced", icon: "Cpu" },
      { name: "Support Vector Machines (SVM)", level: "Advanced", icon: "Cpu" },
      { name: "Stacking Ensembles", level: "Advanced", icon: "Layers" },
      { name: "SHAP (XAI)", level: "Advanced", icon: "Eye" },
      { name: "LIME (XAI)", level: "Advanced", icon: "Eye" },
      { name: "Partial Dependence Plots (PDP)", level: "Proficient", icon: "TrendingUp" },
      { name: "MLflow", level: "Proficient", icon: "Activity" },
      { name: "NumPy & Pandas", level: "Advanced", icon: "Binary" },
      { name: "Exploratory Data Analysis (EDA)", level: "Advanced", icon: "BarChart3" }
    ]
  },
  {
    category: "Full-Stack, APIs & Cloud",
    description: "Scalable backend microservices, modern frontends, protocols, and cloud devops",
    skills: [
      { name: "React", level: "Advanced", icon: "Layout" },
      { name: "Next.js", level: "Proficient", icon: "Globe" },
      { name: "FastAPI", level: "Advanced", icon: "Zap" },
      { name: "REST APIs", level: "Advanced", icon: "Network" },
      { name: "Sarvam AI", level: "Proficient", icon: "Sparkles" },
      { name: "MQTT Protocols", level: "Proficient", icon: "Radio" },
      { name: "Docker", level: "Proficient", icon: "Box" },
      { name: "CI/CD (GitHub Actions)", level: "Proficient", icon: "GitBranch" },
      { name: "Git & GitHub", level: "Advanced", icon: "GitCommit" }
    ]
  },
  {
    category: "Tools & Spoken Languages",
    description: "Developer workflows, alerting integrations, and multilingual communication",
    skills: [
      { name: "Jupyter Notebook", level: "Advanced", icon: "BookOpen" },
      { name: "Twilio API", level: "Proficient", icon: "MessageSquare" },
      { name: "English", level: "Fluent (Professional)", icon: "Languages" },
      { name: "Tamil", level: "Native", icon: "Languages" }
    ]
  }
];

export const achievementsData = [
  {
    title: "Content Creator Lead",
    organization: "10xKARE",
    period: "2024 – 2025",
    type: "Leadership",
    icon: "Megaphone",
    description: "Spearheaded technical content generation, digital brand positioning, and student community outreach across major university chapter initiatives, prominently including EduHack Kare26 hackathon."
  },
  {
    title: "IEEE Smart KARE Hackathon Finalist / Rapid Prototyper",
    organization: "IEEE Student Branch",
    period: "2024",
    type: "Hackathon",
    icon: "Trophy",
    description: "Executed rapid prototyping under high-intensity sprint conditions, designing and implementing practical hardware/software integrated solutions."
  },
  {
    title: "Academic Excellence Distinction",
    organization: "Kalasalingam Academy of Research and Education",
    period: "2023 – Present",
    type: "Academic",
    icon: "Award",
    description: "Maintained a consistent CGPA of 9.16/10 across rigorous engineering coursework in Artificial Intelligence, Machine Learning, and Computer Systems."
  }
];
