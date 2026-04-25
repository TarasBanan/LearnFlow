import { FeaturePanel } from '@/components/ui/FeaturePanel';

export default function QuizPage({ params }: { params: { quizId: string } }) {
  return (
    <FeaturePanel
      title={`Квиз: ${params.quizId}`}
      description="Вопросы с вариантами ответов, таймер и подсчет результата."
      actions={[
        { label: 'Запустить таймер' },
        { label: 'Отправить ответы' },
        { label: 'Вернуться к курсу', href: '/course/react-from-zero' }
      ]}
    />
  );
}
