import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface CredentialsData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: CredentialsData): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: object;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Context:token');
    const user = localStorage.getItem('@Context:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data.user;
    localStorage.setItem('@Context:token', token);
    localStorage.setItem('@Context:user', JSON.stringify(user));
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Context:token');
    localStorage.removeItem('@Context:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
