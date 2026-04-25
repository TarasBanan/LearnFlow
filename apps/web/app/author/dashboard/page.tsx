import Link from 'next/link';

const recentCourses = [
  {
    title: 'React from Zero to Production',
    status: 'Published',
    enrollments: 248,
    completionRate: '61%'
  },
  {
    title: 'Node.js API Architecture',
    status: 'Draft update',
    enrollments: 132,
    completionRate: '44%'
  }
];

const recentActivity = [
  '12 new enrollments in the last 24 hours',
  '8 students completed Quiz: React Basics Checkpoint',
  '3 new reviews awaiting response',
  'Payout report generated 2 days ago'
];

export default function AuthorDashboardPage() {
  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Author workspace</p>
        <h1>Author Dashboard</h1>
        <p className="muted">You already have active students and published content. Use this dashboard to track growth and optimize courses.</p>
        <div className="button-row">
          <Link className="pill pill-primary" href="/author/courses">Open course builder</Link>
          <button className="pill" type="button">Export monthly report</button>
        </div>
      </section>

      <section className="course-grid">
        <article className="card">
          <h3>Total revenue</h3>
          <p className="metric">$12,480</p>
          <p className="muted">+18% vs previous month</p>
        </article>
        <article className="card">
          <h3>Total enrollments</h3>
          <p className="metric">380</p>
          <p className="muted">Across 2 active courses</p>
        </article>
        <article className="card">
          <h3>Average rating</h3>
          <p className="metric">4.8</p>
          <p className="muted">Based on 96 verified reviews</p>
        </article>
      </section>

      <section className="card">
        <h2 className="section-title">Recent courses</h2>
        <div className="grid grid-3">
          {recentCourses.map((course) => (
            <article className="card" key={course.title}>
              <h3>{course.title}</h3>
              <p className="muted">Status: {course.status}</p>
              <p className="muted">Enrollments: {course.enrollments}</p>
              <p className="muted">Completion rate: {course.completionRate}</p>
              <div className="button-row">
                <Link className="pill" href="/author/courses">Edit curriculum</Link>
                <Link className="pill" href="/catalog">View as student</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Recent activity</h2>
        <ul className="list">
          {recentActivity.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
