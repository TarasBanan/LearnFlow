export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Quiz = {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  passingScore: number;
  questions: QuizQuestion[];
};

export const quizzes: Quiz[] = [
  {
    id: 'react-basics',
    title: 'React Basics Checkpoint',
    description: 'Validate your understanding of components, state, rendering flow, and hooks fundamentals.',
    durationMinutes: 12,
    passingScore: 70,
    questions: [
      {
        id: 'rb-1',
        prompt: 'What triggers a React component re-render?',
        options: ['Any local variable mutation', 'State or props change', 'CSS class update only', 'Calling console.log'],
        correctIndex: 1,
        explanation: 'React re-renders when state changes, props change, or parent rendering causes reconciliation.'
      },
      {
        id: 'rb-2',
        prompt: 'Which hook is designed for side effects such as API calls?',
        options: ['useMemo', 'useRef', 'useEffect', 'useId'],
        correctIndex: 2,
        explanation: 'useEffect is the correct hook for side effects and subscriptions.'
      },
      {
        id: 'rb-3',
        prompt: 'Why should list elements have stable keys?',
        options: ['To improve CSS rendering', 'To help React track item identity', 'To avoid TypeScript errors', 'To speed up network requests'],
        correctIndex: 1,
        explanation: 'Keys let React identify which items changed, preventing incorrect DOM reuse.'
      }
    ]
  },
  {
    id: 'api-design',
    title: 'API Design Essentials',
    description: 'Measure your backend API design skills around validation, status codes, and resource modeling.',
    durationMinutes: 15,
    passingScore: 75,
    questions: [
      {
        id: 'ad-1',
        prompt: 'Which status code is most appropriate when creating a new resource succeeds?',
        options: ['200 OK', '201 Created', '204 No Content', '304 Not Modified'],
        correctIndex: 1,
        explanation: '201 Created is intended for successful resource creation operations.'
      },
      {
        id: 'ad-2',
        prompt: 'What is the primary purpose of request validation at API boundary?',
        options: ['Reduce CSS bundle size', 'Prevent untrusted input entering domain logic', 'Increase image quality', 'Auto-generate database migrations'],
        correctIndex: 1,
        explanation: 'Boundary validation protects the service layer from malformed or unsafe payloads.'
      },
      {
        id: 'ad-3',
        prompt: 'For paginated collection endpoints, which pair is most common?',
        options: ['skip and limit', 'token and hash only', 'post and put', 'schema and css'],
        correctIndex: 0,
        explanation: 'skip/limit (or offset/limit) is a common pagination strategy.'
      },
      {
        id: 'ad-4',
        prompt: 'What should API error responses include to help clients recover?',
        options: ['Only stack traces', 'Human-readable message and machine-readable error code', 'Compiled frontend assets', 'Random UUID only'],
        correctIndex: 1,
        explanation: 'Clear message + stable code provides actionable and programmatic handling.'
      }
    ]
  }
];

export function getQuizById(quizId: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === quizId);
}
