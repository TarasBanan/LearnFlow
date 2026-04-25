export type RouteItem = {
  href: string;
  title: string;
  description: string;
};

export const routeItems: RouteItem[] = [
  { href: '/', title: 'Главная', description: 'Hero, категории, FAQ и отзывы' },
  { href: '/catalog', title: 'Каталог курсов', description: 'Фильтры, сортировка и карточки' },
  { href: '/course/react-from-zero', title: 'Страница курса', description: 'Описание курса и покупка' },
  { href: '/learn/react-from-zero/lesson-1', title: 'Плеер урока', description: 'Видео и заметки' },
  { href: '/my-courses', title: 'Мои курсы', description: 'Прогресс по обучению' },
  { href: '/quiz/react-basics', title: 'Тест/Квиз', description: 'Вопросы и таймер' },
  { href: '/certificate/cert-123', title: 'Сертификат', description: 'Просмотр и скачивание PDF' },
  { href: '/author/dashboard', title: 'Кабинет автора', description: 'Метрики и выручка' },
  { href: '/author/courses', title: 'Конструктор курса', description: 'Уроки и настройки курса' },
  { href: '/cart', title: 'Корзина/Оплата', description: 'Заказ и Stripe checkout' }
];
