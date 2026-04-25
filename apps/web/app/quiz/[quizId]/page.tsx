import Link from 'next/link';

export default function QuizPage({ params }: { params: { quizId: string } }) {
  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Quiz center</p>
        <h1>{params.quizId.replaceAll('-', ' ')}</h1>
        <p className="muted">Timed quiz interface placeholder with attempt summary and score details.</p>
        <div className="button-row">
          <button className="pill" type="button">Start timer</button>
          <button className="pill pill-primary" type="button">Submit answers</button>
          <Link className="pill" href="/catalog">Back to catalog</Link>
        </div>
      </section>
    </div>
  );
}
