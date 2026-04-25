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
  }
];

export function findCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
