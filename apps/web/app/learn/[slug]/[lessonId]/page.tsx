import Link from 'next/link';

export default function LearnPage({ params }: { params: { slug: string; lessonId: string } }) {
  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Lesson player</p>
        <h1>{params.slug.replaceAll('-', ' ')} · {params.lessonId}</h1>
        <p className="muted">Video placeholder, lesson notes, and progress sync are represented with UI stubs.</p>
        <div className="button-row">
          <Link className="pill" href={`/learn/${params.slug}/lesson-0`}>Previous lesson</Link>
          <Link className="pill" href={`/learn/${params.slug}/lesson-2`}>Next lesson</Link>
          <button className="pill pill-primary" type="button">Save notes</button>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Lesson notes (placeholder)</h2>
        <p className="muted">Use this panel for timestamped notes, key concepts, and follow-up tasks.</p>
      </section>
    </div>
  );
}
