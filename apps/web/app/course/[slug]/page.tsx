import Link from 'next/link';
import { findCourseBySlug } from '@/lib/courses';

const fallbackLessons = [
  'Introduction and setup',
  'Core concepts and mental model',
  'Building the first module',
  'Testing and deployment'
];

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = findCourseBySlug(params.slug);

  if (course === undefined) {
    return (
      <section className="card">
        <h1>Course not found</h1>
        <p className="muted">The requested course is not available in the current catalog placeholder.</p>
        <Link className="pill" href="/catalog">Back to catalog</Link>
      </section>
    );
  }

  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Course page</p>
        <h1>{course.title}</h1>
        <p className="muted">{course.level} · {course.duration} · {course.lessons} lessons · Rating {course.rating}</p>
        <p className="muted">{course.fullDescription}</p>
        <div className="button-row">
          <Link className="pill pill-primary" href="/cart">Buy course</Link>
          <Link className="pill" href={`/learn/${course.slug}/lesson-1`}>Start first lesson</Link>
        </div>
      </section>

      <section className="card course-grid">
        <div>
          <h2 className="section-title">What you will gain</h2>
          <ul className="list">
            {course.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title">Learning outcomes</h2>
          <ul className="list">
            {course.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Curriculum preview</h2>
        <ul className="list">
          {fallbackLessons.map((lesson) => (
            <li key={lesson}>{lesson}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
