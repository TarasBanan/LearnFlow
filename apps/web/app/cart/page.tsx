import { FeaturePanel } from '@/components/ui/FeaturePanel';

export default function CartPage() {
  return (
    <FeaturePanel
      title="Корзина и оплата"
      description="Проверка состава заказа, промокод и оплата через Stripe Checkout."
      actions={[
        { label: 'Применить промокод' },
        { label: 'Оплатить' },
        { label: 'Вернуться в каталог', href: '/catalog' }
      ]}
    />
  );
}
