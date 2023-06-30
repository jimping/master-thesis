import '@/styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head />
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
