import { createContext, useContext, useMemo, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  OAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { storage } from '@/utils';

import auth from '../../firebaseConfig';

type User = { email: string };

type UserData = {
  email: string;
  password: string;
};

type AuthContext = {
  token: string;
  user?: User;
  register: ({ email, password }: UserData) => Promise<void>;
  signIn: ({ email, password }: UserData) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithMicrosoft: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | null>(null);

const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>(() => storage.get('token') || '');
  const [user, setUser] = useState<AuthContext['user']>(() => storage.get('user') || undefined);

  const value = useMemo(
    (): AuthContext => ({
      token,
      user,
      register: async ({ email, password }) => {
        if (!email || !password) {
          console.error('Provide Email and Password');
          return;
        }
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const { uid } = userCredential.user;
          setToken(uid);
          storage.set('token', uid);
          setUser({ email });
          storage.set('user', { email });
        } catch (error) {
          console.error('Error Registering', error);
        }
      },
      signIn: async ({ email, password }) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const { uid } = userCredential.user;
          setToken(uid);
          storage.set('token', uid);
          setUser({ email });
          storage.set('user', { email });
        } catch (error) {
          console.error('Error Signing In', error);
        } finally {
          setUser({ email });
          storage.set('user', { email });
        }
      },
      signInWithGoogle: async () => {
        try {
          const userCredential = await signInWithPopup(auth, googleProvider);
          const { uid } = userCredential.user;
          setToken(uid);
          storage.set('token', uid);
          if (userCredential.user.email) {
            setUser({ email: userCredential.user.email });
            storage.set('user', { email: userCredential.user.email });
          }
        } catch (error) {
          console.error('Error Signing In With Google', error);
        }
      },
      signInWithMicrosoft: async () => {
        try {
          const userCredential = await signInWithPopup(auth, microsoftProvider);
          const credential = OAuthProvider.credentialFromResult(userCredential);
          if (credential) {
            // const accessToken = credential.accessToken;
            const idToken = credential.idToken;
            if (idToken) {
              setToken(idToken);
              storage.set('token', idToken);
            }
            const email = userCredential.user.email;
            if (email) {
              setUser({ email });
              storage.set('user', { email });
            }
          }
        } catch (error) {
          console.error('Error Signing In With Microsoft', error);
        }
      },
      resetPassword: async (email) => {
        try {
          await sendPasswordResetEmail(auth, email);
        } catch (error) {
          console.error('Error Resetting Password', error);
        }
      },
      logout: async () => {
        try {
          await signOut(auth);
          setToken('');
          storage.remove('token');
          setUser(undefined);
          storage.remove('user');
        } catch (error) {
          console.error('Error Logging Out', error);
        }
      },
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);
  if (!context) throw Error('useAuth should be used within <AuthProvider />');
  return context;
};
