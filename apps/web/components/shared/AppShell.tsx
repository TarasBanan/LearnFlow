import Link from 'next/link';
import { routeItems } from '@/components/shared/routes';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <header className="top-nav">
        <div>
          <div className="brand">LearnFlow</div>
          <div className="muted">Платформа онлайн-курсов</div>
        </div>
        <nav className="button-row" aria-label="Основная навигация">
          {routeItems.map((item) => (
            <Link className="pill" key={item.href} href={item.href}>
              {item.title}
            </Link>
          ))}
          <button type="button" className="pill pill-primary">Начать обучение</button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
