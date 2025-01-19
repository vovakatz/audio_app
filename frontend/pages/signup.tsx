import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const { data } = await api.post('/auth/signup', { email, password });
      localStorage.setItem('token', data.token);
      setSuccessMsg('User created! logging in...');
      setTimeout(() => router.push('/main'), 1500);
    } catch (err: any) {
      setErrorMsg(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div style={{ margin: '2rem auto', maxWidth: 300 }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}