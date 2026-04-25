import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/shared/AppShell';

export const metadata: Metadata = {
  title: 'LearnFlow',
  description: 'EdTech platform with video lessons, quizzes, certificates, and progress tracking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
