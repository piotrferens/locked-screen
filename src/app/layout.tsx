import './globals.css';

import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={inter.className}>
      <header className="py-4 px-6 border-t-3 border-t-red border-b border-b-gray-light"></header>
      {children}
    </body>
  </html>
);

export default RootLayout;
