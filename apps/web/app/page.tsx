import Link from 'next/link';
import { PageGrid } from '@/components/ui/PageGrid';

const featuredCourses = [
  {
    slug: 'react-from-zero',
    title: 'React from Zero to Production',
    level: 'Beginner',
    duration: '18 hours',
    lessons: 42
  },
  {
    slug: 'node-api-architecture',
    title: 'Node.js API Architecture',
    level: 'Intermediate',
    duration: '14 hours',
    lessons: 31
  },
  {
    slug: 'product-design-systems',
    title: 'Product Design Systems',
    level: 'Intermediate',
    duration: '10 hours',
    lessons: 26
  }
];

export default function HomePage() {
  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Build practical skills</p>
        <h1>LearnFlow helps teams and students ship real projects faster.</h1>
        <p className="muted">
          Video-first learning paths, practice quizzes, downloadable certificates, and progress tracking in one place.
        </p>
        <div className="button-row">
          <Link className="pill pill-primary" href="/catalog">
            Start learning
          </Link>
          <Link className="pill" href="/author/dashboard">
            Become an author
          </Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">Featured courses</h2>
        <div className="grid grid-3">
          {featuredCourses.map((course) => (
            <article className="card" key={course.slug}>
              <h3>{course.title}</h3>
              <p className="muted">{course.level} · {course.duration} · {course.lessons} lessons</p>
              <p className="muted">Hands-on syllabus, weekly checkpoints, and downloadable resources.</p>
              <Link className="pill" href={`/course/${course.slug}`}>
                View course
              </Link>
            </article>
          ))}
        </div>
      </section>

      <PageGrid />
    </div>
  );
}
