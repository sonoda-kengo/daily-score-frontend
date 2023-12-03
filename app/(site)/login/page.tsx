'use client';
// export default LoginPage;
import React from 'react';
import { useSession } from 'next-auth/react';
import { NextPage } from 'next';
import { SigninButton, SignoutButton } from '@/components/button';

const Login: NextPage = () => {
  const { data: session } = useSession();
  console.log('session', session);

  return (
    <>
      {session && (
        <div>
          <h1>Wellcome {session.user && session.user.name}</h1>
          <SignoutButton />
        </div>
      )}
      {!session && (
        <div>
          <p>not signed in yet</p>
          <div>
            <SigninButton />
          </div>
          <div>
            <SignoutButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
