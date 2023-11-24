import getCategoryBE from './getBE';

export default async function Page() {
  // Initiate both requests in parallel
  const testData = getCategoryBE();

  // Wait for the promises to resolve
  const [test] = await Promise.all([testData]);
  return (
    <>
      <h1 className='text-4xl font-bold'>{test[0].id}</h1>
      <h1>{test[0].name}</h1>
    </>
  );
}
