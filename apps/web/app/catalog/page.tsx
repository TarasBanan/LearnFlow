import { FeaturePanel } from '@/components/ui/FeaturePanel';

export default function CatalogPage() {
  return (
    <FeaturePanel
      title="Каталог курсов"
      description="Фильтры по теме, уровню, цене и рейтингу. Сетка карточек курса в стиле DESIGN.md."
      actions={[
        { label: 'Frontend', href: '/catalog?category=frontend' },
        { label: 'Backend', href: '/catalog?category=backend' },
        { label: 'Сбросить фильтр' }
      ]}
    />
  );
}
