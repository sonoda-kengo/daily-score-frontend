const getCategoryBE = async () => {
  const token = '';

  try {
    const res = await fetch('http://127.0.0.1:8000/apiv1/categories', {
      headers: {
        Authorization: `Bearer ${token}`,
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

export default getCategoryBE;
