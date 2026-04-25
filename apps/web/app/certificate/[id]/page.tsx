import { FeaturePanel } from '@/components/ui/FeaturePanel';

export default function CertificatePage({ params }: { params: { id: string } }) {
  return (
    <FeaturePanel
      title={`Сертификат: ${params.id}`}
      description="Просмотр сертификата и экспорт в PDF после завершения курса."
      actions={[
        { label: 'Скачать PDF' },
        { label: 'Проверить сертификат', href: `/certificate/${params.id}?verify=true` },
        { label: 'Вернуться в мои курсы', href: '/my-courses' }
      ]}
    />
  );
}
