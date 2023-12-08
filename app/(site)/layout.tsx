import { Inter } from 'next/font/google';
import Header from '@/components/header';
import { Providers } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Scoring Your Life App',
  description: 'Generated by kg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
