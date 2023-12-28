'use client';

import { Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React from 'react';
import { SigninButton, SignoutButton } from '@/components/button';

const Login: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Grid>
      {session && (
        <Grid>
          <Typography variant='h5'>Wellcome {session.user && session.user.name}</Typography>
          <SignoutButton />
        </Grid>
      )}
      {!session && (
        <Grid>
          <Typography>not signed in yet</Typography>
          <Grid>
            <SigninButton />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
