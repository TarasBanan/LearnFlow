import Link from 'next/link';

const lessons = [
  'Introduction and setup',
  'Core concepts and mental model',
  'Building the first module',
  'Testing and deployment'
];

export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Course page</p>
        <h1>{params.slug.replaceAll('-', ' ')}</h1>
        <p className="muted">Comprehensive curriculum with practical exercises, quizzes, and certificate on completion.</p>
        <div className="button-row">
          <Link className="pill pill-primary" href="/cart">Buy course</Link>
          <Link className="pill" href={`/learn/${params.slug}/lesson-1`}>Start first lesson</Link>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Curriculum preview</h2>
        <ul className="list">
          {lessons.map((lesson) => (
            <li key={lesson}>{lesson}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
