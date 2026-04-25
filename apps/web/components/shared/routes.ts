export type RouteItem = {
  href: string;
  title: string;
  description: string;
};

export const homeCards: RouteItem[] = [
  {
    href: '/catalog',
    title: 'Course Catalog',
    description: 'Browse topics, levels, ratings, and pricing with filters.'
  },
  {
    href: '/my-courses',
    title: 'My Learning',
    description: 'Continue enrolled courses and track weekly progress.'
  },
  {
    href: '/quiz/react-basics',
    title: 'Quiz Center',
    description: 'Take working quizzes and review detailed results.'
  },
  {
    href: '/author/dashboard',
    title: 'Author Dashboard',
    description: 'Review revenue, enrollments, and completion insights.'
  },
  {
    href: '/author/courses',
    title: 'Course Builder',
    description: 'Manage lessons, curriculum, and publish settings.'
  },
  {
    href: '/cart',
    title: 'Cart & Checkout',
    description: 'Apply promo codes and complete secure payment.'
  }
];
