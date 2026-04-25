import Link from 'next/link';

const catalogCourses = [
  {
    slug: 'react-from-zero',
    title: 'React from Zero to Production',
    category: 'Frontend',
    price: '$79',
    rating: '4.8'
  },
  {
    slug: 'node-api-architecture',
    title: 'Node.js API Architecture',
    category: 'Backend',
    price: '$89',
    rating: '4.7'
  },
  {
    slug: 'postgres-for-apps',
    title: 'PostgreSQL for Product Apps',
    category: 'Database',
    price: '$69',
    rating: '4.9'
  },
  {
    slug: 'product-design-systems',
    title: 'Product Design Systems',
    category: 'Design',
    price: '$59',
    rating: '4.6'
  }
];

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
        {catalogCourses.map((course) => (
          <article className="card" key={course.slug}>
            <h3>{course.title}</h3>
            <p className="muted">{course.category} · Rating {course.rating} · {course.price}</p>
            <p className="muted">Project-based curriculum with milestones and review quizzes.</p>
            <div className="button-row">
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
