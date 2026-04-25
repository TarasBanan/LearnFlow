'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';

type DraftLesson = {
  id: number;
  title: string;
  duration: string;
};

const initialLessons: DraftLesson[] = [
  { id: 1, title: 'Welcome and course roadmap', duration: '12 min' },
  { id: 2, title: 'Setting up your workspace', duration: '18 min' }
];

export default function AuthorCoursesPage() {
  const [lessons, setLessons] = useState<DraftLesson[]>(initialLessons);
  const [draftTitle, setDraftTitle] = useState('');
  const [publishStatus, setPublishStatus] = useState<'Draft' | 'Published'>('Draft');

  const totalDuration = useMemo(() => {
    return lessons.length * 15;
  }, [lessons.length]);

  function handleAddLesson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedTitle = draftTitle.trim();
    if (trimmedTitle.length === 0) {
      return;
    }

    const nextLesson: DraftLesson = {
      id: lessons.length + 1,
      title: trimmedTitle,
      duration: '15 min'
    };

    setLessons((previousLessons) => [...previousLessons, nextLesson]);
    setDraftTitle('');
  }

  function handlePublishCourse() {
    setPublishStatus('Published');
  }

  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Course builder</p>
        <h1>Build and publish your course</h1>
        <p className="muted">
          Create lessons, track draft progress, and publish when your curriculum is ready.
        </p>
        <div className="button-row">
          <button className="pill pill-primary" type="button" onClick={handlePublishCourse}>Publish course</button>
          <Link className="pill" href="/course/react-from-zero">Preview course page</Link>
        </div>
      </section>

      <section className="card course-grid">
        <div>
          <h2 className="section-title">Course status</h2>
          <p className="muted">Status: <strong>{publishStatus}</strong></p>
          <p className="muted">Lessons in draft: {lessons.length}</p>
          <p className="muted">Estimated total runtime: {totalDuration} minutes</p>
        </div>

        <div>
          <h2 className="section-title">Add lesson</h2>
          <form className="builder-form" onSubmit={handleAddLesson}>
            <input
              className="input"
              value={draftTitle}
              onChange={(event) => setDraftTitle(event.target.value)}
              placeholder="Lesson title"
              aria-label="Lesson title"
            />
            <button className="pill" type="submit">Add lesson</button>
          </form>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Draft curriculum</h2>
        <ul className="list">
          {lessons.map((lesson) => (
            <li key={lesson.id}>{lesson.id}. {lesson.title} · {lesson.duration}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
