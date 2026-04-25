import { FeaturePanel } from '@/components/ui/FeaturePanel';

export default function AuthorDashboardPage() {
  return (
    <FeaturePanel
      title="Кабинет автора"
      description="Метрики продаж, активность студентов и статистика завершения уроков."
      actions={[
        { label: 'Создать курс', href: '/author/courses' },
        { label: 'Экспорт отчета' },
        { label: 'Открыть каталог', href: '/catalog' }
      ]}
    />
  );
}
