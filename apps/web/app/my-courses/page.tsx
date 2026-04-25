import Link from 'next/link';

const enrolled = [
  { slug: 'react-from-zero', progress: '62%', nextLesson: 'lesson-9' },
  { slug: 'node-api-architecture', progress: '28%', nextLesson: 'lesson-4' }
];

export default function MyCoursesPage() {
  return (
    <div className="stack-lg">
      <section className="card">
        <h1>My Learning</h1>
        <p className="muted">Continue your enrolled courses and monitor completion progress.</p>
      </section>

      <section className="grid grid-3">
        {enrolled.map((course) => (
          <article className="card" key={course.slug}>
            <h3>{course.slug.replaceAll('-', ' ')}</h3>
            <p className="muted">Progress: {course.progress}</p>
            <div className="button-row">
              <Link className="pill" href={`/learn/${course.slug}/${course.nextLesson}`}>Continue</Link>
              <Link className="pill" href="/certificate/cert-123">View certificate</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
