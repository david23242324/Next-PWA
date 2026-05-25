import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Insultador Colombiano',
  description:
    'Tecnología avanzada en groserías colombianas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className='bg-black text-white antialiased'>
        {children}
      </body>
    </html>
  );
}