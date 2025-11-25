import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Anmol",
  lastName: "Malik",
  name: `Anmol Malik`,
  role: "AI & Machine Learning · MLOps · Cloud",
  avatar: "/images/avatar.jpg",
  email: "anmolmalik@hotmail.com",
  location: "Asia/Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Punjabi", "Mandarin (Well, a little)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/anmolmalik95",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/malikanmol/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}· AI & Machine Learning`,
  description: `Projects, experiments, and writing on AI, MLOps, and data systems by ${person.name}.`,
  headline: <>Turning messy ideas into clean, deployable AI</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, currently pursuing my Master's in AI at SMU and building systems end-to-end - data, infra, ML, backend ; the whole messy, fascinating pipeline that makes technology actually work.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Anmol is a Singapore-based AI and machine learning practitioner with a background in
      product management and AI-driven products. He is currently pursuing the Master of IT in
      Business (Artificial Intelligence track) at SMU, focusing on applied machine learning,
      MLOps, and cloud infrastructure.
      <br />
      <br />
      He enjoys designing systems that are not just smart on paper, but observable,
      testable, and deployable - from statistical analysis and ML models to APIs and backend
      services that real users can touch.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Attix APAC",
        timeframe: "Jul 2024 – Jul 2025",
        role: "Product Manager, AI & ML Systems",
        achievements: [
          <>
            Delivered product roadmaps for hedge-fund ML engines (MidasAI, AlphaPilot), an AI OMS (QuantHare),
            and an automotive intelligence platform (Vittori).
          </>,
          <>
            Drove cross-functional execution across UI/UX, ML engineers, quants, and backend teams to ship
            AI-driven product milestones.
          </>,
          <>
            Evaluated trading strategies using Sharpe, Sortino, and drawdown metrics to assess model readiness for
            deployment under client-specific risk profiles.
          </>,
          <>
            Coordinated TradeGPT (LLM) development — PRDs, backlog, sprint alignment, feature delivery, and
            evaluation of model behaviour/quality.
          </>,
          <>
            Established internal AI governance frameworks, enabling transparent model performance reporting,
            risk visibility, and traceable decision-making.
          </>,
          <>
            Led productisation of QuantHare by defining functional requirements, technical workflows, and UI/UX
            for a client-grade proof of concept.
          </>,
        ],
        images: [],
      },
      {
        company: "Microgaming Asia",
        timeframe: "May 2022 – Apr 2024",
        role: "Product Manager, Games & Content",
        achievements: [
          <>
            Owned full product lifecycle for APAC casino products — concept, requirements, launch, analysis, and
            continuous iteration.
          </>,
          <>
            Improved delivery velocity by 2× across the regional slot-games portfolio by redesigning workflow and
            cross-functional coordination.
          </>,
          <>
            Partnered with engineering, art, math, and vendor teams to ship new content on predictable timelines.
          </>,
          <>
            Built data-driven bet-setting and retention frameworks, contributing to +8% revenue lift and 20%
            improvement in early-game uptake.
          </>,
          <>
            Represented APAC product expertise at industry events and seminars, presenting game analytics and
            performance trends.
          </>,
        ],
        images: [],
      },
      {
        company: "3M",
        timeframe: "Mar 2020 – Mar 2021",
        role: "Junior Project Manager",
        achievements: [
          <>
            Implemented Jira workflows for enterprise clients (Dyson, Adidas, Parkway), improving project visibility
            and cross-team coordination.
          </>,
          <>
            Managed invoicing and time-tracking for a 40-person regional team across multi-country campaigns.
          </>,
        ],
        images: [],
      },
      {
        company: "Early Career Roles",
        timeframe: "2017 – 2019",
        role: "Project & Operations Support",
        achievements: [
          <>
            Supported project management workflows across marketing and operations roles at That Marketing Guy
            and Apostrophe Collective.
          </>,
          <>
            Developed early experience in stakeholder communication, execution support, and operational
            coordination.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Singapore Management University (SMU)",
        description: <>Master of IT in Business (Artificial Intelligence Track)
        <br />  <br />
          Applied machine learning, statistical modelling, query optimisation,  
          algorithm design, MLOps fundamentals, and AI deployment workflows.</>,
      },
      {
        name: "Murdoch University, Western Australia",
        description: <>Bachelor of Marketing & Business Law
        <br />  <br />
          Consumer behaviour, analytics, strategic communication, and commercial legal frameworks.</>,
      },
      {
        name: "Singapore Institute of Management (SIM)",
        description: <>Diploma in Management Studies
        <br />  <br />
          Management fundamentals, business analytics, and organisational processes.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python & Machine Learning",
        description: (
          <>
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "pandas", icon: "python" },
          { name: "NumPy", icon: "python" },
          { name: "scikit-learn", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Statistics & Data Modelling",
        description: (
          <>
          </>
        ),
        tags: [
          { name: "Statistics", icon: "chart" },
          { name: "EDA", icon: "chart" },
          { name: "Regression", icon: "chart" },
        ],
        images: [],
      },
      {
        title: "APIs, Backend & Deployment",
        description: (
          <>
          </>
        ),
        tags: [
          { name: "FastAPI", icon: "api" },
          { name: "REST", icon: "api" },
          { name: "Render", icon: "cloud" },
          { name: "Vercel", icon: "cloud" },
        ],
        images: [],
      },
      {
        title: "Databases & Query Optimisation",
        description: (
          <>
          </>
        ),
        tags: [
          { name: "SQL", icon: "database" },
          { name: "Query Optimisation", icon: "database" },
          { name: "Database Design", icon: "database" },
        ],
        images: [],
      },
      {
        title: "MLOps Foundations & Engineering Workflow",
        description: (
          <>
          </>
        ),
        tags: [
          { name: "Git", icon: "github" },
          { name: "CI/CD", icon: "github" },
          { name: "Docker (Learning)", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "Cloud Platforms & Serverless Deployment",
        description: (
          <>
          </>
        ),
        tags: [
          { name: "AWS (Exposure)", icon: "cloud" },
          { name: "Azure (Exposure)", icon: "cloud" },
          { name: "Render", icon: "cloud" },
          { name: "Vercel", icon: "cloud" },
        ],
        images: [],
      },      
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Hobbies",
  title: `Hobbies – ${person.name}`,
  description: `Life outside tech: motorcycles, Magic: The Gathering, guitar, what I’m reading, and my dog.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
