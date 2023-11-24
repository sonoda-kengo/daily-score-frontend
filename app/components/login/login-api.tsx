export const handleLogin = async (username: string, password: string) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/apiv1/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Store the token in a secure way (e.g., in a cookie or local storage)
      console.log('Token:', data.access);
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};
