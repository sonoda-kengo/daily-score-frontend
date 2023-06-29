const getCategoryBE = async () => {
  const res = await fetch('http://127.0.0.1:8000/apiv1/categories');

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = await res.json();
  console.log('test', data);
  return data;
};

export default getCategoryBE;
