// src/context/AuthContext.tsx
'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { login as loginApi, logout as logoutApi, getUserData as getUserDataApi } from '../libs/api'; // Importar as funções da api.ts
import Cookies from 'js-cookie';

interface User {
  col_id: number;
  col_nome: string;
  col_login: string;
}

interface AuthContextType {
  user: User | null;
  login: (col_login: string, col_senha: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Checar se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      getUserDataApi()
        .then((data) => setUser(data))
        .catch(() => setUser(null));
    }
  }, []);

  const login = (col_login: string, col_senha: string) => {
    return loginApi(col_login, col_senha)
      .then((data) => {
        setUser({ col_id: data.col_id, col_nome: data.col_nome, col_login });
      })
      .catch((error) => {
        console.error('Erro ao fazer login', error);
      });
  };

  const logout = () => {
    return logoutApi()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error('Erro ao fazer logout', error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
