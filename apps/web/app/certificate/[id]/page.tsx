import Link from 'next/link';

export default function CertificatePage({ params }: { params: { id: string } }) {
  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Certificate</p>
        <h1>Certificate #{params.id}</h1>
        <p className="muted">Completion badge, verification link, and PDF export placeholder.</p>
        <div className="button-row">
          <button className="pill pill-primary" type="button">Download PDF</button>
          <Link className="pill" href={`/certificate/${params.id}?verify=true`}>Verify certificate</Link>
          <Link className="pill" href="/my-courses">Back to my learning</Link>
        </div>
      </section>
    </div>
  );
}
