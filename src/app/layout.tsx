import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// DESIGN_TOKENS.md 2.1 -- Inter is the primary typeface; JetBrains Mono is
// reserved for code / technical snippets (Phase 2 results display).
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: '3 Tests',
  description: 'Find clarity, get unstuck',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
