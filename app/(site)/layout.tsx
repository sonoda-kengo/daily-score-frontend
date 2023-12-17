import { Inter } from 'next/font/google';
import DrawerLeft from '@/components/drawer';
import { Providers } from './provider';
import { Grid } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Scoring Your Life App',
  description: 'Generated by kg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className={inter.className} style={{ margin: 0 }}>
        <Grid container>
          <Grid item xs={3}>
            <DrawerLeft />
          </Grid>
          <Grid item xs={9}>
            <Providers>{children}</Providers>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
