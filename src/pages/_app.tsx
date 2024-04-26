/* eslint-disable @typescript-eslint/no-misused-promises */
import '@/styles/layers.css';

import { Outlet } from 'react-router-dom';

import { Redirects } from '@/config';
import { useAuth } from '@/context';
import { Link } from '@/router';

export default function App() {
  const auth = useAuth();

  const logout = () => auth.logout();

  return (
    <div className="flex min-h-screen flex-col bg-lime-100 p-6 text-default">
      <header className="flex items-center justify-between">
        {auth.token ? (
          <nav className="flex items-center gap-4 font-mono">
            <Link className="p-2 hover:underline" to="/">
              /home
            </Link>
            <Link className="p-2 hover:underline" to="/orders">
              /orders
            </Link>
            <Link className="p-2 hover:underline" to="/login" onClick={logout}>
              logout
            </Link>
          </nav>
        ) : null}
        {auth.token ? <span className="opacity-50">🔒</span> : null}
      </header>

      <main className="flex flex-1 flex-col items-center justify-center ">
        <div className="relative mx-auto mt-24 min-w-96 max-w-fit border border-gray-50 bg-white p-11 text-center shadow-lg">
          <Redirects>
            <Outlet />
          </Redirects>
        </div>
      </main>
    </div>
  );
}
