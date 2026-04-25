import Link from 'next/link';

export default function AuthorDashboardPage() {
  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Author workspace</p>
        <h1>Author Dashboard</h1>
        <p className="muted">Revenue, enrollments, completion rates, and recent student activity placeholders.</p>
        <div className="button-row">
          <Link className="pill pill-primary" href="/author/courses">Create course</Link>
          <button className="pill" type="button">Export report</button>
        </div>
      </section>
    </div>
  );
}
