/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';

import { Button } from '@/components';
import { useAuth } from '@/context';
import { Link } from '@/router';

export default function Register() {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await auth
      .register({ email, password })
      .then((user) => user)
      .catch((error) => console.error('Error of Register', error));
  };

  return (
    <>
      <h1 className="mb-4 font-mono text-2xl">{`/register`}</h1>
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
        <Button className="" onClick={register} disabled={!email}>
          Register
        </Button>
        <p className="message">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
}
