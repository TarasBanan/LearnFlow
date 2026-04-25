import Link from 'next/link';
import { routeItems } from '@/components/shared/routes';

export function PageGrid() {
  return (
    <section>
      <h2 className="section-title">Страницы</h2>
      <div className="grid grid-3">
        {routeItems.map((page) => (
          <article key={page.href} className="card">
            <h3>{page.title}</h3>
            <p className="muted">{page.description}</p>
            <Link className="pill" href={page.href}>
              Открыть
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
