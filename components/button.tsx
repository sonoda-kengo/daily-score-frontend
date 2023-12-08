'use client';

import { signIn, signOut } from 'next-auth/react';
import { Button } from '@mui/material';

export const SigninButton = () => {
  return <Button onClick={() => signIn()}>Sign in</Button>;
};

export const SignoutButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
