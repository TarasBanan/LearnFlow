import Link from 'next/link';
import { homeCards } from '@/components/shared/routes';

export function PageGrid() {
  return (
    <section>
      <h2 className="section-title">Quick access</h2>
      <div className="grid grid-3">
        {homeCards.map((page) => (
          <article key={page.href} className="card">
            <h3>{page.title}</h3>
            <p className="muted">{page.description}</p>
            <Link className="pill" href={page.href}>
              Open
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
