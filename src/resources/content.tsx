import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Malik",
  lastName: "Malik",
  name: `Malik`,
  role: "AI & Machine Learning · MLOps · Cloud",
  avatar: "/images/avatar.jpg",
  email: "anmolmalik@hotmail.com",
  location: "Asia/Singapore",
  languages: ["English", "Hindi", "Punjabi", "Mandarin (Well, a little)"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
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
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+6591458733",
    essential: true,
  },
  {
    name: "Resume",
    icon: "file",
    link: "/anmol_malik_resume_2026.pdf",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} · AI & Machine Learning`,
  description: `Projects, experiments, and writing on AI, MLOps, and data systems by ${person.name}.`,
  headline: <>Turning messy ideas into clean, deployable AI</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>
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
      I'm {person.firstName}, currently pursuing my Master's in AI at SMU and building systems end-to-end - data,
      infra, ML, backend; the whole messy, fascinating pipeline that makes technology actually work.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
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
        <p style={{ margin: "0 0 8px 0" }}>
          <Text as="span" variant="body-default-l" onBackground="neutral-strong">
            <strong>Hi, I'm Malik - a former business-side product manager learning to speak tech fluently.</strong>
          </Text>
        </p>

        <p style={{ margin: "0 0 8px 0" }}>
          <Text as="span" variant="body-default-l" onBackground="neutral-medium">
            I spent years in boardrooms making product and commercial decisions, then walking those decisions into
            engineering rooms and seeing the gap between intent and reality. That disconnect is what pushed me onto this
            path.
          </Text>
        </p>

        <p style={{ margin: "0 0 8px 0" }}>
          <Text as="span" variant="body-default-l" onBackground="neutral-medium">
            Across trading tech, gaming, and digital projects I have worked with traders, executives, designers, quants,
            and developers to ship real products. At some point "translating requirements" was not enough - I wanted to
            understand the systems myself so I could challenge assumptions on both sides.
          </Text>
        </p>

        <p style={{ margin: "0 0 16px 0" }}>
          <Text as="span" variant="body-default-l" onBackground="neutral-medium">
            I am now pursuing my Master of IT in Business (AI) at SMU and building this portfolio to deepen my skills in
            Python, data, models, and infrastructure, so I can work confidently at the intersection of tech and product.
          </Text>
        </p>

        <p style={{ margin: "0 0 8px 0" }}>
          <Text as="span" variant="body-default-l" onBackground="neutral-strong">
            <strong>What I'm good at</strong>
          </Text>
        </p>
        
        <ul style={{ margin: "0 0 16px 20px" }}>
          <li style={{ marginBottom: "6px" }}>
            <Text as="span" variant="body-default-l" onBackground="neutral-medium">
              <strong>Simplifying fuzzy problems.</strong> I take vague, high-level ideas and turn them into something a
              team can design, build, and measure.
            </Text>
          </li>
          <li style={{ marginBottom: "6px" }}>
            <Text as="span" variant="body-default-l" onBackground="neutral-medium">
              <strong>Keeping people aligned.</strong> I have spent years coordinating stakeholders and making sure what
              ships actually matches business goals.
            </Text>
          </li>
          <li style={{ marginBottom: "6px" }}>
            <Text as="span" variant="body-default-l" onBackground="neutral-medium">
              <strong>Holding context and detail.</strong> I care about why the business cares and how the system works,
              so nothing important gets lost between leadership and engineering.
            </Text>
          </li>
        </ul>

        <p style={{ margin: "0 0 8px 0" }}>
          <Text as="span" variant="body-default-l" onBackground="neutral-strong">
            <strong>Why this site exists</strong>
          </Text>
        </p>
        
        <p style={{ margin: "0 0 8px 0" }}>
          <Text as="span" variant="body-default-l" onBackground="neutral-medium">
            On my CV, I look like a product manager. Here, I want you to see that I can also build things - write code,
            design systems, and work with AI and infrastructure with enough depth to deliver value to an engineering team.
          </Text>
        </p>
        
        <ul style={{ margin: "0 0 0 20px" }}>
          <li style={{ marginBottom: "6px" }}>
            <Text as="span" variant="body-default-l" onBackground="neutral-medium">
              I understand roadmaps, stakeholders, and commercial outcomes.
            </Text>
          </li>
          <li style={{ marginBottom: "6px" }}>
            <Text as="span" variant="body-default-l" onBackground="neutral-medium">
              I am actively building the technical fundamentals to contribute as an engineer-in-training.
            </Text>
          </li>
          <li style={{ marginBottom: "6px" }}>
            <Text as="span" variant="body-default-l" onBackground="neutral-medium">
              I want to be the bridge your engineers and leadership trust when things are complex or ambiguous.
            </Text>
          </li>
        </ul>
      </>
    ),
  },

  work: {
    display: false,
    title: "Work Experience",
    experiences: [
      {
        company: "Attix APAC",
        timeframe: "Jul 2024 – Jul 2025",
        role: "Product Manager, AI & ML Systems",
        achievements: [
          "Delivered product roadmaps for hedge-fund ML engines (MidasAI, AlphaPilot), an AI OMS (QuantHare), and an automotive intelligence platform (Vittori).",
          "Drove cross-functional execution across UI/UX, ML engineers, quants, and backend teams to ship AI-driven product milestones.",
          "Evaluated trading strategies using Sharpe, Sortino, and drawdown metrics to assess model readiness for deployment under client-specific risk profiles.",
          "Coordinated TradeGPT (LLM) development - PRDs, backlog, sprint alignment, feature delivery, and evaluation of model behaviour and quality.",
          "Established internal AI governance frameworks, enabling transparent model performance reporting, risk visibility, and traceable decision-making.",
          "Led productisation of QuantHare by defining functional requirements, technical workflows, and UI/UX for a client-grade proof of concept.",
        ],
        images: [],
      },
      {
        company: "Microgaming Asia",
        timeframe: "May 2022 – Apr 2024",
        role: "Product Manager, Games & Content",
        achievements: [
          "Owned full product lifecycle for APAC casino products - concept, requirements, launch, analysis, and continuous iteration.",
          "Improved delivery velocity across the regional slot-games portfolio by redesigning workflow and cross-functional coordination.",
          "Partnered with engineering, art, math, and vendor teams to ship new content on predictable timelines.",
          "Built data-driven bet-setting and retention frameworks contributing to revenue lift and improved early-game uptake.",
        ],
        images: [],
      },
      {
        company: "3M",
        timeframe: "Mar 2020 – Mar 2021",
        role: "Junior Project Manager",
        achievements: [
          "Implemented Jira workflows for enterprise clients (Dyson, Adidas, Parkway), improving project visibility and cross-team coordination.",
          "Managed invoicing and time-tracking for a regional team across multi-country campaigns.",
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Singapore Management University (SMU)",
        description: (
          <>
            Master of IT in Business (Artificial Intelligence Track)
            <br />
            <br />
            Applied machine learning, statistical modelling, query optimisation, algorithm design, MLOps fundamentals,
            and AI deployment workflows.
          </>
        ),
      },
      {
        name: "Murdoch University, Western Australia",
        description: (
          <>
            Bachelor of Marketing & Business Law
            <br />
            <br />
            Consumer behaviour, analytics, strategic communication, and commercial legal frameworks.
          </>
        ),
      },
      {
        name: "Singapore Institute of Management (SIM)",
        description: (
          <>
            Diploma in Management Studies
            <br />
            <br />
            Management fundamentals, business analytics, and organisational processes.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Python & Machine Learning",
        description: <></>,
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
        description: <></>,
        tags: [
          { name: "Statistics", icon: "chart" },
          { name: "EDA", icon: "chart" },
          { name: "Regression", icon: "chart" },
        ],
        images: [],
      },
      {
        title: "APIs, Backend & Deployment",
        description: <></>,
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
        description: <></>,
        tags: [
          { name: "SQL", icon: "database" },
          { name: "Query Optimisation", icon: "database" },
          { name: "Database Design", icon: "database" },
        ],
        images: [],
      },
      {
        title: "MLOps Foundations & Engineering Workflow",
        description: <></>,
        tags: [
          { name: "Git", icon: "github" },
          { name: "CI/CD", icon: "github" },
          { name: "Docker (Learning)", icon: "docker" },
        ],
        images: [],
      },
      {
        title: "Cloud Platforms & Serverless Deployment",
        description: <></>,
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
  description: `Life outside tech: motorcycles, Magic: The Gathering, guitar, what I'm reading, and my dog.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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