'use client';

import { signIn, signOut } from 'next-auth/react';
import { Button } from '@mui/material';

export const SigninButton = () => {
  return (
    <Button sx={{ color: 'white' }} onClick={() => signIn()}>
      Sign in
    </Button>
  );
};

export const SignoutButton = () => {
  return (
    <Button sx={{ color: 'text.primary', bgcolor: 'gray' }} onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};
