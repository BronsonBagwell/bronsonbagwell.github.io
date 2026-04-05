import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Coffee,
  Database,
  GitBranch,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Section } from '@/components/ui/section'

const experience = [
  {
    role: 'Senior Data Scientist and Analytics Analyst',
    company: 'Razorfish',
    location: 'Atlanta, GA',
    period: 'Jul 2024 — Present',
    bullets: [
      'Built executive dashboards and KPI scoring frameworks that made performance reviews easier to act on.',
      'Improved ETL and reporting workflows to cut recurring manual work by roughly 40 percent.',
      'Connected fragmented data into decision-ready views for leadership and client teams.',
    ],
  },
  {
    role: 'Senior Paid Advertising Specialist',
    company: 'ChoiceLocal',
    location: 'Westlake, OH',
    period: 'Aug 2022 — Jul 2024',
    bullets: [
      'Managed Google Ads and Meta optimization across client accounts with a focus on profitable growth.',
      'Drove more than $200K in additional client revenue through testing, targeting, and budget refinement.',
      'Improved conversion rate, CTR, and CPA at the same time instead of playing metric whack-a-mole.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Honda of America',
    location: 'Union County, OH',
    period: 'Aug 2023 — Apr 2024',
    bullets: [
      'Built a machine learning model to flag production bottlenecks and support a 5 percent efficiency gain.',
      'Led a 3-person team through supply chain analysis during graduate study.',
      'Translated technical findings into recommendations that operators could actually use.',
    ],
  },
]

const projects = [
  {
    title: 'World Happiness Analysis',
    href: 'https://github.com/BronsonBagwell/World_Happiness',
    description:
      'Exploratory analysis and predictive modeling on UN happiness data with a Random Forest model reaching R² = 0.725.',
    tags: ['Python', 'pandas', 'scikit-learn'],
  },
  {
    title: 'Classification Model',
    href: 'https://github.com/BronsonBagwell/Classification_Model',
    description:
      'Admission prediction modeling using Logistic Regression, Decision Trees, and Random Forest workflows in R.',
    tags: ['R', 'caret', 'glmnet'],
  },
  {
    title: 'Cluster Analysis',
    href: 'https://github.com/BronsonBagwell/Cluster_Analysis',
    description:
      'Customer-style segmentation work using K-Means and Hierarchical clustering on the Wine dataset.',
    tags: ['R', 'cluster', 'factoextra'],
  },
  {
    title: 'Neural Network',
    href: 'https://github.com/BronsonBagwell/Neural_Network',
    description:
      'Model comparison project testing neural networks against tree-based methods for admissions forecasting.',
    tags: ['R', 'neuralnet', 'caret'],
  },
  {
    title: 'Regularization Methods',
    href: 'https://github.com/BronsonBagwell/Regularization_Methods',
    description:
      'Ridge, LASSO, and Elastic Net regression analysis on Boston Housing data with practical model comparison.',
    tags: ['R', 'glmnet', 'caret'],
  },
  {
    title: 'Simple Linear Regression',
    href: 'https://github.com/BronsonBagwell/Simple_Linear_Regression',
    description:
      'Linear regression case study focused on hotel profitability and decision framing.',
    tags: ['R', 'tidyverse', 'GGally'],
  },
]

const skillGroups = [
  {
    title: 'Analytics & Measurement',
    icon: BarChart3,
    items: ['Dashboarding', 'KPI Frameworks', 'Experimentation', 'Attribution Thinking', 'Time-Series Analysis'],
  },
  {
    title: 'Data & Automation',
    icon: Database,
    items: ['Python', 'SQL', 'ETL Pipelines', 'BigQuery', 'Reporting Automation'],
  },
  {
    title: 'Modeling',
    icon: BrainCircuit,
    items: ['scikit-learn', 'TensorFlow', 'XGBoost', 'Feature Engineering', 'Predictive Modeling'],
  },
  {
    title: 'Delivery',
    icon: GitBranch,
    items: ['Tableau', 'Looker Studio', 'Excel', 'Git / GitHub', 'Stakeholder Communication'],
  },
]

const snapshotItems = [
  'Experience spanning analytics, reporting automation, and performance marketing.',
  'Comfortable moving from data cleanup and ETL work to dashboards, experiments, and modeling.',
  'Interested in roles where technical work still has to be useful to the business.',
]

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="absolute inset-0 -z-10 grid-sheen opacity-30" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-zinc-200 uppercase">
            Bronson Bagwell
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#education" className="transition hover:text-white">Education</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="container py-20 sm:py-28">
        <div className="hero-fade rounded-[2rem] border border-white/10 px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr] lg:items-end">
          <div className="space-y-8">
            <Badge>Senior Data Analyst</Badge>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Bronson Bagwell
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                Senior Data Analyst with experience across measurement, reporting automation, modeling, and paid media performance.
              </p>
              <p className="max-w-2xl text-base leading-7 text-zinc-500">
                Focused on building clean reporting systems, practical analytics workflows, and portfolio projects that show how the work gets done.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4" /> Razorfish</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Atlanta, GA</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Ohio State MSBA</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:bronsonbwork@gmail.com">Contact</Button>
              <Button href="https://github.com/BronsonBagwell" variant="secondary">GitHub</Button>
              <Button href="https://www.linkedin.com/in/bronson-bagwell/" variant="secondary">LinkedIn</Button>
            </div>
          </div>

          <Card className="space-y-6 lg:max-w-[30rem] xl:max-w-[32rem]">
            <div>
              <p className="text-sm font-medium text-zinc-500">Snapshot</p>
              <div className="mt-4 space-y-3">
                {snapshotItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-zinc-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
          </div>
        </div>
      </section>

      <div className="container pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <p className="text-sm font-medium text-zinc-500">Strength</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Reporting that holds up</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Clean structure, reliable metrics, and outputs that can stand on their own in a meeting.
            </p>
          </Card>
          <Card>
            <p className="text-sm font-medium text-zinc-500">Background</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Media and analytics crossover</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Experience in both makes attribution, measurement, and performance tradeoffs easier to reason about.
            </p>
          </Card>
          <Card>
            <p className="text-sm font-medium text-zinc-500">Working style</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Practical technical work</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Build the model, clean the pipeline, explain the result, and keep the work usable.
            </p>
          </Card>
        </div>
      </div>

      <div className="container">
        <Section
          id="experience"
          eyebrow="Experience"
          title="Experience"
          description="Roles across analytics, modeling, and paid media shaped a practical approach to reporting, measurement, and decision support."
        >
          <div className="grid gap-6">
            {experience.map((job) => (
              <Card key={`${job.company}-${job.role}`}>
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-2 text-base text-zinc-300">{job.company}</p>
                  </div>
                  <div className="text-sm text-zinc-500 lg:text-right">
                    <div>{job.location}</div>
                    <div className="mt-1">{job.period}</div>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-400">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Selected Projects"
          title="Selected projects"
          description="Portfolio work covering predictive modeling, clustering, regression, and structured analysis."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="group">
                <Card className="h-full transition duration-200 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-zinc-500 transition group-hover:text-white" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Skills and tools"
          description="Core tools used for analytics, automation, modeling, and communication."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon
              return (
                <Card key={group.title}>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-zinc-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Education and certifications"
          description="Formal training in analytics and marketing, supported by hands-on professional experience."
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-zinc-100">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">M.S. Business Analytics</h3>
                  <p className="mt-2 text-zinc-300">The Ohio State University</p>
                  <p className="mt-3 text-sm text-zinc-500">Columbus, OH · Aug 2023 — Jul 2024 · GPA 3.6 · STEM</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-zinc-100">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">B.B.A. Marketing</h3>
                  <p className="mt-2 text-zinc-300">Kennesaw State University</p>
                  <p className="mt-3 text-sm text-zinc-500">Kennesaw, GA · Aug 2018 — Jul 2022 · GPA 3.8</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Celonis Analyst', 'Oracle Database SQL', 'Google Data Analytics Professional'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                {item}
              </span>
            ))}
          </div>
        </Section>
      </div>

      <section id="contact" className="container py-20">
        <Card className="overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Contact</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Open to analytics, measurement, and data-focused roles.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
                Available for conversations around analytics, reporting, measurement, and data strategy work.
              </p>
            </div>
            <div className="space-y-4 text-sm text-zinc-300">
              <a className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10" href="mailto:bronsonbwork@gmail.com">
                <span className="inline-flex items-center gap-3"><Mail className="h-4 w-4" /> bronsonbwork@gmail.com</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10" href="https://www.linkedin.com/in/bronson-bagwell/" target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-3"><Linkedin className="h-4 w-4" /> LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10" href="https://github.com/BronsonBagwell" target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-3"><GitBranch className="h-4 w-4" /> GitHub</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Card>
        <footer className="flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Atlanta, GA · © 2026 Bronson Bagwell</p>
          <p className="inline-flex items-center gap-2">
            Built by Coffee <Coffee className="h-4 w-4" />
          </p>
        </footer>
      </section>
    </main>
  )
}
