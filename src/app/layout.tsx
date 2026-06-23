// src/app/layout.tsx

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vineeth K Kolarath | Deep-Tech Architect, Researcher & Mentor',
  description: 'Deep-Tech Architect, Researcher & Mentor. Advancing autonomous systems, edge AI, and knowledge economics in innovation ecosystem.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}