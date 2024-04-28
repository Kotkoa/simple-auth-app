import { useState } from 'react';

import { Button } from '@/components';
import { useAuth } from '@/context';
import { Link } from '@/router';

export default function Login() {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    void auth.signIn({ email, password });
  };

  return (
    <>
      <h1 className="mb-4 font-mono text-2xl">/login</h1>
      <form className="login-form flex flex-col gap-4">
        <input
          className="rounded border p-3 text-center"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="rounded border p-3 text-center"
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button onClick={login} disabled={!email}>
          Login
        </Button>
        <p className="message">
          Not registered? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </>
  );
}
