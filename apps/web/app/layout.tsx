import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/shared/AppShell';

export const metadata: Metadata = {
  title: 'LearnFlow',
  description: 'EdTech сервис с видеоуроками, тестами и сертификатами',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
