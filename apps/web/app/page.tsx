import { PageGrid } from '@/components/ui/PageGrid';

export default function HomePage() {
  return (
    <div>
      <section className="card">
        <h1>LearnFlow — платформа онлайн-курсов</h1>
        <p className="muted">
          EdTech-сервис с видеолекциями, тестами, сертификатами и прогрессом. Цвета и UI приведены к правилам DESIGN.md
          (светлая тема, Ink Black, Hairline Gray, Rausch для primary CTA).
        </p>
      </section>
      <PageGrid />
    </div>
  );
}
