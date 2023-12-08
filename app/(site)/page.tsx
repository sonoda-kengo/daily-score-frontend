import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Grid, Typography } from '@mui/material';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <Grid>
      {session && (
        <Grid>
          <Typography>Hello, {session.user && session.user.name}</Typography>
        </Grid>
      )}
      <Typography>Client Page</Typography>
    </Grid>
  );
}
