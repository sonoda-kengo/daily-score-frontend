'use client';
import { useState } from 'react';
import { handleLogin } from './login-api';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    await handleLogin(username, password);
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border rounded bg-gray-500 px-3 m-2'
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border rounded bg-gray-500 px-3 m-2'
          />
        </label>
        <br />
        <button type='button' onClick={handleLoginClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
