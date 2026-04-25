export type Course = {
  slug: string;
  title: string;
  category: string;
  price: string;
  rating: string;
  level: string;
  duration: string;
  lessons: number;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  outcomes: string[];
};

export const courses: Course[] = [
  {
    slug: 'react-from-zero',
    title: 'React from Zero to Production',
    category: 'Frontend',
    price: '$79',
    rating: '4.8',
    level: 'Beginner',
    duration: '18 hours',
    lessons: 42,
    shortDescription:
      'Build production-ready React applications from fundamentals to scalable architecture, state management, and deployment best practices.',
    fullDescription:
      'This course turns complete beginners into confident React developers. You will start with core concepts, then move to component composition, hooks, routing, API integrations, and testing workflows. Every module includes realistic tasks so you leave with portfolio-level projects that can be shown to clients or employers.',
    benefits: ['Step-by-step guided projects', 'Real-world code review checklist', 'Deployment and performance optimization'],
    outcomes: ['Ship a complete React app', 'Design reusable component architecture', 'Debug common production issues quickly']
  },
  {
    slug: 'node-api-architecture',
    title: 'Node.js API Architecture',
    category: 'Backend',
    price: '$89',
    rating: '4.7',
    level: 'Intermediate',
    duration: '14 hours',
    lessons: 31,
    shortDescription:
      'Design clean, maintainable backend services with layered architecture, robust validation, security, and scalable API patterns.',
    fullDescription:
      'Learn how experienced backend engineers design APIs that survive growth. You will structure modules, validate requests, handle errors consistently, and implement authentication and authorization patterns. The program includes practical exercises for pagination, caching, observability, and deployment workflows used in production teams.',
    benefits: ['Architecture templates for fast starts', 'Security and auth best practices', 'Production-oriented monitoring techniques'],
    outcomes: ['Build modular Express services', 'Implement resilient API boundaries', 'Prepare backend systems for scale']
  },
  {
    slug: 'postgres-for-apps',
    title: 'PostgreSQL for Product Apps',
    category: 'Database',
    price: '$69',
    rating: '4.9',
    level: 'Intermediate',
    duration: '12 hours',
    lessons: 27,
    shortDescription:
      'Master PostgreSQL querying, indexing, schema design, and performance tuning to power reliable product-grade applications.',
    fullDescription:
      'This program focuses on the PostgreSQL skills that directly impact product velocity and reliability. You will design schemas for evolving requirements, write efficient queries, use transactions safely, and optimize slow endpoints with indexing strategies. By the end, you will confidently troubleshoot bottlenecks and model data for long-term maintainability.',
    benefits: ['Hands-on query optimization labs', 'Schema design patterns for product teams', 'Practical migration and rollback strategy'],
    outcomes: ['Model resilient relational data', 'Optimize heavy read and write workloads', 'Diagnose performance regressions confidently']
  },
  {
    slug: 'product-design-systems',
    title: 'Product Design Systems',
    category: 'Design',
    price: '$59',
    rating: '4.6',
    level: 'Intermediate',
    duration: '10 hours',
    lessons: 26,
    shortDescription:
      'Create scalable design systems that align product, engineering, and brand through reusable components and clear UX rules.',
    fullDescription:
      'Build a design system that teams actually use. You will define tokens, typography scales, spacing rules, and component variants, then connect them to implementation workflows with engineering. The course includes governance patterns, contribution workflows, and documentation structures that prevent UI drift in growing products.',
    benefits: ['Component governance playbook', 'Cross-team handoff patterns', 'Documentation templates for adoption'],
    outcomes: ['Launch a reusable design language', 'Reduce UI inconsistency across features', 'Speed up design-to-dev delivery cycles']
  },
  {
    slug: 'typescript-strict-mastery',
    title: 'TypeScript Strict Mode Mastery',
    category: 'Frontend',
    price: '$74',
    rating: '4.8',
    level: 'Intermediate',
    duration: '11 hours',
    lessons: 24,
    shortDescription:
      'Write safer frontend and backend code with strict typing, advanced generics, and robust type-driven architecture patterns.',
    fullDescription:
      'This course teaches how to leverage TypeScript beyond basics. You will model complex domain types, narrow unknown data safely, and design APIs that make invalid states unrepresentable. Lessons include practical refactoring strategies and reusable typing patterns for production teams.',
    benefits: ['Deep dives into generics and utility types', 'Patterns for API boundary validation', 'Refactoring legacy codebases safely'],
    outcomes: ['Improve reliability of large TypeScript projects', 'Catch bugs at compile time', 'Build maintainable typed architectures']
  },
  {
    slug: 'nextjs-performance-playbook',
    title: 'Next.js Performance Playbook',
    category: 'Frontend',
    price: '$82',
    rating: '4.7',
    level: 'Intermediate',
    duration: '13 hours',
    lessons: 29,
    shortDescription:
      'Optimize Next.js applications for Core Web Vitals, fast navigation, and scalable production deployments.',
    fullDescription:
      'You will learn practical strategies for rendering optimization, route-level splitting, caching policies, image delivery, and performance monitoring. The course focuses on measurable improvements and profiling workflows used by teams shipping high-traffic web products.',
    benefits: ['Core Web Vitals optimization workflow', 'Rendering strategy decision matrix', 'Production profiling toolkit'],
    outcomes: ['Diagnose and fix frontend performance bottlenecks', 'Ship faster and more responsive Next.js apps', 'Set up performance budgets and monitoring']
  },
  {
    slug: 'python-for-data-analytics',
    title: 'Python for Data Analytics',
    category: 'Data',
    price: '$68',
    rating: '4.7',
    level: 'Beginner',
    duration: '16 hours',
    lessons: 34,
    shortDescription:
      'Analyze datasets with Python, build clear reports, and automate recurring analytics tasks for product teams.',
    fullDescription:
      'From data cleaning and transformation to visual storytelling, this course helps you turn raw datasets into actionable insights. You will work through realistic business scenarios, build reusable analysis notebooks, and learn to communicate findings to non-technical stakeholders.',
    benefits: ['Hands-on datasets and case studies', 'Practical reporting templates', 'Automation patterns for recurring analysis'],
    outcomes: ['Produce clear and reliable analytics reports', 'Automate repetitive data workflows', 'Support product decisions with evidence']
  },
  {
    slug: 'docker-devops-foundations',
    title: 'Docker & DevOps Foundations',
    category: 'DevOps',
    price: '$85',
    rating: '4.8',
    level: 'Intermediate',
    duration: '15 hours',
    lessons: 33,
    shortDescription:
      'Containerize applications, standardize environments, and establish deployment pipelines with modern DevOps practices.',
    fullDescription:
      'You will containerize multi-service applications, manage environment parity, and ship with confidence using CI/CD basics. The program covers image optimization, security scanning, orchestration fundamentals, and practical debugging for containerized systems.',
    benefits: ['Step-by-step containerization labs', 'CI/CD baseline templates', 'Security and reliability checklists'],
    outcomes: ['Deploy consistent environments across teams', 'Reduce release friction', 'Troubleshoot containers and pipelines faster']
  },
  {
    slug: 'ux-research-practical',
    title: 'Practical UX Research',
    category: 'Design',
    price: '$63',
    rating: '4.6',
    level: 'Beginner',
    duration: '9 hours',
    lessons: 22,
    shortDescription:
      'Run effective user interviews and usability tests to make product decisions grounded in real user behavior.',
    fullDescription:
      'This course walks through planning research, recruiting participants, conducting sessions, and synthesizing insights. You will learn how to prioritize findings, align stakeholders, and convert research outcomes into high-impact product improvements.',
    benefits: ['Interview and usability test frameworks', 'Insight synthesis templates', 'Stakeholder communication playbook'],
    outcomes: ['Plan and execute lean UX research', 'Identify high-impact usability issues', 'Translate insights into roadmap actions']
  },
  {
    slug: 'ai-product-integration',
    title: 'AI Product Integration',
    category: 'AI',
    price: '$95',
    rating: '4.9',
    level: 'Advanced',
    duration: '17 hours',
    lessons: 36,
    shortDescription:
      'Integrate AI capabilities into product features with reliable prompting, evaluation loops, and safety-aware design.',
    fullDescription:
      'Go beyond demos and learn how to ship AI features in real products. Topics include use-case framing, prompt/system design, quality evaluation, fallback strategies, and operational monitoring. Each module is focused on shipping outcomes, not just experiments.',
    benefits: ['AI feature design blueprint', 'Evaluation and quality control workflows', 'Production safety and fallback patterns'],
    outcomes: ['Build reliable AI-powered product flows', 'Measure and improve AI quality over time', 'Launch AI features with clear guardrails']
  }
];

export function findCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
