export type Fact = { k: string; v: string };
export type Job = { date: string; role: string; org: string; desc: string; tags: string[] };
export type Project = {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};
export type School = { degree: string; school: string; date: string };
export type Social = { label: string; href: string; icon: "github" | "linkedin" | "x" | "resume" };

export const profile = {
  name: "Bronson Bagwell",
  initials: "BB",
  role: "Data Science & Analytics Manager",
  location: "Atlanta, GA",
  email: "bronsonbwork@gmail.com",
  available: true,
  statusLabel: "Open to opportunities",
  currentRole: "Data Science Manager · Razorfish",
  heroTitle: "I turn complex data into decisions.",
  heroSub:
    "I build the measurement frameworks, models, and AI workflows that turn raw data into clear, executive-ready answers.",
  aboutLede:
    "I'm a data scientist and analytics manager who cares about the decision at the end of the dashboard — not just the dashboard.",
  aboutBody:
    "I specialize in marketing measurement for media and advertising clients: KPI frameworks, marketing mix models, and AI-assisted reporting that turn complex data into narratives executives can act on. Lately I've been leading agentic-AI adoption across analytics — embedding AI agents and automation into how reporting actually gets done.",
  facts: [
    { k: "Currently", v: "Manager, Data Science & Analytics at Razorfish" },
    { k: "Focus", v: "Measurement, modeling & decision-ready reporting" },
    { k: "Stack", v: "SQL · Python · R · BigQuery · Power BI" },
    { k: "Lately", v: "Agentic AI & automation for analytics" },
  ] as Fact[],
  skills: [
    "SQL", "Python", "R", "BigQuery", "GCP", "Vertex AI", "Power BI", "Tableau", "Looker Studio", "MMM", "Attribution", "A/B Testing", "Incrementality", "Agentic AI", "LLM Integration", "Forecasting",
  ],
};

export const experience: Job[] = [
  {
    date: "Apr 2026 — Present",
    role: "Manager, Data Science & Analytics",
    org: "Razorfish · Chevron",
    desc:
      "Lead data strategy for Chevron's marketing analytics, setting standards for QA, reporting, and executive deliverables. On the agency's AI adoption team I rolled out agentic AI and AI agents (Claude / Vertex AI) loaded with full QBR and report history, and built automation that cut manual reporting effort by 40%.",
    tags: ["Agentic AI", "Vertex AI", "SQL", "Executive Reporting"],
  },
  {
    date: "Jul 2024 — Mar 2026",
    role: "Senior Data Science & Analytics Analyst",
    org: "Razorfish · Northrop Grumman",
    desc:
      "Built executive dashboards consolidating 160+ KPIs across platforms into a unified index scoring system, giving leadership a single performance view. Automated reporting pipelines through normalization and feature engineering, cutting manual processing time by 40%.",
    tags: ["Power BI", "SQL", "Feature Engineering", "KPIs"],
  },
  {
    date: "Aug 2022 — Jul 2024",
    role: "Senior Paid Advertising Specialist",
    org: "ChoiceLocal",
    desc:
      "Drove $200K+ in incremental client revenue across Google and Meta, lifting conversion rates 15% through trend analysis and A/B testing. Deployed audience segmentation and predictive modeling across 5+ accounts to raise CTR and cut CPA.",
    tags: ["Google Ads", "Meta Ads", "A/B Testing", "Segmentation"],
  },
  {
    date: "Aug 2023 — Apr 2024",
    role: "Data Analyst Intern",
    org: "Honda of America · Master's Program",
    desc:
      "Built a scikit-learn / pandas model to predict assembly-line bottlenecks, improving production efficiency 5%. Co-led a 3-person team on a supply-chain analysis whose findings informed lead-time and inventory-turnover improvements.",
    tags: ["Python", "scikit-learn", "pandas", "Supply Chain"],
  },
];

export const projects: Project[] = [
  {
    title: "Meridian MMM",
    desc:
      "A portfolio-ready marketing mix model with a fast, deterministic ROI pipeline plus a runnable Google Meridian validation and stakeholder-ready reporting output.",
    tags: ["Python", "Marketing Mix Modeling", "Google Meridian"],
    github: "https://github.com/BronsonBagwell/Meridian_MMM",
    featured: true,
  },
  {
    title: "Monte Carlo Simulation",
    desc:
      "Monte Carlo simulation for inventory optimization and pricing strategy — modeling demand uncertainty to find better stocking and price decisions.",
    tags: ["R", "Simulation", "Optimization"],
    github: "https://github.com/BronsonBagwell/Simulation",
  },
  {
    title: "Regularization Methods",
    desc:
      "Ridge, LASSO, and Elastic Net regression with K-Fold cross-validation on the Boston Housing data, comparing shrinkage methods for predictive accuracy.",
    tags: ["R", "Regularization", "Cross-Validation"],
    github: "https://github.com/BronsonBagwell/Regularization_Methods",
  },
  {
    title: "World Happiness Analysis",
    desc:
      "Exploratory analysis and predictive modeling on the UN World Happiness data using Linear Regression and Random Forest.",
    tags: ["Python", "EDA", "Random Forest"],
    github: "https://github.com/BronsonBagwell/World_Happiness",
  },
  {
    title: "Neural Net vs. Random Forest",
    desc:
      "A head-to-head comparison of a neural network and a random forest for predicting graduate-admission outcomes.",
    tags: ["R", "Neural Networks", "Classification"],
    github: "https://github.com/BronsonBagwell/Neural_Network",
  },
  {
    title: "Cluster Analysis",
    desc:
      "K-Means and hierarchical clustering on the Wine dataset, with validation to choose the optimal number of clusters.",
    tags: ["R", "Clustering", "Unsupervised"],
    github: "https://github.com/BronsonBagwell/Cluster_Analysis",
  },
];

export const education: School[] = [
  { degree: "Master of Business Analytics (STEM)", school: "The Ohio State University · 3.6 GPA", date: "2023 — 2024" },
  { degree: "B.B.A. Marketing", school: "Kennesaw State University · 3.8 GPA", date: "2018 — 2022" },
  { degree: "Certifications", school: "Celonis Analyst · Oracle SQL · Google Data Analytics", date: "" },
];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/BronsonBagwell", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bronson-bagwell-0318b5196/", icon: "linkedin" },
  { label: "Résumé", href: "/resume.pdf", icon: "resume" },
];

export const site = {
  // IMPORTANT: set this to your real deployed URL (used for SEO, social cards,
  // sitemap). For a GitHub project page use "https://<username>.github.io/<repo>".
  url: "https://bronsonbagwell.github.io",
};

export type Stat = { value: number; suffix?: string; prefix?: string; label: string };
export const stats: Stat[] = [
  { value: 160, suffix: "+", label: "KPIs unified" },
  { value: 40, suffix: "%", label: "Less manual reporting" },
  { prefix: "$", value: 200, suffix: "K+", label: "Client revenue driven" },
  { value: 15, suffix: "%", label: "Higher conversion" },
];

