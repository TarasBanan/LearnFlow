import Link from 'next/link';
import { courses } from '@/lib/courses';
import { PageGrid } from '@/components/ui/PageGrid';

const featuredCourses = courses.slice(0, 3);

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
            <article className="card catalog-card" key={course.slug}>
              <h3>{course.title}</h3>
              <p className="muted">{course.level} · {course.duration} · {course.lessons} lessons</p>
              <p className="muted description-clamp">{course.shortDescription}</p>
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
