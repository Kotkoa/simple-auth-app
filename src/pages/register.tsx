import { useState } from 'react';

import { Button } from '@/components';
import { useAuth } from '@/context';
import { Google } from '@/icons/google';
import { Microsoft } from '@/icons/microsoft';
import { Link } from '@/router';

export default function Register() {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const register = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    void auth.register({ email, password });
  };

  const loginWithGoogle = () => void auth.signInWithGoogle();

  const loginWithMicrosoft = () => void auth.signInWithMicrosoft();

  return (
    <>
      <h1 className="mb-4 font-mono text-2xl">{`/register`}</h1>
      <div className="max-w-sm px-6 sm:px-0">
        <Button
          type="button"
          className="mb-4 mr-2  inline-flex w-full items-center justify-between rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
          onClick={loginWithGoogle}
        >
          <Google className="-ml-1 mr-2 h-4 w-4" />
          Sign up with Google<div></div>
        </Button>
        <Button
          type="button"
          className="mb-4 mr-2  inline-flex w-full items-center justify-between rounded-lg bg-gray-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-400/90 focus:outline-none focus:ring-4 focus:ring-gray-400/50"
          onClick={loginWithMicrosoft}
        >
          <Microsoft className="-ml-1 mr-2 h-4 w-4 fill-white" />
          Sign up with Microsoft<div></div>
        </Button>
      </div>
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
          Already registered?{' '}
          <Link to="/login" onClick={auth.clearError}>
            Login
          </Link>
        </p>
      </form>
      {auth.error && <p className="text-base text-red-600">{auth.error}</p>}
    </>
  );
}
