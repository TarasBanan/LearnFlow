import { FeaturePanel } from '@/components/ui/FeaturePanel';

export default function MyCoursesPage() {
  return (
    <FeaturePanel
      title="Мои курсы"
      description="Список купленных курсов, общий прогресс и быстрый переход к продолжению урока."
      actions={[
        { label: 'Продолжить React', href: '/learn/react-from-zero/lesson-1' },
        { label: 'Скачать сертификат', href: '/certificate/cert-123' },
        { label: 'Оставить отзыв' }
      ]}
    />
  );
}
