import Link from 'next/link';

export default function AuthorCoursesPage() {
  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Course builder</p>
        <h1>Build and publish your course</h1>
        <p className="muted">Curriculum editor, lesson ordering, and publish workflow placeholders.</p>
        <div className="button-row">
          <button className="pill" type="button">Add lesson</button>
          <button className="pill" type="button">Publish course</button>
          <Link className="pill" href="/course/react-from-zero">Preview course page</Link>
        </div>
      </section>
    </div>
  );
}
