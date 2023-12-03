'use client';
import { useSession } from 'next-auth/react';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Home() {
  // const { data: session, status } = useSession();
  const session = await getServerSession(authOptions);

  return (
    <>
      {session && (
        <div>
          <p>{session.access}</p>
        </div>
      )}
      <div>Client Page</div>
    </>
  );
}
