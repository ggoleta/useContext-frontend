import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface CredentialsData {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: CredentialsData): Promise<void>;
}

interface AuthState {
  token: string;
  user: object;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [dataAuth, setDataAuth] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Context:token');
    const user = localStorage.getItem('@Context:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      console.log(response.data);
      const { token, user } = response.data;
      console.log(token);
      localStorage.setItem('@Context:token', token);
      localStorage.setItem('@Context:user', JSON.stringify(user));
      setDataAuth({ token, user });
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Rogério', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
