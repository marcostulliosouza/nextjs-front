// src/app/dashboard/page.tsx
'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '../../context/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext)!;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirecionar para o login se não estiver autenticado
    }
  }, [user, router]);

  return (
    <div>
      {user ? (
        <>
          <h1>Bem-vindo, {user.col_nome}</h1>
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <p>Redirecionando para login...</p>
      )}
    </div>
  );
};

export default DashboardPage;
