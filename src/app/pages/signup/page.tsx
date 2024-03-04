'use client';

import axios from 'axios';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', { email });
      console.log(response.data); // Response from the server
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
