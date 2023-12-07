import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session && (
        <div>
          <p>Hello, {session.user && session.user.name}</p>
        </div>
      )}
      <div>Client Page</div>
    </>
  );
}
