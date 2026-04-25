import { FeaturePanel } from '@/components/ui/FeaturePanel';

export default function LearnPage({ params }: { params: { slug: string; lessonId: string } }) {
  return (
    <FeaturePanel
      title={`Плеер урока: ${params.lessonId}`}
      description={`Курс ${params.slug}: видео, навигация по урокам, заметки и сохранение прогресса.`}
      actions={[
        { label: 'Предыдущий урок', href: `/learn/${params.slug}/lesson-0` },
        { label: 'Следующий урок', href: `/learn/${params.slug}/lesson-2` },
        { label: 'Сохранить заметку' }
      ]}
    />
  );
}
