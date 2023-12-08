import Link from 'next/link';
import { Grid, Typography } from '@mui/material';

export default function Header() {
  return (
    <Grid>
      <Grid>
        <Link href='/test'>Test</Link>
      </Grid>
      <Grid>
        <Link href='/login'>SignIn</Link>
      </Grid>
    </Grid>
  );
}
