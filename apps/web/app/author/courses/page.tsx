import { FeaturePanel } from '@/components/ui/FeaturePanel';

export default function AuthorCoursesPage() {
  return (
    <FeaturePanel
      title="Конструктор курсов"
      description="Создание структуры курса, загрузка уроков и публикация программы."
      actions={[
        { label: 'Добавить урок' },
        { label: 'Предпросмотр курса', href: '/course/react-from-zero' },
        { label: 'Опубликовать курс' }
      ]}
    />
  );
}
