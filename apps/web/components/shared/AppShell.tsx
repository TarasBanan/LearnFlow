import Link from 'next/link';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <header className="top-nav">
        <div>
          <div className="brand">LearnFlow</div>
          <div className="muted">Online learning platform</div>
        </div>
        <nav className="button-row" aria-label="Primary navigation">
          <Link className="pill" href="/">
            Home
          </Link>
          <Link className="pill pill-primary" href="/catalog">
            Explore Courses
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
