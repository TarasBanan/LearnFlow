'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { getQuizById } from '@/lib/quizzes';

export default function QuizPage({ params }: { params: { quizId: string } }) {
  const quiz = getQuizById(params.quizId);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalQuestions = quiz?.questions.length ?? 0;

  const score = useMemo(() => {
    if (quiz === undefined) {
      return 0;
    }

    let correctCount = 0;
    for (const question of quiz.questions) {
      if (answers[question.id] === question.correctIndex) {
        correctCount += 1;
      }
    }

    return Math.round((correctCount / quiz.questions.length) * 100);
  }, [answers, quiz]);

  function handleSubmit() {
    setIsSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setIsSubmitted(false);
  }

  if (quiz === undefined) {
    return (
      <section className="card">
        <h1>Quiz not found</h1>
        <p className="muted">This quiz is not available yet.</p>
        <Link className="pill" href="/my-courses">Back to My Learning</Link>
      </section>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const isPassed = score >= quiz.passingScore;

  return (
    <div className="stack-lg">
      <section className="card hero-card">
        <p className="eyebrow">Quiz center</p>
        <h1>{quiz.title}</h1>
        <p className="muted">{quiz.description}</p>
        <p className="muted">Duration: {quiz.durationMinutes} min · Passing score: {quiz.passingScore}%</p>
        <p className="muted">Answered: {answeredCount}/{totalQuestions}</p>
        <div className="button-row">
          <button className="pill pill-primary" type="button" onClick={handleSubmit}>Submit answers</button>
          <button className="pill" type="button" onClick={handleReset}>Reset attempt</button>
          <Link className="pill" href="/my-courses">Back to My Learning</Link>
        </div>
      </section>

      {isSubmitted ? (
        <section className="card">
          <h2 className="section-title">Result: {score}%</h2>
          <p className="muted">Status: {isPassed ? 'Passed' : 'Needs improvement'}</p>
        </section>
      ) : null}

      <section className="stack-lg">
        {quiz.questions.map((question) => {
          const selectedAnswer = answers[question.id];
          const showReview = isSubmitted && selectedAnswer !== undefined;
          const isCorrect = selectedAnswer === question.correctIndex;

          return (
            <article className="card" key={question.id}>
              <h3>{question.prompt}</h3>
              <div className="quiz-options">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswer === optionIndex;
                  const reviewClass = showReview ? (optionIndex === question.correctIndex ? 'option-correct' : isSelected ? 'option-wrong' : '') : '';

                  return (
                    <button
                      className={`quiz-option ${isSelected ? 'option-selected' : ''} ${reviewClass}`.trim()}
                      type="button"
                      key={option}
                      onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {isSubmitted && selectedAnswer !== undefined ? (
                <p className="muted">{isCorrect ? 'Correct.' : 'Incorrect.'} {question.explanation}</p>
              ) : null}
            </article>
          );
        })}
      </section>
    </div>
  );
}
