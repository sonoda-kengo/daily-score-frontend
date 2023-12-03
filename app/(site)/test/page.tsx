import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const getCategory = async () => {
  // const { data: session, status } = useSession({ required: true });
  const session = await getServerSession(authOptions);

  try {
    const res = await fetch('http://127.0.0.1:8000/apiv1/categories', {
      headers: {
        Authorization: `Bearer ${session?.access}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

async function getData() {
  const res = await fetch('https://swapi.dev/api/people/1');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const test = await getData();
  const categories = await getCategory();
  console.log(categories);
  return (
    <>
      <h1 className='text-4xl font-bold'>{test.name}</h1>
      <p className='font-bold'>{categories[0].name}</p>
    </>
  );
}
