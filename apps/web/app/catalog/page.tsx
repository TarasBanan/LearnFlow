import Link from 'next/link';
import { courses } from '@/lib/courses';

export default function CatalogPage() {
  return (
    <div className="stack-lg">
      <section className="card">
        <h1>Course Catalog</h1>
        <p className="muted">Filter courses by topic, level, duration, and rating. Use placeholder filters below.</p>
        <div className="button-row">
          <button className="pill" type="button">Frontend</button>
          <button className="pill" type="button">Backend</button>
          <button className="pill" type="button">Design</button>
          <button className="pill" type="button">Reset filters</button>
        </div>
      </section>

      <section className="grid grid-3">
        {courses.map((course) => (
          <article className="card catalog-card" key={course.slug}>
            <h3>{course.title}</h3>
            <p className="muted">{course.category} · Rating {course.rating} · {course.price}</p>
            <p className="muted description-clamp">{course.shortDescription}</p>
            <div className="button-row card-actions">
              <Link className="pill" href={`/course/${course.slug}`}>
                Open course
              </Link>
              <Link className="pill" href="/cart">
                Add to cart
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
