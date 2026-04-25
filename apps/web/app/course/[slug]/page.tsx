import { FeaturePanel } from '@/components/ui/FeaturePanel';

export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <FeaturePanel
      title={`Курс: ${params.slug}`}
      description="Описание программы, блок отзывов, кнопка покупки и список уроков."
      actions={[
        { label: 'Купить курс' },
        { label: 'Перейти в корзину', href: '/cart' },
        { label: 'Начать урок', href: `/learn/${params.slug}/lesson-1` }
      ]}
    />
  );
}
