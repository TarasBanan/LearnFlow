import Link from 'next/link';
import { courses } from '@/lib/courses';
import { quizzes } from '@/lib/quizzes';

type EnrolledCourse = {
  slug: string;
  progress: number;
  nextLesson: string;
  lastActivity: string;
};

const enrolled: EnrolledCourse[] = [
  { slug: 'react-from-zero', progress: 62, nextLesson: 'lesson-9', lastActivity: '2 hours ago' },
  { slug: 'node-api-architecture', progress: 28, nextLesson: 'lesson-4', lastActivity: 'Yesterday' }
];

export default function MyCoursesPage() {
  const completedCourses = enrolled.filter((course) => course.progress === 100).length;

  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Learning hub</p>
        <h1>My Learning</h1>
        <p className="muted">Track your active courses, continue from your exact lesson, and complete quiz checkpoints.</p>
        <div className="course-grid">
          <div className="card">
            <h3>Active enrollments</h3>
            <p className="metric">{enrolled.length}</p>
          </div>
          <div className="card">
            <h3>Completed courses</h3>
            <p className="metric">{completedCourses}</p>
          </div>
          <div className="card">
            <h3>Available quizzes</h3>
            <p className="metric">{quizzes.length}</p>
          </div>
        </div>
      </section>

      <section className="grid grid-3">
        {enrolled.map((courseProgress) => {
          const course = courses.find((item) => item.slug === courseProgress.slug);
          const title = course?.title ?? courseProgress.slug;

          return (
            <article className="card catalog-card" key={courseProgress.slug}>
              <h3>{title}</h3>
              <p className="muted">Last activity: {courseProgress.lastActivity}</p>
              <div className="progress-track">
                <div className="progress-value" style={{ width: `${courseProgress.progress}%` }} />
              </div>
              <p className="muted">Progress: {courseProgress.progress}%</p>
              <div className="button-row card-actions">
                <Link className="pill pill-primary" href={`/learn/${courseProgress.slug}/${courseProgress.nextLesson}`}>Continue</Link>
                <Link className="pill" href={`/course/${courseProgress.slug}`}>Course details</Link>
                <Link className="pill" href="/certificate/cert-123">Certificate</Link>
              </div>
            </article>
          );
        })}
      </section>

      <section className="card">
        <h2 className="section-title">Quiz checkpoints</h2>
        <div className="grid grid-3">
          {quizzes.map((quiz) => (
            <article className="card" key={quiz.id}>
              <h3>{quiz.title}</h3>
              <p className="muted">{quiz.description}</p>
              <p className="muted">Duration: {quiz.durationMinutes} min · Pass: {quiz.passingScore}%</p>
              <Link className="pill" href={`/quiz/${quiz.id}`}>Start quiz</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
